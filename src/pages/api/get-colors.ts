import type { NextApiRequest, NextApiResponse } from "next";
import Vibrant from "node-vibrant";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;
  if (typeof url !== "string") {
    res.status(400).json({ error: "url must be a string" });
    return;
  }
  try {
    await Vibrant.from(url)
      .getPalette()
      .then((palette) => {
        return res.status(200).json(palette);
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  } catch (err) {
    return res.status(500).json({ error: "Error!" });
  }
}
