import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import User from '../User';
import s from './style.module.sass';

export default function UsersContainer() {
  const { users } = useContext(Context);

  return (

    <div className={s.container}>
        {
          users.length === 0
          ? <p>Данные еще не загрузились...</p>
          : users.map(user => <User key={user.id} {...user}/>)
        }
    </div>
  )
}
