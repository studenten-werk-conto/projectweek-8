import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link";
import clientPromise from "../../lib/mongodb";
import Loggedin from "./loggedin";

export default function User({data}) {
  const { data: session } = useSession()
  console.log(data);

  if (session) {
    return <Loggedin acount={session}/>;

  }

  return <Link href="/api/auth/signin">Sign in</Link>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const db = (await clientPromise).db();
  let data = await db
    .collection("acounts")
    .findOne({ email: session.user.email });
    delete data._id
    console.log(data)
  data.session = session;

  return {
    props: {
      data,
    },
  };
}
