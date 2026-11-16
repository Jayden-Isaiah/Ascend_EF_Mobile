import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export const useAnimationDe = () => {
  const rotation = useSharedValue(0);
  const echelle = useSharedValue(1);

  const lancerAnimation = () => {
  };

  const styleDe = useAnimatedStyle(() => ({}));

  return { styleDe, lancerAnimation };
};
