import { Link } from 'react-router-dom'
import './About.css';
import myPhoto from './myPhoto.png';

/**
 * A React component that represents the About page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1 className="header">About</h1>
      <p className="aboutMe">I have always been fascinated by the digital world and the art of coding. As an NYU
        computer science student, I have a keen interest in understanding the complexities of the
        field and continually strive to improve and excel. From building my first computer in fifth
        grade to taking computer science classes since high school, my passion for technology has
        only grown over the years. My favorite programming language is Python, and I have extensively
        used it in my academic and personal projects. I once developed a Point of Sale (POS) system
        that my father's restaurants use, which has been highly successful in streamlining their
        operations. 
        <br></br>
        <br></br>
        Asides from my academic pursuits, I have a few hobbies that I enjoy. I love capturing moments
        through my camera lens and have a passion for photography. I'm also a car enthusiast, and my
        favorite car is the BMW M2, which I admire for its style and performance. Despite my busy
        schedule, I always make time for the things that I enjoy.
      </p>
      
      <img src={myPhoto} alt="My Photo" className="myPhoto"/>
       
    </>
  )
}

// make this component available to be imported into any other file
export default About
