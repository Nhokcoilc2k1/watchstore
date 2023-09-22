import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Pagination({ pagination, onPageChange }) {
    const { _page, _limit, _totalRows } = pagination;

    const [page, setPage] = useState(_page);
    const totalPages = Math.ceil(_totalRows / _limit);

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <button className={cx('btn')} disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span className={cx('pagenumber')}>{page}</span>
            <button className={cx('btn')} disabled={_page >= totalPages} onClick={() => handlePageChange(_page + 1)}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default Pagination;
