function Saludo ({name, lastname, fn}){

    if (fn){
      fn();
    }
    return <h1>Saluditoss {name}{lastname} </h1>
}

export default Saludo

