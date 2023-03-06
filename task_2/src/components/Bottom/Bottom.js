import React from 'react'
import Card from './Card'

export default function Bottom() {
  /* нижний блок страницы состоит из новостных карточек  
    размер 1 карточки 1/3 от страницы в десктопной версии
  */
  return (
    <div>
      {/* информация о погоде */}
      <Card></Card>
      {/* часто посещаемое */}
      <Card></Card>
      {/* карта германии */}
      <Card></Card>
      {/* телепрограмма */}
      <Card></Card>
      {/* список стримов tv-show*/}
      <Card></Card>
    </div>
  )
}
