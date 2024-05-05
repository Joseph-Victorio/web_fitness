import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div >
                <nav className=" flex items-center justify-between bg-background p-2 mt-[-20px]">
                    <Link >
                        <ApplicationLogo
                            width="100px"/>
                    </Link>
                    <div className='text-2xl'>
                    {auth.user ? (
                                    <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition ease-in-out duration-500 focus:outline-none hover:text-primary  font-bebas"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                    href='/memberships'
                                    className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition ease-in-out duration-500 font-bebas hover:text-primary "
                                >
                                    Register Membership
                                    </Link>
                                    </>
                                    
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition ease-in-out duration-500  font-bebas hover:text-primary "
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-white  transition ease-in-out duration-500 focus:outline-none  font-bebas hover:text-primary "
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                    </div>
                </nav>
                
                            

                        
                 
            </div>
        </>
    );
}
