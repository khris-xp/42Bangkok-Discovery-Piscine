Solution

To determine how many files there are in the current directory, put in ls -1 | wc -l. This uses wc to do a count of the number of lines (-l) in the output of ls -1. It doesn't count dotfiles. Please note that ls -l (that's an "L" rather than a "1" as in the previous examples) which I used in previous versions of this HOWTO will actually give you a file count one greater than the actual count.
