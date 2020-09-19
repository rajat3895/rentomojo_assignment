import React, {Component} from 'react';
import Posts from './templates/Posts';
import Api from '../../apis/Api.js'
import './Home.css';

class HomeComponent extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        Api.getUsers().then((res) => {
            this.setState({users: res.data});
        });
    }

    getUserDetails = () => {
        return this.state.users.map((user) => {
            return (
                <div key={user.id} className='parentFlex'>
                    <div className='col1'>
                        {user.name}
                    </div>
                    <div className='col1'>
                        {user?.company?.name}
                    </div>
                    <div className='col2'>
                        <Posts
                            name={user.name}
                            id={user.id}
                            key={user.id}
                        />
                    </div>
                </div>
            );
        });
    }
    
    render() {
        return (
            <>
                <div className='parent'>
                        <div className='col1'>
                            Name
                        </div>
                        <div className='col1'>
                            Company
                        </div>
                        <div className='col2'>
                            Posts
                        </div>
                </div>
                {this.getUserDetails()}
            </>
        );
    }
}

export default HomeComponent;