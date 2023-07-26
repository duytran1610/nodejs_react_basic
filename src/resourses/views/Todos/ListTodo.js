import { Component } from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends Component {
    state={
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Making video'},
            {id: 'todo3', title: 'Fixing bug'}
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    handleDeleteTodo = (item) => {
        let currentListTodo = this.state.listTodos.filter((todo) => todo.id !== item.id);

        this.setState({
            listTodos: currentListTodo
        });

        toast.success('Delete success!');
    }

    handleEditTodo = (item) => {
        let {editTodo, listTodos} = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;

        // save
        if (!isEmpty && editTodo.id === item.id) {
            let listTodosCopy = listTodos;
            let index = listTodos.findIndex(todo => todo.id === item.id);

            listTodosCopy[index] = editTodo;           
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            });

            toast.success('Updated success!');

            return;
        }

        // edit
        this.setState({
            editTodo: item
        })
    }

    handleChangeEditTodo = (e) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = e.target.value;

        this.setState({
            editTodo: editTodoCopy
        });
    }

    render() {
        let editTodo = this.state.editTodo;
        let isEmpty = Object.keys(editTodo).length === 0;
        let listTodos = this.state.listTodos.map((item, index) => 
                            <div className="todo-child" key={item.id}>
                                {
                                    !isEmpty && editTodo.id === item.id ?
                                    <span>{index + 1} - <input value={editTodo.title} onChange={(e) => this.handleChangeEditTodo(e)}/></span>
                                    :
                                    <span>{index + 1} - {item.title}&nbsp;</span>
                                }
                                <button className="btn-edit" onClick={() => this.handleEditTodo(item)}>
                                {
                                    !isEmpty && editTodo.id === item.id ? 'Save' : 'Edit'
                                }
                                </button>
                                <button className="btn-delete" onClick={() => this.handleDeleteTodo(item)}>
                                    Delete
                                </button>
                            </div>
                        );
        return (
            <>
                <p>
                    Simple TODO Apps with React.js
                </p>
                <div className="list-todo-container">
                    <AddTodo 
                        addNewTodo={this.addNewTodo}
                    />

                    <div className="list-todo-content">
                    {listTodos}
                    </div>
                </div>
            </>
        );
    }
}

export default ListTodo;