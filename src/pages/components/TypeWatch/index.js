import classNames from 'classnames/bind';
import styles from './TypeWatch.module.scss';
import { typewatchs } from '~/assets/data/TypeWatch';

const cx = classNames.bind(styles);

function TypeWatch() {
    return (
        <div className={cx('wrapper')}>
            <h2>Chọn đồng hồ phù hợp</h2>
            <p>WatchStore cung cấp đa dạng mẫu đồng hồ theo nhiều phong cách khác nhau</p>
            <div className={cx('box')}>
                <div className={cx('row')}>
                    {typewatchs.map((item) => (
                        <a key={item.id} href="/" className={cx('col', 'l-2-4', 'item')}>
                            <img src={item.img} alt={item.title} />
                            <span>{item.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TypeWatch;
