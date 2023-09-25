import './App.css';
import Checkbox from './Checkbox';
import IconButton from './IconButton';

export default function List({ items, onDeleteItem, onSetItemIsDone }) {
  return (
    <>
      <ul className="card__list">
        <div>
          {items.map((item, index) => (
            <li className="card-item" key={item.id}>
              <div className='card-item__content'>
                <Checkbox
                  checked={item.isDone}
                  onChange={(event) =>
                    onSetItemIsDone(event.target.checked, index)
                  }
                ></Checkbox>
                {item.task}
              </div>
              <IconButton onClick={() => onDeleteItem(index)} />
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}
