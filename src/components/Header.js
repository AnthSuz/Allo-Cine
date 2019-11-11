import React from "react";
import Photo from "../components/Photo";

const Header = props => {
  return (
    <>
      <div className="header">
        <Photo url={props.photo} />
      </div>
    </>
  );
};

export default Header;
