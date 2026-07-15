import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { Avatar } from '@heroui/react';
import { CircleCheckBig, Clock, LogOut } from 'lucide-react';
import LogoutButton from "@/components/modules/Profile/LogoutButton";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });


    if (!session?.user) {
        redirect("/login");
    }

    const user = session.user;

    const generateProfileStats = (id) => {
        let hash = 0;

        for (let i = 0; i < id.length; i++) {
            hash += id.charCodeAt(i);
        }

        return {
            borrowedBooks: (hash % 15) + 1,
            memberYear: 2024 + (hash % 3),
            memberMonth: ["January", "March", "May", "August", "October"][hash % 5],
        };
    };

    const stats = generateProfileStats(user.id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book.json`);

    const books = await res.json();

    const getRandomBooks = (books) => {
        const shuffled = [...books].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, 3);
    };
    const borrowedBooks = getRandomBooks(books);

    const getDueDays = (id) => {
        return (Number(id) % 14) + 1;
    };

    return (
        <div className='container mx-auto px-6 lg:px-12 py-12 max-w-4xl'>
            <h1 className='text-4xl font-bold mb-10'>Member Dashboard</h1>

            <div className='grid lg:grid-cols-[280px_1fr] gap-10'>
                {/* Left side */}
                <div className='bg-card border border-border rounded-2xl p-8 text-center h-fit'>
                    <div className='relative inline-block mb-5'>
                        <Avatar
                            src={user.image || undefined}
                            name={user.name}
                            className='w-24 h-24 rounded-full object-cover border-4 border-primary/20 mx-auto' />
                        <div className='absolute bottom-0 right-0 w-7 h-7 bg-emerald-500 rounded-full border-2 border-card flex items-center justify-center'>
                            <CircleCheckBig className='w-4 h-4 text-white' />
                        </div>
                    </div>
                    <h2 className='text-xl font-bold mb-1'>{user.name}</h2>
                    <p className='text-sm text-muted-foreground mb-1'> {user.email}</p>
                    <span className='inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mt-2 mb-6'>Active Member</span>

                    <div className='space-y-3'>
                        <Link
                            href="/profile/update"
                            className="block w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-xl hover:bg-primary/90 transition-all text-sm text-center"
                        >
                            Update Profile
                        </Link>

                        <LogoutButton />
                    </div>
                </div>

                {/* Right side */}
                <div className='space-y-8'>
                    <div className='bg-card border border-border rounded-2xl p-8'>
                        <h3 className='font-bold text-lg mb-5'>
                            Account Information
                        </h3>

                        <div className='space-y-4'>
                            <div className='flex justify-between items-center py-3 border-b border-border last:border-0'>
                                <span className='text-sm text-muted-foreground'>Full Name</span>
                                <span className='text-sm font-semibold'> {user.name}</span>
                            </div>
                            <div className='flex justify-between items-center py-3 border-b border-border last:border-0'>
                                <span className='text-sm text-muted-foreground'>Email Address</span>
                                <span className='text-sm font-semibold'>{user.email}</span>
                            </div>
                            <div className='flex justify-between items-center py-3 border-b border-border last:border-0'>
                                <span className='text-sm text-muted-foreground'>Member Since</span>
                                <span className='text-sm font-semibold'>{stats.memberMonth} {stats.memberYear}</span>
                            </div>
                            <div className='flex justify-between items-center py-3 border-b border-border last:border-0'>
                                <span className='text-sm text-muted-foreground'>Books Borrowed</span>
                                <span className='text-sm font-semibold'>{stats.borrowedBooks} total</span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card border border-border rounded-2xl p-8'>
                        <h3 className='font-bold text-lg mb-5'>Currently Borrowing</h3>

                        <div className='space-y-4'>
                            {
                                borrowedBooks.map((book) => (
                                    <div
                                        key={book.id}
                                        className='flex items-center gap-4 p-3 bg-background rounded-xl border border-border'
                                    >

                                        <Image
                                            src={book.image_url}
                                            alt={book.title}
                                            width={60}
                                            height={80}
                                            className="rounded-lg object-cover"
                                        />

                                        <div className='flex-1 min-w-0'>
                                            <p className='font-semibold text-sm truncate'>
                                                {book.title}
                                            </p>

                                            <p className='text-xs text-muted-foreground'>
                                                {book.author}
                                            </p>

                                            <div className='text-xs text-amber-600 mt-1 flex items-center gap-1'>
                                                <Clock className='w-3 h-3' />
                                                Due in {getDueDays(book.id)} days
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;