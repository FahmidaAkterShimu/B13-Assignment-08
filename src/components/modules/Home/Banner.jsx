import { ArrowRight, Library } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const Banner = () => {
    return (
        <header className='relative min-h-[88vh] flex items-center overflow-hidden bg-linear-to-br from-[#1a3a1a] via-[#2c5f2d] to-[#3d7a3e]'>
            {/* Background image */}
            <div className="absolute inset-0 opacity-10 bg-[url('/banner.avif')] bg-center bg-cover" />

            {/* Gradient overlay (FIXED) */}
            <div className='absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent' />

            {/* Content */}
            <div className='relative container mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center'>
                {/* Left side */}
                <div>
                    {/* Badge */}
                    <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-8'>
                        <Library className='w-5 h-5 text-amber-400' />
                        <span className='text-white/90 text-sm font-medium tracking-wide'>
                            Digital Library Platform
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className='font-serif text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6'>
                        Find Your
                        <br />
                        <span className='text-amber-300'>Next Great</span>
                        <br />
                        Read
                    </h1>

                    {/* Description */}
                    <p className='text-white/75 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg'>
                        Explore thousands of titles across Story, Tech, and Science. Borrow digitally, read at your pace.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-wrap justify-center gap-4'>
                        <Link
                            href='/books'
                            className='bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-xl hover:shadow-amber-400/30 hover:-translate-y-0.5'
                        >
                            Browse Now <ArrowRight />
                        </Link>

                        <Link
                        href="/register"
                        className='border-2 border-white/40 hover:border-white/80 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur hover:-translate-y-0.5'>
                            Create Account
                        </Link>
                    </div>
                </div>

                {/* Right side */}
                <div className='hidden lg:grid grid-cols-2 gap-4 relative'>
                    <div className='rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover-bounce-once'>
                        <Image
                            src="/book1.avif"
                            alt='The Midnight Library'
                            width={200}
                            height={200}
                            className='w-full aspect-3/4 object-cover'
                        >
                        </Image>
                    </div>
                    <div className='rounded-2xl overflow-hidden shadow-2xl border border-white/20 mt-8 hover-bounce-once'>
                        <Image
                            src="/book2.avif"
                            alt='The Midnight Library'
                            width={200}
                            height={200}
                            className='w-full aspect-3/4 object-cover'
                        >
                        </Image>
                    </div>
                    <div className='rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover-bounce-once'>
                        <Image
                            src="/book3.avif"
                            alt='The Midnight Library'
                            width={200}
                            height={200}
                            className='w-full aspect-3/4 object-cover'
                        >
                        </Image>
                    </div>
                    <div className='rounded-2xl overflow-hidden shadow-2xl border border-white/20 mt-8 hover-bounce-once'>
                        <Image
                            src="/book4.avif"
                            alt='The Midnight Library'
                            width={200}
                            height={200}
                            className='w-full aspect-3/4 object-cover'
                        >
                        </Image>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner