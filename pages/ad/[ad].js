import clientPromise from "../../lib/mongodb";

export default function Ad({ data }) {
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
}

export async function getServerSideProps(ctx) {
  const db = (await clientPromise).db();
  const data = await db.collection("ads").findOne({ id: ctx.query.ad },{projection:{_id:0}});
  console.log(data)
  return {
    props: { data }, // will be passed to the page component as props
  };
}
