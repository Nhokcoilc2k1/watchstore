import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slogan from '../components/Slogan';
import ProductSlide from '../components/ProductSilde';
import { products } from '~/assets/data/Product';
import TypeWatch from '../components/TypeWatch';
import Brand from '../components/Brand';
import ListProduct from '../components/ListProduct';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slogan />
            <section className={cx('section')}>
                <ProductSlide data={products}>
                    <h3 className={cx('header-slide')}>Top tìm kiếm</h3>
                    <span className={cx('swiper-pagination')}></span>
                </ProductSlide>
                <ProductSlide data={products}>
                    <h3 className={cx('header-slide')}>Sản phẩm bán chạy</h3>
                    <span className={cx('swiper-pagination')}></span>
                </ProductSlide>
                <TypeWatch />
                <Brand />
                <h2 className={cx('title')}>Các sản phẩm liên quan</h2>
                <ListProduct data={products} className={cx('l-2-4')}>
                    <div className={cx('custom-btn')}>
                        <Button outline href="/products" rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                            Xem thêm
                        </Button>
                    </div>
                </ListProduct>
            </section>
        </div>
    );
}

export default Home;
