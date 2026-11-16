import bcrypt from 'bcrypt';
import { prisma } from '../src/bd';

async function main() {
  const motDePasseHash = await bcrypt.hash('demo1234', 10);
  await prisma.utilisateur.upsert({
    where: { courriel: 'demo@grimoire.ca' },
    update: {},
    create: {
      courriel: 'demo@grimoire.ca',
      motDePasseHash,
      nomAffiche: 'Joueur démo',
      preference: { create: { theme: 'PARCHEMIN' } },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (erreur) => {
    console.error(erreur);
    await prisma.$disconnect();
    process.exit(1);
  });
