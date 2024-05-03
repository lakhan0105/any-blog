import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";

function BlogsContainer() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogState);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  if (blogs?.length < 1) {
    return <h2>no blogs to load...</h2>;
  }

  return (
    <section className="center-cont blogs-cont">
      {blogs?.map((blog) => {
        const id = nanoid();
        return <BlogCard key={id} blog={blog} />;
      })}
    </section>
  );
}

export default BlogsContainer;
