import { Resolver, Query, Arg } from 'type-graphql';
import { Cat } from '../types';
import db from '../db.json';

type catType = typeof db.cats[number];

@Resolver()
export class CatResolver {
  @Query(() => [Cat])
  cats() {
    return db.cats.map(this._attachOwnerAndComments);
  }

  @Query(() => Cat)
  cat(@Arg('id', () => Number) id: number) {
    const cat = db.cats.find((cat) => cat.id === id);
    return cat ? this._attachOwnerAndComments(cat) : undefined;
  }

  private _attachOwnerAndComments(cat: catType) {
    return {
      ...cat,
      owner: db.owners.find((owner) => owner.id === cat.ownerId),
      comments: db.comments.filter((comment) => comment.cat === cat.id),
    };
  }
}
