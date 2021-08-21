import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Owner {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;
}
