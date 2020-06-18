import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const Style = {
    color: 'black',
    padding: '20px'
}

class Register extends Component {
    render() {
      return (
        <div> 

        <section id='about' class='section'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-4 col-sm-12 wow fadeInLeft'>
                <div class='sub-heading'>
                  <h2>Registration</h2>
                </div>
                <div class='block'>
                  <p>
                    Thank you for your Registration. We will send you email when the 
                    game is up and ready to play.
                  </p>
                  <p>Ready to play Money Pool</p>
                </div>
              </div>
              <div
                class='col-md-8 col-sm-12 wow fadeInLeft'
                data-wow-delay='0.3s'
              >
                <img
                  src='https://zeemz-imgs.web.app/imgs/zpp-map-icons.png'
                  alt='scroll'
                  height='100%'
                  width='100%'
                />
              </div>
            </div>
          </div>
        </section>
        
        </div>

      );
      }

}


export default withRouter(Register);
