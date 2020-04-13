import React, { useState, Dispatch, SetStateAction } from 'react';

export function Search(): JSX.Element {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}