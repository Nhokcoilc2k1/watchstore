import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser } from '@fortawesome/free-regular-svg-icons';
import { faSignOut, faTableList } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-3')}>
                    <aside className={cx('navigation')}>
                        <div className={cx('nav-header')}>
                            <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
                            <div className={cx('info')}>
                                <p className={cx('username')}>Hoàng Việt Hưng</p>
                                <p>Chưa có hạng thành viên</p>
                            </div>
                        </div>
                        <div className={cx('nav-item', 'nav-active')}>
                            <FontAwesomeIcon icon={faUser} className={cx('icon-item')} />
                            <span>Thông tin tài khoản</span>
                        </div>
                        <div className={cx('nav-item')}>
                            <FontAwesomeIcon icon={faTableList} className={cx('icon-item')} />
                            <span>Đơn hàng</span>
                        </div>
                        <div className={cx('nav-item')}>
                            <FontAwesomeIcon icon={faSignOut} className={cx('icon-item')} />
                            <span>Đăng xuất</span>
                        </div>
                    </aside>
                </div>
                <div className={cx('col', 'l-9')}>
                    <div className={cx('info-user')}>
                        <h4>Thông tin tài khoản</h4>
                        <div className={cx('wrapper-form')}>
                            <form className={cx('form-info')}>
                                <div className={cx('form-group')}>
                                    <span>Họ tên</span>
                                    <input placeholder="Họ tên" name="name" />
                                </div>
                                <div className={cx('form-group')}>
                                    <span>Số điện thoại</span>
                                    <input placeholder="Số điện thoại" name="phone" />
                                </div>
                                <div className={cx('form-group')}>
                                    <span>Email</span>
                                    <input placeholder="Email" type="email" name="email" />
                                </div>
                                <div className={cx('form-group')}>
                                    <span>Địa chỉ</span>
                                    <textarea placeholder="Địa chỉ" />
                                </div>
                                <div className={cx('btn')}>
                                    <Button primary className={cx('btn-acc')}>
                                        Cập nhật
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
