Problem 2.1:
* Convert between hexidecimal <-> binary, you lok at a chart. To remember A-F, just remember A, B, C being  10, 12, 15 and interpolate to get the other corresponding letters/numbers.
* (gotcha): Note for binary -> hex, however, that if
the total number of bits is not a multiple of 4, you should make the leftmost group
be the one with fewer than 4 bits, effectively padding the number with leading
zeros.

Problem 2.2(skipped, it is just a shortcut for learning how to calculate powers of 2 to hex really fast.):
TLDR its solving for j to be the amount of zeros after where the 1 is e.g:
2^23 to hex is:
23 = i + 4j; where i must be 0-3 inclusive, and where 0,1,2,3 map to 1,2,4,8
23 = 3 + 4j; solve for j.
20 = 4j, j = 5 zeros, i = 8(because 3 maps to 8)
0x800000 = 2^23

Problem 2.3:
solve table problem:
* convert decimal <-> hexidecimal <-> binary

Problem 2.4:(skipped because how often do you really need to add and subtract in hex?)
