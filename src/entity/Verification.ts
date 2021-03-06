import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { VerificationTarget } from 'types'

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
}
