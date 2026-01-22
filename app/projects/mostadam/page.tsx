import MostadamPage from '../../../components/projects/MostadamPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mostadam Rating System Guide | Saudi Green Building',
    description: 'Everything you need to know about Mostadam, Saudi Arabia\'s local sustainability rating system for residential and commercial buildings.',
    openGraph: {
        url: 'https://sustainabilityhighway.com/projects/mostadam',
    }
}

export default function Page() {
    return <MostadamPage />;
}
