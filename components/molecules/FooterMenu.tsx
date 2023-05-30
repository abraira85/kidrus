import React from "react";
import { Box } from "@mui/material";

type FooterMenuProps = {}

const footerElements = [
    'Shop',
    'Sale',
    'Girls',
    'Boys',
    'Lookbook',
    'Contacts'
]

const FooterMenu: React.FC<FooterMenuProps> = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
        }}>
            {
                footerElements.map((item, index) => (
                    <Box key={index} sx={{
                        padding: '0 15px',
                        '& a': {
                            fontFamily: "'Quicksand', sans-serif",
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#FFFFFF',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            '&:hover': {
                                color: '#E5745D'
                            }
                        }
                    }}>
                        <a href={`#${item}`}>{item}</a>
                    </Box>
                ))
            }
        </Box>
    )
}

export default FooterMenu;
