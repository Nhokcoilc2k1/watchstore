import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchProductItem from '~/components/SearchProductItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="Logo watchstore" />
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Gợi ý sản phẩm</h4>
                                <SearchProductItem />
                                <SearchProductItem />
                                <SearchProductItem />
                                <a href={'/'} className={cx('more-search')}>
                                    Xem thêm 10982 sản phẩm
                                </a>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input placeholder="Tìm kiếm đồng hồ theo tên, hãng" />
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button primary className={cx('custom-btn')} rightIcon={<FontAwesomeIcon icon={faCaretDown} />}>
                        Đăng nhập
                    </Button>

                    <button className={cx('cart')}>
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span className={cx('number-item')}>2</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
