# Langton's DJ

## Background

[Langton's ant][wikipedia] is a cellular automaton (similar to Conway's Game of Life), in which an ant on a two-dimensional grid follows a set of simple rules describing when to turn left/right based on the color of the square upon which the ant is standing. The traditional set of rules dictate:
* At a white square, turn 90° right, flip the color of the square, move forward one unit.
* At a black square, turn 90° left, flip the color of the square, move forward one unit.

[wikipedia]: https://en.wikipedia.org/wiki/Langton%27s_ant

## Functionality & MVP

Langton's DJ aims to give users an interface for transposing the mathematical beauty which is visually inherit in traditional Langton's ant simulations into an auditory medium.

Users will be able to:
* Start, pause, and reset the game board
* Select the starting position for an arbitrary number of ants
* Define the rules which govern the ants movement, including adding/removing colors
* Set the tempo at which moves are calculated and rendered
* Assign a sound to each rule (color) which is unique for each ant

In addition, the project will include:
* An Info modal which describes the background and rules of the game
* A production Readme

## Wireframes

![wireframe](https://github.com/AustinWood/langtons-dj/blob/master/docs/wireframe.jpg)

## Architecture and Technologies

This project will be implemented with the following technologies:
* React for overall structure and game logic
* Flocking.js to generate midi synth sounds, as well as synchronously playback drum loops
* Some animation library, which I will choose after I complete the basic game logic and audio integration

# Implementation Timeline

**w10d3:** Game renders with traditional rules and one ant. Reset/Pause/Start controls work.

**w10d5:** User can add ants, choose their initial starting position, as well as modify the rules of the game (including adding colors).

**w10d7:** User can sync drum loops with ant moves.

**w11d3:** Add a variety of midi synths to the sound options.

**w12d1:** Make site look beautiful.

**w12d4:** Use at least one animation library to make the site more interactive and responsive.
