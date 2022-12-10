import { useState } from "react";
import React from "react";
const Shopping = () =>{
    const [count, setCount] = useState(0)
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [data, setData] = useState([{}])

    const handleSubmit = () =>{
        if(name || price){
        setData([...data, {name, price}])
        }
        setCount(count + parseInt(price));
        setName("")
        setPrice(0);
    }
    return(
        <>
       <div>
         <label >name: </label>
        <input  type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter name of the item"></input> <br/>
        <label >price </label>
        <input  type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="enter price"></input><br/>
        <button onClick={handleSubmit}> add</button>
        </div>

        <div>
            <table>
                <tbody>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
                {
                    data.map((item, i )=>{
                        return(
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
            <div>Grandtotal: {count}</div>
        </div>
        </>
    );
}

export default Shopping;