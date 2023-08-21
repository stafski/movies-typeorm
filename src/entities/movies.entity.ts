import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, unique: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description?: string | undefined | null;

  @Column({ type: "integer" })
  duration: number;

  @Column({ type: "integer" })
  price: number;
}

export default Movie;
