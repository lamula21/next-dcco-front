import dayjs from 'dayjs'

export const generateDate = (
	month = dayjs().month(),

	year = dayjs().year()
) => {
	const firstDateOfMonth = dayjs().year(year).month(month).startOf('month')

	const lastDateOfMonth = dayjs().year(year).month(month).endOf('month')

	const arrayOfDate = []

	//create dates of prev month
	for (let i = 0; i < firstDateOfMonth.day(); i++) {
		arrayOfDate.push({
			currentMonth: false,
			date: firstDateOfMonth.day(i),
		})
	}

	//geenerate dates of current month
	for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		})
	}

	const rows =
		firstDateOfMonth.day() + firstDateOfMonth.daysInMonth() > 35 ? 6 : 5
	const remaining = rows * 7 - arrayOfDate.length
	//create dates of next month
	for (
		let i = lastDateOfMonth.date() + 1;
		i <= lastDateOfMonth.date() + remaining;
		i++
	) {
		arrayOfDate.push({
			currentMonth: false,
			date: lastDateOfMonth.date(i),
		})
	}

	return arrayOfDate
}

export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
export const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wedneday',
	'Thrusday',
	'Friday',
	'Saturday',
]
