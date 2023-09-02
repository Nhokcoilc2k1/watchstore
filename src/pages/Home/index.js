import classNames from "classnames/bind";
import styles from './Home.module.scss'
import { Grid } from "@mui/material";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                {/* <Grid container spacing={3} pt={0} pl={0}>
                    <Grid item lg={3} md={6} xs={12} >
                        <img src="" />
                        <h4>Miễn phí vận chuyển</h4>
                        <p>Giao hàng nhanh, đóng gói cẩn thận</p>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} >
                        <img src="" />
                        <h4>Miễn phí vận chuyển</h4>
                        <p>Giao hàng nhanh, đóng gói cẩn thận</p>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} >
                        <img src="" />
                        <h4>Miễn phí vận chuyển</h4>
                        <p>Giao hàng nhanh, đóng gói cẩn thận</p>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} >
                        <img src="" />
                        <h4>Miễn phí vận chuyển</h4>
                        <p>Giao hàng nhanh, đóng gói cẩn thận</p>
                    </Grid>
                </Grid> */}
            </div>
        </div>
    );
}

export default Home;