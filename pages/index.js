import { useSession } from "next-auth/react";
// import {clientPromise} from "../lib/mongodb"
import Link from "next/link";
import style from "../styles/Home.module.css";
import Fetch from "../lib/fetch";
import AdCard from "../components/adcard";
import { useState } from "react";
import CreateAd from "../components/createad";


export default function Home({ data }) {
  const { data: session, status } = useSession();
  const [ShowCreateAd, SetShowCreateAd] = useState(false);

  console.log(data);

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <Link href="/user">go to user panel</Link>
        
        <button onClick={() => SetShowCreateAd(true)}>create new ad</button>
        {ShowCreateAd? <CreateAd/> : null}
        
        
        <br />
        <div className={style.adfield}>
          {data.map((ad) => (
            <AdCard key={ad.id} props={ad} />
          ))}
        </div>
      </>
    );
  } else {
    return <Link href="/api/auth/signin">Sign in</Link>;
  }
}

Home.getInitialProps = async (ctx) => {
  const data = await Fetch("/api/ad/get");
  return { data };
};
