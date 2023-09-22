import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { products } from '~/assets/data/Product';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Cart() {
    const [increase, setIncrease] = useState();

    const hanleIncrease = () => {
        
    }

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('name-pages')}>Giỏ hàng</h2>
            {/* No-cart */}
            {/* <div className={cx('no-cart')}>
                <img src="https://shop.30shine.com/images/empty%20cart.svg" alt="ảnh giỏ hàng trống" />
                <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                <Button className={cx('btn-cart')} primary rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                    Tiếp tục mua sắm
                </Button>
            </div> */}
            <div className={cx('cart')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-9')}>
                        <table className={cx('table')}>
                            <thead className={cx('t-header')}>
                                <tr>
                                    <th>
                                        <p className={cx('title')}></p>
                                    </th>
                                    <th>
                                        <p className={cx('title')}>Sản phẩm</p>
                                    </th>
                                    <th>
                                        <p className={cx('title')}>Đơn giá</p>
                                    </th>
                                    <th>
                                        <p className={cx('title')}>Số lượng</p>
                                    </th>
                                    <th>
                                        <p className={cx('title')}>Tạm tính</p>
                                    </th>
                                    <th>
                                        <p className={cx('title')}></p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr className={cx('row-product')} key={product.id}>
                                        <td className={cx('td-checkbox')}>
                                            <div className={cx('checkbox')}>
                                                <input type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className={cx('product')}>
                                                <img src={product.url} alt="ảnh đồng hồ" />
                                                <span>{product.name}</span>
                                            </div>
                                        </td>
                                        <td className={cx('single-price')}>
                                            <div>{product.salePrice}đ</div>
                                        </td>
                                        <td className={cx('calcul-btn')}>
                                            <div className={cx('box-btn')}>
                                                <button className={cx('btn')} onClick={hanleIncrease}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                                <div className={cx('quantity')}>1</div>
                                                <button className={cx('btn')}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                            </div>
                                        </td>
                                        <td className={cx('price-temporary')}>
                                            <div>{product.salePrice}đ</div>
                                        </td>
                                        <td className={cx('col-6')}>
                                            <div className={cx('delete')}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('col', 'l-3')}>
                        <div className={cx('info-order')}>
                            <div className={cx('info-head')}>
                                <h4>Thông tin đơn hàng</h4>
                                <div className={cx('info-item')}>
                                    <span className={cx('info')}>
                                        Tạm tính: <span>{`( 0 sản phẩm)`}</span>
                                    </span>
                                    <strong>0 đ</strong>
                                </div>
                            </div>
                            <div className={cx('total-price')}>
                                <span className={cx('total')}>Tổng tiền</span>
                                <span className={cx('total')}>0 đ</span>
                            </div>
                        </div>
                        <Button primary disable className={cx('btn-cart')}>
                            Tiến hành đặt hàng
                            <span className={cx('sub-text')}>Không ưng đổi ngay trong 7 ngày</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
