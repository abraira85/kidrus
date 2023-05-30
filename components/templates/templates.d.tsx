import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';

export type LayoutProps = {
    children?: React.ReactNode;
    selected?: string
};

export type NextPageWithLayout<P = { data: object }> = NextPage<P> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
    layout?: React.ComponentType;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
    emotionCache?: EmotionCache;
};
