import { Route, Routes } from 'react-router-dom';
import AerodromeComponent from './components/Aerodrome/AerodromeComponent';
import LoginComponent from './components/Login/LoginComponent';
import CadastroComponent from './components/Cadastro/CadastroComponent';
import HomeComponent from './components/Home/HomeComponent';

import HeaderComponent from './components/Header/HeaderComponent';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuth } from './components/Auth/Auth';

function App() {

  return(
    <div>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<PrivateOutlet />}>
            <Route path='/home' element={<HomeComponent />} />
            <Route path='/aerodromes' element={<AerodromeComponent />} />
          </Route>
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/cadastro' element={<CadastroComponent />} />
        </Routes>
      </main>
    </div>
  )
}

export function PrivateOutlet() {
  const auth = isAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default App;