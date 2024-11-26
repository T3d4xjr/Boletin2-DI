'use client';

import Ejercicio1 from "./StudentList";
import Ejercicio2 from "./LimitedCounter";
import Ejercicio3 from "./AverageCalculator";
import Ejercicio4 from "./SurveySimulator";
import Ejercicio9Clase from "./UserTable";
import Ejercicio13 from "./LiveValidationForm";
import EjemploImmer from "./Ejemploimmer";

export default function Home() {
  return (
    <div>
      <h1>Ejercicio1</h1>
      <Ejercicio1/>
      <h1>Ejercicio2</h1>
      <Ejercicio2/>
      <h1>Ejercicio3</h1>
      <Ejercicio3/>
      <h1>Ejercicio4</h1>
      <Ejercicio4/>
      <h1>Ejercicio9</h1>
      <Ejercicio9Clase/>
      <h1>Ejercicio13</h1>
      <Ejercicio13/>
      <h1>Ejercicios Extra</h1>
      <EjemploImmer/>
    </div>
  );
}