// src/components/PostCreator.tsx
import React, { useState } from "react";

const PostCreator = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handlePost = () => {
    alert("Posted successfully!");
    setText("");
    setImage(null);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full border rounded-md p-2 mb-4 resize-none"
        rows={3}
      />
      <input
        type="file"
        onChange={(e) => setImage(URL.createObjectURL(e.target.files?.[0] || new Blob()))}
        className="mb-4"
      />
      {image && <img src={image} alt="Preview" className="w-full h-48 object-cover mb-4 rounded-lg" />}
      <button onClick={handlePost} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Post
      </button>
    </div>
  );
};

export default PostCreator;
