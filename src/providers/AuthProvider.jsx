import { AuthContext } from "../context";

const AuthProvider = ({ children }) => {
  const isAuthenticate = false;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
