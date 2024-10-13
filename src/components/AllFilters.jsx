/* eslint-disable no-unused-vars */

import React,{useState} from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { LiaFilterSolid } from "react-icons/lia";

const AllFilters = () => {

    const [showFilters,setShowFilters]=useState(false)
    // const []=useState(false)
    // const []=useState(false)

    const d=useRef(null);

// useEffect(,[])


  return (
    <div>
       <button ><LiaFilterSolid /></button>
       {}
    
    </div>
  )
}

export default AllFilters
