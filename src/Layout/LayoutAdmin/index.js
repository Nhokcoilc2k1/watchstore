import classNames from 'classnames/bind';
import styles from './LayoutAdmin.module.scss';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faBars,
    faCartShopping,
    faChevronDown,
    faCube,
    faHouse,
    faNewspaper,
    faPen,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function LayoutAdmin({ children }) {
    const [showNavBar, setShowNavBar] = useState(true);
    return (
        <div className={cx('container')}>
            {showNavBar && (
                <aside className={cx('nav-bar')}>
                    <div className={cx('box-logo')}>
                        <Link to={'/'}>
                            <img className={cx('logo')} src={images.logo} alt="Logo watchstore" />
                        </Link>
                    </div>
                    <div className={cx('box-nav')}>
                        <div className={cx('info-ad')}>
                            <img src={images.admin} alt="anh" />
                            <p>Hưng Hoàng</p>
                            <p>admin</p>
                            <div>
                                <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                                <FontAwesomeIcon icon={faSignOut} className={cx('icon')} />
                            </div>
                        </div>
                        <div className={cx('control')}>
                            <Button leftIcon={<FontAwesomeIcon icon={faHouse} />} className={cx('nav-btn')}>
                                Trang chủ
                            </Button>
                            <Button leftIcon={<FontAwesomeIcon icon={faNewspaper} />} className={cx('nav-btn')}>
                                Quản lí danh mục
                            </Button>
                            <Button leftIcon={<FontAwesomeIcon icon={faNewspaper} />} className={cx('nav-btn')}>
                                Quản lí nhãn hiệu
                            </Button>
                            <Button
                                to={'/manager'}
                                leftIcon={<FontAwesomeIcon icon={faSpinner} />}
                                className={cx('nav-btn')}
                            >
                                Quản lí sản phẩm
                            </Button>
                            <Button leftIcon={<FontAwesomeIcon icon={faCube} />} className={cx('nav-btn')}>
                                Quản lí khuyến mãi
                            </Button>
                            <Button leftIcon={<FontAwesomeIcon icon={faPen} />} className={cx('nav-btn')}>
                                Quản lí bài viết
                            </Button>
                            <Button leftIcon={<FontAwesomeIcon icon={faCartShopping} />} className={cx('nav-btn')}>
                                Quản lí đơn hàng
                            </Button>
                            <Button leftIcon={<FontAwesomeIcon icon={faAddressCard} />} className={cx('nav-btn')}>
                                Quản lí tài khoản
                            </Button>
                        </div>
                    </div>
                </aside>
            )}
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <div onClick={() => setShowNavBar(!showNavBar)} className={cx('icon-bar')}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className={cx('box-admin')}>
                        <img className={cx('admin')} src={images.admin} alt="anh" />
                        <Button className={cx('email')} rightIcon={<FontAwesomeIcon icon={faChevronDown} />}>
                            hoanghung@gmail.com
                            <span className={cx('note')}>administrator</span>
                        </Button>
                    </div>
                </div>
                <div className={cx('inner')}>{children}</div>
                <div className={cx('footer')}></div>
            </div>
        </div>
    );
}

export default LayoutAdmin;
