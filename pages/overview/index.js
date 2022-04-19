import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import AdCard from "../../components/adcard"

export default function Overview(props) {
    const { data: session, status } = useSession();
    const [ShowCreateAd, SetShowCreateAd] = useState(false);
  return (
    <>
      <p>Signed in as {session.user.email}</p>
      {status === "authenticated" ? (
        <Link href="/api/auth/signin">Sign in</Link>
      ) : (
        <Link href="/user">go to user panel</Link>
      )}

      <button onClick={() => SetShowCreateAd(true)}>create new ad</button>
      {ShowCreateAd ? <CreateAd /> : null}

      <br />
      <div className={style.adfield}>
        {data.map((ad) => (
          <AdCard key={ad.id} props={ad} />
        ))}
      </div>
    </>
  );
}
