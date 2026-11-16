import { Tabs } from 'expo-router';

export default function OngletsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="resume" options={{ title: 'Résumé' }} />
      <Tabs.Screen name="personnages" options={{ title: 'Personnages' }} />
      <Tabs.Screen name="parametres" options={{ title: 'Paramètres' }} />
    </Tabs>
  );
}
