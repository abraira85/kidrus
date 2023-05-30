import React from "react";
import Image from "next/image";
import { Banner, Banners, BestSellers, Categories, Category, CategoryList, InstagramGallery, InstagramImage, Newsletters } from "@components/organisms";
import { Box, Container, Grid, Typography } from "@mui/material";
import { SearchField } from "@components/atoms";
import { Product, ProductList } from "@components/organisms";
import underlinedImage from '@assets/images/underlined.png';

type SearchResultLayoutProps = {
    categoriesSelected?: string[]
    setCategoriesSelected: (keys: string[]) => void
    banners: Banner[]
    instagram_images: InstagramImage[]
    main_categories: Category[],
    categories: Category[],
    products?: Product[]
}

const SearchResultLayout: React.FC<SearchResultLayoutProps> = ({ categoriesSelected, banners, instagram_images, main_categories, categories, products }) => {
    const [categoryCounts, setCategoryCounts] = React.useState<{ [key: string]: number }>({});
    const [prods, setProds] = React.useState<Product[]>([]);
    const [bestSellers, setBestSellers] = React.useState<Product[]>([]);


    React.useEffect(() => {
        if (products && products.length > 0) {
            if (categoriesSelected && categoriesSelected.length > 0) {
                const filteredProducts = products.filter(
                    (product) => categoriesSelected.includes(product.category)
                );
                setProds(filteredProducts);
            } else {
                const shuffledProducts = products.sort(() => Math.random() - 0.5);
                const randomProducts = shuffledProducts.slice(0, 9);
                setProds(randomProducts);
            }
        }

        const getCategoryCounts = (products: Product[]) => {
            const counts: { [key: string]: number } = {};

            products.forEach((product) => {
                if (counts[product.category]) {
                    counts[product.category] += 1;
                } else {
                    counts[product.category] = 1;
                }
            });

            return counts;
        };

        const updateCategoryCounts = () => {
            if (products) {
                const counts = getCategoryCounts(products);
                setCategoryCounts(counts);
            }
        };

        const getBestSellers = (products: Product[]) => {
            const sortedProducts = products.sort((a, b) => b.sold - a.sold);
            const bestSellers = sortedProducts.slice(0, 4);
            return bestSellers;
        };

        const updateBestSellers = () => {
            if (products) {
                const sellers = getBestSellers(products);
                setBestSellers(sellers);
            }
        };

        updateCategoryCounts();
        updateBestSellers();

    }, [products, categoriesSelected]);

    return (
        <Container>
            <Banners images={banners} />
            <Categories categories={main_categories} />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                        marginTop: 10
                    }}>
                        <Typography variant="h2" sx={{
                            fontFamily: "'Francois One', sans-serif",
                            fontSize: '32px',
                            fontWeight: '400',
                            textTransform: 'uppercase',
                            color: '#486683'
                        }}>
                            New Arrivals
                        </Typography>
                        <Image src={underlinedImage} alt="Underlined" />
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{
                    marginTop: 2
                }}>
                    <SearchField />
                    <CategoryList categories={categories} categoryCounts={categoryCounts} />
                    <BestSellers products={bestSellers} />
                    <Newsletters />
                </Grid>
                <Grid item xs={9} sx={{
                    marginTop: 2
                }}>
                    <ProductList products={prods} />
                </Grid>
            </Grid>

            <InstagramGallery images={instagram_images} />
        </Container>
    )
}

export default SearchResultLayout;
