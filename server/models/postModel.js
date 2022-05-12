import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  descriptio: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const PostsData = mongoose.model('PostsData', postSchema);

export default PostsData;
