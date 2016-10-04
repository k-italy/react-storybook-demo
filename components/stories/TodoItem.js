import React from 'react';
import TodoItem from '../TodoItem';
import { storiesOf, action, linkTo } from '@kadira/storybook';

storiesOf('TodoItem', module)
  .add('not completed', () => {
    const todo = {
      id: 'the-id',
      text: 'Hello Todo',
      completed: false
    };

    return getItem(todo, 'completed');
  })
  .add('completed', () => {
    const todo = {
      id: 'the-id',
      text: 'Hello Todo',
      completed: true
    };

    return getItem(todo, 'not completed');
  });


function getItem(todo, linkOnClick) {
  return (
    <div className="todoapp">
      <div className="todo-list">
        <TodoItem
          todo={todo}
          editTodo={action('editTodo')}
          deleteTodo={action('deleteTodo')}
          completeTodo={linkTo('TodoItem', linkOnClick)}/>
      </div>
    </div>
  );
}
