import { Chip } from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DoneIcon from '@mui/icons-material/Done';

function createData(id, name, translate) {
    return { id, name, translate };
}

const translater = [
    //service name
    createData("service_name", "car_traffic", "Trafik Sigortası"),
    createData("service_name", "car_general", "Kasko"),
    createData("service_name", "private_health", "Kişisel Sağlık Sigortası"),
    createData("service_name", "supplementary_health", "Tamamlayıcı Sağlık Sigortası"),
    createData("service_name", "general_home", "Konut Sigortası"),
    createData("service_name", "compulsory_earthquake", "DASK"),
    createData("service_name", "mobile_phone", "Cep Telefonu Sigortası"),

    //status
    createData("status", "pending", <Chip
        color="error"
        size="small"
        style={{ width: 100 }}
        variant='outlined'
        icon={<AccessTimeIcon />}
        label="Bekliyor" />),
    createData("status", "processing", <Chip
        color="warning"
        size="small"
        style={{ width: 100 }}
        variant='outlined'
        icon={<WarningAmberIcon />}
        label="İşlemde" />),
    createData("status", "completed", <Chip
        color="success"
        size="small"
        style={{ width: 130 }}
        variant='outlined'
        icon={<DoneIcon />}
        label="Tamamlandı" />),

    //iscompleted
    createData("is_completed", "0", <Chip
        color="error"
        size="small"
        style={{ width: 130 }}
        variant='outlined'
        icon={<ErrorOutlineIcon />}
        label="Tamamlanmadı" />),
    createData("is_completed", "1", <Chip
        color="success"
        size="small"
        style={{ width: 130 }}
        variant='outlined'
        icon={<DoneIcon />}
        label="Tamamlandı" />),
];


export function getTranslatedData(offers) {
    return (offers.map(function (data) {
        translater.map(trans => {
            if (data[trans.id] == trans.name)
                data = { ...data, [trans.id]: trans.translate };
        });
        return data;
    }, this));
}