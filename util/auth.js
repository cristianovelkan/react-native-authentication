import axios from "axios";
import { AUTH_URL, AUTH_KEY } from "../config";

export async function authenticate(
  email,
  password,
  mode = "signInWithPassword"
) {
  try {
    console.log(`${AUTH_URL}:${mode}?key=${AUTH_KEY}`);
    const response = await axios.post(`${AUTH_URL}:${mode}?key=${AUTH_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    console.log(response.data);
  } catch (err) {
    console.log(err.response);
  }
}

export async function createUser(email, password) {
  try {
    await authenticate(email, password, "signUp");
  } catch (err) {
    console.log(err);
  }
}

export async function login(email, password) {
  try {
    await authenticate(email, password);
  } catch (err) {
    console.log(err);
  }
}
