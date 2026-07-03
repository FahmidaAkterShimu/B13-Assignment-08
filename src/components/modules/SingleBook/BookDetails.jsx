"use client";

import Link from 'next/link';
import FiveStar from "@/components/modules/Shared/FiveStar";
import { BookMarked, ChevronRight, CircleAlert, CircleCheckBig } from "lucide-react";
import Image from 'next/image';
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const BookDetails = ({ book }) => {
    const { image_url, category, title, author, rating, available_quantity, publication_year, description } = book;

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

    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const handleBorrow = () => {
        if (!session) {
            toast.error("Please log in first to borrow books.");
            router.push("/login");
            return;
        }

        toast.success(`"${title}" borrowed successfully!`);
    };

    return (
        <div className="container mx-auto px-6 lg:px-12 py-12">
            <Link
                href="/books"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-8 transition-colors"
            >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to All Books
            </Link>

            <div className="grid lg:grid-cols-[380px_1fr] gap-14">
                {/* Left Side: Image */}
                <div className='rounded-2xl overflow-hidden shadow-2xl border border-border aspect-3/4 bg-muted'>
                    <Image
                        src={image_url}
                        alt={title}
                        width={200}
                        height={200}
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Right Side */}
                <div className="flex flex-col">
                    {/* Badge */}
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border w-fit mb-5 bg-amber-100 text-amber-800 border-amber-200 ${badgeClass}`}>
                        {category}
                    </span>

                    {/* Title, Author, Rating */}
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                        {title}
                    </h1>
                    <p className="text-muted-foreground text-lg mb-4">
                        by {author}
                    </p>
                    <div className='flex items-center gap-1'>
                        <FiveStar />
                        <span className='text-xs text-muted-foreground ml-1'>{rating}</span>
                    </div>

                    {/* Publication & Availability */}
                    <div className="grid grid-cols-2 gap-6 my-8 py-8 border-y border-border">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                Published
                            </p>
                            <span className="font-semibold">{publication_year}</span>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                Availability
                            </p>
                            <div className="font-semibold flex items-center gap-1.5 text-emerald-600">
                                <CircleCheckBig className="w-4 h-4" />
                                {available_quantity} copies left
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base mb-8">
                        {description}
                    </p>

                    {/* Button */}
                    <button
                        onClick={handleBorrow}
                        disabled={isPending}
                        className="flex items-center justify-center gap-2 font-bold px-10 py-4 rounded-xl transition-all w-full lg:w-auto lg:self-start bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg hover:shadow-primary/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <BookMarked className="w-5 h-5" />
                        {isPending ? "Checking..." : "Borrow This Book"}
                    </button>

                    {/* Dynamic message */}
                    {!isPending && !session && (
                        <p className='text-sm text-muted-foreground mt-3 flex items-center gap-1'>
                            <CircleAlert className='w-4 h-4' />
                            You must be
                            <Link
                                href="/login"
                                className='text-primary underline underline-offset-2'
                            >
                                logged in
                            </Link>
                            to borrow books.
                        </p>
                    )}

                    {!isPending && session && (
                        <p className='text-sm text-emerald-600 mt-3 flex items-center gap-1'>
                            <CircleCheckBig className='w-4 h-4' />
                            You are logged in and can borrow this book.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;