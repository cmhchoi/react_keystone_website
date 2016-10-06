import React from 'react';
import Frame from '../components/Frame.jsx';

export default class Home extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "http://wollywonka.be/wp-content/uploads/2016/09/DSC_0557_slider_klein.jpg",
          des: "WHO WE ARE",
          link: '/who-we-are',
          size: 'rectangle'
        },
        {
          img: "/assets/images/product.jpg",
          des: "PRODUCTS",
          link: '/products',
          size: 'square'
        },
        {
          img: "http://s12.favim.com/610/160527/adidas-beautiful-fashion-girl-Favim.com-4351007.jpeg",
          des: "PEOPLE",
          link: '/people',
          size: 'square'
        },
        {
          img: "http://s12.favim.com/610/160527/adidas-beautiful-fashion-girl-Favim.com-4351007.jpeg",
          des: "GLOBAL COMMUNITY INITIATIVE",
          link: '/global-community-initiatives',
          size: 'square'
        },
        {
          img: "http://s12.favim.com/610/160527/adidas-beautiful-fashion-girl-Favim.com-4351007.jpeg",
          des: "WHAT'S NEW",
          link: '/whats-new',
          size: 'square'
        },
      ],
    }
  }
  
  render() {
    return(
      <div>
        <Frame pictures={this.state.pictures}/>
      </div>
    )
  }
  
}