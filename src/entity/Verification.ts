import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  ManyToMany,
} from 'typeorm'
import { VerificationTarget } from '../api-types/types'
import { User } from './User'

@Entity({ name: 'verification' })
export class Verification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text', enum: ['PHONE', 'EMAIL'] })
  target: VerificationTarget

  @Column({ type: 'text' })
  payload: string

  @Column({ type: 'text' })
  key: string

  @Column({ type: 'boolean', default: false })
  used: boolean

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  @ManyToMany((type) => User, (user) => user.verifications)
  user: User

  @BeforeInsert()
  createKey(): void {
    if (
      this.target === VerificationTarget.EMAIL ||
      this.target === VerificationTarget.PHONE
    ) {
      this.key = Math.floor(Math.random() * 100000).toString()
    }
  }
}
