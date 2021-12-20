/*-- Formulario de Contacto ---*/

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#almail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
	event.preventDefault()
	const form = new FormData(this)
	$buttonMailto.setAttribute('href', `mailto:lacloreradelavilla@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
	$buttonMailto.click()
}
