import React from 'react'
import s from './style.module.sass'
import { addUser } from '../../requests/user'
import { Context } from '../../context'
import { useContext } from 'react'


export default function AddUser() {

  const { createNewUser } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const {first_name, last_name, email, avatar} = event.target;

    addUser({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      avatar: avatar.value
    }, createNewUser);

    first_name.value = '';
    last_name.value = '';
    email.value = '';
    avatar.value = '';
  }


  return (
    <form className={s.form} onSubmit={submit}>
        <input placeholder='Имя'     type="text" name="first_name" />
        <input placeholder='Фамилия' type="text" name="last_name" />
        <input placeholder='Почта'   type="email" name="email" />
        <input placeholder='Аватар'  type="text" name="avatar" />
        <button>Добавить</button>
    </form>
  )
}
