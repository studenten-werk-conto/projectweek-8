import clientPromise from "../../lib/mongodb";

export default function Ad({ ad,author }) {
  console.log(ad);
  console.log(author)
  return <div>{JSON.stringify(ad)}</div>;
}

export async function getServerSideProps(ctx) {
  const db = (await clientPromise).db();
  const ad = await db.collection("ads").findOne({ id: ctx.query.ad },{projection:{_id:0}});
  const author = await db.collection("users").findOne({id: ad.author})
  return {
    props: { ad,author }, 
  };
}
