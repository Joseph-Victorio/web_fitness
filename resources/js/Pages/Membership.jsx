import { Link} from '@inertiajs/react';

const Membership = () => {
  return (
    <div className='p-5 '>
        <h1 className='font-bebas text-6xl text-primary text-center'>Memberships</h1>

        {/* kartu pilih */}
        <div className=''>
        <div className='flex sm:flex-row flex-col gap-5 mx-auto w-[1200px]'>
            
            <div className='w-[350px] h-auto shadow-md shadow-orange-400 p-4 bg-white rounded-xl'>
                <h2 className='font-roboto font-bold text-4xl text-primary'>24 Bulan</h2>
                <p className='font-bold'>Rp 249.000/bulan</p>
                <hr className=' border-b-1 border-black mt-4' />
                <p className='font-roboto'><span className='font-bold text-primary font-roboto'>Akses tak terbatas</span> ke seluruh FIT BANGET GYM di seluruh Indonesia</p>
                <Link
                    href='/'>
                        <p>KLIK</p>
                </Link>

            </div>
            <div className='w-[350px] h-auto shadow-md shadow-orange-400 p-4 bg-white rounded-xl'>
                <h2 className='font-roboto font-bold text-4xl text-primary'>24 Bulan</h2>
                <p className='font-bold'>Rp 249.000/bulan</p>
                <hr className=' border-b-1 border-black mt-4' />
                <p className='font-roboto'><span className='font-bold text-primary font-roboto'>Akses tak terbatas</span> ke seluruh FIT BANGET GYM di seluruh Indonesia</p>

            </div>
            <div className='w-[350px] h-auto shadow-md shadow-orange-400 p-4 bg-white rounded-xl'>
                <h2 className='font-roboto font-bold text-4xl text-primary'>24 Bulan</h2>
                <p className='font-bold'>Rp 249.000/bulan</p>
                <hr className=' border-b-1 border-black mt-4' />
                <p className='font-roboto'><span className='font-bold text-primary font-roboto'>Akses tak terbatas</span> ke seluruh FIT BANGET GYM di seluruh Indonesia</p>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Membership