
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, useLoaderData } from 'react-router-dom'

import { getAllProducts, deleteProduct } from '../api/productAPI'
import { useDispatch, useSelector } from 'react-redux'

import { deleteProductAction, getAllProductsAction } from '../store/productSlice'
export function Products() {

    const dispatch = useDispatch();

    const { products, isLoading, error } = useSelector( state => state.productSlice )
    useEffect( () => {
        dispatch( getAllProductsAction() )

    }, [] )

    const deleteHandler = async ( productId ) => {

        dispatch( deleteProductAction( productId ) )
    }

    return (
        <div className='p-1 text-center mt-5'>
            <h1>Our Products</h1>
            <div className="container d-flex flex-column align-items-start">
                <Link to='/products/0/edit' className='mb-3'>

                    <i className="fs-3 m-2 bi bi-plus-circle-fill"></i>
                </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>quantity</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map( ( product ) => {
                            return (

                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>

                                        <Link to={`/products/${product.id}`}>

                                            <i className="mx-2 text-warning fs-5 bi bi-eye-fill"></i>
                                        </Link>

                                        <Link to={`/products/${product.id}/edit`}>
                                            <i className="mx-2 text-info fs-5 bi bi-pencil-square"></i>
                                        </Link>
                                        <i onClick={() => deleteHandler( product.id )} className="mx-2 text-danger fs-5 bi bi-trash3-fill"></i>
                                    </td>
                                </tr>

                            )

                        } )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
