import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CategoryItem({ title, data }) {
    return (
        <div className={cx('cate-list')}>
            <h5>{title}</h5>
            <div>
                {data.map((item, index) => (
                    <Button key={index} className={cx('cate-item')}>
                        {item.desc}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default CategoryItem;
