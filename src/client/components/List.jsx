import React from 'react';
import { Link } from 'react-router';

export default class List extends React.Component {

  render() {
    const items = this.props.items;
    const lang = this.props.language;
    return(
      <div className="frame row">
        <ul className="mobile-padding-right-20">
          {items.map(item => {
            return <li className='list-list'>
              <div className="list-image col-xs-12 col-sm-6">
                <img className="list-picture" src={item.thumbnail}/>
              </div>
              <div className="list-text col-xs-12 col-sm-6">
                <h4 className="list-title">{item.title[lang]}</h4>
                <p className="list-des">{item.description[lang]}</p>
              </div>
            </li>
          })}
        </ul>
      </div>
    )
  }
}





