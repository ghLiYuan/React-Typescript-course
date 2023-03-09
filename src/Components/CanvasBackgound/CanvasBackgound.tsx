import { useEffect, useRef } from 'react'
import './CanvasBackgound.css'
import type { CircleType } from '@/utils/CanvasBall'
import { Circle } from '@/utils/CanvasBall'
const CanvasBackgound = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseCircle: CircleType = new Circle(0, 0, 10)
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const w = canvas.width = window.innerWidth
    const h = canvas.height = window.innerHeight
    const circles: CircleType[] = []
    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (let i = 1; i < circles.length; i++) {
        circles[i].draw(ctx)
        circles[i].move(w, h)
        for (let j = i + 1; j < circles.length; j++)
          circles[i].drawLine(ctx, circles[j])
      }
      mouseCircle.draw(ctx)
      // mouseCircle.move(w, h)
      for (let z = 0; z < circles.length; z++)
        mouseCircle.drawLine(ctx, circles[z])

      window.requestAnimationFrame(draw)
    }
    function init(num: number) {
      for (let i = 0; i < num; i++) {
        const circle = new Circle(w * Math.random(), h * Math.random())
        circles.push(circle)
      }
      console.log(circles.length)
      draw()
    }
    init(60)
  }, [])
  return <canvas
    ref={canvasRef}
    className="canvas-background"
    onMouseMove={(e) => {
      mouseCircle.x = e.clientX
      mouseCircle.y = e.clientY
    }}
  />
}
export default CanvasBackgound
