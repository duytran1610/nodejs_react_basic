//import {Component} from 'react';

// class ChildComponent1 extends Component {
//     // re-render

//     render () {
//         console.log('>>>check data: ', this.props);
//         let {arrJobs} = this.props;
//         let listJobs =arrJobs.map((item) => 
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                     );
//         return (
//             <>
//                <div className='list-jobs'>
//                 {
//                     listJobs
//                 }
//                </div>
//             </>
//         );
//     }
// }

const ChildComponent1 = (props) => {
        console.log('>>>check data: ', props);
        let {arrJobs} = props;
        let listJobs =arrJobs.map((item) => 
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                    );
        return (
            <>
               <div className='list-jobs'>
                {
                    listJobs
                }
               </div>
            </>
        );
}

export default ChildComponent1;