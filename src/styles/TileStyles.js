import {makeStyles} from "@material-ui/core/styles";

const useTileStyle = makeStyles({
    card: {
        minWidth: 275,
        margin: 10
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
});


export default useTileStyle;
