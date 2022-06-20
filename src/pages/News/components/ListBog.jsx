import React, { useEffect, useState } from "react";
import homeApi from "../../../api/homeApi";
import BlogItem from "./BlogItem";

function ListBog({ blogList }) {
  console.log(blogList);
  return (
    <div className="list-blogs">
      {blogList?.map((item) => {
        return <BlogItem key={item.id} blogData={item} />;
      })}
    </div>
  );
}

export default ListBog;
