import React, { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { SiInstagram,SiGithub,SiLinkedin } from 'react-icons/si';
import { Store } from '../utility/Store';

export default function layout({title, children}){

    const{state, dispatch} =useContext(Store);
    const {cart} = state;

    return(
        <>
            <Head>
                <title>{title ? title+' : SWsite':'SomeWebsite'}</title>
            </Head>
        <div className="flex min-h-screen flex-col justify-between">
            <div className='pb-3'>
            <header className='bg-red-400 py-3'>
                <nav className='flex h-10 justify-between px-3'>
                    <Link legacyBehavior href="/" >
                        <a className='text-3xl font-bold'>SWsite</a>
                    </Link>
                    <div>
                        <Link legacyBehavior href="/login"><a className="px-2 font-bold">Login</a></Link>  
                        <Link legacyBehavior href="/cart">
                            <a className="px-2 font-bold">
                                Cart
                                {cart.cartItems.length>0 && (
                                    <span className='ml-1 rounded-full bg-black px-3 py-1 text-xs font-bold text-white'>
                                        {cart.cartItems.reduce((a,c) => a + c.quantity,0)}
                                    </span>
                                )}
                            </a>
                        </Link>
                    </div>
                </nav>
            </header>
            </div>
            <main>
                {children}
            </main>
            <footer className='bg-red-50'>
            <div className="container mx-auto flex justify-center py-2">
            <div className="py-3">
                <div className="py-3">
                    <div className="flex gap-6 justify-center">
                        <Link legacyBehavior href={'/'}><a><SiInstagram></SiInstagram></a></Link>
                        <Link legacyBehavior href={'/'}><a><SiGithub></SiGithub></a></Link>
                        <Link legacyBehavior href={'/'}><a><SiLinkedin></SiLinkedin></a></Link>
                    </div>
                    <p className='py-3 text-gray-500'>
                        Made by Asmita P.
                    </p>
                </div>
            </div>

        </div>
            </footer>
        </div>
        </>
    );
}