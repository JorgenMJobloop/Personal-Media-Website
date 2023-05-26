/**
  Code snippet from https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility
 */

let motionQuery = matchMedia("(prefers-reduced-motion");

const handleReduceMotionChanged = () => {
  if (motionQuery.matches)
    //reduced behaviour;
    motionQuery.addEventListener(handleReduceMotionChanged);
  handleReduceMotionChanged();
};

console.log("Running media query failsafe script");
