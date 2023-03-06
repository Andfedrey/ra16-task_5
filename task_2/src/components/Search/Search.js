import React from 'react'
import Logo from '../Logo'
import Navbar from '../Navbar'
import RandomLink from './RandomLink'

export default function Search() {
  //блок содержит поисковую строку, интерфейс для поиска информаци, логотип компании, шутку дня
  return (
    <div>
      <Navbar></Navbar>
      <Logo></Logo>
      <RandomLink></RandomLink>
    </div>
  )
}
