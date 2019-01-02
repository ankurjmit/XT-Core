import './../scss/main.scss';
import HeaderComponent from './components/header/headerComponent';
import HomeComponent from './components/home/homeComponent';
import FooterComponent from './components/footer/footerComponent';
import ProductsPageComponent from './components/products/productsPageComponent';
import SignupComponent from './components/signup/signupComponent';
import SigninComponent from './components/signin/signinComponent';

export default class appCompoennt {
   constructor() {
      this.routes = {
         '#products': ProductsPageComponent,
         '#signup': SignupComponent,
         '#signin': SigninComponent,
         '#/': HomeComponent
      }
      this.setRouteContent = this.setRouteContent.bind(this);
      this.render();
   }

   setRouteContent(route) {
      $('app').empty();
      let routeNew = `#${route}`;
      history.pushState({}, route, routeNew);
      let componentToLoad = this.routes[routeNew] ? this.routes[routeNew] : 'HomeComponent';
      new componentToLoad({ parent: '#app' });
   }

   render() {
      new HeaderComponent({ parent: '#header', setRouteContent: this.setRouteContent });
      new HomeComponent({ parent: '#app' });
      new FooterComponent('#footer');
   }
}
new appCompoennt();