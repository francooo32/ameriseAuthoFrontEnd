import React from 'react';
import ListItem from './ListItems/ListItems';
import "./List.css";

const List = ({ list }) => (
  <div className='list-wrap'>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
    {console.log(list)}
  </div>
);

export default List;