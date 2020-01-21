import React, { memo } from 'react';

import Link from './Link';

import GitHubLogo from '../../assets/github.png';
import Marker from '../../assets/marker.svg';

const DevItem = ({ dev }) => {
  const {
    avatarUrl,
    name,
    techs,
    bio,
    githubUsername,
    location: { coordinates },
  } = dev;

  const [longitude, latitude] = coordinates;

  const githubUrl = `https://github.com/${githubUsername}`;
  const technologies = techs.join(', ');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <li className="dev-item">
      <header>
        <img src={avatarUrl} alt={name} />
        <div className="user-info">
          <strong>{name}</strong>
          <span>{technologies}</span>
        </div>
      </header>
      {bio && <p>{bio}</p>}
      <div className="links">
        <Link
          url={githubUrl}
          image={GitHubLogo}
          alt="GitHub logo"
          text="GitHub"
        />
        <Link
          url={googleMapsUrl}
          image={Marker}
          alt="Map marker"
          text="Google Maps"
        />
      </div>
    </li>
  );
};

export default memo(DevItem);
