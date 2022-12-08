type Config = {
  onClick: () => void;
};

export function getInteractiveElementProps({
  onClick
}: Config) {
  return {
    role: 'button',
    tabIndex: 0,
    onKeyDown: (e) => {
      if (e.code === 'Enter') {
        e.preventDefault();
        onClick();
      }
    }
  };
}
