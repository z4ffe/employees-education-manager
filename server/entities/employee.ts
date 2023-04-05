import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from 'typeorm'

@Entity('employee')
class Employee extends BaseEntity {
   @PrimaryColumn()
   id: number

   @Column({
      nullable: false,
   })
   first_name: string

   @Column({
      nullable: false,
   })
   middle_name: string

   @Column({
      nullable: false,
   })
   last_name: string

   @Column({
      type: 'numeric',
   })
   education: number

   @CreateDateColumn()
   date_created: string

   @UpdateDateColumn()
   date_update: string
}

export default Employee
