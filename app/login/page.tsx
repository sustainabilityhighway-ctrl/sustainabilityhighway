import Login from '../../components/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | Sustainability Highway',
    robots: 'noindex, nofollow',
}

export default function LoginPage() {
    return <Login />;
}
