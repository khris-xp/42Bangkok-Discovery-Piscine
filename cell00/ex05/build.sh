#!/bin/bash
if [ $# -eq 0 ]
then
	echo "No arguments supplied"
	exit 1
else
	for dir in "$@"
	do
		# Create a directory for each argument
		mkdir "ex$dir"
	done
fi
