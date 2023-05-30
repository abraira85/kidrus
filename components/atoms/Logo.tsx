import React from "react";
import Image from "next/image";
import logoImage from '@assets/images/logo/logo.png';
import logoWhiteImage from '@assets/images/logo/logo_white.png';

type LogoProps = {
    variant?: string
}

const Logo: React.FC<LogoProps> = ({ variant }) => {

    if (variant === 'white') {
        return <Image src={logoWhiteImage} alt="logo" />
    }
    else {
        return <Image src={logoImage} alt="logo" />
    }
}

export default Logo;
