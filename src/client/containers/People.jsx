import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          thumbnail: "http://kaki.sini.com.my/en/wp-content/uploads/2016/08/happy1.jpg",
          description: "OUR FACTORIES",
          name: 'Mason Chan',
          department: 'Sales',
        },
        {
          thumbnail: "http://cdn.elezea.com/images/1_group-work.jpg",
          description: "OUR PEOPLE",
          name: 'Mason Chan',
          department: 'Sales',
        },
        {
          thumbnail: "http://cdn.elezea.com/images/1_group-work.jpg",
          description: "WORK WITH US",
          name: 'Mason Chan',
          department: 'Sales',
        },
      ],
    }
  }

  render() {
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    const people = this.props.state.people;
    console.log(people);
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
          
          <div className="frame row">
            <ul>
              {people.map(person => {
                console.log('HIHIHI')
                if(!person.name[lang]) { person.name[lang] = person.name.english };
                if(!person.description[lang]) { person.description[lang] = person.description.english };
                if(!person.department[lang]) { person.department[lang] = person.department.english };
                return( 
                  <li className="picture-link person col-xs-12 col-sm-6">
                    <div className="text">
                      <p className="picture-des">{person.description[lang]}</p>
                    </div>
                    <div className="picture-container rectangle mid-no-rectangle">
                      <img className="picture" src={person.thumbnail}/>
                    </div>
                    <h4>{person.name[lang]}</h4>
                    <h5 className="person-detail">{person.department[lang]}</h5>
                  </li>
                )
              })}
            </ul>
          </div>

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