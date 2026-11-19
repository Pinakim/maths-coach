
/*TDH-START*/
/* TD: template Details. pid: {m: in plain words, y: why each of the 4 steps, t: common traps} */
var TD={
cx1:{m:"Powers of i repeat in a loop of four: i, −1, −i, 1, then back to i. So any power of i, however huge, is really one of just four values. Use this whenever you see i raised to a big or negative power.",
 y:["A big power looks scary, but it is only a position in a repeating loop of 4.","Every full group of 4 multiplies to i⁴ = 1, so whole groups change nothing. Only the leftover r matters.","After removing the groups of 4, iⁿ is the same as iʳ, and you know the four small powers by heart.","1/i = −i because i × (−i) = −i² = 1. For negative powers you can also add multiples of 4 to make the power positive."],
 t:["For a negative power, the remainder must be 0, 1, 2 or 3: −18 = 4 × (−5) + 2, not 4 × (−4) − 2.","Mixing up i³ = −i and i² = −1. Say the loop out loud: i, −1, −i, 1."]},
cx2:{m:"You cannot leave i in the bottom of a fraction. Multiplying top and bottom by the conjugate turns the bottom into a plain real number, so the answer can be written as a + ib.",
 y:["A complex number in the denominator means the answer is not yet in a + ib form.","The conjugate flips only the sign of the i part. (a + ib)(a − ib) has no i in it, so the bottom becomes real.","Using i² = −1 cleans up the top; the bottom always becomes a² + b².","Dividing each part of the top by the real bottom gives the real part and the imaginary part separately."],
 t:["Multiplying only the bottom by the conjugate. Top and bottom must both be multiplied, or the value changes.","Writing the bottom as a² − b². It is a² + b², because −(ib)² = +b²."]},
cx3:{m:"When two complex numbers are equal, their real parts are equal and their imaginary parts are equal. So one complex equation quietly hides two ordinary equations. Use it when real unknowns like x and y sit inside a complex equation.",
 y:["Real unknowns inside one complex equation are the signal: you need two equations, and this gives you both.","You can only compare like with like, so each side must be written clearly as (real) + i(imaginary).","a + ib = c + id means a = c and b = d. This is the definition of equal complex numbers.","Now it is a normal pair of simultaneous equations. Substituting back checks the arithmetic."],
 t:["Comparing before both sides are fully in a + ib form, for example leaving i² unsimplified.","Forgetting that x and y must be real. If x or y is itself complex, this method does not apply."]},
cx4:{m:"To find √(a + ib), suppose the answer is x + iy and square it. Matching parts gives two equations, and the modulus gives a third that makes solving quick.",
 y:["The square root of a complex number is another complex number, so it can be called x + iy.","(x + iy)² = x² − y² + 2ixy. Matching real and imaginary parts with a + ib gives these two equations.","Taking the modulus: x² + y² = √(a² + b²). Adding and subtracting this with x² − y² = a gives x² and y² straight away.","2xy = b tells you the signs: if b > 0, x and y have the same sign; if b < 0, opposite signs."],
 t:["Pairing the signs wrongly, which gives four answers instead of the correct two.","Writing x² + y² = a² + b². It is the modulus √(a² + b²), not its square."]},
cx5:{m:"Polar form describes a complex number by its distance from the origin (r) and its direction (θ), like giving a location as ‘5 km, north-east’. Use it when the question wants modulus and argument, or r(cos θ + i sin θ).",
 y:["Any mention of modulus, argument or polar form means you need r and θ.","r is just Pythagoras on the point (a, b). α is the basic angle, found using positive values only.","The basic angle α is the same in all quadrants; the signs of a and b decide which quadrant, and so the actual θ.","The principal argument is defined to lie in (−π, π], so angles in quadrants 3 and 4 are written as negative."],
 t:["Using tan⁻¹(b/a) straight on a calculator. It ignores the quadrant: −1 + i and 1 − i would get the same angle.","Giving θ = 4π/3 instead of −2π/3. Both point the same way, but only −2π/3 is the principal argument."]},
cx6:{m:"A locus is the path traced by all points z that obey a rule. Writing z = x + iy turns the complex rule into an ordinary x–y equation, which you can then recognise as a line or a circle.",
 y:["A condition involving |z − something| describes a set of points, which is a curve.","Putting z = x + iy changes the problem from complex numbers to coordinate geometry.","Modulus has a square root; squaring both sides removes it so the equation becomes simple.","A first-degree equation is a line; x² + y² with equal coefficients is a circle. |z − a| = |z − b| is always the perpendicular bisector."],
 t:["Writing |z − 2i| as √(x² + (y − 2i)²). Group the parts first: z − 2i = x + i(y − 2), so it is √(x² + (y − 2)²).","Stopping at the equation without naming the curve when the question asks what the locus is."]},
pc1:{m:"If some letters repeat, swapping two identical letters makes no new word. So count all arrangements as if the letters were different, then divide out the swaps that look the same.",
 y:["Repeated letters mean the plain n! overcounts.","You need the total number of letters and how many times each letter repeats.","Each letter repeating p times creates p! copies of every word, so divide by p! for each repeat.","With no repeats every arrangement is different, so the answer is simply n!."],
 t:["Miscounting the letters. Write each letter with its count, for example A×4, L×2, H, B, D, before using the formula.","Adding the factorials in the bottom instead of multiplying them."]},
pc2:{m:"‘Together’ problems: glue the group into one big block, arrange the blocks, then arrange the members inside the block. ‘Never together’ is everything minus together.",
 y:["‘Together’, ‘side by side’ or ‘never together’ is the signal.","Tying the group into one block makes it a single item, so the count of things to arrange becomes smaller.","The people inside the block can also swap among themselves, which creates more arrangements.","Counting ‘never together’ directly is messy; total − together is quick and safe."],
 t:["Forgetting to multiply by the arrangements inside the block.","Assuming ‘not all together’ and ‘no two together’ are the same. They are different questions."]},
pc3:{m:"Around a round table there is no first seat; turning everyone one place gives the same seating. Fixing one person removes this repetition, so n people can sit in (n − 1)! ways.",
 y:["A round table, ring, necklace or garland is the signal.","Fixing one person’s seat removes the rotations; the other n − 1 can then be arranged in a line.","A necklace can be turned over, so clockwise and anticlockwise look the same; divide by 2.","After the basic count, handle conditions like ‘two people together’ with the block method."],
 t:["Dividing by 2 for people at a table. Only flip-able things (necklaces, garlands) are divided by 2.","Using n! instead of (n − 1)!."]},
pc4:{m:"Forming numbers means filling places (units, tens, …) one by one. Fill the place with the strictest rule first, then multiply the choices.",
 y:["Digits being used to make numbers is the signal.","One box per place makes it clear what has to be filled.","If the units place must be even, or 0 cannot lead, fill that place first, otherwise the choices for it change later.","Each choice can be combined with every other, so multiply. A number cannot start with 0."],
 t:["Filling the places left to right and only then thinking about the restriction.","Allowing 0 in the first place."]},
pc5:{m:"‘At least’ and ‘at most’ mean several cases are allowed. Count each allowed case and add, or for ‘at least one’, take the total minus the case of none.",
 y:["The words ‘at least’ or ‘at most’ mean more than one case is allowed.","Listing every case (3 women, 4 women, …) makes sure none is missed.","Inside one case choose each kind separately and multiply; different cases are added.","‘At least one’ has many cases but only one opposite (none), so subtract."],
 t:["Choosing the minimum first (say 3 women) and then ‘any 2 from the rest’. This double counts.","Multiplying the cases together instead of adding them."]},
bt1:{m:"Every term of (a + b)ⁿ follows one formula, the general term. To find one particular term, write the general term, work out which r gives the power you need, and evaluate.",
 y:["A particular term or power of x is asked, not the full expansion.","Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ gives every term in one line.","Collect the power of x from a and b, set it equal to k, and solve for r.","Put r back. Keep the signs and the numbers inside a and b."],
 t:["Mixing up Tᵣ and Tᵣ₊₁. The term number is one more than r.","Forgetting to raise the number with x to its power: (3)⁵, not 3."]},
bt2:{m:"The term independent of x is the term with no x left, that is, x⁰. Write the power of x in the general term, set it to 0 and solve for r.",
 y:["x and 1/x both inside the bracket means the powers can cancel to give a constant term.","Combine the powers from both parts into one expression in r.","No x means power 0. If r is not a whole number, there is no such term.","Put r into the general term and calculate, including the sign."],
 t:["Losing the minus sign: (−1/x)ʳ gives (−1)ʳ.","Calling the answer ‘the rth term’ instead of the (r + 1)th."]},
bt3:{m:"(a + b)ⁿ has n + 1 terms. If that count is odd there is one middle term; if even, two. Find its position, then use the general term.",
 y:["‘Middle term’ is the signal.","n even means n + 1 terms (odd), so one middle term at position n/2 + 1.","n odd means an even number of terms, so two middle terms.","Middle position r + 1 tells you r; then use Tᵣ₊₁."],
 t:["Using n instead of n + 1 for the number of terms.","Forgetting the sign when b is negative."]},
bt4:{m:"To prove a power expression is divisible by a number, rewrite the base so that the binomial expansion shows the divisor as a common factor.",
 y:["‘Show divisible by’ with a power of n is the signal.","Writing 9 as 1 + 8 makes every term after the first contain powers of 8.","The first terms cancel with the extra parts like −8n − 1.","Each leftover term contains 8² = 64, so 64 is a factor."],
 t:["Choosing a split that does not connect to the divisor.","Stopping before pulling out the factor clearly."]},
ss1:{m:"An AP is fixed by just two numbers: its first term a and common difference d. Each piece of information gives one equation; solve them, then find what is asked.",
 y:["Given terms of an AP mean equations in a and d.","Every term is a plus some number of d’s, so each condition is a simple equation.","Subtracting removes a, giving d straight away.","Plugging a and d into a given term catches mistakes."],
 t:["Writing aₙ = a + nd instead of a + (n − 1)d.","Finding a and d but forgetting to calculate the term actually asked."]},
ss2:{m:"The sum of an AP is (number of terms) × (average of first and last term). Use it whenever a total of AP terms is involved.",
 y:["A sum or total of AP terms is the signal.","Pairing first + last, second + second-last and so on gives equal pairs, which is where the formula comes from.","If n is unknown the equation becomes a quadratic in n.","The number of terms must be a positive whole number; check both roots."],
 t:["Throwing away a valid second root. In the example both 18 and 19 work because the 19th term is 0.","Using l for the last term when it is not actually known."]},
ss3:{m:"In a GP each term is the last one times a fixed ratio r. If |r| < 1 the terms shrink so fast that the infinite sum settles at a/(1 − r).",
 y:["A constant ratio between terms, or a recurring decimal, is the signal.","These come from the pattern a, ar, ar², …","For an infinite sum, rⁿ becomes 0 when |r| < 1, leaving a/(1 − r).","If |r| ≥ 1 the terms do not shrink, so there is no finite sum."],
 t:["Using S∞ when |r| ≥ 1.","Choosing a and r wrongly for a recurring decimal: 0.3535… = 0.35 + 0.0035 + …, so a = 0.35 and r = 0.01."]},
ss4:{m:"AM is the ordinary average; GM is the square root of the product. They lead straight to a + b and ab, which is all you need to find the two numbers.",
 y:["AM or GM of two numbers is the signal.","These are the definitions.","AM gives a + b, GM gives ab, so the numbers are roots of x² − (a + b)x + ab = 0.","AM ≥ GM for positive numbers; it is a quick check and a common proof step."],
 t:["Forgetting to square the GM to get ab.","Solving for a and b separately instead of using sum and product."]},
ss5:{m:"When a series is not AP or GP, write its nth term as powers of n, then add using the standard results for Σn, Σn² and Σn³.",
 y:["No common difference or ratio means a special series.","Spot the pattern in each term and write Tₙ using n, n², n³.","Σn = n(n + 1)/2, Σn² = n(n + 1)(2n + 1)/6, Σn³ = [n(n + 1)/2]².","Putting n = 1 must give the first term."],
 t:["Writing Tₙ wrongly. Check it by putting n = 1, 2.","Mixing up the Σn² and Σn³ formulas."]},
sl1:{m:"The section formula finds the point that divides a line segment in a given ratio. It is a weighted average: the point leans towards the end with the larger weight.",
 y:["A ratio m : n, or ‘divides the join’, is the signal.","Each coordinate is the weighted average of the two ends.","When the ratio is unknown, call it k : 1; one equation then finds k.","With m = n you get the midpoint, a quick check."],
 t:["Pairing the ratio with the wrong points. m goes with the second point (x₂, y₂).","On the x-axis y = 0; on the y-axis x = 0. Mixing these up."]},
sl2:{m:"Three points make a triangle unless they lie on one line. The area formula gives the triangle’s area, and area 0 means the points are collinear.",
 y:["Three points with area or collinearity is the signal.","This formula comes from the shoelace method.","A triangle with no area is flat, so the points lie on one line.","Area cannot be negative, so take the modulus and keep the ½."],
 t:["Forgetting the ½.","Cyclic order mistakes: it is y₂ − y₃, y₃ − y₁, y₁ − y₂."]},
sl3:{m:"A straight line is fixed by a point and a direction (slope), or by two points, or by its intercepts. Pick the form that matches what is given.",
 y:["Listing what you know shows which form to use.","Each form needs exactly the given information.","Standard answers are written as ax + by + c = 0.","The given point must make the equation true."],
 t:["Sign slips in y − y₁ when y₁ is negative.","Swapping rise and run when finding the slope."]},
sl4:{m:"Parallel lines have the same slope; perpendicular lines have slopes whose product is −1. So you can write the new line by copying or swapping the x and y coefficients.",
 y:["‘Parallel’ or ‘perpendicular’ is the signal.","Parallel keeps ax + by; perpendicular swaps to bx − ay. Only the constant is new.","The line must pass through the given point; this finds k.","m₁ = m₂ or m₁m₂ = −1 confirms it."],
 t:["Forgetting to change one sign when swapping for perpendicular.","Writing −1/m as −m."]},
sl5:{m:"The shortest distance from a point to a line is straight across, at right angles. The formula gives that length directly.",
 y:["Distance involving a line is the signal.","The formula needs the line in ax + by + c = 0 form.","For parallel lines, the distance is the gap between their constants.","The x and y coefficients must match before using |c₁ − c₂|."],
 t:["Using parallel lines whose coefficients do not match, for example 3x + 4y and 6x + 8y.","Leaving out the modulus, which can give a negative distance."]},
sl6:{m:"The angle between two lines depends only on their slopes. The formula gives tan of that angle.",
 y:["‘Angle between lines’ is the signal.","The slopes carry the direction of each line.","This comes from tan(A − B) applied to the angles the lines make with the x-axis.","The modulus gives the acute angle; the obtuse one is 180° minus it."],
 t:["Forgetting the 1 + m₁m₂ in the bottom.","Taking m from ax + by + c = 0 as a/b. It is −a/b."]},
ci1:{m:"A circle is all points at distance r from the centre. Knowing the centre and radius, or the two ends of a diameter, fixes the circle.",
 y:["Centre and radius, or the ends of a diameter, is the signal.","The first form is just the distance formula; the second uses the right angle in a semicircle.","Expanding gives the general form, usually needed in the answer.","Checking that a known point fits catches mistakes."],
 t:["Signs inside (x − h)²: centre (2, −3) gives (x − 2)² + (y + 3)².","Writing r instead of r²."]},
ci2:{m:"The general circle has three unknowns g, f, c. Three points give three equations; solve them to find the circle.",
 y:["Three points on a circle is the signal.","Each point on the circle must satisfy the equation.","Subtracting cancels c, making the equations easier.","Putting a point back in confirms the answer."],
 t:["Using the point (0, 0): it simply gives c = 0. Use that shortcut.","Arithmetic slips with 2g and 2f."]},
ci3:{m:"From the general form you can read the centre and radius quickly, once x² and y² have coefficient 1.",
 y:["x² + y² with x, y terms means general form.","The formula only works when x² and y² have coefficient 1.","Centre (−g, −f) comes from completing the square.","If g² + f² − c is negative, no real circle exists."],
 t:["Not dividing by the coefficient of x² first.","Forgetting that 2g is the x coefficient, so g is half of it."]},
ci4:{m:"Whether a line cuts, touches or misses a circle depends on how far it is from the centre compared with the radius.",
 y:["A line and a circle together is the signal.","You need the centre and the radius.","Use the distance from a point to a line.","Touching means the distance equals the radius exactly."],
 t:["Forgetting ± when the distance is in a modulus.","Not writing the line as ax + by + c = 0 first."]},
tr1:{m:"Any angle can be reduced to a basic angle between 0° and 90°. The quadrant decides the sign, and the basic angle decides the value.",
 y:["An angle bigger than 90° or negative is the signal.","Adding or removing 360° does not change any trig value.","ASTC (All, Sin, Tan, Cos) tells which ratios are positive in each quadrant.","Use the basic angle’s value with the sign from the quadrant."],
 t:["Changing sin to cos for 180° or 360°. Only 90° and 270° change the function.","Taking the sign from the basic angle instead of the actual quadrant."]},
tr2:{m:"Angles like 15°, 75° and 105° are sums or differences of 30°, 45° and 60°. The compound-angle formulas then give exact values.",
 y:["An angle you do not know directly, but can build from 30°, 45°, 60°.","Splitting it lets you use known values.","These formulas are the core of trig.","Check the sign: sin 75° must be positive."],
 t:["Signs: cos(A + B) = cos A cos B − sin A sin B. The sign flips for cos.","Writing sin(A + B) = sin A + sin B."]},
tr3:{m:"To prove an identity, work on one side only and turn it into the other side. Start from the messier side.",
 y:["‘Prove’ or ‘show that’ is the signal.","The messier side has more to simplify.","Changing everything to sin and cos, or using one formula family, makes things cancel.","You must reach the other side exactly, step by step."],
 t:["Working on both sides at once, or crossing the equals sign.","Using a formula half-remembered. Check it with a simple angle."]},
tr4:{m:"Sum-to-product formulas turn a sum like sin A + sin B into a product. Products cancel easily in fractions.",
 y:["Two sines or two cosines added or subtracted is the signal.","These formulas change sums into products.","Half-sum and half-difference often give neat angles.","Common factors on top and bottom then cancel."],
 t:["Signs in cos C − cos D = −2 sin((C + D)/2) sin((C − D)/2).","Mixing up which formula has sin and which has cos."]},
tr5:{m:"A trig equation has infinitely many answers because trig functions repeat. The general solution writes all of them in one formula using n.",
 y:["‘Solve’ with a trig equation and no restricted range is the signal.","First reduce the equation to the simple form sin x = sin α.","Each function has its own repeating pattern.","n = 0 gives one answer to check in the original equation."],
 t:["Dividing by sin x or cos x and losing solutions where it is 0.","Using the sin formula for a cos equation."]},
tr6:{m:"a sin x + b cos x can be written as one wave R sin(x + α), with R = √(a² + b²). So its values swing between −R and R.",
 y:["A mix of sin and cos with numbers in front is the signal.","R is the size of the combined wave.","A sine wave goes from −1 to 1, so R sin goes from −R to R.","An added constant moves the whole range up or down."],
 t:["Adding a + b instead of √(a² + b²).","Forgetting to add the constant to both max and min."]},
qe1:{m:"The discriminant D = b² − 4ac tells what kind of roots a quadratic has, without solving it.",
 y:["‘Nature of roots’, ‘equal roots’ or ‘real roots’ is the signal.","D is the part under the square root in the formula.","Positive D gives two values, zero gives one, negative gives non-real roots.","If a = 0 it is not a quadratic, so reject that value."],
 t:["Using D > 0 for ‘real roots’. Real roots means D ≥ 0.","Forgetting a ≠ 0."]},
qe2:{m:"Without finding the roots α and β, you can find their sum and product from the coefficients. Most expressions can then be built from these two.",
 y:["An expression in α and β is the signal.","These come from comparing (x − α)(x − β) with the quadratic.","For example α² + β² = (α + β)² − 2αβ.","Substitute the sum and product."],
 t:["Sign: α + β = −b/a, not b/a.","Solving for the roots when the question does not need them."]},
qe3:{m:"Any quadratic with roots α and β can be written as x² − (sum)x + product = 0. Find the sum and product of the new roots and write it down.",
 y:["‘Form the equation’ with roots given is the signal.","Sum and product are all you need.","This comes from (x − α)(x − β).","A neat answer has whole number coefficients."],
 t:["Writing x² + Sx + P. It is minus S.","Not checking that the surds or i cancel in the sum and product."]},
qe4:{m:"When D is negative, the roots are not real. Using √(−1) = i, the formula still works and gives complex roots.",
 y:["A negative discriminant is the signal.","√(−k) = i√k.","Divide everything by 2a carefully.","Complex roots of a real quadratic always come as a ± ib."],
 t:["Writing √(−16) = −4.","Forgetting the ±."]},
cs1:{m:"A parabola has only one squared variable. Matching it with a standard form gives a, and a tells you the focus, directrix and latus rectum.",
 y:["Only one of x or y is squared.","Matching gives a.","These follow from a in the standard form.","Negative a means the parabola opens left or down."],
 t:["Taking 4a as a: from x² = −16y, 4a = −16 so a = −4.","Putting the focus on the wrong axis."]},
cs2:{m:"An ellipse has x² and y² with a plus between them. The bigger denominator shows the long (major) axis.",
 y:["Plus between the squares, both positive.","The larger denominator is a².","For an ellipse c² = a² − b², and e < 1.","Foci always lie on the major axis."],
 t:["Using c² = a² + b² (that is for a hyperbola).","Assuming the major axis is along x always."]},
cs3:{m:"A hyperbola has a minus between x² and y². The positive term shows the transverse axis, where the foci lie.",
 y:["Minus between the squares.","The positive term gives the direction of opening.","For a hyperbola c² = a² + b², and e > 1.","e > 1 confirms it is a hyperbola."],
 t:["Using c² = a² − b².","Taking a² from the negative term."]},
cs4:{m:"To build a conic’s equation from facts, find which axis it lies on, then find a and b. Once you have them, the standard form writes itself.",
 y:["Foci, vertices, eccentricity or latus rectum given, and an equation asked, is the signal.","Foci (±5, 0) are on the x-axis, so the major (or transverse) axis is the x-axis and x² takes the larger denominator.","Vertices give a = 13, foci give c = 5. For an ellipse b² = a² − c² = 169 − 25 = 144; for a hyperbola b² = c² − a².","Put a² and b² in: x²/169 + y²/144 = 1."],
 t:["Writing a and b instead of a² and b² in the denominators.","Using the ellipse relation for a hyperbola or the other way round."]},
pr1:{m:"Probability is ‘how many ways can what I want happen’ divided by ‘how many ways can anything happen’. It works when every outcome is equally likely, like a fair coin, die or a well-shuffled pack.",
 y:["Coins, dice, cards or a random pick are the signal that outcomes are equally likely.","n(S) is the full list of what can happen. With two dice, each die has 6 faces, so 6 × 6 = 36 outcomes.","n(E) counts only the outcomes that match the event. For sum 8: (2,6), (3,5), (4,4), (5,3), (6,2), so 5.","Probability is a share of the total, so it must be between 0 (impossible) and 1 (certain)."],
 t:["Treating (2, 6) and (6, 2) as one outcome. The two dice are different, so they are two outcomes.","Missing outcomes. Draw a 6 × 6 grid for two dice and count from it."]},
pr2:{m:"When several items are drawn together, order does not matter, so count with ⁿCᵣ. Count the ways to get what you want, divide by all the ways of drawing.",
 y:["‘Drawn at random’, ‘without replacement’ or ‘taken together’ means order does not matter, so use combinations.","Total ways: choose r items from everything in the bag, ⁿCᵣ. With 9 balls and 2 drawn, ⁹C₂ = 36.","Favourable ways: choose the needed number from each colour and multiply. Both red from 4 red: ⁴C₂ = 6.","P = 6/36 = 1/6. Both counts use combinations, so they match."],
 t:["Using permutations on top and combinations below. Use the same method in both.","Adding the choices for different colours instead of multiplying them."]},
pr3:{m:"For ‘A or B’, add both probabilities, then take away the part where both happen, because it got counted twice.",
 y:["The word ‘or’ (or ‘either’) means the union A ∪ B.","Anything in both A and B is inside P(A) and inside P(B), so it is added twice. Subtract it once.","Think about what is in both. King or heart: the king of hearts is both a king and a heart.","If A and B can never happen together (like a 2 and a 5 on one die), the overlap is 0 and you just add."],
 t:["Forgetting to subtract the overlap: 4/52 + 13/52 = 17/52 is wrong; the answer is 16/52 = 4/13.","Subtracting the overlap when the events are mutually exclusive and there is none."]},
pr4:{m:"‘At least one’ covers many cases (one, two, three, …), but its opposite is just ‘none’. Find P(none) and subtract it from 1.",
 y:["‘At least one’ is the signal to use the opposite event.","‘None’ is one simple case. For three coins, no head means TTT, so P(none) = 1/8.","Something either happens at least once or not at all, so the two probabilities add to 1.","1 − 1/8 = 7/8, which lies between 0 and 1 ✓"],
 t:["Listing all the ‘at least one’ cases by hand and missing some.","Using 1 − P(all) instead of 1 − P(none)."]},
se1:{m:"When two groups overlap, simply adding them counts the people in both groups twice. Take the overlap away once to get how many are in at least one group.",
 y:["Two or more groups that share members (likes cricket, likes football) is the signal.","People who like both are inside n(A) and inside n(B), so they are counted twice; subtract once.","In a Venn diagram, write the overlap in the middle first, then the ‘only’ parts: 35 − 10 = 25 cricket only, 25 − 10 = 15 football only.","Union = 25 + 10 + 15 = 50. Neither = total − union = 60 − 50 = 10."],
 t:["Forgetting to subtract the overlap, which makes the union bigger than it is.","Confusing ‘likes cricket’ (35) with ‘likes only cricket’ (25)."]},
se2:{m:"To make a subset, each element is either in or out: two choices. With n elements, that is 2 × 2 × … = 2ⁿ subsets.",
 y:["‘How many subsets’ or ‘power set’ is the signal.","Each element is a yes/no choice, and choices multiply: 2ⁿ. For {1, 2, 3, 4}, 2⁴ = 16.","A proper subset is any subset except the set itself, so 2ⁿ − 1 = 15.","The power set is the collection of all subsets, so it has 2ⁿ members."],
 t:["Forgetting that the empty set { } is a subset of every set.","Taking away 2 for proper subsets. Only the set itself is removed, so it is 2ⁿ − 1."]},
se3:{m:"De Morgan’s laws: ‘not (A or B)’ is the same as ‘not A and not B’. ‘Not (A and B)’ is ‘not A or not B’. The bar outside swaps ∪ and ∩.",
 y:["A dash (complement) on a union or intersection is the signal.","Taking the complement swaps ∪ with ∩ and puts a dash on each set.","Work from the universal set: A ∪ B = {1, 2, 3, 4}, so what is left in U is {5, 6}.","Shade a quick Venn diagram to see the same region."],
 t:["Writing (A ∪ B)′ = A′ ∪ B′. The ∪ must change to ∩.","Forgetting the elements of U that are in neither A nor B."]},
rf1:{m:"The domain is every x you are allowed to put in. Two things are not allowed: dividing by zero, and taking the square root of a negative number.",
 y:["A fraction or a square root in f(x) is the signal to check for forbidden values.","Bottom ≠ 0; inside √ ≥ 0. If the root is in the bottom, it cannot be 0 either, so inside > 0.","Here x² − 9 > 0, so (x − 3)(x + 3) > 0, which is true when x < −3 or x > 3.","Intervals with round brackets show the end points are not included."],
 t:["Using ≥ 0 when the square root is in the denominator. Then 0 would make the bottom zero.","Keeping only one side, such as x > 3, and losing x < −3."]},
rf2:{m:"The range is every output value the function can actually give. Work backwards: given an output y, can you find an x that produces it?",
 y:["‘Find the range’ is the signal.","Calling the output y lets you work backwards.","Make x the subject: y = x/(x − 2) gives x = 2y/(y − 1).","x is not defined when y = 1, so 1 can never be an output. Range = ℝ − {1}."],
 t:["Giving the domain (x ≠ 2) as the range.","Not checking whether the x you found is in the domain."]},
rf3:{m:"A relation from A to B is any collection of pairs (a, b). With m × n possible pairs, each pair is either included or not, so there are 2ᵐⁿ relations.",
 y:["‘Number of relations’ is the signal.","A × B has every pair: 3 × 2 = 6 pairs.","Each of the 6 pairs is in or out, so 2⁶ = 64 relations.","A function is stricter: each element of A picks exactly one element of B, so nᵐ = 2³ = 8 functions."],
 t:["Mixing up relations (2ᵐⁿ) and functions (nᵐ).","Swapping m and n in nᵐ: the base is the size of B."]},
li1:{m:"Solve an inequality just like an equation, with one extra rule: when you multiply or divide both sides by a negative number, the sign flips.",
 y:["An inequality sign (<, >, ≤, ≥) with one unknown is the signal.","Adding or subtracting the same number on both sides keeps the inequality true: 3 − 2x > 9 becomes −2x > 6.","Dividing by −2 flips the sign: x < −3. (Think: 2 > 1, but −2 < −1.)","(−∞, −3) shows every solution; a round bracket means −3 itself is not included."],
 t:["Forgetting to flip the sign after dividing by a negative.","Using a square bracket when the inequality is strict (< or >)."]},
li2:{m:"Each inequality in x and y shades one side of a line. The answer to the system is the region where all the shadings overlap.",
 y:["Two or more inequalities in x and y is the signal.","The boundary line is the ‘equal to’ case. Dashed for < or >, solid for ≤ or ≥.","Put (0, 0) in: if it makes the inequality true, shade the side with the origin; if false, the other side.","The region common to all the inequalities is the solution set."],
 t:["Drawing a solid line for a strict inequality.","Testing with (0, 0) when the line passes through the origin. Use another point like (1, 0)."]},
td1:{m:"Distance in 3D is Pythagoras used twice. Square the differences in x, y and z, add them, and take the square root.",
 y:["Points with three coordinates is the signal.","Δx, Δy, Δz form the edges of a box; the distance is its diagonal.","For shape questions, find all three side lengths.","Equal sides mean isosceles or equilateral; a² + b² = c² means right-angled."],
 t:["Sign slips: 3 − (−2) = 5, not 1.","Forgetting the z difference."]},
td2:{m:"Dividing a line segment in space works exactly like 2D: a weighted average of the end points, with a z-coordinate too.",
 y:["A ratio of division with 3D points is the signal.","With ratio k : 1 there is only one unknown to find.","On the yz-plane every point has x = 0, so set the x-coordinate of the dividing point to 0.","Solving gives k, and then put k back to get the point."],
 t:["Setting the wrong coordinate to zero: the yz-plane means x = 0.","Pairing k with the wrong end point."]},
ld1:{m:"If putting x = a gives 0/0, the top and bottom share a factor (x − a). Factor it out, cancel it, and then substitute.",
 y:["Getting 0/0 when you substitute is the signal. 0/0 is not an answer; it means ‘simplify first’.","Factor: x² − 9 = (x − 3)(x + 3).","Near x = 3 (but not equal to it), x − 3 is not zero, so it can be cancelled.","Now x + 3 at x = 3 gives 6."],
 t:["Writing 0/0 = 0 or 0/0 = 1.","Substituting before cancelling, and getting stuck."]},
ld2:{m:"Some limits match ready-made results: sin x / x → 1 as x → 0, and (xⁿ − aⁿ)/(x − a) → naⁿ⁻¹. Reshape the question to fit them.",
 y:["sin or tan of a small angle, or xⁿ − aⁿ, is the signal.","The standard form needs the same angle in sin and below it: sin 4x / 4x.","These results are already proved, so you can use them directly.","Multiply and divide by the same number: (sin 4x / 4x) × 4x and (2x / sin 2x) ÷ 2x leave 4x/2x = 2."],
 t:["Using degrees. These results are only true in radians.","Not matching the angle: sin 4x needs 4x underneath, not x."]},
ld3:{m:"A square root that gives 0/0 can often be fixed by multiplying top and bottom by its conjugate, which removes the root.",
 y:["A square root with 0/0 on substitution is the signal.","(√a − b)(√a + b) = a − b², so the root disappears.","(1 + x) − 1 = x on top cancels with the x below.","Then 1/(√(1 + x) + 1) at x = 0 is 1/2."],
 t:["Multiplying only the top by the conjugate.","Expanding (√(1 + x) − 1)(√(1 + x) + 1) wrongly."]},
ld4:{m:"Derivative rules are shortcuts so you do not use first principle every time: one rule for products, one for quotients, and simple derivatives for basic functions.",
 y:["Two functions multiplied, divided or added is the signal.","Product: first’s derivative × second, plus first × second’s derivative. Quotient: (u′v − uv′)/v².","Basic derivatives you must know: xⁿ → nxⁿ⁻¹, sin x → cos x, cos x → −sin x.","Collect terms or take out common factors."],
 t:["Writing (uv)′ = u′v′.","Swapping the order in the quotient rule. It is u′v − uv′, top first."]},
ld5:{m:"First principle is the definition of the derivative: the slope between x and x + h, as the step h shrinks to zero.",
 y:["‘By first principle’ or ‘from the definition’ is the signal.","This is the slope of the chord, which becomes the slope of the tangent as h → 0.","(x + h)² − x² = 2xh + h². Dividing by h gives 2x + h.","As h → 0 this becomes 2x."],
 t:["Putting h = 0 before cancelling, which gives 0/0.","Writing f(x + h) wrongly, e.g. (x + h)² = x² + h²."]},
st1:{m:"Mean deviation tells how far, on average, the values are from the centre. Signs are ignored, so values above and below do not cancel.",
 y:["‘Mean deviation’ is the signal.","Find the centre first: mean = 80/8 = 10.","|x − 10| gives distances: 6, 3, 2, 1, 0, 2, 3, 7.","Average: 24/8 = 3."],
 t:["Keeping the signs: then the deviations add to 0.","Using the median when the question says ‘about the mean’."]},
st2:{m:"Variance measures spread: the average of the squared distances from the mean. Standard deviation is its square root, in the same units as the data.",
 y:["‘Variance’ or ‘standard deviation’ is the signal.","A table with x, f, fx, fx² keeps the working tidy.","Mean of squares minus square of the mean. Squares: 36 + 64 + 100 + 144 + 196 = 540, so 540/5 − 10² = 108 − 100 = 8.","σ = √8. A spread cannot be negative."],
 t:["Forgetting to square the mean before subtracting.","Giving the variance when SD is asked, or the other way round."]},
st3:{m:"The coefficient of variation compares spread relative to the mean, as a percentage. A smaller CV means the data are more consistent.",
 y:["Two sets with different means being compared is the signal.","σ alone is unfair when means differ; dividing by the mean gives a fair comparison.","A: 10/50 × 100 = 20%. B: 6/40 × 100 = 15%.","B has the smaller CV, so B is more consistent."],
 t:["Comparing σ only.","Thinking a bigger CV is better. Bigger CV means more variation."]}
};

/* ========== Template Details: plain meaning, each step with why, worked example, traps, Ask Claude ========== */
function tdHtml(ch,p){var d=TD[p[0]];if(!d)return'';var ex=p[5]||[],open=TLF.p===p[0];
  var h='<details class="tdx"'+(open?' open':'')+' ontoggle="tdSeen(\''+p[0]+'\',this.open)"><summary><span class="tdsum"><b>Details</b><small>Meaning, each step with the reason, and a worked example</small></span><span class="tdchev" aria-hidden="true">▾</span></summary><div class="tdb">';
  h+='<p class="thl">In plain words</p><p class="tdm">'+esc(d.m)+'</p>';
  h+='<p class="thl">Step by step, on an example</p><div class="tdq"><span>Example</span>'+esc(p[4])+'</div><ol class="tds">';
  p[3].forEach(function(s,i){var L=ex.filter(function(e){return e[0]===i});
    h+='<li><div class="tdst"><b>'+STG[i]+'</b> '+esc(s)+'</div><div class="tdy"><span>Why</span> '+esc(d.y[i]||'')+'</div>'+
      (L.length?'<div class="tde"><span>In the example</span>'+L.map(function(e){return'<div>'+esc(e[1])+'</div>'}).join('')+'</div>':'')+'</li>'});
  h+='</ol><div class="tda"><span>Answer</span> '+esc(p[6])+'</div>';
  h+='<p class="thl">Watch out</p><ul class="tdt">'+d.t.map(function(t){return'<li>'+esc(t)+'</li>'}).join('')+'</ul>';
  if(p[7]&&p[7].length)h+='<p class="thl">Try one yourself</p><ul class="tdp">'+p[7].map(function(q){return'<li>'+esc(q)+'</li>'}).join('')+'</ul>';
  h+='<button class="btn alt chatb tdask" onclick="tdAsk(\''+p[0]+'\')">Ask Claude: a new example, explained</button></div></details>';
  return h}
function tdSeen(pid,o){if(!o)return;try{S.tds=S.tds||{};if(!S.tds[pid]){S.tds[pid]=1;save()}}catch(e){}}
function tdAsk(pid){var r=stFind(pid);if(!r)return;var p=r.p,d=TD[pid]||{m:'',y:[]};
  openChat(chatHead()+'Chapter: '+r.c.n+'\nTemplate: '+p[1]+'\nSpot it: '+p[2]+'\nIn plain words: '+d.m+'\nSteps: '+p[3].map(function(s,i){return STG[i]+' — '+s+(d.y[i]?' (why: '+d.y[i]+')':'')}).join('; ')+'\nThe app already showed me this example: '+p[4]+'\n\nI want to understand this template better. Explain it to me in simple words, then give me ONE new example (different numbers, a bit different from the one above) and walk through it step by step, naming each step (Spot, Set up, Solve, Check) and saying WHY each step is done. Then give me a similar question to try and wait for my answer. Keep each reply short.')}
var _tlCard0=tlCard;tlCard=function(ch,p){var h=_tlCard0(ch,p),d=tdHtml(ch,p);if(!d)return h;
  var i=h.indexOf('<p class="tlw">');return i<0?h.replace(/<\/div>$/,d+'</div>'):h.slice(0,i)+d+h.slice(i)};
(function(){var st=document.createElement('style');st.textContent=
 '.tdx{margin:10px 0 4px;border:1px solid var(--line);border-left:4px solid var(--c4);border-radius:10px;background:var(--bg)}'+
 '.tdx summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;min-height:44px}'+
 '.tdx summary::-webkit-details-marker{display:none}'+
 '.tdsum{display:flex;flex-direction:column}.tdsum b{color:var(--c4);font-size:1rem}.tdsum small{color:var(--muted);font-size:.78rem}'+
 '.tdchev{color:var(--c4);transition:transform .15s}.tdx[open] .tdchev{transform:rotate(180deg)}'+
 '.tdb{padding:2px 12px 12px}.tdb .thl{display:block;margin:12px 0 4px}.tdm{margin:0;line-height:1.5}'+
 '.tdq,.tda{background:var(--card);border:1px solid var(--line);border-radius:8px;padding:8px 10px;margin:4px 0 8px}'+
 '.tdq span,.tda span,.tdy span,.tde span{font-size:.7rem;text-transform:uppercase;letter-spacing:.05em;font-weight:700;margin-right:6px}'+
 '.tdq span{color:var(--c1);display:block}.tda span{color:var(--ok)}'+
 '.tds{padding-left:1.3em;margin:4px 0}.tds li{margin:0 0 10px}.tdst b{color:var(--c4);margin-right:3px}'+
 '.tdy{margin:3px 0;font-size:.9rem;line-height:1.45}.tdy span{color:var(--c5)}'+
 '.tde{margin:4px 0 0;padding:6px 9px;border-radius:6px;background:var(--accent-soft);font-size:.9rem}.tde span{color:var(--c1);display:block;margin-bottom:2px}'+
 '.tdt,.tdp{margin:2px 0 6px;padding-left:1.2em}.tdt li,.tdp li{margin:3px 0;line-height:1.45}.tdt li::marker{color:var(--bad)}'+
 '.tdask{margin-top:10px;width:100%}';document.head.appendChild(st)})();

/* ========== Hint: help when stuck partway (stuck at a step, my last line, notebook photo) ========== */
var HMS={},HMT='st',HMB=false,HMPF=null,HMPAD=null;
var HMG=[['Spot','Working out what kind of question this is'],['Set up','Writing the formula or equation to use'],['Solve','Doing the working'],['Check','Finishing or checking the answer']];
function hmOk(c){return c&&(c.kind==='gen'||c.kind==='ex')&&!/^(lz|sp):/.test(c.key)}
/* the template behind the problem, if the app can tell */
function hmTpl(c){try{var ch=chId(c.topic);if(!ch||!TH[ch])return null;var m=eM(ch,c.q);if(!m.conf)return null;var r=stFind(m.c[0]);return r?r.p:null}catch(e){return null}}
function hmSteps(c){var p=hmTpl(c);return HMG.map(function(g,i){return[g[0],p?p[3][i]:g[1]]})}
function hmSecret(c){return c.secret||('Answer: '+(c.ans||'')+(c.h?'\nWorking: '+c.h:''))}
function hmHead(c){var p=hmTpl(c);return'You are a warm, encouraging maths tutor helping ONE student who is stuck partway through a problem in a practice app.\nSection: '+c.sec+'\nChapter: '+c.topic+(c.concept?' · Concept: '+c.concept:'')+'\nProblem: '+c.q+(c.o?'\nOptions: '+c.o.map(function(o,i){return'('+'abcd'[i]+') '+o}).join(' | '):'')+
  (p?'\nTemplate for this type: '+p[1]+'. Steps: '+p[3].map(function(s,i){return STG[i]+' — '+s}).join('; '):'')+'\nFor your eyes only (never reveal the final answer or which option is right):\n'+hmSecret(c)+intLine()+'\n\n'}
function hmLog(c,txt){try{hLog(c,2,txt)}catch(e){}}
function hmHtml(c){var k=c.key;
  var h='<div class="hmid"><p class="thl">Stuck partway through?</p><p class="sub" style="margin:0 0 6px;font-size:.82rem">Get help with just the part you are on, not the whole problem.</p><div class="seg hmseg" role="tablist" aria-label="Kind of help">'+
   [['st','Stuck at a step'],['ln','My last line'],['ph','Notebook photo']].map(function(t){return'<button role="tab" aria-selected="'+(HMT===t[0])+'" onclick="HMT=\''+t[0]+'\';hmRender()">'+t[1]+'</button>'}).join('')+'</div><div id="hmBody">';
  if(HMT==='st'){h+='<p class="sub hml">Which step are you stuck on?</p>'+hmSteps(c).map(function(s,i){var L=(HMS[k+'|'+i]||[]).length;return'<button class="hmstep" onclick="hmStep('+i+')"'+(L>=3?' disabled':'')+'><b>'+s[0]+'</b><span>'+esc(s[1])+'</span><i>'+(L?(L>=3?'3/3':L+'/3'):'')+'</i></button>'}).join('')}
  else if(HMT==='ln'){h+='<label class="sub hml" for="hmTx">Type the last line you are sure of</label><textarea id="hmTx" class="field" rows="2" placeholder="e.g. 2x + 3y = 4"></textarea>'+
    '<p class="sub hml">…or write it with your finger or stylus</p><canvas id="hmPad" class="hmpad" aria-label="Writing pad"></canvas><button class="link" onclick="hmPadClear()">Clear writing</button>'+
    '<button class="btn" id="hmGo" onclick="hmLine()">Check my line and hint the next step</button>'}
  else{h+='<p class="sub hml">Take a photo of your working so far, then pick it here.</p><input type="file" id="hmF" accept="image/*" class="field" onchange="hmPick(this)"><img id="hmPv" class="pv" alt="Your working" hidden>'+
    '<button class="btn" id="hmGo" onclick="hmPhoto()" disabled>Read my working and hint the next step</button>'}
  h+='</div><div id="hmMsg" class="sub" aria-live="polite"></div><div id="hmOut"></div></div>';return h}
function hmRender(){var d=document.getElementById('hintSheet'),c=hCtx();if(!d||!hmOk(c))return;var o=d.querySelector('.hmid'),out=document.getElementById('hmOut'),keep=out?out.innerHTML:'';
  var w=document.createElement('div');w.innerHTML=hmHtml(c);var n=w.firstChild;if(o)o.replaceWith(n);else{var r=d.querySelector('.hsh .row2');r?r.parentNode.insertBefore(n,r):d.querySelector('.hsh').appendChild(n)}
  document.getElementById('hmOut').innerHTML=keep;if(HMT==='st')hmShowSteps(c);if(HMT==='ln')hmPadInit();HMPF=null}
function hmShowSteps(c){var out=document.getElementById('hmOut'),h='';hmSteps(c).forEach(function(s,i){(HMS[c.key+'|'+i]||[]).forEach(function(t,j){h+='<div class="hint h'+(j+1)+'"><small>'+s[0]+' · hint '+(j+1)+' of 3</small><div class="ctext">'+esc(t)+'</div></div>'})});out.innerHTML=h}
function hmOut(lab,txt,cls){var o=document.getElementById('hmOut');if(!o)return;o.insertAdjacentHTML('beforeend','<div class="hint hmo '+(cls||'')+'"><small>'+esc(lab)+'</small><div class="ctext">'+esc(txt)+'</div></div>');var l=o.lastElementChild;l&&l.scrollIntoView({block:'nearest',behavior:'smooth'})}
async function hmAskJ(p,img){var s=await getS();if(!s)throw{msg:'Hints need Claude. Open the app while signed in to claude.ai.'};
  if(img){var lim=await s.limits();if(!lim.images)throw{msg:'Reading pictures is not available on this account. Type your line instead.'}}
  return s.json(p,img?{images:[img],cache:false,modelTier:'default'}:{cache:false,modelTier:'default'})}
async function hmRun(fn){if(HMB)return;HMB=true;var m=document.getElementById('hmMsg'),b=document.getElementById('hmGo');if(b)b.disabled=true;if(m)m.textContent='Claude is looking at where you are…';
  try{await fn();if(m)m.textContent=''}catch(err){if(m)m.textContent=err&&err.msg?err.msg:err&&err.code?sampleErr(err):'That came back in the wrong shape. Try again.'}
  finally{HMB=false;var bb=document.getElementById('hmGo');if(bb)bb.disabled=HMT==='ph'&&!HMPF;hFab()}}
function hmStep(i){var c=hCtx();if(!hmOk(c))return;var k=c.key+'|'+i,prev=HMS[k]||[];if(prev.length>=3)return;var st=hmSteps(c)[i],L=prev.length+1;
  hmRun(async function(){var d=await hmAskJ(hmHead(c)+'The student says they are stuck at the "'+st[0]+'" step: '+st[1]+'.'+(prev.length?'\nHints already given for this step:\n'+prev.map(function(x,j){return(j+1)+'. '+x}).join('\n'):'')+
    '\n\nGive hint level '+L+' of 3 for THIS step only, assuming the earlier steps are done. Level 1 = a gentle question or clue; level 2 = name the idea or formula for this step; level 3 = set up this step concretely, leaving the working to the student. Do not go beyond this step. Never give the final answer. Plain-text maths (², √, π, °, /). Speak to the student directly and kindly.\nReturn JSON only: {"reply":"the hint, under 50 words"}');
    if(!d||!d.reply)throw new Error('shape');HMS[k]=prev.concat([String(d.reply)]);hmLog(c,'['+st[0]+'] '+d.reply);hmRender()})}
function hmLine(){var c=hCtx();if(!hmOk(c))return;var tx=(document.getElementById('hmTx')||{}).value||'',drawn=HMPAD&&HMPAD.n;tx=tx.trim();
  if(!tx&&!drawn){var m=document.getElementById('hmMsg');if(m)m.textContent='Type or write your last line first.';return}
  hmRun(async function(){var img=drawn?await new Promise(function(r){HMPAD.cv.toBlob(r,'image/png')}):null;
    var d=await hmAskJ(hmHead(c)+'The student has worked partway and shares the last line they are sure of'+(tx?': '+tx:'')+(img?(tx?' (also handwritten in the image).':' (handwritten in the image).'):'.')+
      '\n\nFirst decide if this line is correct and follows from the problem. If it is correct, say so briefly and give ONE hint for the next move only (not the move after). If it is wrong, say kindly which part looks off, without writing the corrected line, and hint how to fix it. If you cannot read it, say so. Never give the final answer. Plain-text maths.\nReturn JSON only: {"ok":true or false,"reply":"under 60 words"}',img);
    if(!d||!d.reply)throw new Error('shape');hmOut(d.ok?'Your line looks right ✓ · next move':'Look again at this line',String(d.reply),d.ok?'hmok':'hmbad');hmLog(c,'[last line] '+d.reply)})}
function hmPick(inp){var f=inp.files&&inp.files[0],pv=document.getElementById('hmPv'),b=document.getElementById('hmGo');HMPF=f||null;if(f&&pv){pv.src=URL.createObjectURL(f);pv.hidden=false}if(b)b.disabled=!f}
function hmPhoto(){var c=hCtx();if(!hmOk(c)||!HMPF)return;
  hmRun(async function(){var img=await shrink(HMPF);
    var d=await hmAskJ(hmHead(c)+'The image is a photo of the student’s notebook with their working on this problem so far.\n\nRead the working line by line. Find the last correct line, and the first mistake if there is one. If everything so far is correct, say so briefly and give ONE hint for the next move only. If there is a mistake, quote that line, say kindly what looks off, and hint how to fix it without writing the corrected working. If the photo is hard to read, say what would help. Never give the final answer. Plain-text maths.\nReturn JSON only: {"readable":"high"|"medium"|"low","ok":true or false,"reply":"under 70 words"}',img);
    if(!d||!d.reply)throw new Error('shape');hmOut(d.readable==='low'?'Hard to read':d.ok?'Your working looks right so far ✓ · next move':'Found where it slipped',String(d.reply),d.readable==='low'?'':d.ok?'hmok':'hmbad');hmLog(c,'[notebook photo] '+d.reply)})}
function hmPadInit(){var cv=document.getElementById('hmPad');if(!cv)return;var x=cv.getContext('2d'),P={cv:cv,x:x,n:0,cur:null};HMPAD=P;
  var r=cv.getBoundingClientRect(),dp=window.devicePixelRatio||1;cv.width=Math.max(1,r.width)*dp;cv.height=130*dp;x.setTransform(dp,0,0,dp,0,0);x.fillStyle='#fff';x.fillRect(0,0,r.width,130);x.strokeStyle='#1b1d24';x.lineCap='round';x.lineJoin='round';
  function pt(e){var b=cv.getBoundingClientRect();return[e.clientX-b.left,e.clientY-b.top,e.pressure||.5]}
  cv.onpointerdown=function(e){e.preventDefault();cv.setPointerCapture(e.pointerId);P.cur=pt(e);P.n++};
  cv.onpointermove=function(e){if(!P.cur)return;var q=pt(e);x.lineWidth=1.4+q[2]*2;x.beginPath();x.moveTo(P.cur[0],P.cur[1]);x.lineTo(q[0],q[1]);x.stroke();P.cur=q};
  cv.onpointerup=cv.onpointercancel=function(){P.cur=null}}
function hmPadClear(){hmPadInit()}
var _hSheet0=hSheet;hSheet=function(){_hSheet0();var c=hCtx();if(hmOk(c))hmRender()};

/* ========== Lazy mode with the template method: Spot the template, labelled steps, hint on a wrong pick, recap ========== */
var LZT={lzcx1:'cx2',lzcx2:'cx3',lzcx3:'cx5',lzss1:'ss2',lzss2:'ss3',lzss3:'ss3',lzsl1:'sl1',lzsl2:'sl4',lzsl3:'sl5',lzci1:'ci3',lzci2:'ci1',lzci3:'ci4',lzpr1:'pr1',lzpr2:'pr3',lzpr3:'pr4',lzcs1:'cs1',lzcs2:'cs2',lzcs3:'cs3',lztd1:'td1',lztd2:'td2',lzst1:'st1',lzst2:'st2',lzst3:'st3',lzpc1:'pc1',lzpc2:'pc5',lzpc3:'pc2',lzbt1:'bt1',lzbt2:'bt2',lzbt3:'bt3',lztr1:'tr2',lztr2:'tr5',lztr3:'tr3',lzqe1:'qe2',lzqe2:'qe1',lzse1:'se1',lzse2:'se3',lzrf1:'rf1',lzrf2:'rf3',lzli1:'li1',lzli2:'li1',lzld1:'ld1',lzld2:'ld4'};
function lzTp(pid){var t=LZT[pid],r=t&&stFind(t);return r?r.p:null}
function lzStage(i){return i===0?'Set up':'Solve'}
function lzTpOpts(pid){var tp=lzTp(pid),f=lzFind(pid);if(!tp)return[];var o=pats(f.c.id).map(function(p){return p[0]}).filter(function(x){return x!==tp[0]});o=lzShuf(o.length).map(function(i){return o[i]}).slice(0,2);o.push(tp[0]);return lzShuf(o.length).map(function(i){return o[i]})}
var _lzStart0=lzStart;lzStart=function(pid,from){var old=LZS.run&&LZS.run.pid===pid?LZS.run:null;_lzStart0(pid,from);var r=LZS.run;
  r.tp=!lzTp(pid)||!!(old&&from&&old.tp);r.tpw=old&&from?old.tpw||[]:[];r.tpo=old&&from&&old.tpo?old.tpo:lzTpOpts(pid);r.sl=old&&from?(old.sl||[]).slice(0,from):[];if(view==='lz')lzRun()};
function lzTpPick(id){var r=LZS.run,tp=lzTp(r.pid);if(!r||r.tp)return;if(id===tp[0]){r.tp=true;r.fresh=false}else if(r.tpw.indexOf(id)<0)r.tpw.push(id);lzRun()}
lzN=function(t){t=String(t||'').replace(/^Strategy:\s*/,'');return t.charAt(0).toUpperCase()+t.slice(1)};
function lzWhy(t){return'<div class="lznote"><span class="lzwl">Why</span> '+esc(lzN(t))+'</div>'}
lzRun=function(){var r=LZS.run,f=lzFind(r.pid),p=f.p,n=p.s.length,tp=lzTp(r.pid);r.sl=r.sl||[];r.tpw=r.tpw||[];if(!r.tpo)r.tpo=lzTpOpts(r.pid);if(r.tp==null)r.tp=!tp;
  var h='<div class="meta"><span>Lazy mode · '+esc(f.c.n)+'</span><span>Problem '+(f.i+1)+' / '+f.c.p.length+'</span></div>'+lzMeter(r,n);
  h+='<div class="qcard lzq"><div class="eyebrow">Problem</div><div class="qq">'+esc(p.q)+'</div></div>';
  if(tp&&!r.tp){h+='<div class="card lzcur"><div class="lzsh"><span class="lzst">Spot</span><b>Which template fits this question?</b></div>';
    r.tpo.forEach(function(id){var q=stFind(id).p,no=r.tpw.indexOf(id)>=0;h+='<button class="opt lzo'+(no?' lzno':'')+'"'+(no?' disabled':'')+' onclick="lzTpPick(\''+id+'\')">'+(no?'✗ ':'')+esc(q[1])+'</button>'});
    if(r.tpw.length){var w=stFind(r.tpw[r.tpw.length-1]).p;h+='<div class="lzhint"><b>Not that one.</b> “'+esc(w[1])+'” is for: '+esc(w[2])+' Read the question again: what is it asking for?</div>'}
    h+='</div><button class="btn alt" onclick="LZS.run=null;lzView()">Back to '+esc(f.c.n)+'</button>';app.innerHTML=h;return}
  if(r.end)h+=lzEnd(r,f)+'<div class="eyebrow" style="margin:16px 0 8px">Your path</div>';
  h+='<ol class="lzpath">';
  if(tp)h+='<li class="lzs"><div class="lzsh"><span class="lzst">Spot</span>Template</div><div class="lzpick">'+esc(tp[1])+(r.tpw.length?' <span class="lzslip">'+r.tpw.length+' wrong guess'+(r.tpw.length>1?'es':'')+' first</span>':'')+'</div><div class="lznote"><span class="lzwl">Why</span> '+esc(tp[2])+'</div></li>';
  for(var i=0;i<r.k;i++){var s=p.s[i],sl=(r.sl[i]||[]).length,last=i===r.k-1&&!r.end&&!r.fresh;
    h+='<li class="lzs'+(last?' new':'')+'"><div class="lzsh"><span class="lzn">'+(i+1)+'</span><span class="lzst">'+lzStage(i)+'</span>'+esc(s[0])+'</div><div class="lzpick">'+esc(s[1][0])+(sl?' <span class="lzslip">fixed after '+sl+' slip'+(sl>1?'s':'')+'</span>':'')+'</div>'+lzWhy(s[2])+'</li>'}
  h+='</ol>';
  if(!r.end){var s2=p.s[r.k],tried=r.sl[r.k]||[];
    h+='<div class="card lzcur"><div class="lzsh"><span class="lzn">'+(r.k+1)+'</span><span class="lzst">'+lzStage(r.k)+'</span><b>'+esc(s2[0])+'</b>'+(s2[4]?'<span class="lzcalc">🧮 worked out for you</span>':'')+'</div>';
    r.perm[r.k].forEach(function(oi){var no=tried.indexOf(oi)>=0;h+='<button class="opt lzo'+(no?' lzno':'')+'"'+(no?' disabled':'')+' onclick="lzPick('+oi+')">'+(no?'✗ ':'')+esc(s2[1][oi])+'</button>'});
    if(tried.length){var wo=tried[tried.length-1];h+='<div class="lzhint"><b>Not quite.</b> '+esc((s2[3]||[])[wo-1]||'Look at this step again.')+' Try another choice.</div>'}
    h+='</div>'+(r.k?'<button class="btn alt" onclick="lzUndo()">↶ Change my last pick</button>':'')}
  h+='<button class="btn alt" onclick="LZS.run=null;lzView()">Back to '+esc(f.c.n)+'</button>';
  r.fresh=false;app.innerHTML=h;
  if(!r.end){var cur=app.querySelector('.lzcur');if(r.k||(r.sl[r.k]||[]).length)cur&&cur.scrollIntoView({block:'nearest',behavior:'smooth'})}};
lzPick=function(oi){var r=LZS.run,p=lzFind(r.pid).p;r.sl=r.sl||[];
  if(oi!==0){r.sl[r.k]=(r.sl[r.k]||[]);if(r.sl[r.k].indexOf(oi)<0)r.sl[r.k].push(oi);r.fresh=true;lzRun();return}
  r.picks[r.k]=0;r.k++;if(r.k>=p.s.length){r.end=true;lzFinish()}lzRun();if(r.end)window.scrollTo({top:0,behavior:'smooth'})};
var _lzUndo0=lzUndo;lzUndo=function(){var r=LZS.run;if(r&&r.sl)r.sl.length=Math.max(0,r.k-1);_lzUndo0()};
lzFinish=function(){var r=LZS.run,f=lzFind(r.pid),p=f.p,st=lzSt(),rec=st[p.id]=st[p.id]||{n:0};rec.n++;rec.at=Date.now();
  var bad=(r.sl||[]).findIndex(function(x){return x&&x.length}),clean=bad<0&&!(r.tpw||[]).length;r.bad=bad;
  if(clean){rec.ok=1;mkList().forEach(function(m){if(m.ref&&m.ref.indexOf('lz:'+p.id+':')===0&&!m.fx){if(m.hn)m.sv=Date.now();else m.fx=Date.now()}})}
  if(bad>=0){var s=p.s[bad],w=r.sl[bad][0],pm=lzShuf(s[1].length);mkAdd({src:'Lazy mode',topic:STN[f.c.n]||f.c.n,q:p.q+'\n\nStep '+(bad+1)+': '+s[0],o:pm.map(function(i){return s[1][i]}),a:pm.indexOf(0),pick:pm.indexOf(w),habit:'',h:s[2].replace(/^Strategy:\s*/,''),note:(s[3]||[])[w-1],ref:'lz:'+p.id+':'+bad})}
  var tp=lzTp(p.id);S.ev.push({k:'lz',topic:STN[f.c.n]||f.c.n,ok:clean,habit:clean?'':(r.tpw.length&&tp?'Did not spot the template “'+tp[1]+'” first':'')+(bad>=0?(r.tpw.length?'; ':'')+'Lazy mode slip at step '+(bad+1)+': '+p.s[bad][0]:''),type:'lazy mode',q:p.q.slice(0,90),ts:Date.now()});save()};
lzEnd=function(r,f){var p=f.p,tp=lzTp(p.id),nx=f.c.p[f.i+1],sl=(r.sl||[]).reduce(function(a,x){return a+(x?x.length:0)},0),tw=(r.tpw||[]).length,clean=!sl&&!tw;
  var h='<div class="lzres '+(clean?'win':'fix')+'" role="status">'+(clean?'<div class="burst" aria-hidden="true"><i></i><i></i><i></i></div><b>Cracked it!</b>':'<b>Solved, with '+(sl+tw)+' slip'+(sl+tw>1?'s':'')+' fixed on the way</b>')+
    '<div class="ansb"><small>Answer</small><div>'+esc(p.a)+'</div></div><p class="sub" style="margin:8px 0 0">'+(clean?'Every pick was right first time.':'Slipped steps go to My mistakes, so they come back for practice.')+'</p></div>';
  if(tp){var st=[tw?tw+' wrong guess'+(tw>1?'es':''):'right first time',
      p.s[0]&&(r.sl[0]||[]).length?(r.sl[0].length)+' slip'+(r.sl[0].length>1?'s':''):'right first time',
      (function(){var n=0;for(var i=1;i<p.s.length;i++)n+=(r.sl[i]||[]).length;return n?n+' slip'+(n>1?'s':''):'right first time'})(),'do this yourself'];
    h+='<div class="card lzrecap"><p class="thl">Recap: the template</p><b>'+esc(tp[1])+'</b><ol class="etpl">'+tp[3].map(function(s,i){return'<li><b>'+STG[i]+'</b> '+esc(s)+' <span class="lzrs'+(/slip|guess/.test(st[i])?' bad':i===3?' you':'')+'">'+st[i]+'</span></li>'}).join('')+'</ol>'+
      '<div class="lzhint lzchk"><b>Check:</b> '+esc(tp[3][3])+'. Do this on the answer above before moving on.</div><button class="link" onclick="tlOpen(\''+f.c.id+'\',\''+tp[0]+'\')">Open this template’s Details ›</button></div>'}
  h+=(nx?'<button class="btn" onclick="lzStart(\''+nx.id+'\')">Next problem</button>':'<button class="btn" onclick="LZS.run=null;lzView()">Chapter done: pick another</button>')+'<button class="btn alt" onclick="lzStart(\''+p.id+'\')">Solve it again</button>';
  if(!clean)h+='<button class="btn alt chatb" onclick="askOpen()">'+CHAT_ICON+'Ask Claude about my slips</button>';
  if(clean&&!r.fxd&&typeof fxSoon==='function'){r.fxd=1;setTimeout(function(){fxSoon('Problem cracked: reward unlocked')},1200)}
  return h};

(function(){var st=document.createElement('style');st.textContent=
 '.hmid{margin:14px 0 6px;padding-top:12px;border-top:1px solid var(--line)}.hmid .thl{display:block;margin:0 0 2px}'+
 '.hmseg{margin:4px 0 8px}.hml{margin:6px 0 4px;font-size:.85rem;display:block}'+
 '.hmstep{display:flex;align-items:center;gap:8px;width:100%;text-align:left;background:var(--card);border:1px solid var(--line);border-left:4px solid var(--c4);border-radius:10px;padding:9px 10px;margin:0 0 6px;color:var(--fg);cursor:pointer;min-height:44px;font:inherit}'+
 '.hmstep b{color:var(--c4);min-width:52px;font-size:.9rem}.hmstep span{flex:1;font-size:.88rem}.hmstep i{font-style:normal;font-size:.75rem;color:var(--muted)}.hmstep:disabled{opacity:.55}'+
 '.hmpad{display:block;width:100%;height:130px;border:1px solid var(--line);border-radius:10px;background:#fff;touch-action:none;margin:0 0 4px}'+
 '#hmTx{width:100%;box-sizing:border-box}.hmo.hmok small{color:var(--ok)}.hmo.hmbad small{color:var(--bad)}'+
 '.lzst{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--c4);border:1px solid var(--c4);border-radius:999px;padding:1px 7px}'+
 '.lzwl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-right:4px;opacity:.85}'+
 '.lzhint{margin:8px 0 0;padding:8px 10px;border-radius:8px;background:var(--badbg);font-size:.9rem;line-height:1.45}.lzhint.lzchk{background:var(--accent-soft)}'+
 '.lzo.lzno{opacity:.5;text-decoration:line-through}.lzslip{display:inline-block;font-size:.72rem;color:var(--bad);background:var(--card);font-weight:700;margin-left:6px;padding:1px 7px;border-radius:999px;vertical-align:middle}'+
 '.lzres.fix{border-color:var(--c4);background:var(--card);text-align:center}.lzres.fix>b{display:block;font-size:1.1rem;margin:4px 0 10px}'+
 '.lzrecap b{display:block;margin:2px 0 4px}.lzrs{font-size:.75rem;color:var(--ok);font-weight:600}.lzrs.bad{color:var(--bad)}.lzrs.you{color:var(--c5)}';document.head.appendChild(st)})();
/* book examples: the Hint button opens a small sheet: next preset hint from the start, or help where you are stuck */
var _hintOpen0=hintOpen;hintOpen=function(){var c=hCtx();if(!c||c.kind!=='ex')return _hintOpen0();
  var old=document.getElementById('hintSheet');if(old)old.remove();var L=EX?EX.hl||0:0;
  var d=document.createElement('div');d.id='hintSheet';d.className='askwrap';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label','Hints');
  d.innerHTML='<div class="askbg" onclick="hintClose()"></div><div class="asksh hsh"><div class="askhd">'+HICO+'<div><b>Hints for this example</b><small>'+esc(c.sec)+'</small></div><button class="askx" onclick="hintClose()" aria-label="Close">✕</button></div>'+
   '<div class="hprob ctext">'+esc(String(c.q||'').length>240?String(c.q).slice(0,240)+'…':c.q)+'</div>'+
   '<button class="btn" id="hExGo" onclick="hintClose();_hintOpen0()"'+(L>=3?' disabled':'')+'>'+(L>=3?'All 3 hints are showing':'Show hint '+(L+1)+' of 3 (from the start)')+'</button>'+
   '<div class="row2"><button class="btn alt" onclick="hintClose()">Back to the problem</button><button class="btn alt" onclick="hintClose();askOpen()">Still stuck? Ask</button></div></div>';
  document.body.appendChild(d);hmRender();setTimeout(function(){d.querySelector('.askx').focus()},50)};

/*TDH-END*/
