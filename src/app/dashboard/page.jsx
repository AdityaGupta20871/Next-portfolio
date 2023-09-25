"use client"
import useSWR from 'swr'
import React, { useEffect, useState } from 'react'
import {useSession} from 'next-auth/react'
const Dashboard = () => {
  const session = useSession()
  
  // const [data,setData] = useState([])
  // const [err,setError] = useState(false)
  // const [loading,isLoading] = useState(false)
  // useEffect(()=>{
  //    const getData = async () =>{
  //     isLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //    })
    
  //     if (!res.ok) {
  //       setError(true)
  //     }
  //     const data = await res.json()
    
  //     setData(data)
  //     isLoading(false)
  //   }
  //   getData()
  // },[])
  // console.log(data)
  
  console.log(session)
  const fetcher = (...args) => fetch(...args).then((r) => r.json())
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  )
  console.log(data)
  return (
    <div>In Development</div>
  )
}

export default Dashboard