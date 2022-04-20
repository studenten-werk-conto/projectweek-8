import clientPromise from "../../../lib/mongodb";
const crypto = require("crypto")

export default async function handler(req, res) {
  console.log(req.body)
  if (req.method === "POST") {
      // const body = await JSON.parse(req.body)

      // console.log(body)
    const ad = {
      id: crypto.randomUUID(),
      title: req.body.title,
      work: req.body.work,
      area: req.body.area,
      description: req.body.description,
      author: req.body.author
    };

    const db = (await clientPromise).db();
    await db.collection("ads").insertOne(ad)

    res.status(200).send({status: "done"});
  }else{
    res.status(204).send("wrong http method")
  }
}
