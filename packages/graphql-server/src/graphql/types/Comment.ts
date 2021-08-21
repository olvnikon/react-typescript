import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Comment {
  @Field(() => Number)
  id: number;

  @Field(() => Number)
  cat: number;

  @Field(() => Number)
  owner: number;

  @Field(() => String)
  text: string;
}
