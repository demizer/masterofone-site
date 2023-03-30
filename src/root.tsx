// @refresh reload
import { Suspense } from "solid-js";
import {
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start";
import "./root.css";

import siteMetadata from '~/data/siteMetadata';
import Header from "~/components/header";
import Footer from "~/components/footer";


export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>{siteMetadata.title}</Title>
                <Meta name={"description"} title={"description"} content={siteMetadata.description} />
                <Meta name={"og:title"} title={"og:title"} content={siteMetadata.title} />
                <Meta name={"og:description"} title={"og:description"} content={siteMetadata.description} />
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Body>
                <Suspense>
                    <main class="mb-auto mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                        <div class="mt-12 max-w-lg mx-auto gap-5 lg:max-w-none">
                            <ErrorBoundary>
                                <Header />
                                <Routes>
                                    <FileRoutes />
                                </Routes>
                            </ErrorBoundary>
                            <Footer />
                        </div >
                    </main>
                </Suspense>
                <Scripts />
            </Body>
        </Html >
    );
}
