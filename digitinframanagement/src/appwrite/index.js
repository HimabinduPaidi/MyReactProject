import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("692d272400201999cad0");

export const account = new Account(client);



export default client;
