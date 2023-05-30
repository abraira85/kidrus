import React from "react";
import { Avatar, Box, Rating, Typography } from "@mui/material";
import { Product } from "./ProductList";
import { useRouter } from "next/router";


type BestSellersProps = {
    products: Product[]
}

const BestSellers: React.FC<BestSellersProps> = ({ products }) => {
    const router = useRouter();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            margin: "20px 0 50px 0"
        }}>
            <Typography variant="h3" sx={{
                fontFamily: "'Francois One', sans-serif",
                fontSize: '26px',
                fontWeight: '400',
                lineHeight: '48px',
                color: '#486683',
                textTransform: 'uppercase',
            }}>
                Best Sellers
            </Typography>

            <Box sx={{
                border: '1px dashed #CCC',
                padding: '20px 0 40px 0',
                margin: '20px 0 0 0'
            }}>
                {
                    products.map((product) => (
                        <Box
                            key={product.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 2,
                                padding: '10px 0 10px 10px',
                                cursor: 'pointer',
                                margin: '0 15px'
                            }}
                            onClick={() => router.push('/details/' + product.id)} >
                            <Avatar
                                alt="Remy Sharp"
                                src={product.image}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Typography variant="h6" sx={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#486683',
                                }}>
                                    {product.name}
                                </Typography>
                                <Rating name="read-only" value={product.rating} size="small" readOnly />
                                <Typography variant="h6" sx={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#486683',
                                }}>
                                    {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                </Typography>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default BestSellers;
