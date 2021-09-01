import { Resolver, Query, Arg } from 'type-graphql';
import { Cat, Owner, Comment } from '../types';
import { fetchFromDB } from '../utils';

type catType = {
  id: number;
  name: string;
  ownerId: number;
};

@Resolver()
export class CatResolver {
  @Query(() => [Cat])
  async cats() {
    const allData = await fetchFromDB();
    return allData.cats.map(this._attachEntities);
  }

  @Query(() => Cat)
  async cat(@Arg('id', () => Number) id: number) {
    const allData = await fetchFromDB();
    const cat = allData.cats.find((cat) => cat.id === id);
    return cat ? this._attachEntities(cat) : undefined;
  }

  private _attachEntities = (cat: catType) =>
    Promise.resolve(cat).then(this._attachOwner).then(this._attachComments);

  private async _attachOwner<T extends catType>(
    cat: T
  ): Promise<T & { owner: Owner }> {
    const allData = await fetchFromDB();
    return {
      ...cat,
      owner: allData.owners.find((owner) => owner.id === cat.ownerId)!,
    };
  }

  private async _attachComments<T extends catType>(
    cat: T
  ): Promise<T & { comments: Comment[] }> {
    const allData = await fetchFromDB();
    return {
      ...cat,
      comments: allData.comments.filter((comment) => comment.cat === cat.id),
    };
  }
}
