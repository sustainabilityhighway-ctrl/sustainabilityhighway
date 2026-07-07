import AdminDashboard from '../../components/AdminDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin Dashboard | Sustainability Highway',
    robots: 'noindex, nofollow',
}

export default function AdminPage() {
    return <AdminDashboard />;
}
