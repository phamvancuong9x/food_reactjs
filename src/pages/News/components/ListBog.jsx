import BlogItem from "./BlogItem";

function ListBog({ blogList }) {
  return (
    <div className="list-blogs">
      {blogList?.map((item) => {
        return <BlogItem key={item.id} blogData={item} />;
      })}
    </div>
  );
}

export default ListBog;
