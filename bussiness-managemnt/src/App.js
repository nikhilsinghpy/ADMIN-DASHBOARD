
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './Component/Header/Header';
import { Footer } from './Component/Footer/Footer';
import { Dashboard } from './Component/Dashboard/Dashboard';
import Sidebar from './Component/Sidrnav/Sidebar';
import { AboutUs } from './Component/Aboutus.js/AboutUs';
function App() {
  return (
    <BrowserRouter>
      <Header/>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/about" element={<AboutUs/>}/>
            </Routes>
          </Sidebar>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
