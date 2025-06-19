"use client";
import { useEffect, useRef } from "react";
import createREGL from "regl";

export default function GameOfLifeBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const regl = createREGL({ canvas });

        const gridSize = 256;

        // Create initial state with random cells
        const initialState = new Uint8Array(gridSize * gridSize * 4).map(() =>
            Math.random() > 0.8 ? 255 : 0
        );

        const currentFrameBuffer = regl.framebuffer({
            color: regl.texture({
                width: gridSize,
                height: gridSize,
                data: initialState,
                wrap: 'repeat',
                format: 'rgba',
                type: 'uint8'
            }),
            depth: false,
            stencil: false
        });

        const nextFrameBuffer = regl.framebuffer({
            color: regl.texture({
                width: gridSize,
                height: gridSize,
                wrap: 'repeat',
                format: 'rgba',
                type: 'uint8'
            }),
            depth: false,
            stencil: false
        });

        let currentState = currentFrameBuffer;
        let nextState = nextFrameBuffer;

        const update = regl({
            frag: `
      precision mediump float;
      uniform sampler2D state;
      varying vec2 uv;

      void main () {
        float sum = 0.0;
        for (int dx = -1; dx <= 1; dx++) {
          for (int dy = -1; dy <= 1; dy++) {
            vec2 offset = vec2(float(dx), float(dy)) / vec2(${gridSize}.0);
            sum += texture2D(state, uv + offset).r;
          }
        }

        float current = texture2D(state, uv).r;
        sum -= current; // subtract self

        float next = current;
        if (current == 1.0) {
          if (sum < 2.0 || sum > 3.0) {
            next = 0.0;
          }
        } else {
          if (sum == 3.0) {
            next = 1.0;
          }
        }

        // Random injection
        if (fract(sin(dot(uv * 1000.0, vec2(12.9898, 78.233))) * 43758.5453) > 0.996) {
          next = 1.0;
        }

        gl_FragColor = vec4(vec3(next), 1.0);
      }
      `,
            vert: `
      precision mediump float;
      attribute vec2 position;
      varying vec2 uv;
      void main () {
        uv = 0.5 * (position + 1.0);
        gl_Position = vec4(position, 0, 1);
      }
      `,
            attributes: {
                position: [-1, -1, 3, -1, -1, 3],
            },
            uniforms: {
                state: () => currentState,
            },
            framebuffer: () => nextState,
            count: 3,
        });

        const draw = regl({
            frag: `
      precision mediump float;
      uniform sampler2D state;
      varying vec2 uv;
      void main () {
        float c = texture2D(state, uv).r;
        gl_FragColor = vec4(vec3(c), 0.1);
      }
      `,
            vert: `
      precision mediump float;
      attribute vec2 position;
      varying vec2 uv;
      void main () {
        uv = 0.5 * (position + 1.0);
        gl_Position = vec4(position, 0, 1);
      }
      `,
            attributes: {
                position: [-1, -1, 3, -1, -1, 3],
            },
            uniforms: {
                state: () => currentState,
            },
            count: 3,
        });

        regl.frame(() => {
            update();
            draw();

            // Swap buffers
            const temp = currentState;
            currentState = nextState;
            nextState = temp;
        });

        return () => {
            regl.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                pointerEvents: "none",
                background: "#fff",
            }}
        />
    );
}
