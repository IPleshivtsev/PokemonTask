import { LoadingDiv, WaveDiv } from "./styled";

export function Loading() {
  return (
    <LoadingDiv>
      <WaveDiv $animationDelay="0.1s" />
      <WaveDiv $animationDelay="0.2s" />
      <WaveDiv $animationDelay="0.3s" />
      <WaveDiv $animationDelay="0.4s" />
      <WaveDiv $animationDelay="0.5s" />
      <WaveDiv $animationDelay="0.6s" />
      <WaveDiv $animationDelay="0.7s" />
      <WaveDiv $animationDelay="0.8s" />
      <WaveDiv $animationDelay="0.9s" />
      <WaveDiv $animationDelay="1s" />
    </LoadingDiv>
  );
}
