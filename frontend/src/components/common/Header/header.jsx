import '../../../assets/styles/base.css'
import "./header.css"
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import logo from '@/assets/images/logo.webp'
function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <ul className="menu-list">
              <li><a href="/">TRANG CHỦ</a></li>
              <li><a href="/products">SẢN PHẨM</a></li>
              <li><a href="/about">GIỚI THIỆU</a></li>
              <li><a href="/contact">LIÊN HỆ</a></li>
            </ul>
          </div>
          <div className="cart">
            <Button type="text" icon={<UserOutlined />} style={{ marginRight: '15px' , fontSize : '24px' }} />
            <Button type="text" icon={<HeartOutlined />} style={{ marginRight: '15px' , fontSize : '24px'}} />
            <Button type="text" icon={<ShoppingCartOutlined />} badge={{ count: 2 }} style={{ fontSize : '24px'}} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;