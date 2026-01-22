import WellPage from '../../../components/projects/WellPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'WELL Building Standard Saudi Arabia | Health & Wellness',
    description: 'Focus on occupant health and well-being with the WELL Building Standard in Saudi Arabia.',
    openGraph: {
        url: 'https://sustainabilityhighway.com/projects/well',
    }
}

export default function Page() {
    return <WellPage />;
}
