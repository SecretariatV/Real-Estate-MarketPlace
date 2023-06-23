import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === "rent"
            ? "Places for rent"
            : "Places for sale"}
        </p>
      </header>
    </div>
  );
};

export default Category;
