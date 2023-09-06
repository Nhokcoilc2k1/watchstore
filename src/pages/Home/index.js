import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slogan from '../components/Slogan';
import ProductSlide from '../components/ProductSilde';
import { products } from '~/assets/data/Product';
import TypeWatch from '../components/TypeWatch';
import Brand from '../components/Brand';
import ListProduct from '../components/ListProduct';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slogan />
            <section className={cx('section')}>
                <ProductSlide data={products} title="Top tìm kiếm" />
                <ProductSlide data={products} title="Sản phẩm bán chạy" />
                <TypeWatch />
                <Brand />
                <ListProduct data className={cx('l-2-4')}>
                    <h2 className={cx('title')}>Các sản phẩm liên quan</h2>
                </ListProduct>
            </section>
        </div>
    );
}

export default Home;
