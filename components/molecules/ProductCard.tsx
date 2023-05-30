import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";

type ProductCardProps = {
    id: number,
    name: string,
    category: string,
    price: number,
    images: string[],
    stock: number,
}

export const CATEGORIES: { [key: string]: string } = {
    'girls': 'For Girls',
    'boys': 'For Boys',
    'babies': 'For Babies',
    'home': 'For Home',
    'play': 'For Play',
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, category, price, images, stock }) => {
    const [showAddToCartButton, setShowAddToCartButton] = React.useState<boolean>(false);

    const router = useRouter();

    return (
        <Box
            onMouseEnter={() => setShowAddToCartButton(true)}
            onMouseLeave={() => setShowAddToCartButton(false)}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                width: "fit-content",
            }}>
            <Box sx={{
                position: "relative",
                '& img': {
                    cursor: "pointer"
                }
            }}>
                <Image
                    src={showAddToCartButton && images && images[1] ? images[1] : images[0]}
                    alt={name}
                    width={260}
                    height={360}
                    onClick={() => router.push('/details/' + id, undefined, { scroll: false })} />

                {showAddToCartButton && (
                    <Button variant="contained" sx={{
                        display: "flex",
                        justifyContent: stock > 0 ? "space-between" : "center",
                        position: "absolute",
                        left: 6,
                        bottom: 12,
                        width: "calc(100% - 11px)",
                        backgroundColor: "#EC6654",
                        height: "40px",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 16,
                        borderRadius: 0,
                        border: '2px dashed #FFF',
                        outline: '5px solid #EC6654',
                        '&:hover': {
                            backgroundColor: '#EC6654',
                            color: '#FFF',
                        }
                    }}>
                        <FontAwesomeIcon icon={faHeart} className="icon" />
                        {stock > 0 && (
                            <>
                                <span>Add to Cart</span>
                                <FontAwesomeIcon icon={faSearch} className="icon" />
                            </>
                        )}
                    </Button>
                )}
            </Box>
            {stock === 0 && (
                <Box sx={{
                    position: "absolute",
                    backgroundColor: "white",
                    borderRadius: "25px",
                    top: "10px",
                    right: "10px"
                }}>
                    <Typography variant="h6" sx={{
                        fontFamily: "'Francois One', sans-serif",
                        fontSize: '12px',
                        fontWeight: 'normal',
                        lineHeight: '12px',
                        textTransform: 'uppercase',
                        color: '#486683',
                        padding: '10px 15px'
                    }}>
                        Out of Stock
                    </Typography>
                </Box>
            )}
            <Typography variant="body1" sx={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '14px',
                fontWeight: 'bold',
                lineHeight: '48px',
                color: '#E5745D',
            }}>
                {CATEGORIES[category]}
            </Typography>
            <Typography
                variant="h3"
                sx={{
                    fontFamily: "'Gilda Display', sans-serif",
                    fontSize: '20px',
                    lineHeight: '14px',
                    fontWeight: '600',
                    color: '#486683',
                    cursor: 'pointer'
                }}
                onClick={() => router.push('/details/' + id)}>
                {name}
            </Typography>
            <Typography variant="body1" sx={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '48px',
                color: '#486683'
            }}>
                {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </Typography>
        </Box>
    )
}

export default ProductCard;
