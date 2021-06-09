import React from "react";
import axios from 'axios';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons'

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
            successmsg: '',
            modalClassName: 'modal-dialog modal-dialog-centered modal-lg'
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
        // .finally(() => {
        //     setTimeout(() => {
        //         this.clearMessage();
        //     }, 3000)
        // })
    }

    expandModal = () => {
        let className = '';
        this.state.modalClassName.includes('modal-fullscreen') ?
            className = 'modal-dialog modal-dialog-centered modal-lg' :
            className = 'modal-fullscreen modal-dialog modal-dialog-centered modal-lg';
        this.setState({ modalClassName: className });
    }

    clearMessage = () => {
        this.setState({ errormsg: '', successmsg: '' });
    }

    onCloseModal = () => {
        setTimeout(() => {
            this.setState({ modalClassName: 'modal-dialog modal-dialog-centered modal-lg' });
        }, 600)
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

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button>

            <div class="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className={this.state.modalClassName} role="document">
                    <div class="modal-content">
                        <div>
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                <div className="modal-btns">
                                    <button className="btn btn-sm" id="expand-btn" onClick={this.expandModal}><FontAwesomeIcon icon={faExpandAlt} /></button>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.onCloseModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div class="modal-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <h5>Tour Highlights</h5>
                                            <ul>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <img style={{ width: '100%' }} src="https://source.unsplash.com/nature" alt="nature.png" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <img style={{ width: '100%' }} src="https://source.unsplash.com/nature" alt="nature.png" />
                                        </div>
                                        <div className="col-6">
                                            <h5>Tour Highlights</h5>
                                            <ul>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                                <li>Beauty</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.onCloseModal}>Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    }
}