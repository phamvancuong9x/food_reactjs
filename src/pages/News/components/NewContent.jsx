import { useEffect, useState } from "react";
import newApi from "../../../api/newsApi";
import Loading from "../../../components/Loading";
import CategoryBlog from "./CategoryBlog";
import ListBog from "./ListBog";

function NewContent() {
  const [loading, setLoading] = useState(true);
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await newApi.getAll();
      setBlogList(data);
      setLoading(false);
    })();
  }, []);
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-3 c-0">
          <CategoryBlog />
        </div>
        <div className="col l-9">
          {loading && <Loading />}
          {!loading && <ListBog blogList={blogList} />}
        </div>
      </div>
    </div>
  );
}

export default NewContent;
