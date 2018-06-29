import React from 'react';

export default function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
      auralStatus={props.auralStatus}
    >
      {props.auralStatus}
    </p>
  );
}
