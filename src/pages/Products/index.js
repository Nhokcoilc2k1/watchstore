import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import SideBar from '../components/SideBar';
import { products } from '~/assets/data/Product';
import ListProduct from '../components/ListProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Sản phẩm</h4>
            <div className={cx('row')}>
                <div className={cx('col', 'l-2-8')}>
                    <div className={cx('box')}>
                        <span>10 sản phẩm được tìm thấy theo' đồng hồ nam'</span>
                        <div className={cx('sort')}>
                            <h4>Sắp xếp theo</h4>
                            <Button className={cx('select')} rightIcon={<FontAwesomeIcon icon={faCaretDown} />}>
                                Mặc định
                            </Button>
                        </div>
                    </div>
                    <ListProduct data={products} className={cx('l-3')} />
                </div>
                <div className={cx('col', 'l-2-4')}>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default Products;
