import React from 'react';

const Prom = ({ prom }) => {
  return (
    <div className="prom-card">
      {Data.map((prom) => (
      <tr>
        <td>{prom.login}</td>
        <td>{prom.lastname} {prom.firstname}</td>
        <td>{prom.login}@etna-alternance.net</td>
      </tr>
      ))}
   </div>
  );
};

export default Prom;