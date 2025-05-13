import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./parallax-banner.css";

export function ParallaxBanner() {
  return (
    <>
      <Parallax className="parallax-container" pages={2}>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation-layer" id="l1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="animation-layer" id="l2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation-layer" id="l3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation-layer" id="l4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation-layer" id="l5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation-layer" id="l6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation-layer" id="l7"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div className="animation-layer" id="l8"></div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
