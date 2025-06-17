import { useState } from "react";
import "./listProductByCategory.css";
import product1 from "@/assets/images/products/product1.webp";
import { Rate } from "antd";
function ListProductByCategory({ category }) {
const [products, setProducts] = useState([
  { id: 1, name: "Cây cảnh 1", price: 100000, image: product1 , rate : 4.5},
  { id: 2, name: "Cây cảnh 2", price: 150000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_vt8T3PrIWB6ZgdYfKkxEfMhA3G68tXs6A&s" , rate : 4.5 },
  { id: 3, name: "Cây cảnh 2", price: 150000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_vt8T3PrIWB6ZgdYfKkxEfMhA3G68tXs6A&s" ,rate : 2.5},
  { id: 4, name: "Cây cảnh 2", price: 150000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_vt8T3PrIWB6ZgdYfKkxEfMhA3G68tXs6A&s" ,rate : 5},
  { id: 5, name: "Cây cảnh 2", price: 150000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_vt8T3PrIWB6ZgdYfKkxEfMhA3G68tXs6A&s" ,rate : 4},
  { id: 6, name: "Cây cảnh 2", price: 150000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_vt8T3PrIWB6ZgdYfKkxEfMhA3G68tXs6A&s" ,rate : 4.5},
]);

  return (
    <div className="list-product-by-category">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <Rate className="product-rating" allowHalf defaultValue={product.rate} />
            <p className="product-price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</p>
            <button className="add-to-cart-button">Thêm vào giỏ hàng</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ListProductByCategory;