import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'places' })
export class Place {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'numeric', default: 0 })
  lat: number

  @Column({ type: 'numeric', default: 0 })
  lng: number

  @Column({ type: 'text' })
  address: string

  @Column({ type: 'boolean', default: false })
  isFav: boolean

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string
}
