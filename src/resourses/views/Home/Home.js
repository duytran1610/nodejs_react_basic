import { Component } from "react";
import Color from "../HOC/Color";
import logo from "../../../public/img/nodejs.png";
import { connect } from "react-redux";

class Home extends Component {
    
    handleDeleteUser = (user) => {
        console.log('>>>user: ', user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.createUserRedux();
    }

    render() {
        console.log('>>>check dataRedux', this.props.dataRedux);
        let listUsers = this.props.dataRedux.map(user => 
                            <div key={user.id}>
                                {user.id} - {user.name} <span onClick={() => this.handleDeleteUser(user)}>x</span>
                            </div>
                        );
        return (
            <>
                <div>Home</div>
                <div>
                    <img src={logo} style={{width: '200px', height: '200px', marginTop: '40px', borderRadius: '50%'}} alt="logo" />
                </div>
                <div>
                    {listUsers}
                </div>
                <button onClick={() => this.handleCreateUser()}>Add new</button>
            </>
        );
    }
}

// Create function nhận state và trả về đối tượng (sau này sẽ là thuộc tính được thêm vào props)
const mapStatetoProps = (state) => {
    return {
        dataRedux: state.users
    }
}

// Create function nhận dispatch và trả về đối tượng (sau này sẽ là thuộc tính được thêm vào props)
const mapDispatchtoProps = (dispatch) => {
    // dispatching plain actions
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        createUserRedux: () => dispatch({type: 'CREATE_USER'})
    }
}

// Mapping State (Redux) to Props (React) by connect()
export default connect(mapStatetoProps, mapDispatchtoProps)(Color(Home));