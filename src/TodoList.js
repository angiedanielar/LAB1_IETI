import Item from "./Item"

const TodoList = ({ todoList }) => {

	return (
		<div>
			<ul>{todoList.map((item) => <Item key={item} value={item}></Item>)}</ul>
		</div>
	);
}

export default TodoList;