import React from 'react'

interface svgBackProps {
  text?: string
}

// 联合类型
type WatermarkProps = {
  children?: React.ReactNode
} & svgBackProps

const SvgBack = (props: svgBackProps) => {
  const { text = 'watermark' } = props
  const res = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="300px" height="300px" viewBox="0 0 300 300">  
    <text x="10" y="10" font-size="20" transform="rotate(35 0 0 )" fill-opacity="0.1" fillColor="#000">${text}</text> 
  </svg>
  `
  const blob = new Blob([res], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  return <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 9,
      pointerEvents: 'none',
      backgroundImage: `url(${url})`,
    }}
  >
  </div>
}

const Watermark = (props: WatermarkProps) => {
  const { text } = props
  return (
    <div>
      {props.children}
      <SvgBack text={text} />
    </div>
  )
}

export default Watermark
