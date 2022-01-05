import React from "react";

export default function Resultdo(props){
    return(
        <div>
            <p>Soma das notas :{props.somNotas}</p>
            <p>{props.somNotas >= 60 ? "Aprovado" : "Reprovado"}</p>
        </div>
    )
}