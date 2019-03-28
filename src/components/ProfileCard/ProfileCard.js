import React, { useContext } from "react";
import img from "../../images/profile/scotty.jpg";
import "./ProfileCard.css";
import ConfigContext from "../../config";

function Title(props) {
  return (
    <div className="info-headings">
      <h4 className="text-uppercase left">{props.name}</h4>
      <h6 className="text-capitalize left">{props.title}</h6>
    </div>
  );
}

function Info(props) {
  return (
    <div className="infos">
      <ul className="profile-list">
        <li className="clearfix">
          <span className="title">
            <i className="material-icons">email</i>
          </span>
          <span className="content">{props.email}</span>
        </li>
        <li className="clearfix">
          <span className="title">
            <i className="material-icons">language</i>
          </span>
          <span className="content">{props.language}</span>
        </li>
        <li className="clearfix">
          <span className="title">
            <i className="fa fa-skype" aria-hidden="true" />
          </span>
          <span className="content">{props.skype}</span>
        </li>
        <li className="clearfix">
          <span className="title">
            <i className="material-icons">phone</i>
          </span>
          <span className="content">{props.phone}</span>
        </li>
        <li className="clearfix">
          <span className="title">
            <i className="material-icons">place</i>
          </span>
          <span className="content">{props.place}</span>
        </li>
      </ul>
    </div>
  );
}

function Links(props) {
  return (
    <div className="links">
      <a
        href={props.facebook}
        id="first_one"
        className="social btn-floating indigo"
      >
        <i className="fa fa-facebook" />
      </a>
      <a href={props.twitter} className="social btn-floating blue">
        <i className="fa fa-twitter" />
      </a>
      <a href={props.linkedin} className="social  btn-floating blue darken-3">
        <i className="fa fa-linkedin" />
      </a>
      <a href={props.instagram} className="social btn-floating orange darken-3">
        <i className="fa fa-instagram" />
      </a>
      <a href={props.wordpress} className="social btn-floating red darken-3">
        <i className="fa fa-wordpress" />
      </a>
    </div>
  );
}

const Banner = () => {
  const {
    profile: {
      name,
      title,
      email,
      website,
      username,
      phone,
      place,
      links: { facebook, twitter, linkedin, instagram, wordpress }
    }
  } = useContext(ConfigContext);

  return (
    <div id="profile-card-container" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div id="profile-card" className="card">
              <div id="profile" className="right">
                <img alt="my-profile" className="img-responsive" src={img} />
              </div>

              <div className="card-content">
                <Title name={name} title={title} />

                <Info
                  email={email}
                  language={website}
                  skype={username}
                  phone={phone}
                  place={place}
                />

                <Links
                  facebook={facebook}
                  twitter={twitter}
                  linkedin={linkedin}
                  instagram={instagram}
                  wordpress={wordpress}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
