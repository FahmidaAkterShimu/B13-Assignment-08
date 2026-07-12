import BooksHeading from '@/components/modules/AllBooks/BooksHeading';

const BooksPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book.json`, {
        cache: "no-cache"
    })
    const books = await res.json()


    return (
        <section>
            <BooksHeading books={books} />
        </section>
    );
};

export default BooksPage;