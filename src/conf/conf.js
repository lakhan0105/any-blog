const conf = {
  appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_URL),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  tinymceApiKey: import.meta.env.VITE_TINYMCE_API_KEY,
};

import tinymce from "tinymce";
const script = document.createElement("script");
script.src = `https://cdn.tiny.cloud/1/${conf.tinymceApiKey}/tinymce/7/tinymce.min.js`;
script.referrerPolicy = "origin";
document.body.appendChild(script);

export default conf;
