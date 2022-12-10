import {useState} from "react";

export default function Counter(){
    const [contador, setContador] = useState(0);

    const onClickReduceCounterHandler = () => {
        console.log("voy a restar 1 en tu contador");
        setContador(contador - 1);
    };

    const onClickAddCounterHandler = () => {
        console.log("voy a sumar 1 en tu contador");
        setContador (contador + 1);
    };

    return(
        <div className="contador_container">
            <button onClick={onClickReduceCounterHandler}>-</button>
            <span>{contador}</span>
            <button onClick={onClickAddCounterHandler}>+</button>
        </div>
    )
}
