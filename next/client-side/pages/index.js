import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

//import image
import duck from "../public/duck.jpeg";
export default function Home() {
  // const myImageLoader=({src,width,height})=>{
  //   return `https://www.https://www.pexels.com/photo/abstract-background-with-swirls-multicolor-splashes-of-paints-3844788/.com/imgres?q=photography%20random%20pexels&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3844796%2Fpexels-photo-3844796.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-didsss-3844796.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Frandom%2F&docid=63pPrtp3IJtfOM&tbnid=SL55BdtM_74USM&vet=12ahUKEwiu_fyb2d-HAxVqyzgGHdVxNrQQM3oECGUQAA..i&w=${width}&h=${height}&hcb=2&ved=2ahUKEwiu_fyb2d-HAxVqyzgGHdVxNrQQM3oECGUQAA`
  // }
  const session = useSession();
  console.log(session);
  if (session.data === null) {
    return <button onClick={signIn}>Login</button>;
  }
  return (
    <div className={styles.container}>
      {/* <Image src={duck} alt="duck" width={200} height={200} />
      <Image src="/duck.jpeg" alt="duck" width={200} height={200} />
      <Image
        loader={myImageLoader}
        src=""
        alt="paint"
        width={500}
        height={250}
      /> */}
      <h1>Auth</h1>
      <h1>{session?.data?.user?.name}</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}
