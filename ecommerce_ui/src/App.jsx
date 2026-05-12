import {Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import CreateProduit from './Components/Uploadproduit';
import AdminDashboard from './Components/AdminPage';
import AuthPage from './Components/AuthPage';
import UserDashboard from './Components/UserDashboard';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckoutPage';
import { ModalProvider } from "./components/ModalContext";
import ContactForm from "./Components/ContactUs.jsx";
import RestoreAccount from './Components/RestoreAccount.jsx';



import OrderStatusMap from "./Components/OrderStatusMap.jsx";
import ClientOrderCheck from "./Components/Client_OrderCheck.jsx";

const App = () => {
  return (
    <>
    
        <Routes>
          
          <Route path="/"  element={<LandingPage/>}/>
          <Route path="/upload" element={<CreateProduit/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/AuthPage" element={<AuthPage/>} />
          <Route path="/UserDashboard" element={<UserDashboard/>} />
          <Route path="/CartPage" element={<CartPage/>} />
          <Route path="/CheckoutPage" element={<CheckoutPage/>} />
            <Route path="/Order/:id" element={<OrderStatusMap/>} />
        <Route path="/OrderInformations" element={<ClientOrderCheck/>} />
        <Route path="/ContactUs"  element={<ContactForm/>}/>
        <Route path="/restore_account"  element={<RestoreAccount/>}/>
        </Routes>
    
    </>
  )
}

export default App;