import {makeStyles} from "@material-ui/core/styles";

const useTileStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: 10,
        padding: theme.spacing(2),
    },
    cardTitle: {
        fontSize: 18,
    },
    sectionTitle: {
        marginTop: 12,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    appendix: {
        marginLeft: 10
    }
}));


export default useTileStyle;
