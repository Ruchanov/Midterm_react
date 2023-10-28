import React, { useState } from "react";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(`post-${id}`, JSON.stringify({
      title,
      content,
    }));

    setId(id + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Заголовок</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Содержание</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Создать пост</button>
    </form>
  );
}
