import React from 'react';

export default function ToggleParagraph({ ui, updateUI }){

  const onClick = () => updateUI({ isOpen: !ui.isOpen });

  return (
    <div>
      <button onClick={onClick} style={{ border: 'solid' }}>
        { ui.isOpen ? 'Open' : 'Close' }
      </button>
      { ui.isOpen && <p>Storybook 最高！</p> }
    </div>
  );
}