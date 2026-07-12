'use client';

import { Globe, Library } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const handleLoginFunc = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error)

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success('Login successful');
    };

    const handleGoogleLogin = async () => {
        const { error } = await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/',
        });

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='min-h-[80vh] flex items-center justify-center px-4 py-16'>
            <div className='w-full max-w-md'>
                <div className='bg-card border border-border rounded-2xl p-10 shadow-xl'>
                    <div className='text-center mb-8'>
                        <div className='w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                            <Library className='w-7 h-7 text-primary' />
                        </div>
                        <h1 className='text-3xl font-bold mb-1'>Welcome Back</h1>
                        <p className='text-muted-foreground text-sm'>
                            Sign in to your BookHaven account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-5'>
                        {/* Email */}
                        <div>
                            <label className='block text-sm font-semibold mb-2'>Email</label>
                            <input
                                type='email'
                                placeholder='you@gmail.com'
                                {...register('email', {
                                    required: 'Email is required',
                                })}
                                className='w-full border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background transition-all text-sm'
                            />
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className='relative'>
                            <label className='block text-sm font-semibold mb-2'>Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='••••••••'
                                {...register('password', {
                                    required: 'Password is required',
                                })}
                                className='w-full border border-border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background transition-all text-sm'
                            />

                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-4 top-10.5 text-muted-foreground hover:text-foreground'
                            >
                                {showPassword ? <FaEye className='cursor-pointer' /> : <FaEyeSlash className='cursor-pointer' />}
                            </button>

                            {errors.password && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-60 cursor-pointer'
                        >
                            {isSubmitting ? 'Logging in...' : 'Login'}
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

                    {/* Login with Google */}
                    <button
                        type='button'
                        onClick={handleGoogleLogin}
                        className='w-full border border-border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-[#FFB900]/10 transition-colors font-medium text-sm cursor-pointer'
                    >
                        <Globe className='w-5 h-5 text-blue-500' />
                        Continue with Google
                    </button>

                    <p className='text-center text-sm text-muted-foreground mt-6'>
                        Don&apos;t have an account?{' '}
                        <Link
                            href='/register'
                            className='text-primary font-semibold hover:underline'
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;