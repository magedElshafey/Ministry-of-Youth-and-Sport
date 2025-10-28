import { Helmet } from "react-helmet-async";
import { baseUrl } from "../../../services/api/config";
import { useLocation } from "react-router-dom";
interface HeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    favicon?: string;
    image?: string;
    url?: string;
}
const Head: React.FC<HeadProps> = ({
    title,
    description,
    keywords,
    image,
    url = baseUrl,
    favicon,
}) => {
    const { pathname } = useLocation();
    return (
        <Helmet>
            {
                pathname === "/" ? <meta name="viewport" content="width=1280" /> : <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            }
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={title} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={image} />
            {/* <meta name="twitter:site" content="@yourtwitterhandle" /> */}

            {/* Favicon */}
            <link rel="icon" type="image/svg+xml" href={favicon} />

            {/* Canonical Link */}
            <link rel="canonical" href={url} />

            {/* Viewport */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Robots */}
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
};

export default Head;
