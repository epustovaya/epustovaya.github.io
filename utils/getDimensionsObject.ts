export type DimensionsObjectScheme = {
  width: number;
  height: number;
  top: number;
  left: number;
  x: number;
  y: number;
  right: number;
  bottom: number;
  offsetLeft: number;
  offsetTop: number;
};

const getDimensionsObject = (node: HTMLElement): DimensionsObjectScheme => {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    top: 'y' in rect ? rect.y : rect.top,
    left: 'x' in rect ? rect.x : rect.left,
    x: 'x' in rect ? rect.x : rect.left,
    y: 'y' in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom,
    offsetLeft: node.offsetLeft,
    offsetTop: node.offsetTop
  };
};

export default getDimensionsObject;
