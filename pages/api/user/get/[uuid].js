import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const db = (await clientPromise).db();
    const data = await db.collection("acounts").findOne({id:req.query.uuid})

    res.status(200).send(data);
  }
}
