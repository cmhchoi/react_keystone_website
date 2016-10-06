import React from 'react';
import { Link } from 'react-router';

export default class Directory extends React.Component {

  render() {
    const items = this.props.items;
    return(
      <div className="frame row">
        <ul>
          {items.map(() => {
            return(
              <li className="col-xs-12 col-sm-12 col-lg-6">
                <div className="directory-picture">
                  <Link to={{ pathname: item.link }}>
                    <div className="text">
                      <p className="picture-des">{item.des}</p>
                    </div>
                    <div className="picture-container rectangle large-no-rectangle">
                      <img className="picture" src={item.img}/>
                    </div>
                  </Link>
                </div>
                <div className="directory-text">
                  <p>{item.title}</p>
                  <p>{item.pointOne}</p>
                  <p>{item.pointTwo}</p>
                  <p>{item.pointThree}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}






