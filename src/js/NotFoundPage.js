
import React, { Component } from 'react';

import '../css/page-404.css';

class NotFoundPage extends Component {
  render() {
    return (
      <div id="not-found-page" className="container">
        <div className="row col-sm-12">
          <div className="col-sm-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>Nada por aqui, amigo!</h2>
              
              &nbsp;

              <div className="error-actions">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => window.location = '/'}>
                  <i className="fa fa-home"></i>

                  &nbsp;

                  Ir para a página inicial!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default NotFoundPage;
