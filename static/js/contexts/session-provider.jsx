import { useEffect, useState } from "react";
import { commitMutation, fetchQuery } from "react-relay";
import { SessionContext } from "./session-context";
import { GetCurrentUser } from "../../graphql/queries";
import { InvalidateSession } from "../../graphql/mutation";
import RelayEnvironment from "../../graphql/environment";

export function SessionProvider({ children }) {
  const [user, setUser] = useState(undefined);

  function isLogged() {
    return user != null;
  }

  async function logout() {
    commitMutation(RelayEnvironment, {
      mutation: InvalidateSession,
      onCompleted: () => {
        localStorage.removeItem("token");
        setUser(null);
      },
    });
  }

  async function login(token = null) {
    if (token) {
      localStorage.setItem("token", token);
    }

    const { getCurrentUser } = await fetchQuery(
      RelayEnvironment,
      GetCurrentUser
    ).toPromise();

    setUser(getCurrentUser);
  }

  useEffect(() => {
    const hasToken = localStorage.getItem("token") != null;

    if (hasToken) {
      login().catch(() => {
        setUser(null);
      });
    } else {
      setUser(null);
    }
  }, []);

  return (
    <SessionContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        logout,
        login,
      }}
    >
      {user !== undefined && children}
    </SessionContext.Provider>
  );
}