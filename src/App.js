import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from './components/pages/home';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newProject';
import Company from './components/pages/company';
import Projetcs from './components/pages/projects';

import Container from './components/layout/container';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';

function App() {
  return (
    <Router>
     <Navbar/>
     <Container customClass="minHeight">
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/projects" element={<Projetcs/>}/>
      <Route exact path="/company" element={<Company/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/newproject" element={<NewProject/>}/>
     </Routes>
     </Container>
     <Footer/>
    </Router>
  );
}

export default App;
