import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography,
    Paper, Checkbox, IconButton, InputAdornment, Tooltip, FormControlLabel, Switch, ButtonGroup, Grid, TextField, FormControl, InputLabel,
    Select, MenuItem, Skeleton, Modal, List
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { visuallyHidden } from '@mui/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOffersProviderAsync } from '../../services/redux/adminSlice';
import { postUserInfoAsync, resetUsers } from '../../services/redux/userInfoSlice';
import UserInfoCard from '../SigortaOperations/UserInfoCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

function descendingComparator(a, b, orderBy) {
    if (orderBy != "status") {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
    } else {
        if (b[orderBy].props.label < a[orderBy].props.label)
            return -1;
        if (b[orderBy].props.label > a[orderBy].props.label)
            return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'service_name',
        label: 'Sigorta Tipi',
    },
    {
        id: 'status',
        label: 'Durum',
    },
    {
        id: 'additional_info',
        label: 'Ek Bilgi',
    },
    {
        id: 'form_url',
        label: 'Form Linki',
    },
    {
        id: 'invoice_url',
        label: 'Fatura Linki',
    },
    {
        id: 'cost',
        label: 'Teklif',
    },
    {
        id: 'created_at',
        label: 'Oluşturma Tarihi',
    },
    {
        id: 'process_started_at',
        label: 'İşleme Alınma Tarihi',
    },
    /*{
        id: 'completed_at',
        label: 'completed at',
    },*/
    {
        id: 'is_completed',
        label: 'is completed',
    },
    {
        id: 'process',
        label: 'İşlem',
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'center'}
                        padding='normal'
                        sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}>
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { searchValue, setSearchValue, offers, setFilterRows, handleChangeIsompleted, iscompleted } = props;

    const requestSearch = (searchedValue) => {
        setSearchValue(searchedValue);
        const filteredRows = offers.filter((row) => {
            let containsVal = false;
            headCells.forEach((property) => {
                if (('' + row[property.id])?.toLowerCase().includes(searchedValue.toLowerCase()))
                    containsVal = true;
            });
            return containsVal;
        });
        setFilterRows(filteredRows);
    }
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
            }}>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div">
                Sigorta Teklifleri
            </Typography>
            <FormControl style={{ width: 260, marginRight: 10, textAlign: 'left' }} size="small">
                <InputLabel color="success" id="demo-simple-select-label">Tamamlanma Durumu</InputLabel>
                <Select color="success"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={iscompleted}
                    label="Sigorta Türü"
                    onChange={handleChangeIsompleted}>
                    <MenuItem value="false">Tamamlanmamış</MenuItem>
                    <MenuItem value="true">Tamamlandı</MenuItem>

                </Select>
            </FormControl>
            <TextField
                label="Ara"
                size='small'
                value={searchValue}
                onChange={(e) => requestSearch(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            {searchValue == '' ?
                                <IconButton edge="end"><SearchIcon /></IconButton>

                                : <IconButton onClick={() => requestSearch('')} edge="end">
                                    <CloseIcon />
                                </IconButton>
                                }

                        </InputAdornment>
                    )
                }}
            />
        </Toolbar>
    );
};

export default function EnhancedTable() {
    const { offers, status, statusCode } = useSelector(state => state.adminSlice);
    const { user, serviceprovider, statusUser } = useSelector(state => state.userInfo);

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchValue, setSearchValue] = React.useState("");
    const [filterRows, setFilterRows] = React.useState(offers);
    const [iscompleted, setIscompleted] = React.useState(false);
    const [showUserInfo, setShowUserInfo] = React.useState(false);

    const dispatch = useDispatch();
    const getAllOffers = async (iscompleteds) => {
        await dispatch(getAllOffersProviderAsync({ is_completed: iscompleteds })).then((res) => {
            setFilterRows(res.payload.data.body.data);
            setSearchValue("");
        });;
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (filterRows.length == offers.length ? offers : filterRows).length) : 0;

    const handleChangeIsompleted = (event) => {
        setIscompleted(event.target.value);
        getAllOffers(event.target.value);
    };

    const handleClickViewDetails = async (uid, sid) => {
        setShowUserInfo(true);
        dispatch(postUserInfoAsync({ id: uid, role: "user" })).then(() => {
            if (sid !== "not-set")
                dispatch(postUserInfoAsync({ id: sid, role: "servicep" }));
        });
    }

    const handleClickCloseModal = () => {
        setShowUserInfo(false);
        dispatch(resetUsers());
    }

    React.useEffect(() => {
        getAllOffers(false);
    }, []);


    // {row.form_url}
    // {row.invoice_url}

    return (
        <Box sx={{ width: '90%', margin: 'auto', marginTop: 5 }} className="insideList">

            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar searchValue={searchValue} setSearchValue={setSearchValue} offers={offers} setFilterRows={setFilterRows} iscompleted={iscompleted} handleChangeIsompleted={handleChangeIsompleted} />
                {status === "success" && statusCode == 200 ?
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={(filterRows != "" ? offers : filterRows).length}
                            />
                            <TableBody>
                                {stableSort((filterRows.length == offers.length && status === "success" ? offers : filterRows), getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={row.id}>
                                                <TableCell align="center">{row.service_name}</TableCell>
                                                <TableCell align="center">{row.status}</TableCell>
                                                <TableCell align="center">{row.additional_info}</TableCell>
                                                <TableCell align="center">ekol</TableCell>
                                                <TableCell align="center">buson</TableCell>
                                                <TableCell align="center">{row.cost}</TableCell>
                                                <TableCell align="center">{row.created_at}</TableCell>
                                                <TableCell align="center">{row.process_started_at}</TableCell>
                                                {/*<TableCell align="center">{row.completed_at}</TableCell>*/}
                                                <TableCell align="center">{row.is_completed}</TableCell>
                                                <TableCell align="center">
                                                    <IconButton aria-label="Görüntüle" size="small" color="warning" onClick={() => handleClickViewDetails(row.user_uid, row.serviceprovider_uid)}>
                                                        <RemoveRedEyeOutlinedIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                        
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <Box sx={{ width: "96%", margin: 'auto' }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                    </Box>}
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={(filterRows.length == offers.length && status === "success" ? offers : filterRows).length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    labelRowsPerPage="Sayfa başına gösterim"
                    labelDisplayedRows={(page) => `${page.count} kayıttan ${page.from}-${page.to === -1 ? page.count : page.to} arasındaki kayıtlar gösteriliyor `}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Küçük Gösterim"
            />
            <Modal
                open={showUserInfo}
                onClose={handleClickCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    {statusUser === "success" ?
                        <div>
                            <h3 style={{ textAlign: 'center', fontWeight: 500 }}>Gönderen Kişi</h3>
                            <hr style={{ width: 250, textAlign: 'center', margin: 'auto' }} />
                            <UserInfoCard user={user} />

                            <hr style={{ borderColor: "#727272", borderRadius: 3 }} />

                            {serviceprovider != "" ?
                                <div>
                                    <h3 style={{ textAlign: 'center', marginTop: 5, fontWeight: 500 }}>Teklifi Alan Servis Sağlayıcı</h3>
                                    <hr style={{ width: 250, textAlign: 'center', margin: 'auto' }} />
                                    <UserInfoCard user={serviceprovider} />
                                </div> :
                                <h3 style={{ textAlign: 'center', marginTop: 5, fontWeight: 500 }}>Herhangi bir servis sağlayıcı teklifi almamış.</h3>
                            }
                        </div>
                        : <Box sx={{ width: "96%", margin: 'auto' }}>
                            <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={false} />
                        </Box>}
                </Box>
            </Modal>
        </Box >
    );
}