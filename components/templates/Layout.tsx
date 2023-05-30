import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box } from "@mui/material";
import { LayoutProps } from '@components/templates';
import { TextPromoBanner, PromoBanner, Logo } from "@components/atoms";
import { Footer } from "@components/organisms";
import { randomValueFromArray } from '@utils/helpers';
import { HeaderMenu } from '@components/molecules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';

type DataProps = {
    promo_banners: PromoBanner[],
}

const Layout: React.FC<LayoutProps> = ({ children, selected }) => {
    const [data, setData] = React.useState<DataProps>({
        promo_banners: [],
    });

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/promo_banners");
            const promo_banners = await response.json();
            setData(prevData => ({
                ...prevData,
                promo_banners,
            }));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const randomPromoBanner = randomValueFromArray(data.promo_banners)

    if (!data) {
        return null;
    }


    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
            </Head>

            {randomPromoBanner && <TextPromoBanner text={randomPromoBanner?.text} />}

            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
            }}>
                <Link href='/'>
                    <Logo />
                </Link>

                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 3,
                    margin: '30px 0 0 0',
                }}>
                    <HeaderMenu selected={selected} />
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 3,
                        margin: '0 0 0px 10px'
                    }}>
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon icon={faCartShopping} />
                        <FontAwesomeIcon icon={faSearch} />
                    </Box>
                </Box>
            </Box>

            {children}

            <Footer />
        </>
    );
};

export default Layout;
