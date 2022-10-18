import React from "react";

export default function delay(callback, ms) {
    return new Promise((resolve) => {
        resolve(callback());
    }, ms);
}
