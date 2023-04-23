import DBDataSource from './db'
import Education from './entities/education'
import Employee from './entities/employee'

const initDataBase = async () => {
	const educationRepository = DBDataSource.getRepository(Education)
	const employeesRepository = DBDataSource.getRepository(Employee)

	const educationList = await educationRepository.find()
	const employeesList = await employeesRepository.find()

	if (!educationList.length) {
		const educationsInit: Omit<Education, 'id' | 'employees'>[] = [
			{title: 'Preschool'},
			{title: 'Kindergarten'},
			{title: 'Elementary school'},
			{title: 'Middle school'},
			{title: 'High school'},
			{title: 'Vocational school'},
			{title: 'Community college'},
			{title: 'Associate\'s degree'},
			{title: 'Bachelor\'s degree'},
			{title: 'Master\'s degree'},
			{title: 'Doctorate degree'},
			{title: 'Medical school'},
			{title: 'Law school'},
			{title: 'Business school'},
			{title: 'Engineering school'},
			{title: 'Art school'},
			{title: 'Culinary school'},
			{title: 'Language school'},
			{title: 'Trade school'},
			{title: 'Continuing education program'},
		]
		await educationRepository.save(educationsInit)
	}

	if (!employeesList.length) {
		const employeesInit: Omit<Employee, 'id' | 'created_at' | 'updated_at'>[] = [
			{'first_name': 'John', 'middle_name': 'William', 'last_name': 'Smith', 'education': 14},
			{'first_name': 'Emma', 'middle_name': 'Rose', 'last_name': 'Wilson', 'education': 2},
			{'first_name': 'Andrew', 'middle_name': 'Michael', 'last_name': 'Taylor', 'education': 16},
			{'first_name': 'Olivia', 'middle_name': 'Grace', 'last_name': 'Thomas', 'education': 7},
			{'first_name': 'Michael', 'middle_name': 'James', 'last_name': 'Brown', 'education': 3},
			{'first_name': 'Sophia', 'middle_name': 'Elizabeth', 'last_name': 'Johnson', 'education': 6},
			{'first_name': 'William', 'middle_name': 'David', 'last_name': 'Davis', 'education': 12},
			{'first_name': 'Isabella', 'middle_name': 'Avery', 'last_name': 'Miller', 'education': 10},
			{'first_name': 'Ethan', 'middle_name': 'Christopher', 'last_name': 'Garcia', 'education': 5},
			{'first_name': 'Charlotte', 'middle_name': 'Victoria', 'last_name': 'Martinez', 'education': 19},
			{'first_name': 'Daniel', 'middle_name': 'Joseph', 'last_name': 'Anderson', 'education': 11},
			{'first_name': 'Mia', 'middle_name': 'Abigail', 'last_name': 'Brown', 'education': 4},
			{'first_name': 'Christopher', 'middle_name': 'Charles', 'last_name': 'Wilson', 'education': 8},
			{'first_name': 'Amelia', 'middle_name': 'Madison', 'last_name': 'Hernandez', 'education': 13},
			{'first_name': 'Anthony', 'middle_name': 'Robert', 'last_name': 'Jackson', 'education': 15},
			{'first_name': 'Emily', 'middle_name': 'Elizabeth', 'last_name': 'Garcia', 'education': 1},
			{'first_name': 'Ava', 'middle_name': 'Grace', 'last_name': 'White', 'education': 18},
			{'first_name': 'Matthew', 'middle_name': 'Ryan', 'last_name': 'Davis', 'education': 9},
			{'first_name': 'Harper', 'middle_name': 'Chloe', 'last_name': 'Lee', 'education': 17},
			{'first_name': 'Jacob', 'middle_name': 'William', 'last_name': 'Gonzalez', 'education': 20},
		]
		await employeesRepository.save(employeesInit)
	}
}

export default initDataBase
