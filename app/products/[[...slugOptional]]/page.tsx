import React from "react";

interface Props {
  params: { slugOptional: string[] };
  searchParams: { sortOrder: string };
}

const ProductsPage = ({
  params: { slugOptional },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductsPage {slugOptional} query:{sortOrder}
    </div>
  );
};

export default ProductsPage;
