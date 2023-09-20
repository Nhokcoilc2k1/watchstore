import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import SideBar from '../components/SideBar';
import { products } from '~/assets/data/Product';
import ListProduct from '../components/ListProduct';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Sản phẩm</h4>
            <div className={cx('row')}>
                <div className={cx('col', 'l-2-8')}>
                    <div className={cx('box')}>
                        <span>10 sản phẩm được tìm thấy theo' đồng hồ nam'</span>
                        <div className={cx('sort')}>
                            <h4>Sắp xếp theo</h4>
                            {/*  // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. */}
                            <div>
                                <Tippy
                                    hideOnClick
                                    trigger="click"
                                    interactive={true}
                                    placement="bottom-start"
                                    render={(attrs) => (
                                        <div className={cx('select-list')} tabIndex="-1" {...attrs}>
                                            <PopperWrapper className={cx('select-popper')}>
                                                <Button className={cx('select-item')}>Mặc định</Button>
                                                <Button className={cx('select-item')}>Giá thấp đến cao</Button>
                                                <Button className={cx('select-item')}>Giá cao đến thấp</Button>
                                                <Button className={cx('select-item')}>Đánh giá cao</Button>
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >
                                    <span>
                                        <Button
                                            className={cx('select')}
                                            rightIcon={<FontAwesomeIcon icon={faCaretDown} />}
                                        >
                                            Mặc định
                                        </Button>
                                    </span>
                                </Tippy>
                            </div>
                        </div>
                    </div>

                    <ListProduct data={products} className={cx('l-3')} />
                </div>
                <div className={cx('col', 'l-2-4')}>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default Products;
