import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('verify')
export class verify {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 65, nullable: false })
  userId: string;

  @Column({ nullable: false })
  key: number;
}
