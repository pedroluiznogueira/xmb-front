import { Route, Routes } from 'react-router-dom';
import AerodromeComponent from './components/Aerodrome/AerodromeComponent';

import HeaderComponent from './components/Header/HeaderComponent';

function App() {

  return(
    <div>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path='/aerodromes' element={<AerodromeComponent />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;