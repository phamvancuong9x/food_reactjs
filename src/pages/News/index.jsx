import Breadcrumbs from "../../components/Breadcrumbs";
import NewContent from "./components/NewContent";
import "./styles.scss";

function News() {
  return (
    <>
      <Breadcrumbs title={"TIN TỨC"} className="breadcrumbs__content-news" />
      <NewContent />
    </>
  );
}

export default News;
