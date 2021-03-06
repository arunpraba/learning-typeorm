import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ type: 'text', unique: true })
  email: string

  @Column({ type: 'text' })
  firstName: string

  @Column({ type: 'text' })
  lastName: string

  @Column({ type: 'int' })
  age: number

  @Column({ type: 'text' })
  password: string

  @Column({ type: 'boolean', default: false })
  verifiedEmail: boolean

  @Column({ type: 'text' })
  phoneNumber: string

  @Column({ type: 'boolean', default: false })
  VerifiedPhoneNumber: boolean

  @Column({ type: 'text' })
  profilePhots: string

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  @Column({ type: 'boolean' })
  isDriving: boolean

  @Column({ type: 'boolean' })
  isRiding: boolean

  @Column({ type: 'boolean' })
  isTaken: boolean

  @Column({ type: 'numeric', default: 0 })
  lastLat: number

  @Column({ type: 'numeric', default: 0 })
  lastLng: number

  @Column({ type: 'numeric', default: 0 })
  lastOrientation: number

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
