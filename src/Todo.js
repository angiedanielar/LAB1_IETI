import React from 'react';


const Todo = ({ text, priority, dueDate }) => {


	return (
		<div>
			<h1>{text}</h1>
			<h1>{priority}</h1>
			<h1>{dueDate}</h1>
		</div>
	);

}

export default Todo;