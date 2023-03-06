import React from 'react'
import ExRates from './ExRates'
import OneNews from './OneNews'

export default function NewList() {
  // блок принимает массив данных с новостями, после разбивает на отдельные блоки с помощью map
  return (
    <div>
      <OneNews></OneNews>
      <ExRates></ExRates>
    </div>
  )
}
