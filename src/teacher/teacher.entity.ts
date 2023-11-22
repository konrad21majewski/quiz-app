import { Field, Int, ObjectType } from "@nestjs/graphql";

export class Teacher {

    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    type?: string;

}