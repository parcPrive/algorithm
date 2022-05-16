import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;

  @Column()
  @Field(() => Int)
  score: number;

  @Column({ default: null }) //{ default: null }
  @Field(() => String, { nullable: true }) //{ nullable: true } / String
  period: string;

  @Column()
  @Field(() => String)
  coordinates: string;

  @Column()
  @Field(() => String)
  address: string;

  @Column()
  @Field(() => String)
  place: string;

  @Column()
  @Field(() => [String], { nullable: true })
  images: string;
}
