export const arabicNumbers = ['۰', '۱', '۲', '۳', '٤', '٥', '٦', '۷', '۸', '۹']
export const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

const ToPersianNumber = (number: string) => {
	for (let i = 0; i <= 9; i++) number = number.replace(new RegExp(`${i}`, 'g'), persianNumbers[i])

	return number
}

export default ToPersianNumber
