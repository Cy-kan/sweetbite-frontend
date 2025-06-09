// src/components/CustomCakeDesigner.jsx
import React, { useRef, useEffect, useState } from 'react';
import * as Fabric from 'fabric'; // <--- Change to this namespace import

// === ADD THESE LINES FOR DEBUGGING ===
console.log('--- Fabric.js Debug Info ---');
console.log('Value of "Fabric" object after import:', Fabric);
console.log('Type of "Fabric" object after import:', typeof Fabric);
console.log('Does "Fabric.Canvas" exist?', Fabric && typeof Fabric.Canvas !== 'undefined');
console.log('Value of "Fabric.Canvas":', Fabric ? Fabric.Canvas : 'Fabric is undefined');
console.log('--- End Debug Info ---');
// ====================================

import './CustomCakeDesigner.css';

const CustomCakeDesigner = () => {
  const canvasRef = useRef(null);
  const fabricCanvas = useRef(null);

  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    if (canvasRef.current && !fabricCanvas.current) {
      // Use 'Fabric.Canvas' directly from the namespace import
      fabricCanvas.current = new Fabric.Canvas(canvasRef.current, { // <--- Changed from fabric.Canvas
        width: 600,
        height: 400,
        backgroundColor: '#f0f0f0',
        selection: true,
      });

      // Use 'Fabric.Circle' directly from the namespace import
      const circle = new Fabric.Circle({ // <--- Changed from fabric.Circle
        radius: 100,
        fill: '#FFFFFF',
        stroke: '#BBBBBB',
        strokeWidth: 2,
        left: 200,
        top: 100,
        selectable: false,
      });
      fabricCanvas.current.add(circle);
      fabricCanvas.current.renderAll();

      return () => {
        if (fabricCanvas.current) {
          fabricCanvas.current.dispose();
          fabricCanvas.current = null;
        }
      };
    }
  }, []);

  return (
    <div className="cake-designer-container">
      <h2>Design Your Custom Cake!</h2>
      <div className="designer-area">
        <div className="controls-sidebar">
          <h3>Cake Options</h3>
          <p>Price: ${currentPrice.toFixed(2)}</p>
          <button onClick={() => alert('Change color (not implemented yet)')}>Change Color</button>
        </div>
        <div className="canvas-wrapper">
          <canvas ref={canvasRef} id="cakeCanvas" />
        </div>
      </div>
    </div>
  );
};

export default CustomCakeDesigner;