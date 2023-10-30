import { useState } from "react";
import { userService } from "../userService";

export function useUserSignIn() {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

  async function signIn(email, password) {
    try {
      setError(null);
      setLoading(true);
      const response = await userService.signIn(email, password);
      setUser(response);
    } catch (er) {
      setError(true);
      console.log(er);
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    signIn,
    isLoading,
    isError,
  };
}
