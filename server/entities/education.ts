import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('education')
class Education extends BaseEntity{
   @PrimaryGeneratedColumn ()
   id: number

   @Column({
      nullable: false,
      length: 100
   })
   title: string
}

export default Education
