import React, { useEffect, useState } from "react";
import { FormInput } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, createFeaturedImage } from "../features/blog/blogSlice";
import { ID } from "appwrite";
import { Editor } from "@tinymce/tinymce-react";
import conf from "../conf/conf";

function CreatePost() {
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const [value, setValue] = useState(""); // to handle HTML values
  const [text, setText] = useState(""); // to handle plain text

  const obj = {
    title: "",
    featuredImage: ID.unique(),
    status: true,
    content: "",
    userId: user.$id,
  };

  const [blogObj, setBlogObj] = useState(obj);

  // handleChange
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setBlogObj((prev) => {
      return { ...prev, [key]: value };
    });
  }

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createBlog(blogObj));
    dispatch(createFeaturedImage(blogObj?.featuredImage));
    setBlogObj((prev) => {
      return obj;
    }); // reset the blogObj
  }

  return (
    <div className="center-cont">
      <form onSubmit={handleSubmit} className="">
        {/* TITLE */}
        <div className="form-row">
          <FormInput
            placeHolder={"title"}
            extraClass={"blog-title-input"}
            name={"title"}
            handleChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="featuredImage">select image</label>
          <input id="uploader" type="file" accept="image/*" />
        </div>

        <div id="textarea">
          <Editor
            apiKey={conf.tinymceApiKey}
            onEditorChange={(newValue, editor) => {
              setValue(newValue);
              setText(editor.getContent({ format: "text" }));
              setBlogObj((prev) => {
                return { ...prev, content: value };
              });
            }}
            value={value}
            initialValue="write your blog here..."
            init={{
              base_url: "./node_modules/tinymce",
            }}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
