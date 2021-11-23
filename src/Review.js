import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // state set to zero in order to display the first person in the array
  const [index, setIndex] = useState(0);
  // deconstructing the people array and setting it to display a different person (by index) each time
  const { name, job, image, text } = people[index]
  // creating a container that displays the image of the person at index 0
  return (<article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    {/* displaying the name, job & text from the people array */}
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    {/* creating the button elements */}
    <div className="button-container">
      <button className="prev-btn">
        <FaChevronLeft />
      </button>
      <button className="prev-btn">
        <FaChevronRight />
      </button>
    </div>
    <button className="random-btn">surprise me</button>
  </article>
  );
};

export default Review;
