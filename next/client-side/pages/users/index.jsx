import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import styles from "../../styles/User.module.css"

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Index = () => {
  // const [users, setUsers] = useState([]);
  // console.log("users", users);
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const data = await fetch("https://dummyjson.com/users");
  //     setUsers(await data.json());
  //   }
  //   fetchUsers();
  // }, []);
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  if (error) {
    return <h1>error</h1>;
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }
  console.log(data);

  return (
    <div>
      <h1>user</h1>
      {data.users &&
        data.users.map((user) => (
          <Link  href={`/users/${user.id}`} key={user.id}>
            <div className={styles.text}>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
};

export default Index;
