import React from 'react';
import RotatingCard from '../../Components/RotatingCard/RotatingCard';
import RotatingCardTwo from '../../Components/RotatingCard/RotatingCardTwo';

const About = () => (
  <div className="About">
    <RotatingCard />
    <RotatingCardTwo />
    <div className="About-Center">
      <h1>Hey, I'm Joey</h1>
      <p>I'm a self-taught Front-End Web Developer. </p>
    </div>
    <div className="About-Left">
      <h1>Interests</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ducimus ea facilis perspiciatis, culpa quis non veritatis adipisci harum aspernatur temporibus repellendus necessitatibus porro saepe similique delectus. Facere praesentium consectetur corrupti quam, cupiditate ex eligendi dolore nam iste debitis fugiat. Et possimus hic atque, sapiente ratione ipsum cupiditate facilis in!</p>
    </div>
    <div className="About-Right">
      <h1>Placeholder</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum deserunt maxime ipsa magni, sint quasi blanditiis quos dicta, quia porro quam exercitationem doloribus adipisci molestiae placeat quaerat, voluptatum ea at! Quaerat molestias quos ipsa eveniet? Laboriosam cupiditate cum atque rerum officia culpa, expedita, ducimus eaque fugiat iure animi illum alias!</p>
    </div>
  </div>
);

export default About;