import React from "react";
import axios from 'axios'

export default class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            formValue: {
                username: '',
                email: '',
                password: '',
                number: ''
            },
            formValid: {
                username: false,
                email: false,
                password: false,
                number: false
            },
            errormsg: '',
            successmsg: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.formValue);
        this.registerUser();
    }

    handleChange = event => {
        // console.log(event.target.name);
        this.setState({ formValue: { ...this.state.formValue, [event.target.name]: event.target.value } })
    }

    registerUser = () => {
        this.clearMessage();
        axios.post('http://localhost:8765/user/register', this.state.formValue)
            .then(response => {
                console.log("resp => ", response);
                this.setState({ successmsg: response.data })
                console.log("resp state => ", this.state.successmsg);
            })
            .catch(err => {
                this.setState({ errormsg: err });
            })
            .finally(() => {
                setTimeout(() => {
                    this.clearMessage();
                }, 3000)
            })
    }

    clearMessage = () => {
        this.setState({ errormsg: '', successmsg: '' });
    }

    render() {
        return <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="form-group col-lg-6 col-12">
                        <label for="username">User Name</label>
                        <input onChange={this.handleChange} type="text" class="form-control" name="username" id="username" placeholder="Username" />
                    </div>
                    <div class="form-group col-lg-6 col-12">
                        <label for="email">Email address</label>
                        <input onChange={this.handleChange} type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
                    </div>
                    <div class="form-group col-lg-6 col-12">
                        <label for="password">Password</label>
                        <input onChange={this.handleChange} type="password" name="password" class="form-control" id="password" placeholder="Password" />
                    </div>
                    <div class="form-group col-lg-6 col-12">
                        <label for="number">Contact Number</label>
                        <input onChange={this.handleChange} type="text" class="form-control" name="number" id="number" placeholder="Contact Number" />
                    </div>
                </div>

                <button type="submit" class="btn btn-success">Register</button>

            </form>

            {   
                this.state.successmsg !== '' &&  
                <div className="alert alert-success mt-3" role="alert">{this.state.successmsg}</div>
            }

            {
                this.state.errormsg !== '' && 
                <div className="alert alert-danger" role="alert">{this.state.errormsg}</div>
            }
        </div>

    }
}