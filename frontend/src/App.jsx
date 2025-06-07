import "./assets/styles/global.css";
import {Layout } from 'antd'
import AppRoutes from './routes/AppRoutes'
const { Content } = Layout;
function App() {
  return (
    <>
      <Layout>
        {/* header */}
       <Content >
         <AppRoutes />
       </Content>
        {/* Footer */}
      </Layout>
    </>
  )
}

export default App
