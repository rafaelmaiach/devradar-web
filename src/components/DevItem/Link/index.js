import React from 'react';

const Link = ({ url, image, alt, text }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="link"
  >
    <img src={image} alt={alt} className="icon" />
    <span>{text}</span>
  </a>
);

export default Link;
