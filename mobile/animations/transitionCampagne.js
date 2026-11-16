import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export const useTransitionCampagne = () => {
  const echelle = useSharedValue(1);
  const opacite = useSharedValue(1);

  const lancerTransition = (surFin) => {
  };

  const styleAvatar = useAnimatedStyle(() => ({}));

  return { styleAvatar, lancerTransition };
};
