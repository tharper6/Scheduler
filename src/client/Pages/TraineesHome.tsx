import * as React from 'react';

class TraineesHome extends React.Component<ITraineesHomeProps, ITraineesHomeState> {

    constructor(props: ITraineesHomeProps) {
        super(props);
        this.state = {
            name: null
        };
    }

    render() {
        return (
            <main className="container my-5">
                <h1>TraineesHome</h1>
            </main>
        )
    }
}

export interface ITraineesHomeProps { }

export interface ITraineesHomeState {
    name: string;
}

export default TraineesHome;