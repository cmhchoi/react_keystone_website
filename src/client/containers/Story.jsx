import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';

export default class Story extends React.Component {

  render() {
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    const employees = this.props.state.employees;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(employees) {
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
              {employees.map(employee => {
                if(!employee.name[lang]) { employee.name[lang] = employee.name.english };
                if(!employee.description[lang]) { employee.description[lang] = employee.description.english };
                if(!employee.department[lang]) { employee.department[lang] = employee.department.english };
                return( 
                  <li className="picture-link employee col-xs-12 col-sm-6 col-md-4">
                    <div className="text">
                      <p className="picture-des">{employee.description[lang]}</p>
                    </div>
                    <div className="picture-container">
                      <img className="picture" src={employee.thumbnail}/>
                    </div>
                    <h4>{employee.name[lang]}</h4>
                    <h5>{employee.department[lang]}</h5>
                    
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