import axios from 'axios';
import { useState } from 'react';


function Photo() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'rfycjqd0'); // replace with your own upload preset name
    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dlbenbmke/image/upload', formData);
      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      
      {imageUrl && (
        <img src={imageUrl} className="img-fluid" alt="Uploaded file" width="200px" height="300px"/>
      )}
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Photo;