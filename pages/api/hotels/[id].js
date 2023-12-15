import dbConnect from "../../../util/mongo";
import Hotel from "../../../models/Hotel";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  if (method === "POST") {
    try {
      const hotel = await Hotel.create(req.body);
      res.status(201).json(hotel);
    } catch (err) {
      res.status(500).json("Not authenticated!");
    }
  }

  if (method === "DELETE") {
    try {
      await Hotel.deleteMany({});
      res.status(200).json("All hotels deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
