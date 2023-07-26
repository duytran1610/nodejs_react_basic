import { Component } from "react";
import Color from "../HOC/Color";
import logo from "../../../public/img/nodejs.png";

class Home extends Component {
    

    render() {
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

export default Color(Home);