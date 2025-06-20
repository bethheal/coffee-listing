import React, { useEffect, useState } from "react";
import unfilledStar from "../assets/icons/Star.svg";
import filledStar from "../assets/icons/Star_fill.svg";
import axios from "axios";

const COFFEE_LIST_URL =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";

const Coffee = () => {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const res = await axios.get(COFFEE_LIST_URL);
        setCoffeeList(res.data);
      } catch (err) {
        // do nothing
      }
    };
    fetchCoffee();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
  {coffeeList.map((coffee, index) => {
    const starIcon = coffee.votes > 0 ? filledStar : unfilledStar;

    return (
      <div key={index} className="bg-[#1C1C1C] rounded-3xl p-3 w-full max-w-xs mx-auto sm:max-w-none">
        <div className="relative">
          <img
            src={coffee.image}
            alt={coffee.name}
            className="w-full h-[10rem] object-cover rounded-2xl"
          />
          {coffee.popular && (
            <p className="absolute top-2 left-2 bg-yellow-600 text-black px-2 py-1 rounded-md text-xs font-semibold">
              Popular
            </p>
          )}
        </div>

<div className="flex flex-col sm:flex-row justify-between mt-2">
          <div>
            <h2 className="text-white font-medium">{coffee.name}</h2>
            <div className="flex items-center text-xs text-white mt-1">
              <img src={starIcon} alt="star" className="w-4 h-4 mr-1" />
              {coffee.votes > 0 ? (
                <>
                  <span>{coffee.rating}</span>
                  <span className="text-gray-400 ml-1">({coffee.votes} votes)</span>
                </>
              ) : (
                <span className="text-gray-400">No ratings</span>
              )}
            </div>
          </div>

          <div className="text-sm text-white text-right">
    <p className="bg-[#BDE3CC] text-black px-3 py-1 rounded-md inline-block">
              {coffee.price}
            </p>
            {!coffee.available && (
              <div className="text-red-500 text-xs mt-1">Sold Out</div>
            )}
          </div>
        </div>
      </div>
    );
  })}
</div>

  );
};

export default Coffee;

