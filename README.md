<h1> Gym App </h1>>
<p>Track and record workouts and your bodyweight.

This was a solo project, made by <a href="https://www.linkedin.com/in/danny-wakeling1/">Danny Wakeling</a>. It is the final project after the culmination of 12 weeks of studying at Flatiron School's bootcamp. It was created in 2 and a half weeks and showcased on the 11th July in front of a wide audience and open to the public for a few hours.


It is a gym supplement app, that seeks to let people record their workouts and see their progression over time.</p>


<h3> Associations </h3> 

    A user -
    has_many :weights
    has_many :workouts
    has_many :exercises, through: :workouts
    has_many :lifts, through: :exercises

<h3> Features </h3>
<p> Items appended with a *, are stretch goals. 

Goals - A user can:</p>
<ul>
    <li>Create a new workout routine, which will then act as a template for future </li>workouts.
    <li>Record sets and weight lifted and repitions (done)</li>
    <li>See past workouts (done)</li>
    <li>Enter their body weight (done)</li>
    <li>Can singup and login (done)</li>
    <li>See a graph of past body weights * (done)</li>
    <li>Input ORM's and set workout weight based on them *</li>
    <li>See videos and/or instructions for each exercise *</li>
    <li>Find ranked exercises | based on each muscle group * (done)</li>
    <li>Enter daily calories and macro's *</li>
</ul>

<p> The app uses Rails as a backend and React for the front end. 

Currently there is no external API in use. </p>

<h3> Features currently: </h3>
<ul>
    Input in a form of unspecified length and depth, your workout, and have it saved. </li>
    See past workouts. User will see only the date of the workout and then it in full </li>when clicked.
    Enter details, these can be edited later. </li>
    See a picture of themselves on the homepage, also a smaller constant version in the top right.</li>
    Full auth, authentication and authorisation. </li>
    A BMI calculation, and a message describing what range it is in. Given that both a height and weight are entered.</li>
    A bodyweight graph, showing thier weight over time. Chronologically ordered so weights can be enetered whenever.</li>
    A modal that lists 5 great exercises for body parts. I.e. chest/back/legs </li>
<ul>

<h3> To-do's: </h3>
<ol>
    <li> How to clear form and all state after workout submission/ redirection (done)</li>
    <li> Add body weight and graphs (done) </li>
    <li> Add graphs for lifts (top 5) (done)</li>
    <li> History dropdowns (done)</li>
    <li> Nav bar fix (done, just that silly bug)</li>
    <li> Styling (save till last probably) (always in progress)</li>
    <li> One date per multi-exercise workout history (done)</li>
    <li> Stop them posting nill data (done)</li>
    <li> Pretty up the graph, add lower bottom and higher top (users were mixed about this)</li>
    <li> Only show graph if wieghts > 1 (done)</li>
    <li> Work on user feedback 0/8</li>
    <li> Background picture of fit good looking people</li>
    <li> Upload progress pictures</li>
    <li> When not signed in sign in/sign up link to there pages (done)</li>
    <li> Add youtube video to each suggested exercise</li>
    <li>Bug: If you press reload on history page, it doesnt show them (fixed)</li>
    <li>Bug: Submitting dd/mm/yyyy in weightchart breaks it</li>
    <li>Bug: Says username is taken if no email entered</li>
    <li>Bug: Does not re-render user details on form submit, does on refresh</li>
    <li>Username under Logged in as: , in nav bar</li>
    <li>If weight is 0, allow it</li>
    <li>Check last commit for how </li>
    <li>Pounds to lose to drop a BMI health range (yay, math!)</li>
    <li>Bug: Shows last users pic on first signup. (probably not an issue in production, please fix anyway) </li>
<ol>