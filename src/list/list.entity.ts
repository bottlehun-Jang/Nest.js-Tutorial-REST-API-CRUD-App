import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class List {
    //Auto Increment 설정
    @PrimaryGeneratedColumn('increment')
    idx: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column({
        nullable: false,
        default: () => 0
    })
    check: number;

    @Column({
        nullable: false,
        default: () => 0
    })
    del: number;
}