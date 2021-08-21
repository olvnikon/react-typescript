import { Cat, Comment, Owner } from './types/entities';

type Request<P, R, H extends RequestInit = {}> = { params: P; returns: R; requestParams?: H };

type Queries = {
  getCats: Request<void, Cat[]>;
  getCat: Request<void, Cat>;
  getOwners: Request<void, Owner[]>;
  getComments: Request<void, Comment[]>;
};

type Mutations = {
  createCat: Request<Cat, Cat, { method: 'POST' }>;
  updateCat: Request<Partial<Cat>, Cat, { method: 'PUT' }>;
  deleteCat: Request<number, boolean, { method: 'DELETE' }>;
};

type Requests = Queries & Mutations;

type keys = keyof Requests;
const keyToPath: Record<keys, (id?: number) => string> = {
  getCats: () => '/cats',
  getCat: (id) => `/cats/${id}`,
  getOwners: () => '/owners',
  getComments: () => '/comments',
  createCat: () => '/cats',
  updateCat: (id) => `/cats/${id}`,
  deleteCat: (id) => `/cats/${id}`,
};

type ClientOptions = {
  apiUrl: string;
};
export const createClient = ({ apiUrl }: ClientOptions) => ({
  request: async <K extends keyof Requests>(
    rKey: K,
    params?: Requests[K]['params'],
    id?: number
  ): Promise<Requests[K]['returns']> => {
    const res = await fetch(
      apiUrl + keyToPath[rKey](id),
      params
        ? {
            body: JSON.stringify(params),
          }
        : undefined
    );
    return res.json();
  },
});
