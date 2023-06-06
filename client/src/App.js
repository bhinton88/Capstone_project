import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarS from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import Account from './pages/Account';
import CreateUserForm from './components/CreateUserForm';
import { UserProvider } from './context/UserContext';
import { CategoryProvider } from './context/CategoriesContext';



function App() {

  return(
    <>
      <UserProvider>
        <CategoryProvider>
          <NavBarS />
          <Routes>
            <Route path='/new_user' element={<CreateUserForm />}/>
            <Route path='/account' element={<Account />}/>
          </Routes>
        </CategoryProvider>
      </UserProvider>
    </>
  )

}

export default App;
