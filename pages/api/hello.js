import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const db = (await clientPromise).db();
    db.collection("users").findOne({})

    res.status(200).send();
  }
}
