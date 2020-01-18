import React, { memo } from 'react';

const FormInput = (props) => {
  const { id, label, name, type = 'text', required = false, value, onChange } = props;

  return (
    <div className="input-block">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default memo(FormInput);
