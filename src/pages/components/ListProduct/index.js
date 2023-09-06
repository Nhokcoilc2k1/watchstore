import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import { products } from '~/assets/data/Product';
import ProductItem from '../ProductItem';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ListProduct({ data, className, children }) {
    const classes = cx('col', 'item', {
        [className]: className,
    });
    return (
        <div className={cx('wrapper')}>
            {children}
            <div className={cx('row')}>
                {products.map((item) => (
                    <div className={classes} key={item.id}>
                        <ProductItem product={item} />
                    </div>
                ))}
            </div>
            <div className={cx('custom-btn')}>
                <Button outline rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                    Xem thêm
                </Button>
            </div>
        </div>
    );
}

export default ListProduct;
