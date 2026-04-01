import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this blog post.'],
    maxlength: [100, 'Title cannot be more than 60 characters'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug for this blog post.'],
    unique: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide content for this blog post.'],
  },
  excerpt: {
    type: String,
  },
  author: {
    type: String,
    default: 'Admin',
  },
  coverImage: {
    type: String,
  },
  category: {
    type: String,
  },
  tags: [String],
  status: {
    type: String,
    enum: ['Published', 'Draft'],
    default: 'Draft',
  },
  imageSource: {
    type: String,
    enum: ['url', 'upload'],
    default: 'url'
  },
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
