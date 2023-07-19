
export default function Ta_lindo(props){
    return(
        <div>
            <h1>Esto se esta poniendo lindo...{props.texto} {props.numero} </h1>
        </div>
    )
}
/*
Otra manera de trabajar con props, es utilizando slo un campo de la estructura pasada... Por ejemplo.

export default function Ta_lindo({texto}){
    return(
        <div>
            <h1>Esto se esta poniendo lindo...{texto}</h1>
        </div>
    )
}

De esta manera, perdemos el campo numero, que formaba parte de del objeto Props.

Otra cosa a observar, es esto de pasar por {} a la especie de la estructura... Es una forma de evaluar solo
la parte interesante para la funcion, de toda la estructura original.


*/