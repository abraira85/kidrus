import React from "react";
import Image from 'next/image';
import { Box, Typography } from "@mui/material";
import underlinedImage from '@assets/images/underlined.png';

export type InstagramImage = {
    src: string,
    alt: string,
}

type InstagramGalleryProps = {
    images: InstagramImage[]
}

const InstagramGallery: React.FC<InstagramGalleryProps> = ({ images }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '60px 0 80px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2
            }}>
                <Typography variant="h2" sx={{
                    fontFamily: "'Francois One', sans-serif",
                    fontSize: '32px',
                    fontWeight: '400',
                    textTransform: 'uppercase',
                    color: '#486683'
                }}>
                    Instagram @Kidsrus
                </Typography>
                <Image src={underlinedImage} alt="Underlined" />
                <Box sx={{
                    display: 'flex',
                    gap: 1.5,
                    margin: '20px 0 1   0px 0'
                }}>
                    {
                        images.map((image, index) => (
                            <Image key={index} src={image.src} alt={image.alt} width={220} height={220} />
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default InstagramGallery;
