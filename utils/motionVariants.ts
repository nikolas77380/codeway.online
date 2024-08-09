import { duration } from "@mui/material";

export function scrollDown(delay?: number, duration?: number) {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}
export function scrollUp(delay?: number, duration?: number) {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function scrollRightToLeft(delay: number, duration: number) {
  return {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}
export function scrollLeftToRight(delay: number, duration: number) {
  return {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function contactUsZoomIn(
  delay: number,
  duration: number,
  ease: Array<number>
) {
  return {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: ease,
      },
    },
  };
}

export function aboutUsPageScrollUp(delay?: number, duration?: number) {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function aboutUsPageScroLeftToRight(delay?: number, duration?: number) {
  return {
    hidden: { x: -1000, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function aboutUsPageImageZoom() {
  return {
    hidden: { scale: 0.2, opacity: 0 },
    visible: {
      x: [50, 150, 0],
      opacity: 1,
      scale: 1,
      whileHover: { scale: 1.2 },
      transition: {
        opacity: {
          delay: 0.5,
          duration: 1,
          ease: "ease",
        },
        scale: {
          delay: 0.5,
          duration: 1,
          ease: "easeIn",
        },
        x: {
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  };
}

export function ourValuescrollDown() {
  return {
    hidden: { y: -300, x: -510, opacity: 0 },
    visible: {
      y: 0,
      x: -510,
      opacity: 1,
      transition: {
        delay: 0,
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
      },
      active: {
        position: "absolute",
      },
    },
  };
}

export function ourValuescrollUp() {
  return {
    hidden: { y: 300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
}

export function ourValuescrollUpv2() {
  return {
    hidden: { y: 300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };
}

export function ourValueScrollRightToLeft(
  x?: number,
  opacity?: number,
  delay?: number,
  duration?: number
) {
  return {
    hidden: { x: x, opacity: opacity },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function ourValueMobileScrollRightToLeft(
  x?: number,
  opacity?: number,
  delay?: number,
  duration?: number
) {
  return {
    hidden: { x: x, opacity: opacity },
    visible: {
      x: -100,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function ourValueScrollLeftToRight(
  x?: number,
  opacity?: number,
  delay?: number,
  duration?: number
) {
  return {
    hidden: { x: x, opacity: opacity },
    visible: {
      x: -510,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
      active: {
        position: "absolute",
      },
    },
  };
}

export function teamScrollDown(delay?: number, duration?: number) {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function teamCardsZoomIn() {
  return {
    hidden: {
      clipPath: "circle(0% at 50% 50%)",
      opacity: 0,
    },
    visible: {
      clipPath: "circle(100% at 50% 50%)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 300,
        duration: 2,
      },
    },
  };
}

export function contactUPagesscrollRightToLeft(
  delay?: number,
  duration?: number
) {
  return {
    hidden: { x: 1000, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function courseIdHeaderScrollUp(
  y?: number,
  delay?: number,
  duration?: number
) {
  return {
    hidden: { y: y, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
}

export function contactInfoContainer() {
  return {
    hidden: { opacity: 0, x: "-25vw" },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
}
