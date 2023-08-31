import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('inner')}>
                <Button className={cx('custom')} primary rightIcon={<FontAwesomeIcon icon={faCaretDown} />}>Danh muc</Button>
                <Button className={cx('custom')} primary>Sản phẩm bán chạy</Button>
                <Button className={cx('custom')} primary>Sản phẩm mới</Button>
                <Button className={cx('custom')} primary>tin tức</Button>
                <Button className={cx('custom')} primary>Chính sách</Button>
                <Button className={cx('custom')} primary>Liên hệ</Button>
            </nav>
        </div>
    );
}

export default Navigation;
