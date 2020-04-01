# About
Here I implemented a generator of random numbers and a script that sorts the numbers using streams.

# Description
File-generator.js creates a file of the fixed size (100MB) by filling it with random numbers from [0, 1000000).
Script.js reads numbers from the created file, sorts them and divides them to separate files. Then it reads numbers from all files simultaneously and writes the minimal number into the result file. All reading and writing is done asyncronously using streams.

# How to
npm install (to install line-by-line)
npm run generate (to generate a file with random numbers)
npm run start (to get a file with sorted numbers)

# Notes
I used line-by-line module as a wrapper for more comfortable work with ReadStreams.