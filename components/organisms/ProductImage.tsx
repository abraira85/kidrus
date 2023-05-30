import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { Product } from './ProductList';
import ReactImageMagnify from 'react-image-magnify';
import Slider, { Settings } from 'react-slick';


type ProductImageProps = {
    product: Product;
};

interface ProductImageSliderProps {
    images: string[];
    activeImage: number;
    onImageClick: (index: number) => void;
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ images, onImageClick }) => {
    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {images.map((image, index: number) => (
                <div key={index} onClick={() => onImageClick(index)}>
                    <Image src={image} alt={`Image ${index + 1}`} width={75} height={100} />
                </div>
            ))}
        </Slider>
    );
};

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
    const [activeImage, setActiveImage] = React.useState(0);

    const handleImageClick = (index: number) => {
        setActiveImage(index);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: '30px 20px',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '380px',
                    height: '480px',
                }}
            >
                {product && product.images && (
                    <>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: product.images[activeImage]
                            },
                            largeImage: {
                                src: product.images[activeImage],
                                width: 1200,
                                height: 1800
                            },
                            enlargedImageContainerStyle: {
                                zIndex: 9999, // Aumenta el z-index según tus necesidades
                            }
                        }} />
                        <Box sx={{
                            margin: '10px'
                        }}>
                            <ProductImageSlider
                                images={product.images}
                                activeImage={activeImage}
                                onImageClick={handleImageClick}
                            />
                        </Box>
                    </>
                )}

            </Box>
        </Box>
    );
};

export default ProductImage;
