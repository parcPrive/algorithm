import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductSaleslocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  addreassDetail: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  meetingTime: Date;
}
