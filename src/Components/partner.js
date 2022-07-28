import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsArrowBarDown
} from "react-icons/bs";
import { Link } from "react-scroll";

function Partner(props) {


  return (
    <div className="partner" id={props.id}>
      <div className="team-img-holder">
        <picture>
          <img src={props.img} alt="" />
        </picture>
      </div>
      <div className="title">
        <h2>{props.title}</h2>
        <h2>{props.job}</h2>
      </div>
      <div className="partner-social-media">
        <a href={props.facebook}>
          <BsFacebook></BsFacebook>
        </a>
        <a href={props.twitter}>
          <BsTwitter></BsTwitter>
        </a>
        <a href={props.instagram}>
          <BsInstagram></BsInstagram>
        </a>
      </div>
      <div>
        <Link
          type="button"
          offset={0}
          className="goDown"
          duration={250}
          smooth={false}
          to={props.to}
        >
          <BsArrowBarDown size={25} />
        </Link>
      </div>
    </div>
  );
}
export { Partner };
