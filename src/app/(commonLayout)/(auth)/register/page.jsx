'use client';

import { Globe, User } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const RegisterPage = () => {
    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegisterFunc = async (data) => {
        try {
            await authClient.signUp.email(
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    image: data.image,
                },
                {
                    onRequest: () => {
                        setLoading(true)
                    },

                    onSuccess: () => {
                        setLoading(false)
                        toast.success('Account created successfully! 🌸 Welcome to Book Haven')
                            router.push("/");
                    },

                    onError: (ctx) => {
                        setLoading(false)
                        toast.error(ctx.error.message ||'Registration failed. Please try again')
                    },
                },
            )
        } catch (err) {
            setLoading(false)
            toast.error('Something went wrong')
        }
    };

    // Google Sign in
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: '/',
        });
    }

    return (
        <div className='min-h-[80vh] flex items-center justify-center px-4 py-16'>
            <div className='w-full max-w-md'>
                <div className='bg-card border border-border rounded-2xl p-10 shadow-xl'>
                    <div className='text-center mb-8'>
                        <div className='w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                            <User className='w-7 h-7 text-primary' />
                        </div>
                        <h1 className='text-3xl font-bold mb-1'>Create Account</h1>
                        <p className='text-muted-foreground text-sm'>
                            Join BookHaven today — it&apos;s free
                        </p>
                    </div>

                    {/* Register Form */}
                    <form onSubmit={handleSubmit(handleRegisterFunc)} className='space-y-5'>
                        {/* Full Name */}
                        <div>
                            <label className='block text-sm font-semibold mb-2'>
                                Full Name
                            </label>
                            <input
                                {...register('name', {
                                    required: 'Full name is required',
                                })}
                                type='text'
                                placeholder='Your Name'
                                className='w-full border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background transition-all text-sm'
                            />
                            {errors.name && (
                                <p className='text-red-500 text-sm mt-2'>
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className='block text-sm font-semibold mb-2'>
                                Email
                            </label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                })}
                                type='email'
                                placeholder='you@gmail.com'
                                className='w-full border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background transition-all text-sm'
                            />
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-2'>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className='block text-sm font-semibold mb-2'>
                                Photo URL (optional)
                            </label>
                            <input
                                {...register('image')}
                                type='url'
                                placeholder='https://...'
                                className='w-full border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background transition-all text-sm'
                            />
                        </div>

                        {/* Password */}
                        <div className='relative'>
                            <label className='block text-sm font-semibold mb-2'>
                                Password
                            </label>
                            <input
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                })}
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Min. 6 characters'
                                className='w-full border border-border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background transition-all text-sm'
                            />

                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-4 top-10.5 text-muted-foreground hover:text-foreground'
                            >
                                {showPassword ? (
                                    <FaEye className='w-5 h-5 cursor-pointer' />
                                ) : (
                                    <FaEyeSlash className='w-5 h-5 cursor-pointer' />
                                )}
                            </button>

                            {errors.password && (
                                <p className='text-red-500 text-sm mt-2'>
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <button
                            type='submit'
                            disabled={loading}
                            className='w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer'
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </form>

                    <div className='relative my-6'>
                        <div className='absolute inset-0 flex items-center'>
                            <div className='w-full border-t border-border'></div>
                        </div>
                        <div className='relative text-center'>
                            <span className='bg-card px-4 text-xs text-muted-foreground'>
                                OR CONTINUE WITH
                            </span>
                        </div>
                    </div>

                    {/* Register with Google */}
                    <button
                        onClick={handleGoogleSignin}
                        type='button'
                        className='w-full border border-border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-[#FFB900]/10 transition-colors font-medium text-sm cursor-pointer'
                    >
                        <Globe className='w-5 h-5 text-blue-500' />
                        Continue with Google
                    </button>

                    <p className='text-center text-sm text-muted-foreground mt-6'>
                        Already have an account?
                        <Link
                            href='/login'
                            className='text-primary font-semibold hover:underline ml-1'
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;