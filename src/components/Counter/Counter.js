// export default function Container({ children }) {
//   return <div className={s.container}>{children}</div>;
// }

import React from 'react';
import s from './container.module.css';

class Counter extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <span>0</span>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    );
  }
}
export default Counter;
