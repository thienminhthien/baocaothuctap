import { ref } from "vue";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const error = ref(null);

async function logOut() {
  error.value = null;

  try {
    signOut(auth);
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}
export function useLogout() {
  return { error, logOut };
}
