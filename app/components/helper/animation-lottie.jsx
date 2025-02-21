"use client";

import dynamic from "next/dynamic";

// Usamos dynamic para carregar o componente somente no cliente
const LottieNoSSR = dynamic(() => import("lottie-react"), {
  ssr: false, // Não renderiza no lado do servidor
});

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%",
    },
  };

  return <LottieNoSSR {...defaultOptions} />;
};

export default AnimationLottie;
