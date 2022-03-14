import * as React from "react"

export interface PrettyProps { data: String }

export class Pretty extends React.Component<PrettyProps, {}> {
    render() {
        return <h1>Hello from {this.props.data}</h1>;
    }
}