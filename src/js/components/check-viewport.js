export const isMobile = () => {
  if (window.innerWidth < 577) {
    return true;
  }

  return false;
};

export const isTablet = () => {
  if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
    return true;
  }

  return false;
};

export const isSmallTablet = () => {
  if (window.innerWidth < 769) {
    return true;
  }

  return false;
};

export const isDesktop = () => {
  if (window.innerWidth > 1025) {
    return true;
  }

  return false;
};
