import './global.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer/Footer';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductItemPage from './pages/ProductItemPage/ProductItemPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import { useState } from 'react';
import MobileMenu from './components/MobileMenu/MobileMenu';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import FooterV2 from './components/Footer/FooterV2/FooterV2';



function App() {

  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className='app'>
      <ScrollToTop />
      <MobileMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <Routes>
          <Route path='/' element ={<Home />}/>

          <Route path='/categories' element ={<CategoriesPage />}/>
          <Route path='/categories/:id' element ={<ProductsPage type={'category'}/>}/>

          <Route path='/products' element ={<ProductsPage type={'all'}/>}/>
          <Route path='/products/:id' element={<ProductItemPage />}/>

          <Route path='/sales' element ={<ProductsPage type={'sale'} />}/>

          <Route path='/cart' element ={<ShoppingCartPage />}/>
              
          <Route path="*" element ={<NotFoundPage />}/>  
        </Routes> 
      <Footer /> 
      <FooterV2 />
    </div>
  );
}

export default App;
