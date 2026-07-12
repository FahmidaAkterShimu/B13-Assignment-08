"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import Books from "./Books";

const BooksHeading = ({ books }) => {
    const [search, setSearch] = useState("");

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 lg:px-12 pt-10">

            {/* Heading */}
            <div className="mb-8">
                <h1 className="font-serif text-4xl font-bold mb-2">
                    All Books
                </h1>
                <p className="text-muted-foreground">
                    Browse our complete collection of {filteredBooks.length} titles
                </p>
            </div>

            {/* Search */}
            <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                <input
                    type="text"
                    placeholder="Search books by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-card border border-border rounded-xl pl-12 pr-6 py-4 text-base outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
            </div>

            <Books books={filteredBooks} />

        </div>
    );
};

export default BooksHeading;