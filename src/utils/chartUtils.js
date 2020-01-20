import moment from "moment";

export function tooltipLabelFormatter(timestamp) {
    return moment(timestamp).format('YYYY-MM-DD HH:mm')
}