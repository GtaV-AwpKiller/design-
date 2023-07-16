import React, { useEffect, useRef } from "react";

const config = {
    waveSpeed: 0.1,
    wavesToBlend: 4,
    curvesNum: 40,
};

class WaveNoise {
    constructor() {
        this.waveSet = [];
    }

    addWaves(requiredWaves) {
        for (let i = 0; i < requiredWaves; ++i) {
            let randomAngle = Math.random() * 360;
            this.waveSet.push(randomAngle);
        }
    }

    getWave() {
        let blendedWave = 0;
        for (let e of this.waveSet) {
            blendedWave += Math.sin((e / 180) * Math.PI);
        }
        return (blendedWave / this.waveSet.length + 1) / 2;
    }

    update() {
        this.waveSet.forEach((e, i) => {
            let r = Math.random() * (i + 1) * config.waveSpeed;
            this.waveSet[i] = (e + r) % 360;
        });
    }
}

export default function Wave() {
    const canvasRef = useRef(null);
    const size = useRef({
        w: 0,
        h: 0,
        cx: 0,
        cy: 0,
    });
    const controls = useRef([]);
    const controlsNum = useRef(3);

    useEffect(() => {
        const cnv = canvasRef.current;
        const ctx = cnv.getContext("2d");

        const setCanvasSize = () => {
            size.current.w = cnv.width = window.innerWidth;
            size.current.h = cnv.height = window.innerHeight;
            size.current.cx = size.current.w / 2;
            size.current.cy = size.current.h / 2;
        };

        setCanvasSize();
        const handleResize = () => {
            setCanvasSize();
        };
        window.addEventListener("resize", handleResize);

        const createControls = () => {
            for (let i = 0; i < controlsNum.current + config.curvesNum; ++i) {
                let control = new WaveNoise();
                control.addWaves(config.wavesToBlend);
                controls.current.push(control);
            }
        };
        createControls();

        const updateCurves = () => {
            let c = controls.current;
            let controlX1 = c[0].getWave() * size.current.w;
            let controlY1 = c[1].getWave() * size.current.h;
            let controlX2 = c[2].getWave() * size.current.w;

            for (let i = 0; i < config.curvesNum; ++i) {
                let controlY2 = c[3 + i].getWave();

                let curveParam = {
                    startX: 0,
                    startY: (size.current.h / config.curvesNum) * i * 2,
                    controlX1: controlX1,
                    controlY1: controlY1,
                    controlX2: controlX2,
                    controlY2: controlY2 * size.current.h,
                    endX: size.current.w,
                    endY: ((size.current.h / config.curvesNum) * i) / 2,
                    alpha: controlY2,
                };
                drawCurve(curveParam);
            }
        };

        const drawCurve = ({
            startX,
            startY,
            controlX1,
            controlY1,
            controlX2,
            controlY2,
            endX,
            endY,
            alpha,
        }) => {
            ctx.strokeStyle = `rgba(225,225,225,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.bezierCurveTo(
                controlX1,
                controlY1,
                controlX2,
                controlY2,
                endX,
                endY
            );
            ctx.stroke();
        };

        const updateCanvas = () => {
            ctx.fillStyle = `black`;
            ctx.fillRect(0, 0, size.current.w, size.current.h);
        };
        const updateControls = () => {
            controls.current.forEach((e) => e.update());
        };
        const updateAnimation = () => {
            updateCanvas();
            updateCurves();
            updateControls();
            controls.current.forEach((control) => {
                control.update();
            });
            requestAnimationFrame(() => updateAnimation());
        };
        updateAnimation();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} />;
}
