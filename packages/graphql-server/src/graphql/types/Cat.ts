import { ObjectType, Field } from 'type-graphql';
import { Owner } from './Owner';
import { Comment } from './Comment';

@ObjectType()
export class Cat {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Owner)
  owner: Owner;

  @Field(() => [Comment])
  comments: Comment[];
}
