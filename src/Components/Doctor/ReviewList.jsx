import React from "react";
import coverImage from "../../assets/Images/istockphoto-1 (17).jpg";
import "../../Style/customScrollbar.css";

// Review data (for demonstration)
const reviews = [
  {
    id: 1,
    name: "Theron Trump",
    timeAgo: "2 day ago",
    reviewText:
      "Vestibulum tincidunt sit amet sapien et eleifend. Fusce pretium libero enim, nec lacinia est ultrices id.",
    rating: 4,
    image: coverImage,
  },
  {
    id: 2,
    name: "John Doe",
    timeAgo: "5 day ago",
    reviewText:
      "Praesent venenatis viverra turpis quis varius. Nullam ullamcorper congue urna, in sodales eros placerat non.",
    rating: 5,
    image: coverImage,
  },
  {
    id: 3,
    name: "Tyler Mark",
    timeAgo: "7 day ago",
    reviewText:
      "Pellentesque a pretium orci. In hac habitasse platea dictumst. Nulla mattis odio enim.",
    rating: 5,
    image: coverImage,
  },
  {
  id: 4,
    name: "Theron Trump",
    timeAgo: "2 day ago",
    reviewText:
      "Vestibulum tincidunt sit amet sapien et eleifend. Fusce pretium libero enim, nec lacinia est ultrices id.",
    rating: 3,
    image: coverImage,
  },
  {
    id: 5,
    name: "John Doe",
    timeAgo: "5 day ago",
    reviewText:
      "Praesent venenatis viverra turpis quis varius. Nullam ullamcorper congue urna, in sodales eros placerat non.",
    rating: 4,
    image: coverImage,
  },
  {
    id: 7,
    name: "Tyler Mark",
    timeAgo: "7 day ago",
    reviewText:
      "Pellentesque a pretium orci. In hac habitasse platea dictumst. Nulla mattis odio enim.",
    rating: 2,
    image: coverImage,
  },
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={index < rating ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354l2.122 4.297 4.741.675-3.437 3.348.812 4.731-4.238-2.243-4.238 2.243.812-4.731-3.437-3.348 4.741-.675L12 4.354z"
            />
          </svg>
        ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="flex items-start justify-between border-b py-4">
      <div className="flex">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg">{review.name}</h4>
          <p className="text-gray-500 text-md">{review.timeAgo}</p>
          <p className="text-gray-700 text-md mt-1">{review.reviewText}</p>
        </div>
      </div>
      <StarRating rating={review.rating} />
    </div>
  );
};

const ReviewList = () => {
  return (
    <div className=" rounded-lg py-6">
      <div className="px-8 md:px-6 pb-4 ">
        <p className="text-xl font-[inter]">Recent Review</p>
      </div>
      <hr />
      <div className="px-10 scrollable-div h-[440px] overflow-auto">
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
      <div className="px-6">
        <button className="w-[100%] mt-4 bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition">
          See More Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewList;
