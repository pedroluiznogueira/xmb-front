import { Route, Routes } from 'react-router-dom';
import AerodromeComponent from './components/Aerodrome/AerodromeComponent';
import LoginComponent from './components/Login/LoginComponent';
import CadastroComponent from './components/Cadastro/CadastroComponent';
import HomeComponent from './components/Home/HomeComponent';

import HeaderComponent from './components/Header/HeaderComponent';

function App() {

  return(
    <div>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path='/aerodromes' element={<AerodromeComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/cadastro' element={<CadastroComponent />} />
          <Route path='/home' element={<HomeComponent />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;