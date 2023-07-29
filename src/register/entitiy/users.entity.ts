import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 65, nullable: false })
  userId: string;

  @Column({ type: 'text', nullable: false })
  userPw: string;

  @Column({ length: 15, nullable: false })
  userNickname: string;
}
