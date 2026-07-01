import { Search } from "lucide-react";
import Books from "./Books";

const BooksHeading = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book.json`, {
        cache: "no-cache"
    })
    const books = await res.json()

    return (
        <div className="container mx-auto px-4 lg:px-12 pt-10">
            {/* Heading */}
            <div className="mb-8">
                <h1 className="font-serif text-4xl font-bold mb-2">All Books</h1>
                <p className="text-muted-foreground">Browse our complete collection of 12 titles</p>
            </div>

            {/* Search */}
            <div className="relative mb-8">
                <Search className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search books by title..."
                    className="w-full bg-card border border-border rounded-xl pl-12 pr-6 py-4 text-base outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                </input>
            </div>
        </div>
    );
};

export default BooksHeading;