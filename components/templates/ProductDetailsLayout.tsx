import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';
import { PageTitle } from '@components/molecules';
import { DescriptionTabs, Product, ProductDescription, ProductImage, ProductList } from '@components/organisms';
import underlinedImage from '@assets/images/underlined.png';

type ProductDetailsLayoutProps = {
    product: Product,
    related_products: Product[]
}

const ProductDetailsLayout: React.FC<ProductDetailsLayoutProps> = ({ product, related_products }) => {
    return (
        <Container>
            <PageTitle product={product} />

            <Grid container sx={{
                marginTop: 4
            }}>
                <Grid item xs={5} sx={{}}>
                    <ProductImage product={product} />
                </Grid>
                <Grid item xs={7} sx={{}}>
                    <ProductDescription product={product} />
                </Grid>
            </Grid>

            <Grid container sx={{
                marginTop: 20,
                marginBottom: 15
            }}>
                <Grid item xs={12} sx={{}}>
                    <DescriptionTabs product={product} />
                </Grid>
            </Grid>

            {related_products && related_products.length > 1 && (
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
                                Related Products
                            </Typography>
                            <Image src={underlinedImage} alt="Underlined" />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <ProductList products={related_products} />
                    </Grid>
                </Grid>
            )}
        </Container>
    )
}

export default ProductDetailsLayout;
