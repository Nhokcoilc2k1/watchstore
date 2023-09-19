import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import Rating from '../components/Rating';
import Button from '~/components/Button';
import Specification from './components/Specification';
import Comment from './components/Comment';
import ProductSlide from '../components/ProductSilde';
import { products } from '~/assets/data/Product';
import WarrantyPolicy from './components/IntroduceInfoProduct/WarrantyPolicy';

const cx = classNames.bind(styles);

function DetailProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <h2 className={cx('product-name')}>Olym Pianus 42mm Nam OP990-45ADGS-GL-D</h2>
                {/* <div className={cx('rating')}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                </div> */}
                <Rating value={4} />
                <span className={cx('number-com')}>9 đánh giá</span>
            </div>
            <div className={cx('row')}>
                <div className={cx('col', 'l-6')}>
                    <div className={cx('box')}>
                        <img
                            src="https://wscdn.vn/upload/original-image/uploads/images/OP990-45ADGS-GL-D-1-1655171724651.jpg?size=800x800&fomat=webp"
                            alt="anh"
                        />
                        <div className={cx('picture')}>
                            <img
                                src="https://wscdn.vn/upload/original-image/uploads/images/OP990-45ADGS-GL-D-1-1655171724651.jpg?size=800x800&fomat=webp"
                                alt="anh"
                            />
                            <img
                                src="https://wscdn.vn/upload/original-image/uploads/images/OP990-45ADGS-GL-D-1-1655171724651.jpg?size=800x800&fomat=webp"
                                alt="anh"
                            />
                            <img
                                src="https://wscdn.vn/upload/original-image/uploads/images/OP990-45ADGS-GL-D-1-1655171724651.jpg?size=800x800&fomat=webp"
                                alt="anh"
                            />
                            <img
                                src="https://wscdn.vn/upload/original-image/uploads/images/OP990-45ADGS-GL-D-1-1655171724651.jpg?size=800x800&fomat=webp"
                                alt="anh"
                            />
                        </div>
                    </div>
                    <div className={cx('introducce')}>
                        <Button outline className={cx('intro-btn')}>
                            Thông tin sản phẩm
                        </Button>
                        <Button outline className={cx('intro-btn')}>
                            Chính sách bảo hành
                        </Button>
                        <Button outline className={cx('intro-btn')}>
                            Hướng dẫn chọn size
                        </Button>
                    </div>
                    <div className={cx('extend-intro')}>
                        {/* <IntroSelectSize /> */}
                        <WarrantyPolicy />
                    </div>
                    <div className={cx('comment')}>
                        <h4>Đánh giá review Olym Pianus OP990-45ADGS-GL-X</h4>
                        <div className={cx('com-content')}>
                            <span className={cx('number')}>5</span>
                            <Rating value={3} className={cx('custom-star')} />
                            <Button primary className={cx('comment-btn')}>
                                Viết đánh giá
                            </Button>
                        </div>
                        <p className={cx('com-head')}> Cam kết 100% đánh giá đều đến từ khách đã mua hàng</p>
                        <Comment data />
                        <Comment data />
                    </div>
                </div>
                <div className={cx('col', 'l-6')}>
                    <div className={cx('info')}>
                        <div className={cx('box-price')}>
                            <span className={cx('sale-price')}>6.650.000đ</span>
                            <span className={cx('regular-price')}>8.800.000đ</span>
                            <span className={cx('discount')}>-21%</span>
                        </div>
                        <span className={cx('brand')}>Thương hiệu: casio</span>
                        <div className={cx('box-promo')}>
                            <h5>Khuyến mãi áp dụng từ 10/09/2023 đến 20/09/2023</h5>
                            <div className={cx('pro-content')}>
                                <p className={cx('content')}>
                                    Nhập mã <span>SWT9200</span>
                                    {`đơn >= 8 triệu giảm 200k`}
                                </p>
                                <p className={cx('content')}>
                                    Nhập mã <span>SWT9150</span>
                                    {`đơn >= 8 triệu giảm 200k`}
                                </p>
                                <p className={cx('content')}>
                                    Nhập mã <span>SWT9100</span>
                                    {`đơn >= 8 triệu giảm 200k`}
                                </p>
                            </div>
                        </div>
                        <div className={cx('control')}>
                            <Button
                                outline
                                leftIcon={<FontAwesomeIcon icon={faCartPlus} />}
                                className={cx('custom-btn')}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                            <Button primary className={cx('custom-btn')}>
                                Mua ngay- Freeship
                                <span className={cx('insert-text')}>Kiểm tra hàng trước khi thanh toán</span>
                            </Button>
                        </div>
                        <div className={cx('box-policy')}>
                            <h5>Chính sách mua hàng tại WatchStore.vn</h5>
                            <div className={cx('pol-content')}>
                                <div className={cx('pol-item')}>
                                    <img src="https://www.watchstore.vn/public/assets/images/Package.svg" alt="anh" />
                                    <span>FreeShip toàn quốc</span>
                                </div>
                                <div className={cx('pol-item')}>
                                    <img src="https://www.watchstore.vn/public/assets/images/doitra.svg" alt="anh" />
                                    <span>Đổi trả hàng trong 7 ngày</span>
                                </div>
                            </div>
                            <div className={cx('pol-content')}>
                                <div className={cx('pol-item')}>
                                    <img src="https://www.watchstore.vn/public/assets/images/camket.svg" alt="anh" />
                                    <span>Cam kết hàng chính hãng</span>
                                </div>
                                <div className={cx('pol-item')}>
                                    <img src="https://www.watchstore.vn/public/assets/images/baohanh.svg" alt="anh" />
                                    <span>Chế độ bảo hành 5 năm</span>
                                </div>
                            </div>
                        </div>
                        <Specification data />
                    </div>
                </div>
            </div>
            <div className={cx('footer-page')}>
                <h4>Có thể bạn cũng thích</h4>
                <ProductSlide data={products} />
            </div>
        </div>
    );
}

export default DetailProduct;
