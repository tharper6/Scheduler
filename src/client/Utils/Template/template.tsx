import * as React from 'react';

class Template extends React.Component<ITemplateProps, ITemplateState> {

    constructor(props: ITemplateProps) {
        super(props);
        this.state = {
            name: null
        };
    }

    render() {
        return (
            <main className="container my-5">
                <h1>Template</h1>
            </main>
        )
    }
}

export interface ITemplateProps { }

export interface ITemplateState {
    name: string;
}

export default Template;