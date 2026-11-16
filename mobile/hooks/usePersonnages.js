import { useState } from 'react';

export const usePersonnages = (campagneId) => {
  const [personnages, setPersonnages] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  const recharger = async () => {
  };

  return { personnages, chargement, erreur, recharger };
};
