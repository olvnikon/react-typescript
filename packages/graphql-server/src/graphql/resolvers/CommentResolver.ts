import { Resolver, Query, Arg } from 'type-graphql';
import { Comment } from '../types';
import { fetchFromDB } from '../utils';

@Resolver()
export class CommentResolver {
  @Query(() => [Comment])
  async comments(@Arg('catId', () => Number, { nullable: true }) catId: number): Promise<Comment[]> {
    const allData = await fetchFromDB();
    return catId ? allData.comments.filter(({ cat }) => cat === catId) : allData.comments;
  }
}
