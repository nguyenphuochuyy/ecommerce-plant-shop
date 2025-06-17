import { Tabs } from "antd";
import "./ourProducts.css";
import ListProductByCategory from "../ListProductByCategory/listProductByCategory";
function OurProducts() {
  const items = [
    {
      key: "1",
      label: "Cây hoa trồng trong sân vườn",
      children: (
        <>
          <ListProductByCategory />
        </>
      ),
    },
    {
      key: "2",
      label: "Cây trang trí trong nhà",
      children: "Danh sách các loại cây trang trí trong nhà",
    },
    {
      key: "3",
      label: "Cây cảnh mini để bàn",
      children: "Danh sách các loại cây cảnh mini để bàn",
    },
  ];
  return (
    <>
      <div className="our-products-container">
        <h2>Sản phẩm của chúng tôi</h2>
      </div>
      <div className="our-products-tabs">
        <Tabs
          defaultActiveKey="1"
          items={items}
          tabBarStyle={{  fontSize: "20px" , fontWeight: "550" }}
        
        />
      </div>
    </>
  );
}
export default OurProducts;
