import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Fetch product data based on the productId
    // You would typically fetch this data from an API or database
    // For this example, we'll assume you have a function to fetch product data
    const fetchProductData = async () => {
      try {
        const response = await fetch(`API_URL/products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProductData(data);
        } else {
          console.error('Failed to fetch product data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{productData.title}</h1>
      <div>
        {/* Display product images */}
        {productData.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>
      <div>
        {/* Display product reviews */}
        <h2>Product Reviews</h2>
        <ul>
          {productData.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;
