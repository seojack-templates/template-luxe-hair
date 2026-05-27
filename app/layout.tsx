import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://luxe-hair.templates.seojack.website';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Luxe Hair Artistry',
    description: 'Exclusive private hair-studio site with waitlist access, portfolio gallery, service menu, and a rose-gold aesthetic.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Luxe Hair Artistry',
        description: 'Exclusive private hair-studio site with waitlist access, portfolio gallery, service menu, and a rose-gold aesthetic.',
        url: BASE_URL,
        siteName: 'Luxe Hair Artistry',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_luxe_hair.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Luxe Hair Artistry',
        description: 'Exclusive private hair-studio site with waitlist access, portfolio gallery, service menu, and a rose-gold aesthetic.',
        images: ['https://cdn.seojack.website/templates/tpl_luxe_hair.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'Luxe Hair Artistry',
    description: 'Exclusive private hair-studio site with waitlist access, portfolio gallery, service menu, and a rose-gold aesthetic.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_luxe_hair.avif',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}