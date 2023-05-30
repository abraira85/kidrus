import React from "react";
import Image from 'next/image';
import { Box, Button, Typography } from "@mui/material";

export type Banner = {
    src: string
    text: string
    description: string
    buttonText?: string
    buttonLink?: string
    primary: boolean
}

type BannerProps = {
    images: Banner[]
}

const Banners: React.FC<BannerProps> = ({ images }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            margin: '40px 0 80px'
        }}>
            {
                images.map((image, index) => (
                    <Box key={index} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                        <Image src={image.src} alt={image.text} width={image.primary ? 800 : 300} height={image.primary ? 500 : 410} />
                        {image.primary && (
                            <Box sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 40
                            }}>
                                <Typography sx={{
                                    fontFamily: "'Francois One', sans-serif",
                                    fontSize: '48px',
                                    fontWeight: 'normal',
                                    lineHeight: '48px',
                                    textTransform: 'uppercase',
                                    color: 'white',
                                }}>
                                    {image.text}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontSize: '14px',
                                    fontWeight: 'normal',
                                    color: 'white'
                                }}>
                                    {image.description}
                                </Typography>
                                <Button variant="contained" sx={{
                                    backgroundColor: 'white',
                                    color: '#486683',
                                    border: '2px dashed #486683',
                                    outline: '5px solid white',
                                    borderRadius: '0',
                                    fontFamily: "'Francois One', sans-serif",
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    margin: '20px 0 40px',
                                    padding: '5px 20px',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: '#486683',
                                        borderStyle: 'solid'
                                    }
                                }}>
                                    {image.buttonText}
                                </Button>
                            </Box>
                        )}
                        {!image.primary && (
                            <>
                                <Typography sx={{
                                    fontFamily: "'Francois One', sans-serif",
                                    fontSize: '32px',
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    color: '#486683',
                                    textAlign: 'center',
                                    paddingTop: '25px'
                                }}>
                                    {image.text}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#0c0c0c'
                                }}>
                                    {image.description}
                                </Typography>
                            </>
                        )}
                    </Box>
                ))
            }
        </Box>
    )
}

export default Banners;
