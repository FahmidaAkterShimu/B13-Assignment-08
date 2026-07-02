import Link from 'next/link';
import FiveStar from "@/components/modules/Shared/FiveStar";
import { BookMarked, ChevronRight, CircleCheckBig } from "lucide-react";
import Image from 'next/image';

const BookDetails = ({ book }) => {
    const { image_url, category, title, author, rating, available_quantity, publication_year, description } = book;

    return (
        <div className="container mx-auto px-6 lg:px-12 py-12">
            <Link
                href="/books"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-8 transition-colors">
                <ChevronRight className="lucide lucide-chevron-right w-4 h-4 rotate-180" />
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
                        className='w-full h-full object-cover'>
                    </Image>
                </div>

                {/* Right Side */}
                <div className="flex flex-col">
                    {/* Badge */}
                    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full border w-fit mb-5 bg-amber-100 text-amber-800 border-amber-200">
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
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Published</p>
                            <span className="font-semibold">{publication_year}</span>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Availability</p>
                            <div className="font-semibold flex items-center gap-1.5 text-emerald-600">
                                <CircleCheckBig className="lucide lucide-circle-check-big w-4 h-4" />
                                {available_quantity} copies left
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base mb-10">
                        {description}
                    </p>

                    {/* Button */}
                    <Link
                        href=""
                        className="flex items-center justify-center gap-2 font-bold px-10 py-4 rounded-xl transition-all w-full lg:w-auto lg:self-start bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg hover:shadow-primary/30">
                        <BookMarked className="lucide lucide-book-marked w-5 h-5" />
                        Borrow This Book
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;