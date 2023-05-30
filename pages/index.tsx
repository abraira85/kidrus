import React from 'react';
import Head from 'next/head';
import { Layout, SearchResultLayout, NextPageWithLayout } from '@components/templates';
import { Banner, Category, InstagramImage, Product } from '@components/organisms';
import { useRouter } from 'next/router';


type HomePageProps = {}

type DataProps = {
    instagram_images: InstagramImage[],
    main_categories: Category[],
    categories: Category[],
    banners: Banner[]
    products: Product[]
}

const Homepage: NextPageWithLayout<HomePageProps> = () => {
    const router = useRouter();
    const { category } = router.query;

    const [categoriesSelected, setCategoriesSelected] = React.useState<string[]>();

    const [data, setData] = React.useState<DataProps>({
        instagram_images: [],
        main_categories: [],
        categories: [],
        banners: [],
        products: []
    });

    const fetchBanners = async () => {
        try {
            const response = await fetch("/api/banners");
            const banners = await response.json();
            setData(prevData => ({
                ...prevData,
                banners,
            }));
        } catch (error) {
            console.error("Error fetching banners:", error);
        }
    }

    const fetchCategories = async () => {
        try {
            const response = await fetch("/api/categories");
            const categories = await response.json();
            setData(prevData => ({
                ...prevData,
                categories,
            }));
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    const fetchMainCategories = async () => {
        try {
            const response = await fetch("/api/main_categories");
            const main_categories = await response.json();
            setData(prevData => ({
                ...prevData,
                main_categories,
            }));
        } catch (error) {
            console.error("Error fetching main categories:", error);
        }
    }

    const fetchInstagramImages = async () => {
        try {
            const response = await fetch("/api/instagram_images");
            const instagram_images = await response.json();
            setData(prevData => ({
                ...prevData,
                instagram_images,
            }));
        } catch (error) {
            console.error("Error fetching instagram images:", error);
        }
    }

    const fetchProducts = async () => {
        try {
            const response = await fetch("/api/products");
            const products = await response.json();
            setData(prevData => ({
                ...prevData,
                products,
            }));
        } catch (error) {
            console.error("Error fetching banners:", error);
        }
    }

    // Populate data froom API
    React.useEffect(() => {
        fetchInstagramImages();
        fetchCategories();
        fetchMainCategories();
        fetchBanners();
        fetchProducts();
    }, []);

    React.useEffect(() => {
        let categories: string[] = []

        if (typeof category === "string") {
            categories = category.split(',');
        }

        if (categories && categories.length > 0) {
            setCategoriesSelected(categories);
        }
    }, [category])


    return (
        <>
            <Head>
                <title>KIDSrUS</title>
            </Head>

            <SearchResultLayout
                categoriesSelected={categoriesSelected}
                setCategoriesSelected={setCategoriesSelected}
                banners={data.banners}
                main_categories={data.main_categories}
                categories={data.categories}
                instagram_images={data.instagram_images}
                products={data.products} />
        </>
    );
};

Homepage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout selected='home'>
            {page}
        </Layout>
    );
};

export default Homepage;
