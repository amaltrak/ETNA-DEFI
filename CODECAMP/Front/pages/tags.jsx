import React, { useState } from "react";

const TagList = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTags([...tags, newTag]);
    setNewTag("");
  };

  return (
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
  );
};

export default TagList;
