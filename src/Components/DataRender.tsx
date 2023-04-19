import { faker } from '@faker-js/faker'
import VirtualList from './VirtualList/VirtualList'


const list = Array.from({ length: 50000 }, (ele, i) => {
  return {
    key: i,
    text: faker.lorem.lines(),
  }
})

const DataRender = () => {
  return (
    <VirtualList list={list} />
  )
}

export default DataRender
