import { BookMarked, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    const { id, image_url, category, title, author, rating, available_quantity } = book;

    const categoryColors = {
        Story: "bg-amber-100 text-amber-800 border-amber-200",
        Tech: "bg-blue-100 text-blue-800 border-blue-200",
        Science: "bg-green-100 text-green-800 border-green-200",
        History: "bg-red-100 text-red-800 border-red-200",
        Fiction: "bg-purple-100 text-purple-800 border-purple-200",
        Biography: "bg-pink-100 text-pink-800 border-pink-200",
    };

    const badgeClass =
        categoryColors[category] ||
        "bg-gray-100 text-gray-800 border-gray-200";

    return (
        <div className='group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-400 hover:-translate-y-1 flex flex-col'>
            <div className='relative aspect-3/4 overflow-hidden bg-muted'>
                <Image
                    src={image_url}
                    alt={title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent'></div>
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}>{category}</span>
            </div>

            <div className='p-5 flex flex-col flex-1'>
                <h3 className='font-bold text-base leading-snug mb-1 line-clamp-2'>
                    {title}
                </h3>
                <p className='text-sm text-muted-foreground mb-2'>{author}</p>
                <div className='flex items-center gap-1'>
                    <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400' />
                    <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400' />
                    <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400' />
                    <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400' />
                    <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-200 text-amber-400' />
                    <span className='text-xs text-muted-foreground ml-1'>{rating}</span>
                </div>
                <div className='mt-auto pt-4 flex items-center justify-between'>
                    <span className='text-xs text-muted-foreground flex items-center gap-1'>
                        <BookMarked className='lucide lucide-book-marked w-3.5 h-3.5' /> {available_quantity} copies
                    </span>
                    <Link
                        href={`/books/${id}`}
                        className='text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 group/btn transition-colors'
                    >
                        Details <ChevronRight className='lucide lucide-chevron-right w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;