import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // state set to zero in order to display the first person in the array
  const [index, setIndex] = useState(0);

  // deconstructing the people array and setting it to display a different person (by index) each time
  const { name, job, image, text } = people[index]

  //setting up error handling to ensure that when the index of the last person is reached, we cycle back to the beginning (and vice versa) instead. 
  const checkNumber = (number) => {
    // if number is greater than the index of the last number in the array return 0
    if (number > people.length - 1) {
      return 0
    }
    // if number is less than zero return the last item in the array
    if (number < 0) {
      return people.length - 1
    }
    // otherwise return the number
    return number;
  }

  // allows for the index to cycle to the next person (index + 1)
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
      ;
    });
  };

  // allows for the index to cycle to the previous person (index - 1)
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // using math.floor and math.random to randomize the person (index) returned 
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    // error handling to prevent the same person from displaying back-to-back
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    // uses the checkNumber function to set the index to a number that is NOT outside of the array
    setIndex(checkNumber(randomNumber))
  }

  return (
    // creating a container that displays the image of the person at index 0
    <article className="review">
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
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>surprise me</button>
    </article>
  );
};

export default Review;
