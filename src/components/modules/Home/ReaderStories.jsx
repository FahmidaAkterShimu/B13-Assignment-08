import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ReaderStories = () => {
    return (
        <div className='container mx-auto px-6 lg:px-12 py-20'>
            <div className='text-center mb-14'>
                <span className='text-xs font-bold tracking-widest text-primary uppercase mb-3 block'>Reader Stories</span>
                <h2 className='font-serif text-4xl font-bold'>What Our Members Say</h2>
            </div>
            {/* Comments */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Card-01 */}
                <div className='bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow'>
                    <div className='flex items-center gap-1 mb-5'>
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                    </div>
                    <p className='text-muted-foreground leading-relaxed mb-6 italic'>BookHaven completely transformed how I access books. The interface is beautiful and borrowing is seamless.
                    </p>
                    <div className='flex items-center gap-3'>
                        <Image
                            src='/reader1.avif'
                            alt='Priya Sharma'
                            width={80}
                            height={80}
                            className='w-11 h-11 rounded-full object-cover border-2 border-primary/20' />
                    </div>
                    <div>
                        <p className='font-semibold text-sm'>Priya Sharma</p>
                        <p className='text-xs text-muted-foreground'>Literature Student</p>
                    </div>
                </div>

                {/* Card-02 */}
                <div className='bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow'>
                    <div className='flex items-center gap-1 mb-5'>
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                    </div>
                    <p className='text-muted-foreground leading-relaxed mb-6 italic'>The tech section is incredibly well curated. I&apos;ve discovered so many programming books I wouldn&apos;t have found otherwise.
                    </p>
                    <div className='flex items-center gap-3'>
                        <Image
                            src='/reader2.avif'
                            alt='Priya Sharma'
                            width={80}
                            height={80}
                            className='w-11 h-11 rounded-full object-cover border-2 border-primary/20' />
                    </div>
                    <div>
                        <p className='font-semibold text-sm'>James Okafor</p>
                        <p className='text-xs text-muted-foreground'>Software Engineer</p>
                    </div>
                </div>

                {/* Card-03 */}
                <div className='bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow'>
                    <div className='flex items-center gap-1 mb-5'>
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                        <Star className='lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400' />
                    </div>
                    <p className='text-muted-foreground leading-relaxed mb-6 italic'>As a researcher, having instant access to science titles is invaluable. The availability tracker is a game changer.
                    </p>
                    <div className='flex items-center gap-3'>
                        <Image
                            src='/reader3.avif'
                            alt='Priya Sharma'
                            width={80}
                            height={80}
                            className='w-11 h-11 rounded-full object-cover border-2 border-primary/20' />
                    </div>
                    <div>
                        <p className='font-semibold text-sm'>Elena Vasquez</p>
                        <p className='text-xs text-muted-foreground'>Biology Researcher</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReaderStories;