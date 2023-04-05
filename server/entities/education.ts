import {BaseEntity, Column, Entity, PrimaryColumn} from 'typeorm'

@Entity('education')
class Education extends BaseEntity{
   @PrimaryColumn()
   id: number

   @Column({
      nullable: false
   })
   title: string
}

export default Education
