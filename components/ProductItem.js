import React, { useContext } from 'react'
import Link from 'next/link'

export default function ProductItem({product}){
    return(
        <div className='card'>
            <Link href={`/product/${product.slug}`} legacyBehavior>
                <a>
                    <img src={product.image} className="rounded shadow"/>
                </a>
            </Link>
            <div className='flex flex-col items-center justify-center p-5'>
                <Link href={`/product/${product.slug}`} legacyBehavior>
                    <a><h2 className='text-lg'>{product.name}</h2></a>
                </Link>
                <p className='mb-2'>{product.category}</p>
                <p>${product.price}</p>
                <button className='primary-button' type='button'>See this product</button>
            </div>
        </div>
    )
}