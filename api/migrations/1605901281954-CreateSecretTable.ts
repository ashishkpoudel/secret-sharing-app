import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSecretTable1605901281954 implements MigrationInterface {
    public readonly name = 'CreateSecretTable1605901281954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "secret" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "body" text NOT NULL, "password" character varying, "expiresIn" interval NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6afa4961954e17ec2d6401afc3d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "secret"`);
    }
}
