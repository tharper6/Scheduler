import * as React from 'react';
// import Calendar from 'react-calendar'

class TraineesHome extends React.Component<ITraineesHomeProps, ITraineesHomeState> {

    constructor(props: ITraineesHomeProps) {
        super(props);
        this.state = {
            date: new Date
        };
    }

    onChange = (date: any) => this.setState({ date })

    render() {
        return (
            <main className="container my-5">
                {/* <h1>TraineesHome</h1>
                <Calendar
          onChange={this.onChange}
          value={this.state.date}
        /> */}
            </main>
        )
    }
}

export interface ITraineesHomeProps { }

export interface ITraineesHomeState {
    date: Date
}

export default TraineesHome;