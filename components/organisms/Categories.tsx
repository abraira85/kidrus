import React from "react";
import Image from 'next/image';
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export type Category = {
    id: string,
    keys: string[],
    src: string,
    name: string,
}

type CategoriesProps = {
    categories: Category[]
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
    const router = useRouter();

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            border: '1px dashed #ccc',
            gap: 10,
            padding: '50px',
            margin: '40px 0'
        }}>
            {
                categories.map((category) => (
                    <Box key={category.id} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                        cursor: 'pointer',
                    }}
                        onClick={() => router.push('/?category=' + category.keys, undefined, { scroll: false })}>
                        <Image src={category.src} alt={category.name} width={180} height={200} />
                        <Typography variant="h6" sx={{
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#486683'
                        }}>
                            {category.name}
                        </Typography>
                    </Box>
                ))
            }
        </Box >
    )
}

export default Categories;
