
- [x] Problem 2.1 : Convert between hexidecimal <-> binary, you look at a chart. To remember A-F, just remember A, B, C being 10, 12, 15 and interpolate to get the other corresponding letters/numbers.
* (gotcha): Note for binary -> hex, however, that if
the total number of bits is not a multiple of 4, you should make the leftmost group
be the one with fewer than 4 bits, effectively padding the number with leading
zeros.


- [x] Problem 2.3  : solve table problem: convert decimal <-> hexidecimal <-> binary

SKIPPED:

Problem 2.2(skipped, it is just a shortcut for learning how to calculate powers of 2 to hex really fast.):
TLDR its solving for j to be the amount of zeros after where the 1 is e.g:
2^23 to hex is:
23 = i + 4j; where i must be 0-3 inclusive, and where 0,1,2,3 map to 1,2,4,8
23 = 3 + 4j; solve for j.
20 = 4j, j = 5 zeros, i = 8(because 3 maps to 8)
0x800000 = 2^23


Problem 2.4:(skipped because how often do you really need to add and subtract in hex?)

Endianness:
there is no technological reason to choose one byte ordering convention over
the other, and hence the arguments degenerate into bickering about sociopolitical
issues. As long as one of the conventions is selected and adhered to consistently,
the choice is arbitrary.
For most application programmers, the byte orderings used by their machines
are totally invisible; programs compiled for either class of machine give identi-
cal results. At times, however, byte ordering becomes an issue. The first is whenbinary data are communicated over a network between different machines. A
common problem is for data produced by a little-endian machine to be sent to
a big-endian machine, or vice versa, leading to the bytes within the words being
in reverse order for the receiving program.

cases where endianness does matter:
* networking
* reading dissaembly

Problem 2.5, endian order table with C code (might skip or godbolt it)

Problem 2.6: an exercise that shows a loose correlation between ints and floats having matching bits(might skip or godbolt it)

Problem 2.7 ascii encoding of characters (skip)

- [x] Problem 2.8 bitwise and or not xor

Problem 2.9 color bitwise exercise(skip, a bit too easy)

Problem 2.10-2.11 bitwise xor swap(C exercise, skip?)

Problem 2.12: bitwise mask sections of a 32bit number, e.g the lsb, the middle part, etc(requires the problem be written in C? Maybe write unit tests to automate checking and randomization?)

Problem 2.13 requires writing in C the functions that do bitwise | ^(xor)

2.14 - 2.15 , too easy! its about coersion of true and false. anything non-zero is true while false is 0

- [x] problem 2.16, bitshifting, logical and arithmetical shift(2 types of right shift) - done

2.17, convert a hex 4 bit number(maybe make this to 8) to both signed and unsigned decimal 

(skipped hex part, merged with 2.19) 2.18, convert hexidecmal to decimal in twos complement form

2.19 convert a 4-6 bit number from twos compliment binary to both signed and unsigned pairs

(skip) 2.20: Explain how Equation 2.5 applies to the entries in the table you generated when
solving Problem 2.19. 
----------------------------------------------------------------

//TODO! PARSE WHITESPACE OUT BEFORE CHECKING ANSWER?
TODO: 
Integer representations:

2.21: C implicitly casts signed to unsigned in signed and unsigned comparisons, Binary(twos complement) to unsigned decimal (note: a negative number converted to an unsigned positive number is most likely a bug. Show C infinite loop bug in debugger), static analysis can be ran to warn you about this


(skip) 2.22 - shows the multiple ways -4 can be represented in variable bit widths. already done this in 2.17 -> 2.19


- Enable C warning flags to the max! This reminds me of "use strict" in javascript.
- The C standard does not guarentee sizes for types like int,etc !!! just typedef to u32, i32.