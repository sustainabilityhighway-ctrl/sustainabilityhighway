import Contact from '../../components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Sustainability Highway | Riyadh KSA',
    description: 'Get in touch with Saudi Arabia\'s leading sustainability consultants for LEED and Mostadam certification projects.',
    openGraph: {
        url: 'https://sustainabilityhighway.com/contact',
    }
}

export default function ContactPage() {
    return <Contact />;
}
