import { BookMarked, CircleCheckBig, Search } from 'lucide-react';
import React from 'react';

const SimpleProcess = () => {
    return (
        <div className='bg-secondary py-20'>
            <div className='container mx-auto px-6 lg:px-12'>
                <div className='text-center mb-14'>
                    <span className='text-xs font-bold tracking-widest text-primary uppercase mb-3 block'>
                        Simple Process
                    </span>
                    <h2 className='font-serif text-4xl font-bold'>How BookHaven Works</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <div className='relative'>
                        <div className='text-8xl font-bold text-primary/8 leading-none mb-4 select-none'>01</div>
                        <div className='w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5 -mt-8'>
                            <Search className='lucide lucide-search w-7 h-7 text-primary-foreground' />
                        </div>
                        <h3 className='font-serif text-xl font-bold mb-3'>Browse & Discover</h3>
                        <p className='text-muted-foreground leading-relaxed'>Explore our curated collection across Story, Tech, and Science categories.</p>
                    </div>
                    <div className='relative'>
                        <div className='text-8xl font-bold text-primary/8 leading-none mb-4 select-none'>02</div>
                        <div className='w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5 -mt-8'>
                            <BookMarked className='lucide lucide-search w-7 h-7 text-primary-foreground' />
                        </div>
                        <h3 className='font-serif text-xl font-bold mb-3'>Borrow Digitally</h3>
                        <p className='text-muted-foreground leading-relaxed'>Select your book and borrow it instantly with a single click. No queues.</p>
                    </div>
                    <div className='relative'>
                        <div className='text-8xl font-bold text-primary/8 leading-none mb-4 select-none'>03</div>
                        <div className='w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5 -mt-8'>
                            <CircleCheckBig className='lucide lucide-search w-7 h-7 text-primary-foreground' />
                        </div>
                        <h3 className='font-serif text-xl font-bold mb-3'>Read & Return</h3>
                        <p className='text-muted-foreground leading-relaxed'>Read at your own pace and return when done. Simple, seamless, stress-free.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleProcess;