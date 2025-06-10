import { Button, Carousel } from "antd";
import banner1 from "../../assets/images/slider1.webp";
import banner2 from "../../assets/images/slider2.webp";
import banner3 from "../../assets/images/slider3.webp";
import banner4 from "../../assets/images/banner1.webp";
import banner5 from "../../assets/images/banner2.webp";
import "./home.css";
import "animate.css";
import OurProducts from "../../components/Home/OurProducts/ourProducts";
function Home() {
  return (
    <div>
      {/* hero section */}
      <div className="hero-section">
        <Carousel
          dots={true}
          dotPosition="bottom"
          autoplay
          autoplaySpeed={5000}
          className="custom-carousel"
        >
          <div className="carousel-item">
            <div className="carousel-item-content">
              <h2>SIÊU SALE THÁNG 6</h2>
              <p>Giảm giá lên đến 50% cho tất cả sản phẩm</p>
              <button>MUA NGAY</button>
            </div>
            <img src={banner1} alt="Banner 1" className="carousel-img" />
          </div>
          <div className="carousel-item">
            <div className="carousel-item-content">
              <h2>TOP GIẢM GIÁ</h2>
              <p>Giảm giá 20% cho thành viên</p>
              <button>XEM NGAY</button>
            </div>
            <img src={banner2} alt="Banner 2" className="carousel-img" />
          </div>
          <div className="carousel-item">
            <div className="carousel-item-content">
              <h2>SIÊU SALE THÁNG 6</h2>
              <p>Giảm giá 20% cho thành viên </p>
              <button>MUA NGAY</button>
            </div>
            <img src={banner3} alt="Banner 3" className="carousel-img" />
          </div>
        </Carousel>
      </div>
      {/* banner section */}
      <div className="container">
        <div className="banner-section">
          <div className="banner-item">
            <div className="banner-item-content">
              <h2
                style={{ color: "black", fontSize: "32px", fontWeight: "450" }}
              >
                Sản phẩm Big Sale
              </h2>
              <p
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                Cây cảnh <br /> dành cho nội thất
              </p>
              <a className="banner-button" href="">
                Xem ngay
              </a>
            </div>
            <img src={banner4} alt="Banner 4" className="banner-img" />
          </div>
          <div className="banner-item">
            <div className="banner-item-content">
              <h2
                style={{ color: "black", fontSize: "30px", fontWeight: "450" }}
              >
                Top Sản phẩm
              </h2>
              <p
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                Cây cảnh <br /> dành cho sức khỏe
              </p>
              <a className="banner-button" href="">
                Xem ngay
              </a>
            </div>
            <img src={banner5} alt="Banner 5" className="banner-img" />
          </div>
        </div>
        {/* Our Products */}
        <div className="our-products">
          <OurProducts />
        </div>
      </div>
    </div>
  );
}

export default Home;
