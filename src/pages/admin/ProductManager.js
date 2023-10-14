import classNames from 'classnames/bind';
import styles from './admin.module.scss';

const cx = classNames.bind(styles);

function ProductManager() {
    let column = [
        { title: 'Mã sản phẩm', field: 'code' },
        { title: 'Tên sản phẩm', field: 'name' },
        { title: 'Mô tả', field: 'phone' },
        { title: 'Hình ảnh', field: 'email' },
        { title: 'Giá', field: 'price' },
        { title: 'Nhãn hiệu', field: 'brands' },
        { title: 'Đối tượng', field: 'object' },
    ];

    // const data = [
    //     {
    //         id: 'ưe23',
    //         code: 'MH560',
    //         name: 'ADC_FG560GH',
    //         phone: '038679023',
    //         email: 'hoang@gmail.com',
    //         price: '5.670.000',
    //         brands: 'nhật bản',
    //         object: 'Nam',
    //     },
    //     {
    //         id: '23rt',
    //         code: 'MH561',
    //         name: 'ADC_FG560GH',
    //         phone: '038679023',
    //         email: 'hoang@gmail.com',
    //         price: '5.670.000',
    //         brands: 'nhật bản',
    //         object: 'Nam',
    //     },
    //     {
    //         id: '56gdfg',
    //         code: 'MH562',
    //         name: 'ADC_FG560GH',
    //         phone: '038679023',
    //         email: 'hoang@gmail.com',
    //         price: '5.670.000',
    //         brands: 'nhật bản',
    //         object: 'Nam',
    //     },
    // ];
    return (
        <div className={cx('wrapper')}>
            {/* <Grid container>
                <Grid item xs={12}>
                    <MaterialTable
                        title={
                            <Button variant="contained" color="primary" onClick={() => {}}>
                                Thêm mới
                            </Button>
                        }
                        columns={column}
                        data={data}
                        options={{
                            search: true,
                            maxBodyHeight: '450px',
                            minBodyHeight: '370px',
                            headerStyle: {
                                backgroundColor: '#358600',
                                color: '#fff',
                            },
                            rowStyle: (rowData, index) => ({
                                backgroundColor: index % 2 === 1 ? '#eee' : '#fff',
                            }),
                            padding: 'dense',
                            actionsColumnIndex: 0,
                            toolbar: true,
                        }}
                        components={{
                            toolbar: (props) => <MTableToolbar {...props} />,
                        }}
                        localization={{
                            body: {
                                emptyDataSourceMessage: `Danh sách trống`,
                            },
                            header: {
                                actions: 'Thao tác',
                            },
                            pagination: {
                                labelDisplayedRows: 'Bản ghi',
                                labelRowsPerPage: 'Bản ghi mỗi trang:',
                                firstTooltip: 'Trang đầu',
                                previousTooltip: 'Trang trước',
                                nextTooltip: 'Trang sau',
                                lastTooltip: 'Trang cuối',
                            },
                        }}
                        actions={[
                            {
                                icon: () => (
                                    <IconButton size="small">
                                        <Icon fontSize="medium" color="error">
                                            edit
                                        </Icon>
                                    </IconButton>
                                ),
                                tooltip: 'Sửa',
                            },
                            {
                                icon: () => (
                                    <IconButton size="small">
                                        <Icon fontSize="medium" color="error">
                                            delete
                                        </Icon>
                                    </IconButton>
                                ),
                                tooltip: 'Xóa',
                            },
                        ]}
                    ></MaterialTable>
                </Grid>
            </Grid> */}
        </div>
    );
}

export default ProductManager;
