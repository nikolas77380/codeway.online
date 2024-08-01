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

export function scrollRightToLeft(delay: number, duration: number) {
  return {
    hidden: { x: 500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

export function contactUsZoomIn(delay: number, duration: number, ease: Array<number>) {
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
};

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
          duration: 1,
          ease: 'ease',
        },
        scale: {
          duration: 1,
          ease: 'easeIn',
        },
        x: {
          duration: 1,
          ease: 'easeInOut',
        },
      },
    },
  };
}

export function ourValuescrollDown() {
  return {
    hidden: { y: -300, x: -510, opacity: 0.3 },
    visible: {
      y: 0,
      x: -510,
      opacity: 1,
      transition: {
        delay: 0,
        duration: 1.3,
        ease: [0.42, 0, 0.58, 1]
      },
      active: {
        position: 'absolute',
      },
    },
  };
}