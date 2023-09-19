import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import Rating from '~/pages/components/Rating';

const cx = classNames.bind(styles);

function Comment({ data }) {
    return (
        <div className={cx('wrapper')}>
            <h5 className={cx('name-user')}>Phan Duy Anh</h5>
            <span className={cx('address-user')}>Hồ Chí Minh- Quận Tân Phú</span>
            <Rating value={5} className={cx('custom-star')} />
            <p className={cx('content-comment')}>Phục vụ tốt, tư vấn nhiệt tình, chu đáo. Cảm thấy hài lòng</p>
            <span className={cx('address-user')}>21/12/2022</span>
        </div>
    );
}

export default Comment;
