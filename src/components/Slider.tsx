import { useState } from "react";
import { Listings } from "../models/Listings";
import Spinner from "./Spinner";

const Slider = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState<Listings[]>([]);

  if (loading) {
    return <Spinner />;
  }

  if (listings.length === 0) {
    return <></>;
  }

  return listings && listings.length > 0 ? <></> : <></>;
};

export default Slider;
