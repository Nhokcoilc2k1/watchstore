import { LayoutHaveSlide } from '~/Layout';
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import DetailProduct from '~/pages/DetailProduct';

const publicRoutes = [
    { path: '/', component: Home, layout: LayoutHaveSlide },
    { path: '/products', component: Products },
    { path: '/product', component: DetailProduct },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
