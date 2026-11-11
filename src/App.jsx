import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutUs from './pages/aboutUs/AboutUs';
import Blog from './pages/blog/Blog';
import BlogPost from './pages/blogPost/BlogPost';
import Recipes from './pages/recipes/Recipes';
import Home from './pages/home/Home';
import ContactPage from './pages/contact/ContactPage';
import ByCreate from './pages/ByCreate';
import Header from './features/header/Header';
import Footer from './features/footer/Footer';
import './App.css';
import Detail from './pages/detail/Detail';

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog-post' element={<BlogPost/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/recipes/:id' element={<Detail/>}/>
        <Route path='/by-create' element={<ByCreate/>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
  )
}