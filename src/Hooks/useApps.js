import axios from "axios"
import { useEffect, useState } from "react"


const useApps =()=>{
    const [apps,setApps]=useState([])
    const [loading,setLoading] =useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        setLoading(true);

        axios('../data.json')
        .then(data=> setApps(data.data))
        .catch(err=>setError(err))
        .finally(()=>{
            setTimeout(() =>setLoading(false),1000);
    });

    },[]);

    return {apps,loading,error};

};

export default useApps