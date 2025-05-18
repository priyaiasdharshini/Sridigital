import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import Designs from './pages/Designs.jsx';
import Works from './pages/Works.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './pages/Footer.jsx';

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;