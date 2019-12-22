import Home from "./components/Home";
import Who from "./components/Who";
import FindUs from "./components/FindUs";
import Products from "./components/Products";

const routes = [
    { path: '/', component: Home , name:''},
    { path: '/home', component: Home, name:'home'},
    { path: '/find-us', component: FindUs, name:'find-us' },
    { path: '/who', component: Who, name:'who' },
    { path: '/products/:id', component: Products, name:'products' },
];

export default routes;