import './../scss/main.scss';

import HeaderComponent from './components/header/headerComponent';
import HomeComponent from './components/home/homeComponent';
import FooterComponent from './components/footer/footerComponent';
import ProductsPageComponent from './components/products/productsPageComponent';



new HeaderComponent('#header');
if(location.href.indexOf('index') > -1){
    new HomeComponent('#app');
}
if(location.href.indexOf('products') > -1){
   new ProductsPageComponent('#app')
}
new FooterComponent('#footer');