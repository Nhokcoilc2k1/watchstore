import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCartPlus, faSignOut, faTableList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/Button';
import MenuAccount from '~/components/Popper/MenuAccount';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Search from '../Search';
import FormLogin from '~/components/Form/FormLogin';
import { useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ACCOUNTS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Tài khoản của tôi',
        to: '/account',
    },
    {
        icon: <FontAwesomeIcon icon={faTableList} />,
        title: 'Đơn hàng',
        to: '/don-hang',
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Đăng xuất',
        to: '/',
    },
];

function Header() {
    const [showForm, setShowForm] = useState(false);
    const currentUser = false;

    const hanleShowForm = () => {
        setShowForm(true);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'} className={cx('box-logo')}>
                    <img className={cx('logo')} src={images.logo} alt="Logo watchstore" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <MenuAccount items={MENU_ACCOUNTS}>
                            <div className={cx('btn-header')}>
                                <Button
                                    primary
                                    className={cx('custom-btn')}
                                    rightIcon={<FontAwesomeIcon icon={faCaretDown} />}
                                >
                                    0382932320
                                </Button>
                            </div>
                        </MenuAccount>
                    ) : (
                        <>
                            <Button primary className={cx('custom-btn')} onClick={hanleShowForm}>
                                Đăng nhập
                            </Button>
                        </>
                    )}

                    <Link className={cx('cart')} to={'/cart'}>
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span className={cx('number-item')}>2</span>
                    </Link>
                </div>
            </div>
            {showForm && <FormLogin isClose={setShowForm}/>}
        </header>
    );
}

export default Header;
