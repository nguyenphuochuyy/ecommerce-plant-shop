import {Routes , Route , Navigate} from 'react-router-dom';
import Home from "../pages/home"
function AppRoutes() {
  return (
  <Routes>
    <Route 
      path="/"
      element= {<Home />}
    ></Route>
  </Routes>
  );
}

export default AppRoutes;