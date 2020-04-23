import React, { useState } from "react";

export default function UploadProfilePic() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (event) => {
    const files = event.target.files;

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "cancerleo");
    setLoading(true);

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/cancerleo/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await response.json();

    console.log(file.secure_url);

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="App">
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: "200px" }} />
      )}
    </div>
  );
}
