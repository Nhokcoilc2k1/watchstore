import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import Slider from 'react-slick';
import slides from '~/assets/data/Slide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function Slide() {

    const PrevArrow = (props) => {
        const {onClick } = props;
        return (
            <div className={cx('prev-arrow')}  onClick={onClick}></div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: true,
        prevArrow: <PrevArrow />
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {slides.map((item, index) => (
                    <div className={cx('slide')} key={index}>
                        <img src={item.url} alt="slide" className={cx('img')} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Slide;
