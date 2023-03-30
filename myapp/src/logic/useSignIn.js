import { ref } from "vue";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import router from 'vue-router'

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  error.value = null;
  isPending.value = true;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    switch (err.code) {
      case "auth/user-not-found":
        err.message = "user not found";
        break;
      case "auth/wrong-password":
        err.message = "password is wrong";
        break;
      default:
        err.message = "some thing went wrong";
    }
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }

  // router.push("/")
}
export function useSignIn() {
  return { error, isPending, signIn };
}
