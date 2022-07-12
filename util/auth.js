import axios from "axios";
import { AUTH_URL, AUTH_KEY } from "../config";

export async function createUser(email, password) {
  try {
    const response = await axios.post(`${AUTH_URL}:signUp?key=${AUTH_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  } catch (err) {
    console.log(err);
  }
}
