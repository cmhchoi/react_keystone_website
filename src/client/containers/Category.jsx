import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class Home extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "http://images.contentful.com/x3a5wchdg6mu/17oZuNZe9MWeKeww02CGGy/74d0f98d64a52b6737c888e13f2c6c25/GANT_Recreation_Nature_5_greybg_16x9.jpg?q=75&fl=progressive&w=1536&h=768&fit=thumb&f=left",
          des: "MEN",
          link: '/products/category/men',
          size: 'rectangle'
        },
        {
          img: "http://www.toadandco.com/images/product/610/T1241603-669-16.jpg",
          des: "WOMEN",
          link: '/products/category/women',
          size: 'square'
        },
        {
          img: "https://s-media-cache-ak0.pinimg.com/736x/62/ec/92/62ec926e8a63ae7a60a68a97d70540a0.jpg",
          des: "CHILDREN",
          link: '/products/category/children',
          size: 'square'
        },
      ],
    }
  }
  
  render() {
    console.log(this.props)
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li><Link className="grey underline" to={{pathname: "/products"}}>Products</Link></li>
              <li className="active">Category</li>
            </ol>
          </div>
        </div>
        <Frame pictures={this.state.pictures}/>
      </div>
    )
  }
  
}