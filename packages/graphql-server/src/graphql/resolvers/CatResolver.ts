import { Resolver, Query, Arg } from 'type-graphql';
import { flow } from 'fp-ts/lib/function';
import { Cat, Owner, Comment } from '../types';
import db from '../db.json';

type catType = typeof db.cats[number];

@Resolver()
export class CatResolver {
  @Query(() => [Cat])
  cats() {
    return db.cats.map(this._attachEntities);
  }

  @Query(() => Cat)
  cat(@Arg('id', () => Number) id: number) {
    const cat = db.cats.find((cat) => cat.id === id);
    return cat ? this._attachEntities(cat) : undefined;
  }

  private _attachEntities = flow(this._attachOwner, this._attachComments);

  private _attachOwner<T extends catType>(cat: T): T & { owner: Owner } {
    return {
      ...cat,
      owner: db.owners.find((owner) => owner.id === cat.ownerId)!,
    };
  }

  private _attachComments<T extends catType>(cat: T): T & { comments: Comment[] } {
    return {
      ...cat,
      comments: db.comments.filter((comment) => comment.cat === cat.id),
    };
  }
}
