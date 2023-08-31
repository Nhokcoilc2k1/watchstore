import classNames from 'classnames/bind';
import styles from './SearchProductItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SearchProductItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('product-img')} src={images.image1} alt="đồng hồ" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>Casio AE-1200WHD-1AVDF</h4>
                <span className={cx('sale-price')}>1.090.000đ</span>
                <del className={cx('regular-price')}>1.373.000đ</del>
                <span className={cx('discount')}>-21%</span>
            </div>
        </div>
    );
}

export default SearchProductItem;
