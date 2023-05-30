import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Layout, ProductDetailsLayout, NextPageWithLayout } from '@components/templates';
import { Product } from '@components/organisms';
import { useRouter } from 'next/router';


type DataProps = {
    product: Product
    related_products: Product[]
}

const ProductDetails: NextPageWithLayout = () => {
    const router = useRouter();
    const { productId } = router.query;

    const [data, setData] = React.useState<DataProps>({
        product: {} as Product,
        related_products: []
    });

    const fetchProducts = async () => {
        try {
            const response = await fetch("/api/products");
            const products = await response.json();
            const product = products.find((p: Product) => p.id.toString() === productId);
            const relatedProducts = products.filter((p: Product) => p.category === product.category);
            const relatedProductsLimited = relatedProducts.filter((p: Product) => p.id !== product.id).slice(0, 4);

            setData(prevData => ({
                ...prevData,
                product,
                related_products: relatedProductsLimited,
            }));
        } catch (error) {
            console.error("Error fetching banners:", error);
        }
    }

    // Populate data froom API
    React.useEffect(() => {
        fetchProducts();
    }, [productId]);

    return (
        <>
            <Head>
                <title>KIDSrUS</title>
            </Head>
            <ProductDetailsLayout product={data.product} related_products={data.related_products} />
        </>

    );
};

ProductDetails.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {

        },
    };
};

export default ProductDetails;
