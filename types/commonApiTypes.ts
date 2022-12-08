export type KeyValuePair = {
  key: string;
  value: string;
};

export type Length = {
  inches_total?: number;
  feet_as_part?: number;
  inches_as_part?: number;
  user_friendly: string[];
};

export type Money = {
  cents_total: number;
  dollars_as_part: number;
  cents_as_part: number;
  user_friendly: string;
};

export type Image = {
  id: string;
  srcset: ImageSrcSet[];
  caption: string;
};

export type ImageSrcSet = {
  url: string;
  type: string;
  width: number;
  height: number;
  // 0 - None; 1 - 90 deg clockwise; 2 - 180 deg; 3 - 90 deg counterclockwise
  rotation: number;
  crop_area_x1: number;
  crop_area_x2: number;
  crop_area_y1: number;
  crop_area_y2: number;
};

export type MasterListItem = {
  active: boolean;
  icon: string;
  id: number;
  name: string;
  type?: KeyValuePair;
};

export type MasterListCategory = {
  category: string;
  items: MasterListItem[];
};

export type RvDocument = {
  id: string;
  srcset: { url: string; }[];
  caption: string;
  status?: 'UPLOADING' | 'SUCCEEDED' | 'FAILED';
};

export type MapOptions = {
  center_lat: number;
  center_lng: number;
  viewport_northeast_lat: number;
  viewport_northeast_lng: number;
  viewport_southwest_lat: number;
  viewport_southwest_lng: number;
};

export type ExchangeCommonList = {
  id: number;
  name: string;
};

export type Location = {
  building: string;
  city: string;
  full_address: string;
  latitude: string;
  longitude: string;
  short_address: string;
  state: string;
  street: string;
  zip: string;
  zip_suffix: string;
};

export type Comment = {
  id: number;
  date: string;
  rv_id: number;
  rv_name: string;
  user_id: number;
  user_name: string;
  user_photo: Image;
  text: string;
  moderated: boolean;
  parent_id: number;
  children: Comment[];
};

export type ButtonApiOptions = {
  id: string;
  label: string;
  type: string; // "Type (primary, secondary, accent, link)"
  disabled: boolean;
  link: string;
  new_tab: boolean;
};

export type Video = {
  id: number;
  video_url: string;
  external_link: boolean;
  cover_image?: Image;
  caption?: string;
  ready_to_stream?: boolean;
  rv?: number;
};

export type Status = {
  group: string;
  id: number;
  name: string;
  // "Status Style (default / warning / danger / success)"
  style: string;
};
