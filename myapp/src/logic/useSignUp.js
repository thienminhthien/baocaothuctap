import { ref } from "vue";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullName) {
  error.value = null;
  isPending.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: fullName });
    return res;
  } catch (err) {
    switch (err.code) {
      case "auth/email-already-in-use":
        err.message = "Email is already in use!";
        break;
      case "auth/invalid-email":
        err.message = "Invalid email!";
        break;
      case "auth/operation-not-allowed":
        err.message = "Operatino not allowed!";
        break;
      case "auth/weak-password":
        err.message = "Weak password!";
        break;
      default:
        err.message = "Some thing went wrong!";
    }
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignUp() {
  return { error, isPending, signUp };
}
