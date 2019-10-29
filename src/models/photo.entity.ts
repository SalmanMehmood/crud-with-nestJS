import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('photo')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'aame' })
  name: string;

  @Column({ name: 'aescription' })
  description: string;

  @Column({ name: 'view' })
  view: number;

  @Column({ name: 'published' })
  isPublished: boolean;
}
