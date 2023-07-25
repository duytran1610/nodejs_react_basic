import {Component} from 'react';
import ChildComponent1 from './childcomponent1';

class Component1 extends Component {
    // state
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'abcJob1', title: 'Developer', salary: '500'},
            {id: 'abcJob2', title: 'Tester', salary: '400'},
            {id: 'abcJob3', title: 'Leader', salary: '1000'}
        ]
    }

    handleFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }

    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('>>>Check data:', this.state);
    }

    // re-render

    render () {
        console.log('check render: ', this.state);
        return (
            <>
               <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" name="fname" value={this.state.firstName} onChange={(e) => this.handleFirstName(e)}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" name="lname" value={this.state.lastName} onChange={(e) => this.handleLastName(e)}/><br/><br/>
                    <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
                </form> 

                <ChildComponent1 
                    name={this.state.firstName}
                    age={'12'}
                    address={'Hanoi'}
                    arrJobs={this.state.arrJobs}
                />

            </>
        );
    }
}

export default Component1;