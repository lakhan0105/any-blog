import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogImgPreview } from "../features/blog/blogSlice";

function BlogCard({ blog }) {
  const dispatch = useDispatch();
  const { title, featuredImage, status, userId, content, $id } = blog;

  const [previewImg, setPreviewImg] = useState("");

  useEffect(() => {
    const imgObj = blogImgPreview(featuredImage);
    setPreviewImg(imgObj?.href);
    console.log(previewImg);
  }, []);

  return (
    <article className="blog-card">
      <div className="blog-left">
        <div className="basic-info">
          <h3 className="blog-title">{title}</h3>
          <p className="blog-desc">{content}</p>
        </div>
      </div>

      <div className="blog-right">
        <div className="prev-img-cont">
          <img src={previewImg} alt={`${title} not found`} />
        </div>
        <div className="other-blog-funcs">save</div>
      </div>

      {/* <hr className="blog-line" /> */}
    </article>
  );
}

export default BlogCard;
