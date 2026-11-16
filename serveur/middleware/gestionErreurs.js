const gestionErreurs = (err, req, res, next) => {
  res.status(500).json({ erreur: 'Erreur interne du serveur' });
};

export default gestionErreurs;
