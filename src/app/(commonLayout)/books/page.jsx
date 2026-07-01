import Books from '@/components/modules/AllBooks/Books';
import BooksHeading from '@/components/modules/AllBooks/BooksHeading';
import React from 'react';

const BooksPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book.json`, {
        cache: "no-cache"
    })
    const books = await res.json()


    return (
        <section>
            <BooksHeading />
            <Books books={books} />
        </section>
    );
};

export default BooksPage;