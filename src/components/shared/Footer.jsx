import Link from 'next/link';
import { Library } from 'lucide-react';
import { FiTwitter } from 'react-icons/fi';
import { LuGithub } from 'react-icons/lu';
import { MdMailOutline } from 'react-icons/md';


const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='transition-colors duration-300 dark:bg-black bg-[#1a3a1a] text-white mt-20'>
            <div className='container mx-auto px-6 lg:px-12 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <div className='lg:col-span-2'>
                        {/* LOGO */}
                        <h3 className="font-serif text-xl font-bold flex items-center gap-2 mb-4">
                            <Library className='w-7 h-7 text-amber-400' />
                            BookHaven
                        </h3>

                        <p className='font-sans text-white/60 text-sm leading-relaxed max-w-sm'>
                            A seamless digital library experience. Borrow, read, and return books with ease. Thousands of titles across Story, Tech, and Science categories.
                        </p>

                        <div className='flex items-center gap-4 mt-6'>
                            <Link href="https://x.com/" className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'>
                                <FiTwitter />
                            </Link>

                            <Link href="https://github.com/" className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'>
                                <LuGithub />
                            </Link>

                            <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'>
                                <MdMailOutline />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className='font-sans font-bold text-sm uppercase tracking-widest text-white/50 mb-5'>Navigation</h4>
                        <div className='space-y-3'>
                            <Link href="/" className='block text-white/70 hover:text-white text-sm transition-colors'>Home</Link>
                            <Link href="/books" className='block text-white/70 hover:text-white text-sm transition-colors'>All Books</Link>
                            <Link href="/profile" className='block text-white/70 hover:text-white text-sm transition-colors'>My Profile</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className='font-bold text-sm uppercase tracking-widest text-white/50 mb-5'>Contact Us</h4>
                        <div className='space-y-3 text-sm text-white/70'>
                            <p>123 Library Lane</p>
                            <p>Reading, RG1 2BK</p>
                            <p>hello@bookhaven.io</p>
                            <p>+1 (555) 234-5678</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className='border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40'>
                    <p>© Since 2000 - {new Date().getFullYear()} BookHaven. All rights reserved.</p>
                    <p>Built with care for readers everywhere.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;