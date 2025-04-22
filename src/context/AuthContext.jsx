import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userType, setUserType] = useState(
    localStorage.getItem("user_type") || null
  );

  const login = (accessToken, userType, navigate) => {
    localStorage.setItem("token", accessToken);
    localStorage.setItem("user_type", userType);
    setToken(accessToken);
    setUserType(userType);
    console.log(userType);

    if (userType === "employer") {
      navigate("/wlcmEnterp");
    } else if (userType === "labour") {
      navigate("/WlcmUser"); // Redirect to labour dashboard
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    setToken(null);
    setUserType(null);
    navigate("/SigninPage");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const stotredUserType = localStorage.getItem("user_type");

    if (storedToken && stotredUserType) {
      setToken(storedToken);
      setUserType(stotredUserType);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
