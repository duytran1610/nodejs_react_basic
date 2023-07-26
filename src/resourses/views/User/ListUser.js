import { Component } from "react";
import axios from 'axios';
import './ListUser.scss';
import withRouter from "../HOC/withRouter";

// Website sử dụng để fake request API: https://reqres.in/
class ListUser extends Component {
    state = {
        listUser: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res && res.data && res.data.data? res.data.data : []
        })
    }

    // redirect page user/:id
    handleViewUser = (user) => {
        this.props.navigate(`${user.id}`);
    }
    
    render() {
        let listUser = this.state.listUser.map(item => 
                        <div className="user" key={item.id} onClick={() => this.handleViewUser(item)}>
                            {item.id} - {item.first_name} {item.last_name}
                        </div>
                        );

        return (
            <div className="list-user-container">
                <h2 className="title">LIST USER</h2>
                <div className="list-user-content">
                    {listUser}
                </div>
            </div>
        );
    }
}

export default withRouter(ListUser);