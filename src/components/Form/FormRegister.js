import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function FormRegister({ isClose, isLogin }) {
    return (
        <div className={cx('authen-form')}>
            <form className={cx('form-container')}>
                <div className={cx('form-header')}>
                    <h3 className={cx('heading')}>Đăng kí</h3>
                    <span
                        className={cx('switch-btn')}
                        onClick={() => {
                            isClose(false);
                            isLogin(true);
                        }}
                    >
                        Đăng nhập
                    </span>
                </div>
                <div className={cx('form-content')}>
                    <div className={cx('form-group')}>
                        <label>Họ và tên</label>
                        <input type="text" placeholder="Họ và tên" />
                        <span></span>
                    </div>
                    <div className={cx('form-group')}>
                        <label>Số điện thoại</label>
                        <input type="text" placeholder="Số điện thoại" />
                        <span></span>
                    </div>
                    <div className={cx('form-group')}>
                        <label>Email</label>
                        <input type="text" placeholder="Email" name="email" />
                        <span></span>
                    </div>
                    <div className={cx('form-group')}>
                        <label>Mật khẩu</label>
                        <input type="text" placeholder="Mật khẩu" />
                        <span></span>
                    </div>
                    <div className={cx('form-group')}>
                        <label>Nhập lại mật khẩu</label>
                        <input type="text" placeholder="Nhập lại mật khẩu" />
                        <span></span>
                    </div>
                </div>
                <div className={cx('control')}>
                    <Button
                        className={cx('control-btn', 'cancel')}
                        onClick={() => {
                            isClose(false);
                            isLogin(false);
                        }}
                    >
                        Trở lại
                    </Button>
                    <Button primary className={cx('control-btn')}>
                        Đăng kí
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default FormRegister;
