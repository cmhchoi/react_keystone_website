import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class Women extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "https://cdn.shopify.com/s/files/1/1099/5666/collections/Banner-tshirt-woman.jpg?v=1462258578",
          des: "T-SHIRTS",
          link: '/products/women',
          size: 'rectangle'
        },
        {
          img: "http://www.nelsonwade.com/wp-content/uploads/2014/06/nelsonwade_custom_tailored_women_pants_trousers_med_gray_plain_front.jpg",
          des: "TROUSERS",
          link: '/products/women',
          size: 'square'
        },
        {
          img: "http://prima.cdnds.net/assets/16/25/480x240/landscape-1466785735-knitted-lace-top.jpg",
          des: "KNITS",
          link: '/products/women',
          size: 'rectangle'
        },
        {
          img: "http://i01.i.aliimg.com/wsphoto/v0/2030038917_1/-font-b-military-b-font-font-b-jacket-b-font-font-b-women-b-font.jpg",
          des: "JACKETS",
          link: '/products/women',
          size: 'square'
        },
      ],
      images: [
        {
          "T-SHIRTS": [
            "http://www.escapewear.cz/277-822-thickbox/womens-t-shirt-landscape-white.jpg",
            "http://g01.a.alicdn.com/kf/HTB1IYWsLFXXXXcRXVXXq6xXFXXXe/Sexy-Girl-T-shirts-Girl-Fashion-printed-round-neck-Cheap-Women-T-Shirts-Top-Quality-Slim.jpg",
            "http://ecx.images-amazon.com/images/I/51dz%2B59wn9L._SX342_.jpg",
            "http://johnlewis.scene7.com/is/image/JohnLewis/002257472?$prod_main$",      
          ],
          "TROUSERS": [
            "https://www.uniqlo.com/uniqloandlemaire/16SS-common/images/itemlineup/women/172462_65_m.jpg",
            "https://www.uniqlo.com/UniqloU/common/images/items/item_186049_09.jpg",
            "https://www.uniqlo.com/uniqloandlemaire/16SS-common/images/lookbook/169060_58_m.jpg",
            "http://im.uniqlo.com/images/common/pc/goods/163969/item/60_163969.jpg",
          ],
          "KNITS": [
            "http://prima.cdnds.net/assets/16/25/480x240/landscape-1466785735-knitted-lace-top.jpg",
            "http://thebestfashionblog.com/wp-content/uploads/2014/10/Womens-Knit-Sweaters-2015-2.jpg",
            "https://cdn-img-3.wanelo.com/p/7df/893/953/b549c4e454fd49c80eb723f/x354-q80.jpg",
            "https://s-media-cache-ak0.pinimg.com/236x/cf/c3/bd/cfc3bd9dfee9da247ef73d56eff4ce94.jpg",
          ],
          "JACKETS": [
            "http://i01.i.aliimg.com/wsphoto/v0/2030038917_1/-font-b-military-b-font-font-b-jacket-b-font-font-b-women-b-font.jpg",
            "http://atmintlstyle.com/sites/default/files/Latest-Women-Quilted-Jacket.jpg",
            "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=90695777",
            "http://atmintlstyle.com/sites/default/files/SuedeStuddedWaterfallJacket.jpg",
          ],
        }
      ]
    }
  }
  
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li><Link className="grey underline" to={{pathname: "/products"}}>Products</Link></li>
              <li><Link className="grey underline" to={{pathname: "/products/category"}}>Category</Link></li>
              <li className="active">Women</li>
            </ol>
          </div>
        </div>
        <Frame pictures={this.state.pictures} images={this.state.images}/>
      </div>
    )
  }
  
}