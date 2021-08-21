export type Cat = {
  id: number;
  name: string;
  owner: number;
};

export type Owner = {
  id: number;
  name: string;
};

export type Comment = {
  id: number;
  cat: number;
  owner: number;
  text: string;
};
