import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {usePage} from '@inertiajs/react';

export default function Dashboard() {
    const {auth} = usePage().props
    return (
        <AuthenticatedLayout
            user={auth.user}
            
        >
            <Head title="Dashboard" />

            <p>{auth.user.name}</p>
           
        </AuthenticatedLayout>
    );
}
