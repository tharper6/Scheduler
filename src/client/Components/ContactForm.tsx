import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Swal from 'sweetalert2';

class Contact extends React.Component<IContactProps, IContactState> {

    constructor(props: IContactProps) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            messages: ''
        };
    }

    onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch ('/api/contact', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            this.setState({
                email: '',
                subject: '',
                messages: ''
            })
            Swal.fire({
                position: 'top-start',
                type: 'success',
                title: 'Email Sent!',
                showConfirmButton: false,
                timer: 2000
              })
            this.props.history.push('/trainees')
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <main className="container my-5">
                <form className="form-group mt-5 rounded p-3 shadow-lg" onSubmit={this.onSubmit} >
                    <label>Email:</label>
                    <input type="text" className="input-group my-1 p-1" value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} />
                    <label>Subject:</label>
                    <input type="text" className="input-group my-1 p-1" value={this.state.subject} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ subject: e.target.value })} />
                    <label>Messages:</label>
                    <textarea rows={5} className="input-group my-1 p-1" value={this.state.messages} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ messages: e.target.value })} />
                    <button className="form-control btn btn-dark mt-2">Send Email!</button>
                </form>
            </main>
        )
    }
}

export interface IContactProps extends RouteComponentProps<{id: string}> { }

export interface IContactState {
    email: string,
    subject: string,
    messages: string
}

export default Contact;