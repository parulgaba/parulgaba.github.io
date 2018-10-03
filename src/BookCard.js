import React, { Component } from 'react';

import './index.css';

class BookCard extends Component {

  constructor(){
    super();
    this.state = {
      isCollapsed: true,
    };
  }

  handleOnClick = () => {
    const { isCollapsed } = this.state;
    this.setState({isCollapsed: !isCollapsed});
  }

  render() {
    const { book } = this.props;
    const { isCollapsed } = this.state;

    return(
      <div className="row">
        <div className="col s12 m7 card-panel grey lighten-1 btn" onClick = {this.handleOnClick}>
          {book.title}
        </div>
        {
          !isCollapsed ?
            <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <img src={book.image_url} alt="book" />
                  </div>
                  <div className="card-content">
                    <p>
                      {book.description.replace(/<(?:.|\n)*?>/gm, '')}
                    </p>
                  </div>
                </div>
            </div>
          :
            null
      }
    </div>);
  }
}

export default BookCard;
