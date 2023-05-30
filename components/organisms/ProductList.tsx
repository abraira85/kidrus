import React from "react";
import { Box } from "@mui/material";
import { ProductCard } from "@components/molecules";

export type Product = {
    id: number,
    sku: string,
    name: string,
    description: string,
    category: string,
    price: number,
    sold: number,
    rating: number,
    image: string,
    images: string[],
    tags: string[],
    stock: number,
    additional_info: string,
    reviews: string
}

type ProductListProps = {
    products?: Product[],
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: 2,
            margin: "0 0 0 45px"
        }}>
            {products && products.map((product) => {
                return (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        stock={product.stock}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        images={product.images}
                    />
                )
            })}
        </Box>
    )
}

export default ProductList;
