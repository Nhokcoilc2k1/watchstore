import classNames from 'classnames/bind';
import styles from './Brand.module.scss';
import { brands } from '~/assets/data/Brand';

const cx = classNames.bind(styles);

function Brand() {
    return (
        <div className={cx('wrapper')}>
            <h2>THƯƠNG HIỆU NỔI BẬT</h2>
            <p>WatchStore đang có sẵn hơn 10.000+ sản phẩm đến từ 60 thương hiệu nổi tiếng</p>
            <div className={cx('box')}>
                <div className={cx('row')}>
                    {brands.map((item) => (
                        <div key={item.id} className={cx('col', 'l-2', 'item')}>
                            <a href='/'>
                                <img src={item.url} alt={item.desc} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Brand;
