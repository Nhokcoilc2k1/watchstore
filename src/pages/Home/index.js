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
                <ProductSlide data={products} title="Top tìm kiếm" />
                <ProductSlide data={products} title="Sản phẩm bán chạy" />
                <TypeWatch />
                <Brand />
                <h2 className={cx('title')}>Các sản phẩm liên quan</h2>
                <ListProduct data={products} className={cx('l-2-4')}>
                    <div className={cx('custom-btn')}>
                        <Button outline rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                            Xem thêm
                        </Button>
                    </div>
                </ListProduct>
            </section>
        </div>
    );
}

export default Home;
