import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomePage = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList
    console.log({loading})
    console.log({products})

    useEffect(() => {
        dispatch(listProducts())
       
    }, [dispatch])

    return (
        <div>
            {
                loading ? <Loader />
                    : error ? <Message variant="danger">{error}</Message>
                    : 
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
            }            
        </div>
    )
}

export default HomePage
