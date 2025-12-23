import { Client, Account } from "appwrite";
import { APPWRITE_API_ENDPOINT, APPWRITE_API_PROJECT_ID } from "../utilis/appwrite/constants";

const appwriteClient = new Client()
    .setEndpoint(APPWRITE_API_ENDPOINT) // Your API Endpoint
    .setProject(APPWRITE_API_PROJECT_ID); // Your project ID

export default appwriteClient;