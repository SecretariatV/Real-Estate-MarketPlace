import { DocumentData } from "firebase/firestore";
import { Link } from "react-router-dom";

interface ListingItemProps {
  id: string;
  listing: DocumentData;
  onDelete?: any;
  onEdit?: any;
}

const ListingItem = ({ listing, id, onDelete, onEdit }: ListingItemProps) => {
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        />
      </Link>
    </li>
  );
};

export default ListingItem;
