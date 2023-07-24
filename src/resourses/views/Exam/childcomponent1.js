import {Component} from 'react';

class ChildComponent1 extends Component {
    // state
    state = {
        
    }

    // re-render

    render () {
        console.log('>>>check data: ', this.props);
        let {name, age} = this.props;

        return (
            <>
               <div>
                    child component: {name} - {age}
               </div>
            </>
        );
    }
}

export default ChildComponent1;