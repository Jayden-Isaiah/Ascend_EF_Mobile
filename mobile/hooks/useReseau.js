import { useNetInfo } from '@react-native-community/netinfo';

export const useReseau = () => {
  const { isConnected } = useNetInfo();

  return { horsLigne: isConnected === false };
};
