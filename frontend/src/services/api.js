const baseUrl = 'http://localhost:3000'
const signinUrl = baseUrl + '/signin'
const validateUrl = baseUrl + '/validate'
const signupUrl = baseUrl + '/signup'
const postWorkoutUrl = baseUrl + '/populate'
const getWorkoutsUrl = baseUrl + '/workoutsList'


export function signin (username, password) {
	return fetch(signinUrl, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(resp => resp.json())
}

export function validate () {
    return fetch(validateUrl, {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export function signup (username, email, password) {
    return fetch(signupUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    }).then(resp => resp.json())
}

export function postWorkout (data) {
    return fetch(postWorkoutUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    }).then(resp => resp.json())
}

export function getWorkouts () {
    return fetch(getWorkoutsUrl, {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export default { signin, validate, signup, postWorkout, getWorkouts }