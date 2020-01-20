import React, { memo } from 'react';

const DevItem = ({ dev }) => {
  const { avatarUrl, name, techs, bio, githubUsername } = dev;

  const technologies = techs.join(', ');

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
      <a href={`https://github.com/${githubUsername}`}>Acessar perfil no Github</a>
    </li>
  );
};

export default memo(DevItem);
