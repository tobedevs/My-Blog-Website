import Home  from './Pages/Home';
import Admin from './Pages/CreatePage';
import BlogPage from './Pages/BlogPage';
import { ScrollToTop } from './Context/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css'
import AuthorPage from './Pages/AuthorPage';

function App() {

  return (
    <>
    <Router basename="/My-Blog-Website">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </Router>
    <ToastContainer position="top-center" autoClose={3000} />
    </>
  )
}

export default App













