import React, { useState } from "react";
import DefaultImage from '../assets/uploadPicture.png'

// Define a functional component named UploadAndDisplayImage
const ImageUpload = () => {
  // Define a state variable to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Return the JSX for rendering
  return (
    <div>
      {selectedImage&&(
        <>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
        </>
      )}
      {/* Input element to select an image file */}
      <input
        type="file"
        name="myImage"
        accept=".jpg, .jpeg, .png"
        src={DefaultImage}
        hidden={selectedImage}
        // Event handler to capture file selection and update the state
        onChange={(event) => {
          console.log(event.target.files[0]); // Log the selected file
          setSelectedImage(event.target.files[0]); // Update the state with the selected file
        }}
      />
    </div>
  );
};

// Export the UploadAndDisplayImage component as default
export default ImageUpload;