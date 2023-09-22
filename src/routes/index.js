// Layout
import { LayoutHaveSlide } from '~/Layout';

// Pages
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import DetailProduct from '~/pages/DetailProduct';
import Cart from '~/pages/Cart';
import Payment from '~/pages/Payment';
import Account from '~/pages/Account';
import Contact from '~/pages/Contact';

const publicRoutes = [
    { path: '/', component: Home, layout: LayoutHaveSlide },
    { path: '/products', component: Products },
    { path: '/products/:id', component: DetailProduct },
    { path: '/cart', component: Cart },
    { path: '/pay', component: Payment },
    { path: '/account', component: Account },
    { path: '/contact', component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
