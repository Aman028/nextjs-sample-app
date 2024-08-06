import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const UserInfo = () => {
  const router=useRouter();
  console.log(router);


  // const [user,setUser]=useState();
  // console.log(user);
  // useEffect(()=>{
  //   const id=router.query.id;
  //   async function getUserById(id)
  //   {
  //     const data = await fetch(`https://dummyjson.com/users/${id}`);
  //     setUser(await data.json());
  //   }
  //   getUserById(id);
  // },[router.query.id])

  const id=router.query.id;
  const {data,error}=useSWR(`https://dummyjson.com/users/${id}`,fetcher);
  if(error)
  {
    return <h1>Error</h1>
  }
  if(!data)
  {
    return <h1>Loading...</h1>
  }
  console.log(data);

  return (
    <div>
      <h1>{data.firstName}</h1>
    </div>
  );
};

export default UserInfo;
