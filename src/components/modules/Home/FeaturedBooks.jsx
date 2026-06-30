import BookCard from '@/components/modules/Shared/BookCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FeaturedBooks = async () => {
    const res = await fetch("http://localhost:3000/book.json", {
        cache: "no-cache"
    })
    const books = await res.json()

    return (
        <div className='container mx-auto px-6 lg:px-12 py-20'>
            <div className='flex items-end justify-between mb-12'>
                <div>
                    <span className='text-xs font-bold tracking-widest text-primary uppercase mb-3 block'>Curated Collection</span>
                    <h2 className='font-serif text-4xl font-bold'>Featured Books</h2>
                </div>
                <Link
                    href="/books"
                    className='text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all'>
                    View all
                    <ArrowRight className='lucide lucide-arrow-right w-4 h-4' />
                </Link>
            </div>

            {/* Books */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    books.slice(0, 4).map(book => (
                        <BookCard key={book.id} book={book} />
                    ))
                }
            </div>

        </div>
    );
};

export default FeaturedBooks;