import clientPromise from "../../../lib/mongodb";
const crypto = require("crypto")

export default async function handler(req, res) {
  console.log(req.method)
  if (req.method === "POST") {
      const body = await JSON.parse(req.body)

      console.log(body)
    const ad = {
      id: crypto.randomUUID(),
      title: body.title,
      work: body.work,
      area: body.area,
      description: body.description,
      author: body.author
    };

    const db = (await clientPromise).db();
    await db.collection("ads").insertOne(ad)

    res.status(200).send();
  }else{
    res.status(204).send("wrong http method")
  }
}
