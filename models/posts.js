const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, '貼文內容 content 為必填']
  },
  // 圖片
  image: {
    type: String,
    default: ''
  },
  // 建立時間
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
  // 按讚數
  likes: {
    type: Number,
    default: 0
  },
  // 留言
  comments: {
    type: Array,
    default: []
  }
}, { versionKey: false });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;