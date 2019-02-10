import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fbase from '../Firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handelChange = this.handelChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="input">
                            <input type="email"
                                   name="email"
                                   value={this.state.email}
                                   placeholder="Email"
                                   onChange={this.handelChange}
                            />
                            Email address
                        </label>
                    </div>
                    <div>
                        <label htmlFor="input">
                            <input type="password"
                                   name="password"
                                   value={this.state.password}
                                   placeholder="Password"
                                   onChange={this.handelChange}
                            />
                            Password
                        </label>
                    </div>
                    <button type="submit"
                            onClick={this.login}>
                        Login
                    </button>
                    <button onClick={this.signUp}>
                        SignUp
                    </button>

                </form>

            </div>
        );
    }

    handelChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    login(e) {
        e.preventDefault();
        fbase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function (error) {
                var errorCode = error.code;
                console.log(errorCode, " - errorCode");
                var errorMessage = error.message;
                console.log(errorMessage, " - errorMessage")
            });
    };

    signUp(e) {
        e.preventDefault();
        fbase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            })
    };
}

export default Login;
