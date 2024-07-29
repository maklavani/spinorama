import { existsSync, readFileSync } from 'fs'
import { rimraf } from 'rimraf'

// Define the path to the package.json file
const packagePath = './package.json'

// Check if the package.json file exists
if (existsSync(packagePath)) {
	// Read the file content as a string
	const packageJsonString = readFileSync(packagePath, 'utf8')

	// Parse the JSON string into a JavaScript object
	const packageJson = JSON.parse(packageJsonString)

	const files = packageJson.files

	if (files.length)
		files.map(file => {
			const filePath = `./${file}`

			if (existsSync(filePath) && !['LICENSE', 'README.md'].includes(file)) {
				console.log(`Removing ${file}`)
				rimraf(filePath)
			}
		})
}
