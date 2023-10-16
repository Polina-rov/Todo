import './App.css';
import Checkbox from './Checkbox';
import IconButton from './IconButton';
import EditButton from './EditButton';

function ListItemTitle({ isEditing, children }) {
  if (isEditing === false) {
    return <span>{children}</span>;
  } else {
    return <input type="text" defaultValue={children} />;
  }
}

export default function List({
  items,
  isEditing,
  editingItem,
  onDeleteItem,
  onSetItemIsDone,
  onEditItem,
}) {
  return (
    <>
      <ul className="card__list">
        <div>
          {items.map((item, index) => (
            <li className="card-item" key={item.id}>
              <div className="card-item__content">
                <Checkbox
                  checked={item.isDone}
                  onChange={(event) =>
                    onSetItemIsDone(event.target.checked, index)
                  }
                ></Checkbox>
                <ListItemTitle isEditing={isEditing && editingItem === index}>
                  {item.task}
                </ListItemTitle>
              </div>
              <EditButton onClick={() => onEditItem(index)} />
              <IconButton onClick={() => onDeleteItem(index)} />
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}
