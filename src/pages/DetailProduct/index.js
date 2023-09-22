import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import Rating from '../components/Rating';
import Button from '~/components/Button';
import Specification from './components/Specification';
import Comment from './components/Comment';
import ProductSlide from '../components/ProductSilde';
import { products } from '~/assets/data/Product';
import WarrantyPolicy from './components/IntroduceInfoProduct/WarrantyPolicy';
import { useEffect, useState } from 'react';
import DescriptionProduct from './components/IntroduceInfoProduct/DescriptionProduct';
import IntroSelectSize from './components/IntroduceInfoProduct/IntroSelectSize';
import OverLay from '../components/OverLay';

const cx = classNames.bind(styles);

const urlImg = [
    {
        id: 1,
        url: 'https://wscdn.vn/upload/image/OP990-45ADGS-GL-T-1-1131812509-1619214585.jpg?size=500x500&fomat=webp',
    },
    {
        id: 2,
        url: 'https://wscdn.vn/upload/image/RA-AA0B02R19B-2081811590-287106387.jpg?size=500x500&fomat=webp',
    },
    {
        id: 3,
        url: 'https://wscdn.vn/upload/image/OP990-45ADGS-GL-T-1-1131812509-1619214585.jpg?size=500x500&fomat=webp',
    },
    {
        id: 4,
        url: 'https://wscdn.vn/upload/image/L2-1660492967-1835041053.jpg?size=800x800&fomat=webp',
    },
];

function DetailProduct({ data }) {
    const [image, setImage] = useState(
        'https://wscdn.vn/upload/original-image/uploads/images/OP990-45ADGS-GL-D-1-1655171724651.jpg?size=800x800&fomat=webp',
    );

    const [introduce, setIntroduce] = useState(true);
    const [warrPolicy, setWarrPolicy] = useState(false);
    const [selectSize, setSelectSize] = useState(false);
    const [review, setReview] = useState(false);
    const [cart, setCart] = useState([]);

    const handleIntroduce = () => {
        setIntroduce(true);
        setSelectSize(false);
        setWarrPolicy(false);
    };

    const handlePolicy = () => {
        setIntroduce(false);
        setWarrPolicy(true);
        setSelectSize(false);
    };

    const handlSelectSize = () => {
        setIntroduce(false);
        setWarrPolicy(false);
        setSelectSize(true);
    };

    const addToCart = () => {
        setCart((prev) => [...prev, cart]);
    };

    useEffect(() => {}, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <h2 className={cx('product-name')}>Olym Pianus 42mm Nam OP990-45ADGS-GL-D</h2>
                <Rating value={3} />
                <span className={cx('number-com')}>9 đánh giá</span>
            </div>
            <div className={cx('row')}>
                <div className={cx('col', 'l-6')}>
                    <div className={cx('box')}>
                        <img src={image} alt="anh" />
                        <div className={cx('picture')}>
                            {urlImg.map((img) => (
                                <img key={img.id} src={img.url} onClick={() => setImage(img.url)} alt="anh" />
                            ))}
                        </div>
                    </div>
                    <div className={cx('introducce')}>
                        <Button
                            outline
                            onClick={handleIntroduce}
                            className={cx('intro-btn', `${introduce ? 'visited' : ''}`)}
                        >
                            Thông tin sản phẩm
                        </Button>
                        <Button
                            outline
                            onClick={handlePolicy}
                            className={cx('intro-btn', `${warrPolicy ? 'visited' : ''}`)}
                        >
                            Chính sách bảo hành
                        </Button>
                        <Button
                            outline
                            onClick={handlSelectSize}
                            className={cx('intro-btn', `${selectSize ? 'visited' : ''}`)}
                        >
                            Hướng dẫn chọn size
                        </Button>
                    </div>
                    <div className={cx('content-intro')}>
                        {(introduce && <DescriptionProduct />) ||
                            (selectSize && <IntroSelectSize />) ||
                            (warrPolicy && <WarrantyPolicy />)}
                    </div>
                    <div className={cx('comment')}>
                        <h4>Đánh giá review Olym Pianus OP990-45ADGS-GL-X</h4>
                        <div className={cx('com-content')}>
                            <span className={cx('number')}>5</span>
                            <Rating value={5} className={cx('custom-star')} />
                            <Button primary className={cx('comment-btn')} onClick={() => setReview(true)}>
                                Viết đánh giá
                            </Button>
                        </div>
                        <p className={cx('com-head')}> Cam kết 100% đánh giá đều đến từ khách đã mua hàng</p>

                        {/* comment */}
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
                                onClick={addToCart}
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
            {review ? (
                <OverLay>
                    <div className={cx('form-review')}>
                        <form className={cx('review')}>
                            <h5>Viết đánh giá</h5>
                            <p>Đánh giá của bạn</p>
                            <Rating value={0} className={cx('review-star')} />
                            <textarea placeholder="Viết đánh giá của bạn" />
                            <div className={cx('control')}>
                                <Button outline className={cx('btn-cancel')} onClick={() => setReview(false)}>
                                    Hủy
                                </Button>
                                <Button className={cx('btn-submit')}>Gửi đánh giá</Button>
                            </div>
                        </form>
                    </div>
                </OverLay>
            ) : (
                <></>
            )}
        </div>
    );
}

export default DetailProduct;
