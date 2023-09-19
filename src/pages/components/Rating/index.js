import classNames from 'classnames/bind';
import styles from './Rating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Rating = ({ value, text, className }) => {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <span>
                {value >= 1 ? (
                    <FontAwesomeIcon icon={faStar} />
                ) : value >= 0.5 ? (
                    <FontAwesomeIcon icon={faStarHalf} />
                ) : (
                    <FontAwesomeIcon icon={faStar} />
                )}
            </span>
            <span>
                {value >= 2 ? (
                    <FontAwesomeIcon icon={faStar} />
                ) : value >= 1.5 ? (
                    <FontAwesomeIcon icon={faStarHalf} />
                ) : (
                    <FontAwesomeIcon icon={faStar} />
                )}
            </span>
            <span>
                {value >= 3 ? (
                    <FontAwesomeIcon icon={faStar} />
                ) : value >= 2.5 ? (
                    <FontAwesomeIcon icon={faStarHalf} />
                ) : (
                    <FontAwesomeIcon icon={faStar} />
                )}
            </span>
            <span>
                {value >= 4 ? (
                    <FontAwesomeIcon icon={faStar} />
                ) : value >= 3.5 ? (
                    <FontAwesomeIcon icon={faStarHalf} />
                ) : (
                    <FontAwesomeIcon icon={faStar} />
                )}
            </span>
            <span>
                {value >= 5 ? (
                    <FontAwesomeIcon icon={faStar} />
                ) : value >= 4.5 ? (
                    <FontAwesomeIcon icon={faStarHalf} />
                ) : (
                    <FontAwesomeIcon icon={faStar} />
                )}
            </span>
            <span className={cx('number-star')}>{text && text}</span>
        </div>
    );
};

export default Rating;
