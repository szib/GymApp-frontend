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

<h3> Features 
Items appended with a *, are stretch goals. 

Goals - A user can:
Create a new workout routine, which will then act as a template for future workouts.
Record sets and weight lifted and repitions (done)
See past workouts (done)
Enter their body weight (done)
Can singup and login (done)
See a graph of past body weights * (done)
Input ORM's and set workout weight based on them *
See videos and/or instructions for each exercise *
Find ranked exercises | based on each muscle group * (done)
Enter daily calories and macro's *

The app uses Rails as a backend and React for the front end. 

Currently there is no external API in use.

Features currently: 
Input in a form of unspecified length and depth, your workout, and have it saved. 
See past workouts. User will see only the date of the workout and then it in full when clicked.
Enter details, these can be edited later. 
See a picture of themselves on the homepage, also a smaller constant version in the top right.
Full auth, authentication and authorisation. 
A BMI calculation, and a message describing what range it is in. Given that both a height and weight are entered.
A bodyweight graph, showing thier weight over time. Chronologically ordered so weights can be enetered whenever.
A modal that lists 5 great exercises for body parts. I.e. chest/back/legs 


To-do's: 
1. How to clear form and all state after workout submission/ redirection (done)
2. Add body weight and graphs (done) 
3. Add graphs for lifts (top 5) (done)
4. History dropdowns (done)
5. Nav bar fix (done, just that silly bug)
6. Styling (save till last probably) (always in progress)
7. One date per multi-exercise workout history (done)
8. Stop them posting nill data (done)
9. Pretty up the graph, add lower bottom and higher top (users were mixed about this)
10. Only show graph if wieghts > 1 (done)
11. Work on user feedback 0/8
12. Background picture of fit good looking people
13. Upload progress pictures
14. When not signed in sign in/sign up link to there pages (done)
15. Add youtube video to each suggested exercise
16. Bug: If you press reload on history page, it doesnt show them (fixed)
17. Bug: Submitting dd/mm/yyyy in weightchart breaks it
18. Bug: Says username is taken if no email entered
19. Bug: Does not re-render user details on form submit, does on refresh
20. Username under Logged in as: , in nav bar
21. If weight is 0, allow it
22. Check last commit for how 
23. Pounds to lose to drop a BMI health range (yay, math!)
24. Bug: Shows last users pic on first signup. (probably not an issue in production, please fix anyway) 
