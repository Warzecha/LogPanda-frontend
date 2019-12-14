import React, {useState} from "react";
import MetricsComponentView from "./MetricsComponentView";


export default function MetricsComponentContainer() {

    const [uptime, setUptime] = useState(98.97);
    const [errorRate, setErrorRate] = useState(0.12);
    const [serverErrors, setServerErrors] = useState(30.2);


    return (
        <MetricsComponentView uptime={uptime}
                              errorRate={errorRate}
                              serverErrors={serverErrors}/>
    )

}
