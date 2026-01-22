import LeedGuide from '../../components/LeedGuide';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LEED Certification Guide Saudi Arabia | Vision 2030',
    description: 'Comprehensive guide to LEED Certification in Saudi Arabia. Learn about credits, levels, and how LEED aligns with Vision 2030.',
    openGraph: {
        url: 'https://sustainabilityhighway.com/leed-guide',
    }
}

export default function LeedGuidePage() {
    return <LeedGuide />;
}
