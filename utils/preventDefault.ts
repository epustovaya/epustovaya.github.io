function preventDefaultForCb(callback: (e) => void) {
  return (e: { preventDefault: () => void }) => {
    e.preventDefault();
    callback(e);
  };
}

export default preventDefaultForCb;
