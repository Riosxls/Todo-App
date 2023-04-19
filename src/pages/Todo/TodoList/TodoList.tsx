import React, { useContext } from 'react';
import { ClipboardText, Trash } from '@phosphor-icons/react';
import styles from './TodoList.module.css';
import Checkbox from '../../../UI/Checkbox';
import { TodoContext } from '../../../store/todo-context';

function TodoList() {
  const todosCtx = useContext(TodoContext);

  const emptyList = (
    <div className={styles['empty-list']}>
      <ClipboardText size={60} color="#3D3D3D" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br /> Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );

  const fullList = todosCtx.items.map((item) => (
    <div key={item.id} className={styles['full-list']}>
      <Checkbox />
      <p>{item.text}</p>
      <Trash className={styles['trash-btn']} size={27} />
    </div>
  ));

  return (
    <div className={styles['todo-list']}>
      <div className={styles['list-header']}>
        <div className={styles['created-tasks']}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles['finished-tasks']}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </div>
      <div className={styles['list-content']}>
        {todosCtx.items.length > 0 && fullList}
        {todosCtx.items.length <= 0 && emptyList}
      </div>
    </div>
  );
}

export default TodoList;
