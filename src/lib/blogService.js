import dbConnect from './mongodb';
import Blog from '../models/Blog';

export const getAllBlogs = async () => {
  await dbConnect();
  return Blog.find({}).sort({ createdAt: -1 }).lean();
};

export const getBlogBySlug = async (slug) => {
  await dbConnect();
  return Blog.findOne({ slug }).lean();
};

export const getPaginatedBlogs = async (page = 1, limit = 9) => {
  await dbConnect();
  const skip = (page - 1) * limit;
  
  const query = { 
    $or: [{ status: "Published" }, { published: true }] 
  };
  
  const blogs = await Blog.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();
    
  const totalCount = await Blog.countDocuments(query);
  
  return { blogs, totalCount };
};

export const createBlog = async (blogData) => {
  await dbConnect();
  return Blog.create(blogData);
};

export const updateBlog = async (slug, blogData) => {
  await dbConnect();
  return Blog.findOneAndUpdate({ slug }, blogData, { new: true }).lean();
};

export const deleteBlog = async (slug) => {
  await dbConnect();
  return Blog.findOneAndDelete({ slug }).lean();
};
