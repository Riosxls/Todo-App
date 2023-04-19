import styles from './Todos.module.css';
import NewTodo from './NewTodo/NewTodo';
import TodoList from './TodoList/TodoList';

function Todo() {
  return (
    <div className={styles.todo}>
      <div className={styles['todo-container']}>
        <NewTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
