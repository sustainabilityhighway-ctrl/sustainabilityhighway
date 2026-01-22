import Vision2050Page from '../../../components/projects/Vision2050Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vision 2050 Sustainability | Net Zero Saudi Arabia',
    description: 'The long-term roadmap for a Net Zero Saudi Arabia. Vision 2050 sustainability goals and strategies.',
    openGraph: {
        url: 'https://sustainabilityhighway.com/projects/vision-2050',
    }
}

export default function Page() {
    return <Vision2050Page />;
}
