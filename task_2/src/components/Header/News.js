import React from 'react'
import Navbar from '../Navbar'
import NewList from './NewList'
import TodayDate from './TodayDate'

export default function News() {
  // блок с новостями
  return (
    <div>
      <Navbar></Navbar>
      <TodayDate></TodayDate>
      <NewList></NewList>
    </div>
  )
}
