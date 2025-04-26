import AuthProvider from "./AuthProvider";

const RootProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default RootProvider;
