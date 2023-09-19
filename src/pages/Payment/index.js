import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Payment() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('name-pages')}>Thanh toán</h4>
            <div className={cx('row')}>
                <div className={cx('col', 'l-5')}>
                    <form className={cx('form-user')}>
                        <h5 className={cx('form-title')}>Thông tin nhận hàng</h5>
                        <div className={cx('from-group')}>
                            <p className={cx('require')}>Tên người nhận</p>
                            <input name="name" placeholder="Họ và tên" />
                        </div>
                        <div className={cx('from-group')}>
                            <p className={cx('require')}>Số điện thoại</p>
                            <input name="name" placeholder="số điện thoại" />
                        </div>
                        <div className={cx('from-group')}>
                            <p className={cx('require')}>Địa chỉ nhận hàng</p>
                            <textarea />
                        </div>
                        <div className={cx('from-group')}>
                            <p>Ghi chú</p>
                            <textarea />
                        </div>
                    </form>
                </div>
                <div className={cx('col', 'l-7')}>
                    <div className={cx('info-bill')}>
                        <h5>Đơn hàng</h5>
                        <div className={cx('pro-pay')}>
                            <div className={cx('pro-img')}>
                                <img
                                    src="https://wscdn.vn/upload/image/OP990-45ADGS-GL-T-1-1131812509-1619214585.jpg?size=500x500&fomat=webp"
                                    alt="anh"
                                />
                                <span>Olym Pianus 42mm Nam OP990-45ADGS-GL-T </span>
                            </div>
                            <div className={cx('single-price')}>5.590.000 đ</div>
                            <div className={cx('quantt')}>x1</div>
                            <div className={cx('price')}>5.590.000 đ</div>
                        </div>
                        <div className={cx('code-promo')}>
                            <input placeholder="Nhập mã khuyến mãi" />
                            <button>Áp dụng</button>
                        </div>
                        <div className={cx('box-item')}>
                            <p>Tạm tính</p>
                            <p className={cx('active')}>5.590.000 đ</p>
                        </div>
                        <div className={cx('box-item')}>
                            <p>Khuyến mãi</p>
                            <p className={cx('active')}>200.000 đ</p>
                        </div>
                        <div className={cx('box-item')}>
                            <p className={cx('total')}>Tổng tiền</p>
                            <p className={cx('total')}>5.390.000 đ</p>
                        </div>
                        <Button primary className={cx('btn-pay')}>
                            Đặt hàng <span className={cx('des-pay')}>Thanh toán khi nhận hàng</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
