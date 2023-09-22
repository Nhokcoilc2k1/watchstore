import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import Rating from '../Rating';

const cx = classNames.bind(styles);

function ProductItem({ product }) {
    return (
        <a href={`/products/${product.id}`} className={cx('wrapper')}>
            <img src={product.url} alt="anh" />
            <div className={cx('info')}>
                <h4 className={cx('name-product')}>{product.name}</h4>
                <p className={cx('sale-price')}>{product.salePrice}</p>
                <p className={cx('box')}>
                    <span className={cx('regular-price')}>{product.regularPrice}</span>
                    <span className={cx('discount')}>{product.discount}</span>
                </p>
                <Rating value={4} text={5} className={cx('item-rating')} />
            </div>
        </a>
    );
}

export default ProductItem;
