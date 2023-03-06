import React from 'react'

export default function Navbar(props) {
  // navbar принимает массив и изменятся в зависимости от полученных данных
  return (
    <div>
      {props.children}
    </div>
  )
}
