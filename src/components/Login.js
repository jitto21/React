import React from "react";

export default class Login extends React.Component {
    render() {
        return <form className="container">
            <div class="row">
                <div class="form-group col-lg-6 col-12">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group col-lg-6 col-12">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password" placeholder="Password" />
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Login</button>
        </form>

    }
}