import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarS from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import Account from './pages/Account';



function App() {

  return(
    <>
      <NavBarS />
      <Routes>
        <Route path='/account' element={<Account />}/>
      </Routes>
    </>
  )

}

export default App;
