import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        name: "",
        email: "",
        message: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        this.props.onSubmit(e, this.state);
        return this.setState({ name: "", email:"", message:"" })
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div className="column">
                <form method="post">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input 
                                type="text" 
                                name="name" 
                                className="input" 
                                onChange={this.handleChange} 
                                value={name} 
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    name="email"
                                    onChange={this.handleChange}
                                    value={email}
                                    required
                                />
                            </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                            <div className="control">
                                <textarea 
                                    className="input" 
                                    type="text" 
                                    name="message"
                                    onChange={this.handleChange}
                                    value={message}
                                    required
                                />
                            </div>
                    </div>
                    <div className="control">
                        <button type="reset" className="button is-info" onClick={this.handleSubmit}>
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;