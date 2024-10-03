import { useState, useRef } from "react";

export default function Index() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState();
  return (
    <canvas
     ref = {canvasRef}
     id = 'canvas'
     className = 'absolute top-0 left-0 w-full h-full'
     />
  )
}
