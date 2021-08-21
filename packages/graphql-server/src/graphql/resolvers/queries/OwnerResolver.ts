import { Resolver, Query } from 'type-graphql';
import { Owner } from '../../types';
import db from '../../db.json';

@Resolver()
export class OwnerResolver {
  @Query(() => [Owner])
  owners() {
    return db.owners;
  }
}
