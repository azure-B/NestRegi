import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('verify')
export class Verify {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  key: number;
}
