const getRootElement = (): HTMLElement | null | undefined => {
  if (typeof window !== 'undefined') {
    return document.getElementById('__next');
  }

  return undefined;
};

export default getRootElement;
