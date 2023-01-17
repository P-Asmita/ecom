import Layout from '../../components/layout'
import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import data from '../../utility/data';
import Link from 'next/link';
import Image from 'next/image';  
import { Store } from '../../utility/Store';

export default function ProductScreen(){
    const {state, dispatch} =useContext (Store);


    const {query}=useRouter();
    const {slug}=query;
    const product=data.products.find(x=>x.slug===slug);
    if(!product){
        return <div>Product Not Found</div>;
    }

    const addToCartHandler=()=>{
        const existItem= state.cart.cartItems.find((x) => x.slug === product.slug);
        const quantity= existItem ? existItem.quantity+1 : 1;
        dispatch ({ type: 'CART_ADD_ITEM',payload:{...product,quantity}});
        
//Need to add quantity measure 

    };
    return(
        <Layout title={product.name}>
            <div className='px-2 py-2 font-bold text-xl'>
                <Link href="/" legacyBehavior>Back to Products</Link>
            </div>
            <div className='grid md:grid-cols-4 md:gap-3'>
                <div className='md:col-span-2 px-4 pb-4'>
                    <Image src={product.image} width={800} height={800}></Image>
                </div>
                <div>
                    <ul>
                        <li>
                            <h1 className='text-lg'>{product.name}</h1>
                        </li>
                        <li>Category: {product.category}</li>
                    </ul>
                </div>
                <div className='pr-5'>
                    <div className='card p-5'>
                        <div className='mb-2 flex justify-between'>
                            <div>Price </div>
                            <div>${product.price}</div>
                        </div>
                        
                        <button className='primary-button w-full' onClick={addToCartHandler}>Add to Cart</button>
                    </div>
                    
                </div>
            </div>

        </Layout>
    )
}