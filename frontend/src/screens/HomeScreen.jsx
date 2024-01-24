import { Row, Col } from "react-bootstrap";
//import {useEffect, useState} from "react";
//import products from '../products';
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import React from "react";
import Meta from '../components/Meta';
import Paginate from "../components/Paginate";
import { useParams , Link} from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";
//import axios from 'axios';

const HomeScreen = () => {

  const { pageNumber, keyword } = useParams();
  const { data , isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  
  return (
    <>
     { !keyword ? <div style={{ width: '100%',height: '80%' ,maxWidth: '500px', maxHeight: '400px', margin: '0 auto ' }}>
  {<ProductCarousel />}</div>: <Link to='/' className='btn btn-light mb-4'>Go Back</Link>}

    <Meta title='Welcome'/>
     {isLoading ? (
        <Loader />
      ) : error ? (
      
          <Message variant="danger">{error?.data?.message || error.error}
          </Message>
      
      ) : (
        <>
    <h1>Latest Products</h1>
    <Row>
      {data.products.map((product) => (
        <Col  key={product._id} sm={12} md={6} ls={4} xl={3}>
            <Product product={product}/>
          
        </Col>
      ))}
    </Row>
    <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''}/>
  </>) }
  </>
  );
};

export default HomeScreen