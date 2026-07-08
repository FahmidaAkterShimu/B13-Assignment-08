import Link from "next/link";
import { HomeIcon, Search } from "lucide-react";
import BookDetails from "@/components/modules/SingleBook/BookDetails";

const SingleBookDetails = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book.json`, {
        cache: "no-cache"
    })
    const books = await res.json()
    const book = books.find((item) => item.id === Number(id))

    if (!book) {
        return (
            <div className="min-h-[80hv] bg-background flex items-center justify-center px-6 py-16">
                <div className="max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        BookHaven Library
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold font-serif text-primary mb-4">
                        404
                    </h1>

                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-4">
                        Book Not Found
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                        The book you’re looking for doesn’t exist or may have been moved.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-3 transition-all duration-200"
                        >
                            <HomeIcon className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <Link
                            href="/books"
                            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card hover:bg-primary/50 text-foreground font-medium px-6 py-3 transition-all duration-200"
                        >
                            <Search className="w-4 h-4" />
                            Browse Books
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <BookDetails book={book} />
        </div>
    );
};

export default SingleBookDetails;