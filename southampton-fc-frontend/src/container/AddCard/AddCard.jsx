import "./AddCard.scss";
import Form from "../../component/Form/Form";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/Linkedin-Logo.png";

const AddCard = ({ players }) => {
  return (
    <div className="addCard">
      <p className="addCard__official-site">
        Official website:
        <a
          className="addCard__styling"
          href="https://www.southamptonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
        >
          www.southamptonfc.com
        </a>
      </p>
      <div className="addCard__links">
        <a href="https://github.com/awo-ali/full-stack-project">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/awo-ali/">
          <img className="addCard__linkedin" src={linkedin} alt="linkedin" />
        </a>
      </div>
      <Form players={players} />
    </div>
  );
};

export default AddCard;
