import React from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        gap: 4,
        alignItems: 'center'
    },
    url: {
        //  ...theme.typography.bodySmall,
    //   color: theme.palette.project.interactive.interactive_01,
        color:'orange',
        textTransform: 'capitalize',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        },
        '&:active': {
            // color: theme.palette.project.interactive.interactive_02
            color:'red'
        }
    },
    label: {
        // ...theme.typography.bodySmall,
        fontSize: 12,
        // color: theme.palette.project.neutral.neutral_01,
        textTransform: 'capitalize',
        color:'black'
    }
}));

const Link = ({ url, label, onClick }: { url: string; label?: string; onClick: () => void }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {label && <div className={classes.label}>{label} :</div>}
            <div className={classes.url} onClick={onClick}>
                {url}
            </div>
        </div>
    );
};

export default Link;
