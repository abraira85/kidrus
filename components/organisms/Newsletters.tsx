import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

type NewslettersProps = {}

const Newsletters: React.FC<NewslettersProps> = () => {
    return (
        <Box sx={{
            backgroundColor: "#E5745D",
            padding: '24px 15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "'Gilda Display', sans-serif",
                    fontSize: '32px',
                    lineHeight: '32px',
                    fontWeight: '400',
                    color: '#fff',
                    textAlign: 'center',
                }}>
                Join Our Newsletter
            </Typography>
            <TextField label="Your Email Address*" size="small" sx={{
                margin: '20px 0 0 0',
                '.MuiFormLabel-root': {
                    color: '#fff !important',
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: '1px dashed #fff !important',
                    borderRadius: 0,
                },
                '.MuiOutlinedInput-input': {
                    color: '#fff'
                }
            }} />
            <Button variant="contained" sx={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '14px',
                lineHeight: '16px',
                fontWeight: '600',
                textAlign: 'center',
                padding: '10px 20px',
                border: '2px dashed #E5745D',
                outline: '5px solid white',
                backgroundColor: "#fff !important",
                color: '#E5745D',
                borderRadius: 0,
                margin: '20px 5px'
            }}>
                Subscribe
            </Button>
        </Box>
    )
}

export default Newsletters;
