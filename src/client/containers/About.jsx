import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';
import $ from "jquery";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "https://static.cotecine.fr/tb/Photos/1240x610/crop/MON+ROI+PHOTO3.JPG",
          des: "HISTORY",
          link: '/who-we-are/history',
          size: 'rectangle'
        },
        {
          img: "https://static.cotecine.fr/tb/Photos/1240x610/crop/MON+ROI+PHOTO3.JPG",
          des: "CULTURE & CORE VALUES",
          link: '/who-we-are/culture-core-values',
          size: 'rectangle'
        },
        {
          img: "http://www.kbslp.com/images/kbs_image_feed_image5.jpg",
          des: "EXECUTIVE OFFICERS",
          link: '/who-we-are/executive-officers',
          size: 'square'
        },
        {
          img: "http://www.kbslp.com/images/kbs_image_feed_image5.jpg",
          des: "OUR PARTNERS",
          link: '/who-we-are/our-partners',
          size: 'square'
        },
      ],
    }
  }

  componentWillMount() {
    if(!this.props.state.users) {
      $.get('/api/users', users => {
        this.props.updateAppState({users: users});
      })
    }
  }

  render() {
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb grey underline">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li className="active">{labels.who_we_are[lang]}</li>
            </ol>
          </div>
          <div className="col-xs-12 text-body">
          	<h3>{labels.overview[lang]}</h3>
          	<p>Established in 2001, First Glory Group is a well experienced textiles trading and
            garment manufacturing company with offices and manufacturing facilities located in
            Hong Kong, Mainland China and in the Philippines. First Glory has been a pioneer
            garment manufacturer; providing the best quality garments that entails the most
            comfortable, durable and fashionable attributes that go beyond the needs of our
            customers.<br/><br/>
            With over 2000 direct employees, each and every one of us are very keen in offering
            the best service and product to our customers around the world. We also believe that
            staff training and development is key within First Glory group, hence we work closely
            with customers to understand the demands of the marketplace.</p>
          </div>
        </div>
        <Frame pictures={this.state.pictures}/>
      </div>
    )
  }
  
}