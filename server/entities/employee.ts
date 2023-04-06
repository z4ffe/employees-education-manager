import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('employee')
class Employee extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number

   @Column({
      nullable: false,
      length: 25
   })
   first_name: string

   @Column({
      nullable: false,
      length: 25,
   })
   middle_name: string

   @Column({
      nullable: false,
      length: 25
   })
   last_name: string

   @Column({
      type: 'varchar',
      default: ''
   })
   education: string

   @CreateDateColumn()
   date_created: string

   @UpdateDateColumn()
   date_update: string
}

export default Employee
