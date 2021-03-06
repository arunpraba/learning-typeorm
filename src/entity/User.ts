import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm'
import bcrypt from 'bcrypt'

const BCRYPT_ROUNDS = 1
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

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS)
  }

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = await this.hashPassword(this.password)
      this.password = hashedPassword
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
