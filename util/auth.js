import axios from "axios";
import { AUTH_URL, AUTH_KEY } from "../config";

export async function authenticate(
  email,
  password,
  mode = "signInWithPassword"
) {
  try {
    const response = await axios.post(`${AUTH_URL}:${mode}?key=${AUTH_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    const token = response.data.idToken;

    return token;
  } catch (err) {
    console.log(err.response);
  }
}

export function createUser(email, password) {
  return authenticate(email, password, "signUp");
}

export function login(email, password) {
  return authenticate(email, password);
}
