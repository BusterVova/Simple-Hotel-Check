import "../../App.css";
import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
function MainPage() {
  // const [hotels, setHotels] = useState(null);
  // const [locations, setLocations] = useState(null);

  const options = {
    method: "GET",
    url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search",
    params: {
      checkin_date: "2022-03-26",
      checkout_date: "2022-03-27",
      sort_order: "STAR_RATING_HIGHEST_FIRST",
      destination_id: "1708350",
      adults_number: "1",
      locale: "en_US",
      currency: "USD",
      children_ages: "4,0,15",
      price_min: "10",
      star_rating_ids: "3,4,5",
      accommodation_ids: "20,8,15,5,1",
      price_max: "500",
      page_number: "1",
      theme_ids: "14,27,25",
      amenity_ids: "527,2063",
      guest_rating_min: "4",
    },
    headers: {
      "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
      "x-rapidapi-key": "e25deb649fmsh70beed47192c348p156f24jsn776395354e35",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="main-page">
      <div className="main-page_wrapper">
        <div className="container first">
          <SearchForm />
        </div>
        <div className="container second">2</div>
        <div className="container third">
          <h4 className="favorites-header">Избранное</h4>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
