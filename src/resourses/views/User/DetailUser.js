import { Component } from "react";
import withRouter from "../HOC/withRouter";
import axios from 'axios';
import { toast } from 'react-toastify';

class DetailUser extends Component {
    state = {
        user: {}
    }
    
    async componentDidMount() {        
        if (this.props.params && this.props.params.id) {
            let id = this.props.params.id;
            
            try {
                let res = await axios.get(`https://reqres.in/api/users/${id}`);
                this.setState({
                    user: res.data.data
                });
                //console.log(this.state.user);
            }
            catch (e) {
                toast.error(`Missing get information's user!`);
            }
            
        }
    }

    // back page user
    handleBack = () => {
        this.props.navigate('/user');
    }

    render() {
        let {user} = this.state;
        let isEmpty = Object.keys(user).length === 0;
        return (
            <>
                <div>Hello world from user with id: {this.props.params.id}</div>
                {
                    !isEmpty? 
                    <>
                        <div>User'name: {user.first_name} {user.last_name}</div>
                        <div>User'email: {user.email}</div>
                        <div>
                            <img src={user.avatar} alt={user.id}/>
                        </div>
                        <button onClick={() => this.handleBack()}>Back</button>
                    </>
                    : <></>
                }
            </>
        );
    }
}

export default withRouter(DetailUser);