import React, { memo } from 'react';

const Loading = ({ width, height }) => (
  <div style={{width, height}}>
    <div className="razar">
      <div className="ringbase ring1"></div>
      <div className="ringbase ring2"></div>
      <div className="pulse"></div>
      <div className="pointer">
        <div></div>
      </div>
      <div className="dot pos1"></div>
      <div className="dot pos2"></div>
      <div className="dot pos3"></div>
    </div>
  </div>
);

export default memo(Loading);
