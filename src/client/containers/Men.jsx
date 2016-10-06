import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class Men extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "http://www.ganzomag.com/wp-content/uploads/2013/07/perfect-persuasion-tshirts.jpg",
          des: "T-SHIRTS",
          link: '/products/men',
          size: 'square'
        },
        {
          img: "http://image.dhgate.com/0x0/f2/albu/g3/M01/65/E3/rBVaHFaSFc2AB4WMAACEMPKwEx8946.jpg",
          des: "TROUSERS",
          link: '/products/men',
          size: 'square'
        },
        {
          img: "https://cdnc.lystit.com/1200/630/tr/photos/9b5f-2016/02/12/perry-ellis-america-white-landscape-photo-print-long-sleeve-sweatshirt-product-1-717959060-normal.jpeg",
          des: "KNITS",
          link: '/products/men',
          size: 'rectangle'
        },
        {
          img: "http://digitalspyuk.cdnds.net/13/02/640x320/landscape_ustv-suits-patrick-j-adams-1.jpg",
          des: "SUITS",
          link: '/products/men',
          size: 'rectangle'
        },
      ],
      images: [
        {
          "T-SHIRTS": [
            "http://www.ganzomag.com/wp-content/uploads/2013/07/perfect-persuasion-tshirts.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg",
            "https://www.lamnia.com/images/sg-150-Shirts_and_T-Shirts.jpg",
            "http://market24.co/wp-content/uploads/2016/04/t473gold.jpg",      
          ],
          "TROUSERS": [
            "http://image.dhgate.com/0x0/f2/albu/g3/M01/65/E3/rBVaHFaSFc2AB4WMAACEMPKwEx8946.jpg",
            "https://media.frenchconnection.com/ms/fcuk/54EEZ.jpg?height=768&width=526&lc=en-GB&lv=9",
            "http://www.charleswall.co.uk/images/XL/GurteenTrouser1400011_202.jpg",
            "http://www.blitzsport.com/images/large/Adult-Classic-Polycotton-Full-Contact-Trousers-Black-Red.jpg",
          ],
          "KNITS": [
            "https://ae01.alicdn.com/kf/HTB1YMhGKFXXXXXEXpXXq6xXFXXXN/2015-New-font-b-Men-b-font-Casual-O-neck-Pullover-Christmas-font-b-Sweater-b.jpg",
            "http://www.ruedeshommes.com/media/produits/img/28556-superdry-h15-pull-hudson-fairisle-henley-m61lk033-ayn-pull-tricot-hudson-superdry-acrylique-et-laine-gris-anthracite-a-motifs-1_1128x1128.jpg",
            "http://i2.cdscdn.com/pdt2/7/6/4/1/700x700/mp02273764/rw/subliminal-mode-pull-over-col-rond-homme-tricot.jpg",
            "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=70430526",
          ],
          "SUITS": [
            "http://images.shopmadeinchina.com/p/437/4538437_0/Men-s-business-suits-Western-style-clothes-top_4538437_0.bak.jpg",
            "http://images.menswearhouse.com/is/image/TMW/MW40_30U4_14_PERRY_ELLIS_PORTFOLIO_BLUE_POSTMAN_MAIN?01AD=3Bz6xbUUrlWQZ9-z7yjYCMM6SrHDgkwMXoUu6FYuCnLoX916UN2-5GQ&01RI=A71D5047F5D8C7D&01NA=&$40Zoom$",
            "http://www.mexatk.com/wp-content/uploads/2015/11/%D8%A7%D8%AD%D8%AF%D8%AB-%D9%85%D9%88%D8%B6%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D9%84-%D8%A7%D9%84%D8%B1%D8%AC%D8%A7%D9%84%D9%8A-6.jpg",
            "https://cdna.lystit.com/photos/1d37-2015/03/11/calvin-klein-navy-white-label-body-slim-fit-navy-pinstripe-suit-jacket-blue-product-2-916106911-normal.jpeg",
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
              <li className="active">Men</li>
            </ol>
          </div>
        </div>
        <Frame pictures={this.state.pictures} images={this.state.images}/>
      </div>
    )
  }
  
}