import smoothscroll from 'smoothscroll-polyfill';

const polyfill = () => {
  if (typeof window !== 'undefined') {
    smoothscroll.polyfill();
  }
};

export default polyfill;
