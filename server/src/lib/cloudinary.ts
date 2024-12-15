import { v2 as cloud } from "cloudinary";

import dotenv from "dotenv";
dotenv.config();

const cloudinary = cloud.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;