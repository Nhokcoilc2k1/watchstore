import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import Button from '~/components/Button';
import OverLay from '~/pages/components/OverLay';
import { useState } from 'react';
import FormRegister from './FormRegister';

const cx = classNames.bind(styles);
function FormLogin({ isClose }) {
    const [showResgiter, setShowResgiter] = useState(false);

    const hanleShowRegister = () => {
        setShowResgiter(true);
    };
    return (
        <OverLay>
            {showResgiter ? (
                <FormRegister isClose={setShowResgiter} isLogin={isClose} />
            ) : (
                <div className={cx('authen-form')}>
                    <form className={cx('form-container')}>
                        <div className={cx('form-header')}>
                            <h3 className={cx('heading')}>Đăng nhập</h3>
                            <span className={cx('switch-btn')} onClick={hanleShowRegister}>
                                Đăng kí
                            </span>
                        </div>
                        <div className={cx('form-content')}>
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
                        </div>
                        <div className={cx('control')}>
                            <Button className={cx('control-btn', 'cancel')} onClick={() => isClose(false)}>
                                Trở lại
                            </Button>
                            <Button primary className={cx('control-btn')}>
                                Đăng nhập
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </OverLay>
    );
}

export default FormLogin;
