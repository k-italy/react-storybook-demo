import React from 'react';

export default function People(props){
  const { users } = props;
  const items = users.length ? users.map((u, idx) => <li key={idx}>{u.name}</li>) : (<li style={{'color': 'red'}}>(No Users!)</li>);
  return (
    <ul>{ items }</ul>
  );
}