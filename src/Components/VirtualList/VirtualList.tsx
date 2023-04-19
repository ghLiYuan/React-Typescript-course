import { useEffect, useRef, useState } from 'react'
import virtualStyle from './virtual.module.css'

interface Item {
  key: string | number
  text: string
}
interface VirtualListProp {
  list: Item[]
}

const VirtualList = (props: VirtualListProp) => {
  const { list } = props

  const container = useRef<HTMLDivElement>(null)
  const [visibleData, setVisibleData] = useState<VirtualListProp['list']>([])
  const [listTransform, setListTransform] = useState('translate3d(0, 0, 0)')
  // 假设每项高度
  const ITEM_HEIGHT = 60
  const placeholderHeight = list.length * ITEM_HEIGHT
  
  function getCount() {
    const viewHeight = container.current?.clientHeight || 500
    const count = Math.floor(viewHeight / ITEM_HEIGHT)
    return count
  }
  
  useEffect(() => {
    setVisibleData(list.slice(0, getCount()))
  }, [])

  function handleScroll(event: React.UIEvent<HTMLDivElement, UIEvent>) {
    const scrollTop = event.currentTarget.scrollTop
    const start = Math.floor(scrollTop / ITEM_HEIGHT)
    setVisibleData(list.slice(start, start + getCount()))
    setListTransform(`translate3d(0, ${start * ITEM_HEIGHT}px ,0)`)
  }


  return (
    <div ref={container}
      className={virtualStyle.container}
      onScroll={handleScroll}
    >
      <div className={virtualStyle.placeholder}
        style={{ height: placeholderHeight }}
      ></div>
      <div className={virtualStyle.list}
        style={{ transform: listTransform }}
      >
        {visibleData.map(item => 
          <div className='wrapper' key={item.key}>
            <span style={{ color: 'red' }}>{item.key}</span>
            {item.text}
          </div>)}
      </div>
    </div>
  )
}


export default VirtualList