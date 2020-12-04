import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { URL } from 'url';

@Entity('secrets')
export class SecretEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({ type: 'text' })
  public readonly body: string;

  @Column({ type: 'varchar', nullable: true })
  public readonly password: string | null;

  @Column({ type: 'interval' })
  public readonly expiresIn: string;

  @CreateDateColumn()
  public readonly createdAt: Date;

  @UpdateDateColumn()
  public readonly updatedAt: Date;

  getSharingLink(baseUrl: string): string {
    return new URL(`/secrets/${this.id}`, baseUrl).toString();
  }
}
