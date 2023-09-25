import List from './List';
import Status from './Status';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

export default function Wrapper() {
  const [items, setItems] = useState([
    { task: 'Do homework', isDone: false, id: 1 },
    { task: 'Go for a walk', isDone: false, id: 2 },
    { task: 'Help grandmother', isDone: false, id: 3 },
  ]);
  const [inputItem, setInputItem] = useState('');

  function addItem(event) {
    event.preventDefault();
    if (inputItem === '') return;
    setItems([...items, { task: inputItem, isDone: false, id: Math.random() }]);
    setInputItem('');
  }
  function deleteItem(index) {
    const copy = [...items];
    copy.splice(index, 1);
    setItems(copy);
  }

  function setItemIsDone(checked, index) {
    const copy = [...items];
    copy[index].isDone = checked;
    setItems(copy);
  }
  return (
    <div className="card__wrapper">
      <List
        items={items}
        onDeleteItem={deleteItem}
        onSetItemIsDone={setItemIsDone}
      >
        <Status />
      </List>
      <form className="card__form" onSubmit={addItem}>
        <Input
          value={inputItem}
          onChange={(event) => setInputItem(event.target.value)}
        />
        <Button />
      </form>
    </div>
  );
}
