import DBDataSource from './db'

const initDataBase = async () => {
	const educationRepository = DBDataSource.getRepository('education')
	const employeesRepository = DBDataSource.getRepository('employee')

	const educationList = await educationRepository.find()
	const employeesList = await employeesRepository.find()

	if (!educationList.length) {
		const educationsInit = [
			{title: 'Школа'},
			{title: 'ПТУ'},
			{title: 'Колледж'},
			{title: 'Техникум'},
			{title: 'Бакалавр'},
			{title: 'Магистратура'},
		]

		await educationRepository.save(educationsInit)
	}

	if (!employeesList.length) {
		const employeesInit = [
			{
				first_name: 'Иванов',
				middle_name: 'Сергей',
				last_name: 'Николаевич',
				education: 1,
			},
			{
				first_name: 'Петров',
				middle_name: 'Алексей',
				last_name: 'Сергеевич',
				education: 2,
			},
			{
				first_name: 'Шереметьев',
				middle_name: 'Василий',
				last_name: 'Олегович',
				education: 2,
			},
			{
				first_name: 'Петренко',
				middle_name: 'Павел',
				last_name: 'Александрович',
				education: 2,
			},
		]
		await employeesRepository.save(employeesInit)
	}
}

export default initDataBase
