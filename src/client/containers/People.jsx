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
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    const people = this.props.state.people;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(people) {
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li className="active">{labels.people[lang]}</li>
              </ol>
            </div>
          </div>
          <Frame pictures={ people } language={ lang }/>
        </div>
      )
    } else {
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li className="active">{labels.people[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}