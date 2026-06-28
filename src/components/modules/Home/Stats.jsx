import { Bookmark, BookOpen, TrendingUp, User } from 'lucide-react';
import React from 'react';
import { IoBookmarkOutline, IoBookOutline } from 'react-icons/io5';

const Stats = () => {
    return (
        <div className='bg-card border-b border-border'>
            <div className='container mx-auto px-6 lg:px-12 py-10'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='text-center'>
                        <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3'>
                            <BookOpen className='lucide lucide-bookmark w-6 h-6 text-primary' />
                        </div>
                        <h3 className='font-serif text-3xl font-bold mb-1'>
                            1,200+
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                            Books Available
                        </p>
                    </div>

                    <div className='text-center'>
                        <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3'>
                            <User className='lucide lucide-bookmark w-6 h-6 text-primary' />
                        </div>
                        <h3 className='font-serif text-3xl font-bold mb-1'>
                            8,400+
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                            Active Readers
                        </p>
                    </div>

                    <div className='text-center'>
                        <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3'>
                            <Bookmark className='lucide lucide-bookmark w-6 h-6 text-primary' />
                        </div>
                        <h3 className='font-serif text-3xl font-bold mb-1'>
                            24
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                            Categories
                        </p>
                    </div>

                    <div className='text-center'>
                        <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3'>
                            <TrendingUp className='lucide lucide-bookmark w-6 h-6 text-primary' />
                        </div>
                        <h3 className='font-serif text-3xl font-bold mb-1'>
                            120+
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                            New This Month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;