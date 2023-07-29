import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('verify')
export class verify {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 65, nullable: false })
  userId: string;

  @Column({ length: 7, nullable: false })
  key: number;
}
