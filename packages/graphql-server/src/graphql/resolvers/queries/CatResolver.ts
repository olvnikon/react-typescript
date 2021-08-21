import { Resolver, Query, Arg } from 'type-graphql';
import { Cat } from '../../types';
import db from '../../db.json';

@Resolver()
export class CatResolver {
  @Query(() => [Cat])
  cats() {
    return db.cats;
  }

  @Query(() => Cat)
  async cat(@Arg('id', () => Number) id: number) {
    return db.cats.find((cat) => cat.id === id);
  }
}
