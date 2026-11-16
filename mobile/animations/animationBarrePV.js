import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export const useAnimationBarrePV = (ratio) => {
  const progression = useSharedValue(ratio);

  const styleRemplissage = useAnimatedStyle(() => ({}));

  return { styleRemplissage };
};
