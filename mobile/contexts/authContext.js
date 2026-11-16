import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [chargement, setChargement] = useState(true);

  const restaurerSession = async () => {
  };

  const connecter = async (courriel, motDePasse) => {
  };

  const deconnecter = async () => {
  };

  return (
    <AuthContext.Provider value={{ session, chargement, restaurerSession, connecter, deconnecter }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
