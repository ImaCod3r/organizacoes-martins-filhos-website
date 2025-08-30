import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import CustomHeader from './components/CustomHeader.jsx';
import CustomDynamicHero from './components/CustomDynamicHero.jsx';
import CustomContactForm from "./components/CustomContactForm.jsx";
import CustomFooter from './components/CustomFooter.jsx';
import ScrollAnimRepeat from './components/ScrollAnim.jsx';

// Pages
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import Portfolio from "./pages/Portfolio.jsx"; 

function App() {
  return (
    <Router>
      <CustomHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactos" element={<Contacts />} />
        </Routes>
      </main>
      <CustomFooter />
    </Router>
  )
}

export default App;