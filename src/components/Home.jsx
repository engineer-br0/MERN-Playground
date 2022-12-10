import React, {useContext} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../context/Context";

const Home = () =>{
    //using useContext
    const myName = useContext(AppContext);  //here use context is the consumer

    //using redux
    const {c} = useSelector((state) => state.custom);

    const dispatch = useDispatch();

    const addBtn = () =>{
        dispatch({
            type : "increment"
        })
    }

    const subBtn = () =>{
        dispatch({
            type : "decrement"
        })
    }

    const addBtn25 = () =>{
        dispatch({
            type : "incrementByValue",
            payload : 25
        })
    }

    return(
        <>
        <div>
            HEy im {myName}     
        </div>
        <h1>{c}</h1>
        <button onClick={addBtn}>increment</button>
        <button onClick={addBtn25}>increment by 25</button>
        <button onClick={subBtn}>decrement</button>
        </>
    );
}

export default Home;