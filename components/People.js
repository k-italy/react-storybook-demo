import React from 'react';

export default function People(props){
  const { users } = props;
  const items = users.length ? users.map(u => <li>{u.name}</li>) : (<li>(No Users!)</li>);
  return (
    <ul>{ items }</ul>
  );
}