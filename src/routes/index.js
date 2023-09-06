import Home from '~/pages/Home';
import Products from '~/pages/Products';
import DetailProduct from '~/pages/DetailProduct';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products, layout: null },
    { path: '/product', component: DetailProduct, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
