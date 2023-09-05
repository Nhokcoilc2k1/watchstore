import classNames from 'classnames/bind';
import styles from './ProductSlide.module.scss';
import ProductItem from '../ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function ProductSlide({ data, title }) {
    const [slideBegOrNot, handleSlideByState] = useState({
        isFirt: true,
        isLast: false,
    });
    const SlideRef = useRef();

    const handleNext = () => {
        SlideRef.current.swiper.slideNext();
    };

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
    };

    const onSlideChange = (swiper) => {
        handleSlideByState({
            isFirt: swiper.isBeginning,
            isLast: swiper.isEnd,
        });
    };

    const { isFirt, isLast } = slideBegOrNot;

    return (
        <div className={cx('wrapper')}>
            <h3>{title}</h3>
            <span className={cx('swiper-pagination')}></span>
            <div className={cx('box')}>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={5}
                    ref={SlideRef}
                    onSlideChange={onSlideChange}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ProductItem key={item.id} product={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={cx('prev-btn', isFirt ? 'disable' : '')} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className={cx('next-btn', isLast ? 'disable' : '')} onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}

export default ProductSlide;
