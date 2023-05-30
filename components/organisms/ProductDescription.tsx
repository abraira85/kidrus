import React from "react";
import { Box, Button, FormGroup, Grid, Rating, TextField, Typography } from "@mui/material";
import { Product } from "@components/organisms";
import Link from "next/link";
import { CATEGORIES } from "@components/molecules";


type ProductDescriptionProps = {
    product: Product
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
    const [addedTooCar, setAddToCar] = React.useState<boolean>(false);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            padding: '20px 20px'
        }}>
            <Typography variant="h4" sx={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '48px',
                textTransform: 'uppercase',
                color: '#486683',
                padding: '10px 0'
            }}>
                {product.price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </Typography>
            {product.rating && (
                <Rating name="read-only" value={product.rating} size="small" readOnly />
            )}
            <Typography component="span" sx={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: '400',
                color: '#486683',
                padding: '30px 0'
            }}>
                {product.description}
            </Typography>

            <FormGroup sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap"
            }}>
                <TextField type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} size="small" value={1} sx={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '14px',
                    lineHeight: '16px',
                    fontWeight: '600',
                    textAlign: 'center',
                    backgroundColor: "#fff",
                    width: '80px',
                    color: '#E5745D',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                    }
                }} />
                <Button
                    onClick={() => setAddToCar(true)}
                    sx={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontSize: '14px',
                        lineHeight: '16px',
                        fontWeight: '600',
                        textAlign: 'center',
                        padding: '10px 20px',
                        border: '2px dashed #fff',
                        outline: '5px solid #E5745D',
                        backgroundColor: "#E5745D !important",
                        color: '#FFF',
                        borderRadius: 0,
                        minWidth: 33,
                        height: 33,
                        margin: '4px 0 0 0'
                    }}>
                    Add to Cart
                </Button>
            </FormGroup>
            <Box sx={{
                height: '80px',
            }}>
                {
                    addedTooCar && (
                        <Typography variant="h5" sx={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: '400',
                            color: '#486683',
                            padding: '30px 0',
                            'a': {
                                color: '#E5745D',
                                textDecoration: 'none',
                            }
                        }}>
                            {'Product Added '}
                            <Link href={"#"}>
                                Browse Wishlist
                            </Link>
                        </Typography>
                    )
                }
            </Box>
            <Box sx={{
                border: "1px dashed #CCC",
                padding: "10px 20px"
            }}>
                <Grid container sx={{
                    padding: '10px 0',
                    borderBottom: '1px solid #CCC'
                }}>
                    <Grid item xs={4}>
                        <Typography variant="h4" sx={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: '700',
                            color: '#486683',
                        }}>
                            SKU:
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5" sx={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: '400',
                            color: '#486683',
                        }}>
                            {product.sku}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{
                    padding: '10px 0',
                    borderBottom: '1px solid #CCC'
                }}>
                    <Grid item xs={4}>
                        <Typography variant="h4" sx={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: '700',
                            color: '#486683',
                        }}>
                            Category:
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5" sx={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: '400',
                            color: '#486683',
                        }}>
                            {CATEGORIES[product.category]}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{
                    padding: '10px 0',
                }}>
                    <Grid item xs={4}>
                        <Typography variant="h4" sx={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: '700',
                            color: '#486683',
                        }}>
                            Tags:
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5" sx={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: '400',
                            color: '#486683',
                        }}>
                            {product.tags?.join(', ')}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ProductDescription;
