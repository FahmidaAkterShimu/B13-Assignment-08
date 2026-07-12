"use client";
import { useMemo, useState } from "react";
import BookCard from "../Shared/BookCard";

const Books = ({ books }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(books.map(book => book.category))
    ];

    const filteredBooks = useMemo(() => {
        if (selectedCategory === "All") return books;

        return books.filter(
            book => book.category === selectedCategory
        );
    }, [books, selectedCategory]);

    return (
        <div>
            {/* Mobile Filter */}
            <div className="lg:hidden bg-card border border-border rounded-2xl p-4 md:p-6 sticky top-24 mb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <p className="font-bold text-sm uppercase tracking-widest text-muted-foreground">
                        Categories
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {categories.map((category) => {
                            const count =
                                category === "All"
                                    ? books.length
                                    : books.filter(
                                        (book) => book.category === category
                                    ).length;

                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${selectedCategory === category
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-[#FFB900]/10 text-foreground"
                                        }`}
                                >
                                    {category}
                                    <span className="ml-2 text-xs opacity-60">
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex gap-8">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-56 shrink-0">
                    <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                        <p className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-5">
                            Categories
                        </p>

                        <div className="space-y-1.5">
                            {categories.map(category => {
                                const count =
                                    category === "All"
                                        ? books.length
                                        : books.filter(
                                            book => book.category === category
                                        ).length;

                                return (
                                    <button
                                        key={category}
                                        onClick={() =>
                                            setSelectedCategory(category)
                                        }
                                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${selectedCategory === category
                                            ? "bg-primary text-primary-foreground"
                                            : "hover:bg-[#FFB900]/10 text-foreground"
                                            }`}
                                    >
                                        {category}

                                        <span className="float-right text-xs opacity-60">
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </aside>

                {/* Books */}
                <div className="flex-1 min-w-0">
                    <p className="mb-6 text-sm text-muted-foreground">
                        {filteredBooks.length} books found
                    </p>

                    {/* BookCard */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredBooks.map((book) => (
                            <BookCard
                                key={book.id}
                                book={book}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;