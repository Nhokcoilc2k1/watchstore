// Layout
import { LayoutHaveSlide } from '~/Layout';

// Pages
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import DetailProduct from '~/pages/DetailProduct';
import Cart from '~/pages/Cart';
import Payment from '~/pages/Payment';
import Account from '~/pages/Account';

const publicRoutes = [
    { path: '/', component: Home, layout: LayoutHaveSlide },
    { path: '/products', component: Products },
    { path: '/products/product', component: DetailProduct },
    { path: '/cart', component: Cart },
    { path: '/pay', component: Payment },
    { path: '/account', component: Account },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
