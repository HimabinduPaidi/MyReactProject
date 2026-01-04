import { account } from "../appwrite/index";

export async function logout() {
  try {
    await account.deleteSession("current"); // delete current Appwrite session
    localStorage.removeItem("loginCreds");  // clear saved credentials
    window.location.href = "/login";        // redirect to login page
  } catch (err) {
    console.error("Logout failed:", err.message);
    alert("Logout failed. Try again.");
  }
}
