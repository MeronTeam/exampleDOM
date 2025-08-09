function myFunc() {
	let username = document.getElementById('name').value
	let password = document.getElementById('password').value
	let errorName = document.querySelector('.nameError1')
	let errorName2 = document.querySelector('.nameError2')
	let addBr = document.getElementById('br')
	let passwordError = document.querySelector('.passwordError')
	let correctPassword = 'Qurbonov'
	let passwordError2 = document.querySelector('.passwordError2')
	let addBr2 = document.getElementById('br2')

	errorName.innerHTML = ''
	errorName2.innerHTML = ''
	addBr.innerHTML = ''
	passwordError.innerHTML = ''
	passwordError2.innerHTML = ''

	let usernameRegEx = /^[a-zA-Z]+$/
	let passwordRegEx = /.{8,}/

	let usernameTest = usernameRegEx.test(username)
	let passwordTest = passwordRegEx.test(password)

	if (!usernameTest) {
		errorName.innerHTML =
			"Ismingizni to'g'ri kiriting, ya'ni faqat harflar bilan!"
	}

	let familyNames = [
		'Shohjahon',
		'Sherzod',
		'Dilrozbegim',
		'Gulmira',
		'shohjahon',
		'sherzod',
		'dilrozbegim',
		'gulmira',
	]

	if (!familyNames.includes(username)) {
		errorName2.innerHTML = 'Ismingiz bu oilada mavjud emas!'
	}

	if (!familyNames.includes(username) && !usernameTest) {
		addBr.innerHTML = '<br>'
	}

	if (!passwordTest) {
		passwordError2.innerHTML = "Eng kamida 8 ta belgi bo'lishi kerak"
	}

	if (password !== correctPassword) {
		passwordError.innerHTML = 'Parol xato!'
	}

	if (!passwordTest && password !== correctPassword) {
		addBr2.innerHTML = '<br>'
	}

	if (
		usernameTest &&
		familyNames.includes(username) &&
		passwordTest &&
		password == correctPassword
	) {
		location.replace('./pages/mainpage.html')
	}
}
