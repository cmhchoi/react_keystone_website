import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "http://kaki.sini.com.my/en/wp-content/uploads/2016/08/happy1.jpg",
          des: "OUR FACTORIES",
          link: '/people/factories',
          size: 'rectangle'
        },
        {
          img: "http://cdn.elezea.com/images/1_group-work.jpg",
          des: "OUR PEOPLE",
          link: '/people/story',
          size: 'square'
        },
        {
          img: "http://cdn.elezea.com/images/1_group-work.jpg",
          des: "WORK WITH US",
          link: '/people/jobs',
          size: 'square'
        },
      ],
    }
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li className="active">People</li>
            </ol>
          </div>
        </div>
        <Frame pictures={this.state.pictures}/>
      </div>
    )
  }
  
}