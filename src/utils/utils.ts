export const generateRandomNumber = ({
  max,
  min,
}: {
  max: number;
  min: number;
}) => Math.random() * (max - min) + min;
