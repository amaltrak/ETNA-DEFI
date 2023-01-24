import React, { useState, useEffect } from "react";
import Navbarr from "../components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const melee = () => {
  const [login, setLogin] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    setLogin(localStorage.getItem("login"));
  }, []);

  const student = {
    name: "Diego PLAFORTEA",
    photoUrl: `https://auth.etna-alternance.net/api/users/plafor_d/photo`,
  };    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setTags([...tags, newTag]);
      setNewTag("");
    };

  return (
    <>
      <Navbarr />
      <div className="title">
        <h1>Mêlées</h1>
      </div>
      <div className="photo">
        <img src={student.photoUrl} alt="testimage" />
      </div>
        <div className="name">
            <h2>{student.name}</h2>
        </div>
      <div className="left-part">
        <div className="cadre-marks">
          <div className="marks">
            <h4>DERNIERES NOTES</h4>
            <p></p>
            <p>12/20</p>
            <p>19/20</p>
          </div>
        </div>
        <div className="cadre-commentaire">
          <div className="commentaire">
            <h4>COMMENTAIRE</h4>
            <form>
              <textarea
                id="freeform"
                name="freeform"
                rows="4"
                cols="60"
              ></textarea>
              <br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="cadre-tags">
          <div className="tags">
            <h4>TAGS</h4>
    <div className="Tagname">
      <form onSubmit={handleSubmit}>
        <label>
          Tag name : 
          <input
            type="text"
            value={newTag}
            onChange={(event) => setNewTag(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="melee-part">
          <h3>Notes</h3>
          <form>
            <textarea
              id="freeform"
              name="freeform"
              rows="24"
              cols="130"
            ></textarea>
            <br></br>
          </form>
        </div>
        <button className="btn-gmail">
          <a
            href="https://mail.google.com/mail/?view=cm&to=plafor_d@etna-alternance.net"
            target="_blank"
          >
            Contacter l'élève
          </a>
        </button>
      </div>
    </>
  );
};

export default melee;
