'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { User } from 'lucide-react';

const UpdatePage = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();

    const user = session?.user;

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        defaultValues: {
            name: user?.name || '',
            image: user?.image || '',
        },
    });

    const onSubmit = async (data) => {
        try {
            await authClient.updateUser({
                name: data.name,
                image: data.image,
            });

            toast.success('Profile updated successfully!');

            router.push('/profile');
            router.refresh();
        } catch (error) {
            toast.error('Failed to update profile');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md">
                <div className="bg-card border border-border rounded-2xl p-10 shadow-xl">

                    <div className="text-center mb-8">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <User className="w-7 h-7 text-primary" />
                        </div>

                        <h1 className="text-3xl font-bold mb-1">
                            Update Profile
                        </h1>

                        <p className="text-muted-foreground text-sm">
                            Update your account information
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Full Name
                            </label>

                            <input
                                {...register('name', {
                                    required: 'Name is required',
                                })}
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Photo URL
                            </label>

                            <input
                                {...register('image')}
                                type="url"
                                placeholder="https://..."
                                className="w-full border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background transition-all text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-60 cursor-pointer"
                        >
                            {isSubmitting
                                ? 'Updating...'
                                : 'Update Information'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;
