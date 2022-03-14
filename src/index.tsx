import * as React from "react"
import * as ReactDOM from "react-dom"

import {Pretty} from "@components/Pretty";

var str = '{ "name": "cxh", "sex": "man","holiday": [{"list": [{"date": "1900-1-30","name": "除夕"},{"date": "1900-1-31","name": "春节"}, {"date": "1900-5-1","name": "劳动节"]}'; 

ReactDOM.render(
    <Pretty data={str} />,
    document.getElementById("root")
);