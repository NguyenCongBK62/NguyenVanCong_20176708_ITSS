/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
const changeColor = (key) => {
  const element = document.getElementById(key);
  element.style.color = 'grey';
}

function TodoItem( {item} ) {
  return (
    <label className="panel-block" id={item.key}>
      <input type="checkbox"  onClick={() => changeColor(item.key)} />
      {item.text}
    </label>
  );
}

export default TodoItem;