import React from 'react';
import Header from '../Header';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Header', module)
  .addWithInfo(
    'default view',
    `
    これはTodoアプリのHeaderですよ。
    Props:
      - addTodo: (todo: string) => void
        
    利用例:  
    \`\`\`
    const addTodo = (todo) => dispatch({ type: 'ADD_TODO', payload: todo });
    <Header addTodo={addTodo} />
    \`\`\`
    `,
    () => {
      return (
        <div className="todoapp">
          <Header addTodo={action('Add Todo')}/>
        </div>
      );
  });
