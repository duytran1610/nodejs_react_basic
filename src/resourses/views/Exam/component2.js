import { Component } from "react";

class Component2 extends Component {

    state = {
        title: '',
        salary: ''
    }

    handleTitleJob = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleSalary = (e) => {
        this.setState({
            salary: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.salary) {
            alert('Missing!');
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 10001),
            title: this.state.title,
            salary: this.state.salary
        });

        this.setState({
            title: '',
            salary: ''
        });
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Title:</label><br/>
                    <input type="text" name="fname" value={this.state.title} onChange={(e) => this.handleTitleJob(e)}/><br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input type="text" name="lname" value={this.state.salary} onChange={(e) => this.handleSalary(e)}/><br/><br/>
                    <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
                </form> 
            </>
        )
    }
}

export default Component2;