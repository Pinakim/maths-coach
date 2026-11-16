
/*XC: School Exam Cracker. The Final maths paper as 80 marks: a mark map, question patterns that keep returning, a one-mark sprint and a predicted full paper. */
(function(){
var TOP=[
 {k:'cc',n:'Circles and conics',w:14,hab:['A circle through two points with its centre on a line','A circle concentric with another that touches an axis','Radius from two parallel tangents','A parabola from its focus and directrix','An ellipse story: the foci and the sum of distances']},
 {k:'tr',n:'Trigonometry',w:12,hab:['Given sums of sines or tangents, prove a result','Product-of-cosines proofs','Sum-to-product fractions that collapse to tan or cot','A sector: perimeter, area and the angle']},
 {k:'ld',n:'Limits and derivatives',w:8,hab:['Standard limits with eˣ and sin x','A derivative from first principles','The quotient rule','A derivative at one point']},
 {k:'pc',n:'Permutations and combinations',w:7,hab:['Four-letter words from a word with repeated letters','The rank of a word in a dictionary','Letters into boxes, beads on a ring, diagonals','A committee with "exactly" or "at least"']},
 {k:'qd',n:'Quadratics and inequalities',w:6,hab:['A new equation whose roots are built from α and β','Roots that differ by a given number','A quadratic that keeps one sign for all x','A minimum or maximum value','An equation solved by a substitution']},
 {k:'sf',n:'Sets, relations and functions',w:6,hab:['Domain and range','Counting relations and subsets','Statement questions on ∈ and ⊂']},
 {k:'ss',n:'Sequence and series',w:6,hab:['Sum to n terms of a patterned series','A.M. and G.M. of two numbers','An infinite G.P.','A real-life A.P. story in four parts']},
 {k:'st',n:'Statistics',w:6,hab:['Mean, variance and standard deviation from a grouped table','Coefficient of variation','Mean deviation about the mean']},
 {k:'cx',n:'Complex numbers',w:4,hab:['Powers of i and ω','Polar form of a quotient','Assertion-reason on conjugate and inverse']},
 {k:'d3',n:'3D geometry',w:4,hab:['Image of a point in a coordinate plane','A coordinate plane dividing a segment','An angle bisector meeting the opposite side']},
 {k:'bn',n:'Binomial theorem',w:3,hab:['Number of terms after simplifying','A particular term, or the term free of x','Three coefficients in A.P.']},
 {k:'sl',n:'Straight lines',w:2,hab:['Same side or opposite sides of a line','A perpendicular line','Distance between parallel lines']},
 {k:'pr',n:'Probability',w:2,hab:['Odds in favour and against','Mutually exclusive and exhaustive events','Cards: "either … or"']}
];
var AR=['Both A and R are true, and R is the correct explanation of A','Both A and R are true, but R is not the correct explanation of A','A is true and R is false','A is false and R is true'];
/* Original questions written to the patterns of past papers. m = marks; o/a for one-mark choices; ans + s (marking scheme) for written answers. */
var QS=[
 {id:'cc1',t:'cc',m:1,q:'The centre of the circle x² + y² − 6x + 4y − 3 = 0 is',o:['(3, −2)','(−3, 2)','(6, −4)','(−6, 4)'],a:0,s:'Centre = (−g, −f) with 2g = −6 and 2f = 4, so (3, −2).'},
 {id:'cc2',t:'cc',m:1,q:'The length of the latus rectum of the parabola y² = 12x is',o:['3','6','12','24'],a:2,s:'y² = 4ax with 4a = 12. The latus rectum is 4a = 12.'},
 {id:'cc3',t:'cc',m:1,q:'The eccentricity of the ellipse x²/25 + y²/9 = 1 is',o:['3/5','4/5','5/4','16/25'],a:1,s:'a² = 25, b² = 9, so c² = 16 and e = c/a = 4/5.'},
 {id:'cc4',t:'cc',m:1,q:'For the circle x² + y² − 4x − 6y − 12 = 0:\n(P) its radius is 5 units\n(Q) its centre lies on x + y = 5\n(R) it passes through the origin\nWhich statements are correct?',o:['Only (P)','Only (P) and (Q)','Only (P) and (R)','All of (P), (Q) and (R)'],a:1,s:'Centre (2, 3), r² = 4 + 9 + 12 = 25. 2 + 3 = 5, so (Q) holds. At the origin the left side is −12, not 0, so (R) fails.'},
 {id:'cc5',t:'cc',m:2,q:'Find the radius of the circle that has 3x − 4y + 4 = 0 and 3x − 4y − 16 = 0 as tangents.',ans:'2 units',s:['The tangents are parallel, so the distance between them is the diameter: |4 − (−16)| / √(9 + 16) = 20/5 = 4. [1]','Radius = 4 ÷ 2 = 2 units. [1]']},
 {id:'cc6',t:'cc',m:3,q:'Find the equation of the circle concentric with x² + y² − 6x + 8y − 11 = 0 which touches the x-axis.',ans:'x² + y² − 6x + 8y + 9 = 0',s:['Same centre: (3, −4). [1]','Touching the x-axis means radius = |y-coordinate of the centre| = 4. [1]','(x − 3)² + (y + 4)² = 16, which is x² + y² − 6x + 8y + 9 = 0. [1]']},
 {id:'cc7',t:'cc',m:3,q:'Find the equation of the parabola whose focus is (1, 2) and whose directrix is x + 3 = 0.',ans:'y² − 4y − 8x − 4 = 0',s:['For a point (x, y) on the parabola, distance from the focus = distance from the directrix. [1]','(x − 1)² + (y − 2)² = (x + 3)². [1]','Expand and simplify: y² − 4y − 8x − 4 = 0. [1]']},
 {id:'cc8',t:'cc',m:5,q:'Find the equation of the circle which passes through (1, 2) and (3, 4) and has its centre on the line x − y = 1.',ans:'x² + y² − 6x − 4y + 9 = 0',s:['Let the centre be (h, k). Equal distances to the two points: (h − 1)² + (k − 2)² = (h − 3)² + (k − 4)². [1]','This simplifies to h + k = 5. [1]','With h − k = 1: h = 3, k = 2. [1]','r² = (3 − 1)² + (2 − 2)² = 4. [1]','(x − 3)² + (y − 2)² = 4, which is x² + y² − 6x − 4y + 9 = 0. [1]']},
 {id:'cc9',t:'cc',m:5,q:'A whispering gallery has an elliptical floor. Two speakers stand at the foci (±6, 0), in metres, and for every point on the wall the sum of its distances from the two speakers is 20 m. Find:\n(a) the lengths of the semi-major and semi-minor axes\n(b) the eccentricity\n(c) the length of the latus rectum\n(d) the equation of the wall.',ans:'(a) 10 m and 8 m  (b) 3/5  (c) 12.8 m  (d) x²/100 + y²/64 = 1',s:['Sum of focal distances = 2a = 20, so a = 10. [1]','c = 6, so b² = a² − c² = 64 and b = 8. [1]','e = c/a = 3/5. [1]','Latus rectum = 2b²/a = 128/10 = 12.8 m. [1]','Equation: x²/100 + y²/64 = 1. [1]']},
 {id:'tr1',t:'tr',m:1,q:'sin 75° cos 15° + cos 75° sin 15° =',o:['0','1/2','√3/2','1'],a:3,s:'It is sin(75° + 15°) = sin 90° = 1.'},
 {id:'tr2',t:'tr',m:1,q:'The value of tan 15° + cot 15° is',o:['2','2√3','4','1'],a:2,s:'tan 15° = 2 − √3 and cot 15° = 2 + √3. Their sum is 4.'},
 {id:'tr3',t:'tr',m:1,q:'Assertion (A): The greatest value of 3 sin x + 4 cos x is 5.\nReason (R): The greatest value of a sin x + b cos x is √(a² + b²).',o:AR,a:0,s:'√(9 + 16) = 5, and the reason is exactly why.'},
 {id:'tr4',t:'tr',m:1,q:'An angle of 7π/12 radians, in degrees, is',o:['75°','105°','120°','135°'],a:1,s:'7π/12 × 180°/π = 105°.'},
 {id:'tr5',t:'tr',m:2,q:'A wheel makes 240 revolutions per minute. Through how many radians does it turn in one second?',ans:'8π radians',s:['240 revolutions per minute = 4 revolutions per second. [1]','One revolution is 2π radians, so it turns 4 × 2π = 8π radians. [1]']},
 {id:'tr6',t:'tr',m:3,q:'The perimeter of a sector of a circle is 16 cm and its area is 16 cm². Find the radius and the angle of the sector in degrees, minutes and seconds.',ans:'r = 4 cm, angle = 2 radians ≈ 114° 35′ 30″',s:['2r + rθ = 16 and ½r²θ = 16. [1]','Put rθ = 16 − 2r: ½r(16 − 2r) = 16, so r² − 8r + 16 = 0 and r = 4 cm. Then θ = 2 radians. [1]','2 × 180°/π ≈ 114.5916° ≈ 114° 35′ 30″. [1]']},
 {id:'tr7',t:'tr',m:3,q:'Prove that (sin 5A − sin 3A) / (cos 5A + cos 3A) = tan A.',ans:'Proof',s:['sin 5A − sin 3A = 2 cos 4A sin A. [1]','cos 5A + cos 3A = 2 cos 4A cos A. [1]','Divide: sin A / cos A = tan A. [1]']},
 {id:'tr8',t:'tr',m:5,q:'Prove that cos 20° cos 40° cos 80° = 1/8.',ans:'Proof',s:['Multiply and divide by 2 sin 20°. [1]','2 sin 20° cos 20° = sin 40°. [1]','Then 2 sin 40° cos 40° = sin 80°, and 2 sin 80° cos 80° = sin 160°. [1]','So the product = sin 160° / (8 sin 20°). [1]','sin 160° = sin 20°, which gives 1/8. [1]']},
 {id:'tr9',t:'tr',m:5,q:'If sin A + sin B = a and cos A + cos B = b, prove that\n(i) cos(A − B) = (a² + b² − 2)/2\n(ii) tan((A + B)/2) = a/b.',ans:'Proof',s:['Square and add: a² + b² = 2 + 2(cos A cos B + sin A sin B). [1]','So a² + b² = 2 + 2 cos(A − B), which gives (i). [1]','a = 2 sin((A + B)/2) cos((A − B)/2). [1]','b = 2 cos((A + B)/2) cos((A − B)/2). [1]','Divide: a/b = tan((A + B)/2). [1]']},
 {id:'ld1',t:'ld',m:1,q:'The limit of sin 5x / sin 2x as x → 0 is',o:['2/5','5/2','1','0'],a:1,s:'Each sine behaves like its angle near 0, so the limit is 5x/2x = 5/2.'},
 {id:'ld2',t:'ld',m:1,q:'The limit of (x³ − 8)/(x − 2) as x → 2 is',o:['4','8','12','0'],a:2,s:'Use the limit of (xⁿ − aⁿ)/(x − a) = n·aⁿ⁻¹ = 3 × 2² = 12.'},
 {id:'ld3',t:'ld',m:1,q:'If y = 1/x, then dy/dx at x = 2 is',o:['1/4','−1/4','−1/2','1/2'],a:1,s:'dy/dx = −1/x², which is −1/4 at x = 2.'},
 {id:'ld4',t:'ld',m:2,q:'Evaluate the limit of (e^(3x) − 1) / sin 2x as x → 0.',ans:'3/2',s:['Write it as [(e^(3x) − 1)/3x] × [2x / sin 2x] × (3/2). [1]','Both brackets tend to 1, so the limit is 3/2. [1]']},
 {id:'ld5',t:'ld',m:2,q:'Differentiate (x² + 1)/(x − 1) with respect to x.',ans:'(x² − 2x − 1)/(x − 1)²',s:['Quotient rule: [2x(x − 1) − (x² + 1)(1)] / (x − 1)². [1]','Simplify: (x² − 2x − 1)/(x − 1)². [1]']},
 {id:'ld6',t:'ld',m:3,q:'Find the derivative of √(2x + 3) from first principles.',ans:'1/√(2x + 3)',s:['f′(x) = limit as h → 0 of [√(2x + 2h + 3) − √(2x + 3)] / h. [1]','Rationalise: the numerator becomes 2h, over h[√(2x + 2h + 3) + √(2x + 3)]. [1]','Let h → 0: 2 / (2√(2x + 3)) = 1/√(2x + 3). [1]']},
 {id:'pc1',t:'pc',m:1,q:'The number of diagonals of a decagon is',o:['35','45','70','90'],a:0,s:'n(n − 3)/2 = 10 × 7 / 2 = 35.'},
 {id:'pc2',t:'pc',m:1,q:'In how many ways can 4 letters be posted in 3 letter boxes?',o:['12','64','81','7'],a:2,s:'Each letter has 3 choices: 3⁴ = 81.'},
 {id:'pc3',t:'pc',m:1,q:'Assertion (A): 6 different beads can form a necklace in 60 ways.\nReason (R): When clockwise and anticlockwise orders count as the same, n different things can be arranged in a circle in (n − 1)!/2 ways.',o:AR,a:0,s:'5!/2 = 60, and the reason is the rule used.'},
 {id:'pc4',t:'pc',m:2,q:'A committee of 5 is to be formed from 7 men and 5 women. In how many ways can it be formed with exactly 2 women?',ans:'350',s:['Choose 2 women from 5 and 3 men from 7: C(5, 2) × C(7, 3). [1]','10 × 35 = 350. [1]']},
 {id:'pc5',t:'pc',m:5,q:'How many four-letter words, with or without meaning, can be formed from the letters of the word MATHEMATICS?',ans:'2454',s:['Letters: M, A, T twice each; H, E, I, C, S once. That is 8 different letters and 3 pairs. [1]','All four different: P(8, 4) = 1680. [1]','One pair and two different: C(3, 1) × C(7, 2) × 4!/2! = 756. [1]','Two pairs: C(3, 2) × 4!/(2! 2!) = 18. [1]','Total = 1680 + 756 + 18 = 2454. [1]']},
 {id:'pc6',t:'pc',m:3,q:'The letters of the word SMILE are arranged in all possible ways and the words are listed as in a dictionary. Find the rank of the word SMILE.',ans:'118',s:['Alphabetical order: E, I, L, M, S. Words starting with E, I, L or M: 4 × 4! = 96. [1]','Starting with S, then E, I or L: 3 × 3! = 18. Starting SM, then E: 2! = 2. Starting SMI, then E: 1. [1]','Rank = 96 + 18 + 2 + 1 + 1 = 118. [1]']},
 {id:'qd1',t:'qd',m:1,q:'If the roots of x² − 5x + k = 0 differ by 1, then k =',o:['4','5','6','8'],a:2,s:'(α − β)² = (α + β)² − 4αβ, so 1 = 25 − 4k and k = 6.'},
 {id:'qd2',t:'qd',m:1,q:'x² + kx + 9 > 0 for all real x when',o:['k > 6','−6 < k < 6','k < −6','k = 6'],a:1,s:'The discriminant must be negative: k² − 36 < 0.'},
 {id:'qd3',t:'qd',m:1,q:'The minimum value of x² − 4x + 7 is',o:['3','4','7','−3'],a:0,s:'(x − 2)² + 3 has its least value 3 at x = 2.'},
 {id:'qd4',t:'qd',m:2,q:'If α and β are the roots of x² − 3x + 1 = 0, find the values of α² + β² and 1/α + 1/β.',ans:'7 and 3',s:['α + β = 3, αβ = 1. α² + β² = (α + β)² − 2αβ = 9 − 2 = 7. [1]','1/α + 1/β = (α + β)/αβ = 3. [1]']},
 {id:'qd5',t:'qd',m:3,q:'If α and β are the roots of 2x² − 4x + 1 = 0, find the equation whose roots are α + 1/β and β + 1/α.',ans:'2x² − 12x + 9 = 0',s:['α + β = 2, αβ = 1/2. [1]','Sum of new roots = (α + β) + (α + β)/αβ = 2 + 4 = 6. Product = αβ + 2 + 1/αβ = 1/2 + 2 + 2 = 9/2. [1]','x² − 6x + 9/2 = 0, which is 2x² − 12x + 9 = 0. [1]']},
 {id:'qd6',t:'qd',m:3,q:'Solve: (x + 1)(x + 2)(x + 3)(x + 4) = 120.',ans:'x = 1, x = −6, and x = (−5 ± i√39)/2',s:['Pair the brackets: (x² + 5x + 4)(x² + 5x + 6) = 120. Let y = x² + 5x. [1]','(y + 4)(y + 6) = 120 gives y² + 10y − 96 = 0, so y = 6 or y = −16. [1]','x² + 5x − 6 = 0 gives x = 1 or −6. x² + 5x + 16 = 0 gives x = (−5 ± i√39)/2. [1]']},
 {id:'sf1',t:'sf',m:1,q:'If n(A) = 3 and n(B) = 2, the number of relations from A to B is',o:['6','32','64','36'],a:2,s:'A × B has 6 elements, so there are 2⁶ = 64 relations.'},
 {id:'sf2',t:'sf',m:1,q:'Let A = {1, 2}.\nStatement I: ∅ ⊂ A.\nStatement II: {1} ∈ A.',o:['Only Statement I is true','Only Statement II is true','Both statements are true','Both statements are false'],a:0,s:'The empty set is a subset of every set. {1} is a subset of A, not an element of it.'},
 {id:'sf3',t:'sf',m:1,q:'The range of f(x) = |x − 2| + 3 is',o:['(3, ∞)','[3, ∞)','[2, ∞)','All real numbers'],a:1,s:'|x − 2| ≥ 0 with equality at x = 2, so f(x) ≥ 3 and 3 is reached.'},
 {id:'sf4',t:'sf',m:2,q:'Two finite sets have m and n elements. The number of subsets of the first set is 48 more than that of the second. Find m and n.',ans:'m = 6, n = 4',s:['2ᵐ − 2ⁿ = 48, so 2ⁿ(2ᵐ⁻ⁿ − 1) = 16 × 3. [1]','n = 4 and 2ᵐ⁻ⁿ = 4, so m = 6. [1]']},
 {id:'sf5',t:'sf',m:3,q:'Find the domain and range of f(x) = x² / (1 + x²).',ans:'Domain: all real numbers. Range: [0, 1)',s:['1 + x² is never 0, so the domain is all real numbers. [1]','Let y = x²/(1 + x²). Then x² = y/(1 − y). [1]','x² ≥ 0 needs 0 ≤ y < 1, so the range is [0, 1). [1]']},
 {id:'ss1',t:'ss',m:1,q:'The sum to infinity of 9 + 3 + 1 + 1/3 + … is',o:['12','13','27/2','18'],a:2,s:'a/(1 − r) = 9 ÷ (2/3) = 27/2.'},
 {id:'ss2',t:'ss',m:1,q:'The A.M. of two positive numbers is 10 and their G.M. is 8. The numbers are',o:['16 and 4','12 and 8','18 and 2','10 and 8'],a:0,s:'A ± √(A² − G²) = 10 ± 6.'},
 {id:'ss3',t:'ss',m:3,q:'The sum of the first three terms of a G.P. is 26 and their product is 216. Find the terms.',ans:'2, 6, 18 (or 18, 6, 2)',s:['Take the terms as a/r, a, ar. The product a³ = 216 gives a = 6. [1]','6/r + 6 + 6r = 26 gives 3r² − 10r + 3 = 0, so r = 3 or 1/3. [1]','The terms are 2, 6, 18, or in the reverse order. [1]']},
 {id:'ss4',t:'ss',m:5,q:'Find the sum to n terms of the series 1·3 + 3·5 + 5·7 + …',ans:'n(4n² + 6n − 1)/3',s:['nth term = (2n − 1)(2n + 1) = 4n² − 1. [1]','Sum = 4Σn² − n. [1]','= 4 × n(n + 1)(2n + 1)/6 − n. [1]','= n[2(n + 1)(2n + 1) − 3]/3. [1]','= n(4n² + 6n − 1)/3. Check: n = 2 gives 18 = 3 + 15. [1]']},
 {id:'ss5',t:'ss',m:5,q:'A concert hall has 20 seats in its first row, and each row behind has 2 more seats than the row in front. There are 25 rows.\n(i) How many seats are in the last row?\n(ii) How many seats are there in all?\n(iii) Which row has 50 seats?\n(iv) Write an expression for the total number of seats in the first n rows.',ans:'(i) 68  (ii) 1100  (iii) the 16th row  (iv) n(n + 19)',s:['A.P. with a = 20, d = 2. [1]','Last row: 20 + 24 × 2 = 68. [1]','Total: (25/2)(20 + 68) = 1100. [1]','20 + 2(n − 1) = 50 gives n = 16. [1]','Sₙ = (n/2)[40 + 2(n − 1)] = n(n + 19). [1]']},
 {id:'st1',t:'st',m:1,q:'The variance of 2, 4, 6, 8, 10 is',o:['4','8','10','2√2'],a:1,s:'Mean 6. Squared deviations 16, 4, 0, 4, 16 add to 40, and 40/5 = 8.'},
 {id:'st2',t:'st',m:1,q:'The mean deviation about the mean of 4, 7, 8, 9, 12 is',o:['2','2.5','3','4'],a:0,s:'Mean 8. Deviations 4, 1, 0, 1, 4 add to 10, and 10/5 = 2.'},
 {id:'st3',t:'st',m:5,q:'Find the mean, variance, standard deviation and coefficient of variation:\nClass: 0–10, 10–20, 20–30, 30–40, 40–50\nFrequency: 5, 8, 15, 16, 6',ans:'Mean 27, variance 132, S.D. ≈ 11.49, C.V. ≈ 42.55%',s:['Mid-values 5, 15, 25, 35, 45; N = 50. [1]','Σfx = 1350, so the mean is 27. [1]','Σf(x − 27)² = 2420 + 1152 + 60 + 1024 + 1944 = 6600. [1]','Variance = 6600/50 = 132; S.D. = √132 ≈ 11.49. [1]','C.V. = 11.49/27 × 100 ≈ 42.55%. [1]']},
 {id:'cx1',t:'cx',m:1,q:'i²⁰²⁶ + i²⁰²⁷ =',o:['−1 − i','1 + i','−1 + i','0'],a:0,s:'2026 leaves remainder 2 and 2027 leaves 3 on division by 4: i² + i³ = −1 − i.'},
 {id:'cx2',t:'cx',m:1,q:'Assertion (A): The multiplicative inverse of 3 + 4i is (3 − 4i)/25.\nReason (R): For a non-zero complex number z, the inverse is z̄ / |z|².',o:AR,a:0,s:'|3 + 4i|² = 25 and the conjugate is 3 − 4i, exactly as the reason says.'},
 {id:'cx3',t:'cx',m:3,q:'Express (5 − i)/(2 − 3i) in polar form.',ans:'√2 (cos π/4 + i sin π/4)',s:['Multiply top and bottom by 2 + 3i: (10 + 15i − 2i + 3)/13 = 1 + i. [1]','Modulus = √2. [1]','The point is in the first quadrant with tan θ = 1, so θ = π/4: √2 (cos π/4 + i sin π/4). [1]']},
 {id:'d31',t:'d3',m:1,q:'The image of the point (2, −3, 5) in the xy-plane is',o:['(2, −3, −5)','(−2, 3, 5)','(2, 3, 5)','(−2, −3, 5)'],a:0,s:'Reflection in the xy-plane changes only the sign of z.'},
 {id:'d32',t:'d3',m:1,q:'The yz-plane divides the line joining (−2, 4, 7) and (3, −5, 8) in the ratio',o:['2 : 3','3 : 2','1 : 2','2 : 1'],a:0,s:'On the yz-plane x = 0: (3k − 2)/(k + 1) = 0 gives k = 2/3.'},
 {id:'d33',t:'d3',m:3,q:'The vertices of triangle ABC are A(1, 1, 1), B(3, 3, 2) and C(1, 5, 4). The internal bisector of angle A meets BC at D. Find the coordinates of D.',ans:'D = (9/4, 15/4, 11/4)',s:['AB = √(4 + 4 + 1) = 3 and AC = √(0 + 16 + 9) = 5. [1]','The bisector divides BC in the ratio AB : AC = 3 : 5. [1]','D = (5B + 3C)/8 = (18/8, 30/8, 22/8) = (9/4, 15/4, 11/4). [1]']},
 {id:'bn1',t:'bn',m:1,q:'The number of terms in (x + y)¹⁰ + (x − y)¹⁰ after simplification is',o:['5','6','11','22'],a:1,s:'The odd-power terms cancel. The terms with y⁰, y², …, y¹⁰ remain: 6 terms.'},
 {id:'bn2',t:'bn',m:1,q:'The coefficient of x³ in the expansion of (1 + 2x)⁵ is',o:['40','80','10','160'],a:1,s:'C(5, 3) × 2³ = 10 × 8 = 80.'},
 {id:'bn3',t:'bn',m:2,q:'Find the term independent of x in the expansion of (x + 2/x)⁶.',ans:'160',s:['General term: C(6, r) x⁶⁻ʳ (2/x)ʳ = C(6, r) 2ʳ x⁶⁻²ʳ. The power is 0 when r = 3. [1]','C(6, 3) × 2³ = 20 × 8 = 160. [1]']},
 {id:'bn4',t:'bn',m:3,q:'The coefficients of the 2nd, 3rd and 4th terms in the expansion of (1 + x)ⁿ are in A.P. Find n.',ans:'n = 7',s:['The coefficients are C(n, 1), C(n, 2), C(n, 3), so 2C(n, 2) = C(n, 1) + C(n, 3). [1]','n(n − 1) = n + n(n − 1)(n − 2)/6, which gives n² − 9n + 14 = 0. [1]','n = 7 (n = 2 has no 4th term). [1]']},
 {id:'sl1',t:'sl',m:1,q:'The slope of a line perpendicular to 2x − 3y + 5 = 0 is',o:['2/3','−2/3','3/2','−3/2'],a:3,s:'The given line has slope 2/3. The perpendicular slope is −3/2.'},
 {id:'sl2',t:'sl',m:1,q:'The distance between the parallel lines 3x + 4y = 5 and 3x + 4y = 15 is',o:['1','2','5','10'],a:1,s:'|15 − 5| / √(9 + 16) = 10/5 = 2.'},
 {id:'sl3',t:'sl',m:2,q:'Do the points (1, 2) and (3, −1) lie on the same side or on opposite sides of the line 2x − y + 1 = 0?',ans:'On the same side',s:['Substitute each point into 2x − y + 1: (1, 2) gives 1 and (3, −1) gives 8. [1]','Both values are positive, so the points are on the same side. [1]']},
 {id:'pr1',t:'pr',m:1,q:'One card is drawn from a pack of 52. The probability that it is a king or a spade is',o:['4/13','17/52','1/4','2/13'],a:0,s:'4 kings + 13 spades − 1 king of spades = 16 cards, and 16/52 = 4/13.'},
 {id:'pr2',t:'pr',m:1,q:'The odds in favour of an event are 3 : 5. The probability of the event is',o:['3/5','3/8','5/8','2/5'],a:1,s:'P = 3/(3 + 5) = 3/8.'},
 {id:'pr3',t:'pr',m:2,q:'A, B and C are mutually exclusive and exhaustive events with P(A) = 2P(B) = 4P(C). Find P(A).',ans:'P(A) = 4/7',s:['Let P(A) = x. Then P(B) = x/2 and P(C) = x/4, and the three add to 1. [1]','7x/4 = 1, so P(A) = 4/7. [1]']}
];
/* patterns that came back most often in past papers, each linked to one question to practise it */
var RADAR=[['A new equation from α and β','In almost every paper','qd5'],['A sector or radian story','In most papers','tr6'],['An equation solved by substitution','In most papers','qd6'],['A product-of-cosines proof','Five years running','tr8'],['The rank of a word','In one paper out of three','pc6'],['Three coefficients in A.P.','In nearly every big paper','bn4'],['Variance from a table','Every time statistics is tested','st3'],['Domain and range','In one paper out of three','sf5'],['Four-letter words','In the last two years','pc5'],['A sum-to-product identity','Often, with new angles','tr7']];
var RN=['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii','xiii','xiv','xv','xvi','xvii','xviii','xix','xx'];
var XV={v:'home'},TM=null;
function X(){if(!S.xc)S.xc={q:{},sp:{b:0,n:0},mk:null,hist:[]};var x=S.xc;if(!x.q)x.q={};if(!x.sp)x.sp={b:0,n:0};if(!x.hist)x.hist=[];return x}
function top(k){return TOP.filter(function(t){return t.k===k})[0]}
function qq(id){return QS.filter(function(q){return q.id===id})[0]}
function tq(k){return QS.filter(function(q){return q.t===k})}
function fr(id){return(X().q[id]||{b:0}).b||0}
function tAvg(k){var L=tq(k),s=0;L.forEach(function(q){s+=fr(q.id)});return L.length?s/L.length:0}
function tBank(k){return top(k).w*tAvg(k)}
function total(){var s=0;TOP.forEach(function(t){s+=tBank(t.k)});return s}
function r1(v){return Math.round(v*10)/10}
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function pen(m,L){return L?Math.min(m,Math.max(1,Math.round(m*[.25,.5,.75][L-1]))):0}
function hl(key){try{return(HK[key]||{l:0}).l||0}catch(e){return 0}}
function clock(s){s=Math.max(0,Math.round(s));var h=Math.floor(s/3600),m=Math.floor(s%3600/60);return(h?h+':'+('0'+m).slice(-2):m)+':'+('0'+s%60).slice(-2)}
function stop(){if(TM){clearInterval(TM);TM=null}}
function back(l,js){return'<p class="back"><button class="link" onclick="'+js+'">← '+esc(l)+'</button></p>'}
/* the next small step: the biggest block of marks still open, easiest question in it first */
function nextStep(){var best=null,bv=0;TOP.forEach(function(t){var open=tq(t.k).filter(function(q){return fr(q.id)<1});if(!open.length)return;var v=t.w*(1-tAvg(t.k));if(v>bv){bv=v;open.sort(function(a,b){return a.m-b.m||fr(a.id)-fr(b.id)});best=open[0]}});return best}
/* bank a result for one question; f is the fraction of its marks earned */
function bank(q,f,ok,pick){var x=X(),st=x.q[q.id]||(x.q[q.id]={b:0,n:0}),before=Math.floor(total()/10);
  st.n++;st.ts=Date.now();if(f>st.b)st.b=f;
  S.ev.push({k:'q',topic:'School exam · '+top(q.t).n,ok:!!ok,habit:'',type:'xc',ts:Date.now()});
  try{var ref='xc:'+q.id;if(ok)mkFix(ref);else mkAdd({src:'School exam',topic:top(q.t).n,q:q.q,o:q.o||null,a:q.o?q.a:null,pick:pick==null?null:pick,ans:q.o?null:q.ans,habit:'',h:q.o?q.s:q.s.join(' '),ref:ref})}catch(e){}
  save();var after=Math.floor(total()/10);if(after>before)try{showToast(after*10+' marks banked. Step by step, the paper is turning your way.')}catch(e){}}

/* ---------- home ---------- */
function grid(){var h='<div class="xc-grid" aria-hidden="true">';TOP.forEach(function(t,i){var on=Math.round(tBank(t.k));for(var j=0;j<t.w;j++)h+='<i class="k'+(i%5+1)+(j<on?' on':'')+'"></i>'});return h+'</div>'}
function home(){var T=total(),nx=nextStep(),x=X(),mk=x.mk;
  var h='<h1>School Exam Cracker</h1><p class="sub">Final exam · Maths. The paper is 80 marks. Every pattern you master here banks some of them.</p>';
  h+='<div class="card xc-hero"><div class="eyebrow">Marks banked</div><div class="xc-top"><div class="xc-big">'+r1(T)+' <small>of 80</small></div></div>'+grid()+'<p class="xc-key">Each square is one mark of the paper, grouped by chapter. A filled square is a mark you can now expect to score.</p>';
  h+=nx?'<button class="btn" onclick="xcOpen(\''+nx.id+'\')">Next small step · '+esc(top(nx.t).n)+' · '+nx.m+' mark'+(nx.m>1?'s':'')+'</button>':'<div class="fb ok"><b>Every pattern is banked.</b> Keep it warm with a predicted paper.</div>';
  h+='<div class="xc-modes"><button class="btn alt" onclick="xcSprint()">One-mark sprint'+(x.sp.n?' · best '+x.sp.b+'/10':'')+'</button><button class="btn alt" onclick="xcMock()">'+(mk?'Continue the paper':'Predicted paper')+'</button></div></div>';
  h+='<div class="card"><b>Where the marks are</b><p class="sub" style="margin:4px 0 4px">Biggest first. Tap a chapter to see what the examiner likes to ask.</p>';
  TOP.forEach(function(t,i){var L=tq(t.k),dn=L.filter(function(q){return fr(q.id)>=1}).length,b=tBank(t.k);
    h+='<button class="trow" onclick="xcTopic(\''+t.k+'\')"><span class="xc-dot k'+(i%5+1)+'"></span><span class="tt"><b>'+esc(t.n)+'</b><small>'+dn+' of '+L.length+' patterns mastered</small></span><span class="pill'+(dn===L.length?' ok':b>0?' mid':'')+'">'+r1(b)+' / '+t.w+'</span></button>'});
  h+='</div><div class="card"><b>Repeat radar</b><p class="sub" style="margin:4px 0 4px">These question types keep coming back with new numbers. Learn each method once.</p>';
  RADAR.forEach(function(r,i){var q=qq(r[2]),d=fr(r[2])>=1;h+='<button class="trow" onclick="xcOpen(\''+r[2]+'\',\'home\')"><span class="tn">'+(i+1)+'</span><span class="tt"><b>'+esc(r[0])+'</b><small>'+esc(r[1])+' · '+q.m+' marks</small></span>'+(d?'<span class="pill ok">Mastered</span>':'<span class="pill st">Practise</span>')+'</button>'});
  h+='</div><div class="card"><b>How the paper is built</b><div class="xc-sec"><div><b>20</b><span>Section A<br>20 × 1 mark</span></div><div><b>14</b><span>Section B<br>7 × 2 marks</span></div><div><b>21</b><span>Section C<br>7 × 3 marks</span></div><div><b>25</b><span>Section D<br>5 × 5 marks</span></div></div><p class="sub" style="margin:0">Three hours, plus reading time. About five of the one-mark questions are assertion-reason or statement questions, so read every word. Three questions in each of Sections B, C and D offer a choice.</p></div>';
  if(x.hist.length)h+='<div class="card"><b>Predicted papers so far</b>'+x.hist.slice(-5).reverse().map(function(r){return'<div class="tbar"><span>'+new Date(r.ts).toLocaleDateString(undefined,{day:'numeric',month:'short'})+'</span><div class="tr"><i style="width:'+Math.round(r.sc/80*100)+'%;background:var(--accent)"></i></div><em>'+r1(r.sc)+'</em></div>'}).join('')+'</div>';
  app.innerHTML=h}

/* ---------- one chapter ---------- */
function topicView(){var t=top(XV.k),L=tq(t.k).slice().sort(function(a,b){return a.m-b.m});
  var h=back('School Exam Cracker',"xcHome()")+'<h1>'+esc(t.n)+'</h1><p class="sub">Worth about '+t.w+' of the 80 marks. You have banked '+r1(tBank(t.k))+'.</p>';
  h+='<div class="card"><b>What the examiner likes to ask</b><ul class="xc-hab">'+t.hab.map(function(x){return'<li>'+esc(x)+'</li>'}).join('')+'</ul></div><div class="card"><b>Patterns to master</b>';
  L.forEach(function(q){var f=fr(q.id),st=X().q[q.id];h+='<button class="trow" onclick="xcOpen(\''+q.id+'\',\'topic\')"><span class="xc-mk">'+q.m+' mark'+(q.m>1?'s':'')+'</span><span class="tt"><b>'+esc(q.q.split('\n')[0].slice(0,70))+(q.q.length>70?'…':'')+'</b><small>'+(q.o?'Choose the answer':'Written answer')+'</small></span>'+(f>=1?'<span class="pill ok">Mastered</span>':f>0?'<span class="pill mid">Almost</span>':st?'<span class="pill bad">Try again</span>':'<span class="pill">New</span>')+'</button>'});
  app.innerHTML=h+'</div>'}

/* ---------- one question ---------- */
function qHead(q,extra){return'<div class="xc-qhd"><span class="eyebrow">'+esc(top(q.t).n)+(extra?' · '+extra:'')+'</span><span class="xc-mk">'+q.m+' mark'+(q.m>1?'s':'')+'</span></div><div class="xc-q">'+esc(q.q)+'</div>'}
function scheme(q){return'<div class="ansb" style="margin-top:12px"><small>Answer</small><div>'+esc(q.ans)+'</div></div><ol class="xc-sch">'+q.s.map(function(x){return'<li>'+esc(x)+'</li>'}).join('')+'</ol>'}
function qView(){var q=qq(XV.id),key='xc:'+q.id,L=hl(key),h=back(XV.from==='home'?'School Exam Cracker':top(q.t).n,XV.from==='home'?'xcHome()':"xcTopic('"+q.t+"')");
  h+='<div class="card">'+qHead(q);
  if(q.o){optPm(key,q.o).forEach(function(k){var c='opt';if(XV.pick!=null){if(k===q.a)c+=' ok';else if(k===XV.pick)c+=' bad'}h+='<button class="'+c+'"'+(XV.pick!=null?' disabled':'')+' onclick="xcPick('+k+')">'+esc(q.o[k])+'</button>'});
    if(XV.pick!=null){var ok=XV.pick===q.a;h+='<div class="fb '+(ok?'ok':'bad')+'"><b>'+(ok?(L?'Right, with a hint. Half banked: try it again later without one.':'Right. Banked.'):'Not this time.')+'</b> '+esc(q.s)+'</div>'}
  }else if(!XV.show){h+='<p class="sub" style="margin:12px 0 0">Work it out on paper as you would in the exam. Stuck? The Hint button gives a little at a time.</p><button class="btn" onclick="xcShow()">I have written my answer</button>';
  }else{h+=scheme(q)+'<p class="sub" style="margin:10px 0 0"><b>Mark yourself honestly.</b> One mark for each step you wrote correctly.'+(L?' Hints used: '+L+', so '+pen(q.m,L)+' mark'+(pen(q.m,L)>1?'s come':' comes')+' off.':'')+'</p><div class="xc-marks">';
    for(var i=0;i<=q.m;i++)h+='<button class="'+(XV.aw===i?'on':'')+'"'+(XV.aw!=null?' disabled':'')+' onclick="xcAward('+i+')" aria-label="'+i+' marks">'+i+'</button>';
    h+='</div>';if(XV.aw!=null){var net=Math.max(0,XV.aw-pen(q.m,L));h+='<div class="fb '+(net>=q.m?'ok':net>0?'mid':'bad')+'"><b>'+net+' of '+q.m+' banked.</b> '+(net>=q.m?'This pattern is yours.':'Read the step you missed, then try it again tomorrow. Small steps add up.')+'</div>'}}
  h+='</div>';
  if(XV.pick!=null||XV.aw!=null){var nx=nextStep();h+=(nx?'<button class="btn" onclick="xcOpen(\''+nx.id+'\',\''+(XV.from||'topic')+'\')">Next small step · '+nx.m+' mark'+(nx.m>1?'s':'')+'</button>':'')+'<button class="btn alt" onclick="xcOpen(\''+q.id+'\',\''+(XV.from||'topic')+'\')">Try this one again</button>'}
  app.innerHTML=h}

/* ---------- one-mark sprint: ten Section A questions against the clock ---------- */
function sprintView(){var s=XV,q=qq(s.ids[s.i]);
  if(s.end){stop();var x=X();var h=back('School Exam Cracker','xcHome()')+'<h1>Sprint finished</h1><div class="card xc-hero"><div class="xc-big">'+s.ok+' <small>of 10</small></div><p class="sub" style="margin:6px 0 0">'+(s.ok>=9?'Section A would be nearly full marks at this pace.':s.ok>=6?'A solid base. The misses are saved in Mistakes for a retry.':'Slow down and read each option. The misses are saved in Mistakes.')+' Best so far: '+x.sp.b+' of 10.</p></div><button class="btn" onclick="xcSprint()">Another sprint</button><button class="btn alt" onclick="xcHome()">Back</button>';app.innerHTML=h;return}
  var left=600-(Date.now()-s.t0)/1000,h2='<div class="meta"><span>One-mark sprint · '+(s.i+1)+' of 10</span><span class="xc-clock'+(left<60?' low':'')+'" id="xcClock">'+clock(left)+'</span></div><div class="bar"><i style="width:'+(s.i*10)+'%"></i></div><div class="card">'+qHead(q);
  optPm('xcs:'+q.id,q.o).forEach(function(k){var c='opt';if(s.pick!=null){if(k===q.a)c+=' ok';else if(k===s.pick)c+=' bad'}h2+='<button class="'+c+'"'+(s.pick!=null?' disabled':'')+' onclick="xcSpPick('+k+')">'+esc(q.o[k])+'</button>'});
  if(s.pick!=null)h2+='<div class="fb '+(s.pick===q.a?'ok':'bad')+'">'+esc(q.s)+'</div><button class="btn" onclick="xcSpNext()">'+(s.i<9?'Next':'See my score')+'</button>';
  app.innerHTML=h2+'</div><button class="btn alt" onclick="xcHome()">Stop the sprint</button>';
  if(!TM)TM=setInterval(function(){if(view!=='xc'||XV.v!=='sprint'||XV.end){stop();return}var l=600-(Date.now()-XV.t0)/1000,e=document.getElementById('xcClock');if(l<=0){spEnd();render();return}if(e){e.textContent=clock(l);e.classList.toggle('low',l<60)}},1000)}
function spEnd(){var s=XV,x=X();s.end=1;x.sp.n++;if(s.ok>x.sp.b)x.sp.b=s.ok;save()}

/* ---------- predicted paper: the full 80 marks in the real layout ---------- */
function build(){var one=shuf(QS.filter(function(q){return q.m===1})),A=[],seen={};
  one.forEach(function(q){if(A.length<13&&!seen[q.t]){seen[q.t]=1;A.push(q)}});one.forEach(function(q){if(A.length<20&&A.indexOf(q)<0)A.push(q)});
  var D=[],dt={};shuf(QS.filter(function(q){return q.m===5})).forEach(function(q){if(D.length<5&&!dt[q.t]){dt[q.t]=1;D.push(q)}});
  var ids=shuf(A).concat(shuf(QS.filter(function(q){return q.m===2})).slice(0,7),shuf(QS.filter(function(q){return q.m===3})).slice(0,7),D).map(function(q){return q.id});
  return{id:Date.now().toString(36),t0:Date.now(),ids:ids,pk:{},dn:{},hl:{},aw:{},ph:'paper',i:0}}
function lbl(i){return i<20?'Q1 ('+RN[i]+')':'Q'+(i-18)}
function secOf(i){return i<20?'A':i<27?'B':i<34?'C':'D'}
function mKey(mk,id){return'xcm:'+mk.id+':'+id}
function mHl(mk,id){var L=Math.max(mk.hl[id]||0,hl(mKey(mk,id)));if(L)mk.hl[id]=L;return L}
function mDone(mk,id){var q=qq(id);return q.o?mk.pk[id]!=null:!!mk.dn[id]}
function paperView(){var mk=X().mk,i=mk.i,q=qq(mk.ids[i]),L=mHl(mk,q.id),done=mk.ids.filter(function(id){return mDone(mk,id)}).length;
  var h='<div class="meta"><span>Predicted paper · Section '+secOf(i)+' · '+lbl(i)+'</span><span class="xc-clock" id="xcClock">'+clock((Date.now()-mk.t0)/1000)+'</span></div><div class="bar"><i style="width:'+Math.round(done/mk.ids.length*100)+'%"></i></div>';
  h+='<div class="xc-pal" role="tablist" aria-label="Questions">';mk.ids.forEach(function(id,j){if(j===0||j===20||j===27||j===34)h+='<span>'+secOf(j)+'</span>';h+='<button class="'+(mDone(mk,id)?'dn':'')+(j===i?' cur':'')+'" onclick="xcGo('+j+')" aria-label="'+lbl(j)+'">'+(j<20?RN[j]:j-18)+'</button>'});h+='</div>';
  h+='<div class="card">'+qHead(q,lbl(i));
  if(q.o)optPm(mKey(mk,q.id),q.o).forEach(function(k){h+='<button class="opt'+(mk.pk[q.id]===k?' xc-sel':'')+'" onclick="xcMPick('+k+')">'+esc(q.o[k])+'</button>'});
  else h+='<p class="sub" style="margin:12px 0 0">Write the full answer on paper. You will mark it against the scheme at the end.</p><button class="btn'+(mk.dn[q.id]?'':' alt')+'" onclick="xcMDone()">'+(mk.dn[q.id]?'✓ Written':'Mark as written')+'</button>';
  if(L)h+='<p class="sjpen">Hints used here: '+L+'. '+pen(q.m,L)+' mark'+(pen(q.m,L)>1?'s':'')+' will come off.</p>';
  h+='</div><div class="row2"><button class="btn alt" onclick="xcGo('+(i-1)+')"'+(i?'':' disabled')+'>← Previous</button><button class="btn alt" onclick="xcGo('+(i+1)+')"'+(i<mk.ids.length-1?'':' disabled')+'>Next →</button></div>';
  h+='<button class="btn" onclick="xcFinish()">'+(XV.sure?'Tap again to hand in ('+done+' of '+mk.ids.length+' answered)':'Hand in the paper')+'</button><button class="btn alt" onclick="xcHome()">Save and leave</button><p class="sub" style="margin:10px 0 0;font-size:.82rem">The real paper allows 3 hours. Hints work here too, but each one costs marks, as in the sample papers.</p>';
  app.innerHTML=h;
  if(!TM)TM=setInterval(function(){var m=X().mk;if(view!=='xc'||XV.v!=='mock'||!m||m.ph!=='paper'){stop();return}var e=document.getElementById('xcClock');if(e)e.textContent=clock((Date.now()-m.t0)/1000)},1000)}
function markView(){stop();var mk=X().mk,W=mk.ids.filter(function(id){return!qq(id).o}),left=W.filter(function(id){return mk.aw[id]==null}).length,a=0;mk.ids.forEach(function(id){var q=qq(id);if(q.o&&mk.pk[id]===q.a&&!mHl(mk,id))a++});
  var h='<h1>Mark your paper</h1><p class="sub">Section A is marked for you: '+a+' of 20. Now check each written answer against its scheme and give one mark for every step you wrote correctly.</p>';
  W.forEach(function(id){var q=qq(id),j=mk.ids.indexOf(id),L=mHl(mk,id);h+='<div class="card" id="xm'+id+'">'+qHead(q,lbl(j))+(mk.dn[id]?'':'<p class="sjpen">You did not mark this one as written.</p>')+scheme(q)+(L?'<p class="sjpen">Hints used: '+L+'. '+pen(q.m,L)+' mark'+(pen(q.m,L)>1?'s come':' comes')+' off.</p>':'')+'<div class="xc-marks">';
    for(var i=0;i<=q.m;i++)h+='<button class="'+(mk.aw[id]===i?'on':'')+'" onclick="xcMAward(\''+id+'\','+i+')" aria-label="'+i+' marks">'+i+'</button>';h+='</div></div>'});
  app.innerHTML=h+'<button class="btn" onclick="xcResult()"'+(left?' disabled':'')+'>'+(left?left+' answer'+(left>1?'s':'')+' still to mark':'See my result')+'</button>'}
function score(mk){var sec={A:0,B:0,C:0,D:0},tp={},tot=0;mk.ids.forEach(function(id,j){var q=qq(id),L=mk.hl[id]||0,got=q.o?(mk.pk[id]===q.a?1:0):(mk.aw[id]||0),net=Math.max(0,got-pen(q.m,L));sec[secOf(j)]+=net;tot+=net;var t=tp[q.t]||(tp[q.t]={g:0,m:0});t.g+=net;t.m+=q.m});return{sec:sec,tp:tp,tot:tot}}
function resView(){var r=XV.res,h=back('School Exam Cracker','xcHome()')+'<h1>Your predicted paper</h1><div class="card xc-hero"><div class="eyebrow">Result</div><div class="xc-big">'+r.tot+' <small>of 80 · '+Math.round(r.tot/80*100)+'%</small></div><div class="xc-sec"><div><b>'+r.sec.A+'</b><span>A of 20</span></div><div><b>'+r.sec.B+'</b><span>B of 14</span></div><div><b>'+r.sec.C+'</b><span>C of 21</span></div><div><b>'+r.sec.D+'</b><span>D of 25</span></div></div><p class="sub" style="margin:0">Time taken: '+clock(r.sec_t)+'. '+(r.tot>=64?'That is a strong paper. Polish the few misses below.':r.tot>=48?'A good base. The chapters below show where the next marks are.':'Every paper teaches you the pattern. Start with the first chapter below.')+'</p></div><div class="card"><b>Marks by chapter</b>';
  TOP.forEach(function(t){var x=r.tp[t.k];if(!x)return;var p=x.m?x.g/x.m:0;h+='<div class="tbar"><span>'+esc(t.n)+'</span><div class="tr"><i style="width:'+Math.round(p*100)+'%;background:'+(p>=.8?'var(--ok)':p>=.5?'var(--accent)':'var(--bad)')+'"></i></div><em>'+x.g+'/'+x.m+'</em></div>'});
  app.innerHTML=h+'</div><button class="btn" onclick="xcHome()">See my mark map</button><button class="btn alt" onclick="xcMock()">Another predicted paper</button>'}

function xcView(){var v=XV.v;try{if(v==='topic')topicView();else if(v==='q')qView();else if(v==='sprint')sprintView();else if(v==='mock'){var mk=X().mk;if(!mk){XV={v:'home'};home()}else if(mk.ph==='mark')markView();else paperView()}else if(v==='res'&&XV.res)resView();else{stop();home()}}catch(e){XV={v:'home'};home()}}
function go(){if(view!=='xc')goView('xc');else{render();window.scrollTo(0,0)}}
window.xcHome=function(){stop();XV={v:'home'};go()};
window.xcTopic=function(k){XV={v:'topic',k:k};go()};
window.xcOpen=function(id,from){try{delete HK['xc:'+id]}catch(e){}XV={v:'q',id:id,from:from||'topic',pick:null,show:false,aw:null};go()};
window.xcPick=function(k){if(XV.v!=='q'||XV.pick!=null)return;var q=qq(XV.id),ok=k===q.a;XV.pick=k;bank(q,ok?(hl('xc:'+q.id)?.5:1):0,ok,k);render()};
window.xcShow=function(){XV.show=true;render()};
window.xcAward=function(n){if(XV.v!=='q'||XV.aw!=null)return;var q=qq(XV.id),net=Math.max(0,n-pen(q.m,hl('xc:'+q.id)));XV.aw=n;bank(q,net/q.m,net>=q.m,null);render()};
window.xcSprint=function(){stop();var one=QS.filter(function(q){return q.m===1}),open=shuf(one.filter(function(q){return fr(q.id)<1})),rest=shuf(one.filter(function(q){return fr(q.id)>=1}));XV={v:'sprint',ids:open.concat(rest).slice(0,10).map(function(q){return q.id}),i:0,ok:0,t0:Date.now(),pick:null};XV.ids=shuf(XV.ids);go()};
window.xcSpPick=function(k){var s=XV;if(s.v!=='sprint'||s.pick!=null)return;var q=qq(s.ids[s.i]),ok=k===q.a;s.pick=k;if(ok)s.ok++;bank(q,ok?1:0,ok,k);render()};
window.xcSpNext=function(){var s=XV;if(s.v!=='sprint')return;if(s.i>=9)spEnd();else{s.i++;s.pick=null}render();window.scrollTo(0,0)};
window.xcMock=function(){stop();var x=X();if(!x.mk){x.mk=build();save()}XV={v:'mock'};go()};
window.xcGo=function(j){var mk=X().mk;if(!mk||j<0||j>=mk.ids.length)return;mk.i=j;XV.sure=0;save();render();window.scrollTo(0,0)};
window.xcMPick=function(k){var mk=X().mk;if(!mk)return;var id=mk.ids[mk.i];mk.pk[id]=mk.pk[id]===k?null:k;if(mk.pk[id]==null)delete mk.pk[id];save();render()};
window.xcMDone=function(){var mk=X().mk;if(!mk)return;var id=mk.ids[mk.i];if(mk.dn[id])delete mk.dn[id];else mk.dn[id]=1;save();render()};
window.xcFinish=function(){var mk=X().mk;if(!mk)return;if(!XV.sure){XV.sure=1;render();return}mk.ids.forEach(function(id){mHl(mk,id)});mk.ph='mark';mk.t1=Date.now();XV.sure=0;save();render();window.scrollTo(0,0)};
window.xcMAward=function(id,n){var mk=X().mk;if(!mk)return;mk.aw[id]=n;save();var y=window.scrollY;render();window.scrollTo(0,y)};
window.xcResult=function(){var x=X(),mk=x.mk;if(!mk)return;var r=score(mk);r.sec_t=((mk.t1||Date.now())-mk.t0)/1000;
  mk.ids.forEach(function(id){var q=qq(id),L=mk.hl[id]||0,got=q.o?(mk.pk[id]===q.a?1:0):(mk.aw[id]||0),net=Math.max(0,got-pen(q.m,L));bank(q,net/q.m,net>=q.m,q.o?(mk.pk[id]==null?null:mk.pk[id]):null)});
  x.hist.push({ts:Date.now(),sc:r.tot});if(x.hist.length>20)x.hist=x.hist.slice(-20);x.mk=null;save();XV={v:'res',res:r};go()};

/* ---------- hook into the app: menu, drawing, Ask and Hint ---------- */
try{var E=GRP.exam||(GRP.exam=[]);if(!E.some(function(t){return t[0]==='xc'})){var at=E.length&&E[0][0]==='pts'?1:0;E.splice(at,0,['xc','Maths exam'])}SECN.xc='School Exam Cracker'}catch(e){}
var _vt=viewTop;viewTop=function(v){_vt(v);if(v==='xc'){stop();XV={v:'home'}}};
function todayCard(){try{if(document.getElementById('xcToday'))return;var a=app.querySelector('.ptcard')||app.querySelector('.card');if(!a)return;var T=total(),nx=nextStep(),mk=X().mk;
  var h='<div class="card xc-today" id="xcToday"><div class="eyebrow">School Exam Cracker · Final · Maths</div><div class="xc-top"><div class="xc-big">'+r1(T)+' <small>of 80 marks banked</small></div></div><div class="row2"><button class="btn" onclick="'+(mk?'xcMock()':nx?"xcOpen('"+nx.id+"','home')":'xcMock()')+'">'+(mk?'Continue the paper':nx?'Next small step · '+nx.m+' mark'+(nx.m>1?'s':''):'Predicted paper')+'</button><button class="btn alt" onclick="xcHome()">Open the mark map</button></div></div>';
  a.insertAdjacentHTML(a.classList.contains('ptcard')?'afterend':'beforebegin',h)}catch(e){}}
var _r=render;render=function(){_r();if(view==='xc')xcView();else{stop();if(view==='today')todayCard()}};
function curQ(){if(view!=='xc')return null;if(XV.v==='q')return{q:qq(XV.id),key:'xc:'+XV.id,open:XV.pick==null&&XV.aw==null&&!XV.show,sec:'School Exam Cracker'};if(XV.v==='sprint'&&!XV.end)return{q:qq(XV.ids[XV.i]),key:null,open:false,sec:'School Exam Cracker · one-mark sprint'};
  if(XV.v==='mock'){var mk=X().mk;if(mk&&mk.ph==='paper'){var id=mk.ids[mk.i];return{q:qq(id),key:mKey(mk,id),open:true,sec:'School Exam Cracker · predicted paper (hints cost marks)',paper:1}}}return null}
var _cx=ctxNow;ctxNow=function(){try{if(view==='xc'){var c=curQ();if(c&&c.q){var q=c.q,shown=!c.paper&&(XV.pick!=null||XV.show);return['School exam · '+top(q.t).n,'Section: '+c.sec+'\nChapter: '+top(q.t).n+'\nQuestion ('+q.m+' mark'+(q.m>1?'s':'')+'): '+q.q+(q.o?'\nOptions: '+q.o.join(' | '):'')+(shown?'\nAnswer: '+(q.o?q.o[q.a]:q.ans)+'\nMethod: '+(q.o?q.s:q.s.join(' ')):'\n(I have not seen the answer yet. Please guide me without giving it away.)')+'\n']}
  return['School Exam Cracker','Section: School Exam Cracker for the final maths exam. The paper is 80 marks: Section A 20 one-mark questions, B seven 2-mark, C seven 3-mark, D five 5-mark. Marks banked so far: '+r1(total())+' of 80.\n']}}catch(e){}return _cx()};
var _hc=hCtx;hCtx=function(){try{if(view==='xc'){var c=curQ();if(!c||!c.open||!c.key)return null;var q=c.q;return{kind:'gen',key:c.key,ref:'xc:'+q.id,sec:c.sec,src:'School exam',paper:c.paper?'Predicted paper':null,topic:top(q.t).n,q:q.q,o:q.o||null,a:q.o?q.a:null,ans:q.o?null:q.ans,h:q.o?q.s:q.s.join(' '),secret:q.o?'Correct option: '+q.o[q.a]+'\nWhy: '+q.s:'Answer: '+q.ans+'\nMarking scheme:\n- '+q.s.join('\n- ')}}}catch(e){}return _hc()};
window.xcView=xcView;
})();
