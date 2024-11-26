"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejercicio9Clase from "./UserTable";
import LiveValidationForm from "./LiveValidationForm";
import EjemploImmer from "./Ejemploimmer"

export default function Home() {
  return (
    <div>
      <h1>Ejercicio9</h1>
      <Ejercicio9Clase/>
      <h1>Ejercicio13</h1>
      <LiveValidationForm/>
      <h1>Ejercicios Extra</h1>
      <EjemploImmer/>
    </div>
  );
}
