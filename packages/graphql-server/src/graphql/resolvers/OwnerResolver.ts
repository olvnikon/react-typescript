import { Resolver, Query } from 'type-graphql';
import { Owner } from '../types';
import { fetchFromDB } from '../utils';

@Resolver()
export class OwnerResolver {
  @Query(() => [Owner])
  async owners(): Promise<Owner[]> {
    const allData = await fetchFromDB();
    return allData.owners;
  }
}
