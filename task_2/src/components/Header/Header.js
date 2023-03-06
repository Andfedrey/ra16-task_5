import React from 'react'
import Adversting from './Adversting'
import News from './News'

export default function Header() {
  return (
    //блок размещается в верхней части страницы содержит блок новостей и рекламу
    <div>
      <News></News>
      <Adversting></Adversting>      
    </div>
  )
}
