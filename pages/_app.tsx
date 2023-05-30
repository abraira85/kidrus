import React from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '@utils/cache';
import { AppPropsWithLayout } from '@components/templates';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const AppRoot = ({ Component, pageProps: { session, ...pageProps }, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) => {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page: any) => page);

    const Layout = Component.layout ?? React.Fragment;

    return (
        <CacheProvider value={emotionCache}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Layout>
                    {getLayout(
                        <>
                            <Component {...pageProps} />
                        </>
                    )}
                </Layout>
        </CacheProvider>
    );
};

export default AppRoot;
