import "./assets/styles/global.css";
import {Layout } from 'antd'
import AppRoutes from './routes/AppRoutes'
import Header from "./components/common/Header/header";
const { Content } = Layout;
function App() {
  return (
    <>
      <Layout style={{ backgroundColor: '#fff'}}>
        <Header />
       <Content >
         <AppRoutes/>
       </Content>
      </Layout>
    </>
  )
}

export default App
