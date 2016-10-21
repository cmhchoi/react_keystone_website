import React from 'react';
import { Link } from 'react-router';
import Lightbox from 'react-image-lightbox';

export default class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isOpen: false,
    }
  }

  // determine whether to render Frame as link to the next page or to modal lightbox
  // images is an array in the form of: [{type1: [], type2: []}]
  linkToModal(picture, language, extraClass) {
    // when triggered, this opens the modal lightbox and determines which selection of images to choose from
    const openLightbox = (picture) => {
      const images = picture.gallery.split(',');
      this.setState({ 
        isOpen: true,
        images,
      });
    }

    const closeLightbox = () => {
      this.setState({ isOpen: false });
    }
    
    const moveNext = () => {
      this.setState({ index: (this.state.index + 1) % this.state.images.length });
    }
    
    const movePrev = () => {
      this.setState({ index: (this.state.index + this.state.images.length - 1) % this.state.images.length });
    }

    let lightbox = '';
    if(this.state.isOpen) {
      lightbox = (
        <div>
          <Lightbox
          mainSrc={this.state.images[this.state.index]}
          nextSrc={this.state.images[(this.state.index + 1) % this.state.images.length]}
          prevSrc={this.state.images[(this.state.index + this.state.images.length - 1) % this.state.images.length]}

          onCloseRequest={closeLightbox}
          onMovePrevRequest={movePrev}
          onMoveNextRequest={moveNext}
          />
        </div>
      );
    }

    let pictureContainer = "picture-container ";
    extraClass ? pictureContainer += extraClass : pictureContainer;

    if(picture.gallery) {
      // picture is passed down to openLightbox so that it can pick the correct selection based on picture.text[this.props.language]
      return(
        <a href="#" onClick={() => openLightbox(picture)}>
          <div className="text">
            <p className="picture-des">{picture.text[this.props.language]}</p>
          </div>
          <div className={pictureContainer}>
            <img className="picture" src={picture.image}/>
          </div>
          {lightbox}
        </a>
      )
    } else {
      let pictureLink = picture.link;
      if(this.props.language === 'chinese_traditional') {
        pictureLink = `/zh-t${picture.link}`;
      } else if (this.props.language === 'chinese_simplified') {
        pictureLink = `/zh-s${picture.link}`;
      }
      return(
        <Link to={{ pathname: pictureLink }}>
          <div className="text">
            <p className="picture-des">{picture.text[this.props.language]}</p>
          </div>
          <div className={pictureContainer}>
            <img className="picture" src={picture.image}/>
          </div>
        </Link>
      )
    }
  }

  // basic frame of mobile-12 small-6 large-4 (except when there are two pictures only, in which case large-6)
  // special means two pictures only
  normalFrame(pictures, special) {
    let listClass = "col-xs-12 col-sm-6 picture-link";
    special === "special" ? listClass += " col-lg-6" : listClass += " col-lg-4"
    return pictures.map(picture => {
      return( 
        <div>
          <li className={listClass}>
            {this.linkToModal(picture)}
          </li>
        </div>
      )
    })
  }

  medOneRow(rectangles) {
    return (
      <div>
        <li className="col-xs-12 col-sm-12 col-lg-4 picture-link">
          {this.linkToModal(rectangles[0], this.props.language, "rectangle large-no-rectangle")}
        </li>
      </div>
    )
  }
  
  largeOneRow(rectangles, squares) {
    return (
      <div>
        <li className="col-xs-12 col-sm-6 col-lg-8 picture-link">
          {this.linkToModal(rectangles[0], this.props.language, "rectangle mid-no-rectangle")}
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          {this.linkToModal(squares[0], this.props.language,)}
        </li>
      </div>
    )
  }

  largeTwoRows(rectangles, squares) {
    return (
      <div>
        <li className="col-xs-12 col-sm-6 col-lg-8 picture-link">
          {this.linkToModal(rectangles[0], this.props.language, "rectangle mid-no-rectangle")}
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          {this.linkToModal(squares[0], this.props.language)}
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          {this.linkToModal(squares[1], this.props.language)}
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-8 picture-link">
          {this.linkToModal(rectangles[1], this.props.language, "rectangle mid-no-rectangle")}
        </li>
      </div>
    )
  }

  largeTwoRowsMedOneRow(rectangles, squares) {
    return (
      <div>
        <li className="col-xs-12 col-sm-12 col-lg-8 picture-link">
          {this.linkToModal(rectangles[0], this.props.language, "rectangle")}
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          {this.linkToModal(squares[0], this.props.language)}
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          {this.linkToModal(squares[1], this.props.language)}
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-8 picture-link">
          {this.linkToModal(rectangles[1], this.props.language, "rectangle")}
        </li>
      </div>
    )
  }

  largeOneRowMedOneRow(rectangles, squares) {
    return (
      <div>
        <li className="col-xs-12 col-sm-12 col-lg-8 picture-link">
          {this.linkToModal(rectangles[0], this.props.language, "rectangle")}
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          {this.linkToModal(squares[0], this.props.language)}
        </li>
      </div>
    )
  }

  render() {
    const pictures = this.props.pictures;

    // example 4, 7, 10 pictures
    if(pictures.length % 3 === 1 && pictures.length !== 1) {

      const topRects = [];
      const topSquares = [];
      const normals = [];

      pictures.forEach((picture) => {
        if(picture.shape === 'rectangle' && topRects.length < 2) {
          topRects.push(picture);
        } else if(picture.shape === 'square' && topSquares.length < 2) {
          topSquares.push(picture);
        } else {
          normals.push(picture);
        }
      })
      
      // example 7, 13 pictures
      if(pictures.length % 2 === 1) {
        return(
          <div className="frame row">
            <ul>
              {this.largeTwoRowsMedOneRow(topRects, topSquares)}
              {this.normalFrame(normals)}
            </ul>
          </div>
        )
      // example 4, 10 pictures
      } else {
        return(
          <div className="frame row">
            <ul>
              {this.largeTwoRows(topRects, topSquares)}
              {this.normalFrame(normals)}
            </ul>
          </div>
        )
      }

    // example 5, 8, 11 pictures
    } else if(pictures.length % 3 === 2 && pictures.length !== 2) {

      const topRects = [];
      const topSquares = [];
      const normals = [];

      pictures.forEach((picture) => {
        if(picture.shape === 'rectangle' && topRects.length < 1) {
          topRects.push(picture);
        } else if(picture.shape === 'square' && topSquares.length < 1) {
          topSquares.push(picture);
        } else {
          normals.push(picture);
        }
      })

      // example 5, 11 pictures
      if(pictures.length % 2 === 1) {
        return(
          <div className="frame row">
            <ul>
              {this.largeOneRowMedOneRow(topRects, topSquares)}
              {this.normalFrame(normals)}
            </ul>
          </div>
        )
      // example 8, 14 pictures
      } else {
        return(
          <div className="frame row">
            <ul>
              {this.largeOneRow(topRects, topSquares)}
              {this.normalFrame(normals)}
            </ul>
          </div>
        )
      }

    // 3 pictures
    } else if(pictures.length % 2 === 1) {

      const topRects = [];
      const normals = [];

      pictures.forEach((picture) => {
        if(picture.shape === 'rectangle' && topRects.length < 2) {
          topRects.push(picture);
        } else {
          normals.push(picture);
        }
      })

      return(
        <div className="frame row">
          <ul>
            {this.medOneRow(topRects)}
            {this.normalFrame(normals)}
          </ul>
        </div>
      )

    // example 2, 6 pictures
    } else {

      return(
        <div className="frame row">
          <ul>
            {pictures.length === 2 ? this.normalFrame(pictures, "special") : this.normalFrame(pictures)}
          </ul>
        </div>
      )

    }
  }
}
