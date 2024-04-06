import React from "react";

const MyReview = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>

      {/* Review 1 */}
      <div className="mb-4">
        <p className="text-gray-800">
          The app is really useful for managing patent appointments. However, I
          would love to see more features added in the future updates.
        </p>
      </div>

      {/* Review 2 */}
      <div className="mb-4">
        <p className="text-gray-800">
          I absolutely love this app! It's incredibly user-friendly and has made
          managing my patent appointments a breeze.
        </p>
      </div>

      {/* Review 3 */}
      <div className="mb-4">
        <p className="text-gray-800">
          Good app, but could use some improvements in terms of performance and
          responsiveness.
        </p>
      </div>

      {/* Review 4 */}
      <div>
        <p className="text-gray-800">
          I've been using this app for a while now, and I must say it's been a
          game-changer for managing patent appointments efficiently!
        </p>
      </div>
    </div>
  );
};

export default MyReview;
