import "./About.css";
import firstLitter from "./assets/first-litter.jpg";

function About() {
  return (
    <div className="container">
      <img
        src={firstLitter}
        alt="Gabriela with the first picoia family litter"
        className="photo"
      />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, temporibus neque cum a dolor fugiat iusto reprehenderit itaque exercitationem eaque quasi harum fugit earum atque eius explicabo suscipit tempora enim.</p>
    </div>
  );
}

export default About;
