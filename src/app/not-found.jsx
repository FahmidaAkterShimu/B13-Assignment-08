import Link from 'next/link';
import { ArrowLeft, BookOpen, Home, Search } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">

                {/* Left */}
                <div className="space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        <BookOpen className="w-4 h-4" />
                        BookHaven Library
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-6xl md:text-7xl font-bold font-serif text-primary leading-none">
                            404
                        </h1>

                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground leading-tight">
                            Lost in the
                            <span className="block text-yellow-500"> Library Shelves?</span>
                        </h2>

                        <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-7">
                            The page you’re looking for seems to be missing from our collection.
                            It may have been moved, renamed, or never existed in the first place.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-3 transition-all duration-200 shadow-md hover:-translate-y-0.5"
                        >
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <Link
                            href="/books"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card hover:bg-accent text-foreground font-medium px-6 py-3 transition-all duration-200"
                        >
                            <Search className="w-4 h-4" />
                            Browse Books
                        </Link>
                    </div>

                    {/* <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go back home
                    </Link> */}
                </div>

                {/* Right */}
                <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-xl p-8 min-h-112.5 flex items-center justify-center">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-yellow-100/30" />

                        <div className="relative z-10 w-full max-w-md mx-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-primary text-white p-6 shadow-lg rotate-6">
                                    <p className="text-xs uppercase tracking-wider opacity-80 mb-2">Shelf</p>
                                    <h3 className="font-serif text-2xl font-bold">A-404</h3>
                                    <p className="text-sm mt-2 opacity-90">Book not found</p>
                                </div>

                                <div className="rounded-2xl bg-yellow-400 text-gray-900 p-6 shadow-lg rotate-6 mt-8">
                                    <p className="text-xs uppercase tracking-wider opacity-70 mb-2">Status</p>
                                    <h3 className="font-serif text-2xl font-bold">Missing</h3>
                                    <p className="text-sm mt-2">Try another route</p>
                                </div>

                                <div className="col-span-2 rounded-2xl bg-card border border-border p-6 shadow-md">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <BookOpen className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Page unavailable</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Let’s get you back to reading.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="h-20 rounded-xl bg-primary/10" />
                                        <div className="h-20 rounded-xl bg-yellow-100" />
                                        <div className="h-20 rounded-xl bg-primary/5" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-6 text-[120px] md:text-[160px] font-bold font-serif text-primary/10 select-none">
                            404
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;