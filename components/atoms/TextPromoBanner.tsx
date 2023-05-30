import React from "react";
import { Box, Typography } from '@mui/material';


export type PromoBanner = {
    id: number;
    text: string;
}

type TextPromoBannerProps = {
    text: string;
}

const TextPromoBanner: React.FC<TextPromoBannerProps> = ({ text }) => {
    return (
        <Box sx={{
            width: "100%",
            height: 40,
            color: '#FFFFFF',
            backgroundColor: '#E5745D',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant="subtitle2" sx={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '14px',
            }}>{text}</Typography>
        </Box>
    )
}

export default TextPromoBanner;
