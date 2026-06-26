import React from 'react';
import Marquee from "react-fast-marquee";

const heading = [
    {
        "id": 1,
        "text": "📚 New Arrival: The Midnight Library"
    },
    {
        "id": 2,
        "text": "🔥 Best Seller: Atomic Habits"
    },
    {
        "id": 3,
        "text": "📖 Borrow up to 5 books at a time"
    },
    {
        "id": 4,
        "text": "🎉 30% Discount on Premium Membership"
    },
    {
        "id": 5,
        "text": "🚀 Newly Added: Clean Code"
    },
    {
        "id": 6,
        "text": "⭐ Featured Author: James Clear"
    },
    {
        "id": 7,
        "text": "📅 Book Fair starts on July 20"
    },
    {
        "id": 8,
        "text": "💡 Free eBook access for Premium Members"
    },
    {
        "id": 9,
        "text": "🏆 Top Rated: The Psychology of Money"
    },
    {
        "id": 10,
        "text": "📦 Reserve books online and pick them up later"
    }
]

const BooksMarquee = () => {
    return (
        <div className='bg-primary text-primary-foreground overflow-hidden py-2.5'>
            <Marquee
                speed={45}
                gradient={false}
                pauseOnHover={true}
                autoFill={true}>
                {heading.map((item) => (
                    <span
                        key={item.id}
                        className="inline-flex items-center gap-3 mx-10 text-sm font-medium tracking-wide cursor-pointer"
                    >
                        {/* Small Dot */}
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/70  animate-pulse"></span>

                        {/* Text */}
                        <span>{item.text}</span>
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default BooksMarquee;