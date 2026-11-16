
/*CU-START*/
var CU_SRC=`@math.a
m|Sets|If A = {1, 2, 3} and B = {2, 3, 4, 5}, then n(A ∪ B) is:|3|4|5|6|2|A ∪ B = {1, 2, 3, 4, 5}, which has 5 elements.
m|Sets|The number of subsets of a set with 4 elements is:|8|12|16|24|2|A set with n elements has 2ⁿ subsets; 2⁴ = 16.
m|Sets|In a class of 60 students, 35 like cricket, 30 like football and 10 like both. How many like neither?|5|10|15|0|0|n(C ∪ F) = 35 + 30 − 10 = 55, so 60 − 55 = 5 like neither.
m|Sets|If A = {1, 2, 3, 4} and B = {3, 4, 5}, then A − B is:|{1, 2}|{5}|{3, 4}|{1, 2, 5}|0|A − B keeps the elements of A that are not in B.
m|Sets|If U = {1, 2, …, 10} and A = {2, 4, 6, 8, 10}, then A′ is:|{1, 3, 5, 7, 9}|{2, 4, 6, 8, 10}|{1, 2, 3, 4, 5}|∅|0|The complement holds every element of U that is not in A.
m|Relations and Functions|If A has 3 elements and B has 2 elements, the number of relations from A to B is:|6|8|32|64|3|A × B has 3 × 2 = 6 pairs; any subset is a relation, so 2⁶ = 64.
m|Relations and Functions|The domain of f(x) = 1/√(x − 2) is:|(2, ∞)|[2, ∞)|ℝ − {2}|(−∞, 2)|0|Need x − 2 > 0 (strictly, as the root is in the denominator), so x > 2.
m|Relations and Functions|The range of f(x) = x² + 1, x ∈ ℝ, is:|ℝ|[0, ∞)|[1, ∞)|(1, ∞)|2|x² ≥ 0, so x² + 1 ≥ 1, and every value from 1 upward is reached.
m|Relations and Functions|If f(x) = 2x + 3 and g(x) = x², then (f · g)(2) is:|11|14|28|49|2|f(2) = 7 and g(2) = 4, so (f · g)(2) = 7 × 4 = 28.
m|Relations and Functions|If A × B = {(a, 1), (a, 2), (b, 1), (b, 2)}, then B is:|{a, b}|{1, 2}|{a, 1}|{(1, 2)}|1|The second entries of the pairs make up B.
m|Trigonometry|210° in radian measure is:|5π/6|7π/6|4π/3|7π/4|1|210 × π/180 = 7π/6.
m|Trigonometry|The value of sin 765° is:|1/2|√3/2|1/√2|−1/√2|2|765° = 2 × 360° + 45°, so sin 765° = sin 45° = 1/√2.
m|Trigonometry|If tan x = 3/4 and x lies in the third quadrant, then sin x is:|3/5|−3/5|−4/5|4/5|1|Hypotenuse 5, so ∣sin x∣ = 3/5. Sine is negative in the third quadrant.
m|Trigonometry|The value of cos 15° is:|(√6 + √2)/4|(√6 − √2)/4|(√3 + 1)/2|√3/2|0|cos(45° − 30°) = cos45 cos30 + sin45 sin30 = (√6 + √2)/4.
m|Trigonometry|The general solution of sin x = 0 is:|x = nπ|x = 2nπ|x = nπ + π/2|x = nπ/2|0|sin x = 0 at every integer multiple of π.
m|Trigonometry|An arc of a circle of radius 7 cm subtends 60° at the centre. Its length (π = 22/7) is:|22/3 cm|11/3 cm|44/3 cm|7π cm|0|l = rθ = 7 × π/3 = 7 × 22/(7 × 3) = 22/3 cm.
m|Trigonometry|The maximum value of 3 sin x + 4 cos x is:|3|4|5|7|2|The maximum of a sin x + b cos x is √(a² + b²) = √(9 + 16) = 5.
m|Trigonometry|The value of sin 75° is:|(√6 + √2)/4|(√6 − √2)/4|(√3 − 1)/2|1/2|0|sin(45° + 30°) = sin45 cos30 + cos45 sin30 = (√6 + √2)/4.
m|Trigonometry|cos 2x is NOT equal to:|cos²x − sin²x|1 − 2 sin²x|2 cos²x − 1|2 sin x cos x|3|2 sin x cos x is sin 2x, not cos 2x.
m|Complex Numbers|The value of i³⁵ is:|i|−i|1|−1|1|35 = 4 × 8 + 3, so i³⁵ = i³ = −i.
m|Complex Numbers|The modulus of (1 + i)/(1 − i) is:|1|√2|2|1/√2|0|∣1 + i∣ = ∣1 − i∣ = √2, so the modulus of the quotient is 1.
m|Complex Numbers|The multiplicative inverse of 3 + 4i is:|(3 − 4i)/25|(3 + 4i)/25|(3 − 4i)/5|(−3 + 4i)/25|0|1/z = z̄/∣z∣² = (3 − 4i)/25.
m|Complex Numbers|The argument (principal) of −1 + i√3 is:|π/3|2π/3|−π/3|5π/6|1|Reference angle π/3; the point is in the second quadrant, so arg = π − π/3 = 2π/3.
m|Complex Numbers|If (x + iy)(2 − 3i) = 4 + i, then x is:|5/13|14/13|−14/13|1|0|x + iy = (4 + i)/(2 − 3i) = (4 + i)(2 + 3i)/13 = (5 + 14i)/13, so x = 5/13.
m|Quadratic Equations|The roots of x² + x + 1 = 0 are:|(−1 ± i√3)/2|(1 ± i√3)/2|(−1 ± √3)/2|±i|0|D = 1 − 4 = −3, so x = (−1 ± i√3)/2.
m|Quadratic Equations|If the roots of x² − 5x + k = 0 are equal, then k is:|5|25/4|−25/4|10|1|Equal roots need D = 25 − 4k = 0, so k = 25/4.
m|Quadratic Equations|If α and β are the roots of x² − 7x + 12 = 0, then α² + β² is:|25|49|24|73|0|α + β = 7, αβ = 12, so α² + β² = 49 − 24 = 25.
m|Linear Inequalities|The solution of 3x − 5 < x + 7, x ∈ ℝ, is:|x < 6|x > 6|x < 1|x ≤ 6|0|2x < 12, so x < 6.
m|Linear Inequalities|The solution set of ∣x − 3∣ ≤ 2 is:|[1, 5]|(1, 5)|[−1, 5]|(−∞, 1] ∪ [5, ∞)|0|−2 ≤ x − 3 ≤ 2 gives 1 ≤ x ≤ 5.
m|Linear Inequalities|The solution of −8 ≤ 5x − 3 < 7 is:|−1 ≤ x < 2|−1 < x ≤ 2|−2 ≤ x < 1|1 ≤ x < 2|0|Add 3: −5 ≤ 5x < 10. Divide by 5: −1 ≤ x < 2.
m|Linear Inequalities|If −3x > 12, then:|x > −4|x < −4|x > 4|x < 4|1|Dividing by a negative number reverses the sign: x < −4.
m|Permutations and Combinations|The number of arrangements of the letters of APPLE is:|120|60|24|30|1|5 letters with P twice: 5!/2! = 60.
m|Permutations and Combinations|If ⁿC₂ = 45, then n is:|9|10|11|15|1|n(n − 1)/2 = 45 gives n(n − 1) = 90, so n = 10.
m|Permutations and Combinations|The number of diagonals of a hexagon is:|6|9|12|15|1|⁶C₂ − 6 = 15 − 6 = 9.
m|Permutations and Combinations|How many 4-digit numbers with distinct digits can be formed from 1 to 9?|3024|6561|126|504|0|9 × 8 × 7 × 6 = 3024.
m|Permutations and Combinations|A committee of 3 men and 2 women is chosen from 6 men and 5 women. The number of ways is:|200|120|462|30|0|⁶C₃ × ⁵C₂ = 20 × 10 = 200.
m|Permutations and Combinations|In how many ways can 5 people sit in a row if two particular people must sit together?|24|48|120|60|1|Tie the pair as one unit: 4! ways, times 2! inside the pair = 48.
m|Binomial Theorem|The number of terms in the expansion of (a + b)¹² is:|12|13|24|11|1|(a + b)ⁿ has n + 1 terms.
m|Binomial Theorem|The coefficient of x³ in (1 + 2x)⁵ is:|10|40|80|160|2|⁵C₃ × 2³ = 10 × 8 = 80.
m|Binomial Theorem|The middle term of (x + 1/x)¹⁰ is:|252|210|126|462|0|The 6th term: ¹⁰C₅ x⁵ (1/x)⁵ = 252.
m|Binomial Theorem|The sum of the binomial coefficients in (1 + x)⁸ is:|64|128|256|512|2|Put x = 1: 2⁸ = 256.
m|Binomial Theorem|The term independent of x in (x² + 1/x)⁶ is:|15|20|6|1|0|General term ⁶Cᵣ x^(12 − 3r). 12 − 3r = 0 gives r = 4: ⁶C₄ = 15.
m|Sequences and Series|The 10th term of the AP 3, 7, 11, … is:|39|43|40|35|0|a + 9d = 3 + 36 = 39.
m|Sequences and Series|The sum of the first 20 natural numbers is:|200|210|190|420|1|n(n + 1)/2 = 20 × 21/2 = 210.
m|Sequences and Series|The 6th term of the GP 2, 6, 18, … is:|162|486|1458|243|1|ar⁵ = 2 × 3⁵ = 486.
m|Sequences and Series|The sum to infinity of 1 + 1/3 + 1/9 + … is:|3/2|2|4/3|3|0|a/(1 − r) = 1/(1 − 1/3) = 3/2.
m|Sequences and Series|The AM and GM of two positive numbers are 10 and 8. The numbers are:|16 and 4|12 and 8|18 and 2|14 and 6|0|a + b = 20 and ab = 64, so the numbers are 16 and 4.
m|Sequences and Series|How many terms of the AP 2, 5, 8, … give a sum of 155?|10|11|12|9|0|n/2 [4 + 3(n − 1)] = 155 → 3n² + n − 310 = 0 → n = 10.
m|Straight Lines|The slope of the line through (2, 3) and (4, 7) is:|1/2|2|−2|4|1|(7 − 3)/(4 − 2) = 2.
m|Straight Lines|The line with x-intercept 3 and y-intercept −2 is:|2x − 3y = 6|3x − 2y = 6|2x + 3y = 6|x − y = 1|0|x/3 + y/(−2) = 1 → 2x − 3y = 6.
m|Straight Lines|The distance of (3, 4) from 3x + 4y − 5 = 0 is:|4|5|20|2|0|∣9 + 16 − 5∣ / √(9 + 16) = 20/5 = 4.
m|Straight Lines|The lines 2x + 3y = 5 and 3x − 2y = 7 are:|Parallel|Perpendicular|Coincident|Inclined at 45°|1|Slopes −2/3 and 3/2 multiply to −1.
m|Straight Lines|The line through (1, 2) with slope 3 is:|y = 3x − 1|y = 3x + 2|y = 3x − 5|3y = x + 5|0|y − 2 = 3(x − 1), so y = 3x − 1.
m|Circles|The centre and radius of x² + y² − 4x + 6y − 3 = 0 are:|(2, −3), 4|(−2, 3), 4|(2, −3), 16|(4, −6), 3|0|Centre (−g, −f) = (2, −3); r = √(4 + 9 + 3) = 4.
m|Circles|The circle with centre (1, −2) and radius 3 is:|x² + y² − 2x + 4y − 4 = 0|x² + y² + 2x − 4y − 4 = 0|x² + y² − 2x + 4y + 4 = 0|x² + y² − 2x + 4y − 9 = 0|0|(x − 1)² + (y + 2)² = 9 → x² + y² − 2x + 4y + 5 − 9 = 0.
m|Circles|The circle x² + y² = 25 passes through:|(3, 4)|(4, 4)|(5, 5)|(2, 5)|0|3² + 4² = 25.
m|Conic Sections|The focus of the parabola y² = 12x is:|(3, 0)|(0, 3)|(12, 0)|(−3, 0)|0|y² = 4ax with a = 3, so the focus is (3, 0).
m|Conic Sections|The length of the latus rectum of x² = −16y is:|4|8|16|−16|2|x² = −4ay with a = 4; latus rectum = 4a = 16.
m|Conic Sections|The eccentricity of the ellipse x²/25 + y²/16 = 1 is:|3/5|4/5|5/3|3/4|0|c² = 25 − 16 = 9, c = 3, e = c/a = 3/5.
m|Conic Sections|The eccentricity of the hyperbola x²/9 − y²/16 = 1 is:|5/3|4/3|5/4|3/5|0|c² = 9 + 16 = 25, c = 5, e = 5/3.
m|3D Geometry|The distance between (1, 2, 3) and (4, 6, 3) is:|5|7|25|√7|0|√(3² + 4² + 0²) = 5.
m|3D Geometry|The foot of the perpendicular from (2, −3, 4) to the x-axis is:|(2, 0, 0)|(0, −3, 4)|(0, −3, 0)|(2, −3, 0)|0|On the x-axis y = z = 0, so the foot keeps only x.
m|3D Geometry|The point dividing the join of (1, 2, 3) and (3, 4, 5) in the ratio 1 : 1 is:|(2, 3, 4)|(4, 6, 8)|(1, 1, 1)|(2, 2, 2)|0|The midpoint averages each coordinate.
m|Limits and Derivatives|lim (x→2) (x² − 4)/(x − 2) is:|0|2|4|Does not exist|2|Factor: (x − 2)(x + 2)/(x − 2) = x + 2 → 4.
m|Limits and Derivatives|lim (x→0) sin 3x / x is:|1|3|1/3|0|1|sin 3x/x = 3 × (sin 3x)/(3x) → 3.
m|Limits and Derivatives|lim (x→1) (x⁵ − 1)/(x − 1) is:|1|4|5|0|2|lim (xⁿ − aⁿ)/(x − a) = naⁿ⁻¹ = 5.
m|Limits and Derivatives|The derivative of x² sin x is:|2x cos x|2x sin x + x² cos x|2x sin x − x² cos x|x² cos x|1|Product rule: (x²)′ sin x + x² (sin x)′.
m|Limits and Derivatives|The derivative of 1/x at x = 2 is:|1/4|−1/4|−1/2|1/2|1|d/dx(x⁻¹) = −1/x²; at x = 2 it is −1/4.
m|Statistics|The mean deviation about the mean of 2, 4, 6, 8, 10 is:|2|2.4|3|1.2|1|Mean 6; deviations 4, 2, 0, 2, 4 sum to 12; 12/5 = 2.4.
m|Statistics|The variance of 1, 2, 3, 4, 5 is:|2|√2|2.5|10|0|Mean 3; squared deviations 4, 1, 0, 1, 4 sum to 10; 10/5 = 2.
m|Statistics|If every observation is increased by 5, the variance:|Increases by 5|Increases by 25|Stays the same|Is multiplied by 5|2|Adding a constant shifts the data but not its spread.
m|Statistics|If every observation is multiplied by 3, the standard deviation:|Stays the same|Is multiplied by 3|Is multiplied by 9|Increases by 3|1|SD scales by ∣k∣ when every value is multiplied by k.
m|Probability|Two coins are tossed. The probability of at least one head is:|1/4|1/2|3/4|1|2|Only TT has no head: 1 − 1/4 = 3/4.
m|Probability|A card is drawn from a pack of 52. The probability that it is a king or a heart is:|4/13|17/52|1/4|1/13|0|(4 + 13 − 1)/52 = 16/52 = 4/13.
m|Probability|A die is thrown twice. The probability that the sum is 7 is:|1/6|5/36|7/36|1/12|0|Six outcomes give 7 out of 36.
m|Probability|If P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2, then P(A ∪ B) is:|0.9|0.7|0.2|0.5|1|0.5 + 0.4 − 0.2 = 0.7.
ar|Relations and Functions|The function f(x) = ∣x∣, x ∈ ℝ, has range [0, ∞).|∣x∣ ≥ 0 for every real x, and every non-negative number is ∣x∣ for some x.|0|Both are true and the reason gives exactly why the range is [0, ∞).
ar|Sequences and Series|The sum of the first n terms of an AP is (n/2)[2a + (n − 1)d].|The nth term of a GP is arⁿ⁻¹.|1|Both statements are true, but the GP term has nothing to do with the AP sum.
ar|Permutations and Combinations|The number of arrangements of n distinct objects taken all at a time is n!.|0! = 0.|2|The assertion is true; 0! is defined as 1, so the reason is false.
ar|Relations and Functions|Every relation is a function.|A function is a special kind of relation.|3|Some relations link one input to two outputs, so the assertion is false; the reason is true.
ar|Trigonometry|cos 2x = 1 − 2 sin²x.|sin²x + cos²x = 1.|0|cos 2x = cos²x − sin²x; replacing cos²x by 1 − sin²x gives the assertion, so the reason explains it.
m|Conic Sections|Match each curve with its eccentricity e. ¶ A. Circle  B. Parabola  C. Ellipse  D. Hyperbola ¶ I. e = 1  II. 0 < e < 1  III. e = 0  IV. e > 1|A-III, B-I, C-II, D-IV|A-I, B-III, C-II, D-IV|A-III, B-II, C-I, D-IV|A-III, B-I, C-IV, D-II|0|A circle has e = 0, a parabola e = 1, an ellipse 0 < e < 1 and a hyperbola e > 1.
m|Permutations and Combinations|Which of these are true? ¶ A. ⁿPᵣ = ⁿCᵣ × r!  B. ⁿC₀ = 1  C. ⁿCᵣ = ⁿCₙ₋ᵣ  D. ⁿPₙ = 1|A, B and C only|A and D only|B, C and D only|A, B, C and D|0|ⁿPₙ = n!, not 1. The other three are standard results.
m|Trigonometry|Arrange in increasing order: ¶ A. sin 90°  B. sin 30°  C. sin 0°  D. sin 60°|C, B, D, A|B, C, D, A|C, D, B, A|A, D, B, C|0|0 < 1/2 < √3/2 < 1.
m|Statistics|Match each measure with what it describes. ¶ A. Mean  B. Range  C. Variance  D. Median ¶ I. Middle value of ordered data  II. Average of squared deviations  III. Largest minus smallest  IV. Sum of values ÷ number of values|A-IV, B-III, C-II, D-I|A-I, B-III, C-II, D-IV|A-IV, B-II, C-III, D-I|A-II, B-III, C-IV, D-I|0|Each measure matched to its definition.
@math.b
^A1
m|Matrices|If A is a 3 × 2 matrix and B is a 2 × 4 matrix, the order of AB is:|3 × 4|2 × 2|4 × 3|AB is not defined|0|(3 × 2)(2 × 4) gives 3 × 4.
m|Determinants|If A = [[2, 3], [1, 4]], then ∣A∣ is:|5|11|8|−5|0|2 × 4 − 3 × 1 = 5.
m|Determinants|A is a square matrix of order 3 with ∣A∣ = 4. Then ∣2A∣ is:|8|16|32|64|2|∣kA∣ = kⁿ∣A∣ = 2³ × 4 = 32.
m|Matrices|The inverse of [[2, 1], [1, 1]] is:|[[1, −1], [−1, 2]]|[[1, 1], [1, 2]]|[[2, −1], [−1, 1]]|[[−1, 1], [1, −2]]|0|∣A∣ = 1; swap the diagonal and change the signs of the others.
m|Matrices|In a skew-symmetric matrix, the diagonal elements are:|All 1|All zero|All equal but non-zero|Any real numbers|1|aᵢᵢ = −aᵢᵢ forces aᵢᵢ = 0.
m|Matrices|(AB)ᵀ is equal to:|AᵀBᵀ|BᵀAᵀ|AB|BA|1|The transpose of a product reverses the order.
m|Determinants|The system AX = B has a unique solution when:|∣A∣ = 0|∣A∣ ≠ 0|B = 0|A is symmetric|1|A non-zero determinant makes A invertible, so X = A⁻¹B is unique.
m|Determinants|If A is of order 3 and ∣A∣ = 5, then ∣adj A∣ is:|5|25|125|15|1|∣adj A∣ = ∣A∣ⁿ⁻¹ = 5² = 25.
m|Applications of Derivatives|The radius of a circle grows at 2 cm/s. How fast is the area growing when r = 5 cm?|10π cm²/s|20π cm²/s|25π cm²/s|4π cm²/s|1|dA/dt = 2πr dr/dt = 2π × 5 × 2 = 20π.
m|Applications of Derivatives|f(x) = x³ − 3x is strictly increasing on:|(−1, 1)|(−∞, −1) ∪ (1, ∞)|(0, ∞)|ℝ|1|f′(x) = 3x² − 3 > 0 when ∣x∣ > 1.
m|Applications of Derivatives|The maximum value of f(x) = −x² + 4x + 1 is:|1|4|5|9|2|f′ = 0 at x = 2; f(2) = −4 + 8 + 1 = 5.
m|Continuity and Differentiability|If y = x³, then d²y/dx² at x = 1 is:|3|6|1|0|1|y″ = 6x = 6 at x = 1.
m|Integrals|∫₀³ 2x dx is:|6|9|3|18|1|[x²]₀³ = 9.
m|Integrals|∫ (1/x) dx is:|−1/x² + C|log∣x∣ + C|x log x + C|eˣ + C|1|The standard integral of 1/x.
m|Application of Integrals|The area between y = x, the x-axis and the lines x = 0 and x = 2 is:|1|2|4|8|1|A triangle with base 2 and height 2: area 2.
m|Differential Equations|The order and degree of (d²y/dx²)³ + (dy/dx)² + y = 0 are:|2 and 3|3 and 2|2 and 2|3 and 3|0|Highest derivative is second order, raised to power 3.
m|Differential Equations|The general solution of dy/dx = y is:|y = Ceˣ|y = x + C|y = Cx|y = eˣ + C|0|dy/y = dx gives log y = x + c, so y = Ceˣ.
m|Linear Programming|Maximise Z = 3x + 2y subject to x + y ≤ 4, x ≥ 0, y ≥ 0. The maximum is:|8|12|10|0|1|Corners (0, 0), (4, 0), (0, 4) give 0, 12 and 8.
m|Linear Programming|In an LPP with a bounded feasible region, the optimal value occurs:|At an interior point|At a corner point|Only at the origin|Nowhere|1|The corner point theorem.
m|Probability|X takes the values 0, 1, 2 with probabilities 0.2, 0.5, 0.3. E(X) is:|1|1.1|0.8|1.5|1|0 × 0.2 + 1 × 0.5 + 2 × 0.3 = 1.1.
m|Probability|For a binomial distribution with n = 10 and p = 0.4, the mean and variance are:|4 and 2.4|4 and 1.6|6 and 2.4|4 and 6|0|Mean np = 4, variance npq = 10 × 0.4 × 0.6 = 2.4.
^B1
m|Relations and Functions|On {1, 2, 3}, R = {(1, 1), (2, 2), (3, 3), (1, 2)} is:|Reflexive and symmetric but not transitive|Reflexive and transitive but not symmetric|An equivalence relation|Symmetric and transitive but not reflexive|1|All (a, a) are present and transitivity holds, but (2, 1) is missing.
m|Relations and Functions|The number of equivalence relations on {1, 2, 3} containing (1, 2) and (2, 1) is:|1|2|3|4|1|Either {1, 2} with {3} alone, or everything related: 2 relations.
m|Relations and Functions|f: ℝ → ℝ, f(x) = 3x + 2 is:|One-one but not onto|Onto but not one-one|Both one-one and onto|Neither|2|A non-constant linear function is a bijection on ℝ.
m|Relations and Functions|f: ℝ → ℝ, f(x) = x² is:|One-one and onto|One-one only|Onto only|Neither one-one nor onto|3|f(−1) = f(1), and negative numbers are never reached.
m|Relations and Functions|The number of bijections from a set of 4 elements to itself is:|16|24|256|4|1|4! = 24.
m|Inverse Trigonometric Functions|The principal value of sin⁻¹(−1/2) is:|−π/6|7π/6|11π/6|5π/6|0|The range of sin⁻¹ is [−π/2, π/2], and sin(−π/6) = −1/2.
m|Inverse Trigonometric Functions|The principal value of cos⁻¹(−1/2) is:|π/3|2π/3|−π/3|4π/3|1|The range of cos⁻¹ is [0, π]; cos(2π/3) = −1/2.
m|Inverse Trigonometric Functions|sin⁻¹(sin 2π/3) is:|2π/3|π/3|−π/3|π/6|1|2π/3 is outside [−π/2, π/2]; sin(2π/3) = sin(π/3), so the answer is π/3.
m|Inverse Trigonometric Functions|The range of the principal branch of cos⁻¹ x is:|[0, π]|[−π/2, π/2]|(0, π)|[−π, π]|0|The principal branch of cos⁻¹ takes values from 0 to π.
m|Inverse Trigonometric Functions|tan⁻¹√3 − sec⁻¹(−2) is:|π|−π/3|π/3|2π/3|1|π/3 − 2π/3 = −π/3.
m|Matrices|If A = [[1, 2], [3, 4]], then A² is:|[[7, 10], [15, 22]]|[[1, 4], [9, 16]]|[[5, 8], [12, 20]]|[[7, 15], [10, 22]]|0|Row-by-column: 1 + 6, 2 + 8; 3 + 12, 6 + 16.
m|Matrices|For any square matrix A, (A + Aᵀ)/2 is:|Symmetric|Skew-symmetric|Diagonal|Always the identity|0|Its transpose equals itself.
m|Matrices|If A and B are symmetric of the same order, AB − BA is:|Symmetric|Skew-symmetric|The identity|Zero always|1|(AB − BA)ᵀ = BA − AB = −(AB − BA).
m|Determinants|The value of ∣1 2 3; 4 5 6; 7 8 9∣ is:|0|1|−3|45|0|R₃ − R₂ = R₂ − R₁, so the rows are dependent.
m|Determinants|The area of the triangle with vertices (0, 0), (4, 0), (0, 3) is:|12|6|7|3.5|1|½ × 4 × 3 = 6 (or ½ ∣determinant∣).
m|Determinants|If A (adj A) = 5I for a 3 × 3 matrix A, then ∣A∣ is:|5|25|125|1/5|0|A (adj A) = ∣A∣ I.
m|Continuity and Differentiability|f(x) = kx² for x ≤ 2 and f(x) = 3 for x > 2 is continuous at x = 2 when k is:|3/4|4/3|3|3/2|0|4k = 3.
m|Continuity and Differentiability|f(x) = ∣x∣ at x = 0 is:|Differentiable but not continuous|Continuous but not differentiable|Both|Neither|1|The left and right derivatives are −1 and 1.
m|Continuity and Differentiability|d/dx [sin(x²)] is:|cos(x²)|2x cos(x²)|2x sin(x²)|cos 2x|1|Chain rule: cos(x²) × 2x.
m|Continuity and Differentiability|d/dx (xˣ) is:|x · xˣ⁻¹|xˣ log x|xˣ (1 + log x)|xˣ|2|log y = x log x; y′/y = log x + 1.
m|Continuity and Differentiability|If y = sin⁻¹x, dy/dx is:|1/√(1 − x²)|−1/√(1 − x²)|1/(1 + x²)|√(1 − x²)|0|Standard derivative.
m|Continuity and Differentiability|If x = at² and y = 2at, dy/dx is:|t|1/t|2t|2a|1|(dy/dt)/(dx/dt) = 2a/(2at) = 1/t.
m|Continuity and Differentiability|For f(x) = x² on [1, 3], the c of the Mean Value Theorem is:|1.5|2|2.5|√5|1|f′(c) = 2c = (9 − 1)/2 = 4, so c = 2.
m|Applications of Derivatives|The tangent to y = x³ at (1, 1) is:|y = 3x − 2|y = 3x + 2|y = x|y = 2x − 1|0|Slope 3; y − 1 = 3(x − 1).
m|Applications of Derivatives|f(x) = eˣ on ℝ is:|Strictly decreasing|Strictly increasing|Constant|Neither|1|f′(x) = eˣ > 0 always.
m|Applications of Derivatives|The minimum value of x + 1/x for x > 0 is:|0|1|2|4|2|f′ = 1 − 1/x² = 0 at x = 1; f(1) = 2.
m|Applications of Derivatives|For f(x) = x³ − 6x² + 9x, a local maximum occurs at:|x = 1|x = 3|x = 0|x = 2|0|f′ = 3(x − 1)(x − 3); f″(1) = −6 < 0.
m|Integrals|∫ sec²x dx is:|tan x + C|sec x + C|−cot x + C|sec x tan x + C|0|d/dx tan x = sec²x.
m|Integrals|∫ x eˣ dx is:|x eˣ + C|eˣ(x − 1) + C|eˣ(x + 1) + C|x²eˣ/2 + C|1|By parts: x eˣ − ∫ eˣ dx.
m|Integrals|∫₀^(π/2) sin x dx is:|0|1|π/2|−1|1|[−cos x] from 0 to π/2 = 0 + 1 = 1.
m|Integrals|∫₋₁¹ x³ dx is:|0|1/2|1|2|0|x³ is odd, so the integral over [−a, a] is 0.
m|Integrals|∫ dx/(1 + x²) is:|log(1 + x²) + C|tan⁻¹x + C|sin⁻¹x + C|1/(1 + x²) + C|1|Standard integral.
m|Integrals|∫₀^(π/2) sin x/(sin x + cos x) dx is:|π/2|π/4|1|0|1|Adding the integral with x → π/2 − x gives π/2, so each is π/4.
m|Integrals|∫ dx/√(a² − x²) is:|sin⁻¹(x/a) + C|tan⁻¹(x/a) + C|(1/a) tan⁻¹(x/a) + C|log∣x + √(a² − x²)∣ + C|0|Standard integral.
m|Application of Integrals|The area enclosed by x² + y² = 4 is:|2π|4π|16π|8π|1|πr² with r = 2.
m|Application of Integrals|The area under y = x² from x = 0 to x = 3 is:|3|9|27|6|1|[x³/3]₀³ = 9.
m|Differential Equations|The integrating factor of dy/dx + y/x = x² is:|x|1/x|eˣ|log x|0|e^∫(1/x)dx = x.
m|Differential Equations|The degree of (dy/dx)² + sin(dy/dx) = 0 is:|1|2|0|Not defined|3|It is not a polynomial in dy/dx.
m|Differential Equations|The general solution of a third-order differential equation has how many arbitrary constants?|1|2|3|0|2|As many as the order.
m|Differential Equations|The solution of dy/dx = x/y is:|x² + y² = C|y² − x² = C|y = Cx|xy = C|1|y dy = x dx gives y² − x² = C.
m|Vectors|The magnitude of 2î − 3ĵ + 6k̂ is:|7|5|49|11|0|√(4 + 9 + 36) = 7.
m|Vectors|If a = î + 2ĵ − k̂ and b = 3î − ĵ + 2k̂, then a · b is:|−1|1|3|7|0|3 − 2 − 2 = −1.
m|Vectors|The unit vector along î + ĵ + k̂ is:|(î + ĵ + k̂)/3|(î + ĵ + k̂)/√3|î + ĵ + k̂|(î + ĵ + k̂)/√2|1|Divide by the magnitude √3.
m|Vectors|If ∣a∣ = 2, ∣b∣ = 3 and a · b = 3, the angle between a and b is:|π/6|π/4|π/3|π/2|2|cos θ = 3/6 = 1/2.
m|Vectors|The area of the parallelogram with adjacent sides î + ĵ and ĵ + k̂ is:|√2|√3|2|3|1|(î + ĵ) × (ĵ + k̂) = î − ĵ + k̂, of magnitude √3.
m|Vectors|The projection of 2î + 3ĵ + 2k̂ on î + 2ĵ + k̂ is:|10/√6|10|√6|5/√6|0|a · b/∣b∣ = 10/√6.
m|Vectors|î × ĵ is:|k̂|−k̂|0|1|0|Cyclic order î → ĵ → k̂.
m|Three Dimensional Geometry|The direction cosines of the x-axis are:|0, 0, 1|1, 0, 0|1, 1, 1|0, 1, 0|1|The x-axis makes angles 0°, 90°, 90° with the axes.
m|Three Dimensional Geometry|The angle between lines with direction ratios (1, 1, 2) and (√3 − 1, −√3 − 1, 4) is:|30°|45°|60°|90°|2|Dot product 6; magnitudes √6 and √24; cos θ = 6/12 = 1/2.
m|Three Dimensional Geometry|The line through (1, 2, 3) parallel to 3î + 2ĵ − 2k̂ is:|r = (î + 2ĵ + 3k̂) + λ(3î + 2ĵ − 2k̂)|r = (3î + 2ĵ − 2k̂) + λ(î + 2ĵ + 3k̂)|r = λ(î + 2ĵ + 3k̂)|r = (î + 2ĵ + 3k̂) × (3î + 2ĵ − 2k̂)|0|Point vector plus λ times the direction.
m|Three Dimensional Geometry|Skew lines are lines that:|Intersect at right angles|Are parallel|Neither intersect nor are parallel|Lie in one plane|2|Skew lines exist only in three dimensions.
m|Linear Programming|The corner points of a feasible region are (0, 0), (5, 0), (3, 4), (0, 6). The maximum of Z = 4x + 3y is:|20|24|18|25|1|Z = 0, 20, 24, 18; the largest is 24 at (3, 4).
m|Linear Programming|If the feasible region of an LPP is unbounded, then:|A maximum always exists|A maximum may not exist|The LPP has no solution|The origin is optimal|1|An unbounded region may let Z grow without limit; check with an open half-plane.
m|Probability|If P(A) = 0.6, P(B) = 0.5 and P(A ∩ B) = 0.3, then P(A ∣ B) is:|0.5|0.6|0.3|0.8|1|P(A ∩ B)/P(B) = 0.3/0.5 = 0.6.
m|Probability|A and B are independent with P(A) = 0.3 and P(B) = 0.4. P(A ∪ B) is:|0.7|0.58|0.12|0.42|1|0.3 + 0.4 − 0.12 = 0.58.
m|Probability|Bag I has 3 red and 4 black balls; Bag II has 5 red and 6 black. A bag is picked at random and a red ball drawn. P(it came from Bag II) is:|35/68|33/68|5/11|1/2|0|Bayes: (½ × 5/11)/(½ × 3/7 + ½ × 5/11) = 35/68.
m|Probability|Two dice are thrown. Given that the first shows 3, the probability that the sum is 8 is:|1/6|5/36|1/36|1/3|0|The second die must show 5.
m|Probability|X is the number of heads in two tosses of a fair coin. E(X) is:|0.5|1|1.5|2|1|0 × ¼ + 1 × ½ + 2 × ¼ = 1.
ar|Continuity and Differentiability|f(x) = sin x is differentiable everywhere.|Every differentiable function is continuous.|1|Both are true, but the reason doesn't explain why sin x is differentiable.
ar|Determinants|∣Aᵀ∣ = ∣A∣ for every square matrix A.|A determinant is unchanged when rows and columns are interchanged.|0|The reason is exactly why the assertion holds.
ar|Integrals|∫₋ₐᵃ f(x) dx = 0 when f is an odd function.|For an odd function f(−x) = f(x).|2|The assertion is true; for an odd function f(−x) = −f(x), so the reason is false.
ar|Relations and Functions|The function f(x) = x² from ℝ to ℝ has an inverse.|A function has an inverse only if it is one-one and onto.|3|x² is neither one-one nor onto on ℝ, so the assertion is false; the reason is true.
m|Integrals|Match each integral with its value (constant omitted). ¶ A. ∫ cos x dx  B. ∫ sec x tan x dx  C. ∫ cosec²x dx  D. ∫ (1/x) dx ¶ I. −cot x  II. log∣x∣  III. sin x  IV. sec x|A-III, B-IV, C-I, D-II|A-IV, B-III, C-I, D-II|A-III, B-I, C-IV, D-II|A-II, B-IV, C-I, D-III|0|Each result follows from a standard derivative.
m|Matrices|For a square matrix A of order n, which are true? ¶ A. ∣kA∣ = kⁿ∣A∣  B. (A⁻¹)⁻¹ = A when A is invertible  C. ∣A⁻¹∣ = 1/∣A∣ when A is invertible  D. Every square matrix has an inverse|A, B and C only|A and D only|B and D only|A, B, C and D|0|Only matrices with non-zero determinant are invertible, so D is false.
m|Inverse Trigonometric Functions|Arrange in increasing order: ¶ A. cos⁻¹(−1)  B. sin⁻¹(1/2)  C. cos⁻¹(0)  D. tan⁻¹(1)|B, D, C, A|D, B, C, A|B, C, D, A|C, B, D, A|0|π/6 < π/4 < π/2 < π.
@eco.a
m|Understanding economics|The definition of economics as the study of human behaviour as a relationship between ends and scarce means with alternative uses was given by:|Alfred Marshall|Lionel Robbins|Adam Smith|Paul Samuelson|1|Robbins built economics around scarcity and choice (1932).
m|Understanding economics|The welfare definition of economics is associated with:|Alfred Marshall|Lionel Robbins|J. M. Keynes|Adam Smith|0|Marshall stressed material welfare in the ordinary business of life.
m|Understanding economics|Adam Smith's view of economics is known as the:|Welfare definition|Scarcity definition|Wealth definition|Growth definition|2|The Wealth of Nations (1776) saw economics as the science of wealth.
m|Understanding economics|The growth-oriented definition of economics was given by:|Paul Samuelson|Lionel Robbins|Alfred Marshall|Amartya Sen|0|Samuelson added choice over time, that is growth, to the scarcity idea.
m|Understanding economics|Opportunity cost is:|The money cost of a good|The value of the next best alternative given up|The total cost of production|The cost of hiring labour|1|Choosing one use of a resource means losing what it could have produced in its next best use.
m|Understanding economics|Which is NOT a central problem of an economy?|What to produce|How to produce|For whom to produce|Where to export|3|The three central problems are what, how and for whom.
m|Understanding economics|The production possibility curve is concave to the origin because:|Resources are unlimited|Opportunity cost increases|Technology is constant|Wants are limited|1|Resources are not equally suited to every good, so each extra unit costs more of the other good.
m|Understanding economics|A point outside the PPC shows:|Full employment|Unemployment of resources|A combination that cannot be produced with present resources|Efficient use of resources|2|It lies beyond present capacity; growth or better technology is needed to reach it.
m|Understanding economics|Microeconomics studies:|The economy as a whole|National income|Individual units such as a consumer or a firm|Inflation and unemployment|2|Micro looks at individual decision makers and markets.
m|Understanding economics|Which is a normative statement?|India's GDP grew last year|The rich should pay higher taxes|Prices rose by 5 per cent|Rice output fell in 2023|1|Normative statements say what ought to be, so they carry value judgements.
m|Growth, development and planning|India's First Five Year Plan began in:|1947|1950|1951|1956|2|The First Plan covered 1951–56.
m|Growth, development and planning|The Planning Commission was replaced by NITI Aayog in:|2010|2014|2015|2017|2|NITI Aayog came into being on 1 January 2015.
m|Growth, development and planning|The Second Five Year Plan, which stressed heavy industry, was based on the model of:|P. C. Mahalanobis|K. N. Raj|V. K. R. V. Rao|Manmohan Singh|0|The Mahalanobis model gave priority to capital goods industries.
m|Growth, development and planning|Which was NOT one of the goals of India's Five Year Plans?|Growth|Modernisation|Self-reliance|Privatisation of all industry|3|The goals were growth, modernisation, self-reliance and equity.
m|Growth, development and planning|The Green Revolution in India relied mainly on:|High yielding variety seeds|Collective farming|Cottage industries|Import of food grains|0|HYV seeds with fertiliser, pesticides and assured irrigation raised yields.
m|Growth, development and planning|Land ceiling means:|A minimum price for land|Fixing the maximum size of land one owner can hold|Banning the sale of land|Taxing agricultural land|1|Surplus land above the ceiling was to be given to the landless.
m|Growth, development and planning|The Industrial Policy Resolution that reserved key industries for the public sector was passed in:|1948|1956|1969|1991|1|IPR 1956 divided industries into three categories.
m|Growth, development and planning|In the early plans, small-scale industries were promoted mainly because they:|Used imported technology|Were labour intensive and created jobs|Earned high foreign exchange|Needed large capital|1|They provided employment with less capital.
m|LPG reforms of 1991|India's 1991 economic crisis was mainly a:|Food crisis|Balance of payments crisis|Banking crisis|Stock market crisis|1|Foreign exchange reserves fell to barely a few weeks of imports.
m|LPG reforms of 1991|The New Economic Policy of 1991 was presented by Finance Minister:|P. Chidambaram|Yashwant Sinha|Manmohan Singh|Pranab Mukherjee|2|Manmohan Singh was Finance Minister under P. V. Narasimha Rao.
m|LPG reforms of 1991|Disinvestment means:|Selling part of the government's equity in public sector units|Investing more in public sector units|Stopping foreign investment|Closing private firms|0|It is one route to privatisation.
m|LPG reforms of 1991|The World Trade Organization was set up in 1995 as the successor to:|IMF|World Bank|GATT|UNCTAD|2|GATT had governed trade rules since 1948.
m|LPG reforms of 1991|Outsourcing is best described as:|Hiring services from an outside source, often abroad|Exporting raw materials|Importing capital goods|Restricting imports|0|Call centres and IT services are common examples.
m|LPG reforms of 1991|Which measure is part of liberalisation?|Abolishing industrial licensing for most industries|Raising import tariffs|Nationalising banks|Fixing prices of all goods|0|Liberalisation removes controls on economic activity.
m|LPG reforms of 1991|Navratna status was given to selected:|Private banks|Public sector enterprises|Foreign companies|Small-scale units|1|It gave profitable PSUs more freedom to operate.
m|Poverty, unemployment and rural India|India's early poverty line was based on a minimum daily calorie intake of:|2400 rural and 2100 urban|2100 rural and 2400 urban|2000 for all|3000 rural and 2500 urban|0|Rural work is more physically demanding, so the rural norm was higher.
m|Poverty, unemployment and rural India|Disguised unemployment is common in agriculture because:|Workers are paid too much|More people work than needed, so the marginal product of some is zero|Machines replace workers|Work is seasonal|1|Removing some workers would not reduce output.
m|Poverty, unemployment and rural India|Unemployment that occurs during certain months of the year is:|Structural|Frictional|Seasonal|Disguised|2|Farm work rises and falls with the crop cycle.
m|Poverty, unemployment and rural India|MGNREGA guarantees each rural household up to how many days of wage employment a year?|50|100|150|200|1|The 2005 Act guarantees 100 days.
m|Poverty, unemployment and rural India|The apex institution for rural credit, set up in 1982, is:|SIDBI|NABARD|RBI|SBI|1|NABARD coordinates and refinances rural credit.
m|Poverty, unemployment and rural India|Self-help groups mainly aim to:|Give large loans to industry|Provide small savings-based credit to poor members|Replace banks|Collect taxes|1|Members pool savings and lend among themselves (microcredit).
m|Poverty, unemployment and rural India|Relative poverty compares:|Income with a fixed minimum|Income of a group with that of others|Calorie intake with a norm|Prices over time|1|It looks at inequality between groups.
m|Sustainable development and environment|The definition of sustainable development as meeting present needs without harming future generations' ability to meet theirs comes from:|The Brundtland Commission|The Planning Commission|The Kyoto Protocol|The World Bank|0|Our Common Future (1987).
m|Sustainable development and environment|Carrying capacity of the environment means:|The weight it can bear|Resource use within its ability to regenerate and absorb waste|The number of factories it can hold|The total land area|1|Using resources faster than they renew breaks carrying capacity.
m|Sustainable development and environment|Which is a renewable resource?|Coal|Petroleum|Solar energy|Natural gas|2|Solar energy is not used up.
m|Sustainable development and environment|The Chipko movement, aimed at saving trees, began in:|Kerala|Uttarakhand|Rajasthan|Odisha|1|Villagers hugged trees in the Himalayan region in the 1970s.
m|Sustainable development and environment|Global warming is caused mainly by a rise in:|Oxygen|Greenhouse gases such as carbon dioxide|Nitrogen|Ozone in the stratosphere|1|These gases trap heat in the atmosphere.
m|Statistics and data|Data collected by the investigator first-hand are:|Primary data|Secondary data|Tertiary data|Census data|0|Secondary data were collected earlier by someone else.
m|Statistics and data|The Census of India is held every:|5 years|10 years|15 years|Year|1|The last full census was in 2011.
m|Statistics and data|In random sampling:|Only large units are chosen|Every unit has an equal chance of being chosen|The investigator picks favourite units|Every unit is studied|1|This avoids personal bias.
m|Statistics and data|Which is a discrete variable?|Height|Weight|Number of children in a family|Temperature|2|It takes only whole-number values.
m|Statistics and data|The mid-value of the class 10–20 is:|10|15|20|30|1|(10 + 20)/2 = 15.
m|Statistics and data|An ogive is a graph of:|Simple frequency|Cumulative frequency|Relative frequency|Class marks only|1|An ogive plots cumulative frequencies.
m|Statistics and data|A histogram is drawn for:|A continuous frequency distribution|Time series only|Qualitative data|A single value|0|Bars stand side by side on class intervals.
m|Central tendency and dispersion|The mean of 2, 4, 6, 8, 10 is:|5|6|8|30|1|30/5 = 6.
m|Central tendency and dispersion|The median of 3, 7, 1, 9, 5 is:|5|7|3|9|0|Ordered: 1, 3, 5, 7, 9.
m|Central tendency and dispersion|The empirical relation between mean, median and mode is:|Mode = 3 Median − 2 Mean|Mode = 2 Median − 3 Mean|Mean = 3 Median − 2 Mode|Median = 3 Mode − 2 Mean|0|It holds for moderately skewed data.
m|Central tendency and dispersion|The range of 10, 25, 7, 40, 18 is:|30|33|40|47|1|40 − 7 = 33.
m|Central tendency and dispersion|The coefficient of variation is:|(Mean/SD) × 100|(SD/Mean) × 100|SD × Mean|Variance/Mean|1|It compares relative spread across series.
m|Central tendency and dispersion|Quartile deviation is:|Q3 − Q1|(Q3 − Q1)/2|(Q3 + Q1)/2|Q2 − Q1|1|Half the inter-quartile range.
m|Central tendency and dispersion|The Lorenz curve is used to measure:|Central tendency|Inequality of distribution|Correlation|Price change|1|The farther it bows from the line of equality, the greater the inequality.
m|Central tendency and dispersion|Which average is most affected by extreme values?|Mean|Median|Mode|Quartile|0|The mean uses every value, including outliers.
m|Correlation and index numbers|The coefficient of correlation lies between:|0 and 1|−1 and +1|−∞ and +∞|0 and 100|1|r = ±1 means perfect correlation.
m|Correlation and index numbers|Spearman's method is best for:|Data given as ranks or qualitative traits|Very large numeric data only|Time series|Index numbers|0|It works on ranks.
m|Correlation and index numbers|In an index number, the base year value is taken as:|1|10|100|1000|2|Other years are expressed relative to 100.
m|Correlation and index numbers|Laspeyres' price index uses as weights the:|Current year quantities|Base year quantities|Average prices|Current year prices|1|Paasche's uses current year quantities.
m|Correlation and index numbers|A scatter diagram shows:|Frequency of a variable|The relationship between two variables|Trend over time only|Cumulative frequency|1|Each point is a pair of values.
m|Correlation and index numbers|The Consumer Price Index measures changes in:|Wholesale prices|Retail prices of a basket bought by consumers|Industrial output|Share prices|1|The RBI uses CPI inflation as its target.
ar|Correlation and index numbers|Correlation does not necessarily imply causation.|Two variables may move together because both depend on a third factor.|0|The reason shows exactly why correlation alone can't prove cause.
ar|Central tendency and dispersion|The arithmetic mean is affected by extreme values.|The mean is calculated using every observation.|0|Because every value enters the mean, an outlier pulls it.
ar|Growth, development and planning|The Green Revolution greatly increased wheat output.|In its first phase it was limited to rice in eastern India.|2|The first phase favoured wheat in Punjab, Haryana and western UP, so the reason is false.
ar|LPG reforms of 1991|India faced a foreign exchange crisis in 1991.|Under liberalisation the WTO was replaced by GATT.|2|The assertion is true; GATT was replaced by the WTO in 1995, so the reason is false.
m|Understanding economics|Match each economist with the definition. ¶ A. Lionel Robbins  B. Alfred Marshall  C. Adam Smith  D. Paul Samuelson ¶ I. Wealth  II. Growth  III. Scarcity  IV. Welfare|A-III, B-IV, C-I, D-II|A-IV, B-III, C-I, D-II|A-III, B-I, C-IV, D-II|A-II, B-IV, C-I, D-III|0|Robbins: scarcity; Marshall: welfare; Smith: wealth; Samuelson: growth.
m|Growth, development and planning|Arrange in chronological order: ¶ A. LPG reforms  B. First Five Year Plan  C. NITI Aayog set up  D. WTO formed|B, A, D, C|B, D, A, C|A, B, D, C|B, A, C, D|0|1951, 1991, 1995, 2015.
m|Poverty, unemployment and rural India|Which statements about MGNREGA are correct? ¶ A. It was passed in 2005.  B. It guarantees 100 days of wage work.  C. It applies to urban households.  D. Work is to be given within 15 days of applying.|A, B and D only|A and C only|B and C only|A, B, C and D|0|It covers rural households, so C is wrong.
m|Statistics and data|Match the term with its meaning. ¶ A. Primary data  B. Secondary data  C. Census method  D. Sample method ¶ I. Studying every unit  II. Studying a part to judge the whole  III. Collected first-hand  IV. Collected earlier by others|A-III, B-IV, C-I, D-II|A-IV, B-III, C-I, D-II|A-III, B-IV, C-II, D-I|A-I, B-II, C-III, D-IV|0|Each term matched to its definition.
@eco.b
m|Consumer behaviour|Along a convex indifference curve, the marginal rate of substitution:|Increases|Diminishes|Is constant|Is zero|1|The consumer gives up less and less of Y for each extra unit of X.
m|Consumer behaviour|The slope of the budget line is:|−Px/Py|−Py/Px|Px × Py|M/Px|0|It is the price ratio, with a negative sign.
m|Consumer behaviour|In the single-commodity case, a consumer is in equilibrium when:|MUx = Px (in money terms)|MUx > Px|TU is zero|MUx is maximum|0|Buying stops when the money value of the last unit's utility equals its price.
m|Consumer behaviour|Two indifference curves cannot intersect because:|Prices are fixed|It would mean one combination gives two levels of satisfaction|Income is limited|MRS is constant|1|A point on both curves would violate consistency of preferences.
m|Consumer behaviour|Total utility is maximum when marginal utility is:|Maximum|Positive and rising|Zero|Negative|2|After that, extra units lower total utility.
m|Consumer behaviour|An inferior good is one whose demand:|Rises with income|Falls as income rises|Does not change with income|Rises with its price|1|Buyers switch to better goods as income grows.
m|Consumer behaviour|If the price of tea rises, the demand for coffee:|Falls|Rises|Stays the same|Becomes zero|1|Tea and coffee are substitutes.
m|Consumer behaviour|A fall in the price of a complementary good causes the demand curve of the main good to:|Shift right|Shift left|Not move|Become vertical|0|Cheaper complements raise demand for the main good.
m|Elasticity of demand|Price falls by 10% and quantity demanded rises by 20%. Price elasticity of demand is:|0.5|1|2|20|2|20/10 = 2, so demand is elastic.
m|Elasticity of demand|When demand is unitary elastic, a fall in price leaves total expenditure:|Higher|Lower|Unchanged|Zero|2|The percentage rise in quantity exactly offsets the price fall.
m|Elasticity of demand|On a straight-line demand curve, elasticity at the midpoint is:|0|1|Infinite|Greater than 1|1|Lower segment equals upper segment.
m|Elasticity of demand|A perfectly inelastic demand curve is:|Horizontal|Vertical|A rectangular hyperbola|Downward sloping|1|Quantity does not respond to price at all.
m|Production and costs|Total product is maximum when marginal product is:|Maximum|Equal to average product|Zero|Negative|2|After that, MP turns negative.
m|Production and costs|MP cuts AP at the point where AP is:|Minimum|Maximum|Zero|Falling|1|While MP > AP, AP rises; when MP < AP, AP falls.
m|Production and costs|Which is a fixed cost?|Raw material cost|Wages of daily workers|Rent of the factory|Electricity for machines|2|Rent does not change with output in the short run.
m|Production and costs|The shape of the AFC curve is a:|U-shaped curve|Rectangular hyperbola|Straight line|Vertical line|1|AFC × output = TFC, a constant.
m|Production and costs|The MC curve cuts the ATC curve at:|Its maximum point|Its minimum point|The origin|Any point|1|The marginal pulls the average down until it rises above it.
m|Production and costs|ATC is equal to:|AFC − AVC|AFC + AVC|TFC + TVC|MC + AVC|1|Average total cost is the sum of average fixed and average variable cost.
m|Producer equilibrium and supply|Under perfect competition, for a firm:|AR > MR|AR = MR = Price|MR > AR|AR falls|1|The firm is a price taker.
m|Producer equilibrium and supply|A producer is in equilibrium when:|MR = MC and MC is rising|MR > MC|TR is maximum|AC is minimum|0|Both conditions are needed.
m|Producer equilibrium and supply|In the short run, a competitive firm shuts down if price falls below minimum:|ATC|AFC|AVC|MC|2|It must at least cover variable costs.
m|Producer equilibrium and supply|An improvement in technology shifts the supply curve:|Left|Right|Not at all|To the vertical|1|Lower cost per unit means more is supplied at each price.
m|Producer equilibrium and supply|The supply curve of a competitive firm is its:|AVC curve|MC curve above minimum AVC|ATC curve|AR curve|1|Each price maps to output where P = MC.
m|Market forms and price determination|If demand rises and supply is unchanged, equilibrium price and quantity:|Both rise|Both fall|Price rises, quantity falls|Price falls, quantity rises|0|The demand curve shifts right along a fixed supply curve.
m|Market forms and price determination|A price ceiling set below equilibrium leads to:|Surplus|Shortage|No effect|Higher prices|1|Quantity demanded exceeds quantity supplied.
m|Market forms and price determination|Minimum support price for wheat is an example of:|Price ceiling|Price floor|Rationing|Black market|1|A floor sets the lowest price allowed.
m|Market forms and price determination|A monopolist's demand curve is:|Horizontal|Downward sloping|Vertical|Upward sloping|1|It faces the market demand curve.
m|Market forms and price determination|Product differentiation is the main feature of:|Perfect competition|Monopolistic competition|Monopoly|Pure oligopoly|1|Many sellers sell similar but not identical goods.
m|Market forms and price determination|Interdependence among firms is a feature of:|Perfect competition|Monopoly|Oligopoly|Monopolistic competition|2|With few sellers, each watches the others' moves.
m|National income|GDP at factor cost is:|GDP at market price − net indirect taxes|GDP at market price + subsidies only|NNP + depreciation|GNP − NFIA|0|Net indirect taxes = indirect taxes − subsidies.
m|National income|NNP is equal to:|GNP + depreciation|GNP − depreciation|GDP − NFIA|GDP + subsidies|1|Depreciation is the consumption of fixed capital.
m|National income|GNP is equal to:|GDP + net factor income from abroad|GDP − net factor income from abroad|NDP + taxes|NNP − depreciation|0|National product adds income residents earn abroad, net.
m|National income|Which is NOT included in national income?|Wages|Rent|Old age pension|Profit|2|Pensions are transfer payments, with nothing produced in return.
m|National income|Double counting is avoided by counting:|All goods sold|Only final goods or value added|Only exports|Only intermediate goods|1|Including intermediate goods would count them twice.
m|National income|Real GDP is measured at:|Current prices|Constant (base year) prices|Market prices only|Factor cost only|1|It removes the effect of price changes.
m|National income|If nominal GDP is ₹200 crore and real GDP is ₹160 crore, the GDP deflator is:|80|125|160|200|1|(200/160) × 100 = 125.
m|Money and banking|Money solves the problem of:|Inflation|Double coincidence of wants|Unemployment|Deficit|1|Barter needs each side to want what the other has.
m|Money and banking|The repo rate is the rate at which:|Banks lend to the public|The RBI lends to commercial banks|Banks lend to each other|The government borrows abroad|1|A higher repo rate makes bank borrowing costlier.
m|Money and banking|An increase in the cash reserve ratio will:|Increase money supply|Reduce money supply|Not affect money supply|Increase exports|1|Banks have less to lend.
m|Money and banking|With a legal reserve ratio of 20%, an initial deposit of ₹1,000 can lead to total deposits of:|₹2,000|₹5,000|₹10,000|₹1,200|1|Money multiplier = 1/0.2 = 5.
m|Money and banking|The RBI acting as lender of last resort means it:|Lends to farmers directly|Supports banks facing a liquidity crisis|Issues all bank loans|Lends only to the government|1|It rescues banks when no other source is available.
m|Money and banking|Open market operations refer to the RBI:|Opening new branches|Buying and selling government securities|Fixing exchange rates|Collecting taxes|1|Buying securities adds money; selling them absorbs it.
m|Income determination|MPC + MPS is equal to:|0|1|MPC × MPS|Investment|1|Every extra rupee of income is either consumed or saved.
m|Income determination|If MPC is 0.8, the investment multiplier is:|0.8|1.25|4|5|3|k = 1/(1 − MPC) = 1/0.2 = 5.
m|Income determination|If MPC is 0.75 and investment rises by ₹100 crore, income rises by:|₹75 crore|₹133 crore|₹400 crore|₹300 crore|2|k = 4, so ΔY = 4 × 100.
m|Income determination|In a two-sector economy, aggregate demand is:|C + I|C + I + G|C + S|C + I + G + (X − M)|0|Households and firms only.
m|Income determination|Aggregate demand above output at full employment creates:|Deflationary gap|Inflationary gap|Unemployment|Deficient demand|1|Excess demand pushes up prices.
m|Income determination|To correct deficient demand, the government may:|Raise taxes|Cut its spending|Increase its spending|Raise the repo rate|2|Higher spending raises aggregate demand.
m|Government budget|Borrowing by the government is a:|Revenue receipt|Capital receipt|Tax receipt|Revenue expenditure|1|It creates a liability.
m|Government budget|Fiscal deficit is:|Total expenditure − total receipts excluding borrowings|Revenue expenditure − revenue receipts|Fiscal deficit − interest|Total receipts − total expenditure|0|It shows how much the government must borrow.
m|Government budget|Primary deficit is:|Fiscal deficit + interest payments|Fiscal deficit − interest payments|Revenue deficit − interest|Capital expenditure − borrowing|1|It shows borrowing needed for spending other than interest.
m|Government budget|Which is a direct tax?|GST|Customs duty|Income tax|Excise duty|2|The person who pays it bears it.
m|Balance of payments and exchange rate|Trade in goods and services is recorded in the:|Capital account|Current account|Reserve account|Fiscal account|1|Current account also includes income and transfers.
m|Balance of payments and exchange rate|Foreign direct investment is recorded in the:|Current account|Capital account|Revenue account|Trade account|1|It changes assets and liabilities.
m|Balance of payments and exchange rate|Depreciation of the rupee against the dollar makes Indian exports:|Costlier for foreigners|Cheaper for foreigners|Unaffected|Illegal|1|Each dollar buys more rupees' worth of goods.
m|Balance of payments and exchange rate|Under a flexible exchange rate system, the rate is set by:|The government alone|Demand and supply of foreign exchange|The IMF|The World Bank|1|The market decides it.
m|Balance of payments and exchange rate|Transactions made to cover a deficit in the balance of payments are called:|Autonomous|Accommodating|Current|Unilateral|1|They respond to the gap, unlike autonomous ones made for profit.
ar|Elasticity of demand|When demand is inelastic, MR is negative.|In the inelastic part of the demand curve, a fall in price reduces total revenue.|0|If TR falls as more is sold, MR is negative; the reason explains the assertion.
ar|Money and banking|A cut in the repo rate tends to increase money supply.|A cut in the repo rate makes borrowing from the RBI costlier for banks.|2|A cut makes borrowing cheaper, so the reason is false.
ar|National income|Transfer payments are excluded from national income.|They are not payments for any current production.|0|That is exactly why they are left out.
ar|Market forms and price determination|A firm under perfect competition can sell any amount at the market price.|Each firm is a price maker.|2|It is a price taker, so the reason is false.
m|Government budget|Match each deficit with its formula. ¶ A. Revenue deficit  B. Fiscal deficit  C. Primary deficit ¶ I. Fiscal deficit − interest payments  II. Revenue expenditure − revenue receipts  III. Total expenditure − total receipts excluding borrowings|A-II, B-III, C-I|A-III, B-II, C-I|A-II, B-I, C-III|A-I, B-III, C-II|0|Each deficit with its standard definition.
m|Market forms and price determination|Which statements about perfect competition are correct? ¶ A. Very many buyers and sellers  B. Homogeneous product  C. Free entry and exit  D. Firms set their own prices|A, B and C only|A and D only|B, C and D only|A, B, C and D|0|Firms are price takers, so D is false.
m|Money and banking|Match each tool with its type. ¶ A. Repo rate  B. Cash reserve ratio  C. Open market operations  D. Moral suasion ¶ I. Persuasion by the RBI  II. Buying and selling securities  III. Policy interest rate  IV. Share of deposits kept with the RBI|A-III, B-IV, C-II, D-I|A-IV, B-III, C-II, D-I|A-III, B-II, C-IV, D-I|A-II, B-IV, C-III, D-I|0|Each instrument with what it does.
m|Production and costs|Arrange the phases of the law of variable proportions in order: ¶ A. TP rises at a falling rate  B. TP falls  C. TP rises at an increasing rate|C, A, B|A, C, B|B, A, C|C, B, A|0|Increasing returns, then diminishing returns, then negative returns.
@pol.a
m|Political science and the state|Who is often called the father of political science?|Plato|Aristotle|Machiavelli|Hobbes|1|Aristotle's Politics studied many constitutions systematically.
m|Political science and the state|The four essential elements of a state are:|Population, territory, government and sovereignty|Population, constitution, army and capital|Territory, parliament, courts and police|Nation, religion, language and culture|0|Without any one of these there is no state.
m|Political science and the state|Which is NOT an essential element of the state?|Territory|Sovereignty|Government|Political party|3|Parties operate within a state but are not one of its elements.
m|Political science and the state|The government is best described as:|The same as the state|The agency through which the will of the state is carried out|A permanent body that never changes|The people of the country|1|Governments change; the state continues.
m|Political science and the state|The element that separates a state from other associations is:|Population|Sovereignty|Government|Territory|1|Only the state has supreme authority.
m|Origin of the state|The theory that kings get their authority from God is the:|Social contract theory|Divine origin theory|Force theory|Evolutionary theory|1|It placed the ruler beyond question by subjects.
m|Origin of the state|Thomas Hobbes set out his social contract theory in:|Leviathan|Two Treatises of Government|The Social Contract|The Republic|0|Leviathan was published in 1651.
m|Origin of the state|For Hobbes, life in the state of nature was:|Peaceful and happy|A war of all against all|Governed by the general will|Ruled by natural rights protected by courts|1|Fear of violent death drove people to create an absolute sovereign.
m|Origin of the state|John Locke held that people formed the state mainly to protect their natural rights to:|Life, liberty and property|Equality, fraternity and justice|Religion and language|Work and leisure|0|If the government fails to protect them, the people may resist.
m|Origin of the state|The idea of the 'general will' belongs to:|Hobbes|Locke|Rousseau|Bodin|2|Rousseau's The Social Contract (1762).
m|Origin of the state|The theory most widely accepted today explains the state as the product of:|A single contract|Gradual historical growth|Divine command|Conquest alone|1|The evolutionary or historical theory sees many factors over time.
m|Origin of the state|The force theory holds that the state originated in:|Kinship|Conquest and the use of power|Religion|An agreement|1|Stronger groups subdued weaker ones.
m|Liberalism and communism|Who is often called the father of liberalism?|John Locke|Karl Marx|Rousseau|Hegel|0|His stress on rights and limited government shaped liberal thought.
m|Liberalism and communism|Classical liberalism favoured:|Laissez-faire and a limited state|State ownership of all property|Dictatorship of the proletariat|A one-party state|0|The state should leave the economy largely to the market.
m|Liberalism and communism|The Communist Manifesto (1848) was written by:|Marx and Engels|Lenin and Stalin|Marx and Lenin|Engels and Mao|0|It calls on workers of all countries to unite.
m|Liberalism and communism|According to Marx, history is driven by:|Divine will|Class struggle|Great leaders|Geography|1|Historical materialism traces change to conflict between classes.
m|Liberalism and communism|In Marxist theory, after communism is achieved the state will:|Become stronger|Wither away|Become a monarchy|Be ruled by the bourgeoisie|1|With classes gone, there is nothing left for the state to enforce.
m|Liberalism and communism|Welfare (modern) liberalism differs from classical liberalism in that it:|Rejects individual liberty|Accepts a bigger role for the state in welfare|Supports absolute monarchy|Opposes democracy|1|It sees the state as an enabler of real freedom.
m|Sovereignty|The modern theory of sovereignty was first set out by:|Jean Bodin|John Austin|Harold Laski|Aristotle|0|Bodin wrote Six Books of the Commonwealth (1576).
m|Sovereignty|John Austin saw sovereignty as residing in:|The people|A determinate human superior habitually obeyed|God|International law|1|The monistic or legal theory.
m|Sovereignty|Pluralists such as Harold Laski argue that:|Sovereignty is absolute and indivisible|Authority is shared among many associations|Only the king is sovereign|The state does not exist|1|They reject the idea of a single, absolute sovereign.
m|Sovereignty|A sovereign who actually exercises power but lacks legal title is the:|De jure sovereign|De facto sovereign|Titular sovereign|Popular sovereign|1|De jure is the legal sovereign.
m|Sovereignty|The idea that ultimate authority rests with the people is:|Legal sovereignty|Political sovereignty|Popular sovereignty|Titular sovereignty|2|Associated with Rousseau.
m|Law|John Austin defined law as:|Custom of the people|The command of the sovereign|The will of God|An agreement between states|1|His analytical (imperative) theory.
m|Law|The most important source of law in modern states is:|Custom|Religion|Legislation|Equity|2|Most laws today are made by legislatures.
m|Law|The phrase 'rule of law' is associated with:|A. V. Dicey|John Austin|Montesquieu|Bentham|0|Dicey stressed equality before law and no arbitrary power.
m|Law|Law made by judges through their decisions is:|Statute law|Case law (judicial precedent)|Customary law|Ordinance|1|Courts follow earlier rulings on similar facts.
m|Liberty, equality and justice|Negative liberty means:|Absence of external restraints|Provision of opportunities by the state|Freedom to harm others|The rule of the majority|0|Positive liberty stresses the conditions needed to develop oneself.
m|Liberty, equality and justice|J. S. Mill's On Liberty (1859) set out the:|Veil of ignorance|Harm principle|General will|Class struggle|1|The state may restrict liberty only to prevent harm to others.
m|Liberty, equality and justice|John Rawls argued for justice using the idea of a:|Social contract by force|Veil of ignorance|Divine law|Free market|1|A Theory of Justice (1971).
m|Liberty, equality and justice|Reservations in jobs and education are an example of:|Formal equality only|Affirmative action|Negative liberty|Laissez-faire|1|Special measures to correct historical disadvantage.
m|Liberty, equality and justice|Distributive justice is concerned with:|Punishing crime|Fair sharing of goods, wealth and opportunities|Courts and procedure only|International trade|1|Who gets what in society.
m|End of the Cold War and the unipolar world|The Soviet Union disintegrated in:|1989|1990|1991|1993|2|Its dissolution in December 1991 ended the Cold War.
m|End of the Cold War and the unipolar world|The Berlin Wall fell in:|1987|1989|1991|1985|1|November 1989.
m|End of the Cold War and the unipolar world|Perestroika and glasnost were reforms introduced by:|Boris Yeltsin|Mikhail Gorbachev|Vladimir Putin|Leonid Brezhnev|1|Restructuring and openness.
m|End of the Cold War and the unipolar world|'Shock therapy' refers to:|Military action in Iraq|A sudden shift from communism to capitalism in former Soviet bloc states|A UN programme|The Cuban missile crisis|1|Backed by the World Bank and IMF in the 1990s.
m|End of the Cold War and the unipolar world|The First Gulf War (1991) followed Iraq's invasion of:|Iran|Kuwait|Saudi Arabia|Syria|1|A US-led coalition ran Operation Desert Storm.
m|End of the Cold War and the unipolar world|After the 9/11 attacks, the US launched Operation Enduring Freedom against:|Iraq|Afghanistan's Taliban and al-Qaeda|Iran|North Korea|1|It began in October 2001.
m|End of the Cold War and the unipolar world|The Commonwealth of Independent States was formed by:|Former Soviet republics|Western European states|ASEAN members|SAARC members|0|It was created as the USSR dissolved in 1991.
m|Regional cooperation|SAARC was founded in:|1980|1985|1990|1967|1|At Dhaka in December 1985.
m|Regional cooperation|The SAARC Secretariat is in:|New Delhi|Dhaka|Kathmandu|Colombo|2|It was set up in 1987.
m|Regional cooperation|ASEAN was set up in 1967 by the:|Bangkok Declaration|Bandung Declaration|Manila Accord|Jakarta Pact|0|Five founder members: Indonesia, Malaysia, the Philippines, Singapore and Thailand.
m|Regional cooperation|The treaty that created the European Union was signed in 1992 at:|Rome|Maastricht|Lisbon|Paris|1|It came into force in 1993.
m|Regional cooperation|SAFTA aims to:|Create a South Asian military alliance|Lower trade barriers in South Asia|Build a common currency|Solve border disputes|1|South Asian Free Trade Area.
m|Regional cooperation|The Non-Aligned Movement held its first summit in 1961 at:|Bandung|Belgrade|Cairo|New Delhi|1|Nehru, Tito and Nasser were among its leaders.
m|India and its neighbours|The Simla Agreement of 1972 was signed between India and:|China|Pakistan|Bangladesh|Nepal|1|After the 1971 war.
m|India and its neighbours|The Indus Waters Treaty (1960) was mediated by the:|UN|World Bank|IMF|Commonwealth|1|It shares the Indus rivers between India and Pakistan.
m|India and its neighbours|The Ganga water-sharing treaty of 1996 was signed with:|Nepal|Bhutan|Bangladesh|China|2|It covers flows at Farakka.
m|India and its neighbours|Nepal abolished its monarchy and became a republic in:|1990|2006|2008|2015|2|The Constituent Assembly declared it in 2008.
m|India and its neighbours|The Indian Peace Keeping Force was sent in 1987 to:|Maldives|Sri Lanka|Bangladesh|Nepal|1|Under the India–Sri Lanka Accord.
m|India and its neighbours|India's operation to stop a coup attempt in the Maldives in 1988 was called:|Operation Cactus|Operation Meghdoot|Operation Vijay|Operation Rahat|0|Indian forces acted at the Maldivian President's request.
m|India and its neighbours|The Panchsheel principles were agreed between India and:|Pakistan|China|USSR|USA|1|In 1954.
ar|Sovereignty|Sovereignty has both internal and external aspects.|The state is supreme within its territory and free from outside control.|0|The reason describes both aspects.
ar|Origin of the state|Hobbes favoured an absolute sovereign.|Hobbes believed the state of nature was peaceful.|2|He saw it as violent and fearful, so the reason is false.
ar|Liberty, equality and justice|Liberty is not the absence of all restraint.|Reasonable restrictions protect the liberty of others.|0|The reason explains why liberty needs limits.
ar|Regional cooperation|SAARC has been very successful in resolving political disputes in South Asia.|India–Pakistan tensions have often stalled SAARC.|3|The assertion is false; the reason is true.
m|Origin of the state|Match each thinker with the work. ¶ A. Hobbes  B. Locke  C. Rousseau  D. J. S. Mill ¶ I. The Social Contract  II. On Liberty  III. Leviathan  IV. Two Treatises of Government|A-III, B-IV, C-I, D-II|A-IV, B-III, C-I, D-II|A-III, B-I, C-IV, D-II|A-I, B-IV, C-III, D-II|0|Each thinker with the book.
m|Regional cooperation|Arrange in chronological order: ¶ A. SAARC founded  B. ASEAN founded  C. Fall of the Berlin Wall  D. First NAM summit|D, B, A, C|B, D, A, C|D, A, B, C|D, B, C, A|0|1961, 1967, 1985, 1989.
m|Regional cooperation|Which statements about SAARC are correct? ¶ A. It was founded in 1985.  B. Afghanistan joined later, in 2007.  C. Its secretariat is in Kathmandu.  D. China is a full member.|A, B and C only|A and D only|B and D only|A, B, C and D|0|China is an observer, not a member.
m|Sovereignty|Match the type of sovereignty with its meaning. ¶ A. Legal  B. Political  C. De facto  D. Titular ¶ I. Exercises real power without legal right  II. Nominal head with no real power  III. Power to make law  IV. Will of the electorate behind the law|A-III, B-IV, C-I, D-II|A-IV, B-III, C-I, D-II|A-III, B-IV, C-II, D-I|A-I, B-IV, C-III, D-II|0|Each type with its meaning.
@pol.b
m|The end of bipolarity|The phrase 'the largest garage sale in history' refers to:|Selling Soviet-era state industries cheaply|A US auction of weapons|EU farm subsidies|A UN fund|0|Under shock therapy, state assets were sold off at very low prices.
m|The end of bipolarity|Which of these did NOT emerge from the former Soviet Union?|Ukraine|Kazakhstan|Poland|Georgia|2|Poland was a Warsaw Pact state, not a Soviet republic.
m|The end of bipolarity|The leader who rose to power in Russia as the USSR broke up was:|Boris Yeltsin|Leonid Brezhnev|Nikita Khrushchev|Vladimir Lenin|0|He was the first President of Russia.
m|Contemporary centres of power|The euro was introduced as a currency in:|1992|1999|2004|2008|1|Coins and notes came in 2002.
m|Contemporary centres of power|'The ASEAN Way' stresses:|Military alliances|Informal, non-confrontational and cooperative interaction|A single currency|Majority voting|1|Consensus and respect for sovereignty.
m|Contemporary centres of power|China's economic reforms and 'open door' policy began in 1978 under:|Mao Zedong|Deng Xiaoping|Zhou Enlai|Xi Jinping|1|Special Economic Zones drew foreign investment.
m|Contemporary centres of power|Which country is the only one to have suffered atomic bombings in war?|Germany|Japan|Korea|Vietnam|1|Hiroshima and Nagasaki, 1945.
m|Contemporary centres of power|South Korea's rapid growth from the 1960s is often called the:|Miracle on the Han River|Asian Tiger Pact|Great Leap Forward|Pacific Plan|0|It grew from poverty into a high-income economy.
m|Contemporary South Asia|Bangladesh became independent in:|1947|1965|1971|1975|2|After the liberation war with Pakistan.
m|Contemporary South Asia|Which South Asian country became a constitutional monarchy in 2008?|Nepal|Bhutan|Sri Lanka|Maldives|1|Bhutan held its first parliamentary elections in 2008.
m|Contemporary South Asia|The LTTE fought for a separate Tamil state in:|India|Sri Lanka|Myanmar|Maldives|1|The conflict ended in 2009.
m|International organisations|The United Nations was founded on 24 October:|1919|1945|1948|1950|1|With 51 original members.
m|International organisations|The permanent members of the UN Security Council are:|USA, UK, France, Russia, China|USA, UK, Germany, Japan, China|USA, Russia, India, China, France|USA, UK, France, Germany, Russia|0|They hold the veto.
m|International organisations|Non-permanent members of the Security Council are elected for:|One year|Two years|Five years|Life|1|Ten such seats, elected by the General Assembly.
m|International organisations|The first Secretary-General of the UN was:|Dag Hammarskjöld|Trygve Lie|U Thant|Kofi Annan|1|Trygve Lie of Norway served from 1946.
m|International organisations|The IMF and the World Bank were set up after the conference at:|Bretton Woods|Geneva|Yalta|San Francisco|0|In 1944.
m|International organisations|The International Atomic Energy Agency was set up in:|1945|1957|1968|1995|1|To promote peaceful use of nuclear energy.
m|International organisations|Amnesty International is a:|UN agency|Non-governmental organisation working on human rights|Military alliance|Trade body|1|It reports on rights abuses worldwide.
m|Security in the contemporary world|India has NOT signed the:|Nuclear Non-Proliferation Treaty|UN Charter|Kyoto Protocol|Paris Agreement|0|India sees the NPT as discriminatory.
m|Security in the contemporary world|Non-traditional security includes threats such as:|Invasion by another country|Terrorism, epidemics and climate change|Border wars only|Nuclear war only|1|It widens security beyond military threats.
m|Security in the contemporary world|Human security focuses on:|Protecting the state's borders|Protecting people's lives and well-being|Arms build-up|Alliances|1|People rather than territory.
m|Security in the contemporary world|Cooperative security relies on:|Unilateral military action|Working with other countries and organisations|Isolation|Nuclear deterrence alone|1|Many threats cross borders.
m|Environment and natural resources|The Earth Summit of 1992 was held in:|Kyoto|Rio de Janeiro|Stockholm|Paris|1|It produced Agenda 21.
m|Environment and natural resources|The Kyoto Protocol (1997) set targets for:|Ozone protection|Industrialised countries to cut greenhouse gas emissions|Protecting whales|Ocean mining|1|It was agreed in Japan.
m|Environment and natural resources|'Common but differentiated responsibilities' means:|All countries must cut emissions equally|Developed countries bear more responsibility for environmental protection|Only poor countries must act|No one is responsible|1|Rich countries polluted more historically.
m|Environment and natural resources|Which is a global commons?|The Himalayas|Antarctica|The Ganga basin|The Sahara|1|Areas outside any one country's control, like Antarctica and outer space.
m|Environment and natural resources|The Antarctic Treaty was signed in:|1945|1959|1972|1992|1|It reserves the continent for peaceful use.
m|Globalisation|The first World Social Forum met in 2001 at:|Davos|Porto Alegre|Seattle|Mumbai|1|It was a counter to the World Economic Forum.
m|Globalisation|The main cause of globalisation is:|Technology, especially communication and transport|Wars|Religion|Monarchy|0|Ideas, goods and capital move faster.
m|Globalisation|Critics on the left argue that globalisation:|Makes the rich richer and the poor poorer|Ends all poverty|Strengthens state welfare|Has no effect|0|They worry about inequality and loss of welfare.
m|Challenges of nation-building|India was partitioned in 1947 along the line drawn by:|Mountbatten|Cyril Radcliffe|Nehru|Jinnah|1|The Radcliffe Line.
m|Challenges of nation-building|The integration of most princely states was led by:|Jawaharlal Nehru|Sardar Vallabhbhai Patel|B. R. Ambedkar|Maulana Azad|1|With V. P. Menon.
m|Challenges of nation-building|Hyderabad was integrated in 1948 through:|Operation Polo|Operation Vijay|Operation Blue Star|A plebiscite|0|The Nizam had resisted accession.
m|Challenges of nation-building|The first state formed on a linguistic basis, in 1953, was:|Gujarat|Andhra Pradesh|Kerala|Punjab|1|After the death of Potti Sriramulu on hunger strike.
m|Challenges of nation-building|The States Reorganisation Commission was headed by:|Fazl Ali|K. M. Panikkar|H. N. Kunzru|V. P. Menon|0|Its report led to the States Reorganisation Act, 1956.
m|Era of one-party dominance|India's first general election was held in:|1950|1951–52|1955|1957|1|The Election Commission was set up in 1950.
m|Era of one-party dominance|India's first Chief Election Commissioner was:|Sukumar Sen|T. N. Seshan|K. V. K. Sundaram|S. P. Sen Verma|0|He oversaw the first two elections.
m|Era of one-party dominance|In 1957 a Communist government came to power in:|West Bengal|Kerala|Tripura|Andhra Pradesh|1|Led by E. M. S. Namboodiripad.
m|Era of one-party dominance|The Bharatiya Jana Sangh was founded in 1951 by:|Syama Prasad Mookerjee|Deen Dayal Upadhyaya|Atal Bihari Vajpayee|C. Rajagopalachari|0|It later became part of the Janata Party.
m|Era of one-party dominance|The Swatantra Party (1959) was founded by:|C. Rajagopalachari|Ram Manohar Lohia|Jayaprakash Narayan|Acharya Kripalani|0|It opposed state controls on the economy.
m|Politics of planned development|The Planning Commission was set up in March 1950 by:|A constitutional amendment|A cabinet resolution|An act of Parliament|The Supreme Court|1|It was not a constitutional or statutory body.
m|Politics of planned development|The Bombay Plan of 1944 was drawn up by:|Leading industrialists|The Communist Party|The British government|Gandhi|0|It supported state investment in industry.
m|Politics of planned development|Operation Flood, India's dairy cooperative movement, is linked with:|M. S. Swaminathan|Verghese Kurien|Norman Borlaug|C. Subramaniam|1|Through Amul in Anand, Gujarat.
m|India's external relations|The Bandung Conference of Afro-Asian nations was held in:|1947|1955|1961|1962|1|In Indonesia.
m|India's external relations|The Tashkent Agreement (1966) was signed after the war of 1965 between Lal Bahadur Shastri and:|Zulfikar Ali Bhutto|Ayub Khan|Yahya Khan|Zia-ul-Haq|1|Mediated by the Soviet Union.
m|India's external relations|India signed the Treaty of Peace and Friendship with the USSR in:|1962|1966|1971|1974|2|Shortly before the Bangladesh war.
m|India's external relations|India conducted its first nuclear test at Pokhran in:|1964|1974|1988|1998|1|Called a peaceful nuclear explosion.
m|Challenges to and restoration of the Congress system|The phrase 'Aaya Ram, Gaya Ram' refers to:|Frequent defections by legislators|A famous slogan of 1971|A peasant movement|A film|0|It came from a Haryana MLA who switched parties several times in 1967.
m|Challenges to and restoration of the Congress system|The slogan 'Garibi Hatao' was raised by Indira Gandhi in the election of:|1967|1971|1977|1980|1|It helped her win a large majority.
m|Challenges to and restoration of the Congress system|The Congress party split in 1969 mainly over:|The election of the President|Language policy|The Emergency|Land reforms|0|Indira Gandhi backed V. V. Giri against the official candidate.
m|Crisis of the democratic order|The national Emergency was declared on 25 June:|1974|1975|1977|1980|1|On grounds of internal disturbance.
m|Crisis of the democratic order|The Allahabad High Court verdict of 1975 set aside Indira Gandhi's election in a case filed by:|Raj Narain|Morarji Desai|Charan Singh|J. P. Narayan|0|It found electoral malpractice.
m|Crisis of the democratic order|'Total Revolution' was the call of:|Jayaprakash Narayan|Morarji Desai|Charan Singh|Ram Manohar Lohia|0|It led the movement against the government in 1974–75.
m|Crisis of the democratic order|India's first non-Congress Prime Minister was:|Charan Singh|Morarji Desai|V. P. Singh|Chandra Shekhar|1|He led the Janata government from 1977.
m|Crisis of the democratic order|The commission that inquired into excesses during the Emergency was the:|Shah Commission|Sarkaria Commission|Mandal Commission|Kothari Commission|0|Headed by Justice J. C. Shah.
m|Regional aspirations|The Anandpur Sahib Resolution (1973) is linked with:|Assam|Punjab|Mizoram|Kashmir|1|It called for greater autonomy for the states.
m|Regional aspirations|The Mizo Accord of 1986 was signed with:|Laldenga|A. Z. Phizo|Sheikh Abdullah|Prafulla Mahanta|0|It ended two decades of insurgency.
m|Regional aspirations|The Assam Accord (1985) followed an agitation mainly against:|Hindi imposition|Illegal immigration from Bangladesh|Partition of the state|Land reforms|1|Led by the All Assam Students' Union.
m|Regional aspirations|Sikkim became a state of India in:|1962|1975|1986|1947|1|As the 22nd state.
m|Recent developments in Indian politics|The Mandal Commission's recommendations were implemented in 1990 by:|Rajiv Gandhi|V. P. Singh|Narasimha Rao|Chandra Shekhar|1|27% reservation for OBCs in central government jobs.
m|Recent developments in Indian politics|The Bahujan Samaj Party was founded in 1984 by:|Kanshi Ram|Mayawati|B. R. Ambedkar|Jagjivan Ram|0|It drew support from Dalit communities.
m|Recent developments in Indian politics|The period after 1989 in Indian politics is often marked by:|One-party dominance|Coalition governments|Military rule|A presidential system|1|No single party won a majority until 2014.
ar|Security in the contemporary world|India has refused to sign the NPT.|India regards the treaty as discriminatory.|0|The reason is India's stated ground for not signing.
ar|Politics of planned development|The Planning Commission was a constitutional body.|It was set up by a cabinet resolution in 1950.|3|The assertion is false; the reason is true.
ar|International organisations|The UN Security Council has five permanent members with veto power.|India is one of the permanent members.|2|India is not a permanent member, so the reason is false.
ar|Environment and natural resources|India supports 'common but differentiated responsibilities'.|Developed countries emitted most greenhouse gases historically.|0|This history is why India argues rich countries should do more.
m|Challenges of nation-building|Match each operation with its context. ¶ A. Operation Polo  B. Operation Blue Star  C. Operation Flood  D. Operation Desert Storm ¶ I. Dairy development  II. Gulf War  III. Hyderabad  IV. Golden Temple, Amritsar|A-III, B-IV, C-I, D-II|A-IV, B-III, C-I, D-II|A-III, B-I, C-IV, D-II|A-II, B-IV, C-I, D-III|0|Each operation with its setting.
m|India's external relations|Arrange in chronological order: ¶ A. Tashkent Agreement  B. Panchsheel  C. Simla Agreement  D. India–China war|B, D, A, C|D, B, A, C|B, A, D, C|B, D, C, A|0|1954, 1962, 1966, 1972.
m|Era of one-party dominance|Arrange in chronological order: ¶ A. Mandal recommendations implemented  B. Communist government in Kerala  C. Emergency declared  D. Congress split|B, D, C, A|D, B, C, A|B, C, D, A|B, D, A, C|0|1957, 1969, 1975, 1990.
m|Crisis of the democratic order|Which statements about the Emergency are correct? ¶ A. It was declared in June 1975.  B. It was declared on grounds of internal disturbance.  C. Elections held in 1977 brought the Janata Party to power.  D. It lasted for ten years.|A, B and C only|A and D only|B and D only|A, B, C and D|0|It lasted about 21 months, so D is false.
m|International organisations|Match the organisation with the year it began. ¶ A. United Nations  B. IAEA  C. WTO  D. Antarctic Treaty signed ¶ I. 1995  II. 1945  III. 1959  IV. 1957|A-II, B-IV, C-I, D-III|A-IV, B-II, C-I, D-III|A-II, B-III, C-I, D-IV|A-I, B-IV, C-II, D-III|0|Each with its year.
@soc.a
m|Sociology: emergence, nature and scope|The term 'sociology' was coined by:|Émile Durkheim|Auguste Comte|Herbert Spencer|Max Weber|1|Comte is often called the father of sociology.
m|Sociology: emergence, nature and scope|Comte's law of three stages runs in the order:|Positive, metaphysical, theological|Theological, metaphysical, positive|Metaphysical, theological, positive|Theological, positive, metaphysical|1|Human thought moves from religious to abstract to scientific.
m|Sociology: emergence, nature and scope|Which events most directly led to the rise of sociology in Europe?|The Renaissance and the Crusades|The French Revolution and the Industrial Revolution|The World Wars|The Reformation only|1|Rapid social change made thinkers study society scientifically.
m|Sociology: emergence, nature and scope|The 'sociological imagination' is a concept of:|C. Wright Mills|Talcott Parsons|Karl Marx|Robert Merton|0|Linking personal troubles to public issues (1959).
m|Sociology: emergence, nature and scope|Sociology differs from common sense mainly because it:|Relies on personal opinion|Uses systematic evidence and method|Avoids questions about society|Studies only the past|1|It tests ideas against data.
m|Pioneers of sociology|Herbert Spencer compared society to a living body. This is called the:|Organic analogy|Social contract|Ideal type|Dialectic|0|Each part has a function, like organs.
m|Pioneers of sociology|The phrase 'survival of the fittest' was coined by:|Charles Darwin|Herbert Spencer|Auguste Comte|Thomas Malthus|1|Spencer used it before Darwin adopted it.
m|Pioneers of sociology|Durkheim defined the subject matter of sociology as:|Social facts|Social action|Class struggle|Ideal types|0|Ways of acting and thinking external to and binding on individuals.
m|Pioneers of sociology|In Durkheim's view, simple societies are held together by:|Organic solidarity|Mechanical solidarity|Bureaucracy|Contract|1|Likeness and shared beliefs; complex societies rely on interdependence.
m|Pioneers of sociology|Durkheim's study of suicide (1897) showed that suicide rates depend on:|Individual weakness only|Social integration and regulation|Climate alone|Diet|1|He treated suicide as a social fact.
m|Pioneers of sociology|Max Weber's method of understanding the meanings behind actions is called:|Positivism|Verstehen|Dialectics|Functionalism|1|Interpretive understanding.
m|Pioneers of sociology|Weber's three types of authority are:|Traditional, charismatic and rational-legal|Divine, natural and legal|Political, economic and social|Feudal, capitalist and socialist|0|Bureaucracy is the purest form of rational-legal authority.
m|Pioneers of sociology|The Protestant Ethic and the Spirit of Capitalism was written by:|Karl Marx|Max Weber|Émile Durkheim|Georg Simmel|1|It linked religious ideas to economic life.
m|Pioneers of sociology|For Marx, the economic base of society shapes its:|Climate|Superstructure, such as law, politics and religion|Population|Language only|1|The base is the mode of production.
m|Pioneers of sociology|Marx used the term 'alienation' to describe:|Migration of workers|Workers' estrangement from their labour and its products|Loss of religion|Urban crime|1|Under capitalism workers lose control over their work.
m|Society, groups, status and role|The concept of the primary group was given by:|C. H. Cooley|W. G. Sumner|R. K. Merton|G. H. Mead|0|Intimate, face-to-face groups like family and friends.
m|Society, groups, status and role|In-group and out-group were first described by:|Cooley|Sumner|Merton|Linton|1|'We' feeling versus 'they'.
m|Society, groups, status and role|A group whose standards a person uses to judge themselves, without belonging to it, is a:|Primary group|Reference group|Secondary group|Peer group only|1|A concept developed by Merton.
m|Society, groups, status and role|Which is an ascribed status?|Doctor|Teacher|Daughter|Cricket captain|2|It is given at birth, not earned.
m|Society, groups, status and role|When the demands of two roles clash, it is called:|Role set|Role conflict|Role taking|Status set|1|For example, a working parent on exam day and an office deadline.
m|Society, groups, status and role|The concepts of status and role were systematically set out by:|Ralph Linton|Max Weber|Karl Marx|Auguste Comte|0|In The Study of Man (1936).
m|Society, groups, status and role|The set of roles attached to one status is called a:|Role set|Status set|Role conflict|Reference group|0|Merton's term.
m|Culture, norms and socialisation|E. B. Tylor defined culture as:|Only art and music|A complex whole of knowledge, belief, art, morals, law and custom|Material objects alone|Biological traits|1|His definition dates from 1871.
m|Culture, norms and socialisation|'Cultural lag' means:|Material culture changes faster than non-material culture|Cultures never change|Non-material culture changes faster|All cultures are equal|0|W. F. Ogburn's idea.
m|Culture, norms and socialisation|Judging other cultures by the standards of one's own is:|Cultural relativism|Ethnocentrism|Assimilation|Acculturation|1|Relativism instead judges a culture on its own terms.
m|Culture, norms and socialisation|Folkways and mores were distinguished by:|W. G. Sumner|Émile Durkheim|Max Weber|Auguste Comte|0|Mores carry stronger moral force.
m|Culture, norms and socialisation|The most important agency of primary socialisation is the:|School|Family|Mass media|Workplace|1|Early childhood learning happens at home.
m|Culture, norms and socialisation|Learning the values of a group one hopes to join is:|Anticipatory socialisation|Resocialisation|Primary socialisation|Desocialisation|0|For example, a student preparing to enter a profession.
m|Culture, norms and socialisation|G. H. Mead divided the self into:|Id and ego|'I' and 'me'|Base and superstructure|Status and role|1|The 'me' is the social self.
m|Culture, norms and socialisation|The 'looking-glass self' was proposed by:|C. H. Cooley|G. H. Mead|Sigmund Freud|Durkheim|0|We see ourselves as we imagine others see us.
m|Social processes and crowds|Which is an associative social process?|Competition|Conflict|Cooperation|Rivalry|2|Associative processes bring people together.
m|Social processes and crowds|A truce between warring groups is an example of:|Assimilation|Accommodation|Competition|Isolation|1|Adjusting to reduce conflict without merging.
m|Social processes and crowds|When immigrants gradually adopt the culture of the host society, it is:|Accommodation|Assimilation|Conflict|Competition|1|Differences slowly fade.
m|Social processes and crowds|The Crowd (1895), which spoke of a 'collective mind', was written by:|Gustave Le Bon|Émile Durkheim|Herbert Blumer|Max Weber|0|Individuals in a crowd act differently than alone.
m|Social processes and crowds|An acting crowd with a hostile aim is a:|Audience|Mob|Public|Queue|1|Mobs are emotional and aggressive.
m|Social processes and crowds|Competition differs from conflict in that competition:|Always involves violence|Is usually impersonal and rule-bound|Has no goal|Is always between two people|1|Conflict aims at defeating the opponent directly.
m|Social research|Participant observation was pioneered by Bronisław Malinowski in:|Trobriand Islands|Rampura|Bastar|Nilgiris|0|He lived among the islanders for long periods.
m|Social research|M. N. Srinivas's village study was based on:|Rampura in Karnataka|Bastar in Chhattisgarh|Kerala's coastal villages|Rajasthan's deserts|0|Published as The Remembered Village.
m|Social research|A questionnaire differs from an interview schedule in that a questionnaire is:|Filled in by the investigator|Filled in by the respondents themselves|Never written|Used only for illiterate people|1|A schedule is filled in by the researcher.
m|Social research|In sociology, 'reflexivity' means:|Repeating a study|A researcher's awareness of how their own position shapes research|Random sampling|Using statistics|1|It helps reduce bias.
m|Social research|A survey method is most useful for:|Deep study of one person|Collecting information from a large population|Studying fossils|Observing only animals|1|Usually by sampling.
m|Rural and urban society|Gemeinschaft and Gesellschaft were contrasted by:|Ferdinand Tönnies|Robert Redfield|Louis Wirth|Georg Simmel|0|Close community versus impersonal association.
m|Rural and urban society|The 'folk–urban continuum' was given by:|Robert Redfield|Louis Wirth|Tönnies|Durkheim|0|Societies lie along a scale from folk to urban.
m|Rural and urban society|'Urbanism as a Way of Life' (1938) was written by:|Louis Wirth|Robert Redfield|Max Weber|C. Wright Mills|0|Size, density and diversity shape urban life.
m|Rural and urban society|Which is typical of rural society?|Impersonal relations|Close ties and strong informal control|High division of labour|Anonymity|1|Communities are smaller and more personal.
m|Rural and urban society|The process by which more people come to live in towns and cities is:|Industrialisation|Urbanisation|Modernisation|Globalisation|1|It is measured by the share of urban population.
m|Social problems and population|Malthus argued that population grows:|Arithmetically while food grows geometrically|Geometrically while food grows arithmetically|At the same rate as food|Only in cities|1|An Essay on the Principle of Population (1798).
m|Social problems and population|Famine and disease are what Malthus called:|Preventive checks|Positive checks|Moral restraint|Demographic dividend|1|Preventive checks reduce births, like late marriage.
m|Social problems and population|In India, sex ratio is measured as the number of:|Males per 1000 females|Females per 1000 males|Births per 1000 people|Deaths per 1000 people|1|A falling child sex ratio is a serious concern.
m|Social problems and population|In the last stage of the demographic transition, birth and death rates are both:|High|Low|Rising|Unstable and high|1|Population growth slows.
m|Social problems and population|The Dowry Prohibition Act was passed in:|1947|1956|1961|1985|2|Giving or taking dowry is an offence.
m|Social problems and population|The dependency ratio compares:|Children and elderly with the working-age population|Men and women|Rural and urban people|Literate and illiterate people|0|A high ratio means more dependants per worker.
ar|Pioneers of sociology|Durkheim treated suicide as a social fact.|He showed that suicide rates vary with levels of social integration.|0|Rates linked to social conditions show it is social, not just personal.
ar|Culture, norms and socialisation|Cultural lag occurs in modern societies.|Non-material culture always changes faster than technology.|2|Technology usually changes faster; the reason is false.
ar|Social research|Participant observation gives a deep understanding of a community.|The researcher lives with the people and learns their ways over a long period.|0|The reason explains the depth.
ar|Society, groups, status and role|Caste at birth is an achieved status.|Achieved statuses depend on a person's effort.|3|Caste at birth is ascribed, so the assertion is false; the reason is true.
m|Pioneers of sociology|Match the thinker with the concept. ¶ A. Auguste Comte  B. Émile Durkheim  C. Max Weber  D. Karl Marx ¶ I. Class struggle  II. Verstehen  III. Law of three stages  IV. Social facts|A-III, B-IV, C-II, D-I|A-IV, B-III, C-II, D-I|A-III, B-II, C-IV, D-I|A-I, B-IV, C-II, D-III|0|Each thinker with the key idea.
m|Society, groups, status and role|Match the concept with the sociologist. ¶ A. Primary group  B. In-group  C. Reference group  D. Status and role ¶ I. Merton  II. Linton  III. Cooley  IV. Sumner|A-III, B-IV, C-I, D-II|A-IV, B-III, C-I, D-II|A-III, B-I, C-IV, D-II|A-II, B-IV, C-I, D-III|0|Each concept with who developed it.
m|Pioneers of sociology|Arrange these works in chronological order: ¶ A. The Rules of Sociological Method  B. The Communist Manifesto  C. Suicide  D. The Protestant Ethic and the Spirit of Capitalism|B, A, C, D|A, B, C, D|B, C, A, D|B, A, D, C|0|1848, 1895, 1897, 1905.
m|Social processes and crowds|Which of these are dissociative processes? ¶ A. Competition  B. Conflict  C. Cooperation  D. Assimilation|A and B only|C and D only|A, B and C only|B and D only|0|Cooperation and assimilation bring groups together.
@soc.b
m|Introducing Indian society|'Sanskritisation' was a concept introduced by:|M. N. Srinivas|G. S. Ghurye|A. R. Desai|Louis Dumont|0|Lower castes adopting the customs of higher castes to rise in status.
m|Introducing Indian society|Colonialism in India most changed:|Only religious practices|The economy, administration and social structure|Nothing of lasting importance|Only the language of the elite|1|It reshaped land, trade, law and education.
m|Demographic structure|The 'demographic dividend' refers to the benefit from:|A large share of working-age people|A falling literacy rate|A rising death rate|Fewer young people|0|More workers per dependant can boost growth.
m|Demographic structure|A declining child sex ratio in India is mainly linked to:|Sex-selective abortion and neglect of girls|Natural causes only|Migration|Rising literacy alone|0|Preference for sons is a major factor.
m|Demographic structure|The PCPNDT Act aims to stop:|Child marriage|Sex-selective use of prenatal diagnostic techniques|Dowry|Child labour|1|It regulates prenatal sex determination.
m|Social institutions: caste, tribe and family|A key feature of caste is:|Exogamy|Endogamy|Free choice of occupation|Open mobility|1|Marriage within the caste group.
m|Social institutions: caste, tribe and family|The colonial census of 1901 that tried to rank castes was led by:|Herbert Risley|James Mill|Lord Curzon|Max Müller|0|It made caste more rigid and politicised.
m|Social institutions: caste, tribe and family|The Khasi of Meghalaya follow:|Patrilineal descent|Matrilineal descent|No descent rules|Polyandry only|1|Property passes through the female line.
m|Social institutions: caste, tribe and family|A family in which a married couple lives with the husband's family is:|Matrilocal|Patrilocal|Neolocal|Avunculocal|1|Matrilocal is with the wife's family.
m|Social institutions: caste, tribe and family|Jharkhand and Chhattisgarh were formed as states in:|1956|1987|2000|2014|2|Tribal movements were central to their creation.
m|Social institutions: caste, tribe and family|The 'dominant caste' concept refers to a caste that:|Is highest in the ritual order|Has numerical strength, land and political power locally|Is always Brahmin|Has no land|1|Another concept of M. N. Srinivas.
m|Market as a social institution|The idea of the 'invisible hand' of the market is from:|Karl Marx|Adam Smith|Max Weber|Karl Polanyi|1|Self-interest leads to social good through markets.
m|Market as a social institution|The jajmani system was a traditional exchange between:|Landowning patrons and service castes|Banks and borrowers|Factories and workers|Traders and the state|0|Payment was often in kind.
m|Market as a social institution|Turning something not sold before into a thing to be bought and sold is:|Commodification|Sanskritisation|Secularisation|Urbanisation|0|For example, bottled water or organ trade.
m|Market as a social institution|Weekly tribal markets, such as those studied in Bastar, show that markets are also:|Purely economic|Social and cultural institutions|Unimportant|Controlled only by the state|1|They connect communities and display social hierarchy.
m|Patterns of social inequality and exclusion|Untouchability was abolished by Article:|14|15|17|21|2|Its practice in any form is an offence.
m|Patterns of social inequality and exclusion|The Satyashodhak Samaj was founded in 1873 by:|Jyotiba Phule|B. R. Ambedkar|Periyar|Narayana Guru|0|It fought caste discrimination.
m|Patterns of social inequality and exclusion|Stree Purush Tulana (1882), comparing men and women, was written by:|Pandita Ramabai|Tarabai Shinde|Savitribai Phule|Begum Rokeya|1|A sharp critique of gender inequality.
m|Patterns of social inequality and exclusion|Sultana's Dream, imagining a land where women rule, was written by:|Tarabai Shinde|Begum Rokeya Sakhawat Hossain|Sarojini Naidu|Mahasweta Devi|1|Published in 1905.
m|Patterns of social inequality and exclusion|The social model of disability holds that disability is mainly caused by:|Individual biology alone|Barriers in society|Fate|Lack of effort|1|Society can remove barriers.
m|Patterns of social inequality and exclusion|The Act to prevent atrocities against Scheduled Castes and Tribes was passed in:|1955|1976|1989|2005|2|SC/ST (Prevention of Atrocities) Act.
m|Challenges of cultural diversity|Communalism in the Indian sense refers to:|Community development|Aggressive chauvinism based on religious identity|Cooperative farming|Living in communes|1|It sets religious groups against each other.
m|Challenges of cultural diversity|Articles 29 and 30 of the Constitution protect:|Right to property|Cultural and educational rights of minorities|Freedom of the press|Right to vote|1|Minorities may run their own educational institutions.
m|Challenges of cultural diversity|Indian secularism means the state:|Rejects all religion|Keeps a principled distance and treats all religions equally|Promotes one religion|Bans religious practice|1|It may also intervene to reform practices.
m|Challenges of cultural diversity|The reorganisation of states on linguistic lines is widely seen as having:|Weakened Indian unity|Strengthened Indian unity by respecting diversity|Ended regionalism completely|Abolished federalism|1|Recognising language identities reduced conflict.
m|Structural change|The decline of Indian handicrafts under colonial rule is called:|Industrialisation|Deindustrialisation|Urbanisation|Modernisation|1|Cheap British machine goods hurt local artisans.
m|Structural change|Colonial port cities that grew rapidly included:|Bombay, Calcutta and Madras|Agra, Lucknow and Surat|Delhi, Jaipur and Patna|Mysore, Indore and Gwalior|0|They served trade with Britain.
m|Structural change|Indentured labour in the colonial period was used mainly on:|Plantations such as Assam tea gardens|Software parks|Railway stations only|Village temples|0|Workers were bound by contract for years.
m|Cultural change|The term 'westernisation' in Indian sociology was used by M. N. Srinivas to mean changes resulting from:|Mughal rule|British rule over 150 years|Independence|Globalisation after 1991|1|In technology, institutions, ideology and values.
m|Cultural change|Universalisation and parochialisation describe interaction between little and great traditions. They were given by:|McKim Marriott|M. N. Srinivas|Yogendra Singh|André Béteille|0|From his study of village Kishan Garhi.
m|Cultural change|Secularisation means:|Growth of religious influence|Decline of religious influence over social life|Banning religion|Spread of one religion|1|Rational outlooks gain ground.
m|Cultural change|The social reform movement against sati was led by:|Raja Ram Mohan Roy|Dayananda Saraswati|Swami Vivekananda|Syed Ahmad Khan|0|Sati was banned in 1829.
m|The story of Indian democracy|The 73rd Amendment (1992) gave constitutional status to:|Municipalities|Panchayati Raj institutions|Cooperative societies|Election Commission|1|The 74th did the same for urban local bodies.
m|The story of Indian democracy|Under the 73rd Amendment, the share of panchayat seats reserved for women is at least:|One-fourth|One-third|One-half|One-fifth|1|Several states have since raised it to half.
m|The story of Indian democracy|The body of all adult voters of a village is the:|Gram Panchayat|Gram Sabha|Zila Parishad|Panchayat Samiti|1|It is the base of local democracy.
m|Change and development in rural society|The term 'footloose labour' for migrant workers was coined by:|Jan Breman|M. N. Srinivas|A. R. Desai|Yogendra Singh|0|Workers moving from place to place for seasonal work.
m|Change and development in rural society|The first phase of the Green Revolution mainly benefited:|Small farmers in dry areas|Richer farmers in irrigated regions|Tribal areas|Coastal fishermen|1|Inequality between regions and farmers grew.
m|Change and development in rural society|The abolition of zamindari after independence aimed to remove:|Tenants|Intermediaries between the state and cultivators|Cooperatives|Panchayats|1|Land reform tried to give land to the tiller.
m|Change and development in rural society|Feminisation of agricultural labour happens because:|Women leave farming|Men migrate to cities, leaving women to do more farm work|Machines replace women|Farming ends|1|Women take on more of the work.
m|Change and development in industrial society|Taylorism, or scientific management, aims to:|Raise efficiency by breaking work into small timed tasks|Give workers more freedom|Avoid machines|Increase leisure|0|It increased control over the labour process.
m|Change and development in industrial society|The great Bombay textile strike of 1982 was led by:|Datta Samant|George Fernandes|V. V. Giri|N. M. Joshi|0|It lasted over a year and many mills closed.
m|Change and development in industrial society|Most workers in India are employed in the:|Organised sector|Unorganised or informal sector|Public sector|Foreign companies|1|With little job security or benefits.
m|Globalisation and social change|'McDonaldisation' refers to:|Spread of fast-food principles of efficiency and standardisation to society|Growth of Indian restaurants abroad|Agricultural reform|A trade treaty|0|George Ritzer's term.
m|Globalisation and social change|Glocalisation means:|Rejecting global goods|Mixing the global with the local|Only local production|Isolation from the world|1|For example, global brands with Indian menus.
m|Globalisation and social change|India's economic liberalisation began in:|1980|1985|1991|2000|2|It opened the economy to global markets.
m|Mass media and communications|The first newspaper in India, Hicky's Bengal Gazette, began in:|1780|1857|1920|1947|0|Started by James Augustus Hicky in Calcutta.
m|Mass media and communications|Satellite television spread in India after:|1951|1975|1991|2010|2|Private channels arrived after liberalisation.
m|Mass media and communications|Doordarshan began as:|A private channel|The national public television service|A radio station|A newspaper|1|It started in Delhi in 1959.
m|Social movements|The Chipko movement was a struggle to:|Save forests|Get higher wages|Reform caste|Win independence|0|In the Garhwal Himalayas in the 1970s.
m|Social movements|The Narmada Bachao Andolan is associated with:|Medha Patkar|Sunderlal Bahuguna|Vandana Shiva|Baba Amte only|0|It opposed displacement by large dams.
m|Social movements|The Tebhaga movement (1946–47) was a peasant struggle in:|Bengal|Telangana|Punjab|Kerala|0|Sharecroppers demanded two-thirds of the crop.
m|Social movements|The first trade union in India, the Madras Labour Union, was formed in:|1918|1920|1947|1890|0|AITUC followed in 1920.
m|Social movements|The Dalit Panthers were founded in 1972 in:|Maharashtra|Tamil Nadu|Bihar|Punjab|0|Inspired partly by the Black Panthers.
m|Social movements|Towards Equality (1974) was a landmark report on the status of:|Tribals|Women|Workers|Farmers|1|It revived the women's movement.
m|Social movements|Movements that aim to change the whole social order are:|Reformist|Redemptive|Revolutionary|Conservative|2|Reformist ones seek gradual change.
ar|Cultural change|Sanskritisation can lead to positional change but not structural change.|A caste may rise in the hierarchy while the caste system itself remains.|0|The reason explains the assertion.
ar|Social institutions: caste, tribe and family|Caste is based on endogamy.|Members usually marry outside their caste.|2|They marry within it, so the reason is false.
ar|The story of Indian democracy|The 73rd Amendment strengthened local democracy.|It made regular panchayat elections compulsory.|0|Regular elections are central to that.
ar|Globalisation and social change|Globalisation has affected only the economy.|It has also changed culture, work and identities.|3|The assertion is false; the reason is true.
m|Social movements|Match the movement with its focus. ¶ A. Chipko  B. Narmada Bachao Andolan  C. Tebhaga  D. Dalit Panthers ¶ I. Sharecroppers' share of crop  II. Saving forests  III. Dalit rights  IV. Displacement by dams|A-II, B-IV, C-I, D-III|A-IV, B-II, C-I, D-III|A-II, B-I, C-IV, D-III|A-III, B-IV, C-I, D-II|0|Each movement with its cause.
m|Cultural change|Match the concept with the sociologist. ¶ A. Sanskritisation  B. Universalisation  C. Footloose labour  D. McDonaldisation ¶ I. Jan Breman  II. George Ritzer  III. M. N. Srinivas  IV. McKim Marriott|A-III, B-IV, C-I, D-II|A-IV, B-III, C-I, D-II|A-III, B-I, C-IV, D-II|A-II, B-IV, C-I, D-III|0|Each concept with its author.
m|Social movements|Arrange in chronological order: ¶ A. Dalit Panthers founded  B. Madras Labour Union formed  C. Tebhaga movement  D. Satyashodhak Samaj founded|D, B, C, A|B, D, C, A|D, C, B, A|D, B, A, C|0|1873, 1918, 1946–47, 1972.
m|The story of Indian democracy|Which statements about the 73rd Amendment are correct? ¶ A. It created a three-tier system of panchayats.  B. It reserved at least one-third of seats for women.  C. It applies to municipalities.  D. It requires elections every five years.|A, B and D only|A and C only|B and C only|A, B, C and D|0|Municipalities come under the 74th Amendment.
@eng.a
%pa1|Passage: The Monsoon Notebook|Every June, Ananya's grandfather took out a cloth-bound notebook and wrote down the date the first monsoon rain reached their town. He had done this for forty-one years. The early pages were in fountain-pen ink, now faded to brown; the recent ones were in ballpoint. Ananya used to think it was a strange hobby. Then, for a school project, she typed every date into a spreadsheet and drew a graph. The line was not straight, but it leaned: over four decades the rains had arrived, on average, about nine days later. Her teacher asked whether one notebook could prove anything. Ananya admitted it could not prove a cause on its own, but argued that careful records kept by ordinary people were how science often began. Her grandfather, who did not use computers, looked at the graph for a long time and said only that he was glad someone had finally read the notebook.
p:pa1|Reading comprehension|What did the grandfather record each year?|The amount of rain in June|The date the first monsoon rain arrived|The temperature on the hottest day|The day the rains ended|1|He noted only the arrival date, every June.
p:pa1|Reading comprehension|What did Ananya's graph show?|The rains came earlier every year|The rains arrived about nine days later on average over four decades|Rainfall had stopped|No change at all|1|The line 'leaned' towards later dates.
p:pa1|Reading comprehension|Ananya's reply to her teacher suggests that she:|Believed the notebook proved climate change|Understood the limits of the evidence but valued it|Thought records were useless|Wanted to stop the project|1|She admitted it couldn't prove a cause on its own, yet defended careful records.
p:pa1|Reading comprehension|The word 'leaned', as used in the passage, means:|Collapsed|Tilted in one direction|Stayed flat|Broke apart|1|The graph wasn't straight but tended one way.
p:pa1|Reading comprehension|The grandfather's final remark mainly shows:|Anger at his granddaughter|Quiet pleasure that his long effort was valued|Dislike of computers|Doubt about the graph|1|He was glad someone had 'finally read' it.
p:pa1|Reading comprehension|The tone of the passage is best described as:|Angry|Reflective and warm|Humorous and mocking|Alarmed|1|It treats the family and the data gently and thoughtfully.
m|Prepositions|Choose the correct preposition: She has been living here ___ 2019.|for|since|from|by|1|'Since' marks a point in time; 'for' marks a period.
m|Prepositions|Choose the correct preposition: He is good ___ mathematics.|in|at|on|with|1|'Good at' a subject or skill.
m|Prepositions|Choose the correct preposition: The train arrived ___ the station on time.|to|at|in|on|1|'Arrive at' a place such as a station; 'arrive in' a city or country.
m|Prepositions|Choose the correct preposition: She was angry ___ her brother for breaking the vase.|on|with|at|to|1|'Angry with' a person; 'angry at' or 'about' a situation.
m|Prepositions|Choose the correct preposition: The book is divided ___ ten chapters.|in|into|on|with|1|'Divided into' parts.
m|Prepositions|Choose the correct preposition: He prefers tea ___ coffee.|than|over|to|from|2|'Prefer A to B'.
m|Phrasal verbs|'Put off' the meeting means to:|Cancel it forever|Postpone it|Attend it|Lead it|1|To delay to a later time.
m|Phrasal verbs|'Look after' means:|Search for|Take care of|Admire|Look behind|1|For example, look after a younger sibling.
m|Phrasal verbs|'Give up' smoking means to:|Start|Stop|Reduce slightly|Hide|1|To quit a habit.
m|Phrasal verbs|'Turn down' an offer means to:|Accept it|Reject it|Lower its price|Discuss it|1|To refuse.
m|Phrasal verbs|'Bring up' a topic means to:|Raise it for discussion|End it|Forget it|Hide it|0|'Bring up' can also mean raise a child.
m|Phrasal verbs|'Run out of' means:|Escape from|Have no more left|Run outside|Collect more|1|For example, run out of time.
m|Verb forms|Choose the correct form: By the time we reached, the film ___.|started|has started|had started|starts|2|The past perfect shows the earlier of two past actions.
m|Verb forms|Choose the correct form: If I ___ you, I would apologise.|am|was|were|be|2|The subjunctive 'were' in unreal conditions.
m|Verb forms|Choose the correct form: Neither the teacher nor the students ___ present.|was|were|is|has been|1|With 'neither…nor', the verb agrees with the nearer subject ('students').
m|Verb forms|Choose the correct form: She ___ in Kolkata for five years now.|lives|has been living|lived|is live|1|Present perfect continuous for an action continuing up to now.
m|Verb forms|Choose the correct form: Each of the boys ___ a prize.|get|gets|are getting|have got|1|'Each' takes a singular verb.
m|Sentence transformation|Change to the passive: The chef cooked a delicious meal.|A delicious meal is cooked by the chef.|A delicious meal was cooked by the chef.|A delicious meal has been cooked by the chef.|The chef was cooked a delicious meal.|1|Simple past active becomes 'was + past participle'.
m|Sentence transformation|Choose the correct form beginning 'No sooner…': As soon as he arrived, it began to rain.|No sooner did he arrive than it began to rain.|No sooner he arrived when it began to rain.|No sooner had he arrived than it began to rain.|No sooner had he arrived when it began to rain.|2|'No sooner had … than'.
m|Sentence transformation|Choose the correct form beginning 'Hardly…': He had just sat down when the phone rang.|Hardly had he sat down when the phone rang.|Hardly he had sat down than the phone rang.|Hardly did he sit down than the phone rang.|Hardly had he sat down than the phone rang.|0|'Hardly had … when'.
m|Sentence transformation|Choose the correct reported speech: She said, 'I am tired.'|She said that she is tired.|She said that she was tired.|She said that I was tired.|She told that she was tired.|1|The present shifts back to the past after a past reporting verb.
m|Sentence transformation|Choose the correct form: He is too weak to walk.|He is so weak that he cannot walk.|He is so weak that he can walk.|He is very weak to walk.|He is weak enough to walk.|0|'Too … to' becomes 'so … that … cannot'.
m|Sentence transformation|Choose the correct form beginning 'Unless…': If you do not hurry, you will miss the bus.|Unless you do not hurry, you will miss the bus.|Unless you hurry, you will miss the bus.|Unless you hurry, you will not miss the bus.|Unless you will hurry, you miss the bus.|1|'Unless' already carries the negative.
m|Error spotting|Find the part with an error: (A) One of my friends (B) have gone (C) to Delhi (D) for a conference.|A|B|C|D|1|'One of my friends' takes 'has gone'.
m|Error spotting|Find the part with an error: (A) She bought (B) new furnitures (C) for her (D) flat.|A|B|C|D|1|'Furniture' is uncountable, so it has no plural: 'new furniture'.
m|Error spotting|Find the part with an error: (A) He did not (B) knew the answer (C) to the (D) last question.|A|B|C|D|1|After 'did not' use the base form 'know'.
m|Error spotting|Find the part with an error: (A) She is (B) more cleverer (C) than (D) her sister.|A|B|C|D|1|'Cleverer' alone; no double comparative.
m|Macbeth|In Act I, the witches greet Macbeth as Thane of Glamis, Thane of Cawdor and:|King of England|King hereafter|Lord of Fife|Prince of Cumberland|1|They prophesy that he will be king.
m|Macbeth|The witches tell Banquo that he will:|Become king himself|Father a line of kings|Die in battle|Become Thane of Cawdor|1|He will 'get kings' though not be one.
m|Macbeth|Macbeth becomes Thane of Cawdor because the previous thane:|Died of illness|Was executed as a traitor|Resigned|Went to England|1|Duncan gives the title to Macbeth as reward.
m|Macbeth|Duncan names his son Malcolm as:|Thane of Glamis|Prince of Cumberland|King of Norway|Thane of Ross|1|This makes Malcolm heir, an obstacle to Macbeth's ambition.
m|Macbeth|Duncan is murdered at:|Forres|Inverness, Macbeth's castle|Dunsinane|Scone|1|He is Macbeth's guest that night.
m|Macbeth|After the murder, Lady Macbeth places the daggers with:|Banquo|The sleeping grooms|Macduff|Fleance|1|She smears them with blood to frame the grooms.
m|Macbeth|The body of Duncan is discovered by:|Lennox|Macduff|Banquo|Ross|1|He arrives early to wake the king.
m|Macbeth|After their father's murder, Malcolm and Donalbain flee to:|France and Spain|England and Ireland|Norway and Denmark|Wales and Ireland|1|Their flight makes them look guilty.
m|Macbeth|The comic interlude with the drunken figure at the castle gate is the:|Gravedigger scene|Porter scene|Banquet scene|Sleepwalking scene|1|It follows the knocking at the gate in Act II.
m|Macbeth|Macbeth sees an imaginary dagger before him in:|Act I, Scene 3|Act II, Scene 1|Act III, Scene 4|Act V, Scene 5|1|Just before he goes to kill Duncan.
m|Animal Farm|The animals' rebellion is first inspired by the dream of:|Napoleon|Old Major|Snowball|Boxer|1|He describes a world without humans.
m|Animal Farm|The original name of the farm was:|Foxwood Farm|Manor Farm|Pinchfield Farm|Willingdon Farm|1|The animals rename it Animal Farm.
m|Animal Farm|The pig who uses clever speech to justify Napoleon's actions is:|Snowball|Squealer|Old Major|Minimus|1|He twists facts for the ruling pigs.
m|Animal Farm|Boxer's two mottoes are 'I will work harder' and:|'Four legs good, two legs bad'|'Napoleon is always right'|'All animals are equal'|'Long live the farm'|1|They show his blind loyalty.
m|Animal Farm|Snowball's major project, opposed by Napoleon at first, was the:|School|Windmill|Granary|Hospital|1|Napoleon later claims it as his own plan.
m|Animal Farm|The raven who tells of Sugarcandy Mountain is:|Benjamin|Moses|Clover|Muriel|1|He represents organised religion.
m|Animal Farm|Animal Farm is widely read as an allegory of:|The French Revolution|The Russian Revolution and Stalin's rule|The American Civil War|Indian independence|1|Napoleon is often read as Stalin and Snowball as Trotsky.
m|Animal Farm|At the end of the novel, the animals find that:|Snowball returns|They cannot tell the pigs from the humans|Mr Jones is back|The windmill is destroyed again|1|The pigs have become what they overthrew.
m|The Importance of Being Earnest|Jack Worthing uses the name Ernest when he is:|In the country|In town|At school|Abroad|1|In the country he is Jack.
m|The Importance of Being Earnest|Algernon's imaginary invalid friend, used as an excuse to escape duties, is:|Ernest|Bunbury|Chasuble|Merriman|1|'Bunburying' is his term for it.
m|The Importance of Being Earnest|As a baby, Jack was found in a handbag at:|Paddington Station|Victoria Station|King's Cross|Waterloo|1|In the cloakroom, Brighton line.
m|The Importance of Being Earnest|The governess who mislaid the baby Jack was:|Lady Bracknell|Miss Prism|Cecily|Gwendolen|1|She put the manuscript in the pram and the baby in the bag.
m|The Importance of Being Earnest|At the end, Jack turns out to be:|Cecily's brother|Algernon's elder brother|Lady Bracknell's son|Chasuble's nephew|1|And his real first name is Ernest.
m|The Importance of Being Earnest|The play's subtitle is:|A Serious Play for Trivial People|A Trivial Comedy for Serious People|A Comedy of Errors|A Tale of Two Towns|1|It sums up Wilde's playful satire.
m|Literary devices|'The wind whispered through the trees' uses:|Simile|Personification|Hyperbole|Alliteration|1|Human action given to the wind.
m|Literary devices|'As brave as a lion' is an example of:|Metaphor|Simile|Irony|Oxymoron|1|A comparison using 'as'.
m|Literary devices|A speech in which a character alone on stage reveals thoughts is a:|Monologue to others|Soliloquy|Aside|Chorus|1|Macbeth's dagger speech is one.
m|Literary devices|When the audience knows something a character does not, it is:|Verbal irony|Dramatic irony|Satire|Pathos|1|Duncan praising Macbeth's castle is a well-known example.
ar|Macbeth|Malcolm and Donalbain fall under suspicion after Duncan's murder.|They flee Scotland immediately after the murder.|0|Their flight is what makes others suspect them.
ar|Animal Farm|The pigs keep the Seven Commandments unchanged.|The pigs rewrite the Commandments to suit themselves.|3|The assertion is false; the reason is true.
ar|Literary devices|'Bittersweet' is an oxymoron.|An oxymoron joins two contradictory ideas.|0|Bitter and sweet are opposites.
m|Literary texts|Match the character with the work. ¶ A. Banquo  B. Squealer  C. Lady Bracknell  D. Malcolm ¶ I. Animal Farm  II. The Importance of Being Earnest  III. Macbeth (Duncan's son)  IV. Macbeth (Macbeth's fellow general)|A-IV, B-I, C-II, D-III|A-III, B-I, C-II, D-IV|A-IV, B-II, C-I, D-III|A-I, B-IV, C-II, D-III|0|Banquo and Malcolm are both in Macbeth, in different roles.
m|Macbeth|Arrange these events in Macbeth in order: ¶ A. Duncan is murdered  B. The witches greet Macbeth  C. Macbeth is named Thane of Cawdor  D. Malcolm and Donalbain flee|B, C, A, D|C, B, A, D|B, A, C, D|B, C, D, A|0|Prophecy, its first fulfilment, the murder, then the flight.
@eng.b
%pb1|Passage A (factual): Urban heat islands|Cities are often several degrees warmer than the countryside around them, especially at night. Scientists call this the urban heat island effect. Concrete, asphalt and brick absorb sunlight during the day and release the stored heat slowly after sunset. Tall buildings trap warm air and block breezes, while air conditioners, vehicles and factories add heat of their own. Trees and open water, which cool the air through shade and evaporation, are scarce in crowded neighbourhoods. The effect is not merely uncomfortable. Hotter nights stop the body from recovering after hot days, and heat-related illness rises, particularly among the elderly and outdoor workers. Some cities are fighting back with cool roofs painted white, more street trees, and small parks placed in dense areas. These measures are cheap compared with the cost of illness and lost work, but they work only if they are planned for the neighbourhoods that need them most.
p:pb1|Reading comprehension (factual)|According to the passage, cities stay warmer at night mainly because:|They receive more sunlight|Building materials release stored heat slowly|They have more rain|Winds are stronger in cities|1|Concrete and asphalt give back heat after sunset.
p:pb1|Reading comprehension (factual)|Which is NOT given as a cause of the heat island effect?|Heat from vehicles and air conditioners|Lack of trees|Tall buildings blocking breezes|Higher altitude of cities|3|Altitude is not mentioned.
p:pb1|Reading comprehension (factual)|Hotter nights are dangerous because they:|Increase rainfall|Prevent the body from recovering after hot days|Damage buildings|Reduce electricity use|1|Stated in the passage.
p:pb1|Reading comprehension (factual)|The writer's view of the solutions is that they are:|Expensive and useless|Affordable but must be targeted where most needed|Unnecessary|Only for rich cities|1|The final sentence makes this point.
p:pb1|Reading comprehension (factual)|The word 'scarce' in the passage means:|Plentiful|In short supply|Frightening|Expensive|1|Trees and water are few in crowded areas.
%pb2|Passage B (narrative): The second-hand bicycle|Rohan bought the bicycle from a man who seemed in a hurry to see it go. The paint was chipped, the bell rang twice for every press, and the chain complained on every hill. His friends laughed at it on the first day of school. By the end of the month, Rohan knew every sound it made. A rattle meant the mudguard screw was loose; a squeak meant the chain wanted oil. He learned to fix a puncture in ten minutes behind the canteen. When a classmate's new bicycle broke down before the inter-school race, it was Rohan who knelt beside it with a borrowed spanner. The classmate rode it to third place. Rohan came last on his own bicycle, but he did not mind. On the way home the bell rang twice, as it always did, and for the first time it sounded to him like applause.
p:pb2|Reading comprehension (narrative)|Why did Rohan's friends laugh at first?|He fell off|The bicycle looked old and noisy|He was late|He could not ride|1|Chipped paint, a strange bell and a noisy chain.
p:pb2|Reading comprehension (narrative)|What did Rohan learn over the month?|To race faster|To understand and repair his bicycle|To buy a new bicycle|To avoid school|1|He knew each sound and fixed punctures.
p:pb2|Reading comprehension (narrative)|Rohan's help to his classmate shows that he was:|Jealous|Generous and practical|Careless|Proud of winning|1|He fixed a rival's bicycle before the race.
p:pb2|Reading comprehension (narrative)|The last sentence suggests that Rohan felt:|Embarrassed|Content and quietly proud|Angry|Bored|1|The bell now 'sounded like applause'.
p:pb2|Reading comprehension (narrative)|'The chain complained on every hill' is an example of:|Simile|Personification|Hyperbole|Onomatopoeia|1|The chain is given a human action.
%pb3|Passage C (literary): An evening by the river|The river did not hurry in the evening. It carried the last light the way a tired porter carries a parcel he has carried many times, steadily and without looking at it. Boats tied along the bank knocked gently against each other like old men nodding in agreement. On the far shore a single lamp came on, and then, as if someone had been waiting for permission, a dozen more. A child on the steps threw a pebble and watched the rings widen until they reached nobody in particular. The air smelled of wet stone and woodsmoke. It was the hour when the city forgot its arguments for a while and let the water do the talking.
p:pb3|Reading comprehension (literary)|The river is compared to a tired porter to suggest that it moves:|Fast and noisily|Slowly and steadily, by habit|Angrily|Unpredictably|1|The porter carries his load steadily and without looking.
p:pb3|Reading comprehension (literary)|'Boats … knocked gently against each other like old men nodding in agreement' contains:|A metaphor|A simile|An oxymoron|A pun|1|The comparison uses 'like'.
p:pb3|Reading comprehension (literary)|The lamps coming on 'as if someone had been waiting for permission' creates a sense of:|Danger|Gentle, almost human order|Chaos|Sadness|1|The lamps seem polite and coordinated.
p:pb3|Reading comprehension (literary)|The overall mood of the passage is:|Tense|Calm and reflective|Joyful and noisy|Gloomy and fearful|1|Slow movement, soft sounds and quiet light.
p:pb3|Reading comprehension (literary)|'Let the water do the talking' suggests that:|The river is loud|People fall quiet and the scene speaks for itself|There is a flood|Boatmen are shouting|1|The city 'forgot its arguments'.
m|Vocabulary: synonyms|Choose the synonym of 'BENEVOLENT':|Cruel|Kind|Lazy|Clever|1|Wishing others well.
m|Vocabulary: synonyms|Choose the synonym of 'ABUNDANT':|Scarce|Plentiful|Rare|Small|1|Existing in large amounts.
m|Vocabulary: synonyms|Choose the synonym of 'METICULOUS':|Careless|Very careful about detail|Quick|Noisy|1|Precise and thorough.
m|Vocabulary: synonyms|Choose the synonym of 'CANDID':|Frank|Secretive|Sweet|Shy|0|Honest and open.
m|Vocabulary: synonyms|Choose the synonym of 'EPHEMERAL':|Lasting|Short-lived|Heavy|Ancient|1|Lasting a very short time.
m|Vocabulary: synonyms|Choose the synonym of 'DILIGENT':|Hard-working|Idle|Rude|Clumsy|0|Showing steady effort.
m|Vocabulary: antonyms|Choose the antonym of 'OPTIMISTIC':|Hopeful|Pessimistic|Cheerful|Confident|1|Expecting the worst.
m|Vocabulary: antonyms|Choose the antonym of 'TRANSPARENT':|Clear|Opaque|Visible|Thin|1|Not letting light through.
m|Vocabulary: antonyms|Choose the antonym of 'FRUGAL':|Thrifty|Extravagant|Careful|Simple|1|Spending freely.
m|Vocabulary: antonyms|Choose the antonym of 'HUMBLE':|Modest|Arrogant|Gentle|Poor|1|Showing too much pride.
m|Vocabulary: antonyms|Choose the antonym of 'ACCELERATE':|Hasten|Slow down|Increase|Begin|1|Reduce speed.
m|Vocabulary: antonyms|Choose the antonym of 'ANCIENT':|Old|Modern|Historic|Antique|1|New or recent.
m|Idioms and phrases|'To burn the midnight oil' means:|To waste fuel|To work or study late into the night|To start a fire|To be angry|1|Working past bedtime.
m|Idioms and phrases|'A blessing in disguise' is:|A hidden curse|Something that seems bad but turns out good|A secret gift|A religious ceremony|1|An apparent misfortune with a good result.
m|Idioms and phrases|'To bite the bullet' means:|To attack someone|To face something unpleasant with courage|To eat quickly|To lose an argument|1|To endure a hard situation.
m|Idioms and phrases|'To be on cloud nine' means:|To be confused|To be extremely happy|To be lost|To be asleep|1|Very happy.
m|Idioms and phrases|'To call it a day' means:|To name a day|To stop working on something|To begin early|To make a phone call|1|To finish for now.
m|Idioms and phrases|'Once in a blue moon' means:|Every month|Very rarely|At night|Never|1|Happening seldom.
m|One-word substitution|A person who loves books:|Bibliophile|Philanthropist|Misogynist|Linguist|0|Bibli- book, -phile lover.
m|One-word substitution|A speech made without preparation:|Monologue|Extempore|Eulogy|Epilogue|1|Delivered on the spot.
m|One-word substitution|One who cannot be corrected:|Incorrigible|Invincible|Infallible|Inaudible|0|Beyond reform.
m|One-word substitution|A place where birds are kept:|Apiary|Aviary|Aquarium|Arsenal|1|Apiary is for bees.
m|One-word substitution|The study of ancient things and remains:|Anthropology|Archaeology|Astrology|Entomology|1|Entomology is the study of insects.
m|One-word substitution|A person who is new to an activity:|Veteran|Novice|Expert|Pioneer|1|A beginner.
m|Grammar: fill in the blank|Choose the right word: The committee ___ divided in their opinions.|is|are|was being|has|1|When members act separately, a collective noun takes a plural verb.
m|Grammar: fill in the blank|Choose the right word: I have lived here ___ ten years.|since|for|from|by|1|'For' with a period of time.
m|Grammar: fill in the blank|Choose the right word: She is the ___ of the two sisters.|tallest|taller|most tall|tall|1|Comparative for two.
m|Grammar: fill in the blank|Choose the right word: He insisted ___ paying the bill.|on|for|at|to|0|'Insist on'.
m|Grammar: fill in the blank|Choose the right word: Hardly ___ the bell rung when the students rushed out.|did|had|has|was|1|'Hardly had … when'.
m|Grammar: fill in the blank|Choose the right word: The news ___ surprising.|were|was|are|have been|1|'News' is uncountable and singular.
m|Grammar: error spotting|Find the part with an error: (A) Each of the players (B) were given (C) a medal (D) after the match.|A|B|C|D|1|'Each' takes 'was given'.
m|Grammar: error spotting|Find the part with an error: (A) I am looking forward (B) to meet you (C) at the (D) conference.|A|B|C|D|1|'Looking forward to meeting'.
m|Grammar: error spotting|Find the part with an error: (A) He has been (B) working here (C) since (D) five years.|A|B|C|D|2|Use 'for' with a period of time.
m|Grammar: error spotting|Find the part with an error: (A) The scenery (B) of Kashmir (C) are (D) breathtaking.|A|B|C|D|2|'Scenery' is singular: 'is'.
m|Grammar: error spotting|Find the part with an error: (A) Neither of the answers (B) are (C) correct, (D) said the teacher.|A|B|C|D|1|'Neither of' takes a singular verb: 'is'.
m|Sentence rearrangement|Arrange the sentences into a meaningful paragraph: ¶ A. She packed her bag the night before. ¶ B. The morning of the exam finally arrived. ¶ C. She reached the centre half an hour early. ¶ D. Because of this, she had nothing to search for at dawn.|A, D, B, C|B, A, D, C|A, B, D, C|B, C, A, D|0|Preparation, its result, then the morning and arrival.
m|Sentence rearrangement|Arrange to form a coherent paragraph: ¶ A. As a result, the town began to recycle its waste. ¶ B. The landfill outside the town was almost full. ¶ C. Within a year, the amount sent to the landfill had halved. ¶ D. The council met to find a solution.|B, D, A, C|D, B, A, C|B, A, D, C|B, D, C, A|0|Problem, meeting, action, outcome.
m|Sentence rearrangement|Arrange to form a coherent paragraph: ¶ A. Then he planted the sapling and watered it. ¶ B. First, he chose a sunny spot in the garden. ¶ C. Next, he dug a hole twice as wide as the roots. ¶ D. Finally, he put a small fence around it.|B, C, A, D|C, B, A, D|B, A, C, D|A, B, C, D|0|Signal words: first, next, then, finally.
m|Literary aptitude|'The classroom was a zoo' is an example of:|Simile|Metaphor|Alliteration|Onomatopoeia|1|A direct comparison without 'like' or 'as'.
m|Literary aptitude|'She sells sea shells by the sea shore' shows:|Assonance|Alliteration|Irony|Metonymy|1|Repeated initial consonant sounds.
m|Literary aptitude|'I have told you a million times' is:|Understatement|Hyperbole|Simile|Paradox|1|Deliberate exaggeration.
m|Literary aptitude|Words like 'buzz', 'sizzle' and 'thud' are examples of:|Onomatopoeia|Oxymoron|Personification|Euphemism|0|They imitate sounds.
m|Literary aptitude|'Deafening silence' is an example of:|Simile|Oxymoron|Hyperbole|Personification|1|Two contradictory terms together.
m|Literary aptitude|A poem of fourteen lines with a fixed rhyme scheme is a:|Ballad|Sonnet|Limerick|Haiku|1|Shakespeare and Petrarch wrote famous sonnets.
m|Literary aptitude|A poem mourning someone's death is an:|Ode|Elegy|Epic|Lyric|1|An ode praises; an elegy laments.
m|Literary aptitude|The person who tells a story is the:|Protagonist|Narrator|Antagonist|Author always|1|The narrator may be different from the author.
m|Literary aptitude|A story told in the voice of 'I' uses:|Third-person narration|First-person narration|Second-person narration|Omniscient narration|1|The narrator is a character.
m|Literary aptitude|'The pen is mightier than the sword' uses 'pen' and 'sword' as examples of:|Metonymy|Alliteration|Hyperbole|Simile|0|Each object stands for a related idea: writing and force.
ar|Literary aptitude|'Life is a journey' is a metaphor.|A metaphor compares two things directly without 'like' or 'as'.|0|The reason defines what makes it a metaphor.
ar|Grammar: fill in the blank|'Mathematics is my favourite subject' is grammatically correct.|Subject names ending in -s always take a plural verb.|2|Such subject names take a singular verb, so the reason is false.
ar|Vocabulary: synonyms|'Lucid' and 'clear' are synonyms.|Both mean easy to understand.|0|The shared meaning is what makes them synonyms.
m|Literary aptitude|Match the device with the example. ¶ A. Simile  B. Personification  C. Hyperbole  D. Alliteration ¶ I. The stars danced in the sky  II. Busy bees buzz  III. As cold as ice  IV. I could eat a horse|A-III, B-I, C-IV, D-II|A-I, B-III, C-IV, D-II|A-III, B-IV, C-I, D-II|A-II, B-I, C-IV, D-III|0|Each device with a clear example.
m|One-word substitution|Match the word with its meaning. ¶ A. Philanthropist  B. Pedestrian  C. Omnivore  D. Insomnia ¶ I. Inability to sleep  II. One who walks  III. One who eats plants and animals  IV. One who helps others generously|A-IV, B-II, C-III, D-I|A-II, B-IV, C-III, D-I|A-IV, B-III, C-II, D-I|A-I, B-II, C-III, D-IV|0|Each word with its meaning.
`;
/* ---------- CUET: entrance-pattern MCQ sets, two per subject ---------- */
var CUM={math:{n:'Mathematics',ic:'📐'},eco:{n:'Economics',ic:'📈'},pol:{n:'Political Science',ic:'🏛'},soc:{n:'Sociology',ic:'👥'},eng:{n:'English',ic:'✍️'}};
var CUORD=['eng','math','eco','pol','soc'];
var CUSET={a:{t:'Set A · What you’re studying now',s:'Chapters from this year’s course, asked in CUET style.'},b:{t:'Set B · Full CUET syllabus',s:'The topics the real CUET paper is built on.'}};
var CUAR=['Both A and R are true, and R is the correct explanation of A.','Both A and R are true, but R is not the correct explanation of A.','A is true, but R is false.','A is false, but R is true.'];
var CU={};
(function(){var sub=null,set=null,part='',ix=0;
  CU_SRC.split('\n').forEach(function(l){if(!l.trim())return;
    if(l[0]==='@'){var p=l.slice(1).split('.');sub=p[0];set=p[1];part='';ix=0;if(!CU[sub])CU[sub]={a:[],b:[],pas:{}};return}
    if(l[0]==='^'){part=l.slice(1);return}
    var f=l.split('|');
    if(l[0]==='%'){CU[sub].pas[f[0].slice(1)]={t:f[1],x:f[2]};return}
    var t=f[0],q;
    if(t==='ar')q={ty:'ar',tp:f[1],q:'Assertion (A): '+f[2]+' ¶ Reason (R): '+f[3],o:CUAR.slice(),a:+f[4],k:f[5],fx:1};
    else{q={ty:'m',tp:f[1],q:f[2],o:f.slice(3,7),a:+f[7],k:f[8]};if(t.indexOf('p:')===0)q.ps=t.slice(2)}
    q.id=sub+'.'+set+'.'+(ix++);q.sub=sub;q.set=set;q.pt=part;CU[sub][set].push(q)})})();
function cuQ(id){var p=id.split('.'),L=CU[p[0]]&&CU[p[0]][p[1]];return L?L.filter(function(q){return q.id===id})[0]:null}
function cuD(){if(!S.cu)S.cu={st:{},mk:{},mocks:[],run:null};['st','mk'].forEach(function(k){if(!S.cu[k])S.cu[k]={}});if(!S.cu.mocks)S.cu.mocks=[];return S.cu}
var CUV={sub:null,pr:null,rv:null,conf:0,qi:null};
function cuShuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function cuPerm(q){return q.fx?[0,1,2,3]:cuShuf([0,1,2,3])}
function cuTxt(t){return esc(t).split(' ¶ ').join('<br>')}
function cuPlain(t){return String(t).split(' ¶ ').join('\n')}
function cuPasBox(q,open){if(!q.ps)return'';var P=CU[q.sub].pas[q.ps];return'<details class="cupas"'+(open?' open':'')+'><summary>'+esc(P.t)+'</summary><p>'+esc(P.x)+'</p></details>'}
/* stats */
function cuMark(q,ok){var D=cuD(),r=D.st[q.id]||[0,0,0];if(ok){r[0]++;r[2]=1}else{r[1]++;r[2]=0}D.st[q.id]=r;
  if(ok){if(D.mk[q.id])delete D.mk[q.id];mkFix('cu:'+q.id)}else D.mk[q.id]=Date.now()}
function cuMk(q,pick,src){var P=q.ps?CU[q.sub].pas[q.ps]:null;
  mkAdd({src:src,topic:CUM[q.sub].n+' · '+q.tp,concept:CUSET[q.set].t.split(' · ')[1],q:(P?P.t+'\n'+P.x+'\n\n':'')+cuPlain(q.q),o:q.o,a:q.a,pick:pick,h:q.k,note:'CUET '+CUM[q.sub].n,ref:'cu:'+q.id})}
function cuSetStat(sub,set){var L=CU[sub][set],D=cuD(),seen=0,ok=0,tries=0,wrong=0;
  L.forEach(function(q){var r=D.st[q.id];if(r){seen++;ok+=r[0];tries+=r[0]+r[1]}if(D.mk[q.id])wrong++});
  var best=null;D.mocks.forEach(function(m){if(m.sub===sub&&m.set===set&&(best==null||m.sc>best))best=m.sc});
  return{n:L.length,seen:seen,acc:tries?Math.round(ok/tries*100):null,wrong:wrong,best:best}}
function cuTopics(sub,set){var T={},D=cuD();CU[sub][set].forEach(function(q){var t=T[q.tp]||(T[q.tp]={n:0,ok:0,tr:0});t.n++;var r=D.st[q.id];if(r){t.ok+=r[0];t.tr+=r[0]+r[1]}});return T}
/* views */
function cuView(){if(CUV.info)return cuInfo();if(CUV.rv)return cuReview();var R=cuD().run;if(R&&R.sub===CUV.sub&&R.mode==='mock'&&!R.done&&CUV.open)return cuMock();if(CUV.pr)return cuPrac();if(CUV.sub)return cuSub(CUV.sub);cuHome()}
function cuHome(){var D=cuD(),R=D.run;
  var h='<h1>CUET practice</h1><p class="sub">Each subject has two MCQ sets. Set A is on the chapters being studied now; Set B is on the full CUET syllabus. Practise topic by topic with explanations, or sit a full mock in the real exam pattern.</p>';
  h+='<div class="card cupat"><b>How the real paper works</b><div class="cupg"><div><big>50</big><small>questions, all compulsory</small></div><div><big>60</big><small>minutes per paper</small></div><div><big>+5</big><small>for a right answer</small></div><div><big>−1</big><small>for a wrong one, 0 if left</small></div></div><p class="sub" style="margin:8px 0 0">Mathematics: 15 common questions (Section A) and 35 core-maths questions (Section B1). English: reading passages, vocabulary, grammar and literary aptitude.</p></div>';
  if(R&&R.mode==='mock'&&!R.done){var left=Math.max(0,R.t0+R.tm*1000-Date.now());h+='<div class="card hi"><b>Mock in progress: '+esc(CUM[R.sub].n)+', Set '+R.set.toUpperCase()+'</b><p class="sub" style="margin:4px 0 0">'+cuAns(R)+' of '+R.q.length+' answered · '+cuClock(left)+' left</p><button class="btn" onclick="cuGoMock(\''+R.sub+'\')">Continue the mock</button></div>'}
  h+=cuInfoCard();
  if(D.ot){h+='<div class="card hi"><b>Past paper timer running: '+esc(CUM[D.ot.sub].n)+' '+D.ot.yr+'</b><p class="sub" style="margin:4px 0 0">'+cuClock(Math.max(0,D.ot.t0+3600000-Date.now()))+' left</p><button class="btn" onclick="CUV.sub=\''+D.ot.sub+'\';render()">Open it</button></div>'}
  CUORD.forEach(function(sid){var M=CUM[sid];h+='<button class="card cusubj" onclick="CUV.sub=\''+sid+'\';CUV.pr=null;render();window.scrollTo(0,0)"><span class="cuic">'+M.ic+'</span><span class="tt"><b>'+esc(M.n)+'</b>';
    ['a','b'].forEach(function(st){var x=cuSetStat(sid,st);h+='<small>Set '+st.toUpperCase()+': '+x.seen+'/'+x.n+' tried'+(x.acc!=null?' · '+x.acc+'% right':'')+(x.best!=null?' · best mock '+x.best+'/250':'')+'</small>'});
    h+='</span><span class="pill">'+(CU[sid].a.length+CU[sid].b.length)+' Qs</span></button>'});
  var hist=D.mocks.slice(-5).reverse();
  if(hist.length){h+='<div class="card"><b>Recent mocks</b>';hist.forEach(function(m){h+='<div class="curow"><span>'+esc(CUM[m.sub].n)+' · Set '+m.set.toUpperCase()+'<small>'+new Date(m.at).toLocaleDateString(undefined,{day:'numeric',month:'short'})+' · '+m.ok+' right, '+m.bad+' wrong, '+m.sk+' left</small></span><b>'+m.sc+'/250</b></div>'});h+='</div>'}
  app.innerHTML=h}
function cuSub(sid){var M=CUM[sid],D=cuD();
  var h='<p class="back"><button class="link" onclick="CUV.sub=null;render()">← CUET practice</button></p><h1>'+M.ic+' '+esc(M.n)+'</h1>';
  ['a','b'].forEach(function(st){var x=cuSetStat(sid,st),T=cuTopics(sid,st),tn=Object.keys(T);
    h+='<div class="card'+(st==='b'?' hi':'')+'"><div class="sjhd"><b>'+esc(CUSET[st].t)+'</b><span class="pill">'+x.n+' questions</span></div><p class="sub" style="margin:4px 0 8px">'+esc(CUSET[st].s)+(sid==='math'&&st==='b'?' Section A has the 15 questions common to Mathematics and Applied Mathematics; B1 is core Mathematics.':'')+'</p>';
    h+='<div class="cust"><span><b>'+x.seen+'</b>/'+x.n+'<small>tried</small></span><span><b>'+(x.acc!=null?x.acc+'%':'–')+'</b><small>accuracy</small></span><span><b>'+(x.best!=null?x.best:'–')+'</b><small>best mock /250</small></span></div>';
    h+='<div class="row2"><button class="btn" onclick="cuStart(\''+sid+'\',\''+st+'\',\'mix\')">10 mixed questions</button><button class="btn" onclick="cuStartMock(\''+sid+'\',\''+st+'\')">Full mock · 50 Qs · 60 min</button></div>';
    h+='<div class="row2"><button class="btn alt" onclick="cuStart(\''+sid+'\',\''+st+'\',\'new\')">Ones I haven’t tried</button><button class="btn alt" onclick="cuStart(\''+sid+'\',\''+st+'\',\'wrong\')"'+(x.wrong?'':' disabled')+'>Retry my wrong ones'+(x.wrong?' ('+x.wrong+')':'')+'</button></div>';
    h+='<details class="cutp"><summary>Practise by topic ('+tn.length+')</summary>';
    tn.sort(function(p,q){var a=T[p],b=T[q],ra=a.tr?a.ok/a.tr:2,rb=b.tr?b.ok/b.tr:2;return ra-rb});
    tn.forEach(function(t,i){var v=T[t],pc=v.tr?Math.round(v.ok/v.tr*100):null;h+='<button class="trow" onclick="cuStart(\''+sid+'\',\''+st+'\',\'tp\','+JSON.stringify(t).replace(/"/g,'&quot;')+')"><span class="tt"><b>'+esc(t)+'</b><small>'+v.n+' questions'+(pc!=null?' · '+pc+'% right so far':' · not tried yet')+'</small></span><span class="pill'+(pc==null?'':pc>=75?' ok':pc<50?' bad':' mid')+'">'+(pc==null?'Start':pc+'%')+'</span></button>'});
    h+='</details></div>'});
  h+=cuPPCard(sid);
  var ms=D.mocks.filter(function(m){return m.sub===sid});
  if(ms.length){h+='<div class="card"><b>Mock history</b>';ms.slice().reverse().forEach(function(m){var i=D.mocks.indexOf(m);h+='<button class="trow" onclick="cuOpenRv('+i+')"><span class="tt"><b>Set '+m.set.toUpperCase()+' · '+m.sc+'/250</b><small>'+new Date(m.at).toLocaleDateString(undefined,{day:'numeric',month:'short'})+' · '+m.ok+' right, '+m.bad+' wrong, '+m.sk+' left · '+Math.round(m.used/60)+' min</small></span><span class="pill">Review</span></button>'});h+='</div>'}
  app.innerHTML=h;cuOTTick()}
/* practice */
function cuStart(sid,st,how,tp){var L=CU[sid][st],D=cuD(),pool;
  if(how==='tp')pool=L.filter(function(q){return q.tp===tp});
  else if(how==='wrong')pool=L.filter(function(q){return D.mk[q.id]});
  else if(how==='new'){pool=L.filter(function(q){return!D.st[q.id]});if(!pool.length){showToast('You’ve tried every question in this set. Here is a mixed round instead.');pool=L}}
  else pool=L;
  pool=cuShuf(pool);if(how!=='tp')pool=pool.slice(0,10);
  if(!pool.length){showToast('Nothing to practise there yet.');return}
  CUV.sub=sid;CUV.pr={sub:sid,set:st,lab:how==='tp'?tp:how==='wrong'?'Retrying wrong ones':how==='new'?'Not tried yet':'Mixed questions',q:pool.map(function(q){return q.id}),pm:pool.map(cuPerm),i:0,pick:null,ok:0,wr:[]};render();window.scrollTo(0,0)}
function cuPrac(){var Z=CUV.pr;var h='<p class="back"><button class="link" onclick="CUV.pr=null;render()">← '+esc(CUM[Z.sub].n)+'</button></p>';
  if(Z.i>=Z.q.length){var sc=Z.ok*5-(Z.q.length-Z.ok);h+='<h1>Round done</h1><div class="card hi"><b>'+Z.ok+' / '+Z.q.length+' right</b><p class="sub" style="margin:4px 0 0">In CUET marking that is '+sc+' out of '+Z.q.length*5+'.'+(Z.wr.length?' Topics to look at again: '+esc(Z.wr.filter(function(v,i,a){return a.indexOf(v)===i}).join(', '))+'. Missed questions are saved in Mistakes.':' Nothing missed.')+'</p><div class="row2"><button class="btn" onclick="cuStart(\''+Z.sub+'\',\''+Z.set+'\',\'mix\')">Ten more</button><button class="btn alt" onclick="CUV.pr=null;render()">Done</button></div></div>';app.innerHTML=h;return}
  var q=cuQ(Z.q[Z.i]),pm=Z.pm[Z.i],done=Z.pick!=null,ok=done&&pm[Z.pick]===q.a;
  h+='<div class="meta"><span>Set '+Z.set.toUpperCase()+' · '+esc(q.tp)+'</span><span>'+(Z.i+1)+' / '+Z.q.length+'</span></div><div class="bar"><i style="width:'+(Z.i/Z.q.length*100)+'%"></i></div>';
  h+=cuPasBox(q,1)+'<div class="card"><div class="q cuq">'+cuTxt(q.q)+'</div>';
  pm.forEach(function(oi,i){var cl='';if(done){if(oi===q.a)cl=' ok';else if(i===Z.pick)cl=' bad'}h+='<button class="opt'+cl+'" onclick="cuAnsP('+i+')"'+(done?' disabled':'')+'>('+(i+1)+') '+esc(q.o[oi])+'</button>'});
  if(done){var ci=pm.indexOf(q.a);h+='<div class="fb '+(ok?'ok':'bad')+'"><b>'+(ok?'Correct. +5':'Not quite. −1. The answer is ('+(ci+1)+').')+'</b> '+esc(q.k)+'</div><button class="btn" onclick="CUV.pr.i++;CUV.pr.pick=null;render();window.scrollTo(0,0)">'+(Z.i+1<Z.q.length?'Next question':'See my score')+'</button><button class="btn alt chatb" onclick="cuDoubt()">'+CHAT_ICON+'Ask a doubt in Claude chat</button>'}
  app.innerHTML=h+'</div>'}
function cuAnsP(i){var Z=CUV.pr;if(Z.pick!=null)return;var q=cuQ(Z.q[Z.i]),ok=Z.pm[Z.i][i]===q.a;Z.pick=i;
  cuMark(q,ok);if(ok)Z.ok++;else{Z.wr.push(q.tp);cuMk(q,Z.pm[Z.i][i],'CUET practice')}
  S.ev.push({k:'q',topic:'CUET '+CUM[q.sub].n+' · '+q.tp,ok:ok,habit:'',type:'cuet mcq',ts:Date.now()});save();render()}
function cuDoubt(){var Z=CUV.pr,q=cuQ(Z.q[Z.i]),pm=Z.pm[Z.i],P=q.ps?CU[q.sub].pas[q.ps]:null;
  openChat('I’m preparing for CUET '+CUM[q.sub].n+'. Please help me understand this question: explain the idea, then check my reasoning.\n\n'+(P?P.t+'\n'+P.x+'\n\n':'')+'Question: '+cuPlain(q.q)+'\nOptions: '+pm.map(function(oi,i){return'('+(i+1)+') '+q.o[oi]}).join(' | ')+'\nI chose ('+(Z.pick+1)+'); the answer is ('+(pm.indexOf(q.a)+1)+') '+q.o[q.a]+'.\nApp’s explanation: '+q.k+'\n\nMy doubt: ')}
/* mock */
function cuBuild(sid,st){var L=CU[sid][st],out=[];
  if(sid==='math'&&st==='b'){var A=cuShuf(L.filter(function(q){return q.pt==='A1'})).slice(0,15),B=cuShuf(L.filter(function(q){return q.pt==='B1'})).slice(0,35);return A.concat(B)}
  if(sid==='eng'){var ps={};L.forEach(function(q){if(q.ps)(ps[q.ps]=ps[q.ps]||[]).push(q)});Object.keys(ps).forEach(function(k){out=out.concat(ps[k])});
    var rest=cuShuf(L.filter(function(q){return!q.ps})).slice(0,50-out.length);return out.concat(rest)}
  return cuShuf(L).slice(0,50)}
function cuStartMock(sid,st){var D=cuD();if(D.run&&D.run.mode==='mock'&&!D.run.done&&CUV.conf!==1){cuSub(sid);
    app.insertAdjacentHTML('afterbegin','<div class="card danger"><b>A mock is already running</b><p class="sub" style="margin:4px 0 0">'+esc(CUM[D.run.sub].n)+', Set '+D.run.set.toUpperCase()+'. Starting a new one will discard it.</p><div class="row2"><button class="btn" onclick="cuGoMock(\''+D.run.sub+'\')">Continue that one</button><button class="btn alt" onclick="CUV.conf=1;cuStartMock(\''+sid+'\',\''+st+'\')">Discard and start new</button></div></div>');window.scrollTo(0,0);return}
  CUV.conf=0;var Q=cuBuild(sid,st);D.run={mode:'mock',sub:sid,set:st,q:Q.map(function(q){return q.id}),pm:Q.map(cuPerm),an:{},fl:{},vi:{0:1},i:0,t0:Date.now(),tm:3600,done:0};save();cuGoMock(sid)}
function cuGoMock(sid){CUV.sub=sid;CUV.pr=null;CUV.open=1;CUV.sure=0;view='cu';render();window.scrollTo(0,0)}
function cuAns(R){return Object.keys(R.an).length}
function cuClock(ms){var s=Math.ceil(ms/1000),m=Math.floor(s/60);return m+':'+('0'+(s%60)).slice(-2)}
var CUTI=null;function cuStop(){if(CUTI){clearInterval(CUTI);CUTI=null}}
function cuMock(){var R=cuD().run,q=cuQ(R.q[R.i]),pm=R.pm[R.i],sel=R.an[R.i],left=R.t0+R.tm*1000-Date.now();
  if(left<=0)return cuSubmit(1);
  var mathB=R.sub==='math'&&R.set==='b',secLab=mathB?(R.i<15?'Section A · common':'Section B1 · Mathematics'):'';
  var h='<div class="cumh"><div><b>'+esc(CUM[R.sub].n)+' · Set '+R.set.toUpperCase()+'</b><small>'+cuAns(R)+' answered · '+Object.keys(R.fl).filter(function(k){return R.fl[k]}).length+' marked</small></div><div class="cuclk'+(left<300000?' low':'')+'" id="cuClk">'+cuClock(left)+'</div></div>';
  h+='<div class="meta"><span>Question '+(R.i+1)+' of '+R.q.length+(secLab?' · '+secLab:'')+'</span><span>+5 / −1</span></div>';
  h+=cuPasBox(q,1)+'<div class="card"><div class="q cuq">'+cuTxt(q.q)+'</div>';
  pm.forEach(function(oi,i){h+='<button class="opt'+(sel===i?' cusel':'')+'" aria-pressed="'+(sel===i)+'" onclick="cuPickM('+i+')">('+(i+1)+') '+esc(q.o[oi])+'</button>'});
  h+='<div class="row2"><button class="btn alt" onclick="cuClear()"'+(sel==null?' disabled':'')+'>Clear response</button><button class="btn alt" onclick="cuFlag()">'+(R.fl[R.i]?'Unmark':'Mark for review')+'</button></div>';
  h+='<div class="row2"><button class="btn alt" onclick="cuGo('+(R.i-1)+')"'+(R.i?'':' disabled')+'>← Previous</button><button class="btn" onclick="cuGo('+(R.i+1)+')"'+(R.i+1<R.q.length?'':' disabled')+'>Save and next →</button></div></div>';
  h+='<div class="card"><div class="sjhd"><b>Question palette</b><button class="link" onclick="CUV.open=0;CUV.sub=\''+R.sub+'\';render()">Leave for now</button></div><div class="cupal">';
  R.q.forEach(function(id,i){var c=R.an[i]!=null?(R.fl[i]?'af':'an'):R.fl[i]?'fl':R.vi[i]?'nv':'';h+=(mathB&&i===15?'<span class="cupsep">B1</span>':'')+'<button class="'+c+(i===R.i?' cur':'')+'" aria-label="Question '+(i+1)+'" onclick="cuGo('+i+')">'+(i+1)+'</button>'});
  h+='</div><div class="culeg"><span class="an">Answered</span><span class="nv">Seen, not answered</span><span class="fl">Marked</span><span class="af">Answered and marked</span></div>';
  if(CUV.sure){var un=R.q.length-cuAns(R);h+='<div class="fb bad"><b>Submit now?</b> '+(un?un+' question'+(un>1?'s are':' is')+' unanswered and will score 0. ':'')+'You can’t change answers after submitting.</div><div class="row2"><button class="btn" onclick="cuSubmit()">Yes, submit</button><button class="btn alt" onclick="CUV.sure=0;render()">Keep working</button></div>'}
  else h+='<button class="btn" onclick="CUV.sure=1;render()">Submit the paper</button>';
  app.innerHTML=h+'</div>';
  cuStop();CUTI=setInterval(function(){var e=document.getElementById('cuClk');if(!e||view!=='cu'){cuStop();return}var l=R.t0+R.tm*1000-Date.now();if(l<=0){cuStop();cuSubmit(1);return}e.textContent=cuClock(l);e.classList.toggle('low',l<300000)},1000)}
function cuPickM(i){var R=cuD().run;R.an[R.i]=i;save();render()}
function cuClear(){var R=cuD().run;delete R.an[R.i];save();render()}
function cuFlag(){var R=cuD().run;R.fl[R.i]=!R.fl[R.i];save();render()}
function cuGo(i){var R=cuD().run;if(i<0||i>=R.q.length)return;R.i=i;R.vi[i]=1;CUV.sure=0;save();render();window.scrollTo(0,0)}
function cuSubmit(auto){cuStop();var D=cuD(),R=D.run;if(!R||R.done)return;var ok=0,bad=0,sk=0,T={};
  R.q.forEach(function(id,i){var q=cuQ(id),a=R.an[i],t=T[q.tp]||(T[q.tp]=[0,0,0]);
    if(a==null){sk++;t[2]++;return}var good=R.pm[i][a]===q.a;cuMark(q,good);if(good){ok++;t[0]++}else{bad++;t[1]++;cuMk(q,R.pm[i][a],'CUET mock')}
    S.ev.push({k:'q',topic:'CUET '+CUM[q.sub].n+' · '+q.tp,ok:good,habit:'',type:'cuet mock',ts:Date.now()})});
  var m={sub:R.sub,set:R.set,at:Date.now(),ok:ok,bad:bad,sk:sk,sc:ok*5-bad,used:Math.min(R.tm,Math.round((Date.now()-R.t0)/1000)),q:R.q,pm:R.pm,an:R.an,tp:T};
  D.mocks.push(m);if(D.mocks.length>30)D.mocks=D.mocks.slice(-30);R.done=1;D.run=null;CUV.open=0;CUV.sure=0;save();
  if(auto)showToast('Time is up. Your paper was submitted.');cuOpenRv(D.mocks.length-1)}
function cuOpenRv(i){CUV.rv={i:i,f:'all'};CUV.pr=null;view='cu';render();window.scrollTo(0,0)}
function cuReview(){var D=cuD(),m=D.mocks[CUV.rv.i];if(!m){CUV.rv=null;return cuView()}CUV.sub=m.sub;var f=CUV.rv.f;
  var acc=m.ok+m.bad?Math.round(m.ok/(m.ok+m.bad)*100):0;
  var h='<p class="back"><button class="link" onclick="CUV.rv=null;render()">← '+esc(CUM[m.sub].n)+'</button></p><h1>Mock result</h1><p class="sub">'+esc(CUM[m.sub].n)+' · '+esc(CUSET[m.set].t)+' · '+new Date(m.at).toLocaleString(undefined,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})+'</p>';
  h+='<div class="card hi"><div class="cuscore"><big>'+m.sc+'</big><span>/ 250</span></div><div class="cust"><span><b>'+m.ok+'</b><small>right (+'+m.ok*5+')</small></span><span><b>'+m.bad+'</b><small>wrong (−'+m.bad+')</small></span><span><b>'+m.sk+'</b><small>left blank</small></span><span><b>'+acc+'%</b><small>accuracy of attempts</small></span></div><p class="sub" style="margin:8px 0 0">Time used: '+Math.floor(m.used/60)+' min '+(m.used%60)+' s of 60 min.'+(m.bad>m.ok/2?' Wrong answers cost you '+m.bad+' marks; when you can rule out only one option, leaving it blank is often safer.':'')+'</p></div>';
  var tk=Object.keys(m.tp).sort(function(a,b){var x=m.tp[a],y=m.tp[b];return(x[0]/(x[0]+x[1]+x[2]))-(y[0]/(y[0]+y[1]+y[2]))});
  h+='<div class="card"><b>By topic</b>';tk.forEach(function(t){var v=m.tp[t],n=v[0]+v[1]+v[2];h+='<div class="curow"><span>'+esc(t)+'<small>'+v[0]+' right · '+v[1]+' wrong · '+v[2]+' blank</small></span><span class="cubar"><i style="width:'+Math.round(v[0]/n*100)+'%"></i></span></div>'});h+='</div>';
  h+='<div class="seg">'+[['all','All'],['bad','Wrong'],['sk','Blank'],['ok','Right']].map(function(x){return'<button aria-selected="'+(f===x[0])+'" onclick="CUV.rv.f=\''+x[0]+'\';render()">'+x[1]+'</button>'}).join('')+'</div>';
  var shown=0;m.q.forEach(function(id,i){var q=cuQ(id);if(!q)return;var a=m.an[i],pm=m.pm[i],st=a==null?'sk':pm[a]===q.a?'ok':'bad';if(f!=='all'&&f!==st)return;shown++;
    h+='<div class="card curv '+st+'"><div class="meta"><span>Q'+(i+1)+' · '+esc(q.tp)+'</span><span>'+(st==='ok'?'+5':st==='bad'?'−1':'0')+'</span></div>'+cuPasBox(q,0)+'<div class="cuq">'+cuTxt(q.q)+'</div>';
    pm.forEach(function(oi,j){var cl=oi===q.a?' ok':j===a?' bad':'';h+='<div class="cuo'+cl+'">('+(j+1)+') '+esc(q.o[oi])+(j===a?' <small>your answer</small>':'')+'</div>'});
    h+='<p class="cuk">'+esc(q.k)+'</p></div>'});
  if(!shown)h+='<p class="sub">No questions in this group.</p>';
  h+='<div class="row2"><button class="btn" onclick="CUV.rv=null;cuStartMock(\''+m.sub+'\',\''+m.set+'\')">New mock, same set</button><button class="btn alt" onclick="CUV.rv=null;cuStart(\''+m.sub+'\',\''+m.set+'\',\'wrong\')">Practise my wrong ones</button></div>';
  app.innerHTML=h}
/* past papers: links to third-party copies, an offline timer and a score log */
var CUPP={
 eng:[[2026,'https://docs.aglasem.com/view/6b225d90-c701-11f1-8661-0aa932765c8b','AglaSem'],[2025,'https://docs.aglasem.com/view/89b950e0-1277-11f1-87b1-0a5e36bc6706','AglaSem'],[2024,'https://docs.aglasem.com/view/4dcee946-1277-11f1-b66c-0a5e36bc6706','AglaSem']],
 math:[[2026,'https://docs.aglasem.com/view/7add6874-c701-11f1-ad78-0aa932765c8b','AglaSem'],[2025,'https://docs.aglasem.com/view/b73519f0-1277-11f1-bc7b-0a5e36bc6706','AglaSem'],[2024,'https://docs.aglasem.com/view/41df2c86-1277-11f1-80ef-0a5e36bc6706','AglaSem']],
 eco:[[2026,'https://docs.aglasem.com/view/69c76abc-c701-11f1-8e26-0aa932765c8b','AglaSem'],[2025,'https://docs.aglasem.com/view/8617c232-1277-11f1-85a2-0a5e36bc6706','AglaSem'],[2024,'https://docs.aglasem.com/view/4634cae8-1277-11f1-bfb6-0a5e36bc6706','AglaSem']],
 pol:[[2026,'https://docs.aglasem.com/view/7f606cd4-c701-11f1-a888-0aa932765c8b','AglaSem'],[2025,'https://docs.aglasem.com/view/c1f7354e-1277-11f1-b675-0a5e36bc6706','AglaSem'],[2024,'https://docs.aglasem.com/view/45e9070c-1277-11f1-904a-0a5e36bc6706','AglaSem']],
 soc:[[2026,'https://docs.aglasem.com/view/83fdb044-c701-11f1-be0c-0aa932765c8b','AglaSem'],[2025,'https://docs.aglasem.com/view/cb7f3418-1277-11f1-84c4-0a5e36bc6706','AglaSem'],[2024,'https://prepp.in/paper/cuet-ug-sociology-question-paper-18-may-2024-6797514db7469985c6b5d6a4','Prepp (18 May)']]};
var CUPPK={eng:[['2025 with answer key (Careers360)','https://university.careers360.com/download/sample-papers/cuet-ug-2025-english-question-paper-answer-key']],
 math:[['2025 papers by shift, with solutions (Selfstudys)','https://www.selfstudys.com/books/cuet-previous-year-paper/english/year-wise/2025/57145']],
 eco:[['2025 papers by shift, with solutions (Selfstudys)','https://www.selfstudys.com/books/cuet-previous-year-paper/english/year-wise/2025/57145'],['2022–2025 papers (Oswal)','https://oswalpublishers.com/cuet/cuet-ug-humanities-previous-year-question-papers/']],
 pol:[['2022–2025 papers (Oswal)','https://oswalpublishers.com/cuet/cuet-ug-humanities-previous-year-question-papers/']],
 soc:[['2022–2025 papers (Oswal)','https://oswalpublishers.com/cuet/cuet-ug-humanities-previous-year-question-papers/']]};
function cuPPCard(sid){var D=cuD(),L=CUPP[sid];if(!L)return'';if(!D.pps)D.pps={};var ot=D.ot&&D.ot.sub===sid?D.ot:null;
  var h='<div class="card cupp"><div class="sjhd"><b>📄 Past papers</b><span class="pill">'+L.length+' years</span></div><p class="sub" style="margin:4px 0 8px">Real CUET papers as shared by other sites. Print one or open it on a second screen, start the 60-minute timer, and answer on paper. Then mark it from the answer key and record the score here.</p>';
  if(ot){var left=ot.t0+3600000-Date.now();h+='<div class="cuot"><div><b>Sitting the '+ot.yr+' paper</b><small>Answer on paper. The timer keeps going if you leave this page.</small></div><div class="cuclk'+(left<300000?' low':'')+'" id="cuOT">'+(left>0?cuClock(left):'Time up')+'</div></div><button class="btn alt" onclick="cuOTStop()">Stop the timer</button>'}
  L.forEach(function(p){var k=sid+p[0],r=D.pps[k],ip='cuS_'+k;
    h+='<div class="cuppr"><div class="cupph"><b>'+p[0]+' paper</b><a class="btn alt sm2" style="text-decoration:none" href="'+p[1]+'" target="_blank" rel="noopener">Open ('+esc(p[2])+')</a></div>'+(r?'<p class="sub" style="margin:4px 0 0">Recorded: <b>'+r.sc+'/250</b> on '+new Date(r.at).toLocaleDateString(undefined,{day:'numeric',month:'short'})+(r.n>1?' · best of '+r.n+' tries':'')+'</p>':'')+
    '<div class="cuppa">'+(ot?'':'<button class="link" onclick="cuOTStart(\''+sid+'\','+p[0]+')">⏱ Start 60-minute timer</button>')+'<label for="'+ip+'" class="sub" style="margin:0">Score /250</label><input id="'+ip+'" type="number" inputmode="numeric" min="-50" max="250" class="field cusc"><button class="btn sm2" onclick="cuPPSave(\''+sid+'\','+p[0]+')">Save</button></div></div>'});
  var K=CUPPK[sid]||[];if(K.length){h+='<p class="sub" style="margin:10px 0 4px">With answer keys or solutions:</p><div class="cupl">'+K.map(function(x){return'<a href="'+x[1]+'" target="_blank" rel="noopener">'+esc(x[0])+'</a>'}).join('')+'</div>'}
  h+='<p class="sub" style="margin:10px 0 0;font-size:.8rem">NTA shows its own papers and keys only to candidates, during the answer-key window. These copies come from other sites and may be rebuilt from memory, so an answer key may rarely be wrong. CUET has several shifts, so each year has more papers than the one linked.</p>';
  return h+'</div>'}
function cuOTStart(sid,yr){var D=cuD();D.ot={sub:sid,yr:yr,t0:Date.now()};save();render()}
function cuOTStop(){var D=cuD();D.ot=null;save();render()}
function cuPPSave(sid,yr){var e=document.getElementById('cuS_'+sid+yr),v=e?parseInt(e.value,10):NaN;if(isNaN(v)||v<-50||v>250){showToast('Enter a score from −50 to 250.');return}
  var D=cuD();if(!D.pps)D.pps={};var k=sid+yr,r=D.pps[k];D.pps[k]={sc:r?Math.max(r.sc,v):v,at:Date.now(),n:(r?r.n||1:0)+1,last:v};
  if(D.ot&&D.ot.sub===sid&&D.ot.yr===yr)D.ot=null;S.ev.push({k:'q',topic:'CUET '+CUM[sid].n+' · past paper '+yr,ok:v>=150,habit:'',type:'cuet past paper',ts:Date.now()});save();showToast('Saved: '+v+'/250 for the '+yr+' paper.');render()}
function cuOTTick(){var D=cuD();if(!D.ot)return;cuStop();CUTI=setInterval(function(){var e=document.getElementById('cuOT');if(!e||view!=='cu'){cuStop();return}var l=D.ot?D.ot.t0+3600000-Date.now():0;if(l<=0){e.textContent='Time up';e.classList.add('low');cuStop();return}e.textContent=cuClock(l);e.classList.toggle('low',l<300000)},1000)}

/* CUET info: what it is, pattern, dates, fees, subject choice, registration */
var CUCHK='6 Nov 2026';
function cuInfoCard(){var D=cuD(),y=D.yr,cd='';
  if(y){var ex=new Date(y,4,11),days=Math.ceil((ex-Date.now())/864e5);cd=days>0?'About '+days+' days to mid-May '+y+' (estimate)':'CUET '+y+' window has started or passed'}
  return'<button class="card cusubj cuinfo" onclick="CUV.info=1;render();window.scrollTo(0,0)"><span class="cuic">ℹ️</span><span class="tt"><b>About CUET</b><small>What it is, dates, pattern, fees, choosing subjects and how to register</small>'+(cd?'<small><b>'+cd+'</b></small>':'')+'</span><span class="pill mid">Info</span></button>'}
function cuInfo(){var D=cuD(),y=D.yr;
  var h='<p class="back"><button class="link" onclick="CUV.info=0;render()">← CUET practice</button></p><h1>About CUET</h1><p class="sub">Checked on '+CUCHK+'. Dates and rules change each year, so confirm on the official site before acting.</p>';
  // countdown
  h+='<div class="card hi"><b>Your CUET year</b><div class="seg" role="group" aria-label="CUET year">'+[2027,2028,2029].map(function(v){return'<button aria-selected="'+(y===v)+'" onclick="cuD().yr='+v+';save();render()">'+v+'</button>'}).join('')+'</div>';
  if(y){var ex=new Date(y,4,11),days=Math.ceil((ex-Date.now())/864e5);h+='<div class="cuscore"><big>'+Math.max(0,days)+'</big><span>days to about 11 May '+y+'</span></div><p class="sub" style="margin:4px 0 0">An estimate: the exam has started in the second week of May in each of the last three years. Registration has opened between January and March of the exam year.</p>'}
  else h+='<p class="sub" style="margin:4px 0 0">Pick the year of the exam to see a countdown.</p>';
  h+='</div>';
  h+='<div class="card"><h2>What CUET is</h2><p>The Common University Entrance Test (Undergraduate) is the single entrance exam for undergraduate admission to central universities such as Delhi University, BHU and JNU, and to many state, deemed and private universities that choose to use it. The National Testing Agency (NTA) runs it once a year as a computer-based test.</p><p class="sub" style="margin:0">CUET gives a score, not admission. Each university then runs its own admission process using that score and its own course rules.</p></div>';
  h+='<div class="card"><h2>The paper</h2><div class="cutbl"><table><tbody>'+[
    ['Sections','Languages · Domain subjects · General Aptitude Test'],
    ['Papers on offer','37 in all: 13 languages, 23 domain subjects, 1 General Aptitude Test'],
    ['How many to take','Up to 5, counting languages and the General Aptitude Test'],
    ['Each paper','50 compulsory MCQs in 60 minutes'],
    ['Marking','+5 right, −1 wrong, 0 if left blank (250 per paper)'],
    ['Syllabus','Domain papers follow the NCERT syllabus'],
    ['Mode','Computer-based, in multiple shifts']].map(function(r){return'<tr><th>'+r[0]+'</th><td>'+r[1]+'</td></tr>'}).join('')+'</tbody></table></div>';
  h+='<p class="sub" style="margin:8px 0 0">Some coaching sites report proposals for shorter papers and fewer subjects from 2027. Nothing is confirmed, so the mocks here follow the current 50-question pattern.</p></div>';
  h+='<div class="card"><h2>Dates of recent cycles</h2><p class="sub" style="margin:0 0 6px">NTA had not announced 2027 dates as of '+CUCHK+'.</p><div class="cutbl"><table><thead><tr><th>Cycle</th><th>Registration</th><th>Exam</th><th>Result</th></tr></thead><tbody>'+[
    ['2026','3 Jan – 4 Feb (re-opened 23–26 Feb)','11 May – 7 Jun','23 Jun'],
    ['2025','1 Mar – 24 Mar','13 May – 4 Jun','4 Jul'],
    ['2024','27 Feb – 31 Mar','15 May – 24 May (+ re-test 19 Jul)','28 Jul']].map(function(r){return'<tr>'+r.map(function(c,i){return i?'<td>'+c+'</td>':'<th>'+c+'</th>'}).join('')+'</tr>'}).join('')+'</tbody></table></div><p class="sub" style="margin:8px 0 0">Expect roughly the same shape: register in the first quarter of the year, exam from mid-May, result by late June or July. Then each university opens its own admission portal.</p></div>';
  h+='<div class="card"><h2>Fees (2026)</h2><div class="cutbl"><table><thead><tr><th>Category</th><th>Up to 3 subjects</th><th>Each extra subject</th></tr></thead><tbody>'+[
    ['General','₹1,000','₹400'],['OBC-NCL / Gen-EWS','₹900','₹375'],['SC / ST / PwBD / Third gender','₹800','₹350'],['Centre outside India','₹4,500','₹1,800']].map(function(r){return'<tr><th>'+r[0]+'</th><td>'+r[1]+'</td><td>'+r[2]+'</td></tr>'}).join('')+'</tbody></table></div><p class="sub" style="margin:8px 0 0">So five subjects cost ₹1,800 in the General category.</p></div>';
  h+='<div class="card"><h2>Choosing the five subjects</h2><ol class="cuol"><li><b>Start from the courses, not the subjects.</b> List the courses and universities you want, then read each one’s CUET requirement on its admission page. Some courses name specific subjects.</li><li><b>Take the language paper most courses ask for.</b> English is accepted almost everywhere.</li><li><b>Match the domain papers to the course.</b> Economics honours at several universities, including Delhi University in recent years, has asked for Mathematics. Check the current year’s rules.</li><li><b>Keep one paper as a safety net.</b> A fifth paper, such as the General Aptitude Test or another domain subject, can open extra courses.</li><li><b>Prefer subjects studied in the final school year.</b> Universities often expect CUET subjects to match those studied, even where NTA allows any choice.</li></ol><p class="sub" style="margin:8px 0 0">The five subjects practised in this app (English, Mathematics, Economics, Political Science, Sociology) make one valid set for humanities, economics and social-science courses.</p></div>';
  h+='<div class="card"><h2>How to register</h2><ol class="cuol"><li>Register on the official site with a working email and phone number.</li><li>Fill in the form: personal and school details, subjects, and four preferred exam cities.</li><li>Upload a recent photo and signature in the stated sizes, plus a category certificate if one applies.</li><li>Pay the fee online and download the confirmation page.</li><li>Use the correction window if anything is wrong.</li><li>Check the city slip, then download the admit card about a week before the exam.</li><li>After the exam, check the provisional answer key and raise objections if needed. Results follow a few weeks later.</li><li>Apply on each university’s own admission portal with the CUET score (for Delhi University, its CSAS portal).</li></ol></div>';
  h+='<div class="card"><h2>Using this app to prepare</h2><ul class="cuol"><li><b>Set A</b> keeps the current chapters in CUET style.</li><li><b>Set B</b> covers the full CUET syllabus.</li><li>Sit one <b>full mock</b> each week and check the topic breakdown.</li><li>Use <b>Past papers</b> with the 60-minute timer for the real feel.</li><li>Leave a question blank when you can rule out at most one option. A wrong answer costs a mark.</li></ul></div>';
  h+='<div class="card"><h2>Official contacts</h2><div class="curow"><span>Website<small>Registration, notices, admit card, answer key, results</small></span><a class="btn alt sm2" style="text-decoration:none;margin:0" href="https://cuet.nta.nic.in/" target="_blank" rel="noopener">cuet.nta.nic.in</a></div><div class="curow"><span>Helpline<small>Selectable number</small></span><b class="cusel2">011-40759000</b></div><div class="curow"><span>Email<small>Selectable address</small></span><b class="cusel2">cuet-ug@nta.ac.in</b></div></div>';
  app.innerHTML=h}

/* hook into navigation, hints and Ask */
GRP.subj.unshift(['cu','CUET']);TABN.cu='CUET';
var _cuRender0=render;render=function(){cuStop();if(view==='cu'){if(typeof stStop==='function')stStop();applyPrefs();var g=grpOf(view);document.querySelectorAll('.tab').forEach(function(b){b.setAttribute('aria-current',b.getAttribute('data-g')===g)});subBar();cuView();try{hFab()}catch(e){}return}_cuRender0()};
var _cuTop0=viewTop;viewTop=function(v){if(v==='cu'){CUV.sub=null;CUV.pr=null;CUV.rv=null;CUV.open=0;CUV.info=0}return _cuTop0(v)};
var _cuH0=hCtx;hCtx=function(){try{if(view==='cu'&&CUV.pr&&CUV.pr.pick==null&&CUV.pr.i<CUV.pr.q.length){var Z=CUV.pr,q=cuQ(Z.q[Z.i]),o=Z.pm[Z.i].map(function(i){return q.o[i]}),P=q.ps?CU[q.sub].pas[q.ps]:null;
  return{kind:'gen',key:'cu:'+q.id,ref:'cu:'+q.id,sec:'CUET practice ('+CUM[q.sub].n+')',sub:q.sub,topic:CUM[q.sub].n+' · '+q.tp,q:(P?P.t+': '+P.x+'\n\n':'')+cuPlain(q.q),o:o,a:Z.pm[Z.i].indexOf(q.a),h:q.k,secret:'Correct option: '+q.o[q.a]+'\nWhy: '+q.k}}}catch(e){}return _cuH0()};
var _cuCtx0=ctxNow;ctxNow=function(){try{if(view==='cu'){var t='Section: CUET practice\n';
  if(CUV.pr&&CUV.pr.i<CUV.pr.q.length){var q=cuQ(CUV.pr.q[CUV.pr.i]);t+='Subject: '+CUM[q.sub].n+' ('+CUSET[q.set].t+')\nTopic: '+q.tp+'\nQuestion: '+cuPlain(q.q)+'\nOptions: '+CUV.pr.pm[CUV.pr.i].map(function(oi,i){return'('+(i+1)+') '+q.o[oi]}).join(' | ')+'\n';if(CUV.pr.pick!=null)t+='I chose ('+(CUV.pr.pick+1)+'). Explanation shown: '+q.k+'\n';return['CUET · '+CUM[q.sub].n,t]}
  if(CUV.rv){var m=cuD().mocks[CUV.rv.i];if(m)return['CUET mock result',t+'Subject: '+CUM[m.sub].n+' Set '+m.set.toUpperCase()+'\nScore: '+m.sc+'/250 ('+m.ok+' right, '+m.bad+' wrong, '+m.sk+' blank)\nWeak topics: '+Object.keys(m.tp).filter(function(k){return m.tp[k][1]+m.tp[k][2]>m.tp[k][0]}).join(', ')+'\n']}
  if(CUV.info)return['About CUET',t+'Page: CUET exam information (pattern, dates, fees, subject choice, registration)\n'];
  if(cuD().run&&CUV.open)return['CUET mock','Section: a timed CUET mock (please don’t give me answers to the paper while it is running; general study tips only)\n'];
  if(CUV.sub)return['CUET · '+CUM[CUV.sub].n,t+'Subject: '+CUM[CUV.sub].n+'\n'];return['CUET practice',t]}}catch(e){}return _cuCtx0()};

/*CU-END*/
