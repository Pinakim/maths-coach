
/*PREP-START*/
/*PLAN: a daily 40-minute plan from 20 Nov 2026 to 31 Jan 2027.
  Built from two marked maths papers (a class test and the half-yearly). Skill names only, no personal details.
  Every question below is a real question type from those papers, with a worked answer checked by computer algebra. */
var PLN={
final:[2027,0,31],
rules:[
 ['First line is the plan','Write the formula with each letter named, or one short sentence: “collect, factor, divide”. A plan stops a good first move from being the only move.'],
 ['Finish in the form asked','Degrees–minutes–seconds, an interval, a ± value, a root with its reason. Read the last line of the question, then box the answer.'],
 ['Never leave a blank','Stuck for five minutes? Write the first line, put a star beside the question and move on. Come back at the end. A first line earns marks, and a blank earns none.'],
 ['Check the sign','Put every negative in brackets. When an inequality is multiplied by a negative number, turn the sign round on that line. Use x = 1 or x = 0 to test an expansion.']],
pace:[['Section A','20 marks','35 min'],['Section B','14 marks','30 min'],['Section C','21 marks','45 min'],['Section D','25 marks','60 min'],['Check','','10 min']],
paceNote:'For an 80-mark, 3-hour paper. Where there is a choice (OR), pick the option you can finish, and do not start the second one. If a question has eaten twice its time, stop and move on.',
t2:['Complex numbers','Sequence and series','Coordinate geometry: points','The straight line','Circles','Probability','Conic sections','Introduction to 3D geometry','Measures of dispersion'],
map:[
 ['Sets, relations and functions',15,11,'Week 1'],
 ['Trigonometry (angles, functions, compound angles)',10,6,'Weeks 2 and 3'],
 ['Quadratic equations',9,6,'Week 4'],
 ['Permutations and combinations',7,5,'Week 6'],
 ['Limits',6,4,'Weeks 7 and 8'],
 ['Binomial theorem',3,2,'Week 7'],
 ['Inequalities and modulus',0,0,'Week 5 (keep it strong)']],
W:[
{t:'Starter: finish every answer',c:'Angles and arc length',
 why:'Both papers lost marks on answers that stopped one step early: degrees–minutes–seconds left as a decimal, a sector problem not carried to the angle. Three days to make finishing a habit before the chapter work starts.',
 rc:['π radian = 180°, so 1 radian = 180°/π','Arc s = rθ, sector area = ½r²θ, perimeter of a sector = 2r + rθ (θ in radians)','1° = 60′ and 1′ = 60″: turn the decimal part into minutes, then what is left into seconds','The last line repeats the question: “Radius = …, angle = …”'],
 q:[
 {i:'a1',m:1,q:'Express 2811π/8000 radians in degrees, minutes and seconds.',a:'180 × 2811/8000 = 63.2475°.\n0.2475 × 60 = 14.85′, then 0.85 × 60 = 51″.\nAnswer: 63°14′51″.'},
 {i:'a2',m:3,q:'The sum of two angles is 1 radian and their difference is 1°. Find the angles in degrees, minutes and seconds (use π = 22/7).',a:'1 radian = 180 × 7/22 = 57.2727°.\nBigger angle = (57.2727 + 1)/2 = 29.1364° = 29°8′11″.\nSmaller angle = 28.1364° = 28°8′11″.'},
 {i:'a3',m:3,q:'A sector has area 55 cm² and perimeter 31 cm. Find the radius and the angle at the centre.',a:'½r²θ = 55 and 2r + rθ = 31, so rθ = 31 − 2r.\nThen ½r(31 − 2r) = 55, which gives 2r² − 31r + 110 = 0, so r = 10 or r = 5.5.\nFor r = 10: θ = 11/10 rad = 63° (π = 22/7).\n(r = 5.5 gives θ = 40/11 rad, about 208°, a reflex angle. Write that you checked both.)'},
 {i:'a4',m:2,q:'A man running at 16 km/h covers an arc that subtends 56° at the centre of a circular track in 36 seconds. Find the diameter of the track.',a:'Distance = 16000/3600 × 36 = 160 m.\nθ = 56 × π/180 = 44/45 rad (π = 22/7).\nr = s/θ = 160 × 45/44 = 1800/11 m, so the diameter is 3600/11 ≈ 327.3 m.'}]},

{t:'Sets, relations and functions',c:'Sets · Relations and functions',
 why:'The biggest block of lost marks: 15 of 80. Set proofs were drawn as Venn diagrams (not accepted as proof) or jumped to the result; relations were counted with 2^(m+n); domain and range of a fraction was left blank.',
 rc:['A − B = A ∩ B′ (the key step in every “difference” proof)','Prove an equation by working on the left side and the right side separately until they meet','x ∈ A (an element is in a set) and A ⊂ B (a set is inside a set) are different things','Relations from A to B: 2^(mn). Functions from A to B: n(B)^n(A)','Domain: values of x allowed. Range: put y = f(x), solve for x, and ask what y must be for x to be real'],
 q:[
 {i:'b1',m:2,q:'For any two sets A and B, prove that A ∩ (B − A) = ∅. Use set algebra, not a Venn diagram.',a:'B − A = B ∩ A′.\nSo A ∩ (B − A) = A ∩ (B ∩ A′) = (A ∩ A′) ∩ B = ∅ ∩ B = ∅.'},
 {i:'b2',m:3,q:'Prove that (A ∩ B) − C = (A − C) ∩ (B − C).',a:'LHS = (A ∩ B) ∩ C′ = A ∩ B ∩ C′.\nRHS = (A ∩ C′) ∩ (B ∩ C′) = A ∩ B ∩ (C′ ∩ C′) = A ∩ B ∩ C′.\nLHS = RHS. Write both sides on separate lines.'},
 {i:'b3',m:1,q:'If n(A) = 2 and n(B) = 3, how many relations are there from A to B? How many functions?',a:'Relations: 2^(2 × 3) = 64, because every subset of A × B is a relation.\nFunctions: 3² = 9.'},
 {i:'b4',m:2,q:'If f(x) = loge((1 + x)/(1 − x)), show that f(2x/(1 + x²)) = 2f(x).',a:'(1 + 2x/(1 + x²)) ÷ (1 − 2x/(1 + x²)) = (1 + x)²/(1 − x)².\nSo f(2x/(1 + x²)) = loge[(1 + x)/(1 − x)]² = 2 loge((1 + x)/(1 − x)) = 2f(x).'},
 {i:'b5',m:5,q:'Find the domain and range of f(x) = 5/(3 − x²).',a:'Domain: 3 − x² ≠ 0, so x ≠ ±√3. Domain = R − {−√3, √3}.\nRange: y = 5/(3 − x²) gives x² = 3 − 5/y, which must be ≥ 0, so (3y − 5)/y ≥ 0.\nThat means y < 0 or y ≥ 5/3. Range = (−∞, 0) ∪ [5/3, ∞).'},
 {i:'b6',m:1,q:'A = {1, 2, …, 10}. Which are true: (P) n(P(A)) = 1024, (Q) n(A × A) = 100, (R) A ∪ A = A ∩ A = A?',a:'All three. (P) 2¹⁰ = 1024. (Q) 10 × 10 = 100. (R) A ∪ A = A and A ∩ A = A.'},
 {i:'b7',m:1,q:'Let x ∈ A and A ⊂ B. Is it true that x ∈ B? Is it true that x ⊂ B?',a:'x ∈ B is true. x ⊂ B is not meaningful: x is an element, and ⊂ joins two sets.'}]},

{t:'Angles and trigonometric functions',c:'Trigonometric functions',
 why:'Allied angles lost marks again: 510° was missed in “all angles between 0° and 720°”, and a sign was lost in a long angle reduction. Decide the sign first (quadrant), the name second (only 90° and 270° change sin and cos).',
 rc:['Reduce a big angle first: subtract 360° until it is under 360°, and keep the sign of the original angle','Quadrants: I all +, II sin +, III tan +, IV cos +','sin(−θ) = −sin θ, cos(−θ) = cos θ, tan(−θ) = −tan θ','With a reference angle α, “all angles whose tan is −k” are 180° − α, 360° − α, 540° − α, 720° − α, …','Degrees and radians table for 0°, 30°, 45°, 60°, 90°'],
 q:[
 {i:'c1',m:1,q:'Find sin 750° cos 300° + cos 1470° sin(−1020°).',a:'sin 750° = sin 30° = ½, cos 300° = ½, cos 1470° = cos 30° = √3/2.\nsin(−1020°) = −sin 1020° = −sin 300° = √3/2.\nSum = ¼ + ¾ = 1.'},
 {i:'c2',m:2,q:'Find all angles between 0° and 720° whose tangent is −1/√3.',a:'The reference angle is 30°, and tan is negative in quadrants II and IV.\nAngles: 150°, 330°, 510°, 690°. List all four.'},
 {i:'c3',m:1,q:'Find tan 75° − cot 75°.',a:'tan 75° = 2 + √3 and cot 75° = 2 − √3.\nDifference = 2√3.'},
 {i:'c4',m:1,q:'Express 5°37′30″ in radians.',a:'37′30″ = 37.5′ = 0.625°, so the angle is 5.625° = 45°/8.\n45/8 × π/180 = π/32.'},
 {i:'c5',m:1,q:'If θ lies in the second quadrant, in which quadrant does −θ lie?',a:'Third quadrant. θ is between 90° and 180°, so −θ is between −180° and −90°.'},
 {i:'c6',m:2,q:'If 4θ = 11π, find (sin(−θ) + cos(−θ)) / (sec θ + tan(−θ)).',a:'θ = 11π/4 = 495°, which is 135° (second quadrant): sin θ = √2/2, cos θ = −√2/2, sec θ = −√2, tan θ = −1.\nNumerator = −√2/2 − √2/2 = −√2. Denominator = −√2 − (−1) = 1 − √2.\n−√2/(1 − √2) = √2/(√2 − 1) = √2(√2 + 1) = 2 + √2.'},
 {i:'c7',m:1,q:'Show that sin(240° + θ) + cos(330° + θ) = 0.',a:'sin(240° + θ) = sin(180° + (60° + θ)) = −sin(60° + θ).\ncos(330° + θ) = cos(360° − (30° − θ)) = cos(30° − θ) = sin(60° + θ).\nThe sum is 0.'}]},

{t:'Compound and multiple angles',c:'Compound and multiple angles',
 why:'The method was right (sum-to-product was used well) but proofs stopped before both sides met, and a product of three or four sines was not turned into something known. This week: every proof ends with “= RHS”.',
 rc:['sin 2A = 2 sin A cos A; cos 2A = cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1','2 sin A cos B = sin(A + B) + sin(A − B); 2 sin A sin B = cos(A − B) − cos(A + B)','sin C + sin D = 2 sin((C + D)/2) cos((C − D)/2); cos C − cos D = −2 sin((C + D)/2) sin((C − D)/2)','sin A sin(60° − A) sin(60° + A) = ¼ sin 3A; tan A tan(60° − A) tan(60° + A) = tan 3A','Last line of a proof: LHS = RHS'],
 q:[
 {i:'d1',m:2,q:'Prove that (1 − cos 2x + sin x)/(sin 2x + cos x) = tan x.',a:'1 − cos 2x = 2sin²x and sin 2x = 2 sin x cos x.\nLHS = (2sin²x + sin x)/(2 sin x cos x + cos x) = sin x(2 sin x + 1)/[cos x(2 sin x + 1)] = tan x = RHS.'},
 {i:'d2',m:3,q:'Evaluate tan 20° tan 40° tan 80°.',a:'Use tan A tan(60° − A) tan(60° + A) = tan 3A with A = 20°.\nThe product is tan 60° = √3.'},
 {i:'d3',m:3,q:'Prove that sin 20° sin 40° sin 60° sin 80° = 3/16.',a:'sin 20° sin 40° sin 80° = sin 20° sin(60° − 20°) sin(60° + 20°) = ¼ sin 60° = √3/8.\nMultiply by sin 60° = √3/2: (√3/8)(√3/2) = 3/16.'},
 {i:'d4',m:3,q:'If sin²x = sin α cos α, prove that cos 2x = 2cos²(π/4 + α).',a:'LHS: cos 2x = 1 − 2sin²x = 1 − 2 sin α cos α = 1 − sin 2α.\nRHS: 2cos²(π/4 + α) = 1 + cos(π/2 + 2α) = 1 − sin 2α.\nLHS = RHS. The RHS step is the one to write out.'},
 {i:'d5',m:5,q:'Prove that (sin A sin 9A + sin 3A sin 5A)/(sin A cos 9A + sin 3A cos 5A) = tan 6A.',a:'Numerator: ½[(cos 8A − cos 10A) + (cos 2A − cos 8A)] = ½(cos 2A − cos 10A) = sin 6A sin 4A.\nDenominator: ½[(sin 10A − sin 8A) + (sin 8A − sin 2A)] = ½(sin 10A − sin 2A) = cos 6A sin 4A.\nRatio = sin 6A/cos 6A = tan 6A.'},
 {i:'d6',m:2,q:'If tan x − tan y = a and cot y − cot x = b, prove that 1/a + 1/b = cot(x − y).',a:'b = cot y − cot x = (tan x − tan y)/(tan x tan y) = a/(tan x tan y), so 1/b = tan x tan y / a.\n1/a + 1/b = (1 + tan x tan y)/a = (1 + tan x tan y)/(tan x − tan y) = cot(x − y).'},
 {i:'d7',m:2,q:'Challenge: find sin 18°.',a:'Let A = 18°, so 2A + 3A = 90° and sin 2A = cos 3A.\n2 sin A cos A = 4cos³A − 3 cos A, divide by cos A: 2 sin A = 4(1 − sin²A) − 3, so 4s² + 2s − 1 = 0.\ns = (−1 + √5)/4, because s > 0. So sin 18° = (√5 − 1)/4.'}]},

{t:'Quadratic equations',c:'Quadratic equations',
 why:'Several marks went because the quick identity was not used: “roots differ by 6” and “α − β = 1” need (α − β)², and a form like q/(p − α) needs the observation p − α = β. This week is about choosing the shorter route.',
 rc:['α + β = −b/a and αβ = c/a','(α − β)² = (α + β)² − 4αβ','α² + β² = (α + β)² − 2αβ','Equation with roots r and s: x² − (r + s)x + rs = 0','Real roots: D ≥ 0. Always positive: a > 0 and D < 0','Common root: subtract the two equations to get a simple one'],
 q:[
 {i:'e1',m:1,q:'The roots of x² + kx + 9 = 0 differ by 6. Find k.',a:'(α − β)² = (α + β)² − 4αβ gives 36 = k² − 36, so k² = 72 and k = ±6√2.'},
 {i:'e2',m:1,q:'α and β are the roots of x² + kx + 12 = 0 and α − β = 1. Find k.',a:'1 = k² − 4 × 12, so k² = 49 and k = ±7.'},
 {i:'e3',m:1,q:'If 3 sin θ + 5 cos θ = 5, find 5 sin θ − 3 cos θ.',a:'(3 sin θ + 5 cos θ)² + (5 sin θ − 3 cos θ)² = 9 + 25 = 34.\nSo (5 sin θ − 3 cos θ)² = 34 − 25 = 9, and 5 sin θ − 3 cos θ = ±3 (the option 3 if only one value is listed).'},
 {i:'e4',m:3,q:'α and β are the roots of 3x² + 2x + 1 = 0. Find the equation whose roots are (1 − α)/(1 + α) and (1 − β)/(1 + β).',a:'α + β = −2/3 and αβ = 1/3.\nSum = [(1 − α)(1 + β) + (1 − β)(1 + α)]/[(1 + α)(1 + β)] = (2 − 2αβ)/(1 + α + β + αβ) = (4/3)/(2/3) = 2.\nProduct = (1 − α − β + αβ)/(1 + α + β + αβ) = 2/(2/3) = 3.\nEquation: x² − 2x + 3 = 0.'},
 {i:'e5',m:5,q:'α and β are the roots of x² − px + q = 0. Find the equation whose roots are q/(p − α) and q/(p − β).',a:'α + β = p, so p − α = β and p − β = α.\nThe new roots are q/β = α and q/α = β, the same roots.\nSo the equation is x² − px + q = 0. No long expansion is needed.'},
 {i:'e6',m:2,q:'If x² + ax + b = 0 and x² + bx + a = 0 (a ≠ b) have a common root, prove that a + b + 1 = 0.',a:'Subtract: (a − b)x + (b − a) = 0, so (a − b)(x − 1) = 0 and x = 1 (since a ≠ b).\nPut x = 1 in the first equation: 1 + a + b = 0.'},
 {i:'e7',m:5,q:'Solve √(x² + 3x + 32) + √(x² + 3x + 5) = 9.',a:'Let u = x² + 3x. The two radicands differ by 27, so (A − B)(A + B) = 27 where A + B = 9, giving A − B = 3.\nA = 6 and B = 3, so u + 5 = 9 and u = 4: x² + 3x − 4 = 0, x = 1 or x = −4. Both satisfy the equation.'},
 {i:'e8',m:5,q:'Solve √(2x² + 9) + √(2x² − 9) = 9 + 3√7.',a:'(A + B)(A − B) = 18, so A − B = 18/(9 + 3√7) = 9 − 3√7.\nAdding: A = 9, so 2x² + 9 = 81 and x = ±6. Check: B = √63 = 3√7.'},
 {i:'e9',m:5,q:'Solve 4x⁴ − 16x³ + 7x² + 16x + 4 = 0.',a:'Try x = 2: 64 − 128 + 28 + 32 + 4 = 0. Try x = −½: it also works.\nThe polynomial factorises as (x − 2)(2x + 1)(2x² − 5x − 2) = 0.\nx = 2, x = −½, x = (5 ± √41)/4.'}]},

{t:'Inequalities and modulus',c:'Inequalities',
 why:'Rational inequalities went well in the half-yearly (full marks) but two slips remain: the modulus sits on the top of a fraction only, and the direction was not turned after multiplying by −1. Keep what works, fix those two.',
 rc:['Bring everything to one side, then one fraction, then factorise top and bottom','Mark the critical points on a line and read the sign of each stretch','Multiply or divide by a negative: turn the sign round on that line','|A| < k means −k < A < k; |A| > k means A < −k or A > k','A modulus with a fraction outside it: split into cases by the sign of what is inside'],
 q:[
 {i:'f1',m:3,q:'Solve (|x + 2| − x)/x < 2, x ∈ R.',a:'x > 0: the top is 2, so 2/x < 2 and x > 1.\n−2 ≤ x < 0: the top is 2, so 2/x < 0 < 2, always true.\nx < −2: the top is −2x − 2, so (−2x − 2)/x < 2 gives (4x + 2)/x > 0, true for every x < −2.\nSolution: x < 0 or x > 1.'},
 {i:'f2',m:5,q:'Solve (x² − 2x + 5)/(3x² − 2x − 5) > ½.',a:'Bring ½ across: (2x² − 4x + 10 − 3x² + 2x + 5)/[2(3x² − 2x − 5)] > 0, which is (−x² − 2x + 15)/[2(3x² − 2x − 5)] > 0.\nMultiply top and bottom by −1 and turn the sign: (x² + 2x − 15)/(3x² − 2x − 5) < 0, that is (x + 5)(x − 3)/[(3x − 5)(x + 1)] < 0.\nCritical points −5, −1, 5/3, 3. Solution: (−5, −1) ∪ (5/3, 3).'},
 {i:'f3',m:3,q:'Solve (x − 1)/(4x + 5) < (x − 3)/(4x − 3).',a:'(x − 1)(4x − 3) − (x − 3)(4x + 5) = 18, so the inequality is 18/[(4x + 5)(4x − 3)] < 0.\nSo (4x + 5)(4x − 3) < 0 and −5/4 < x < 3/4.'},
 {i:'f4',m:1,q:'Solve |x² − 4x| < 5.',a:'−5 < x² − 4x < 5. The left part, x² − 4x + 5 > 0, is always true.\nx² − 4x − 5 < 0 gives (x − 5)(x + 1) < 0, so −1 < x < 5.'},
 {i:'f5',m:1,q:'Solve 3|m − 6| − 4 < 11.',a:'3|m − 6| < 15, so |m − 6| < 5 and −5 < m − 6 < 5.\n1 < m < 11.'},
 {i:'f6',m:2,q:'Solve |2x − 1| ≥ 3.',a:'2x − 1 ≥ 3 or 2x − 1 ≤ −3.\nx ≥ 2 or x ≤ −1.'},
 {i:'f7',m:2,q:'Solve (x − 2)/(x + 3) ≥ 0.',a:'Critical points −3 and 2. The fraction is positive for x < −3 and x > 2, and zero at x = 2.\nx < −3 or x ≥ 2. x = −3 is not allowed (the denominator is 0).'},
 {i:'f8',m:2,q:'If x is real, find the values of p for which 4x² + px + 1 is always positive.',a:'a = 4 > 0, so the condition is D < 0.\np² − 16 < 0, so −4 < p < 4.'}]},

{t:'Permutations and combinations',c:'Permutations and combinations',
 why:'Order was ignored in the wrong place: a committee was counted with permutations (4P2 × 6P3 instead of 4C2 × 6C3), and “none empty” cases were not subtracted. Ask first: does order matter?',
 rc:['Order matters: arrange, word, rank, line up → P. Order does not matter: choose, committee, team, hand → C','Words from repeated letters: n!/(p! q! …)','Dictionary rank: count the words that begin with each smaller letter, then go one letter deeper','At least / at most: add the cases, or subtract the cases you do not want from the total','n distinct objects into 2 different boxes, none empty: 2ⁿ − 2','Circular arrangements: (n − 1)!, and (n − 1)!/2 if clockwise and anticlockwise are the same'],
 q:[
 {i:'g1',m:3,q:'Find the rank of the word LATE when its letters are arranged as in a dictionary.',a:'Order of letters: A, E, L, T.\nWords starting with A: 3! = 6. With E: 6. That is 12 words before L.\nStarting with L: LAET (13th), LATE (14th).\nRank = 14.'},
 {i:'g2',m:5,q:'A committee of 5 is to be formed from 6 gentlemen and 4 ladies. How many ways if it includes (a) exactly 2 ladies, (b) at least 2 ladies, (c) at most 2 ladies?',a:'(a) 4C2 × 6C3 = 6 × 20 = 120.\n(b) 2 ladies 120, 3 ladies 4C3 × 6C2 = 60, 4 ladies 4C4 × 6C1 = 6. Total 186. (Check: 10C5 − 6 − 60 = 186.)\n(c) 0 ladies 6C5 = 6, 1 lady 4C1 × 6C4 = 60, 2 ladies 120. Total 186.'},
 {i:'g3',m:5,q:'How many four-letter words, with or without meaning, can be formed from the letters of INDEPENDENCE?',a:'Letters: I, N×3, D×2, E×4, P, C (6 different letters).\nAll different: 6P4 = 360.\nOne pair and two different (pair from N, D, E): 3 × 5C2 × 4!/2! = 360.\nTwo pairs: 3C2 × 4!/(2!2!) = 18.\nThree alike and one different (N or E): 2 × 5 × 4 = 40.\nFour alike (EEEE): 1.\nTotal = 779.'},
 {i:'g4',m:1,q:'In how many ways can n distinct balls be put into two different boxes so that no box is empty?',a:'Each ball has 2 choices: 2ⁿ ways in all. Remove the 2 cases where all the balls are in one box.\nAnswer: 2ⁿ − 2.'},
 {i:'g5',m:1,q:'Statement: (n + 1)! = n! does not hold for any value of n. True or false?',a:'False. For n = 0: (0 + 1)! = 1 and 0! = 1, so the equation holds.\n(n + 1)! = (n + 1) n!, so the equation needs n + 1 = 1, which is n = 0.'},
 {i:'g6',m:1,q:'Assertion: a necklace of 9 different beads can be made in 840 ways. True or false?',a:'False. Clockwise and anticlockwise are the same, so the number is (9 − 1)!/2 = 8!/2 = 20160.'},
 {i:'g7',m:2,q:'In how many ways can 5 boys and 3 girls sit in a row so that no two girls are together?',a:'Seat the 5 boys: 5! = 120. This makes 6 gaps. Choose and seat the girls in the gaps: 6P3 = 120.\nTotal = 120 × 120 = 14400.'}]},

{t:'Binomial theorem and the start of limits',c:'Binomial theorem · Limits',
 why:'Binomial: the setup was right but a 3⁷ vs 3⁶ factor and a small slip in solving the ratio equation cost marks. Limits: “0/0” was written as 0. A limit that gives 0/0 needs one more step: factorise, or turn the expression into a standard limit.',
 rc:['General term Tr+1 = nCr · xⁿ⁻ʳ · aʳ','Middle term: n even gives one (the (n/2 + 1)th), n odd gives two','Terms of the same expansion: divide Tr+1 by Tr to get a ratio equation','lim (sin x)/x = 1 and lim (tan x)/x = 1 as x → 0','lim (xⁿ − aⁿ)/(x − a) = n·aⁿ⁻¹','0/0 is not 0: rewrite, then take the limit'],
 q:[
 {i:'h1',m:3,q:'Find the middle term(s) of (3x − 1/(2x))⁹.',a:'n = 9 is odd, so there are two middle terms: T5 and T6.\nT5 = 9C4 (3x)⁵(−1/(2x))⁴ = 126 × 243x⁵/(16x⁴) = 15309x/8.\nT6 = 9C5 (3x)⁴(−1/(2x))⁵ = −126 × 81x⁴/(32x⁵) = −5103/(16x).'},
 {i:'h2',m:5,q:'The third, fourth and fifth terms of (x + a)ⁿ are 84, 280 and 560. Find x, a and n.',a:'T3 = nC2 xⁿ⁻²a² = 84, T4 = nC3 xⁿ⁻³a³ = 280, T5 = nC4 xⁿ⁻⁴a⁴ = 560.\nT4/T3 = (n − 2)a/(3x) = 10/3 and T5/T4 = (n − 3)a/(4x) = 2.\nSo (n − 2)a/x = 10 and (n − 3)a/x = 8. Dividing: (n − 2)/(n − 3) = 5/4, so 4n − 8 = 5n − 15 and n = 7.\nThen a/x = 2. Put in T3: 21x⁵a² = 84, so x⁷ = 1, x = 1, a = 2.'},
 {i:'h3',m:1,q:'The coefficients of x² and x³ in the expansion of (3 + ax)⁹ are the same. Find a.',a:'9C2 · 3⁷ · a² = 9C3 · 3⁶ · a³. So 36 × 3 = 84a and a = 108/84 = 9/7.'},
 {i:'h4',m:1,q:'Find lim (x^(3/2) − 27)/(x − 9) as x → 9.',a:'Write 27 = 9^(3/2), so this is lim (xⁿ − aⁿ)/(x − a) with n = 3/2 and a = 9.\nIt equals n·aⁿ⁻¹ = (3/2) × 9^(1/2) = (3/2) × 3 = 9/2.'},
 {i:'h5',m:2,q:'Evaluate lim (sin 2x + sin 6x)/(sin 5x − sin 3x) as x → 0.',a:'Numerator = 2 sin 4x cos 2x. Denominator = 2 cos 4x sin x.\nThe ratio is tan 4x cos 2x/sin x. At x = 0 this is 0/0, so continue.\nMultiply and divide by 4x: (tan 4x/4x) × (x/sin x) × 4 × cos 2x → 1 × 1 × 4 × 1 = 4.'},
 {i:'h6',m:3,q:'Evaluate lim (1 + cos 2x)/(π − 2x)² as x → π/2.',a:'1 + cos 2x = 2cos²x. Put y = π/2 − x, so cos x = sin y and (π − 2x)² = 4y².\nThe limit is 2 sin²y/(4y²) = ½ (sin y/y)² → ½.'}]},

{t:'Limits finished, and sequence and series',c:'Limits · Sequence and series',
 why:'Two more limit types (a sum over n²; a limit that does not exist), then the Term II chapter on sequences and series, which the final also covers. The G.P. proof in the half-yearly was left blank: the key is writing the G.P. condition as the middle term squared.',
 rc:['1 + 2 + … + n = n(n + 1)/2; 1² + … + n² = n(n + 1)(2n + 1)/6','For a limit as n → ∞, divide top and bottom by the highest power of n','To show a limit does not exist, find two ways of approaching with different values','A.P.: Tn = a + (n − 1)d, Sn = n/2 [2a + (n − 1)d]','G.P.: Tn = arⁿ⁻¹, Sn = a(rⁿ − 1)/(r − 1), S∞ = a/(1 − r) for |r| < 1','a, b, c in G.P. means b² = ac'],
 q:[
 {i:'j1',m:1,q:'Evaluate lim (1 + 2 + 3 + … + n)/n² as n → ∞.',a:'The top is n(n + 1)/2, so the ratio is (n + 1)/(2n) = ½(1 + 1/n) → ½.'},
 {i:'j2',m:3,q:'Show that lim sin(1/x) as x → 0 does not exist.',a:'Take x = 1/(nπ): sin(nπ) = 0, and these x tend to 0, so this path gives 0.\nTake x = 1/(2nπ + π/2): sin(2nπ + π/2) = 1, and these x also tend to 0, so this path gives 1.\nThe two values differ, so the limit does not exist.'},
 {i:'j3',m:5,q:'If tan((x − y)/2), tan z, tan((x + y)/2) are in G.P., prove that cos x = cos y · cos 2z.',a:'G.P.: tan²z = tan((x − y)/2) tan((x + y)/2).\nUse tan A tan B = [cos(A − B) − cos(A + B)]/[cos(A − B) + cos(A + B)] with A − B = −y and A + B = x: tan²z = (cos y − cos x)/(cos y + cos x).\ncos 2z = (1 − tan²z)/(1 + tan²z) = [(cos y + cos x) − (cos y − cos x)]/[(cos y + cos x) + (cos y − cos x)] = 2cos x/2cos y.\nSo cos x = cos y cos 2z.'},
 {i:'j4',m:2,q:'The sum of the first n terms of a sequence is Sn = 3n² + 2n. Find the nth term.',a:'Tn = Sn − Sn−1 = 3n² + 2n − [3(n − 1)² + 2(n − 1)] = 3(2n − 1) + 2 = 6n − 1.\nCheck: T1 = 5 = S1.'},
 {i:'j5',m:2,q:'Find the sum of 1·2 + 2·3 + 3·4 + … + n(n + 1).',a:'Σ n(n + 1) = Σ n² + Σ n = n(n + 1)(2n + 1)/6 + n(n + 1)/2 = n(n + 1)(2n + 4)/6 = n(n + 1)(n + 2)/3.'},
 {i:'j6',m:2,q:'Three numbers are in A.P. with sum 15 and product 105. Find them.',a:'Take a − d, a, a + d. The sum 3a = 15, so a = 5.\nProduct 5(25 − d²) = 105, so d² = 4 and d = ±2.\nThe numbers are 3, 5, 7.'}]},

{t:'Mixed timed sets',c:'All Term I chapters, plus Term II keep-up',
 why:'Now the work moves from learning to exam conditions. Each day is a short timed set drawn from everything so far, with the “Not yet” questions coming back first. The aim is to finish every question, with the pace card as a guide.',
 rc:['Pace: about 2 minutes per mark, less on one-markers','First line of every answer is the plan','Box the answer in the form asked','One star and move on if stuck for 5 minutes'],q:[]},

{t:'Final stretch',c:'All chapters',
 why:'Same timed sets, with the last two days light. Keep the “Not yet” questions at zero, revise the formula list, and stop new material three days before the exam.',
 rc:['Formula list: trig identities, sum and product, quadratic roots, nCr and nPr, binomial term, standard limits, A.P. and G.P.','Pace card for the 3-hour paper','Check list: sign, units, form of answer, reason for rejected values'],q:[]}
]};
/*PREP: preparation tracker. The 80-mark paper is split into 800 parts (10 per mark), chapter by chapter.
  Each chapter has three levels that match the paper: Level 1 = Section A (one-mark), Level 2 = Sections B and C (2–3 marks),
  Level 3 = Section D (5 marks). A set is 5 questions at the current level; 4 or 5 right moves up a level, 0–1 right moves down.
  Parts covered use the best result at each level; likely marks use the last two sets at each level.
  The student chooses the chapter; the suggested plan only recommends. Skill names only, no personal details. */
(function(){
var CH=[
 ['se','Sets',3,'I'],['rf','Relations and functions',3,'I'],['an','Angles and arc length',3,'I'],['tf','Trigonometric functions',4,'I'],
 ['ca','Compound and multiple angles',5,'I'],['qe','Quadratic equations',4,'I'],['iq','Inequalities',2,'I'],['pc','Permutations and combinations',7,'I'],
 ['bt','Binomial theorem',3,'I'],['lm','Limits',4,'I'],['dv','Differentiation',4,'I'],
 ['cx','Complex numbers',4,'II'],['ss','Sequence and series',6,'II'],['pt','Points and their coordinates',1,'II'],['sl','The straight line',2,'II'],
 ['ci','Circles',5,'II'],['co','Conic sections',8,'II'],['pr','Probability',2,'II'],['d3','Introduction to 3D geometry',4,'II'],['st','Measures of dispersion',6,'II']];
/* chapters not yet taught in class (can be switched on in the app) */
var UNTAUGHT={dv:1,co:1,pr:1,d3:1,st:1};
/* where each chapter's concepts (Concept Builder, CB) and templates (ST) live; k = concept ids, g = template groups */
var MP={se:{c:'se',t:'se'},rf:{c:'rf',t:'rf'},an:{c:'tr',k:['k1']},tf:{c:'tr',k:['k2'],t:'tr',g:[0]},ca:{c:'tr',k:['k3','k4','k5'],t:'tr',g:[1,2]},
 qe:{c:'qe',t:'qe'},iq:{c:'li',t:'li'},pc:{c:'pc',t:'pc'},bt:{c:'bt',t:'bt'},lm:{c:'ld',k:['k1','k2','k3'],t:'ld',g:[0]},dv:{c:'ld',k:['k4','k5'],t:'ld',g:[1]},
 cx:{c:'cx',t:'cx'},ss:{c:'ss',t:'ss'},pt:{c:'sl',k:['k1'],t:'sl',g:[0]},sl:{c:'sl',k:['k2','k3','k4','k5'],t:'sl',g:[1,2]},ci:{c:'ci',t:'ci'},
 co:{c:'cs',t:'cs'},pr:{c:'pr',t:'pr'},d3:{c:'td',t:'td'},st:{c:'st',t:'st'}};
/* worked example types (Cover the base, BX) for each tracker chapter, and the template that fits each one */
var EXM={se:['se'],rf:['rf'],an:['tg1'],tf:['tg2','tg3','tg8','te'],ca:['tg4','tg5','tg6','tg7','tg9'],qe:['qe1','qe2','qe3','qe4','qe6','qe7','qe8','qe9'],iq:['qe5'],pc:['pc'],bt:['bt'],lm:['lm'],dv:['dv'],
 cx:['cx'],ss:['ss'],pt:['pt'],sl:['sl'],ci:['ci'],co:['cs'],pr:['pr'],d3:['td'],st:['md']};
var TPM={cx1:'cx2',cx2:'cx5',cx3:'cx4',cx4:'cx3',cx5:'qe4',cx7:'cx6',ss1:'ss1',ss2:'ss2',ss3:'ss3',ss4:'ss3',ss5:'ss3',ss6:'ss5',ss7:'ss4',pt2:'sl1',pt3:'sl2',pt5:'sl1',
 sl1:'sl3',sl2:'sl3',sl3:'sl4',sl4:'sl5',sl5:'sl4',sl6:'sl3',sl7:'sl6',ci1:'ci3',ci2:'ci2',ci3:'ci1',ci4:'ci1',ci5:'ci4',cs1:'cs1',cs2:'cs4',cs3:'cs2',cs4:'cs4',cs5:'cs3',cs6:'cs4',
 td1:'td1',td2:'td2',td3:'td2',td4:'td1',pr1:'pr3',pr2:'pr4',pr3:'pr1',pr5:'pr3',md1:'st1',md2:'st1',md3:'st2',md4:'st3',md5:'st2',se1:'se2',se3:'se1',se4:'se1',rf1:'rf1',rf2:'rf1',rf5:'rf3',
 tg3:'tr1',tg4:'tr2',tg5:'tr4',tg7:'tr3',tg8:'tr1',te1:'tr5',te2:'tr5',te3:'tr5',te4:'tr5',te5:'tr4',qe1:'qe1',qe2:'qe2',qe3:'qe3',qe8:'qe4',qe9:'qe1',pc1:'pc4',pc3:'pc1',pc4:'pc5',
 bt2:'bt1',bt3:'bt2',bt4:'bt3',lm1:'ld1',lm2:'ld3',lm3:'ld2',lm4:'ld2',lm6:'ld2',dv1:'ld5',dv2:'ld4',dv3:'ld4',dv4:'ld4',dv5:'ld4',dv6:'ld5'};
var TPI={};function tpIdx(){if(TPI._)return TPI;if(typeof ST!=='undefined')ST.forEach(function(c){c.f.forEach(function(f){f[1].forEach(function(x){TPI[x[0]]={id:x[0],c:c.id,n:x[1],w:x[2],st:x[3]||[]}})})});TPI._=1;return TPI}
function nameId(n){var T=tpIdx();for(var k in T)if(k!=='_'&&T[k].n===n)return k;return null}
function exTypes(id){if(typeof BX==='undefined')return[];var L=EXM[id]||[];return BX.filter(function(e){return L.indexOf(e.c)>=0||L.indexOf(e.id)>=0})}
function exDone(id,e){var c=C(id),p=bxParts(e.id);return!!c.em[e.id]&&p.v}
var TPC={an:'ar',tf:'tg',iq:'ie',co:'cs',d3:'td',st:'md'};
function cbc(id){var m=MP[id];if(!m||typeof CB==='undefined')return null;return CB.filter(function(c){return c.id===m.c})[0]||null}
function concepts(id){var c=cbc(id),m=MP[id];if(!c)return[];return c.k.filter(function(k){return!m.k||m.k.indexOf(k.id)>=0})}
function cqs(id){var c=cbc(id),ks={};concepts(id).forEach(function(k){ks[k.id]=1});return c?c.q.filter(function(q){return ks[q.k]}):[]}
function templates(id){var m=MP[id];if(!m||!m.t||typeof ST==='undefined')return[];var c=ST.filter(function(x){return x.id===m.t})[0];if(!c)return[];var L=[];
  c.f.forEach(function(f,gi){if(!m.g||m.g.indexOf(gi)>=0)f[1].forEach(function(x){L.push({id:x[0],n:x[1],w:x[2],st:x[3]||[],ex:[x[4]].concat(x[7]||[]).filter(Boolean)})})});return L}
function sibTpl(id){var m=MP[id]||{},c=typeof ST!=='undefined'&&ST.filter(function(x){return x.id===m.t})[0],L=[];if(c)c.f.forEach(function(f){f[1].forEach(function(x){L.push(x[1])})});var near={dv:'ld',lm:'ld',pt:'sl',sl:'sl',iq:'qe',d3:'sl',st:'pr',pr:'pc',co:'ci',ci:'cs',an:'tr',se:'rf',rf:'se'}[id];if(near&&near!==m.t){var d=ST.filter(function(x){return x.id===near})[0];if(d)d.f.forEach(function(f){f[1].forEach(function(x){if(L.indexOf(x[1])<0)L.push(x[1])})})}return L}
function allTpl(){var L=[];if(typeof ST!=='undefined')ST.forEach(function(c){c.f.forEach(function(f){f[1].forEach(function(x){L.push({id:x[0],n:x[1]})})})});return L}
var STGN=['concepts','templates','prep'],STGL=['Build concepts','Example types with templates','Preparation check'];
function stage(id){var c=C(id);return c.stg||'concepts'}
function cmast(id){var c=C(id),L=concepts(id),n=0;L.forEach(function(k){if((c.ck[k.id]||0)>=2)n++});return{n:n,t:L.length}}
function tmast(id){var L=exTypes(id),n=0;L.forEach(function(e){if(exDone(id,e))n++});return{n:n,t:L.length}}
var SH=[.25,.44,.31],LVN=['Level 1 · one-mark','Level 2 · 2–3 marks','Level 3 · 5 marks'],LVS=['Section A style','Sections B and C style','Section D style'];
var QMAP={a1:'an',a2:'an',a3:'an',a4:'an',b1:'se',b2:'se',b6:'se',b7:'se',b3:'rf',b4:'rf',b5:'rf',c1:'tf',c2:'tf',c3:'tf',c4:'an',c5:'tf',c6:'tf',c7:'tf',
 d1:'ca',d2:'ca',d3:'ca',d4:'ca',d5:'ca',d6:'ca',d7:'ca',e1:'qe',e2:'qe',e3:'ca',e4:'qe',e5:'qe',e6:'qe',e7:'qe',e8:'qe',e9:'qe',
 f1:'iq',f2:'iq',f3:'iq',f4:'iq',f5:'iq',f6:'iq',f7:'iq',f8:'qe',g1:'pc',g2:'pc',g3:'pc',g4:'pc',g5:'pc',g6:'pc',g7:'pc',
 h1:'bt',h2:'bt',h3:'bt',h4:'lm',h5:'lm',h6:'lm',j1:'lm',j2:'lm',j3:'ca',j4:'ss',j5:'ss',j6:'ss'};
/* week -> suggested chapters (week 0 is 20–22 Nov, then weeks start on Mondays from 23 Nov) */
var WCH=[['an'],['se','rf'],['tf','an'],['ca'],['qe'],['iq'],['pc'],['bt','lm'],['lm','ss'],[],[]];
/* ---------- weak spots: from the marked papers; every answer in the tracker is logged against them ---------- */
var WK=[
 ['fin','Finishing the answer in the form asked','Papers: degrees–minutes–seconds left as a decimal (twice), a proof and a sector answer stopped one step early.','Box the answer in the form the question asks; read its last line again before moving on.'],
 ['plan','Choosing the method (planning past step one)','Papers: (α − β)² not used twice, p − α = β missed, the G.P. proof left blank.','Write the plan first: which identity links what is given to what is asked?'],
 ['sign','Signs and copying slips','Papers: 2 − 2αβ copied as 1 − 2αβ, signs lost in angle reductions, n came out −1 instead of 7.','Bracket every negative, one move per line, check with x = 1 or a quick value.'],
 ['ineq','Inequalities and modulus: cases and direction','Papers: |x + 2|/x not split into cases; the sign not turned after multiplying by −1.','Split a modulus into cases; turn the sign round when multiplying by a negative.'],
 ['ally','Allied angles: sign, name, every angle','Papers: 510° missed in 0°–720°; signs lost in long reductions.','Quadrant first for the sign; list every angle in the range asked.'],
 ['sets','Sets and relations: proofs and symbols','Papers: Venn diagram used as a proof; ∈ and ⊂ mixed up; relations counted wrongly.','Prove with A − B = A ∩ B′ on each side; 2^(mn) relations; ∈ for elements, ⊂ for sets.'],
 ['pnc','Order or no order (P or C)','Papers: a committee counted with permutations; empty boxes not taken away.','Before every count, ask: does order matter?'],
 ['lim','Limits: 0/0 is not 0','Papers: 0/0 written as 0 in two limits.','0/0 means rewrite: factorise, rationalise or use a standard limit.'],
 ['blank','Leaving questions blank','Papers: about 18 marks never attempted in the half-yearly.','Stuck for 5 minutes? Write the first line, star it, move on, come back.']];
function wk(k){return WK.filter(function(w){return w[0]===k})[0]}
var CHW={se:['sets'],rf:['sets'],an:['fin'],tf:['ally'],ca:['plan','sign'],qe:['plan'],iq:['ineq'],pc:['pnc'],bt:['sign'],lm:['lim'],dv:['sign'],cx:['sign'],ss:['plan'],pt:['fin'],sl:['sign'],ci:['plan'],co:['fin'],pr:['pnc'],d3:['sign'],st:['fin']};
var QW={a1:['fin'],a2:['fin'],a3:['fin','plan'],a4:['fin'],b1:['sets'],b2:['sets'],b3:['sets'],b5:['fin'],b6:['sets'],b7:['sets'],c1:['ally','sign'],c2:['ally'],c4:['fin'],c5:['ally'],c6:['ally','sign'],c7:['ally'],
 d2:['plan'],d3:['plan'],d4:['fin'],d7:['plan'],e1:['plan'],e2:['plan'],e3:['plan'],e4:['sign'],e5:['plan'],e7:['plan'],e8:['plan'],e9:['plan'],f1:['ineq'],f2:['ineq','sign'],f3:['ineq'],f4:['ineq'],f5:['ineq'],f6:['ineq'],f7:['ineq'],f8:['ineq'],
 g2:['pnc'],g3:['pnc'],g4:['pnc'],g6:['pnc'],h2:['sign'],h3:['sign'],h4:['lim'],h5:['lim'],h6:['lim'],j1:['lim'],j2:['lim'],j3:['plan']};
var REAS=[['sign','A sign or copying slip'],['fin','Did not finish'],['plan','Chose the wrong method'],['ineq','Missed a case or the sign turn'],['blank','Could not start'],['idea','Forgot a formula or idea']];
function WL(){var p=P();if(!p.wl)p.wl=[];return p.wl}
function wlog(w,v,ch){if(!wk(w))return;WL().push({w:w,v:v,c:ch,t:Date.now()});if(WL().length>600)P().wl=WL().slice(-600)}
function wtrend(w){var L=WL().filter(function(x){return x.w===w}),n=L.length;if(n<4)return{n:n,st:'new',lbl:n?'Not enough practice yet ('+n+')':'Not practised yet'};
  var k=Math.min(8,Math.floor(n/2)),rec=L.slice(-k),old=L.slice(-2*k,-k),a=function(A){var t=0;A.forEach(function(x){t+=x.v});return t/A.length},ra=a(rec),oa=a(old),d=ra-oa;
  var st=d>=.15||(ra>=.85&&oa>=.85)?'down':d<=-.15?'up':'same';
  return{n:n,ra:ra,oa:oa,st:st,lbl:st==='down'?(ra>=.85?'Under control':'Getting smaller'):st==='up'?'Getting bigger':ra<.5?'Still weak':ra>=.85?'Under control':'About the same',weak:st==='same'&&ra<.5}}
function wPill(t){var c=t.st==='down'?'ok':t.st==='up'||t.weak?'bad':t.st==='same'?'mid':'';var ar=t.st==='down'?'▼ ':t.st==='up'?'▲ ':'';return'<span class="pill '+c+'">'+ar+esc(t.lbl)+'</span>'}
function wRank(ch){var L=(ch?CHW[ch]||[]:[]).concat(WK.map(function(w){return w[0]}));var seen={},out=[];L.forEach(function(k){if(seen[k])return;seen[k]=1;var t=wtrend(k);out.push({k:k,t:t,sc:t.st==='up'?3:t.ra!=null&&t.ra<.6?2:t.st==='new'?1:0})});return out.sort(function(a,b){return b.sc-a.sc})}
function qTags(q,ch){return(q.w&&q.w.length?q.w:QW[(q.id||'').replace('pl_','')]||CHW[ch]||[]).filter(function(k){return!!wk(k)})}
window.WKS=WK;window.wtrend=wtrend;
var BANK=[];PLN.W.forEach(function(w){w.q.forEach(function(q){var c=QMAP[q.i];if(c)BANK.push({id:'pl_'+q.i,c:c,lv:q.m>=5?3:q.m>=2?2:1,q:q.q,ans:q.a,m:q.m,w:QW[q.i]||null})})});
function cw(id){return CH.filter(function(c){return c[0]===id})[0]}
function P(){if(!S.prep)S.prep={ch:{},day:{}};if(!S.prep.ch)S.prep.ch={};if(!S.prep.day)S.prep.day={};return S.prep}
function C(id){var p=P();if(!p.ch[id])p.ch[id]={lv:1,best:[0,0,0],sets:[],miss:[],seen:[]};var c=p.ch[id];['best','sets','miss','seen'].forEach(function(k){if(!c[k])c[k]=k==='best'?[0,0,0]:[]});['ck','tk','cs','ts','em'].forEach(function(k){if(!c[k])c[k]={}});return c}
function taught(id){var c=(P().ch[id]||{});return c.tau!=null?!!c.tau:!UNTAUGHT[id]}
function recent(id,l){var s=C(id).sets.filter(function(x){return x.lv===l}).slice(-2);if(!s.length)return null;var t=0;s.forEach(function(x){t+=x.sc/x.n});return t/s.length}
function units(id){var c=C(id),w=cw(id)[2],u=0;for(var l=0;l<3;l++)u+=SH[l]*c.best[l];return Math.round(10*w*u*10)/10}
function likely(id){var w=cw(id)[2],e=0,any=false;for(var l=0;l<3;l++){var r=recent(id,l+1);if(r!=null)any=true;e+=SH[l]*(r==null?0:r)}return any?Math.round(w*e*10)/10:null}
function tot(){var u=0,e=0,tm=0;CH.forEach(function(c){u+=units(c[0]);var k=likely(c[0]);if(k!=null)e+=k;if(taught(c[0]))tm+=c[2]});return{u:Math.round(u),e:Math.round(e*10)/10,tm:tm}}
function today(){return dayKey(Date.now())}
function dayRec(){var d=P().day,k=today();if(!d[k])d[k]={sets:0,min:0};return d[k]}
function weekIx(){var t=new Date(),s=new Date(2026,10,23);if(t<s)return 0;var w=1+Math.floor((t-s)/(7*864e5));return Math.min(w,PLN.W.length-1)}
function daysLeft(){var f=PLN.final,e=new Date(f[0],f[1],f[2]);return Math.max(0,Math.ceil((e-new Date())/864e5))}
function suggest(){var w=weekIx(),L=WCH[w].filter(taught);
  if(!L.length){L=CH.filter(function(c){return taught(c[0])}).map(function(c){return c[0]}).sort(function(a,b){return(units(a)/cw(a)[2])-(units(b)/cw(b)[2])||cw(b)[2]-cw(a)[2]}).slice(0,2)}
  return L.sort(function(a,b){return units(a)/cw(a)[2]-units(b)/cw(b)[2]})[0]}
function br(s){return esc(s).replace(/\n/g,'<br>')}
var V={v:'home'},GEN=false;window.prepState=function(){return V};
/* ---------- the 800-part grid ---------- */
var COL=['#3b5bdb','#2b8a3e','#e8590c','#9c36b5','#0c8599','#c2255c','#5c940d','#1971c2','#f08c00','#6741d9'];
function grid(){var h='<div class="pg8" aria-hidden="true">';CH.forEach(function(c,i){var n=c[2]*10,on=Math.round(units(c[0])),t=taught(c[0]);for(var j=0;j<n;j++)h+='<i style="--c:'+COL[i%COL.length]+'" class="'+(j<on?'on':'')+(t?'':' nt')+'"></i>'});return h+'</div>'}
function card(){var T=tot(),s=suggest(),d=dayRec();
  return'<div class="card hi prepc"><div class="eyebrow">Preparation · maths final</div><div class="pghd"><div><b class="pgbig">'+T.u+'</b> <span class="sub">of 800 parts covered</span></div><div style="text-align:right"><b>'+T.e+'</b> <span class="sub">of 80 likely</span></div></div>'+
   '<div class="pbar"><i style="width:'+(T.u/8)+'%"></i></div><p class="sub" style="margin:6px 0 0">'+daysLeft()+' days to the final · today '+d.sets+' set'+(d.sets===1?'':'s')+', '+Math.round(d.min)+' of 40 min</p>'+
   '<div class="row2"><button class="btn" onclick="prepGo(\''+s+'\')">Suggested: '+esc(cw(s)[1])+'</button><button class="btn alt" onclick="prepOpen()">Choose a chapter</button></div></div>'}
window.prepCard=card;
window.prepOpen=function(){V={v:'home'};goView('prep')};
window.prepGo=function(id){V={v:'ch',id:id};if(view!=='prep')goView('prep');else{render();window.scrollTo(0,0)}};
function home(){var T=tot(),s=suggest(),w=PLN.W[weekIx()],d=dayRec();
  var h='<h1>Final exam: '+daysLeft()+' days to go</h1><p class="sub">Which chapter today? Each chapter goes in three steps: build the concepts, work every example type with its template, then the preparation check.</p>';
  h+='<div class="card hi"><div class="eyebrow">Choose a chapter</div><div class="pchips">'+CH.map(function(c){var sg=stage(c[0]),n=STGN.indexOf(sg)+1;return'<button onclick="prepGo(\''+c[0]+'\')"'+(c[0]===s?' class="sug"':'')+'><b>'+esc(c[1])+'</b><small>Step '+n+(c[0]===s?' · suggested':'')+'</small></button>'}).join('')+'</div></div>';
  h+='<div class="card hi"><div class="pghd"><div><b class="pgbig">'+T.u+'</b> <span class="sub">of 800 parts covered</span></div><div style="text-align:right"><b class="pgbig">'+T.e+'</b> <span class="sub">of 80 likely</span></div></div>'+grid()+
   '<p class="sub" style="margin:8px 0 0">Each square is a tenth of a mark, filled by the preparation check. Pale squares are chapters not taught in class yet ('+(80-T.tm)+' marks): learn them first with steps 1 and 2. Likely marks come from your last two sets at each level.</p>'+
   '<p class="sub" style="margin:4px 0 0"><b>Today:</b> '+d.sets+' set'+(d.sets===1?'':'s')+', '+Math.round(d.min)+' of 40 minutes · '+daysLeft()+' days to go</p></div>';
  h+='<div class="card"><div class="eyebrow">This week’s suggestion</div><p style="margin:4px 0 2px"><b>'+esc(w.t)+'</b></p><p class="sub" style="margin:0 0 6px">'+esc(w.why)+'</p><button class="btn" onclick="prepGo(\''+s+'\')">Start: '+esc(cw(s)[1])+'</button><button class="btn alt" onclick="prepPlan()">The whole plan and exam rules</button><button class="btn alt" onclick="chGallery()">Meet the template characters</button></div>';
  h+=wCard(null);
  var LA=CH.filter(function(c){return stage(c[0])!=='prep'});if(LA.length)h+='<div class="card"><div class="eyebrow">Learn first</div><p class="sub" style="margin:4px 0 6px">Build the concepts, then work every example type with its template. The preparation check comes after.</p>'+LA.map(function(c){var sg=stage(c[0]),m=sg==='concepts'?cmast(c[0]):tmast(c[0]);return'<button class="trow" onclick="prepGo(\''+c[0]+'\')"><span class="tn">'+(sg==='concepts'?'1':'2')+'</span><span class="tt"><b>'+esc(c[1])+'</b><small>'+(sg==='concepts'?'Build concepts':'Match templates')+' · '+m.n+' of '+m.t+' secure</small></span></button>'}).join('')+'</div>';
  ['I','II'].forEach(function(t){h+='<div class="card"><b>Term '+t+' chapters</b>';
    CH.filter(function(c){return c[3]===t}).forEach(function(c){var id=c[0],u=units(id),k=likely(id),cc=C(id),on=taught(id),pc=Math.round(u/(c[2]*10)*100);
      var sg=stage(id),sub=sg==='prep'?'Level '+cc.lv+' · '+u+' of '+c[2]*10+' parts'+(k!=null?' · likely '+k+' of '+c[2]:''):(sg==='concepts'?(function(){var m=cmast(id);return'Learning · concepts '+m.n+' of '+m.t}()):(function(){var m=tmast(id);return'Learning · example types '+m.n+' of '+m.t}()))+(on?'':' · not taught in class yet');
      h+='<button class="prow'+(sg==='prep'?'':' lrn')+'" onclick="prepGo(\''+id+'\')"><span class="prt"><b>'+esc(c[1])+'</b><small>'+sub+'</small></span><span class="prp">'+(sg==='prep'?pc+'%':'<span class="pill st">'+(sg==='concepts'?'Step 1':'Step 2')+'</span>')+'</span><span class="pbar sm"><i style="width:'+pc+'%"></i></span></button>'});
    h+='</div>'});
  app.innerHTML=h}
function wCard(ch){var R=ch?(CHW[ch]||[]).map(function(k){return{k:k,t:wtrend(k)}}):WK.map(function(w){return{k:w[0],t:wtrend(w[0])}});if(!R.length)return'';
  var up=R.filter(function(x){return x.t.st==='up'}).length,dn=R.filter(function(x){return x.t.st==='down'}).length;
  return'<div class="card"><div class="eyebrow">'+(ch?'Weak spots this chapter works on':'Weak spots from the papers')+'</div><p class="sub" style="margin:4px 0 6px">'+(ch?'Questions here are chosen to work on these.':'Every answer in the tracker counts towards these. Last 8 answers compared with the 8 before.')+(up||dn?' '+(dn?dn+' getting smaller':'')+(up&&dn?', ':'')+(up?up+' getting bigger':'')+'.':'')+'</p>'+
   R.map(function(x){var w=wk(x.k),t=x.t;return'<details class="wrow2"><summary><span><b>'+esc(w[1])+'</b><small>'+(t.ra!=null?'Recent '+Math.round(t.ra*100)+'% right · before '+Math.round(t.oa*100)+'%':'')+'</small></span>'+wPill(t)+'</summary><p class="sub" style="margin:4px 0 0">'+esc(w[2])+'</p><p style="margin:4px 0 0"><b>Fix:</b> '+esc(w[3])+'</p></details>'}).join('')+'</div>'}
function steps(id){var sg=stage(id),cm=cmast(id),tm=tmast(id),ix=STGN.indexOf(sg);
  return'<div class="pstp">'+STGN.map(function(k,i){var d=i<ix,cur=i===ix,sm=i===0?cm.n+' of '+cm.t+' concepts':i===1?(tm.t?tm.n+' of '+tm.t+' types':'none in this chapter'):'3 levels';
    return'<button class="'+(cur?'cur':d?'done':'')+'" onclick="prepStg(\''+id+'\',\''+k+'\')"><b>'+(d?'✓ ':(i+1)+'. ')+STGL[i]+'</b><small>'+sm+'</small></button>'}).join('')+'</div>'}
window.prepStg=function(id,k){C(id).stg=k;save();render()};
function chView(id){var c=cw(id),cc=C(id),on=taught(id),u=units(id),k=likely(id),sg=stage(id),m=MP[id]||{};
  var h='<p class="back"><button class="link" onclick="prepOpen()">← Preparation tracker</button></p><h1>'+esc(c[1])+'</h1><p class="sub">Term '+c[3]+' · about '+c[2]+' of the 80 marks · '+c[2]*10+' parts'+(on?'':' · not taught in class yet')+'</p>';
  h+=steps(id);
  if(sg==='concepts'){var L=concepts(id),cm=cmast(id);
    h+='<div class="card hi"><b>Step 1 · Build concepts</b><p class="sub" style="margin:4px 0 8px">Each idea the chapter rests on, one at a time. Read the idea, answer a question on it, then read why the answer is right. An idea is secure after 2 right in a row.</p>'+
     L.map(function(x){var v=cc.ck[x.id]||0;return'<div class="pcn"><span class="pdots"><i class="'+(v>=1?'on':'')+'"></i><i class="'+(v>=2?'on':'')+'"></i></span><div><b>'+esc(x.n)+'</b><small>'+esc(x.s||'')+'</small></div></div>'}).join('')+
     '<button class="btn" id="prSet" onclick="prepLearn(\''+id+'\',\'c\')">Next set: 5 concept questions</button><p class="sub" id="prMsg" style="margin:6px 0 0"></p>'+
     (m.c&&typeof TH!=='undefined'&&TH[m.c]?'<button class="btn alt" onclick="thOpen(\''+m.c+'\')">Read the theory first</button>':'')+
     '<button class="btn alt chatb" onclick="prepTeach(\''+id+'\')">Ask Claude to teach these ideas</button>'+
     '<p class="sub" style="margin:8px 0 0">'+cm.n+' of '+cm.t+' secure. When all are secure, step 2 opens.</p></div>'}
  else if(sg==='templates'){var E=exTypes(id),tm=tmast(id),nx=E.filter(function(e){return!exDone(id,e)})[0];
    h+='<div class="card hi"><b>Step 2 · Example types with templates</b><p class="sub" style="margin:4px 0 8px">Every kind of worked example in the chapter. For each one: first spot which template fits, then solve it with the template, using hints only when stuck. A type is done when its template is matched and it is solved.</p>'+
     (nx?'<button class="btn" onclick="prepEx(\''+id+'\',\''+nx.id+'\')">Next: '+esc(nx.t)+'</button>':'<p style="margin:0"><b>All example types done.</b></p>')+'<p class="sub" style="margin:8px 0 4px">'+tm.n+' of '+tm.t+' done. When all are done, the preparation check opens.</p>'+
     E.map(function(e){var mt=C(id).em[e.id],p=bxParts(e.id);return'<button class="pex" onclick="prepEx(\''+id+'\',\''+e.id+'\')"><span class="pdots"><i class="'+(mt?'on':'')+'" title="Template">T</i></span>'+partsDots(e.id)+'<span>'+esc(e.t)+'</span></button>'}).join('')+
     '<p class="sub" style="margin:8px 0 0">T = template matched · U = understood · S = solved · P = practised</p></div>'}
  else{
  h+='<div class="card hi"><b>Step 3 · Preparation check</b><div class="pghd"><div><b class="pgbig">'+u+'</b> <span class="sub">of '+c[2]*10+' parts</span></div><div style="text-align:right"><b class="pgbig">'+(k==null?'–':k)+'</b> <span class="sub">of '+c[2]+' likely</span></div></div>'+
   '<div class="plv">'+[1,2,3].map(function(l){var b=cc.best[l-1],r=recent(id,l);return'<div class="'+(cc.lv===l?'cur':'')+'"><b>'+LVN[l-1]+'</b><span class="pbar sm"><i style="width:'+Math.round(b*100)+'%"></i></span><small>'+(b>=1?'Passed':'Best '+Math.round(b*100)+'%')+(r!=null?' · recent '+Math.round(r*100)+'%':'')+'</small></div>'}).join('')+'</div>'+
   '<button class="btn" id="prSet" onclick="prepSet(\''+id+'\')">Next set: 5 questions at level '+cc.lv+'</button><p class="sub" id="prMsg" style="margin:6px 0 0"></p>'+
   '<p class="sub" style="margin:6px 0 0">4 or 5 right moves you up a level. 0 or 1 right takes you back one, to firm up the basics.</p></div>';
  if(cc.sets.length){h+='<div class="card"><b>Your sets</b>'+cc.sets.slice(-6).reverse().map(function(s){return'<div class="tbar"><span>'+new Date(s.ts).toLocaleDateString(undefined,{day:'numeric',month:'short'})+' · level '+s.lv+'</span><b>'+s.sc+'/'+s.n+'</b></div>'}).join('')+'</div>'}
  if(cc.miss.length)h+='<div class="card"><b>Not yet</b> <span class="sub">(these come back in the next sets)</span><ul style="margin:6px 0 0;padding-left:1.2em">'+cc.miss.slice(-5).map(function(m){return'<li style="margin:4px 0">'+br(m)+'</li>'}).join('')+'</ul></div>';
  h+='<div class="card"><b>Level reset</b><p class="sub" style="margin:4px 0 6px">Choose a level by hand if the automatic one does not fit.</p><div class="bgset">'+[1,2,3].map(function(l){return'<button class="chipb'+(cc.lv===l?' on':'')+'" onclick="prepLv(\''+id+'\','+l+')">Level '+l+'</button>'}).join('')+'</div></div>'}
  h+=wCard(id);
  h+='<div class="card"><b>Questions and answers from the tutor</b><p class="sub" style="margin:4px 0 6px">A full question paper on this chapter, covering every example type, with a separate answer key.</p><button class="btn alt" onclick="prepTutor(\''+id+'\')">Open the tutor set for this chapter</button></div>';
  h+='<div class="card"><b>Taught in class?</b><p class="sub" style="margin:4px 0 6px">'+(on?'Marked as taught.':'Marked as not taught yet: the chapter starts with steps 1 and 2.')+'</p><button class="link" onclick="prepTau(\''+id+'\','+(on?0:1)+')">'+(on?'Not taught yet after all':'It has been taught in class')+'</button></div>';
  app.innerHTML=h}
window.prepEx=function(id,eid){var e=BX.filter(function(x){return x.id===eid})[0];if(!e)return;
  if(C(id).em[eid]){prepSolve(id,eid);return}
  var T=tpIdx(),tp=T[TPM[eid]],o,a,kind;
  if(tp){var near=Object.keys(T).filter(function(k){return k!=='_'&&T[k].c===tp.c&&k!==tp.id}).map(function(k){return T[k].n}),sib=sibTpl(id).filter(function(n){return n!==tp.n&&near.indexOf(n)<0});
    var oth=shf(near).concat(shf(sib)).slice(0,3);o=shf([tp.n].concat(oth));a=o.indexOf(tp.n);kind='Which character (template) fits this question?'}
  else{var oth2=shf(exTypes(id).filter(function(x){return x.id!==eid}).map(function(x){return x.t})).slice(0,3);if(oth2.length<1){C(id).em[eid]=1;save();prepSolve(id,eid);return}o=shf([e.t].concat(oth2));a=o.indexOf(e.t);kind='What type of question is this?'}
  V={v:'em',id:id,e:e,tp:tp,o:o,a:a,kind:kind,pick:null};render();window.scrollTo(0,0)};
function emView(){var Z=V,c=cw(Z.id),e=Z.e,tp=Z.tp;
  var h='<p class="back"><button class="link" onclick="prepGo(\''+Z.id+'\')">← '+esc(c[1])+'</button></p><div class="meta"><span>'+esc(c[1])+' · Step 2 · example types with templates</span></div>';
  h+='<div class="card"><p class="sub" style="margin:0 0 6px">Do not solve it yet. '+esc(Z.kind)+'</p><div class="qt" style="font-size:1.05rem">'+br(e.q)+'</div><div style="margin-top:10px">'+
   Z.o.map(function(x,i){var cls=Z.pick==null?'':i===Z.a?' ok':i===Z.pick?' bad':'',tid=nameId(x),cn=tid&&window.chName?chName(tid):'';return'<button class="opt chopt'+cls+'" '+(Z.pick!=null?'disabled':'')+' onclick="prepEm('+i+')">'+(cn&&window.chSvg?chSvg(tid,40):'')+'<span>'+(cn?'<b>'+esc(cn)+'</b><br>':'')+esc(x)+'</span></button>'}).join('')+'</div>';
  if(Z.pick!=null){var ok=Z.pick===Z.a;
    h+=(tp&&window.chBlock?chBlock(tp.id,1):'')+'<div class="fb '+(ok?'ok':'bad')+'" style="margin-top:10px"><b>'+(ok?'Right.':'Not this time.')+'</b> '+(tp?'Template: '+esc(tp.n)+'. When it fits: '+esc(tp.w)+(tp.st.length?'<div style="margin-top:6px">'+tp.st.map(function(x,i){return'<b>'+(typeof STG!=='undefined'&&STG[i]?STG[i]:'Step '+(i+1))+':</b> '+esc(x)}).join('<br>')+'</div>':''):'This is: '+esc(e.t)+'.')+'</div>';
    h+=(ok?'<button class="btn" onclick="prepSolve(\''+Z.id+'\',\''+e.id+'\')">Now solve it with the template</button>':'<button class="btn" onclick="prepEx(\''+Z.id+'\',\''+e.id+'\')">Try the match again</button><button class="btn alt" onclick="prepSolve(\''+Z.id+'\',\''+e.id+'\')">Solve it anyway</button>')+
     (tp?'<button class="btn alt" onclick="tlOpen(\''+tp.c+'\',\''+tp.id+'\')">Open the template with a worked example</button>':'')}
  h+='</div>';app.innerHTML=h}
window.prepEm=function(i){var Z=V;Z.pick=i;var cc=C(Z.id);wlog('plan',i===Z.a?1:0,Z.id);if(i===Z.a)cc.em[Z.e.id]=1;else try{mkAdd({src:'Preparation tracker',topic:cw(Z.id)[1],q:'Which template fits?\n'+Z.e.q,o:Z.o,a:Z.a,pick:i,habit:'',h:Z.tp?Z.tp.w:Z.e.t,ref:'prepem:'+Z.e.id})}catch(e){}save();render()};
window.prepSolve=function(id,eid){var e=BX.filter(function(x){return x.id===eid})[0];if(!e)return;P().ret=id;save();baseGo(e)};
window.prepBack=function(){var id=P().ret;P().ret=null;save();if(id){var m=tmast(id);if(stage(id)==='templates'&&m.t&&m.n>=m.t){C(id).stg='prep';save();try{showToast('Every example type is done. The preparation check is open.')}catch(e){}}prepGo(id)}else prepOpen()};
window.prepTeach=function(id){var L=concepts(id);openChat(chatHead()+'I have not learnt the chapter "'+cw(id)[1]+'" in class yet. Teach me its main ideas one at a time, starting from what I already know, with a short example for each, and check my understanding with a question before moving on:\n- '+L.map(function(k){return k.n+': '+(k.s||'')}).join('\n- '))};
/* ---------- learning sets: concepts (c) and template matching (t) ---------- */
function shf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function conceptItems(id){var cc=C(id),ks={};concepts(id).forEach(function(k){ks[k.id]=k});
  var L=cqs(id).filter(function(q){return(cc.ck[q.k]||0)<2});if(!L.length)L=cqs(id);
  var un=L.filter(function(q){return!cc.cs[q.id]}),rp=L.filter(function(q){return cc.cs[q.id]}).sort(function(a,b){return(cc.cs[a.id]||0)-(cc.cs[b.id]||0)});
  /* spread over concepts: one per concept first */
  var pick=[],used={};shf(un).forEach(function(q){if(pick.length<5&&!used[q.k]){pick.push(q);used[q.k]=1}});
  un.concat(rp).forEach(function(q){if(pick.length<5&&pick.indexOf(q)<0)pick.push(q)});
  return pick.map(function(q){var k=ks[q.k]||{};return{id:q.id,kind:'c',kc:q.k,note:(k.n||'')+(k.s?': '+k.s:''),q:q.q,o:q.o.slice(),a:q.a,trap:q.t||[],ans:(q.s||[]).join('\n'),m:1}})}
function tplItems(id){var cc=C(id),T=templates(id),all=allTpl(),items=[];
  var open=T.filter(function(t){return(cc.tk[t.id]||0)<2});if(!open.length)open=T;
  open.forEach(function(t){t.ex.forEach(function(q,j){items.push({t:t,q:q,key:t.id+'#'+j})})});
  var un=shf(items.filter(function(x){return!cc.ts[x.key]})),rp=items.filter(function(x){return cc.ts[x.key]}).sort(function(a,b){return cc.ts[a.key]-cc.ts[b.key]});
  var pick=[],used={};un.forEach(function(x){if(pick.length<5&&!used[x.t.id]){pick.push(x);used[x.t.id]=1}});un.concat(rp).forEach(function(x){if(pick.length<5&&pick.indexOf(x)<0)pick.push(x)});
  return pick.map(function(x){var others=shf(T.filter(function(t){return t.id!==x.t.id}).map(function(t){return t.n}));
    if(others.length<3){var sib=sibTpl(id).filter(function(n){return n!==x.t.n&&others.indexOf(n)<0});others=others.concat(shf(sib)).slice(0,3)}
    if(others.length<3)others=others.concat(shf(all.filter(function(t){return t.n!==x.t.n&&others.indexOf(t.n)<0}).map(function(t){return t.n})).slice(0,3-others.length));
    var o=shf([x.t.n].concat(others.slice(0,3)));
    return{id:x.key,kind:'t',tp:x.t.id,stid:(MP[id]||{}).t,q:'Which template fits this question?\n\n'+x.q,o:o,a:o.indexOf(x.t.n),ans:'Template: '+x.t.n+'\nWhen it fits: '+x.t.w+'\n'+x.t.st.map(function(s,i){return(typeof STG!=='undefined'&&STG[i]?STG[i]:'Step '+(i+1))+': '+s}).join('\n'),m:1}})}
window.prepLearn=function(id,kd){var qs=kd==='c'?conceptItems(id):tplItems(id);
  if(!qs.length){showToast(kd==='c'?'No concept questions for this chapter yet.':'No templates for this chapter: moving on.');if(kd==='t'){C(id).stg='prep';save();render()}return}
  V={v:'set',id:id,kd:kd,lv:0,qs:qs,i:0,r:[],t0:Date.now(),show:false,pick:null};render();window.scrollTo(0,0)};
function finishLearn(){var Z=V,cc=C(Z.id),sc=0,kd=Z.kd,M=kd==='c'?cc.ck:cc.tk,WS=wSet(Z);
  Z.qs.forEach(function(q,i){var ok=(Z.r[i]||0)>=1,key=kd==='c'?q.kc:q.tp;sc+=ok?1:0;M[key]=ok?Math.min(2,(M[key]||0)+1):0;(kd==='c'?cc.cs:cc.ts)[q.id]=Date.now()});
  var m=kd==='c'?cmast(Z.id):tmast(Z.id),done=m.t&&m.n>=m.t,msg;
  if(done){if(kd==='c'){cc.stg=exTypes(Z.id).length?'templates':'prep';msg='All '+m.t+' concepts are secure. '+(cc.stg==='templates'?'Step 2 is open: every example type, matched with its template.':'The preparation check is open.')}else{cc.stg='prep';msg='All '+m.t+' templates are secure. The preparation check is open: level 1 first.'}}
  else msg=m.n+' of '+m.t+' '+(kd==='c'?'concepts':'templates')+' secure. 2 right in a row secures one.';
  try{Z.qs.forEach(function(q,i){if((Z.r[i]||0)<1)mkAdd({src:'Preparation tracker',topic:cw(Z.id)[1],q:q.q,o:q.o,a:q.a,pick:null,habit:'',h:q.ans,ref:'prep:'+q.id})})}catch(e){}
  var d=dayRec();d.sets++;d.min+=Math.min(30,(Date.now()-Z.t0)/6e4);save();
  var h='<p class="back"><button class="link" onclick="prepGo(\''+Z.id+'\')">← '+esc(cw(Z.id)[1])+'</button></p><h1>Set done: '+sc+' of '+Z.qs.length+'</h1><div class="card hi"><p style="margin:0"><b>'+esc(msg)+'</b></p><p class="sub" style="margin:6px 0 0">Today: '+Math.round(d.min)+' of 40 minutes.</p>'+
   '<button class="btn" onclick="prepGo(\''+Z.id+'\')">Back to the chapter</button><button class="btn alt" onclick="prepOpen()">Choose another chapter</button></div>'+WS;
  V={v:'ch',id:Z.id};app.innerHTML=h;window.scrollTo(0,0);try{if(done)fxSoon('Step complete: reward unlocked')}catch(e){}}
window.prepTutor=function(id){goView('tp');try{tpOpen(TPC[id]||id)}catch(e){}};
window.prepTau=function(id,v){C(id).tau=!!v;save();render()};
window.prepLv=function(id,l){C(id).lv=l;save();render()};
/* ---------- a set of five ---------- */
function lvDesc(l){return l===1?'one-mark questions like Section A: multiple choice with four options, assertion–reason, statement I/II, or a one-line answer':l===2?'2- and 3-mark short answers like Sections B and C, each needing 2 to 4 lines of working':'5-mark long answers like Section D, each needing a full plan and 5 or more steps'}
async function genQs(id,l,n,cc){var s=await getS();if(!s)throw{msg:'New questions need Claude. Open the app while signed in to claude.ai.'};
  var c=cw(id),p='You are an experienced ISC Class 11 mathematics teacher. Write '+n+' new practice questions on the chapter "'+c[1]+'" for a student preparing for the school final exam (80 marks, CISCE specimen pattern).\n'+
   'Level: '+lvDesc(l)+'.\n'+(cc.miss.length?'The student recently got these wrong. Include at least two questions that test the same ideas with fresh numbers:\n- '+cc.miss.slice(-4).join('\n- ')+'\n':'')+
   (function(){var R=wRank(id).filter(function(x){return x.sc>0}).slice(0,2);return R.length?'The student is working on these weak spots. Make at least two questions that test them directly, and keep the worked answer explicit about each one:\n- '+R.map(function(x){return wk(x.k)[1]+' ('+wk(x.k)[2]+')'}).join('\n- ')+'\n':''}())+
   (cc.seen.length?'Do not repeat any of these:\n- '+cc.seen.slice(-12).map(function(x){return x.slice(0,120)}).join('\n- ')+'\n':'')+
   'Mix easier and harder within the level. Use plain Unicode maths (x², √, π, θ, ≤), no LaTeX. Work every answer out carefully and check it before writing.\n'+
   'Return JSON only: {"qs":[{"q":"question text","o":["option A","option B","option C","option D"],"a":0,"ans":"worked answer, one step per line, final answer on the last line","m":1,"w":["sign"]}]}. '+
   '"w" lists which of these weak-spot keys the question tests (0 to 2): '+WK.map(function(w){return w[0]+' = '+w[1]}).join('; ')+'. '+
   'Include "o" and "a" (index of the right option) only for multiple-choice questions; leave them out for written answers. "m" is the marks (1, 2, 3 or 5).';
  var d=await s.json(p,{cache:false,modelTier:'default'});if(!d||!d.qs||!d.qs.length)throw{msg:'That came back in the wrong shape. Try again.'};
  return d.qs.slice(0,n).filter(function(x){return x&&x.q&&x.ans}).map(function(x,i){var o=Array.isArray(x.o)&&x.o.length>=2&&typeof x.a==='number'&&x.o[x.a]!=null?x.o.map(String):null;return{id:'gen'+Date.now()+i,q:String(x.q),o:o,a:o?x.a:null,ans:String(x.ans),m:+x.m||(l===1?1:l===2?3:5),w:Array.isArray(x.w)?x.w.map(String).filter(function(k){return!!wk(k)}).slice(0,2):null}})}
window.prepSet=async function(id){if(GEN)return;var cc=C(id),l=cc.lv,b=document.getElementById('prSet'),m=document.getElementById('prMsg');
  var seen={};cc.seen.forEach(function(x){seen[x]=1});var pri={};wRank(id).forEach(function(x){pri[x.k]=x.sc});var own=BANK.filter(function(q){return q.c===id&&q.lv===l&&!seen[q.q]}).sort(function(a,b){var f=function(q){var m=0;(q.w||[]).forEach(function(k){m=Math.max(m,pri[k]||0)});return m};return f(b)-f(a)}).slice(0,5),qs=own.map(function(q){return{id:q.id,q:q.q,ans:q.ans,m:q.m,o:null,w:q.w}});
  if(qs.length<5){GEN=true;if(b)b.disabled=true;if(m)m.textContent='Claude is writing questions at level '+l+'…';
    try{qs=qs.concat(await genQs(id,l,5-qs.length,cc))}catch(e){var em=e&&e.msg?e.msg:e&&e.code?sampleErr(e):'Could not get new questions. Try again.';if(m)m.textContent=em;if(!qs.length){GEN=false;if(b)b.disabled=false;return}try{showToast('Only '+qs.length+' saved question'+(qs.length>1?'s':'')+' this time. '+em)}catch(_){}}
    GEN=false}
  V={v:'set',id:id,kd:null,lv:l,qs:qs,i:0,r:[],t0:Date.now(),show:false,pick:null};render();window.scrollTo(0,0)};
function setView(){var Z=V,c=cw(Z.id),q=Z.qs[Z.i],done=Z.r[Z.i]!=null;
  var lab=Z.kd==='c'?'Step 1 · Build concepts':Z.kd==='t'?'Step 2 · Match templates':LVN[Z.lv-1];
  var h='<p class="back"><button class="link" onclick="prepGo(\''+Z.id+'\')">← '+esc(c[1])+'</button></p><div class="meta"><span>'+esc(c[1])+' · '+lab+'</span><span>'+(Z.i+1)+' of '+Z.qs.length+'</span></div>';
  h+='<div class="card">'+(Z.kd==='c'&&q.note?'<div class="fb ok" style="margin:0 0 10px"><b>The idea</b><div style="margin-top:2px">'+esc(q.note)+'</div></div>':Z.kd==='t'?'<p class="sub" style="margin:0 0 6px">Do not solve it. Spot what kind of question it is.</p>':'<p class="sub" style="margin:0 0 6px">['+q.m+' mark'+(q.m>1?'s':'')+'] Write it in your notebook first, with the plan as the first line.</p>')+(function(){var T=qTags(q,Z.id);return T.length?'<div class="wtag">Working on: '+T.map(function(k){return esc(wk(k)[1])}).join(' · ')+'<br><small>'+esc(wk(T[0])[3])+'</small></div>':''}())+'<div class="qt" style="font-size:1.05rem">'+br(q.q)+'</div>';
  if(q.o){h+='<div style="margin-top:10px">'+q.o.map(function(o,i){var cls=Z.pick==null?'':i===q.a?' ok':i===Z.pick?' bad':'';return'<button class="opt'+cls+'" '+(Z.pick!=null?'disabled':'')+' onclick="prepPick('+i+')">'+String.fromCharCode(97+i)+') '+esc(o)+'</button>'}).join('')+'</div>'}
  else if(!Z.show)h+='<button class="btn" onclick="prepShow()">I have written it: show the answer</button>';
  if(Z.show||Z.pick!=null){var tr=q.trap&&Z.pick!=null&&Z.pick!==q.a&&q.trap[Z.pick]?'<div style="margin-top:4px"><b>Why not that one:</b> '+esc(q.trap[Z.pick])+'</div>':'';
    h+='<div class="fb '+(q.o?(Z.pick===q.a?'ok':'bad'):'mid')+'" style="margin-top:10px"><b>'+(Z.kd==='t'?'The template':Z.kd==='c'?'Why':'Answer')+'</b>'+tr+'<div style="margin-top:4px">'+br(q.ans)+'</div>'+(Z.kd==='t'&&q.stid?'<button class="link" style="margin-top:6px" onclick="tlOpen(\''+q.stid+'\',\''+q.tp+'\')">Open this template with a worked example</button>':'')+'</div>';
    if(!q.o&&!done)h+='<p style="margin:10px 0 4px"><b>Compare with your working. How did it go?</b></p><div class="row3"><button class="btn" onclick="prepMark(1)">Right</button><button class="btn alt" onclick="prepMark(.5)">Partly</button><button class="btn alt" onclick="prepMark(0)">Not yet</button></div>';
    if(done&&!q.o&&Z.r[Z.i]<1){var rs=(Z.why||{})[Z.i]||[];h+='<p style="margin:10px 0 4px"><b>What went wrong?</b> <span class="sub">(tap all that fit)</span></p><div class="bgset">'+REAS.map(function(r){return'<button class="chipb'+(rs.indexOf(r[0])>=0?' on':'')+'" onclick="prepWhy(\''+r[0]+'\')">'+esc(r[1])+'</button>'}).join('')+'</div>'}
    if(done)h+='<button class="btn" onclick="prepNext()">'+(Z.i+1<Z.qs.length?'Next question':'See the result')+'</button>';
    h+='<button class="btn alt chatb" onclick="prepAsk()">Ask Claude about this one</button>'}
  h+='</div>';app.innerHTML=h}
window.prepPick=function(i){var q=V.qs[V.i];V.pick=i;V.show=true;V.r[V.i]=i===q.a?1:0;render()};
window.prepShow=function(){V.show=true;render()};
window.prepWhy=function(k){var Z=V;Z.why=Z.why||{};var a=Z.why[Z.i]=Z.why[Z.i]||[],j=a.indexOf(k);if(j>=0)a.splice(j,1);else a.push(k);render()};
window.prepMark=function(f){V.r[V.i]=f;render()};
window.prepNext=function(){if(V.i+1<V.qs.length){V.i++;V.show=false;V.pick=null;render();window.scrollTo(0,0)}else if(V.kd)finishLearn();else finish()};
window.prepAsk=function(){var q=V.qs[V.i];var T=qTags(q,V.id);openChat(chatHead()+(T.length?'My weak spot here: '+T.map(function(k){return wk(k)[1]+' ('+wk(k)[2]+')'}).join('; ')+'. Please watch for it.\n':'')+'Chapter: '+cw(V.id)[1]+'\nQuestion: '+q.q+(q.o?'\nOptions: '+q.o.join(' | '):'')+'\nWorked answer from my app:\n'+q.ans+'\n\nHelp me understand where I might go wrong, then give me one similar question to try.')};
function wSet(Z){var seen={};Z.qs.forEach(function(q,i){var v=Z.r[i]||0,T=qTags(q,Z.id);T.forEach(function(k){wlog(k,v,Z.id);seen[k]=seen[k]||[0,0];seen[k][0]+=v;seen[k][1]++});
    ((Z.why||{})[i]||[]).forEach(function(k){if(k==='idea'||T.indexOf(k)>=0)return;wlog(k,0,Z.id);seen[k]=seen[k]||[0,0];seen[k][1]++})});
  var ks=Object.keys(seen);if(!ks.length)return'';return'<div class="card"><b>Weak spots in this set</b>'+ks.map(function(k){var t=wtrend(k),s=seen[k];return'<div class="wrow"><span><b>'+esc(wk(k)[1])+'</b><small>This set: '+(s[0]%1?s[0].toFixed(1):s[0])+' of '+s[1]+' right</small></span>'+wPill(t)+'</div>'}).join('')+'</div>'}
function finish(){var Z=V,cc=C(Z.id),l=Z.lv,sc=0;Z.r.forEach(function(x){sc+=x||0});var WS=wSet(Z);var n=Z.qs.length,f=sc/n,u0=units(Z.id),t0=tot().u;
  cc.sets.push({lv:l,sc:sc,n:n,ts:Date.now()});if(cc.sets.length>60)cc.sets=cc.sets.slice(-60);
  Z.qs.forEach(function(q,i){if(cc.seen.indexOf(q.q)<0)cc.seen.push(q.q);var mi=cc.miss.indexOf(q.q);if((Z.r[i]||0)<1){if(mi<0)cc.miss.push(q.q)}else if(mi>=0)cc.miss.splice(mi,1)});
  cc.seen=cc.seen.slice(-80);cc.miss=cc.miss.slice(-12);
  var full=n>=4,pass=full&&f>=.8,msg;if(pass){cc.best[l-1]=1;if(l<3){cc.lv=l+1;msg='Level '+l+' passed. The next set is at level '+(l+1)+'.'}else msg='Level 3 passed: this chapter is at exam standard. Keep a set every few days so it stays there.'}
  else{if(full&&f>cc.best[l-1])cc.best[l-1]=f;if(!full)msg='Only '+n+' questions this time, so the level stays at '+l+'. A full set of 5 is needed to move.';else if(f<.3&&l>1){cc.lv=l-1;msg='This level needs firmer basics. The next set goes back to level '+(l-1)+'.'}else if(full)msg='Stay at level '+l+'. 4 out of 5 moves you up.'}
  try{Z.qs.forEach(function(q,i){if((Z.r[i]||0)<1)mkAdd({src:'Preparation tracker',topic:cw(Z.id)[1],q:q.q,o:q.o,a:q.o?q.a:null,ans:q.o?null:q.ans,habit:'',h:q.ans,ref:'prep:'+q.id})})}catch(e){}
  var d=dayRec();d.sets++;d.min+=Math.min(30,(Date.now()-Z.t0)/6e4);save();
  var du=Math.round((units(Z.id)-u0)*10)/10,T=tot();
  var h='<p class="back"><button class="link" onclick="prepGo(\''+Z.id+'\')">← '+esc(cw(Z.id)[1])+'</button></p><h1>Set done: '+(sc%1?sc.toFixed(1):sc)+' of '+n+'</h1>';
  h+='<div class="card hi"><p style="margin:0"><b>'+esc(msg)+'</b></p><p class="sub" style="margin:6px 0 0">'+(du>0?'+'+du+' parts in this chapter. ':'')+'Overall: '+T.u+' of 800 parts'+(T.u>t0?' (+'+(T.u-t0)+')':'')+' · '+T.e+' of 80 likely.</p>'+
   '<p class="sub" style="margin:6px 0 0">Today: '+Math.round(d.min)+' of 40 minutes.</p><button class="btn" onclick="prepSet(\''+Z.id+'\')" id="prSet">Next set in this chapter</button><p class="sub" id="prMsg" style="margin:6px 0 0"></p><button class="btn alt" onclick="prepOpen()">Choose another chapter</button></div>'+WS;
  V={v:'ch',id:Z.id};app.innerHTML=h;window.scrollTo(0,0);try{if(pass)fxSoon('Level passed: reward unlocked')}catch(e){}}
/* ---------- the suggested plan ---------- */
window.prepPlan=function(){V={v:'plan'};render();window.scrollTo(0,0)};
function planView(){var wi=weekIx();
  var h='<p class="back"><button class="link" onclick="prepOpen()">← Preparation tracker</button></p><h1>Suggested plan to 31 January</h1><p class="sub">40 minutes a day. This is a suggestion: any chapter can be chosen on any day, and the tracker keeps each chapter’s progress.</p>';
  h+='<div class="card hi"><b>Four exam rules</b><ol style="margin:6px 0 0;padding-left:1.3em">'+PLN.rules.map(function(r){return'<li style="margin:6px 0"><b>'+esc(r[0])+'.</b> '+esc(r[1])+'</li>'}).join('')+'</ol></div>';
  h+='<div class="card"><b>Pace for the 3-hour paper</b>'+PLN.pace.map(function(p){return'<div class="tbar"><span>'+esc(p[0])+(p[1]?' · '+esc(p[1]):'')+'</span><b>'+esc(p[2])+'</b></div>'}).join('')+'<p class="sub" style="margin:6px 0 0">'+esc(PLN.paceNote)+'</p></div>';
  h+='<div class="card"><b>A 40-minute day</b><ul style="margin:6px 0 0;padding-left:1.2em"><li>5 min: one formula card from the chapter</li><li>25 min: one or two sets in the tracker, written in the notebook</li><li>10 min: redo every “Not yet” question from the day</li></ul></div>';
  PLN.W.forEach(function(w,i){var dt=i===0?'20–22 Nov':(function(){var s=new Date(2026,10,23+7*(i-1));return s.toLocaleDateString(undefined,{day:'numeric',month:'short'})})();
    h+='<details class="card"'+(i===wi?' open':'')+'><summary style="cursor:pointer"><b>'+(i===0?'Start':'Week '+i)+' · '+dt+'</b> '+esc(w.t)+(i===wi?' <span class="pill st">This week</span>':'')+'</summary><p class="sub" style="margin:8px 0 4px">'+esc(w.c)+'</p><p style="margin:0 0 6px">'+esc(w.why)+'</p>'+
     (w.rc&&w.rc.length?'<p style="margin:8px 0 2px"><b>Formula card</b></p><ul style="margin:0;padding-left:1.2em">'+w.rc.map(function(x){return'<li style="margin:3px 0">'+esc(x)+'</li>'}).join('')+'</ul>':'')+
     (WCH[i].length?'<div class="row2">'+WCH[i].map(function(c){return'<button class="btn alt" onclick="prepGo(\''+c+'\')">'+esc(cw(c)[1])+(taught(c)?'':' (not taught)')+'</button>'}).join('')+'</div>':'<p class="sub" style="margin:8px 0 0">Mixed: the tracker suggests the chapters with the fewest parts covered.</p>')+'</details>'});
  h+='<div class="card"><b>Chapters not taught yet</b><p class="sub" style="margin:4px 0 0">Differentiation, conic sections, probability, 3D geometry and measures of dispersion. Each starts with step 1 (build concepts) and step 2 (match templates); the preparation check comes after. One short learning set on those days keeps them moving, and in the mixed weeks they get full sessions.</p></div>';
  app.innerHTML=h}
/* ---------- wiring ---------- */
try{var G=GRP.maths;if(G&&!G.some(function(t){return t[0]==='prep'}))G.splice(1,0,['prep','Prep tracker']);
  if(window.MSEC)MSEC.forEach(function(s){if(s[0]==='today'&&s[2].indexOf('prep')<0)s[2].splice(1,0,'prep')});
  if(typeof SECN!=='undefined')SECN.prep='Preparation tracker'}catch(e){}
var OPENED=false;var _rP=render;render=function(){if(view==='prep'){_rP();try{if(V.v==='ch')chView(V.id);else if(V.v==='em')emView();else if(V.v==='set')setView();else if(V.v==='plan')planView();else home()}catch(e){console.error(e);home()}return}
  var RL=typeof ROLE!=='undefined'?ROLE:window.ROLE;if(!OPENED&&(view==='qp'||view==='today')&&RL!=='tutor'&&RL!=='pending'&&!document.getElementById('whoScr')){OPENED=true;view='prep';V={v:'home'};render();return}
  _rP();try{if(view==='ex'&&P().ret&&!app.querySelector('.prepret')){app.insertAdjacentHTML('afterbegin','<div class="card hi prepret" style="padding:10px 14px"><button class="link" onclick="prepBack()">← Back to '+esc(cw(P().ret)[1])+': chapter steps</button></div>')}}catch(e){}
  try{if((view==='today'||view==='qp')&&!app.querySelector('.prepc')){var hd=app.querySelector('.tdhd'),nx=hd&&hd.nextElementSibling;if(hd)(nx&&nx.classList.contains('sub')?nx:hd).insertAdjacentHTML('afterend',card())}}catch(e){}};
var _sbP=subBar;subBar=function(){_sbP();try{if(view==='prep'){document.querySelectorAll('#sub .segs button').forEach(function(b){b.setAttribute('aria-selected',String((b.getAttribute('onclick')||'').indexOf("'qp'")>=0))});var cb=document.querySelector('#sub .smcrumb .link');if(cb){cb.setAttribute('onclick',"goView('qp')");cb.textContent='← Quick prep'}}document.querySelectorAll('#sub .segs2 button').forEach(function(b){var o=b.getAttribute('onclick')||'';if(o.indexOf("goView('prep')")>=0&&b.firstChild&&b.firstChild.nodeType===3)b.firstChild.nodeValue='Prep'})}catch(e){}};
var css=document.createElement('style');css.textContent=
 '.pghd{display:flex;justify-content:space-between;align-items:flex-end;gap:8px;margin:4px 0 8px}.pgbig{font-size:1.7rem;line-height:1}'+
 '.pbar{display:block;height:8px;border-radius:99px;background:var(--line);overflow:hidden}.pbar i{display:block;height:100%;background:var(--accent);border-radius:99px}.pbar.sm{height:5px;margin-top:4px}'+
 '.pg8{display:grid;grid-template-columns:repeat(40,1fr);gap:1px;margin:6px 0}.pg8 i{aspect-ratio:1;background:var(--line);border-radius:1px}.pg8 i.on{background:var(--c)}.pg8 i.nt{opacity:.35}'+
 '.prow{display:grid;grid-template-columns:1fr auto;gap:2px 8px;width:100%;text-align:left;background:none;border:0;border-top:1px solid var(--line);padding:10px 0;color:inherit;cursor:pointer}.prow:first-of-type{border-top:0}.prow .pbar{grid-column:1/3}.prow small{display:block;color:var(--muted)}.prow.off{opacity:.55}.prp{font-weight:700;align-self:center}'+
 '.plv{display:grid;gap:8px;margin:8px 0}.plv>div{padding:8px 10px;border:1px solid var(--line);border-radius:10px}.plv>div.cur{border-color:var(--accent);background:var(--accent-soft)}.plv small{color:var(--muted)}'+
 '.pstp{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin:0 0 14px}.pstp button{border:1px solid var(--line);background:var(--card);border-radius:10px;padding:8px 6px;text-align:left;color:inherit;cursor:pointer}.pstp button b{display:block;font-size:.8rem}.pstp small{color:var(--muted);font-size:.72rem}.pstp .cur{border-color:var(--accent);background:var(--accent-soft)}.pstp .done b{color:var(--ok)}'+
 '.pcn{display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-top:1px solid var(--line)}.pcn:first-of-type{border-top:0}.pcn>div{flex:1}.pcn small{display:block;color:var(--muted)}.pcn .pdots{display:flex;gap:3px;padding-top:4px}.pcn .pdots i{width:10px;height:10px;border-radius:50%;border:1px solid var(--accent);display:block}.pcn .pdots i.on{background:var(--accent)}'+
 '.prow.lrn .prt b{color:inherit}'+
 '.opt.chopt{display:flex!important;gap:12px;align-items:center;text-align:left;width:100%}.opt.chopt .chsv{flex:none}.opt.chopt span{flex:1;line-height:1.3}'+
 '.wtag{background:var(--warn);border-radius:8px;padding:6px 10px;margin:0 0 8px;font-size:.88rem}.wtag small{color:var(--muted)}'+
 '.wrow,.wrow2 summary{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 0;border-top:1px solid var(--line)}.wrow small,.wrow2 small{display:block;color:var(--muted)}.wrow2 summary{cursor:pointer;list-style:none}.wrow2 summary::-webkit-details-marker{display:none}.wrow2:first-of-type summary{border-top:0}.wrow2 .pill,.wrow .pill{flex:none;white-space:nowrap}'+
 '.pchips{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px}.pchips button{text-align:left;border:1px solid var(--line);background:var(--card);border-radius:10px;padding:8px;color:inherit;cursor:pointer}.pchips b{display:block;font-size:.86rem;line-height:1.2}.pchips small{color:var(--muted)}.pchips .sug{border-color:var(--accent);background:var(--accent-soft)}'+
 '.pex{display:flex;gap:8px;align-items:center;width:100%;text-align:left;background:none;border:0;border-top:1px solid var(--line);padding:8px 0;color:inherit;cursor:pointer}.pex>span:last-child{flex:1}.pex .pdots i{font-style:normal}'+
 '.row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px}.row3 .btn{text-align:center;padding:10px 6px}';
document.head.appendChild(css);
})();
/*CHARS: every maths template has an animal character: a picture (plain SVG drawn here, original), a name, a prop with the key
  formula, a catchphrase that is the trigger to spot it, and a short story of what the character does. Shown on template cards,
  in the template-matching steps of the preparation tracker, and in a gallery (Maths > Templates > Characters, or the tracker). */
(function(){
/* id: [animal, name, prop, catchphrase, story] */
var CHR={
cx1:['owl','Itzy the Owl','i⁴ = 1','Big power of i? Count in fours!','Itzy turns her head a quarter turn every time she meets an i: i, −1, −i, 1, and she is home again. She only cares about the remainder when the power is divided by 4.'],
cx2:['cat','Conji the Cat','× (a − ib)','i in the basement? Multiply by my mirror twin!','Conji cannot stand an i in the denominator. She multiplies top and bottom by the conjugate, and i² = −1 sweeps the denominator clean.'],
cx3:['penguin','Pip and Pim','Re = Re, Im = Im','Real with real, i with i!','Pip only talks to real parts and Pim only to i parts. Line them up on the two sides and they hand you two equations for x and y.'],
cx4:['rabbit','Rooty the Rabbit','(x + iy)² = a + ib','A root of a + ib? I guess x + iy!','Rooty writes the root as x + iy and squares it: x² − y² = a and 2xy = b. Then x² + y² = |a + ib| finishes the job.'],
cx5:['turtle','Polly the Turtle','r (cos θ + i sin θ)','How far, and which way? Ask me!','Polly crawls r = √(a² + b²) steps from the origin. She checks the quadrant before choosing her angle θ.'],
cx6:['fox','Lucy the Fox','|z − a| = distance','Put z = x + iy and follow my tracks!','Lucy replaces z by x + iy and reads each |…| as a distance. The trail she leaves is a circle or a straight line.'],
pc1:['monkey','Mimi the Monkey','n! / (p! q!)','Same letters? Divide out the twins!','Mimi arranges all the letters as if they were different, then divides by the ways the repeated letters swap among themselves.'],
pc2:['elephant','Ella the Elephant','tie them in a bundle','Together? Tie them in my trunk!','Ella ties the together-group into one bundle, arranges the bundles, then lets the group shuffle inside. Never together = total − together.'],
pc3:['panda','Ringo the Panda','(n − 1)!','Round table? Fix one seat first!','Ringo seats one guest first so that turning the table changes nothing: (n − 1)!. A necklace can also be flipped over, so he halves it.'],
pc4:['bear','Digi the Bear','fill the fussy box first','Fill the fussy places first!','Digi draws one box per digit and fills the restricted box first (the units place for even, the first place for "more than"), then the rest.'],
pc5:['frog','Leapy the Frog','case + case + case','At least? Hop through every case!','Leapy lists the cases (2, 3, 4 …) and adds them. When there are too many, he jumps from the total and takes away the cases nobody wants.'],
bt1:['lion','Leo the Lion','Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ','Want one term? Call my general term!','Leo writes the general term, collects all the powers of x, and sets that power equal to the one asked for. That gives r.'],
bt2:['hedgehog','Zero the Hedgehog','power of x = 0','No x left? That is my term!','Zero writes the general term, makes the power of x equal to 0, solves for r and puts it back.'],
bt3:['dog','Midge the Dog','T(n/2 + 1)','Even n: one middle. Odd n: two!','Midge counts n + 1 terms. Even n leaves one term in the middle; odd n leaves two side by side.'],
bt4:['mouse','Dex the Mouse','9ⁿ = (1 + 8)ⁿ','Rewrite the base as 1 + something!','Dex writes 9ⁿ as (1 + 8)ⁿ and expands. Every term after the first two carries 8², so 64 divides what is left.'],
ss1:['rabbit','Hop the Rabbit','a + (n − 1)d','Two terms given? Two equations!','Hop writes each given term as a + (n − 1)d, solves the pair for a and d, and then hops to the term asked for.'],
ss2:['bear','Sumo the Bear','n/2 [2a + (n − 1)d]','A sum given? Expect a quadratic in n!','Sumo puts the numbers into the sum formula, gets a quadratic in n, and keeps the positive whole answers. Sometimes both work.'],
ss3:['turtle','Gee the Turtle','a / (1 − r)','Times r each step; if r is small, I stop!','Gee multiplies by r at every step. When |r| < 1 her steps shrink, and the whole trip adds to a/(1 − r).'],
ss4:['penguin','Amgy the Penguin','AM ≥ GM','Between two numbers, I find the middle!','Amgy has two middles: AM = (a + b)/2 and GM = √(ab). The AM is never smaller.'],
ss5:['elephant','Sigma the Elephant','Σn, Σn², Σn³','Break the nth term, then use my memory!','Sigma writes the nth term, splits it into n³, n² and n, and uses the three sum formulas she never forgets.'],
sl1:['cat','Ratio the Cat','(mx₂ + nx₁)/(m + n)','m : n? Cross the weights!','Ratio walks from A to B in the ratio m : n. Each coordinate is (m × far end + n × near end)/(m + n).'],
sl2:['fox','Flat the Fox','½ |x₁(y₂ − y₃) + …|','Area zero? Then we stand in a line!','Flat uses the half-modulus area formula. If the area comes out 0, the three points are collinear.'],
sl3:['monkey','Liney the Monkey','y − y₁ = m(x − x₁)','Point and slope, and off I swing!','Liney picks the form that fits what is given: point–slope, two-point, intercept or normal form.'],
sl4:['frog','Perpy the Frog','m₁ m₂ = −1','Parallel: same m. Perpendicular: flip and negate!','Perpy keeps the slope for a parallel line and uses −1/m for a perpendicular one, then puts in the point.'],
sl5:['owl','Dist the Owl','|ax₁ + by₁ + c| / √(a² + b²)','The shortest way is straight down!','Dist drops a perpendicular from the point. For two parallel lines she uses |c₁ − c₂| / √(a² + b²).'],
sl6:['lion','Tangy the Lion','tan θ = |(m₁ − m₂)/(1 + m₁m₂)|','Two slopes? I find the gap!','Tangy puts both slopes into his formula. The modulus makes the angle acute.'],
ci1:['panda','Circa the Panda','(x − h)² + (y − k)² = r²','Know the centre? I am done!','Circa writes the centre–radius form. Given the ends of a diameter, she uses (x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0.'],
ci2:['hedgehog','Tri the Hedgehog','find g, f, c','Three points, three equations!','Tri puts each point into x² + y² + 2gx + 2fy + c = 0 and solves the three equations for g, f and c.'],
ci3:['dog','Gen the Dog','centre (−g, −f)','Halve, then flip the signs!','Gen reads the centre as (−g, −f) and the radius as √(g² + f² − c). The x² and y² must have coefficient 1 first.'],
ci4:['mouse','Touchy the Mouse','distance = radius','Tangent? Distance equals radius!','Touchy measures the centre’s distance from the line: equal to r touches, less cuts, more misses.'],
tr1:['fox','Quadra the Fox','All Sin Tan Cos','Sign first, then the name!','Quadra finds the quadrant for the sign. Then 90° or 270° swaps sin and cos, while 180° or 360° keeps the name.'],
tr2:['rabbit','Combo the Rabbit','75° = 45° + 30°','Odd angle? Split it into friends!','Combo writes the angle as a sum or difference of 30°, 45°, 60° and uses the compound-angle formula.'],
tr3:['penguin','Proof the Penguin','LHS → RHS','Start from the messier side!','Proof works on the messy side alone, turns everything into sin and cos, and stops when it matches the other side.'],
tr4:['elephant','Sumpro the Elephant','sin C + sin D = 2 sin ½(C+D) cos ½(C−D)','A sum of sines? Make it a product!','Sumpro turns sums into products with the half-sum and half-difference angles, and common factors cancel.'],
tr5:['turtle','Ever the Turtle','nπ + (−1)ⁿ α','One answer? There are infinitely many!','Ever finds one angle α, then writes them all: sin gives nπ + (−1)ⁿα, cos gives 2nπ ± α, tan gives nπ + α.'],
tr6:['lion','Peak the Lion','±√(a² + b²)','My range is ±√(a² + b²)!','Peak knows that a sin x + b cos x swings between −√(a² + b²) and +√(a² + b²), never further.'],
qe1:['frog','Disco the Frog','D = b² − 4ac','Check my D before you jump!','Disco works out D first. Positive: two real roots. Zero: equal roots. Negative: no real roots.'],
qe2:['panda','Duo the Panda','α + β = −b/a, αβ = c/a','Don’t find the roots, use the pair!','Duo never solves. She writes α² + β², (α − β)² or 1/α + 1/β using the sum and product.'],
qe3:['bear','Builder the Bear','x² − Sx + P = 0','Give me the sum and the product!','Builder finds the sum S and product P of the new roots and builds x² − Sx + P = 0.'],
qe4:['cat','Imagi the Cat','√(−D) = i√D','D negative? Bring in i!','Imagi uses the formula as usual and writes the square root of a negative number as i times a real root.'],
cs1:['dog','Para the Dog','y² = 4ax','Only one square? It is me!','Para reads a from y² = 4ax: focus (a, 0), directrix x = −a, latus rectum 4a.'],
cs2:['hedgehog','Ellie the Hedgehog','c² = a² − b²','Both squares with a plus? That is me!','Ellie finds c from c² = a² − b², then e = c/a and the foci (±c, 0).'],
cs3:['mouse','Hyper the Mouse','c² = a² + b²','A minus between the squares? Me!','Hyper finds c from c² = a² + b². His eccentricity c/a is always more than 1.'],
cs4:['monkey','Fitz the Monkey','a, b, c, e','Give me the foci and a point!','Fitz decides which curve it is, reads c and a or b from the data, links them, and writes the equation.'],
pr1:['owl','Lucky the Owl','favourable ÷ total','Count the good, count them all!','Lucky lists the sample space, counts the favourable outcomes and divides.'],
pr2:['elephant','Drawy the Elephant','ⁿCᵣ ÷ ⁿCₖ','Drawn together? Choose, don’t arrange!','Drawy counts the ways with combinations, on the top and on the bottom.'],
pr3:['penguin','Ory the Penguin','P(A) + P(B) − P(A ∩ B)','Or? Add, then remove the double count!','Ory adds the two chances, then takes away the overlap, which was counted twice.'],
pr4:['turtle','Notty the Turtle','1 − P(none)','At least one? Do none, then flip!','Notty finds the chance that it never happens and takes it away from 1.'],
se1:['fox','Venna the Fox','fill the middle first','Fill the middle first!','Venna writes the overlap in the centre of the Venn diagram, then the "only" parts, then adds.'],
se2:['frog','Subby the Frog','2ⁿ','Each element: in or out!','Subby gives every element two choices, in or out, so a set of n elements has 2ⁿ subsets.'],
se3:['cat','Morgan the Cat','(A ∪ B)′ = A′ ∩ B′','Break the bar, flip the sign!','Morgan breaks a complement over a union into an intersection of complements, and the other way round.'],
rf1:['bear','Domi the Bear','bottom ≠ 0, root ≥ 0','No zero below, no negative under a root!','Domi throws out every x that makes a denominator 0 or the inside of a square root negative.'],
rf2:['monkey','Rangi the Monkey','y = f(x), solve for x','Solve for x, then ask what y may be!','Rangi puts y = f(x), solves for x, and keeps only the y values that give a real x.'],
rf3:['panda','Rel the Panda','2^(mn)','Every subset of A × B is a relation!','Rel counts the m × n pairs in A × B, so there are 2^(mn) relations.'],
li1:['dog','Flip the Dog','× negative → flip','Times a negative? I flip!','Flip solves it like an equation, but turns the sign round whenever he multiplies or divides by a negative number.'],
li2:['hedgehog','Shady the Hedgehog','test (0, 0), shade','Draw each line, shade, keep the overlap!','Shady draws each boundary, tests (0, 0) to choose a side, shades it, and keeps the region common to all.'],
td1:['mouse','Spacey the Mouse','√(Δx² + Δy² + Δz²)','Three squares under one root!','Spacey adds the squared differences in x, y and z and takes the square root.'],
td2:['lion','Zed the Lion','ratio k : 1','Meets a plane? That coordinate is zero!','Zed takes the ratio k : 1, writes the point, and sets x, y or z to 0 for the plane it meets.'],
ld1:['rabbit','Nibbles the Rabbit','cancel (x − a)','0/0? Find the hidden (x − a) and nibble it!','Nibbles factors the top and the bottom, cancels (x − a), and only then puts x = a.'],
ld2:['owl','Stan the Owl','sin x / x → 1','Make it look like my favourites!','Stan rearranges the limit into sin x/x, tan x/x or (xⁿ − aⁿ)/(x − a), whose limits he knows by heart.'],
ld3:['penguin','Radi the Penguin','× (√a + √b)','A root in a 0/0? Multiply by its partner!','Radi multiplies top and bottom by the conjugate surd, cancels, then puts the value in.'],
ld4:['elephant','Rulo the Elephant','(uv)′ = u′v + uv′','Product, quotient or power: pick the rule!','Rulo spots the shape first: power rule, product rule u′v + uv′, or quotient rule (u′v − uv′)/v².'],
ld5:['turtle','Hachi the Turtle','[f(x + h) − f(x)] / h','A tiny step h, then let it vanish!','Hachi writes the difference quotient, simplifies until h cancels, then lets h shrink to 0.'],
st1:['fox','Devi the Fox','Σ|x − x̄| / n','Distances only, no signs!','Devi finds the mean or median, adds the distances from it without signs, and divides by n.'],
st2:['frog','Vari the Frog','Σ(x − x̄)² / n','Square the gaps, average, root!','Vari squares each deviation and averages them for the variance; the square root is the standard deviation.'],
st3:['cat','Steady the Cat','CV = σ / x̄ × 100','Lower CV, steadier me!','Steady compares CV = σ/mean × 100. The smaller CV is the more consistent series.']
};
var ACC=['#3b5bdb','#2b8a3e','#c2255c','#e8590c','#0c8599','#9c36b5','#5c940d','#1971c2','#d9480f','#6741d9'];
function hsh(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return h}
function E(x,y,rx,ry,f,ex){return'<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+f+'"'+(ex||'')+'/>'}
function Ci(x,y,r,f,ex){return'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'"'+(ex||'')+'/>'}
function Pa(d,f,ex){return'<path d="'+d+'" fill="'+(f||'none')+'"'+(ex||'')+'/>'}
var K='#222',W='#fff';
function eyes(y,dx,r,big){return(big?Ci(50-dx,y,r+3,W)+Ci(50+dx,y,r+3,W):'')+Ci(50-dx,y,r,K)+Ci(50+dx,y,r,K)+Ci(50-dx+r*.35,y-r*.35,r*.35,W)+Ci(50+dx+r*.35,y-r*.35,r*.35,W)}
function smile(y,w){return Pa('M'+(50-w)+' '+y+' Q50 '+(y+w*.8)+' '+(50+w)+' '+y,'none',' stroke="'+K+'" stroke-width="1.8" stroke-linecap="round"')}
var DRAW={
owl:function(){return Pa('M27 30 L33 14 L41 26 Z M73 30 L67 14 L59 26 Z','#8a6a4a')+E(50,50,27,31,'#8a6a4a')+E(50,58,17,20,'#f3e3c4')+eyes(40,11,4.5,1)+Pa('M46 48 L50 55 L54 48 Z','#e8a400')},
cat:function(){return Pa('M28 34 L30 12 L44 26 Z M72 34 L70 12 L56 26 Z','#f08c3a')+Pa('M31 30 L32 18 L40 26 Z M69 30 L68 18 L60 26 Z','#ffc9a8')+Ci(50,46,25,'#f08c3a')+E(50,54,13,10,'#fff1e2')+eyes(42,10,4)+Pa('M47 50 L53 50 L50 54 Z','#e8607a')+Pa('M30 52 L16 50 M30 56 L16 58 M70 52 L84 50 M70 56 L84 58','none',' stroke="#7a4a2a" stroke-width="1"')+smile(56,4)},
fox:function(){return Pa('M26 30 L28 10 L42 24 Z M74 30 L72 10 L58 24 Z','#e8590c')+Pa('M24 30 Q50 18 76 30 L66 56 Q50 70 34 56 Z','#e8590c')+Pa('M30 44 Q40 52 50 66 Q60 52 70 44 Q60 58 50 60 Q40 58 30 44 Z','#fff')+eyes(40,11,3.8)+Ci(50,58,3.5,K)},
bear:function(){return Ci(29,26,9,'#8b5a2b')+Ci(71,26,9,'#8b5a2b')+Ci(29,26,4.5,'#c99a6a')+Ci(71,26,4.5,'#c99a6a')+Ci(50,46,26,'#8b5a2b')+E(50,55,12,9,'#d9b48a')+eyes(41,10,3.8)+E(50,51,4.5,3.2,K)+smile(56,4)},
rabbit:function(){return E(41,20,6.5,18,'#d9d9e3')+E(59,20,6.5,18,'#d9d9e3')+E(41,22,3,12,'#f5b5c5')+E(59,22,3,12,'#f5b5c5')+Ci(50,50,22,'#d9d9e3')+E(50,58,9,6,'#fff')+eyes(46,9,3.6)+Pa('M47 53 L53 53 L50 56 Z','#e8607a')+'<rect x="47.5" y="58" width="5" height="5" rx="1" fill="#fff" stroke="#999" stroke-width=".6"/>'},
frog:function(){return Ci(34,32,10,'#5bb85d')+Ci(66,32,10,'#5bb85d')+E(50,52,32,21,'#5bb85d')+eyes(32,16,4.5,1)+Pa('M32 54 Q50 70 68 54','none',' stroke="#1e5a20" stroke-width="2.2" stroke-linecap="round"')+Ci(30,52,3.5,'#f5a3a3')+Ci(70,52,3.5,'#f5a3a3')},
penguin:function(){return E(50,50,26,31,'#2b2d3a')+E(50,54,18,24,'#fff')+Pa('M30 28 Q50 16 70 28 Q60 38 50 34 Q40 38 30 28 Z','#2b2d3a')+eyes(38,9,3.6)+Pa('M44 45 L56 45 L50 52 Z','#f59f00')+E(36,52,3.5,2.5,'#f5b5c5')+E(64,52,3.5,2.5,'#f5b5c5')},
elephant:function(){return E(25,44,15,19,'#9aa3b5')+E(75,44,15,19,'#9aa3b5')+E(25,44,9,13,'#f0b8c8')+E(75,44,9,13,'#f0b8c8')+Ci(50,42,22,'#9aa3b5')+Pa('M44 52 Q42 70 52 74 Q60 76 60 70 Q54 70 54 64 Q56 56 56 52 Z','#9aa3b5')+eyes(38,9,3.5)+Pa('M38 58 Q34 62 36 66','none',' stroke="#fff" stroke-width="2.5" stroke-linecap="round"')},
monkey:function(){return Ci(26,44,10,'#8b5a2b')+Ci(74,44,10,'#8b5a2b')+Ci(26,44,5.5,'#e6c19c')+Ci(74,44,5.5,'#e6c19c')+Ci(50,44,24,'#8b5a2b')+Pa('M34 44 Q34 32 43 34 Q50 36 57 34 Q66 32 66 44 Q66 66 50 66 Q34 66 34 44 Z','#e6c19c')+eyes(42,7.5,3.4)+Ci(47,52,1.2,K)+Ci(53,52,1.2,K)+smile(57,6)},
turtle:function(){return E(50,64,33,18,'#2f7d32')+Pa('M30 64 L40 54 L60 54 L70 64 L60 74 L40 74 Z','none',' stroke="#9bd49c" stroke-width="1.5"')+Pa('M40 54 L36 46 M60 54 L64 46 M40 74 L36 80 M60 74 L64 80','none',' stroke="#9bd49c" stroke-width="1.5"')+Ci(50,36,17,'#9ccc65')+eyes(33,6.5,3.2)+smile(40,5)},
lion:function(){var m='';for(var i=0;i<14;i++){var a=i/14*Math.PI*2;m+=Ci((50+Math.cos(a)*25).toFixed(1),(46+Math.sin(a)*25).toFixed(1),10,'#b5651d')}return m+Ci(50,46,25,'#b5651d')+Ci(50,46,19,'#f2c14e')+eyes(42,7.5,3.2)+Pa('M46 49 L54 49 L50 53 Z','#7a3e12')+E(46,56,4.5,3.5,'#fde7b0')+E(54,56,4.5,3.5,'#fde7b0')},
panda:function(){return Ci(29,26,9,K)+Ci(71,26,9,K)+Ci(50,46,26,'#fff',' stroke="#ccc" stroke-width="1"')+E(40,43,7,9,K,' transform="rotate(-25 40 43)"')+E(60,43,7,9,K,' transform="rotate(25 60 43)"')+Ci(40,43,2.6,W)+Ci(60,43,2.6,W)+E(50,54,4.5,3,K)+smile(58,4)},
dog:function(){return E(26,46,8,17,'#7a4a2a',' transform="rotate(12 26 46)"')+E(74,46,8,17,'#7a4a2a',' transform="rotate(-12 74 46)"')+Ci(50,44,23,'#d9a066')+E(50,56,12,9,'#f5deb3')+eyes(40,9,3.6)+E(50,51,4.5,3.4,K)+Pa('M47 60 Q50 68 53 60 Z','#e8607a')},
mouse:function(){return Ci(29,28,13,'#a7a9b8')+Ci(71,28,13,'#a7a9b8')+Ci(29,28,8,'#f5b5c5')+Ci(71,28,8,'#f5b5c5')+Ci(50,50,21,'#a7a9b8')+eyes(46,8,3.4)+Ci(50,56,3,'#e8607a')+Pa('M36 56 L22 53 M36 59 L22 61 M64 56 L78 53 M64 59 L78 61','none',' stroke="#555" stroke-width="1"')},
hedgehog:function(){var s='M18 52';for(var i=0;i<=10;i++){var a=Math.PI+i/10*Math.PI,r=i%2?26:33;s+=' L'+(50+Math.cos(a)*r).toFixed(1)+' '+(52+Math.sin(a)*r).toFixed(1)}return Pa(s+' Z','#6b4a2f')+E(50,54,20,16,'#e8c9a0')+eyes(50,8,3.3)+Ci(50,59,3,K)+smile(62,3)}
};
function svg(id,sz){var c=CHR[id];if(!c)return'';var a=ACC[hsh(id)%ACC.length],pr=c[2],fs=Math.max(6.5,Math.min(10,80/(.56*pr.length)));
  return'<svg viewBox="0 0 100 110" width="'+(sz||96)+'" height="'+Math.round((sz||96)*1.1)+'" role="img" aria-label="'+esc(c[1])+'" class="chsv">'+
   Pa('M24 82 Q50 92 76 82 L74 88 Q50 98 26 88 Z',a)+(DRAW[c[0]]||DRAW.owl)()+
   '<rect x="6" y="88" width="88" height="20" rx="5" fill="#fff" stroke="'+a+'" stroke-width="1.6"/><text x="50" y="101.5" text-anchor="middle" font-size="'+fs.toFixed(1)+'" font-weight="600" fill="'+a+'">'+esc(pr)+'</text></svg>'}
window.CHR=CHR;window.chSvg=svg;
window.chName=function(id){return CHR[id]?CHR[id][1]:''};
window.chBlock=function(id,small){var c=CHR[id];if(!c)return'';return'<div class="chb'+(small?' sm':'')+'">'+svg(id,small?64:92)+'<div><b>'+esc(c[1])+'</b><div class="chq">“'+esc(c[3])+'”</div>'+(small?'':'<p class="chs">'+esc(c[4])+'</p>')+'</div></div>'};
/* template cards */
try{var _tlc=tlCard;tlCard=function(ch,p){var h=_tlc(ch,p),k='" id="tl_'+p[0]+'">';return CHR[p[0]]?h.replace(k,k+chBlock(p[0])):h}}catch(e){}
/* gallery */
var GV={o:null};
window.chGallery=function(){GV.o=null;goView('chars')};
window.chOpen=function(id){GV.o=GV.o===id?null:id;render()};
function gallery(){var h='<h1>Template characters</h1><p class="sub">Every template is an animal with a catchphrase. When you read a question, ask: which character would jump in? Tap a character for its story.</p>';
  (typeof ST!=='undefined'?ST:[]).forEach(function(c){h+='<div class="card"><b>'+esc(c.n)+'</b><div class="chg">';
    c.f.forEach(function(f){f[1].forEach(function(x){var k=CHR[x[0]];if(!k)return;var on=GV.o===x[0];
      h+='<button class="chc'+(on?' on':'')+'" onclick="chOpen(\''+x[0]+'\')">'+svg(x[0],on?110:76)+'<b>'+esc(k[1])+'</b><small>'+esc(x[1])+'</small>'+(on?'<span class="chq">“'+esc(k[3])+'”</span><span class="chs">'+esc(k[4])+'</span><span class="chst">'+(x[3]||[]).map(function(s,i){return'<b>'+(typeof STG!=='undefined'?STG[i]:'Step '+(i+1))+':</b> '+esc(s)}).join('<br>')+'</span><span class="link" onclick="event.stopPropagation();tlOpen(\''+c.id+'\',\''+x[0]+'\')">Open the template ›</span>':'')+'</button>'})});
    h+='</div></div>'});
  app.innerHTML=h}
try{var G=GRP.maths;if(G&&!G.some(function(t){return t[0]==='chars'}))G.push(['chars','Characters']);if(typeof SECN!=='undefined')SECN.chars='Template characters'}catch(e){}
var _rc=render;render=function(){_rc();try{if(view==='chars')gallery();else if(view==='tl'&&!app.querySelector('.chgo')){var h1=app.querySelector('h1');if(h1)h1.insertAdjacentHTML('afterend','<button class="btn alt chgo" onclick="chGallery()">Meet the template characters</button>')}}catch(e){}};
var css=document.createElement('style');css.textContent=
 '.chb{display:flex;gap:12px;align-items:center;margin:4px 0 10px;padding:8px 10px;border-radius:12px;background:var(--accent-soft)}.chb b{display:block}.chb .chsv{flex:none}.chq{font-style:italic;margin-top:2px}.chs{margin:4px 0 0;font-size:.9rem;color:var(--muted)}.chb.sm{padding:6px 8px;margin:8px 0}'+
 '.chg{display:grid;grid-template-columns:repeat(auto-fill,minmax(104px,1fr));gap:8px;margin-top:8px}.chc{display:flex;flex-direction:column;align-items:center;text-align:center;gap:2px;border:1px solid var(--line);background:var(--card);border-radius:12px;padding:8px 4px;color:inherit;cursor:pointer}.chc small{color:var(--muted);font-size:.74rem}.chc b{font-size:.84rem}'+
 '.chc.on{grid-column:1/-1;align-items:flex-start;text-align:left;padding:12px;border-color:var(--accent)}.chc.on .chsv{align-self:center}.chc .chq,.chc .chs,.chc .chst{display:block;font-size:.88rem;margin-top:4px}.chc .chst{color:inherit}.chc .link{margin-top:8px}';
document.head.appendChild(css);
})();

/*PREP-END*/
