'use client';

import Link from 'next/link';
import { authClient } from '@/lib/auth-client'; // adjust the path

const ReadyToStart = () => {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) return null; // or a loading skeleton

    return (
        <div className="bg-primary mx-6 lg:mx-12 mb-20 rounded-3xl overflow-hidden">
            <div className="relative px-8 lg:px-16 py-16 text-center">
                <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
                    Ready to Start Reading?
                </h2>

                <p className="text-white/75 text-lg mb-8">
                    Join thousands of readers who borrow books from BookHaven every day.
                </p>

                <Link
                    href={session ? "/books" : "/login"}
                    className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl"
                >
                    {session ? "Browse Books" : "Get Started Free"}
                </Link>
            </div>
        </div>
    );
};

export default ReadyToStart;