import React from 'react';
import { Link } from 'react-router';
import List from '../components/List.jsx'

export default class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          img: "https://journalcinelyon1.files.wordpress.com/2015/06/mermet.jpg",
          title: "The First Store & Mission",
          des: 'The year was 1970. Dick Hayne was just 23 years old when he and college roommate Scott Belair came up with the idea to open a retail store. Belair was in search of a topic for an entrepreneurial class he was taking at the time. The first store, originally called Free People, was located in a small space across the street from the University of Pennsylvania. Its mission was to provide second-hand clothing, furniture, jewelry and home décor for college-aged customers in a casual fun environment.'
        },
        {
          img: "https://journalcinelyon1.files.wordpress.com/2015/06/mermet.jpg",
          title: "The First Store & Mission",
          des: 'The year was 1970. Dick Hayne was just 23 years old when he and college roommate Scott Belair came up with the idea to open a retail store. Belair was in search of a topic for an entrepreneurial class he was taking at the time. The first store, originally called Free People, was located in a small space across the street from the University of Pennsylvania. Its mission was to provide second-hand clothing, furniture, jewelry and home décor for college-aged customers in a casual fun environment.'
        },
        {
          img: "https://journalcinelyon1.files.wordpress.com/2015/06/mermet.jpg",
          title: "The First Store & Mission",
          des: 'The year was 1970. Dick Hayne was just 23 years old when he and college roommate Scott Belair came up with the idea to open a retail store. Belair was in search of a topic for an entrepreneurial class he was taking at the time. The first store, originally called Free People, was located in a small space across the street from the University of Pennsylvania. Its mission was to provide second-hand clothing, furniture, jewelry and home décor for college-aged customers in a casual fun environment.'
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
              <li><Link className="grey underline" to={{pathname: "/who-we-are"}}>Who We Are</Link></li>
              <li className="active">History</li>
            </ol>
          </div>
        </div>
        <List items={this.state.items}/>
      </div>
    )
  }
  
}