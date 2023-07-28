import { Component } from "react";
import Color from "../HOC/Color";
import logo from "../../../public/img/nodejs.png";
import { connect } from "react-redux";

class Home extends Component {
    

    render() {
        console.log('>>>check dataRedux', this.props.dataRedux);
        return (
            <>
                <div>Home</div>
                <div>
                    <img src={logo} style={{width: '200px', height: '200px', marginTop: '40px', borderRadius: '50%'}} alt="logo" />
                </div>
            </>
        );
    }
}

// Create function nhận state và trả về đối tượng (sau này sẽ là props)
const mapStatetoProps = (state) => {
    return {
        dataRedux: state.users
    }
}

// Mapping State (Redux) to Props (React) by connect()
export default connect(mapStatetoProps)(Color(Home));