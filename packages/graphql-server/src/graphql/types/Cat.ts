import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Cat {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  owner: number;
}
