import React from "react";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

type SocialIconsProps = {}

const SocialIcons: React.FC<SocialIconsProps> = () => {

    const socialNetworks = [
        {
            'name': 'Facebook',
            'link': 'https://www.facebook.com/',
            'icon': <FontAwesomeIcon icon={faFacebookF} className="icon" />
        },
        {
            'name': 'Instagram',
            'link': 'https://www.instagram.com/',
            'icon': <FontAwesomeIcon icon={faInstagram} className="icon" />
        },
        {
            'name': 'Twitter',
            'link': 'https://twitter.com/',
            'icon': <FontAwesomeIcon icon={faTwitter} className="icon" />
        }
    ]


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '40px 0',
        }}>
            {
                socialNetworks.map((item, index) => (
                    <Box key={index} sx={{
                        padding: '0 15px',
                        '& a': {
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#FFFFFF',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            '&:hover': {
                                color: '#E5745D'
                            }
                        },
                        '& .icon': {
                            width: '24px',
                            height: '24px'
                        }
                    }}>
                        <a href={item.link}>{item.icon}</a>
                    </Box>
                ))
            }
        </Box>
    )
}

export default SocialIcons;
