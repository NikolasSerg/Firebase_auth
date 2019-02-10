import React, {Component} from 'react';
import fbase from '../Firebase';

class Home extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Welkome Home</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }

    logout() {
        fbase.auth().signOut();
    }
}

export default Home;
