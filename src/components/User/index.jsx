import React from 'react'
import s from './style.module.sass'

export default function User({email, first_name, last_name, avatar}) {
  return (
    <div className={s.item}>
        <img src={avatar} alt="face" />
        <p>{first_name} {last_name}</p>
        <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}
