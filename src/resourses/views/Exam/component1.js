import {Component} from 'react';
import ChildComponent1 from './childcomponent1';
import Component2 from './component2';

class Component1 extends Component {
    // state
    state = {
        arrJobs: [
            {id: 'abcJob1', title: 'Developer', salary: '500'},
            {id: 'abcJob2', title: 'Tester', salary: '400'},
            {id: 'abcJob3', title: 'Leader', salary: '1000'}
        ]
    }

    addNewJob = (job) => {
        console.log('>>>check function:', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    // re-render
    render () {
        console.log('check render: ', this.state);
        return (
            <>
               <Component2
                    addNewJob={this.addNewJob}
               />

                <ChildComponent1 
                    arrJobs={this.state.arrJobs}
                />

            </>
        );
    }
}

export default Component1;