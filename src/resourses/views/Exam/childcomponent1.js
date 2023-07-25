import {Component} from 'react';

class ChildComponent1 extends Component {
    // state
    state = {
        showJobs: false
    }

    handleClick = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    // re-render
    render () {
        console.log('>>>check data: ', this.props);
        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        let listJobs =arrJobs.map((item) => 
                        <div key={item.id}>
                            {item.title} - {item.salary}$
                        </div>
                    );
        return (
            <>
               {
                showJobs? 
                    <>
                        <div className='list-jobs'>
                            {
                                listJobs
                            }
                        </div>
                        <div><button onClick={() => this.handleClick()}>Hidden</button></div>
                    </>
                    :
                    <div><button onClick={() => this.handleClick()}>Show</button></div>
               }
            </>
        );
    }
}

// const ChildComponent1 = (props) => {
//         console.log('>>>check data: ', props);
//         let {arrJobs} = props;
//         let listJobs =arrJobs.map((item) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                         }
//                         return <></>
//                     });
//         return (
//             <>
//                <div className='list-jobs'>
//                 {
//                     listJobs
//                 }
//                </div>
//             </>
//         );
// }

export default ChildComponent1;