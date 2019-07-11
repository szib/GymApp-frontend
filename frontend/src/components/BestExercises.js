import React, { Component } from 'react';

class BestExercises extends Component {
    render() {
        return (
            <div id="modalMain">
                <h2> List of Exercises </h2>
                <p> The below are some of the best exercises for people getting into working out.</p>
                <p style={{textAlign:"center"}}> Focusing on safety, ease of exercise and results !</p>
                <br />
                <h3>Chest</h3>
                <ol>
                    <li>Dumbbell bench press</li>
                    <li>Barbell bench press</li>
                    <li>Pushups</li>
                    <li>Dumbbell flyes</li>
                    <li>Incline dumbbell press</li>
                </ol>
                <h3>Back</h3>
                <ol>
                    <li>Deadlift</li>
                    <li>T-bar row</li>
                    <li>Reverse grip rows</li>
                    <li>Weighted pull ups</li>
                    <li>V-bar pulldown</li>
                </ol>
                <h3>Glutes</h3>
                <ol>
                    <li>Squat</li>
                    <li>Barbell glute bridge</li>
                    <li>Barbell hip thurst</li>
                </ol>
                <h3>Quads</h3>
                <ol>
                    <li>Barbell squat</li>
                    <li>Leg press</li>
                    <li>Tire flip</li>
                    <li>Front squat</li>
                    <li>Walking lunge</li>
                </ol>
                <h3>Hamstrings</h3>
                <ol>
                    <li>Romanian deadlift</li>
                    <li>Sumo deadlift</li>
                    <li>Lying leg curls</li>
                    <li>Glute hamstrings raise</li>
                    <li>Box jump</li>
                </ol>
                <h3>Biceps</h3>
                <ol>
                    <li>Incline hammer curls</li>
                    <li>Spider curl</li>
                    <li>Barbell curl</li>
                    <li>Zotman curls</li>
                    <li>Overhead cable curl</li>
                </ol>
                <h3>Triceps</h3>
                <ol>
                    <li>Dips</li>
                    <li>Tricep extension (EZ bar)</li>
                    <li>Dumbbell floor press</li>
                    <li>Glose grip bench</li>
                    <li>Tricep pushdown</li>
                </ol>
                <h3>Abs</h3>
                <ol>
                    <li>Landmine 180's</li>
                    <li>Plank</li>
                    <li>Standing cable lift</li>
                    <li>Bottoms up</li>
                    <li>Elbow to knee</li>
                </ol>
                <h3>Shoulders</h3>
                <ol>
                    <li>Push press</li>
                    <li>Single-arm linear jammer</li>
                    <li>Standing dumbbell press</li>
                    <li>Side laterals to front raise</li>
                    <li>Reverse flyes</li>
                </ol>
                <h3>Traps</h3>
                <ol>
                    <li>Smith machine shrug</li>
                    <li>Kettlebell sumo high pull</li>
                    <li>Dumbbell shrug</li>
                    <li>Barbell shrug</li>
                    <li>Cable shrug</li>
                </ol>
            </div>
        );
    }
}

export default BestExercises;