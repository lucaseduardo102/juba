import { useState } from "react";
import { userService } from "../userService";
import { isAxiosError } from "axios";

export function useUserSignUp() {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);

  async function signIn(email, password) {
    try {
      setError(null);
      setErrorStatus(null);
      setLoading(true);
      const response = await userService.signUp(email, password);
      setUser(response);
    } catch (er) {
      setError(true);
      if (isAxiosError(er)) {
        setError(er.status);
      }
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
    errorStatus,
  };
}