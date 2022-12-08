import { Image } from '../types/commonApiTypes';

export function getImageUrl(image: Image) {
  const url = (typeof image === 'string' ? image : image?.srcset[0]?.url) || '';

  return url.length > 0 ? url : null;
}
