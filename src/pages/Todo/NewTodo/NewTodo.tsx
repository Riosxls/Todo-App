import { PlusCircle } from '@phosphor-icons/react';
import styles from './NewTodo.module.css';

function NewTodo() {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className={styles['todo-form']}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit" className={styles['todo-button']}>
        Criar
        <PlusCircle size={19} />
      </button>
    </form>
  );
}

export default NewTodo;
