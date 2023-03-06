import React from 'react'
import Header from './Header/Header'
import Search from './Search/Search'
import Bottom from './Bottom/Bottom'
import Adversting from './Adversting'

export default function Main() {
  // основная страница для сборки всех компонентов
  return (
    <>
      <Header></Header>
      <Search></Search>
      <Adversting></Adversting>
      <Bottom></Bottom>
    </>
  )
}
