'use client';
import { useState } from "react";

export default function SurveySimulator(){
    const[incrementarSi,setIncrementarSi]=useState=("")
    const[incrementarNo,setIncrementarNo]=useState=("")
    const[incrementarTalVez,setIncrementarTalVez]=useState=("")

    function incrementoVotosSi(){
        setIncrementarSi(incrementarSi + 1)
    }
    function incrementoVotosNo(){
        setIncrementarNo(incrementarNo + 1)
    }

    function incrementoVotosTalVez(){
        setIncrementarTalVez(incrementarTalVez + 1)
    }



    return(
        <div>
            <p>Votos del si : {incrementarSi}</p>
            <p>Votos del no : {incrementarNo}</p>
            <p>Votos del TalVez : {incrementarTalVez}</p>

            <button onClick={incrementoVotosSi}>IncrementarVotosSi</button>
            <button onClick={incrementoVotosNo}>IncrementarVotosNo</button>
            <button onClick={incrementoVotosTalVez}>IncrementarVotosTalVez</button>
        </div>
    );
}