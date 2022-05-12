import postModel from '../models/postModel.js';

export const getPosts = async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json(posts);
};
