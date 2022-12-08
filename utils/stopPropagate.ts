function stopPropagate(callback: (e) => void) {
  return (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    callback(e);
  };
}

export default stopPropagate;
