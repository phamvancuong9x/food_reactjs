import { Skeleton } from "@mui/material";
import "./styles.scss";
export function ProductListSkeleton({ quantity = 3 }) {
  console.log(quantity);
  return Array(quantity)
    .fill(null)
    .map((item, i) => {
      return (
        <li key={i} className="category-products__item col-6 col-sm-4">
          <div className=" category-products__item-skeleton">
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={"277px"}
              style={{
                marginBottom: 10,
                marginLeft: 12,
                marginRight: 12,
              }}
            />
            <Skeleton
              animation="wave"
              variant="text"
              width={"30%"}
              style={{ margin: "auto" }}
            />
            <Skeleton
              animation="wave"
              variant="text"
              width={"80%"}
              style={{ margin: "auto", marginTop: 10 }}
            />
          </div>
        </li>
      );
    });
}
