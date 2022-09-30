import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
    const mainCursor = useRef(null);

    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destX: 0,
        destY: 0,
        distX: 0,
        distY: 0,
        key: -1,
    });

    useEffect(() => {}, [input]);
}
