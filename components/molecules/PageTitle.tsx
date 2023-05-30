import React from "react";
import { Box, Typography } from "@mui/material";
import { Product } from "@components/organisms";
import Link from "next/link";
import { CATEGORIES } from "./ProductCard";


type PageTitleProps = {
    product: Product
}

const PageTitle: React.FC<PageTitleProps> = ({ product }) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px dashed #CCC",
            padding: "40px",
            margin: "20px 0"
        }}>
            <Typography variant="h1" sx={{
                fontFamily: "'Gilda Display', sans-serif",
                fontSize: '32px',
                lineHeight: '48px',
                fontWeight: '400',
                color: '#486683',
            }}>
                {product?.name}
            </Typography>
            <Typography variant="h1" sx={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '16px',
                lineHeight: '48px',
                fontWeight: '600',
                color: '#486683',
                'a': {
                    color: '#E5745D',
                    textDecoration: 'none',
                }
            }}>
                {'Home : '}
                <Link href={"/?category=" + product.category}>
                    {CATEGORIES[product.category]}
                </Link>
                {' : ' + product.name}

            </Typography>
        </Box>
    )
}

export default PageTitle;
