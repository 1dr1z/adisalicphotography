import React from "react";

function FooterItem(props) {
  const { link, icon } = props.item;
  return (
    <React.Fragment>
      <a
        className="icons"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={icon} />
      </a>
    </React.Fragment>
  );
}

export default FooterItem;
