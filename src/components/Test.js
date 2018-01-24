import React, { Component } from 'react';
import { findApplicants } from '../services/api.services';

class Test extends Component {
  constructor(){
    super()
    this.state={

    }
  }


  componentWillMount() {

    findApplicants()
        
        .then( res => {
            if (res.status !== 200) {
                console.log(res);
            }
            else {
                this.setState({ applicants: res.data });
            }
        })
        .catch(err => {throw err});
}





  render() {

    return (
      <div>

        </div>
    );
  }
}

export default Test;
