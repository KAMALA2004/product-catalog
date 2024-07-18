import React from 'react';

const products = [
  { id: 1, name: 'Ferro Rocher', price: 150, image: 'https://cococart.in/cdn/shop/products/IMG_2882_f779c98b-6468-405f-94a1-afef515d01b7.jpg?v=1659950252' },
  { id: 2, name: 'Butter', price: 50, image: 'https://media.istockphoto.com/id/1362717505/vector/milk-product-natural-ingredient-butter-or-margarine-icon-concept-cartoon-organic-dairy.jpg?s=612x612&w=0&k=20&c=lsNoweI2yrj5PyED5YZ5gELk_worcwYEP0vuA8ekHN0=' },
  { id: 3, name: 'Tomatoes', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2mW87ozAJTgLp_hit2UGKoH9BGutwuBo6eGXs06HNduvlyzbNqVUAsh5lSTP0akGIn8&usqp=CAU' },
];

const ProductCatalog = ({ addToCart }) => {
  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rs:{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
