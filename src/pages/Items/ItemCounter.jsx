import { useState } from "react";
import CartWidget from "../../components/CartWidget/CartWidget";

export default function Counter() {
  const [contador, setContador] = useState(0);

  const onClickReduceCounterHandler = () => {
    setContador(contador - 1);
  };

  const onClickAddCounterHandler = () => {
    setContador(contador + 1);
  };

  return (
    <div className="counter">
      <button key={contador} onClick={onClickReduceCounterHandler}>
        -
      </button>

      <span>{contador}</span>

      <button key={contador >= 1} onClick={onClickAddCounterHandler}>
        +
      </button>
      <div>
        <button>
          <CartWidget/>
        </button>
      </div>
    </div>
  );
}
