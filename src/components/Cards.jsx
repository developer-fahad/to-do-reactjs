import React, { useEffect, useState } from "react";
import client from "../assets/client.jpg";
import profile from "../assets/profile.png";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import {
  FaLayerGroup,
  FaRegCalendarDays,
  FaRegComments,
} from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState([]);

  // Function to fetch URLs from the backend
  const fetchUrls = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/get-urls");

      // Check if the response is successful
      if (response.data.success) {
        setUrls(response.data.urls); // Update the state with fetched URLs
      } else {
        toast.error("Failed to fetch URLs.");
      }
    } catch (error) {
      console.error("Error fetching URLs:", error);
      toast.error("Error fetching URLs from the server.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch URLs when the component mounts
  useEffect(() => {
    fetchUrls();
  }, []);

  console.log(urls);

  // ImgBB API key (replace with your actual API key)
  const IMGBB_API_KEY = import.meta.env.VITE_IMG_HOSTING_API_KEY;
  // console.log(selectedFiles);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const uploadFiles = async () => {
    setLoading(true);
    try {
      const generateUniqueHexCode = () => {
        const hexCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return hexCode;
      };
  
      const uploadedUrls = await Promise.all(
        selectedFiles.map(async (file) => {
          const formData = new FormData();
          formData.append("image", file);

          try {
            const response = await axios.post(
              `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            );

            if (response.data.success) {
              console.log(response.data.data); // Log the response for debugging
              return `${response.data.data.url}${generateUniqueHexCode()}`; // Just return the URL directly
            } else {
              console.error("Upload failed:", response.data);
              return null;
            }
          } catch (error) {
            console.error("Error uploading file to ImgBB:", error);
            return null;
          }
        })
      );
      console.log(uploadedUrls);

      const res = await axios.put("http://localhost:5000/img-urls", {
        urls: uploadedUrls,
      });
      console.log(res.data);
      if (res.data.success) {
        document.getElementById("file-input").value = "";
        setSelectedFiles([]);

        toast.success("successfully Added");
        setIsModalOpen(!isModalOpen);
      }
      console.log("URLs saved successfully:");
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-2 mb-4 rounded-lg space-y-4 bg-white">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <img className="h-8 w-8 rounded-full" src={profile} alt="" />
            <p className="font-semibold">Client Name</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="h-8 w-8 rounded-full" src={client} alt="" />
            <p className="font-semibold">Sadik Istiak</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center px-1.5">
            <FaLayerGroup className="text-xl text-gray-700" />
            <p className="font-lato font-medium text-gray-700">
              {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore suscipit soluta sed adipisci quo reiciendis qui veniam iure animi consectetur!".slice(
                0,
                20
              )}
              ...
            </p>
          </div>
          <div className="flex gap-1 items-center bg-gray-200 p-1 rounded-lg">
            <FaCalendarAlt className="text-xl text-gray-700" />
            <p className="font-lato">1/2</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center font-bold text-gray-700">
        <div className="flex justify-between items-center">
          <img className="h-8 w-8 rounded-full" src={men} alt="" />
        </div>
        <div className="flex gap-1 items-center">
          <img className="h-8 w-8 rounded-full" src={women} alt="" />
        </div>
        <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-200">
          <p className="font-lato rounded-full text-center">12+</p>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <FaRegComments className="text-xl text-gray-700" />
            <p className="font-lato">15</p>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <MdAttachFile
              className="text-xl text-gray-700 cursor-pointer"
              onClick={toggleModal}
            />
            <p className="font-lato">{urls?.length}</p>
          </div>
          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Attachments</h2>
                {/* Upload Button */}
                <input
                  id="file-input"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="block w-full mb-4 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />

                {/* Display Selected Files */}
                <div className="max-h-40 overflow-y-auto border-t pt-2">
                  <h3 className="font-semibold mb-2">Selected Files:</h3>
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between p-2 border-b"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            className="w-10 h-10 object-cover rounded"
                          />
                          <span>{file.name}</span>
                        </div>
                        {/* <span className="text-gray-500 text-xs">
                          {file.name.split(".").pop().toUpperCase()}
                        </span> */}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Upload to ImgBB Button */}
                <button
                  onClick={uploadFiles}
                  className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4 w-full ${
                    selectedFiles.length < 1 && "bg-gray-500 hover:bg-gray-500 text-gray-600"
                  }`}
                  disabled={loading || selectedFiles.length < 1}
                >
                  {loading ? "Uploading..." : "Upload to ImgBB"}
                </button>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={toggleModal}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="flex gap-1 items-center">
            <FaRegCalendarDays className="text-xl text-gray-700" />
            <p className="font-lato">{`${new Date(Date.now()).getDate()}-${
              new Date(Date.now()).getMonth() + 1
            }-${new Date(Date.now()).getFullYear()}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
