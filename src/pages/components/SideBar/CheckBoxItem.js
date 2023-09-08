import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function CheckboxItem({ data }) {
    return (
        <div>
            {data.map((item) => (
                <div key={item.id} className={cx('group')}>
                    <input type="checkbox" />
                    <label>{item.desc}</label>
                </div>
            ))}
        </div>
    );
}

export default CheckboxItem;
