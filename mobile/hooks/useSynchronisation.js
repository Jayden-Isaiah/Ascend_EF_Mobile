import { useState } from 'react';

export const useSynchronisation = () => {
  const [enCours, setEnCours] = useState(false);
  const [derniereSync, setDerniereSync] = useState(null);

  const synchroniserMaintenant = async () => {
  };

  return { enCours, derniereSync, synchroniserMaintenant };
};
