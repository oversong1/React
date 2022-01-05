import React from "react";

// Pode receber dados ou ATRIBUTOS
export default function Dados(props){

    const n1 = 12;
    const n2 = 7;

    const textoDestaque = {
        color : '#00f',
        fontSize : '3rem'
    }

  return(
    <>
        {/* Criamos o props para os elementos poderem receber atributo */}
        {/* Entao atribuimos props com o nome do elemento criado
        no arquivo que importa esse arquivo (Dados.js).
        Sendo assim vamos la no App.js onde o Dados.js esta sendo importado
        e la vamos verificar que o props com o nome de Canal,Youtube e Curso
        foi criado e esta passando alguns daods  */}

        <p style={{color:'#f00', fontSize:'5rem'}}>Canal : {props.Canal()}</p>  
        <p style={textoDestaque}>Youtube : {props.Youtube}</p>  
        <p>Curso :  {props.Curso}</p>  
        <p>{'A soma de ' + n1 + ' com '+ n2 +' é :' + props.Somar(12, 7)}</p>  
    </>
  )
}

