import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;
  // ajout de colonne shortUrl auprès de message qui représente l'URL originale.
  @Column({ unique: true })
  shortUrl: string;
}
