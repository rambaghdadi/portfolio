export const interpolatePath = (
  initial: string,
  target: string,
  progress: number,
): string => {
  const parsePath = (path: string): string[] =>
    path.match(/([MLQ]\s*[^MLQ]*)/g) || [];
  const initialSegments = parsePath(initial);
  const targetSegments = parsePath(target);
  return initialSegments
    .map((segment, i) => {
      const initialPoints = segment.match(/-?\d+(\.\d+)?/g)?.map(Number) || [];
      const targetPoints =
        targetSegments[i]?.match(/-?\d+(\.\d+)?/g)?.map(Number) || [];
      const interpolatedPoints = initialPoints.map(
        (point, j) => point + (targetPoints[j] - point) * progress,
      );
      return `${segment[0]}${interpolatedPoints.join(" ")}`;
    })
    .join(" ");
};

export function transform(
  input: number,
  inputRange: number[],
  outputRange: number[],
  clamp = true,
) {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  const ratio = (input - inputMin) / (inputMax - inputMin);
  let result = ratio * (outputMax - outputMin) + outputMin;

  if (clamp) {
    result = Math.max(
      Math.min(result, Math.max(outputMin, outputMax)),
      Math.min(outputMin, outputMax),
    );
  }

  return result;
}
