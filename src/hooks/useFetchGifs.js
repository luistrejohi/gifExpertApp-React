import { useState, useEffect } from "react";
import {getGif} from "../helpers/getGif";

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data : [],
        loading : true
    });

    useEffect(()=>{

        getGif(category)
            .then( imgs => {
                // setTimeout(()=>{
                    
                //     setState({
                //         data: imgs,
                //         loading: false
                //     })

                // },1000);
                setState({
                    data: imgs,
                    loading: false
                })
            });

    },[category]);//Este último argumento es la dependencia de useEffect, en caso de que la categoría 
                  //(que esta en las props) del componente cambioe, se ejecuta de nuevo el useEffect
    return state;

};