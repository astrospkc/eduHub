// import React, { useRef, useEffect } from 'react';

// const Canvas = () => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         // Safely access the canvas context
//         const canvas = canvasRef.current;
//         if (canvas) {
//             const ctx = canvas.getContext('2d');
//             if (ctx) {
//                 // You can now use ctx safely
//                 ctx.fillStyle = 'green';
//                 ctx.fillRect(100, 100, 100, 100);
//             }
//         }
//     }, []); // Empty dependency array ensures the effect runs only once after initial render

//     return (
//         <canvas
//             ref={canvasRef}
//             width={200}
//             height={400}
//             style={{ backgroundColor: 'blue' }}
//         />
//     );
// };

// export default Canvas;
