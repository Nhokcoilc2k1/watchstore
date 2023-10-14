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
import HomeAdmin from '~/pages/admin/HomeAdmin';
import ProductManager from '~/pages/admin/ProductManager';

const publicRoutes = [
    { path: '/', component: Home, layout: LayoutHaveSlide },
    { path: '/products', component: Products },
    { path: '/products/:id', component: DetailProduct },
    { path: '/cart', component: Cart },
    { path: '/pay', component: Payment },
    { path: '/account', component: Account },
    { path: '/contact', component: Contact },
];

const adminRoutes = [
    { path: '/', component: HomeAdmin },
    { path: '/manager', component: ProductManager },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes, adminRoutes };
