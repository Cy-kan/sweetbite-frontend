// src/components/CustomCakeDesigner.jsx
import React, { useRef, useEffect, useState } from 'react';
import Fabric  from 'fabric'; // Import fabric

import './CustomCakeDesigner.css'; // We'll create this CSS file next

const CustomCakeDesigner = () => {
  const canvasRef = useRef(null); // Ref to attach Fabric.js canvas
  const fabricCanvas = useRef(null); // Ref to store the Fabric.js canvas instance

  // State for pricing (we'll connect this later)
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    // Initialize Fabric.js canvas when the component mounts
    if (canvasRef.current && !fabricCanvas.current) {
      fabricCanvas.current = new fabric.Canvas(canvasRef.current, {
        width: 600, // You can adjust these dimensions
        height: 400,
        backgroundColor: '#f0f0f0', // Light grey background for the canvas
        selection: true, // Allow selecting objects
      });

      // Optional: Add a basic shape to start with (e.g., a circle for the cake)
      const circle = new fabric.Circle({
        radius: 100,
        fill: '#FFFFFF', // White cake base
        stroke: '#BBBBBB',
        strokeWidth: 2,
        left: 200,
        top: 100,
        selectable: false, // Make the base cake not selectable by default
      });
      fabricCanvas.current.add(circle);
      fabricCanvas.current.renderAll(); // Render the canvas

      // Clean up Fabric.js canvas when the component unmounts
      return () => {
        if (fabricCanvas.current) {
          fabricCanvas.current.dispose();
          fabricCanvas.current = null;
        }
      };
    }
  }, []); // Run once on component mount

  return (
    <div className="cake-designer-container">
      <h2>Design Your Custom Cake!</h2>
      <div className="designer-area">
        <div className="controls-sidebar">
          {/* Controls for shape, color, toppings will go here */}
          <h3>Cake Options</h3>
          <p>Price: ${currentPrice.toFixed(2)}</p> {/* Display price */}
          {/* Example control: */}
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