/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';

class Landing extends Component {
  render() {
    return (
      <div>
        <div class='navbar-default navbar-fixed-top' id='navigation'>
          <div class='container'>
            <div class='navbar-header'>
              <a class='navbar-brand' href='#'>
                <Icon
                  style={{ verticalAlign: 'middle' }}
                  name='hospital outline'
                  size='large'
                ></Icon>
                &nbsp;&nbsp;&nbsp;
                <Header
                  style={{ display: 'inline', verticalAlign: 'middle' }}
                  as='h2'
                >
                  Zeemz
                </Header>
                {/* <img class='logo-2' src='images/logo-2.png' alt='LOGO' /> */}
              </a>
            </div>

            <nav class='collapse navbar-collapse' id='navbar'>
              <ul class='nav navbar-nav navbar-right' id='top-nav'>
                <li class='current'>
                  <a href='#body'>Home</a>
                </li>
                <li>
                  <a href='#about'>About us</a>
                </li>
                <li>
                  <a href='#service'>Services</a>
                </li>
                <li>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <section id='hero-area'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-6'>
                <div class='block'>
                  <h1 class='wow fadeInDown'>
                    Zeemz: Pandemic Patch needs you!
                  </h1>
                  <p class='wow fadeInDown' data-wow-delay='0.3s'>
                    Zeemz is participating in the fight against Coronavirus.
                    We're working with talented people from around the world to
                    develop Pandemic Patch, an augmented reality, blockchain
                    game that doubles as a diagnostic tool to reduce hospital
                    congestion.
                  </p>
                  <div
                    class='wow fadeInDown'
                    data-wow-delay='0.3s'
                    onClick={() => this.props.history.push('/signUp')}
                  >
                    <button class='btn btn-default btn-home'>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div class='col-md-6 wow zoomIn'>
                <div class='block'>
                  <img
                    class='zeemz-logo'
                    src='https://zeemz-imgs.web.app/imgs/zeemz.png'
                    alt='LOGO'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='about' class='section'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-7 col-sm-12 wow fadeInLeft'>
                <div class='sub-heading'>
                  <h3>Join the Zeemz Army & fight Coronavirus.</h3>
                </div>
                <div class='block'>
                  <p>
                    Personal privacy and data ownership are at the heart of our
                    design. Pandemic Patch will not send your data without
                    permission. If you grant permission, we'll only send your
                    anonymized data to the central database run by the crew
                    behind <a href='https://www.askco19.com/'>askco19.com</a>,
                    they're a group of doctors inputting real time data from
                    their front line experiences with CoVID-19. They're asking
                    for help collecting data to stop the spread.
                  </p>
                  <p>Zeemz: Pandemic Patch is our answer to their call.</p>
                </div>
              </div>
              <div
                class='col-md-5 col-sm-12 wow fadeInLeft'
                data-wow-delay='0.3s'
              >
                <img
                  src='https://zeemz-imgs.web.app/imgs/scroll%20banner.jpg'
                  alt='scroll'
                  height='100%'
                  width='100%'
                />
              </div>
            </div>
          </div>
        </section>

        <section id='service' class='section'>
          <div class='container'>
            <div class='row'>
              <div class='heading wow fadeInUp'>
                <h2>Donations</h2>
                <p></p>
              </div>
              <div class='col-sm-6 col-md-3 wow fadeInLeft'>
                <div class='service'>
                  <div class='icon-box'>
                    <img
                      src='https://lh4.googleusercontent.com/NYpUxJNplOuoinI3M5mnqmzUHENGtAHvQY7WhAwF8BRhU-swOjNP4Mp2cxX5LVwLjAqA-RApu3-9wo45Jf75MhpomAXZO_XpPMycI4zQ9GvFQDYA3d0=w1280'
                      alt='fiat'
                      width='100%'
                      height='100%'
                    />
                  </div>
                  <div class='caption'>
                    <a href='https://www.zeemz.xyz/donate-fiat'>
                      <u>
                        <h3>Fiat</h3>
                      </u>
                    </a>
                    <p>USD, EUR, more...</p>
                  </div>
                </div>
              </div>
              <div
                class='col-sm-6 col-md-3 wow fadeInLeft'
                data-wow-delay='0.3s'
              >
                <div class='service'>
                  <div class='icon-box'>
                    <img
                      src='https://lh6.googleusercontent.com/auvAl5Gefo9jXcnBCGKETEgmkodBF_APNWivFbu8pjxaZ_2MTSfhWdLF6taDepmIQYDhDfCl3Ysz9EkeCzcprH-nFtEcLYfZP7ol1brvA61XhmjnKg=w1280'
                      alt='fiat'
                      width='100%'
                      height='100%'
                    />
                  </div>
                  <div class='caption'>
                    <a href='https://www.zeemz.xyz/donate-crypto'>
                      <u>
                        <h3>Crypto</h3>
                      </u>
                    </a>
                    <p>BTC, ETH, more...</p>
                  </div>
                </div>
              </div>
              <div
                class='col-sm-6 col-md-3 wow fadeInLeft'
                data-wow-delay='0.6s'
              >
                <div class='service'>
                  <div class='icon-box'>
                    <img
                      src='https://lh5.googleusercontent.com/h7DS7wwnWoYT8xN5pwc8BF8YdB5gjvDK_czLxRN539tAAqrI1imSeq48FMJ94F4xiAjFKMQllnV-MtkNAVswtzJxRNuXa5zQ_Uq95tMgaFL6011_BQ=w1280'
                      alt='fiat'
                      width='100%'
                      height='100%'
                    />
                  </div>
                  <div class='caption'>
                    <a href='https://www.zeemz.xyz/donate-skills'>
                      <u>
                        <h3>Desgin / Coding</h3>
                      </u>
                    </a>
                    <p>Have some great ideas? We love to hear about them!</p>
                  </div>
                </div>
              </div>
              <div
                class='col-sm-6 col-md-3 wow fadeInLeft'
                data-wow-delay='0.9s'
              >
                <div class='service'>
                  <div class='icon-box'>
                    <img
                      src='https://lh4.googleusercontent.com/Pl7wXHxtgQn6GT0lvQYDJkG-09nFysK7yINW2wWbfzv95lZJlWeVV28d22CAOdR6o6h1g_cxjd3b7y6YyTJ2ps1j0kXsET1PYZaZqqT22-i3QEf26Ew=w1280'
                      alt='fiat'
                      width='100%'
                      height='100%'
                    />
                  </div>
                  <div class='caption'>
                    <a href='https://www.zeemz.xyz/donate-social-media'>
                      <u>
                        <h3>Social Media</h3>
                      </u>
                    </a>
                    <p>Want to help out and earn extra coins?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='call-to-action' class='section'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12 wow text-center'>
                <div class='block'>
                  <h2>
                    Sign up for alpha testing! and be one of the first to play,
                    create, and collect Zeemz
                  </h2>
                  <p>
                    We´ll send you an email when the game is up and ready to
                    play. <br /> Our pre-alpha testers will have access to VIP
                    forums, early release equipment and upgrades, and
                    development team emails that will keep you up-to-date on the
                    latest additions!
                  </p>
                  <div class='form-group'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Enter Your Email Address'
                    />
                    <button class='btn btn-default btn-submit' type='submit'>
                      Get Notified
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section id='contact' class='section'>
          <div class='container'>
            <div class='row'>
              <div class='col-xs-12 col-sm-12 col-md-5 wow fadeInUp'>
                <div class='block text-left'>
                  <div class='sub-heading'>
                    <h4>Useful Links</h4>
                  </div>
                  <address class='address'>
                    <hr />
                    <p>
                      <b>
                        <u>
                          <a href='https://github.com/pushingbhutons/zeemz-ann'>
                            Github [ANN]
                          </a>
                          <br />
                          <a href='https://www.pushingbhutons.com/'>
                            Pu'Shing Bhu'Tons
                          </a>
                          <br />
                          <a href='https://www.zazzle.com/store/pushing_bhutons'>
                            Pu'Shing Bhu'Tons Gear
                          </a>
                        </u>
                      </b>
                    </p>
                    <hr />
                    <p>
                      ETH Donations:{' '}
                      <a href='https://etherscan.io/address/0x54dd3364be1816a7717d60ac6ef3a0e1b06bf167'>
                        0x54dd3364BE1816A7717D60ac6EF3a0E1B06Bf167
                      </a>
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section clas='wow fadeInUp'>
          <div class='map-wrapper'></div>
        </section>

        <footer>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <div class='block'>
                  <p>
                    <b>Copyright © 2020 ZEEMZ v. 0.2.0-preAlpha</b>
                    <br />
                    is part of the
                    <br />
                    <b>Copyright © 2020 Pu´Shing Bhu´Tons Universe</b>
                    <br />
                    created by
                    <br />
                    Monique Finley and Jennifer Landry. All Rights Reserved.
                    Website developed by{' '}
                    <a href='https://www.pir8aye.net/'>Pir8eye</a>. Last update:
                    Feb 2020.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(Landing);
