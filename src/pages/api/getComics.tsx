// Fake users data
export const comics: string = "this is a comic!";

export default function getComics(req, res) {
  // Get data from your database
  res.status(200).json(comics);
}
