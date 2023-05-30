import React from "react";
import Image from 'next/image';
import { Box } from "@mui/material";
import underlinedImage from '@assets/images/underlined.png';
import Link from "next/link";

type HeaderMenuProps = {
    selected?: string
}

const headerElements = [
    {
        key: 'home',
        name: "Home",
        link: "/"
    },
    {
        key: 'shop',
        name: "Shop Features",
        link: "/shop"
    },
    {
        key: 'clothes',
        name: "Clothes",
        link: "/clothes"
    },
    {
        key: 'pages',
        name: "Pages",
        link: "/pages"
    },
    {
        key: 'shortcodes',
        name: "Shortcodes",
        link: "/shortcodes"
    },
    {
        key: 'post_types',
        name: "Post Types",
        link: "/post_types"
    }
]

const HeaderMenu: React.FC<HeaderMenuProps> = ({ selected }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            {
                headerElements.map((item, index) => (
                    <Box key={index} sx={{
                        padding: '0 15px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        '& a': {
                            fontFamily: "'Francois One', sans-serif",
                            fontSize: '16px',
                            fontWeight: 'normal',
                            color: '#486683',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            '&:hover': {
                                color: '#E5745D'
                            }
                        },
                        '& a + img': {
                            display: selected === item.key ? 'block' : 'none',
                            position: 'absolute',
                            bottom: '-10px',
                        },
                        '& a:hover + img': {
                            display: 'block'
                        },
                    }}>
                        <Link href={item.link}>{item.name}</Link>
                        <Image src={underlinedImage} alt="Underlined" />
                    </Box>
                ))
            }
        </Box >
    )
}

export default HeaderMenu;
