import React from "react";

import { MorphingText } from "../components/magicui/morphing-text";

const texts = [
    "HOLA",
    "Bienvenido",
    "A mi",
    "Aplicacion",
    "Un Gusto",
    "Conocerte",
];

export function MorphingTextDemo() {
    return <MorphingText texts={texts} />;
}
