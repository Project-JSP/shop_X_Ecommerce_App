import React from 'react';

function Cart({updateState, item, handelc }) {
    console.log(item);
    return (
        <div style={{ marginTop: "40px" }}>
            {item.map((x) => {
                return (
                    <div key={x.id}>
                        <h1>{x.name}</h1>
                        <p>the cart value is {x.price}</p>
                        <button onClick={() => handelc(x, 1)}>+</button>
                        <button>{x.amount}</button>
                        <button onClick={() => handelc(x, -1)}>-</button>
                        <button onClick={() => updateState(x.id)}>Remove</button>
                    </div>
                )
            })}

        </div>
    )
}
export default Cart;