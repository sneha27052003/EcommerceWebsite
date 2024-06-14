import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import "../styles/AuthStyles.css";
import { useParams, useNavigate } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container mt-2">
        <div className="d-flex product-card">
          <div className="pro-im">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="product-img"
              alt={product.name}
              height="300"
              width={"350px"}
            />
          </div>
          <div className="product-details">
            <h1 className="head-p">Product Details</h1>
            <h6>Name : {product.name}</h6>
            <h6>Description : {product.description}</h6>
            <h6>Price : {product.price}</h6>
            <h6>Category : {product?.category?.name}</h6>
            <button className="btn-add">ADD TO CART</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row container">
        <h2>Similar Products</h2>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex col-12">
          {relatedProducts?.map((p) => (
            <div className="card card-add m-2" style={{ width: "18rem" }}>
              <div className="card-im">
                <img
                  src={`/api/v1/product/product-photo/${p?._id}`}
                  className="card-i"
                  alt={p.name}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text"> $ {p.price}</p>
                <div className="btn-card">
                  <button
                    className="btn-l"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button class="btn-l">ADD TO CART</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
