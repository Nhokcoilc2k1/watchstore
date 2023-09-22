import Tippy from '@tippyjs/react/headless';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchProductItem from '~/components/SearchProductItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
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
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input
                        value={searchValue}
                        placeholder="Tìm kiếm đồng hồ theo tên, hãng"
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
