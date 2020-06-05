import { Theme, makeStyles, createStyles } from "@material-ui/core";

export const drawerStyle = (drawerWidth:number) => {
    return makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
            },
            appBar: {
                zIndex: theme.zIndex.drawer + 1,
                background: '#333333',
                transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
                }),
            },
            appBarShift: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
                }),
            },
            menuButton: {
                color: 'white',
                marginRight: 36,
            },
            hide: {
                display: 'none',
            },
            drawer: {
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: 'nowrap',
            },
            drawerOpen: {
                background: "#676767",
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
                }),
            },
            drawerClose: {
                background: "#676767",
                transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
                width: theme.spacing(7) + 1,
                [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
                },
            },
            toolbar: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: theme.spacing(0, 1),
                ...theme.mixins.toolbar,
            },
            content: {
                width: '100%',
                padding: theme.spacing(3),
            },
            link: {
                textDecoration: 'none',
                color: 'white'
            }
        }),
    );
}
