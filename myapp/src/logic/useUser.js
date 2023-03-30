import { auth } from "../config/firebase";
import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser);
onAuthStateChanged(auth, (_user) => {
  if (_user) user.value = _user;
});
function getUser() {
  return { user };
}
export function useUser() {
  return {
    getUser,
  };
}
