# GymApp
Track and record workouts and your weight

This project was made by Danny Wakeling, it is the final project after the culmination of 12 weeks of studying at Flatiron School's bootcamp. It was created in 2 and a half weeks and showcased on the 11th July in front of a wide audience for a few hours.

It is a gym supplement app, that seeks to let people record their workouts and see their progression over time. 

Items appended with a *, are stretch goals. 

A user can:
Create a new workout routie, which will then act as a template for future workouts.
Record sets and weight lifted and repitions (done)
See past workouts (done)
Enter their body weight 
Can singup and login (done)
See a graph of past weights * 
Input ORM's and set workout weight based on them *
See videos and/or instructions for each exercise *
Find ranked exercises | based on each muscle group *
Enter daily calories and macro's *

The app uses Rails as a backend and React for the front end. 

Currently there is no external API in use.

To-do's: 
1. How to clear form and all state after workout submission/ redirection (done)
2. Add body weight and graphs (done) 
3. Add graphs for lifts (top 5) ?
4. History dropdowns (done)
5. Nav bar fix (done, just that silly bug)
6. Styling (save till last probably)
7. One date per multi-exercise workout history (done)
8. Stop them posting nill data (done)
9. Pretty up the graph, add lower bottom and higher top
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

Currently working on: 
Wed 
13:15 - Nav bar, Done 13:55
14:15 - User dropdown 

Thursday
10:00 - History fix, Done 14:00

Sunday 
11:50 - Get weight form submit to auto render, Done 12:25
12:25 - Show difference in weights table, Done 13:00
13:00 - Lunch and weight validation, Done 14:00
14:00 - Graphing Body weight

Mon
10:00 - Graphing Body weight, Done 11:20 
11:20 - Set max on body weight, adjusted min, Done 11:30
11:30 - Exercises must be filled in, delete set, Done 14:30
14:30 - Change checkboxes to buttons for delete, Done 14:45
14:45 - Wireframing + user validation, Done 15:50
16:00 - Graphs and weight table sorting data by date, Done 17:40

Tuesday
10:00 - Added better sign in/ sign up links
        Add user details in progress (done)
        Some form css done
        Fixed history - This was a long task, caused by the delete set hack (done)

Wednesday 
10:00 - Fixed various bugs
        Userdetails name now capitialized
        


Exercises Best 

Chest 
    Dumbell bench press
    Barbell bench press
    Pushups
    Dumbbell Flyes
    Incline dumbbell press
Back
    Deadlift
    T-bar row 
    Reverse grip rows
    weighted pull ups
    V-bar pulldown 
Glutes 
    Squat
    Barbell glute bridge
    Barbell hip thrust
Quads
    Barbell squat
    Leg press
    Tire flip
    Front squat
    Walking lunge
Hamstrings
    Romanian deadlift
    Sumo deadlift
    Lying leg curls
    Glute hamstring raise
    Box jump
Biceps
    Incline hammer curls
    Spider curl
    Barbell curl
    Zotman curls
    Overhead cable curl
Triceps
    Dips
    Tricep extension (EZ bar)
    Dumbbell floor press
    Glose grip bench
    Tricep pushdown
Abs
    Landmine 180's
    Plank
    Standing cable lift
    Bottoms up
    Elbow to knee
Shoulders
    Push press
    Signle-arm linear jammer
    Standing dumbell press
    Side laterals to front raise
    Reverse flyes
Traps
    Smith machine shrug
    Kettlebell sumo high pull
    Dumbbell shrug
    Barbell shrug
    Cable shrugs