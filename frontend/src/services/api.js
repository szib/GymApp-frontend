const baseUrl = 'http://localhost:3000'
const signinUrl = baseUrl + '/signin'
const validateUrl = baseUrl + '/validate'
const signupUrl = baseUrl + '/signup'
const postWorkoutUrl = baseUrl + '/workout/create'

export function signin (name, password) {
	return fetch(signinUrl, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
    }).then(resp => resp.json())
}

export function validate () {
    return fetch(validateUrl, {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export function signup (name, email, password) {
    return fetch(signupUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    }).then(resp => resp.json())
}

export function postWorkout (data) {
    return fetch(postWorkoutUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    }).then(resp => resp.json())
}
// export function getWorkouts () {
//     return fetch('http://localhost:3001/workouts', {
// 	    headers: { 'Authorisation': localStorage.token }
//     }).then(resp => resp.json())
// }

export default { signin, validate, signup }