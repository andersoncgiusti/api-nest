import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Address } from './address.entity';
import { Company } from './company.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  username: string

  @Column()
  email: string

  @OneToOne(() => Address, address => address.id, { cascade: true })
  @JoinColumn()
  address: Address

  @Column()
  phone: string

  @Column()
  website: string

  @OneToOne(() => Company, company => company.id, { cascade: true })
  @JoinColumn()
  company: Company
}
