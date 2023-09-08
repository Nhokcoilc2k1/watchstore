import classNames from 'classnames/bind';
import styles from './BreadCrumb.module.scss';

const cx = classNames.bind(styles);

function BreadCrumb({ children }) {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('box')}>
                <a href="/">Trang chủ </a>
                <span>Sản phẩm</span>
            </nav>
        </div>
    );
}

export default BreadCrumb;
