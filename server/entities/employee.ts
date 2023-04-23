import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import Education from './education'

@Entity('employee')
class Employee {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		nullable: false,
		length: 25,
	})
	first_name: string

	@Column({
		nullable: false,
		length: 25,
	})
	middle_name: string

	@Column({
		nullable: false,
		length: 25,
	})
	last_name: string

	@ManyToOne(() => Education, education => education.employees, {
		onDelete: 'SET NULL',
	})
	education: Education | number

	@CreateDateColumn()
	created_at: string

	@UpdateDateColumn()
	updated_at: string
}

export default Employee
