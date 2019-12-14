import React from "react";
import UptimeComponent from "./UptimeComponent";
import ThroughputComponent from "./ThroughputComponent";

export default function MetricsComponentView(props) {

    return(
        <div>
            <UptimeComponent {...props}/>
            <ThroughputComponent/>

        </div>
    )


}
