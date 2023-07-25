import { Component } from "react";
import { toast } from 'react-toastify';

class AddTodo extends Component {
    state = {
        title: ''
    }

    handleOnChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleOnClick = () => {
        if (!this.state.title) {
            toast.error("Missing!");
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }

        this.props.addNewTodo(todo);
        toast.success("Adding success!");

        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title}
                    onChange={(e) => this.handleOnChange(e)}
                />
                <button className="btn-add"
                    onClick={() => this.handleOnClick()}
                >Add</button>
            </div>
        );
    }
}

export default AddTodo;