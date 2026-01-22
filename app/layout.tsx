import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Just standard layout for now.

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
    title: 'Sustainability Highway | Vision 2030 LEED & Mostadam Insights in Saudi Arabia',
    description: 'Your premier source for sustainability insights for Vision 2030 projects in KSA. LEED certification guides, Mostadam rating info, and green building news for Saudi Arabia.',
    keywords: 'Vision 2030, LEED KSA, Mostadam, sustainability Saudi Arabia, green building, NEOM, construction KSA updates',
    authors: [{ name: 'Sustainability Highway' }],
    robots: 'index, follow',
    icons: {
        icon: '/sh-icon.svg',
        apple: '/sh-icon.svg',
    },
    openGraph: {
        type: 'website',
        url: 'https://sustainabilityhighway.com/',
        title: 'Sustainability Highway | Vision 2030 LEED & Mostadam Insights',
        description: 'Your premier source for sustainability insights for Vision 2030 projects in KSA. LEED certification guides, Mostadam rating info, and green building news.',
        images: ['https://sustainabilityhighway.com/og-image.jpg'],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sustainability_hw',
        title: 'Sustainability Highway | Vision 2030 LEED & Mostadam Insights',
        description: 'Your premier source for sustainability insights for Vision 2030 projects in KSA. LEED certification guides, Mostadam rating info, and green building news.',
        images: ['https://sustainabilityhighway.com/og-image.jpg'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
            <body className="font-sans antialiased text-[#F7FAF7] bg-[#041612]">
                <div className="noise-overlay"></div>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
