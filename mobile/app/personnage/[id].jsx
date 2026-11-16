import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function DetailPersonnage() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Détail du personnage {id}</Text>
    </View>
  );
}
