import { useSession } from "next-auth/react";
import {useState} from "react"
import {Link} from "next/link"
import {Fetch} from "../../../lib/fetch"
// import {Createad} from "../components/adcard"

export default function Overview() {
    const { data: session, status } = useSession();
    const [ShowCreateAd, SetShowCreateAd] = useState(false);
  return (
    <> 
      {status === "authenticated" ? (
        <Link href="/api/auth/signin">Sign in</Link>
      ) : (
        <Link href="/user">go to user panel</Link>
      )}

      {/* <button onClick={() => SetShowCreateAd(true)}>create new ad</button>
      {ShowCreateAd ? <CreateAd /> : null} */}

      <br />
      <div>
        {/* {data.map((ad) => (
          <AdCard key={ad.id} props={ad} />
        ))} */}
      </div>
    </>
  );
}

// export async function getServerSideProps (ctx) {
//     const data = await Fetch("/api/ad/get");
//     return { data };
//   };
  