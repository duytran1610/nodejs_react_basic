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

    deleteAJob = (job) => {
        let currentListJob = this.state.arrJobs.filter((item) => item.id !== job.id);

        this.setState({
            arrJobs: currentListJob
        })
    }

    // invoked immediately after updating occurs. This method is not called for the initial render.
    componentDidUpdate(prevProps, prevState) {
        console.log('>>>> run did update: ', 'prev state: ', prevState, 'current state: ', this.state);
    }

    // invoked immediately after a component is mounted
    componentDidMount() {
        console.log('>>>> run component did mount.');
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
                    deleteAJob={this.deleteAJob}
                />

            </>
        );
    }
}

export default Component1;