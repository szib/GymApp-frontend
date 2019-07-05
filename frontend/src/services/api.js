const baseUrl = 'http://localhost:3000'
const signinUrl = baseUrl + '/signin'
const validateUrl = baseUrl + '/validate'
const signupUrl = baseUrl + '/signup'
const postWorkoutUrl = baseUrl + '/populate'
const getWorkoutsUrl = baseUrl + '/workoutsList'
const postWeightUrl = baseUrl + '/weight'
const getWeightsUrl = baseUrl + '/weightsList'

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

export function postWeight (weight, date) {
    return fetch(postWeightUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorisation': localStorage.token },
        body: JSON.stringify({ weight, date})
    }).then(resp => resp.json())
}

export function getWeights () {
    return fetch(getWeightsUrl, {
        headers: { 'Authorisation': localStorage.token },
    }).then(resp => resp.json())
}

export function getWorkouts () {
    return fetch(getWorkoutsUrl, {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export default { signin, validate, signup, postWorkout, getWorkouts, postWeight, getWeights }