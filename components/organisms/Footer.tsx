import React from "react";
import Image from 'next/image';
import { Box, Typography } from "@mui/material";
import { Logo } from "@components/atoms";
import { SocialIcons, FooterMenu } from "@components/molecules";

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <Box component="footer" sx={{
            position: 'relative',
            width: '100%',
            height: '440px',
            '& bg-image': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }
        }}>
            <Image
                src="/images/footer/bg.png"
                alt="Background"
                layout="fill"
                className="bg-image"
            />
            <Box sx={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                zIndex: 99,
                position: 'absolute',
                top: '265px',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Logo variant="white" />
                <FooterMenu />
                <SocialIcons />
                <Typography sx={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '14px',
                    color: 'white',
                    '& span ': {
                        fontWeight: 'bold',
                    }
                }}>
                    <span>
                        Privacy Policy
                    </span>
                    {' / This is a sample website - @masters © 2022 / All rights Reserved'}
                </Typography>
            </Box>
        </Box >
    )
}

export default Footer;
