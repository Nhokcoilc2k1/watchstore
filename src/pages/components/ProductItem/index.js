import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductItem({ product }) {
    return (
        <a href={product.url} className={cx('wrapper')}>
            <img src={product.url} alt="anh" />
            <div className={cx('info')}>
                <h4 className={cx('name-product')}>{product.name}</h4>
                <p className={cx('sale-price')}>{product.salePrice}</p>
                <p className={cx('box')}>
                    <span className={cx('regular-price')}>{product.regularPrice}</span>
                    <span className={cx('discont')}>{product.discount}</span>
                </p>
                <p className={cx('item-rating')}>
                    <FontAwesomeIcon className={cx('star')} icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span>{product.rating}</span>
                </p>
            </div>
        </a>
    );
}

export default ProductItem;
