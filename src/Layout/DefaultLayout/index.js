import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Slide from './Slide';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navigation />
            <Slide />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
