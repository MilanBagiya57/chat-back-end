/* eslint-disable prettier/prettier */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export class Chat {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    userName: string;

    @Column()
    text: string;

    @CreateDateColumn()
    createdAt: Date;
}