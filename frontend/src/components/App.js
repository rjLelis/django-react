import React from 'react';
import ReactDom from 'react-dom'
import Table from './Table'
import Form from './Form'

class App extends React.Component {

    state = {
        data: [],
        loaded: false,
        placeholder: 'Loading...'
    }

    componentDidMount() {
        fetch('/api/lead/').then(response => {
            if(response.status !== 200) {
                return this.setState({ placeholder: 'Something went wrong!'});
            }
            return response.json();
        })
        .then(data => this.setState({ data: data , loaded: true}));
    }

    handleSubmit = (e, lead) => {
        e.preventDefault();
        const conf = {
            method: "POST",
            body: JSON.stringify(lead),
            headers: new Headers({ "Content-type": "application/json" })
        };
        fetch('api/lead/', conf).then(response => {
            if(response.status !== 200) {
                return this.state({ placeholder: 'Error on post' });
            }
            return (fetch('api/lead/').then(response => {
                if(response.status !== 200) {
                    return this.setState({ placeholder: 'Something went wrong!'});
                }
                return response.json();
            })
            .then(data => this.setState({ data: data, loaded: true })))
        });
    }

    render() {
        const {loaded, placeholder} = this.state;
        return loaded ? (
            <React.Fragment>
                <Table data={this.state.data}/> 
                <Form onSubmit={this.handleSubmit}/>
            </React.Fragment>
        ) : (<p>{placeholder}</p>)
    }
}

const wrapper = document.getElementById('app');

wrapper ? ReactDom.render(<App />, wrapper) : null;