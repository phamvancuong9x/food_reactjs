import { Breadcrumbs } from "@mui/material";
import React from "react";
import NewDetailContent from "./component/NewDetailContent";

function NewDetail() {
  return (
    <>
      <Breadcrumbs title={"TIN TỨC"} className="breadcrumbs__content-news" />
      <NewDetailContent />
    </>
  );
}

export default NewDetail;
