import EnvisionPage from '../../../components/projects/EnvisionPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Envision Infrastructure Framework | Saudi Arabia',
    description: 'Discover the Envision framework for sustainable infrastructure projects in Saudi Arabia, aligning with Vision 2030.',
    openGraph: {
        url: 'https://sustainabilityhighway.com/projects/envision',
    }
}

export default function Page() {
    return <EnvisionPage />;
}
