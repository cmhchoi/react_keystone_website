import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class Home extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "https://aos.iacpublishinglabs.com/question/aq/700px-394px/people-need-clothes_d330435c696a4f74.jpg?domain=cx.aos.ask.com",
          des: "CATEGORY",
          link: '/products/category',
          size: 'rectangle'
        },
        {
          img: "http://1.bp.blogspot.com/--5Nkk24C1Nk/VDepHENdCkI/AAAAAAAABgY/WggOTtVWLSo/s1600/Clothing%2Bmaterials.png",
          des: "MATERIALS USED",
          link: '/products/materials',
          size: 'square'
        },
        {
          img: "http://theswatchbook.offsetwarehouse.com/wp-content/uploads/sites/5/2016/01/DSC01351WEB.jpg",
          des: "TECHNIQUES",
          link: '/products/techniques',
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
              <li className="active">Products</li>
            </ol>
          </div>
        </div>
        <Frame pictures={this.state.pictures}/>
      </div>
    )
  }
  
}