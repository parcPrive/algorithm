import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  contents: string;

  @Field(() => Int)
  score: number;

  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => String)
  coordinates: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  place: string;

  @Field(() => [String], { nullable: true })
  images: string;
}