import React from 'react';
import { Link } from 'react-router';

export default class Bulletin extends React.Component {

  banner(boolean, url) {
    if(boolean) {
    console.log('p', url)
      return(
        <div className="col-xs-12 banner">
          <img src={url}/>
        </div>
      )
    }
  }

  title(text) {
    if(text) {
      return(
        <div className="bulletin-title col-xs-12">
          <p>{text}</p>
        </div>
      )
    }
  }
 
  render() {
  	const items = this.props.items;
    const lang = this.props.language;
    const bannerDecision = this.props.banner;
    const bannerImage = this.props.image;
    const titleText = this.props.title;
    return(
      <div className="frame row">
        {this.banner(bannerDecision, bannerImage)}
        {this.title(titleText)}
        <ul>
          {items.map(item => {
            if(!item.text[lang]) { item.text[lang] = item.text.english };
            if(item.link) {
              return(
                <li className="bulletin-list col-xs-12 col-sm-6 col-lg-4">
                  <p><a target="_blank" href={item.link}>{item.text[lang]}</a></p>
                </li>
              )
            } else {
              return(
                <li className="bulletin-list col-xs-12 col-sm-6 col-lg-4">
                  <p>{item.text[lang]}</p>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}
