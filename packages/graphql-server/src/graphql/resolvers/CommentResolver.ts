import { Resolver, Query, Arg } from 'type-graphql';
import { Comment } from '../types';
import db from '../db.json';

@Resolver()
export class CommentResolver {
  @Query(() => [Comment])
  comments(@Arg('catId', () => Number, { nullable: true }) catId: number) {
    return catId ? db.comments.filter(({ cat }) => cat === catId) : db.comments;
  }
}
