import React, {Component} from 'react';
import fbase from './components/Firebase';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    render() {
        return (
            <div>
                {
                    this.state.user ? (<Home/>) : (<Login/>)
                }
            </div>
        );
    }

    authListener() {
        fbase.auth().onAuthStateChanged((user) => {
            console.log(user, ' - user');
            if (user) {
                this.setState({user});
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({user: null});
                localStorage.removeItem('user');
            }
        })
    }
}

export default App;













