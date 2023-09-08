import classNames from 'classnames/bind';
import styles from '../DefaultLayout/DefaultLayout.module.scss';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Slide from './Slide';
import Footer from '../components/Footer';

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
