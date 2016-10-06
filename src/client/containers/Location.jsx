import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class Location extends React.Component {
	constructor(props) {
    super(props);

  }

  
  
  render() {
  	console.log(this.props.params)
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li><Link className="grey underline" to={{pathname: "/people"}}>People</Link></li>
              <li><Link className="grey underline" to={{pathname: "/people/factories"}}>Our Factories</Link></li>
              <li className="active">Cebu</li>
            </ol>
          </div>
        </div>
        <Frame pictures={this.state.pictures} images={this.state.images}/>
      </div>
    )
  }
  
}