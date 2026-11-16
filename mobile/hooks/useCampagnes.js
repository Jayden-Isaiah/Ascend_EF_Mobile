import { useState } from 'react';

export const useCampagnes = () => {
  const [campagnes, setCampagnes] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  const recharger = async () => {
  };

  return { campagnes, chargement, erreur, recharger };
};
