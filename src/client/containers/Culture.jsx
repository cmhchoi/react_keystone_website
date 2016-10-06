import React from 'react';
import { Link } from 'react-router';
import List from '../components/List.jsx';
import $ from "jquery";

export default class Culture extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     items: [
  //       {
  //         img: "http://images.contentful.com/fa2v6i6dvqhy/320cJyvj7WWIieOy0AcwuI/bdeb31002f41c13f0948c6f74d4dc2c7/pizzeria-vetri-image.jpg",
  //         title: "Fostering Creativity",
  //         des: 'Creativity is in the fabric of all we do. It’s tangible in our store windows, our clothes and our incredible employee talent. It’s obvious when you realize no two store windows are the same and we wouldn’t want it any other way. At URBN, we welcome all ideas no matter how big or small. Check out the photos below to see our creativity at work.'
  //       },
  //       {
  //         img: "http://images.contentful.com/fa2v6i6dvqhy/320cJyvj7WWIieOy0AcwuI/bdeb31002f41c13f0948c6f74d4dc2c7/pizzeria-vetri-image.jpg",
  //         title: "Fostering Creativity",
  //         des: 'Creativity is in the fabric of all we do. It’s tangible in our store windows, our clothes and our incredible employee talent. It’s obvious when you realize no two store windows are the same and we wouldn’t want it any other way. At URBN, we welcome all ideas no matter how big or small. Check out the photos below to see our creativity at work.'
  //       },
  //       {
  //         img: "http://images.contentful.com/fa2v6i6dvqhy/320cJyvj7WWIieOy0AcwuI/bdeb31002f41c13f0948c6f74d4dc2c7/pizzeria-vetri-image.jpg",
  //         title: "Fostering Creativity",
  //         des: 'Creativity is in the fabric of all we do. It’s tangible in our store windows, our clothes and our incredible employee talent. It’s obvious when you realize no two store windows are the same and we wouldn’t want it any other way. At URBN, we welcome all ideas no matter how big or small. Check out the photos below to see our creativity at work.'
  //       }
  //     ]
  //   }
  // }

  render() {
    const cultures = this.props.state.cultures;
    const language = this.props.params.language;
    const labels = this.props.state.labels;
    let lang, langLink = '';
    lang = language === 'zh-t' ? 'chinese_traditional' : language === 'zh-s' ? 'chinese_simplified' : 'english';
    langLink = (language === 'zh-t' || language === 'zh-s') ? `/${language}` : '';
    if(cultures){
      return(
        <div>
          <div className="row">
            <div className="col-xs-12">
              <ol className="breadcrumb">
                <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
                <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>{labels.who_we_are[lang]}</Link></li>
                <li className="active">{labels.culture_core_values[lang]}</li>
              </ol>
            </div>
          </div>
          <List items={cultures} language={lang}/>
        </div>
      )
    } else {
      $.get('/api/cultures', cultures => {
        this.props.updateAppState({ cultures });
      })
      return(
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: `${langLink}/`}}>{labels.home[lang]}</Link></li>
              <li><Link className="grey underline" to={{pathname: `${langLink}/who-we-are`}}>{labels.who_we_are[lang]}</Link></li>
              <li className="active">{labels.culture_core_values[lang]}</li>
            </ol>
          </div>
        </div>
      )
    }
  }
  
}