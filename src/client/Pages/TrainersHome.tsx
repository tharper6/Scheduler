import * as React from 'react';

class TrainersHome extends React.Component<ITrainersHomeProps, ITrainersHomeState> {

    constructor(props: ITrainersHomeProps) {
        super(props);
        this.state = {
            name: null
        };
    }

    render() {
        return (
            <main className="container my-5">
                <h1>TrainersHome</h1>
            </main>
        )
    }
}

export interface ITrainersHomeProps { }

export interface ITrainersHomeState {
    name: string;
}

export default TrainersHome;