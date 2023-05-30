import React from "react";
import { Box, Typography } from "@mui/material";
import { Category } from "./Categories";
import { useRouter } from "next/router";


type CategoryListProps = {
    categories: Category[]
    categoryCounts: { [key: string]: number }
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, categoryCounts }) => {
    const router = useRouter();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            margin: "50px 0 30px 0"
        }}>
            <Typography variant="h3" sx={{
                fontFamily: "'Francois One', sans-serif",
                fontSize: '26px',
                fontWeight: '400',
                lineHeight: '48px',
                color: '#486683',
                textTransform: 'uppercase',
            }}>
                Categories
            </Typography>

            <Box sx={{
                border: '1px dashed #CCC',
                padding: '20px 0 40px 0',
                margin: '20px 0 0 0'
            }}>
                {
                    categories.map((category) => (
                        <Box key={category.id} sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: 2,
                            padding: '10px 0 10px 20px',
                            cursor: 'pointer',
                            borderBottom: '1px solid #CCC',
                            margin: '0 15px'
                        }}
                            onClick={() => router.push('/?category=' + category.keys, undefined, { scroll: false })}>
                            <Typography variant="h6" sx={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#486683',
                            }}>
                                {category.name as string}
                            </Typography>
                            <Typography variant="h6" sx={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#486683',
                            }}>
                                {category.keys.reduce((sum, key) => sum + categoryCounts[key], 0) || ''}
                            </Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default CategoryList;
