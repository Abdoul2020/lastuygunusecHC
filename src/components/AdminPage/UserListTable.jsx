import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography,
    Paper, IconButton, InputAdornment, FormControlLabel, Switch, TextField, FormControl, InputLabel,
    Select, MenuItem, Skeleton, Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BlockIcon from '@mui/icons-material/Block';
import DoneIcon from '@mui/icons-material/Done';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { getUserInfo, putUserRole } from '../../services/redux/adminSlice';
import { visuallyHidden } from '@mui/utils';
import { useDispatch, useSelector } from 'react-redux';
import ButtonConfirm from '../SigortaOperations/ButtonConfirm';

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
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
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
        id: 'name',
        label: 'Ad Soyad',
    },
    {
        id: 'phone',
        label: 'Telefon Numarası',
    },
    {
        id: 'email',
        label: 'E-Posta',
    },
    {
        id: 'vergiNo',
        label: 'Vergi Numarası',
    },
    {
        id: 'tc',
        label: 'Tc Kimlik No',
    },
    {
        id: 'created_at',
        label: 'Oluşturma Tarihi',
    },
    {
        id: 'last_login_at',
        label: 'Son Giriş Tarihi',
    },
    {
        id: 'email_verified',
        label: 'E-Posta Onayı',
    },
    {
        id: 'proccess',
        label: 'İşlem',
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead >
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
    const { searchValue, setSearchValue, offers, setFilterRows, roleSelect, handleChangeRole } = props;

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
                Kullanıcılar
            </Typography>
            <FormControl style={{ width: 260, marginRight: 10, textAlign: 'left' }} size="small">
                <InputLabel color="success" id="demo-simple-select-label">Yetki Türü</InputLabel>
                <Select color="success"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={roleSelect}
                    label="Yetki Türü"
                    onChange={handleChangeRole}>
                    <MenuItem value="user">Üye</MenuItem>
                    <MenuItem value="servicep">Servis Sağlayıcı</MenuItem>
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
                                </IconButton>}

                        </InputAdornment>
                    )
                }}
            />
        </Toolbar>
    );
};

export default function UserListTable() {
    const { users, status, statusCode } = useSelector(state => state.adminSlice);

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchValue, setSearchValue] = React.useState("");
    const [filterRows, setFilterRows] = React.useState(users);
    const [roleSelect, setRoleSelect] = React.useState("user");

    const dispatch = useDispatch();

    const getUserInfoByRole = async (role) => {
        await dispatch(getUserInfo({ role: role })).then((res) => {
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (filterRows.length == users.length ? users : filterRows).length) : 0;

    const handleChangeRole = (e) => {
        setRoleSelect(e.target.value);
        getUserInfoByRole(e.target.value);
    }

    const handleClickDoServicep = (res, uid, role, blocked) => {
        if (res) {
            dispatch(putUserRole({ uid: uid, role: role, blocked: blocked })).then((res) => {
                getUserInfoByRole(roleSelect);
            });
        }
    }
    React.useEffect(() => {
        getUserInfoByRole(roleSelect);
    }, []);

    return (
        <Box sx={{ width: '90%', margin: 'auto', marginTop: 5 }} className="insideList">
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar searchValue={searchValue} setSearchValue={setSearchValue} offers={users} setFilterRows={setFilterRows} roleSelect={roleSelect} handleChangeRole={handleChangeRole} />
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
                                rowCount={(filterRows != "" ? users : filterRows).length}
                            />
                            <TableBody>
                                {stableSort((filterRows.length == users.length && status === "success" ? users : filterRows), getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={row.id}>
                                                <TableCell align="center">{row.name}</TableCell>
                                                <TableCell align="center">{row.phone}</TableCell>
                                                <TableCell align="center">{row.email}</TableCell>
                                                <TableCell align="center">{row.vergiNo}</TableCell>
                                                <TableCell align="center">{row.tc}</TableCell>
                                                <TableCell align="center">{row.created_at}</TableCell>
                                                <TableCell align="center">{row.last_login_at}</TableCell>
                                                <TableCell align="center">
                                                    {row.email_verified === 1 ?
                                                        <Chip
                                                            color="success"
                                                            size="small"
                                                            style={{ width: 130 }}
                                                            variant='outlined'
                                                            icon={<DoneIcon />}
                                                            label="Onaylandı" /> :
                                                        <Chip
                                                            color="warning"
                                                            size="small"
                                                            style={{ width: 100 }}
                                                            variant='outlined'
                                                            icon={<WarningAmberIcon />}
                                                            label="Onay Bekliyor" />
                                                    }</TableCell>
                                                <TableCell align="center">
                                                    {roleSelect === "user" ?
                                                        <ButtonConfirm tooltip="Servis Sağlayıcı Yap" onConfirm={(res) => handleClickDoServicep(res, row.uid, "servicep", (row.blocked == 0 ? "false" : "true"))} color="success" dialogText={row.name + " adlı kullanıcıyı servis sağlayıcı yapmak istiyor musunuz ?"} dialogTitle="Emin misin ?" icon={<ArrowUpwardIcon />} /> :
                                                        <ButtonConfirm tooltip="Üye Yap" color="error" onConfirm={(res) => handleClickDoServicep(res, row.uid, "user", (row.blocked == 0 ? "false" : "true"))} dialogText={row.name + " adlı kullanıcıyı servis sağlayıcı yapmak istiyor musunuz ?"} dialogTitle="Emin misin ?" icon={<ArrowDownwardIcon />} />}
                                                    {row.blocked === 0 ?
                                                        <ButtonConfirm tooltip="Yasakla" color="error" onConfirm={(res) => handleClickDoServicep(res, row.uid, roleSelect, "true")} dialogText={row.name + " adlı kullanıcıyı yasaklamak istiyor musunuz ?"} dialogTitle="Emin misin ?" icon={<BlockIcon />} /> :
                                                        <ButtonConfirm tooltip="Yasağı Kaldır" color="success" onConfirm={(res) => handleClickDoServicep(res, row.uid, roleSelect, "false")} dialogText={row.name + " adlı kullanıcının yasağını kaldırmak istiyor musunuz ?"} dialogTitle="Emin misin ?" icon={<LockOpenIcon />} />}
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
                    count={(filterRows.length == users.length && status === "success" ? users : filterRows).length}
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
        </Box >
    );
}