import React, { Component ,Fragment} from "react";
import withCounter from "./Withcounter";
class ClickCounter extends Component {
    constructor(props){
        super(props);
        this.state={ };
    }
    
    render() { 
        let { count,IncrementCounter, changeText}=this.props;

        return ( 
            <Fragment>
                <button className="btn btn-danger" onClick={IncrementCounter}>
                    Click me {count} {changeText}
                </button>
            </Fragment>
         );
    }
}
 
export default withCOunter(ClickCounter);