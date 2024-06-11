import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'


import { getProductById } from '../api/productAPI'


export function ProductDetails() {


    let [ product, setProduct ] = useState( {} )

    let [ isLoading, setIsLoading ] = useState( true )

    var navigate = useNavigate();

    const { id } = useParams();


    useEffect( () => {

        const fetchData = async () => {

            try {
                let response = await getProductById( id )
                console.log( response.data )
                setProduct( response.data )
                setIsLoading( false )
            } catch ( error ) {
                setIsLoading( false )
            }
        }

        fetchData()

    }, [] )
    const backToProducts = () => {

        navigate( '/products' )
    }
    return (
        <>

            {

                isLoading ?

                    <>

                        <h1 className='alert alert-dark'>Loading</h1>
                    </> :
                    <div className='bg-dark p-5 text-center text-light'>
                        <div className="container">


                            <h1>Product Details : {id}</h1>
                            <p className='lead'>Product Name : {product.productName}</p>
                            <p className='lead'>Product Name : {product.price}</p>
                            <button onClick={backToProducts} className='btn btn-success mt-4'>Back</button>
                        </div>


                    </div>
            }


        </>
    )
}
