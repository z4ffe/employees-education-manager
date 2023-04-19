import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import Employee from './employee'

@Entity('education')
class Education {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		nullable: false,
		length: 100,
	})
	title: string

	@OneToMany(() => Employee, employee => employee.education)
	employees: Employee[]
}

export default Education
