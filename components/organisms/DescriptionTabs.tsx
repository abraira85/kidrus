import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import underlinedImage from '@assets/images/underlined.png';
import Image from "next/image";
import { Product } from "./ProductList";

type DescriptionTabsProps = {
    product: Product
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const a11yProps = (index: number) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

const tabStyles = {
    fontFamily: "'Francois One', sans-serif",
    fontSize: '24px',
    fontWeight: '400',
    textTransform: 'uppercase',
    color: '#486683 !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const DescriptionTabs: React.FC<DescriptionTabsProps> = ({ product }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs value={value} onChange={handleChange} aria-label="" centered TabIndicatorProps={{
                sx: {
                    bgcolor: 'inherit',
                }
            }} sx={{
                '& .MuiTab-iconWrapper': {
                    position: 'absolute',
                    bottom: 1
                },
                '& .MuiTabs-flexContainer': {
                    gap: '15px',
                }
            }}>
                <Tab label="Description" {...a11yProps(0)} disableRipple sx={tabStyles} iconPosition="bottom" icon={value === 0 ? <Image src={underlinedImage} alt="Underlined" /> : ''} />
                <Tab label="Additional Information" {...a11yProps(1)} disableRipple sx={tabStyles} iconPosition="bottom" icon={value === 1 ? <Image src={underlinedImage} alt="Underlined" /> : ''} />
                <Tab label="Reviews (1)" {...a11yProps(2)} disableRipple sx={tabStyles} iconPosition="bottom" icon={value === 2 ? <Image src={underlinedImage} alt="Underlined" /> : ''} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Typography component="span" sx={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '16px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: '#486683',
                    padding: '30px 0'
                }}>
                    {product.description}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography component="span" sx={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '16px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: '#486683',
                    padding: '30px 0'
                }}>
                    {product.additional_info}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
                {product.reviews}
            </TabPanel>
        </Box >
    )
}

export default DescriptionTabs;
