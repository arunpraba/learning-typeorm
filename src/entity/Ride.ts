import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { RideStatus } from '../api-types/types'
import { User } from './User'

@Entity({ name: 'rides' })
export class Ride {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'text',
    enum: [
      RideStatus.ACCEPTED,
      RideStatus.FINISHED,
      RideStatus.CANCELED,
      RideStatus.REQUESTING,
      RideStatus.ON_ROUTE,
    ],
  })
  status: RideStatus

  @Column({ type: 'text' })
  pickUpAddress: string

  @Column({ type: 'numeric', default: 0 })
  pickUpLat: number

  @Column({ type: 'numeric', default: 0 })
  pickUpLng: number

  @Column({ type: 'text' })
  dropOffAddress: string

  @Column({ type: 'numeric', default: 0 })
  dropOffLat: number

  @Column({ type: 'numeric', default: 0 })
  dropOffLng: number

  @Column({ type: 'numeric' })
  price: number

  @Column({ type: 'numeric' })
  duration: number

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  @ManyToMany((type) => User, (user) => user.ridesAsPassenger)
  passenger: User

  @ManyToMany((type) => User, (user) => user.ridesAsDriver)
  driver: User
}
