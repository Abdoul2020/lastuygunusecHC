import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip } from '@mui/material';
import React from 'react';

export default function ButtonConfirm(props) {
    const [open, setOpen] = React.useState(false);

    const onClickYes = () => {
        setOpen(false);
        props.onConfirm(true);
    }

    const onClickNo = () => {
        setOpen(false);
        props.onConfirm(false);
    }
    return (
        <div style={{ display: "inline-block" }}>
            <Tooltip title={props.tooltip} arrow disableHoverListener={props.tooltip == null}>
                <IconButton aria-label="Tamamla" size="small" color={props.color} onClick={() => setOpen(true)}>
                    {props.icon}
                </IconButton>
            </Tooltip>
            {open &&
                <Dialog
                    open={true}
                    onClose={onClickNo}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {props.dialogTitle}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {props.dialogText}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClickYes} autoFocus> Evet</Button>
                        <Button onClick={onClickNo}>Hayır</Button>
                    </DialogActions>
                </Dialog>
            }
        </div>
    );
}