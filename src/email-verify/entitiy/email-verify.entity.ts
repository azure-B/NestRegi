import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('verify')
export class verify {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  key: number;
}
