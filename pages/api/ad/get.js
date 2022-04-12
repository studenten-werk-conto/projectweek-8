import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
    const db = (await clientPromise).db();
    const data = await db.collection("ads").find({},{_id:0}).toArray()
    console.log(data)
    res.status(200).send(data);
  }

