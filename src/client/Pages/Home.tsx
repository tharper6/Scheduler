import * as React from 'react';

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            name: null
        };
    }

    render() {
        return (
            <main className="container my-5">
                <h1>Home</h1>
            </main>
        )
    }
}

export interface IHomeProps { }

export interface IHomeState {
    name: string;
}

export default Home;