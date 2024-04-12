import React, { useRef } from 'react';

const Board = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);


    return (
        <canvas
            ref={canvasRef}
            width={200}
            height={400}
            style={{ backgroundColor: 'blue' }}
        />
    );
};


export default Board;