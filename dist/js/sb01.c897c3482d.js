
/* ========== Step-back ladder data: foundations → principles → templates (maths) ========== */
/* FND: the few roots everything grows from. t = kind (Axiom, Logic, Definition) */
var FND=[
 {id:'fa',n:'Rules of arithmetic',t:'Axiom',s:'For all real numbers: a + b = b + a and ab = ba; (a + b) + c = a + (b + c); a(b + c) = ab + ac; 0 and 1 change nothing; every a has a −a, and every a ≠ 0 has a 1/a.',m:'Expanding, factorising, cancelling and rationalising are only these few moves, used again and again.',p:'Like a cricket scorebook: add the runs in any order and the total is the same. Commutativity is why.'},
 {id:'eq',n:'Equality',t:'Logic',s:'Equals can replace equals. Doing the same thing to both sides of an equation keeps them equal.',m:'Every “solve for x” step is this rule. It is also why you may substitute a known value anywhere.',p:'A balanced weighing scale: add the same weight to both pans and it stays balanced.'},
 {id:'or',n:'Order of numbers',t:'Axiom',s:'For any a, b exactly one holds: a < b, a = b or a > b. Adding a number keeps the order; multiplying by a positive keeps it; by a negative flips it. So every square is ≥ 0.',m:'Inequalities, maximum and minimum, AM ≥ GM, and “no real square root of a negative” all come from here.',p:'A league table: every team is above, level with or below another, and adding the same bonus points to everyone changes nothing.'},
 {id:'cp',n:'No gaps in the number line',t:'Axiom',s:'The real numbers are complete: a sequence that keeps increasing but stays below some bound settles on a limit.',m:'This is why √2 exists, why an infinite GP can have a sum, and why limits and derivatives make sense.',p:'A piano note fading out: its loudness keeps dropping and gets as close to silence as you like.'},
 {id:'nn',n:'Counting numbers and induction',t:'Axiom',s:'The counting numbers start at 1 and each has a next one. If a statement is true for 1, and being true for n makes it true for n + 1, it is true for every n.',m:'Formulas such as Σk = n(n + 1)/2 and the binomial theorem are proved this way, like an unending row of falling dominoes.',p:'A batting order: if the opener comes in, and each batter who comes in is followed by the next, everyone gets to bat.'},
 {id:'lg',n:'Logic of proof',t:'Logic',s:'A proof is a chain of steps, each following from the last by a rule. “If P then Q” is the same as “if not Q then not P”. And, or, not behave the same everywhere.',m:'Proving an identity, De Morgan’s laws and proof by contradiction all use these rules. Philosophers call this deductive reasoning.',p:'Aristotle’s syllogism: all batters wear pads; she is batting; so she is wearing pads.'},
 {id:'se',n:'Sets',t:'Definition',s:'A set is fixed entirely by its members. Union means “or”, intersection means “and”, complement means “not”.',m:'Sets are the language for events in probability, for relations and functions, and for solution sets of inequalities.',p:'A playlist is a set of songs: the order on screen does not change which songs are in it.'},
 {id:'ct',n:'Counting principles',t:'Axiom',s:'If one job can be done in m ways and then another in n ways, both together can be done in m × n ways. If the jobs are separate choices that cannot overlap, there are m + n ways.',m:'Permutations, combinations, ⁿCᵣ in the binomial theorem and counting in probability all grow from these two rules.',p:'3 shirts and 4 trousers give 3 × 4 = 12 outfits for a concert.'},
 {id:'fn',n:'Function',t:'Definition',s:'A function is a rule that gives each input exactly one output.',m:'Trig ratios, polynomials, sequences and derivatives are all functions. Domain is where the rule works; range is what comes out.',p:'Each Spotify track has exactly one length. Track → length is a function. Length → track is not, since many songs last 3:30.'},
 {id:'cg',n:'Geometry on a grid',t:'Axiom',s:'Euclid’s postulates give similar triangles and Pythagoras: a² + b² = c². Descartes then names every point by numbers (x, y), so distance is √((x₂ − x₁)² + (y₂ − y₁)²).',m:'Lines, circles, conics, 3D geometry and the modulus of a complex number are all Pythagoras on a grid.',p:'A cricket ground drawn on a grid: the throw from the boundary to the stumps is the hypotenuse.'},
 {id:'uc',n:'Unit-circle definition',t:'Definition',s:'Turn a point round a circle of radius 1 through angle θ, starting from (1, 0). Its coordinates are (cos θ, sin θ). An angle in radians is arc length ÷ radius.',m:'Every trig formula and the polar form of a complex number come from this one picture plus Pythagoras.',p:'The tip of a vinyl record’s label going round: its height above the centre is sin θ, its sideways distance is cos θ.'},
 {id:'im',n:'The number i',t:'Definition',s:'Add one new number i with i² = −1, and keep every rule of arithmetic.',m:'This lets every quadratic have roots and turns the plane into a number system.',p:'Multiplying by i turns a point a quarter turn. Four quarter turns bring it home, so i⁴ = 1, like a four-beat bar returning to beat one.'},
 {id:'pa',n:'Probability axioms',t:'Axiom',s:'For any event, P(A) ≥ 0. The whole sample space has probability 1. If A and B cannot happen together, P(A or B) = P(A) + P(B).',m:'Every probability rule, including the complement and the addition rule, is proved from these three.',p:'A toss before a match: heads and tails cannot both happen, and between them they cover everything, so P(H) + P(T) = 1.'}
];
/* TH: per chapter theory. h hook story (interest areas), i big idea, f foundations, P principles [name, statement, how it steps back], q something to think about */
var TH={
 cx:{h:'A piano note is a wave going round and round. Engineers and music software describe that spin with complex numbers: multiplying by i turns a point a quarter turn, and four quarter turns bring it home, like a four-beat bar returning to beat one.',
  i:'Complex numbers keep every rule of ordinary arithmetic and add one new number, i, with i² = −1. Each z = a + ib is the point (a, b), so algebra turns into geometry: the modulus is a distance and multiplying adds angles.',f:['fa','im','cg','uc'],
  P:[['The cycle of i','i, −1, −i, 1 repeats every 4 powers.','From i² = −1 and the associative law: i³ = i² · i = −i and i⁴ = (i²)² = 1.',['im','fa']],
   ['The conjugate makes it real','(a + ib)(a − ib) = a² + b².','Expand with the distributive law; the middle terms cancel and i² = −1 turns −i²b² into +b².',['fa','im']],
   ['Equal parts','a + ib = c + id exactly when a = c and b = d.','If b ≠ d, then i = (c − a)/(b − d) would be a real number. No real number squares to −1, since squares are never negative.',['im','eq','or']],
   ['Modulus and argument','|z| = √(a² + b²) and z = r(cos θ + i sin θ).','The point (a, b) is at distance r from 0 by Pythagoras, in direction θ, so a = r cos θ and b = r sin θ by the unit circle.',['cg','uc']]],
  q:'Philosophers once called these numbers “imaginary”. Is i any less real than −1, which you also cannot count on your fingers?'},
 pc:{h:'Ten songs on Spotify shuffle can play in 10! = 3,628,800 orders. A captain setting a batting order from 11 players is arranging; choosing the 11 from a squad of 15 is selecting. One multiplication rule sits under both.',
  i:'Every count is built from two moves: multiply when jobs happen one after another, add when cases are separate. Permutations count orders; combinations count groups and ignore order.',f:['ct','nn','eq'],
  P:[['Multiplication principle','Choices made one after another multiply.','This is the counting axiom itself: m ways, then n ways, gives m × n.',['ct']],
   ['Arrangements: ⁿPᵣ = n!/(n − r)!','Fill r places from n different things.','The first place has n choices, the next n − 1, and so on: multiply r of them.',['ct','nn']],
   ['Divide out what looks the same','ⁿCᵣ = ⁿPᵣ / r!, and n!/(p! q!) for repeats.','Each group of r things appears r! times in the list of arrangements, and swapping identical letters gives the same word, so divide by the number of repeats.',['ct','eq']],
   ['Count the opposite','Wanted = total − unwanted.','Total = wanted + unwanted (addition principle, no overlap), then subtract.',['ct','eq']]],
  q:'There are more ways to shuffle a pack of 52 cards than atoms on Earth. Why does multiplying small numbers make counts explode so fast?'},
 bt:{h:'Play n beats and choose which r of them to accent: there are ⁿCᵣ rhythms. Pascal’s triangle lists those counts, and the very same numbers are the coefficients of (a + b)ⁿ.',
  i:'Expanding (a + b)ⁿ means choosing a or b from each of n brackets. The term with b chosen r times appears ⁿCᵣ times, so the coefficients are counting numbers.',f:['fa','ct','nn'],
  P:[['Choose from each bracket','(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ.','The distributive law multiplies out one choice from every bracket; the counting principle says how many ways give r b’s.',['fa','ct']],
   ['General term','Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ.','It is one line of the expansion, so every question about one term becomes a question about r.',['ct','eq']],
   ['Pascal’s rule','ⁿCᵣ₋₁ + ⁿCᵣ = ⁿ⁺¹Cᵣ.','Choose r from n + 1 people: either the newest one is in or out. Induction then proves the whole theorem.',['ct','nn']]],
  q:'Why must the coefficients read the same forwards and backwards? (Think: choosing r to accent is the same as choosing n − r to leave plain.)'},
 ss:{h:'A batter who scores 5 more runs every match makes an AP. Money growing 8% a year is a GP, multiplied by 1.08 each year. Compound interest, population growth and the fading echo of a piano note are all geometric.',
  i:'An AP adds the same step each time; a GP multiplies by the same ratio. Their sums come from two tricks: pair the terms (AP), and shift and subtract (GP).',f:['fa','nn','eq','cp','or'],
  P:[['AP term and sum','aₙ = a + (n − 1)d and Sₙ = n/2 × (first + last).','Write the sum forwards and backwards and add: every pair has the same total (commutative law).',['fa','nn']],
   ['GP sum','Sₙ = a(rⁿ − 1)/(r − 1).','Multiply S by r and subtract: everything cancels except two terms (distributive law).',['fa','eq']],
   ['Sum to infinity','S∞ = a/(1 − r) when |r| < 1.','rⁿ shrinks towards 0, and with no gaps in the number line the sums settle on a limit.',['cp']],
   ['AM ≥ GM','(a + b)/2 ≥ √(ab) for positive a, b.','(√a − √b)² ≥ 0 because a square is never negative; expand it.',['or','fa']],
   ['Sums of powers','Σk = n(n + 1)/2, Σk² = n(n + 1)(2n + 1)/6.','Each is proved once by induction, then reused.',['nn']]],
  q:'Zeno said you can never cross a room: first half the distance, then half the rest, forever. How does 1/2 + 1/4 + 1/8 + … = 1 answer him?'},
 sl:{h:'A fair boundary between two towns, with every point equally far from both, is a perpendicular bisector, which is how some constituency maps are drawn. A fielder cutting off a shot runs along the perpendicular to the ball’s line: the shortest distance.',
  i:'Put numbers on the plane and lines become equations. A line is all the points that make the same slope with a fixed point; distances come from Pythagoras.',f:['cg','fa','eq','uc'],
  P:[['Distance and section','d = √(Δx² + Δy²); a point dividing AB in m : n is ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n)).','Pythagoras gives distance; similar triangles make the point move the same fraction in x and in y.',['cg']],
   ['Slope is constant along a line','y − y₁ = m(x − x₁).','Similar triangles on a straight line all have the same rise ÷ run.',['cg','eq']],
   ['Parallel and perpendicular','Parallel: m₁ = m₂. Perpendicular: m₁m₂ = −1.','Turning a line through 90° swaps rise and run and flips one sign.',['cg','uc']],
   ['Distance from a line','|ax₁ + by₁ + c| / √(a² + b²).','The shortest path is the perpendicular; its length is found with Pythagoras.',['cg','or']]],
  q:'Why is the shortest path from a point to a line always the perpendicular one? Try to argue it with Pythagoras.'},
 ci:{h:'A cricket ground’s boundary rope is a circle: every point the same distance from the middle of the pitch. A spinning vinyl record traces circles too.',
  i:'A circle is all the points at a fixed distance r from a centre. Write that distance with Pythagoras and you have its equation.',f:['cg','fa','eq','or'],
  P:[['Circle = fixed distance','(x − h)² + (y − k)² = r².','This is the distance formula, squared, set equal to r².',['cg','eq']],
   ['Complete the square','x² + y² + 2gx + 2fy + c = 0 has centre (−g, −f) and r = √(g² + f² − c).','x² + 2gx = (x + g)² − g² by the distributive law; tidy up and compare with the centre-radius form.',['fa','eq']],
   ['Line and circle','Compare the distance from the centre to the line with r.','Less than r: cuts; equal: touches; more: misses. That is the order of numbers.',['cg','or']]],
  q:'Every circle is the same shape, only bigger or smaller. Which single number tells you everything about its size?'},
 tr:{h:'A piano string’s height swings up and down like sin of time. When two notes are slightly out of tune you hear a slow “wah-wah”: that beat is the sum-to-product formula made audible.',
  i:'sin θ and cos θ are the y and x coordinates of a point that has turned through θ on a circle of radius 1. Every identity follows from that picture plus Pythagoras.',f:['uc','cg','fn','eq'],
  P:[['Pythagoras on the circle','sin²θ + cos²θ = 1.','The point (cos θ, sin θ) is at distance 1 from the centre.',['uc','cg']],
   ['Allied angles','π ± θ, 2π ± θ, −θ keep the size of the ratio; only the sign changes (ASTC).','These turns reflect the point in an axis or the centre, so its coordinates swap sign but keep their size.',['uc']],
   ['Compound angles','cos(A − B) = cos A cos B + sin A sin B.','Find the distance between the points at angles A and B in two ways: by the distance formula, and after turning both back by B. Set them equal.',['uc','cg','eq']],
   ['Repeating values','Equations like sin x = sin α have a whole family of answers.','Going round a full turn brings the point back, so the values repeat every 2π.',['uc','fn']],
   ['Radian measure','θ = arc ÷ radius, so a full turn is 2π and l = rθ.','This is the definition of a radian, so l = rθ is only true in radians.',['uc']]],
  q:'Musicians say a note an octave higher “sounds the same”. In trig terms, what does doubling the frequency do to the wave?'},
 qe:{h:'A cricket ball’s path is a parabola: height = ax² + bx + c. “Where does it land?” means solving ax² + bx + c = 0. In economics, profit often rises and then falls with price; the top of that parabola is the best price.',
  i:'Completing the square solves every quadratic. ax² + bx + c = 0 becomes (x + b/2a)² = (b² − 4ac)/4a², and the discriminant b² − 4ac decides what kind of roots you get.',f:['fa','eq','or','im'],
  P:[['Quadratic formula','x = (−b ± √(b² − 4ac)) / 2a.','Complete the square with the distributive law, then take square roots of both sides.',['fa','eq']],
   ['The discriminant decides','D > 0: two real roots; D = 0: equal roots; D < 0: no real roots.','A real number squared is never negative, so √D is real only when D ≥ 0.',['or']],
   ['Sum and product','α + β = −b/a and αβ = c/a.','Expand a(x − α)(x − β) and match it with ax² + bx + c, term by term.',['fa','eq']],
   ['Highest or lowest point','The vertex is at x = −b/2a.','After completing the square, the squared bracket is never negative, so it is smallest at 0.',['or','fa']]],
  q:'The formula for solving quadratics was found over a thousand years ago, long before anyone accepted √(−1). What changed when i was allowed?'},
 cs:{h:'A cricket ball flies along a parabola; planets go round the Sun in ellipses; a satellite dish is a parabola that sends every signal to one point, the focus. Concert halls use the same reflecting trick.',
  i:'Every conic is defined by distances: a point moves so that its distance from a focus is e times its distance from a fixed line. e = 1 gives a parabola, e < 1 an ellipse, e > 1 a hyperbola.',f:['cg','eq','fa'],
  P:[['Focus and directrix','PS = e × PM.','Write both distances with the distance formula and square: the standard equation drops out.',['cg','eq']],
   ['Ellipse','Distances to the two foci add to 2a; b² = a²(1 − e²).','Set the sum of two Pythagoras distances equal to 2a and simplify.',['cg','fa']],
   ['Hyperbola','Distances to the two foci differ by 2a; b² = a²(e² − 1).','The same distance calculation as the ellipse, with a difference instead of a sum.',['cg','fa']]],
  q:'Slice a cone at different angles and you get all three curves. Why should one cone hold such different shapes?'},
 pr:{h:'A cricket toss, a Spotify shuffle and an election poll all rest on the same three rules. A pollster saying a candidate has a 60% chance uses the same axioms as a captain calling heads.',
  i:'Probability measures how much of the sample space an event takes up. For equally likely outcomes it is a count: favourable ÷ total.',f:['pa','se','ct'],
  P:[['The three axioms','P(A) ≥ 0, P(S) = 1, and probabilities of events that cannot overlap add.','These are the starting rules; everything else is proved from them.',['pa']],
   ['Equally likely outcomes','P(A) = n(A) / n(S).','n equally likely outcomes share the total 1, so each has 1/n; add up the ones in A.',['pa','ct']],
   ['Addition rule','P(A ∪ B) = P(A) + P(B) − P(A ∩ B).','Split A ∪ B into pieces that do not overlap; adding P(A) and P(B) counts the overlap twice.',['pa','se']],
   ['Complement','P(not A) = 1 − P(A).','A and not A cannot overlap and together make S, so their probabilities add to 1.',['pa','se']]],
  q:'If a fair coin lands heads five times running, is tails now “due”? What do the axioms say?'},
 se:{h:'In a class, some like cricket, some like music and some like both. A Venn diagram maps those overlapping groups; political scientists draw the same picture for voters who share views across parties.',
  i:'A set is decided entirely by its members. Union, intersection and complement are the logical words “or”, “and” and “not” applied to groups.',f:['se','lg','ct'],
  P:[['Count the overlap once','n(A ∪ B) = n(A) + n(B) − n(A ∩ B).','Adding n(A) and n(B) counts the shared members twice.',['se','ct']],
   ['Power set','A set with n elements has 2ⁿ subsets.','For each element decide in or out: 2 × 2 × … × 2 (counting principle).',['ct','se']],
   ['De Morgan','(A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′.','“Not (A or B)” means “not A and not B”: a law of logic.',['lg','se']]],
  q:'Russell asked about “the set of all sets that do not contain themselves”. Does it contain itself? Why does this puzzle matter?'},
 rf:{h:'A Spotify playlist gives each track exactly one length: that is a function. Many tracks can share a length, but no track has two. In economics, demand is a function of price.',
  i:'A relation is any set of ordered pairs. A function is a special relation where each input has exactly one output.',f:['se','fn','ct','or'],
  P:[['Cartesian product','n(A × B) = n(A) × n(B).','Pick the first entry, then the second: counting principle.',['se','ct']],
   ['Relations are subsets','There are 2^(mn) relations from A to B.','A relation is any subset of A × B, which has mn elements.',['se','ct']],
   ['Domain','Inputs where the rule makes sense.','No division by 0 (0 has no reciprocal) and no square root of a negative (squares are never negative).',['fa','or']],
   ['Range','Outputs that are actually reached.','Write y = f(x) and solve for x: y is reached exactly when a valid x exists.',['fn','eq']],
   ['One input, one output','A vertical line meets the graph of a function at most once.','That is the definition of a function drawn on a grid.',['fn']]],
  q:'Is “person → their mother” a function? What about “person → their child”? Why?'},
 li:{h:'A chasing side needs at least 8 runs an over: that is an inequality. A family budget for concert tickets and a music subscription is a system of inequalities, the “feasible region” of economics.',
  i:'An inequality is solved like an equation, with one difference from the order rules: multiplying or dividing by a negative number flips the sign.',f:['or','eq','se','cg'],
  P:[['Moves that keep the sign','Add or subtract anything; multiply or divide by a positive.','These are the order axioms.',['or']],
   ['Moves that flip the sign','Multiply or divide by a negative.','If a < b then −a > −b: add −a − b to both sides.',['or']],
   ['Systems','The solution is where all regions overlap.','Each inequality is a set of points; the system asks for their intersection.',['se','cg']],
   ['Modulus as distance','|x| < a means −a < x < a.','|x| is the distance of x from 0 on the number line.',['or','cg']]],
  q:'Why can’t you multiply both sides of x/(x − 2) > 1 by (x − 2) without thinking first?'},
 td:{h:'A cricket ball in flight has three numbers for its position: along the pitch, across it and its height. A drone camera over a stadium is located the same way.',
  i:'Add a third axis and every point becomes (x, y, z). Pythagoras applied twice gives distance in space.',f:['cg','fa'],
  P:[['Three numbers for a point','Every point is (x, y, z), and the three planes split space into 8 octants.','Descartes’ grid with one more direction.',['cg']],
   ['Distance in space','√(Δx² + Δy² + Δz²).','Pythagoras on the floor gives the diagonal; Pythagoras again with the height gives the distance.',['cg']],
   ['Section formula','Same weighted average as in the plane, one coordinate at a time.','The dividing point moves the same fraction of the way in every direction.',['cg','fa']]],
  q:'Could there be a fourth direction? How would the distance formula change?'},
 ld:{h:'“He’s bowling at 145 km/h right now” is a derivative: speed at an instant, the limit of average speeds over shorter and shorter times. An economist’s “marginal cost” is the same idea.',
  i:'A limit is the value a function approaches as x gets close to a point. The derivative is the limit of the slope of a chord as the chord shrinks to a tangent.',f:['cp','fn','fa','or'],
  P:[['What a limit is','The value f(x) gets as close to as you like when x is near a.','It needs the number line to have no gaps.',['cp','fn']],
   ['Standard limits','sin x / x → 1, (xⁿ − aⁿ)/(x − a) → naⁿ⁻¹, (eˣ − 1)/x → 1.','Each is proved once, by squeezing between areas or by factorising, then reused.',['cp','or','fa']],
   ['First principles','f′(x) = lim (f(x + h) − f(x)) / h as h → 0.','The slope of a chord from x to x + h, as the chord shrinks.',['cp','fn']],
   ['Rules of differentiation','Sum, product, quotient and power rules.','Each is the first-principles limit worked out once in general.',['cp','fa']]],
  q:'You can never divide by zero, yet the derivative is “0/0 in the limit”. How does the limit get around this?'},
 st:{h:'Two batters both average 50. One scores 48, 52, 50, 49, 51; the other 0, 100, 5, 95, 50. Same mean, very different spread: the standard deviation tells a selector who is consistent.',
  i:'The mean tells you the centre; dispersion tells you how far the data typically is from it. Variance squares the gaps so positives and negatives cannot cancel.',f:['fa','or','nn'],
  P:[['Deviations cancel','Σ(x − x̄) = 0 always.','Σx = n x̄, by the definition of the mean.',['fa']],
   ['Variance','σ² = Σx²/n − x̄².','Expand Σ(x − x̄)² and use Σx = n x̄.',['fa']],
   ['Shifting and scaling','Adding a constant leaves σ unchanged; multiplying by k multiplies σ by |k|.','Every deviation shifts by nothing, or is multiplied by k.',['fa','or']],
   ['Coefficient of variation','CV = σ / x̄ × 100; smaller means more consistent.','Divide by the mean to compare spreads on different scales.',['fa']]],
  q:'Why square the deviations rather than just take their size? What does squaring do to one very large gap?'}
};
/* PR: why each template works. pid: [why, [foundations], principle index in TH[ch].P] */
var PR={
 cx1:['iⁿ depends only on the remainder when n is divided by 4, because i⁴ = (i²)² = (−1)² = 1, and multiplying by 1 changes nothing.',['im','fa'],0],
 cx2:['Multiplying top and bottom by the same non-zero number keeps the value of a fraction, and the conjugate turns the bottom into a² + b², which is real.',['fa','im'],1],
 cx3:['Two complex numbers are equal only when real parts match and imaginary parts match; otherwise i would be a real number, and no real number squares to −1.',['im','eq','or'],2],
 cx4:['Squaring x + iy and equating parts gives two real equations. The modulus gives a third, x² + y² = |z|, so you can add and subtract instead of solving a quartic.',['im','eq','cg'],2],
 cx5:['z = a + ib is the point (a, b). Its distance from 0 is r by Pythagoras and its direction is θ, so a = r cos θ and b = r sin θ.',['cg','uc'],3],
 cx6:['|z − z₁| is the distance between the points z and z₁, so a condition on moduli is a condition on distances: a circle, a perpendicular bisector, and so on.',['cg'],3],
 pc1:['Arrange as if all letters were different (n!), then divide by p! for each letter repeated p times, because swapping identical letters gives the same word.',['ct','eq'],2],
 pc2:['Glue the “together” items into one block and multiply by their inside orders (multiplication principle). “Never together” = total − together.',['ct','eq'],3],
 pc3:['Turning a circle round gives the same seating, so each circular seating appears n times among the n! straight rows: (n − 1)! in all.',['ct','eq'],2],
 pc4:['Fill the most restricted place first (first digit not 0, last digit even…), then multiply the choices for each place.',['ct'],0],
 pc5:['Split “at least” into separate exact cases and add them (addition principle), or take the total and subtract the unwanted cases.',['ct'],3],
 bt1:['Each term is ⁿCᵣ aⁿ⁻ʳ bʳ, so the power of x is a simple expression in r. Set it equal to k and solve for r: that picks the one term you need.',['ct','eq'],1],
 bt2:['Independent of x means the power of x is 0, since x⁰ = 1. Set the power in Tᵣ₊₁ equal to 0.',['ct','eq'],1],
 bt3:['There are n + 1 terms. The coefficients are symmetric, ⁿCᵣ = ⁿCₙ₋ᵣ, so the middle is term n/2 + 1 when n is even, and there are two middle terms when n is odd.',['ct'],1],
 bt4:['Write the number as (1 + m)ⁿ: every term after 1 + nm contains m², so (1 + m)ⁿ − 1 − nm is a multiple of m².',['fa','ct'],0],
 ss1:['Every term of an AP is a + (n − 1)d, so any two facts about terms give two equations in a and d.',['fa','eq'],0],
 ss2:['Write the sum forwards and backwards and add: each pair totals first + last, there are n pairs, so halve n(first + last).',['fa','nn'],0],
 ss3:['S − rS cancels all but two terms. If |r| < 1, rⁿ shrinks towards 0, so the sum settles on a/(1 − r).',['fa','cp'],1],
 ss4:['(√a − √b)² ≥ 0 because a square is never negative. Expanding it gives a + b ≥ 2√(ab).',['or','fa'],3],
 ss5:['Split the general term into powers of k, then use Σk = n(n + 1)/2 and Σk² = n(n + 1)(2n + 1)/6, both proved by induction.',['nn','fa'],4],
 sl1:['The dividing point moves the same fraction of the way in x and in y (similar triangles), so each coordinate is a weighted average.',['cg'],0],
 sl2:['The area formula comes from splitting the shape into trapeziums under each side. Three points are collinear exactly when that area is 0.',['cg','fa'],0],
 sl3:['Every point on a line makes the same slope with a fixed point (similar triangles), so (y − y₁)/(x − x₁) = m.',['cg','eq'],1],
 sl4:['Parallel lines rise at the same rate, so equal slopes. Turning a line through 90° swaps rise and run and flips one sign, so m₁m₂ = −1.',['cg','uc'],2],
 sl5:['The shortest path to a line is the perpendicular, and |ax₁ + by₁ + c|/√(a² + b²) measures it using Pythagoras.',['cg','or'],3],
 sl6:['Each slope is the tan of the angle the line makes with the x-axis, so the angle between two lines is a difference of angles: tan θ = |(m₁ − m₂)/(1 + m₁m₂)|.',['uc','cg'],2],
 ci1:['Centre and radius give the equation straight from the distance formula. For a diameter AB, the angle in a semicircle is 90°, giving (x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0.',['cg','eq'],0],
 ci2:['Each point on the circle must satisfy x² + y² + 2gx + 2fy + c = 0, so three points give three equations in g, f and c.',['eq','cg'],0],
 ci3:['Completing the square turns x² + 2gx into (x + g)² − g², which shows the centre and radius.',['fa','eq'],1],
 ci4:['A line cuts, touches or misses a circle when the distance from the centre to the line is less than, equal to or more than r.',['cg','or'],2],
 tr1:['Turning by π ± θ, 2π ± θ or −θ reflects the point on the unit circle, so the size of sin or cos stays the same and only the sign changes with the quadrant (ASTC).',['uc'],1],
 tr2:['Measure the chord between the points at angles A and B in two ways to get cos(A − B); every other compound formula follows by substitution.',['uc','cg','eq'],2],
 tr3:['An identity is a chain of equal steps: start from one side and replace equals by equals (Pythagoras, compound formulas) until you reach the other side.',['eq','lg','uc'],0],
 tr4:['Write C = A + B and D = A − B. Adding sin(A + B) and sin(A − B) cancels terms, giving sin C + sin D = 2 sin((C + D)/2) cos((C − D)/2).',['eq','fa'],2],
 tr5:['Values on the unit circle repeat every full turn, and some repeat within a turn by symmetry, so sin x = sin α has the family x = nπ + (−1)ⁿα.',['uc','fn'],3],
 tr6:['a sin x + b cos x = R sin(x + φ) with R = √(a² + b²) (a compound formula used backwards). A sine lies between −1 and 1, so the expression lies between −R and R.',['uc','or'],2],
 qe1:['x = (−b ± √D)/2a. A real square root needs D ≥ 0, since squares of real numbers are never negative; D = 0 makes the two roots equal.',['fa','eq','or'],1],
 qe2:['a(x − α)(x − β) = ax² − a(α + β)x + aαβ; matching coefficients gives α + β = −b/a and αβ = c/a.',['fa','eq'],2],
 qe3:['Any quadratic with roots α and β is k(x − α)(x − β) = 0, which is x² − (sum)x + (product) = 0.',['fa','eq'],2],
 qe4:['When D < 0, √D = i√|D| because i² = −1, so the roots are a complex conjugate pair.',['im','fa'],1],
 cs1:['For y² = 4ax every point is equally far from the focus (a, 0) and the line x = −a (e = 1). Squaring that distance equation gives the standard form.',['cg','eq'],0],
 cs2:['A point on an ellipse has distances to the two foci adding to 2a; from this, c = ae and b² = a² − c².',['cg','fa'],1],
 cs3:['On a hyperbola the distances to the two foci differ by 2a; from this, c = ae and b² = c² − a².',['cg','fa'],2],
 cs4:['The data fixes a, b, c or e. The relations between them fill in the rest, then substitute into the standard form.',['eq','cg'],0],
 pr1:['With equally likely outcomes each has probability 1/n(S), because together they add to 1, so P(A) is just counting.',['pa','ct'],1],
 pr2:['Choosing without order is counted by ⁿCᵣ, so both the favourable and the total counts come from combinations.',['pa','ct'],1],
 pr3:['A ∪ B splits into three pieces that do not overlap; adding P(A) and P(B) counts the overlap twice, so subtract it once.',['pa','se'],2],
 pr4:['“At least one” and “none” cover everything without overlapping, so P(at least one) = 1 − P(none).',['pa','se'],3],
 se1:['Fill the Venn diagram from the middle outwards, overlap first, so nothing is counted twice.',['se','ct'],0],
 se2:['Making a subset means deciding in or out for each of n elements: 2 × 2 × … = 2ⁿ (counting principle).',['ct','se'],1],
 se3:['“Not (A or B)” means “not A and not B”: a rule of logic, so it holds for sets.',['lg','se'],2],
 rf1:['The rule must make sense: a denominator cannot be 0 (0 has no reciprocal) and a square root needs a non-negative inside (squares are never negative).',['fa','or','fn'],2],
 rf2:['Put y = f(x) and solve for x: y is in the range exactly when that x exists in the domain.',['fn','eq'],3],
 rf3:['A relation is any subset of A × B, which has mn elements, so there are 2^(mn) relations.',['se','ct'],1],
 li1:['Each step must be allowed by the order rules: adding keeps the inequality, multiplying by a positive keeps it, by a negative reverses it.',['or','eq'],0],
 li2:['Each inequality marks a region; the solution of the system is where all the regions overlap.',['or','se','cg'],2],
 td1:['Pythagoras on the floor gives the diagonal √(Δx² + Δy²); Pythagoras again with the height gives √(Δx² + Δy² + Δz²).',['cg'],1],
 td2:['Dividing a segment in ratio m : n moves each coordinate the same fraction of the way, exactly as in the plane.',['cg','fa'],2],
 ld1:['Near the point you never divide by exactly 0, so a factor that makes 0/0 can be cancelled before letting x approach the value.',['cp','fa'],0],
 ld2:['Standard limits such as (sin x)/x → 1 and (xⁿ − aⁿ)/(x − a) → naⁿ⁻¹ are proved once, by squeezing or factorising, and then reused.',['cp','or'],1],
 ld3:['Multiplying by the conjugate uses (√a − √b)(√a + √b) = a − b to remove the root that causes 0/0.',['cp','fa'],0],
 ld4:['Each rule is the first-principles limit worked out once in general, so you can use it instead of redoing the limit.',['cp','fa'],3],
 ld5:['The slope of the chord from x to x + h is (f(x + h) − f(x))/h; as h shrinks to 0 the chord becomes the tangent.',['cp','fn'],2],
 st1:['Deviations from the mean always add to 0, so take their sizes (absolute values) to measure the typical distance.',['fa','or'],0],
 st2:['Expanding Σ(x − x̄)² and using Σx = n x̄ gives σ² = Σx²/n − x̄².',['fa'],1],
 st3:['The SD depends on the size of the data, so divide by the mean: CV = σ/x̄ × 100, and the smaller CV is the more consistent.',['fa'],3]
};
/* CBK: Concept Builder concept → [templates, principle index] */
var CBK={
 tr:{k1:[[],4],k2:[['tr1'],1],k3:[['tr2','tr3'],2],k4:[['tr4'],2],k5:[['tr5'],3]},
 qe:{k1:[['qe1'],1],k2:[['qe2'],2],k3:[['qe3'],2],k4:[['qe2','qe1'],1],k5:[[],3]},
 cx:{k1:[['cx1'],0],k2:[['cx2'],1],k3:[['cx5'],3],k4:[['cx4','cx3'],2],k5:[['cx6'],3]},
 cs:{k1:[['cs1'],0],k2:[['cs2'],1],k3:[['cs3'],2],k4:[['cs1'],0],k5:[['cs4'],0]},
 pc:{k1:[['pc4'],0],k2:[['pc2'],1],k3:[['pc1','pc2'],2],k4:[['pc5'],2],k5:[['pc3'],2]},
 ss:{k1:[['ss1','ss2'],0],k2:[['ss3'],1],k3:[['ss4'],3],k4:[['ss5'],4],k5:[['ss1'],0]},
 sl:{k1:[['sl1','sl2'],0],k2:[['sl4','sl6'],2],k3:[['sl3'],1],k4:[['sl5'],3],k5:[['sl2'],0]},
 ci:{k1:[['ci3'],1],k2:[['ci1','ci2'],0],k3:[['ci1'],0],k4:[['ci4'],2],k5:[['ci4'],2]},
 pr:{k1:[['pr1'],0],k2:[['pr2'],1],k3:[['pr3','pr4'],2],k4:[['pr3'],0],k5:[['pr1'],1]},
 se:{k1:[['se2'],1],k2:[['se1'],0],k3:[['se3'],2],k4:[['se1'],0]},
 rf:{k1:[['rf3'],0],k2:[['rf3'],1],k3:[[],4],k4:[['rf1','rf2'],2],k5:[['rf2'],4]},
 li:{k1:[['li1'],0],k2:[['li1'],3],k3:[['li1'],1],k4:[['li2'],2]},
 bt:{k1:[['bt3'],0],k2:[['bt1'],1],k3:[['bt2','bt3'],1],k4:[[],2],k5:[['bt4'],0]},
 td:{k1:[[],0],k2:[['td1'],1],k3:[['td2'],2],k4:[['td1','td2'],1]},
 ld:{k1:[['ld1','ld3'],0],k2:[['ld2'],1],k3:[['ld2'],1],k4:[['ld5'],2],k5:[['ld4'],3]},
 st:{k1:[['st1'],0],k2:[['st2'],1],k3:[['st2'],2],k4:[['st2'],2],k5:[['st3'],3]}
};

/* ========== Step-back ladder: Explain button, Theory and Template library (maths) ========== */
var EICO='<svg viewBox="0 0 24 24" aria-hidden="true" class="aski"><path d="M7 21V3M17 21V3M7 7h10M7 12h10M7 17h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 1.5l2.2 2.2M12 1.5L9.8 3.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
var FBY={};FND.forEach(function(f){FBY[f.id]=f});
var TV={c:null},TLF={f:null,c:null},EBUSY=false,EPID=null;
/* chapter name or short key → strategy chapter id */
var CHID=(function(){var m={};ST.forEach(function(c){m[c.n.toLowerCase()]=c.id;m[c.id]=c.id});
  Object.keys(STN).forEach(function(k){var c=ST.filter(function(x){return x.n===STN[k]})[0];if(c)m[k.toLowerCase()]=c.id});
  m['points and locus']='sl';m['measures of dispersion']='st';m['straight lines']='sl';m['trigonometric functions']='tr';m['statistics']='st';
  var nk={x:'cx',p:'pc',b:'bt',s:'ss',g:'sl',c:'ci',t:'tr'};return{m:m,nk:nk}})();
function chId(x){if(!x)return null;var s=String(x).toLowerCase().trim();if(CHID.m[s])return CHID.m[s];
  var hit=null;Object.keys(CHID.m).forEach(function(k){if(k.length>3&&(s.indexOf(k)>=0||k.indexOf(s)>=0))hit=CHID.m[k]});return hit}
function pats(ch){var c=stCh(ch);return c?stPats(c):[]}
var ESTOP={the:1,and:1,for:1,with:1,that:1,this:1,from:1,find:1,value:1,values:1,show:1,given:1,into:1,each:1,then:1,are:1,its:1,use:1,when:1,what:1,which:1,how:1,has:1,have:1,write:1,term:1,terms:1,number:1,numbers:1,one:1,two:1,all:1,not:1,form:1};
function eWords(t){return String(t||'').toLowerCase().replace(/[^a-z0-9ⁿᵣ√∞|²³ⁱ°π\s]/g,' ').split(/\s+/).filter(function(w){return w.length>=3&&!ESTOP[w]})}
/* templates in the chapter, best match first */
function eMatch(ch,text){var qw={};eWords(text).forEach(function(w){qw[w]=1});var raw=String(text||'');
  return pats(ch).map(function(p){var pw=eWords(p[1]+' '+p[2]+' '+p[3].join(' ')+' '+p[4]),seen={},s=0;
    pw.forEach(function(w){if(qw[w]&&!seen[w]){seen[w]=1;s+=w.length>5?2:1}});
    if(/\bi\b|iⁿ|i⁴|i²/.test(raw)&&/i\b/.test(p[1]))s+=1;if(/√/.test(raw)&&/√|root/i.test(p[1]+p[2]))s+=1;
    return[p[0],s]}).sort(function(a,b){return b[1]-a[1]}).map(function(x,i,A){if(i===0)EMC=x[1]>=3&&(!A[1]||x[1]>A[1][1]);return x[0]})}
var EMC=false;function eM(ch,text){var r=eMatch(ch,text);return{c:r,conf:EMC}}
/* what is on screen right now, for Explain */
function eCtx(){
  try{
    if(view.indexOf('sj_')===0||view==='set'||view==='log')return null;
    if(view==='practice'&&mode&&cur){var ch=CHID.nk[cur.p]||chId(NM[cur.p]),g=ch&&eM(ch,cur.q+' '+cur.h);return ch&&{kind:'q',ch:ch,sec:'Practise',q:cur.q,m:cur.h,c:g.c,conf:g.conf,done:!!locked}}
    if(view==='cb'&&CBS&&CBS.cur){var c=cbCh(CBS.ch);if(c&&!c.sub&&TH[c.id]){var q=CBS.cur,k=c.k.filter(function(x){return x.id===q.k})[0]||{},mp=(CBK[c.id]||{})[q.k]||[[],0],mm=eMatch(c.id,q.q+' '+q.s.join(' '));
      return{kind:'q',ch:c.id,sec:'Concept Builder · '+(k.n||c.n),q:q.q,m:q.s.join(' '),r:mp[1],concept:k.n,conf:mp[0].length>0,done:CBS.pick!=null,c:mp[0].concat(mm.filter(function(x){return mp[0].indexOf(x)<0}))}}}
    if(view==='mk'&&MKR){var m=mkGet(MKR.q[MKR.i]),ch2=m&&chId(m.topic);if(ch2){var g2=eM(ch2,m.q+' '+(m.h||'')+' '+(m.concept||''));return{kind:'q',ch:ch2,sec:'My mistakes',q:m.q,m:m.h,c:g2.c,conf:g2.conf,done:MKR.pick!=null}}}
    if(view==='lz'&&LZS.run){var f=lzFind(LZS.run.pid),ch3=f&&chId(f.c.n);if(ch3){var g3=eM(ch3,f.p.q);return{kind:'q',ch:ch3,sec:'Lazy mode',q:f.p.q,m:f.p.s.map(function(s){return s[0]+': '+s[1][0]}).join(' · '),c:g3.c,conf:g3.conf,done:!!LZS.run.end}}}
    if(view==='st'){if(STV.dr){var d=STV.dr,it=d.q[d.i];return{kind:'q',ch:d.c,sec:'Pattern spotter',q:it.q,m:'',c:[it.pid],fixed:1,conf:1,done:d.pick!=null}}
      if(STV.p){var r=stFind(STV.p);return{kind:'q',ch:r.c.id,sec:'Strategy',q:r.p[4],m:r.p[5].map(function(s){return s[1]}).join(' '),c:[r.p[0]],fixed:1,conf:1,done:1}}
      if(STV.c)return{kind:'ch',ch:STV.c,sec:'Strategy'}}
    if(view==='ex'&&EXI){var e=BX.filter(function(x){return x.id===EXI})[0],ch4=e&&chId(BXN[e.c]||e.c);if(ch4){var g4=eM(ch4,plain(e.q)+' '+(e.t||''));return{kind:'q',ch:ch4,sec:'Book example',q:plain(e.q),m:(e.s||[]).map(plain).join(' '),c:g4.c,conf:g4.conf,done:!!(EX&&EX.exp)}}}
    if(view==='pp'&&PPI&&ppPaper()){var pc=hPpCtx(hPpDefault()),ch5=chId(pc.topic);if(ch5){var g5=eM(ch5,pc.q+' '+pc.h);return{kind:'q',ch:ch5,sec:pc.sec,q:pc.q,m:pc.h,c:g5.c,conf:g5.conf,done:!!pc.done}}}
    if(view==='mc'&&MCV.rv){var mc=mcAll().filter(function(x){return x.id===MCV.rv.q[MCV.rv.i]})[0],ch6=mc&&chId(mc.ch);if(ch6){var g6=eM(ch6,mc.f+' '+mc.b);return{kind:'q',ch:ch6,sec:'Memory card',q:mc.f,m:mc.b,c:g6.c,conf:g6.conf,done:1}}}
    if(view==='th'&&TV.c)return{kind:'ch',ch:TV.c,sec:'Theory'};
  }catch(err){}
  return{kind:'all',sec:'Study Buddy'}}
/* the button sits beside Hint and Ask */
function eFab(){var b=document.getElementById('explFab'),a=document.getElementById('askFab'),h=document.getElementById('hintFab');if(!b||!a)return;var c=eCtx();
  b.hidden=!c;document.body.classList.toggle('hexpl',!!c);if(!c)return;
  var off=a.offsetWidth+8+(h&&!h.hidden?h.offsetWidth+8:0);b.style.right='calc(max(12px, env(safe-area-inset-right, 0px)) + '+off+'px)';
  document.body.style.setProperty('--ew',(off+b.offsetWidth+8)+'px');b.classList.toggle('on',c.kind==='q')}
var _hFab0=hFab;hFab=function(){_hFab0();eFab()};
function eChip(fid,open){var f=FBY[fid];return'<details class="efnd"'+(open?' open':'')+'><summary><span class="eft">'+f.t+'</span>'+esc(f.n)+'</summary><p>'+esc(f.s)+'</p><p class="sub">'+esc(f.m)+'</p></details>'}
function eTpl(p){return'<ol class="etpl">'+p[3].map(function(s,i){return'<li><b>'+STG[i]+'</b> '+esc(s)+'</li>'}).join('')+'</ol>'}
function eOpen(){var c=eCtx();if(!c)return;EPID=null;eSheet(c)}
function eClose(){var d=document.getElementById('explSheet');if(d)d.remove();var b=document.getElementById('explFab');b&&!b.hidden&&b.focus()}
function eSheet(c){var old=document.getElementById('explSheet');if(old)old.remove();
  var d=document.createElement('div');d.id='explSheet';d.className='askwrap';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label','Explain');
  var h='<div class="askbg" onclick="eClose()"></div><div class="asksh esh"><div class="askhd">'+EICO+'<div><b>Explain: step back to the roots</b><small>'+esc(c.sec)+'</small></div><button class="askx" onclick="eClose()" aria-label="Close">✕</button></div>';
  if(c.kind==='q')h+=eLadder(c);else if(c.kind==='ch')h+=eChapter(c.ch);else h+=eAll();
  h+='</div>';d.innerHTML=h;document.body.appendChild(d);setTimeout(function(){var x=d.querySelector('.askx');x&&x.focus()},50)}
function ePrin(ch,text){var qw={};eWords(text).forEach(function(w){qw[w]=1});var best=0,bs=-1;TH[ch].P.forEach(function(P,i){var s=0,seen={};eWords(P[0]+' '+P[1]).forEach(function(w){if(qw[w]&&!seen[w]){seen[w]=1;s++}});if(s>bs){bs=s;best=i}});return best}
function eLadder(c){var t=TH[c.ch],sure=c.conf||!!EPID,pid=EPID||c.c[0],r=sure?stFind(pid):null,p=r&&r.p,pr=sure?(PR[pid]||['',[],0]):['',[],ePrin(c.ch,c.q+' '+(c.m||''))],pi=c.r!=null&&!EPID?c.r:pr[2],P=t.P[pi]||t.P[0];
  var fs=[];pr[1].concat(P[3]).forEach(function(f){if(fs.indexOf(f)<0)fs.push(f)});
  var h='<div class="hprob ctext">'+esc(String(c.q||'').length>260?String(c.q).slice(0,260)+'…':c.q)+'</div>';
  h+='<div class="eld">';
  h+='<div class="erung e1"><small>1 · This problem</small>'+(c.m&&c.done?'<div class="ctext">'+esc(String(c.m).length>420?String(c.m).slice(0,420)+'…':c.m)+'</div>':c.m?'<div class="sub">The worked solution appears here once you have answered. The steps below never give the answer away.</div>':'<div class="sub">Solve it with the template below, then check the answer.</div>')+'</div><div class="eup" aria-hidden="true">↑ step back</div>';
  if(!p)h+='<div class="erung e2"><small>2 · Which template fits?</small><div class="sub">No single template is a sure match for this one. Pick the closest, or let Claude step back this exact problem below.</div><div class="ealt">'+c.c.slice(0,8).map(function(x){return'<button class="chipb" onclick="EPID=\''+x+'\';eSheet(eCtx())">'+esc(stFind(x).p[1])+'</button>'}).join('')+'</div></div><div class="eup" aria-hidden="true">↑ step back</div>';
  if(p){h+='<div class="erung e2"><small>2 · '+(sure?'The template it belongs to':'Closest template (a best guess)')+'</small><b>'+esc(p[1])+'</b><div class="sub">Spot it: '+esc(p[2])+'</div>'+eTpl(p);
    var alt=c.fixed?[]:c.c.filter(function(x){return x!==pid}).slice(0,sure?3:8);
    if(alt.length)h+='<div class="ealt"><span class="sub">'+(sure?'Not this one?':'Pick the one that fits:')+'</span>'+alt.map(function(x){return'<button class="chipb" onclick="EPID=\''+x+'\';eSheet(eCtx())">'+esc(stFind(x).p[1])+'</button>'}).join('')+'</div>';
    h+='</div><div class="eup" aria-hidden="true">↑ step back</div>'}
  h+='<div class="erung e3"><small>3 · The principle</small><b>'+esc(P[0])+'</b><div class="ctext">'+esc(P[1])+'</div>'+(p&&pr[0]?'<p><b>Why the template works:</b> '+esc(pr[0])+'</p>':'')+'<p class="sub">Where it comes from: '+esc(P[2])+'</p></div><div class="eup" aria-hidden="true">↑ step back</div>';
  h+='<div class="erung e4"><small>4 · The roots it stands on</small>'+fs.map(function(f,i){return eChip(f,i===0)}).join('')+'</div></div>';
  h+='<details class="epic"><summary>Picture it</summary><p>'+esc(t.h)+'</p></details>';
  h+='<div id="eAI"></div><button class="btn" id="eGo" onclick="eAI()">✨ Step back this exact problem with Claude</button><div id="eMsg" class="sub" aria-live="polite"></div>';
  h+='<div class="row2"><button class="btn alt" onclick="eClose();thOpen(\''+c.ch+'\')">Theory of '+esc(stCh(c.ch).n)+'</button><button class="btn alt" onclick="eClose();tlOpen(\''+c.ch+'\')">Template library</button></div>';
  h+='<button class="link" style="margin-top:10px" onclick="eChat()">'+CHAT_ICON+' Talk it through in a Claude chat</button>';
  return h}
function eChapter(ch){var t=TH[ch],c=stCh(ch),h='<h2 class="eh">'+esc(c.n)+'</h2><p>'+esc(t.i)+'</p><div class="eld">';
  h+='<div class="erung e2"><small>Templates in this chapter</small><ul class="elist">'+pats(ch).map(function(p){return'<li><button class="link" onclick="eClose();tlOpen(\''+ch+'\',\''+p[0]+'\')">'+esc(p[1])+'</button></li>'}).join('')+'</ul></div><div class="eup" aria-hidden="true">↑ grow from</div>';
  h+='<div class="erung e3"><small>Principles</small>'+t.P.map(function(P){return'<p><b>'+esc(P[0])+'</b> '+esc(P[1])+'</p>'}).join('')+'</div><div class="eup" aria-hidden="true">↑ rest on</div>';
  h+='<div class="erung e4"><small>Roots</small>'+t.f.map(function(f){return eChip(f)}).join('')+'</div></div>';
  h+='<div class="row2"><button class="btn" onclick="eClose();thOpen(\''+ch+'\')">Read the theory</button><button class="btn alt" onclick="eClose();tlOpen(\''+ch+'\')">Template library</button></div>';return h}
function eAll(){var h='<p>Every problem is an example of a <b>template</b>. Each template works because of a <b>principle</b>, and every principle is proved from a few <b>roots</b>: '+FND.length+' roots grow all '+Object.keys(PR).length+' templates.</p>';
  h+='<div class="erung e4"><small>The roots</small>'+FND.map(function(f){return eChip(f.id)}).join('')+'</div>';
  h+='<p class="sub">Open any question, card or example and tap Explain to climb from that problem to its roots.</p><div class="row2"><button class="btn" onclick="eClose();goView(\'th\')">Theory</button><button class="btn alt" onclick="eClose();goView(\'tl\')">Template library</button></div>';return h}
function eLadText(c){var pid=EPID||c.c[0],r=(c.conf||EPID)?stFind(pid):null,pr=PR[pid]||['',[],0],P=TH[c.ch].P[c.r!=null&&!EPID?c.r:(r?pr[2]:ePrin(c.ch,c.q+' '+(c.m||'')))];if(!r)pr=['',[],0];
  return'Problem: '+c.q+(c.m&&c.done?'\nWorking: '+c.m:'')+(c.done?'':'\nThe student has NOT answered yet: do not give or hint at the final answer.')+(c.conf||EPID?'':'\nNo template was matched with certainty: name the template that fits best and use it.')+(r?'\nTemplate: '+r.p[1]+' — '+r.p[3].map(function(s,i){return STG[i]+': '+s}).join(' → '):'')+'\nPrinciple: '+P[0]+' ('+P[1]+')'+(pr[0]?'\nWhy the template works: '+pr[0]:'')+'\nRoots: '+pr[1].concat(P[3]).filter(function(f,i,a){return a.indexOf(f)===i}).map(function(f){return FBY[f].n+': '+FBY[f].s}).join(' | ')}
function eChat(){var c=eCtx();if(!c||c.kind!=='q')return;eClose();
  openChat(chatHead()+'Help me step back from one problem to the basic theory it rests on, in my Study Buddy app.\n'+eLadText(c)+'\n\nWalk me up the ladder one rung at a time: this problem → the template → the principle → the axioms or definitions underneath. Ask me a short question at each rung before moving up, and end by showing one different problem that grows from the same roots.')}
async function eAI(){if(EBUSY)return;var c=eCtx();if(!c||c.kind!=='q')return;var b=document.getElementById('eGo'),m=document.getElementById('eMsg'),box=document.getElementById('eAI');
  var key='e:'+(EPID||c.c[0])+':'+(c.done?1:0)+':'+String(c.q).slice(0,80);S.exc=S.exc||{};
  if(S.exc[key]){box.innerHTML=eAIHtml(S.exc[key]);if(b)b.hidden=true;return}
  EBUSY=true;if(b)b.disabled=true;if(m)m.textContent='Claude is climbing the ladder for this problem…';
  try{var s=await getS();if(!s){if(m)m.textContent='This part needs Claude. Open the app while signed in to claude.ai.';return}
    var p='You are a maths teacher who believes every problem is an instance of a reusable template, every template rests on a principle, and every principle is derived from a few axioms or definitions. Explain ONE problem by stepping back, for a student in a practice app.\n'+eLadText(c)+intLine()+
      '\n\nReturn JSON only, every value plain text with plain-text maths (², √, π, °, /), each under 70 words:\n{"p":"what this problem is really asking, in one or two sentences","t":"the template filled in with this problem’s own numbers, as short steps","r":"why that template works, from the principle","f":"how the principle follows from the roots listed, as a short chain of reasons","w":"one vivid picture of the same idea from the student’s interests, keeping the maths exact"}';
    var d=await s.json(p,{cache:false,modelTier:'default'});if(!d||!d.t)throw new Error('shape');
    S.exc[key]=d;var ks=Object.keys(S.exc);if(ks.length>40)delete S.exc[ks[0]];save();
    box.innerHTML=eAIHtml(d);if(b)b.hidden=true;if(m)m.textContent='';box.scrollIntoView({block:'nearest',behavior:'smooth'})
  }catch(err){if(m)m.textContent=err&&err.code?sampleErr(err):'That came back in the wrong shape. Try again.'}
  finally{EBUSY=false;var bb=document.getElementById('eGo');if(bb)bb.disabled=false}}
function eAIHtml(d){var R=[['p','This problem, really'],['t','The template with your numbers'],['r','Why it works'],['f','Down to the roots'],['w','In your world']];
  return'<div class="eai"><small>✨ Claude’s step back for this exact problem</small>'+R.filter(function(x){return d[x[0]]}).map(function(x){return'<p><b>'+x[1]+'.</b> '+esc(d[x[0]])+'</p>'}).join('')+'<p class="sub" style="font-size:.78rem">Written by Claude just now, so check it against your working.</p></div>'}

/* ---------- Theory ---------- */
function thOpen(ch){TV.c=ch;view='th';render();window.scrollTo(0,0)}
function thUses(fid){var n=0;Object.keys(PR).forEach(function(p){if(PR[p][1].indexOf(fid)>=0)n++});return n}
function thView(){S.thr=S.thr||{};if(TV.c&&TH[TV.c])return thChap(TV.c);
  var h='<h1>Theory</h1><p class="sub">Maths is built like a tree. A few roots, the axioms and definitions, grow principles, and principles grow every template you use in exams. Start at the roots, or open a chapter.</p>';
  h+='<div class="card thr"><b>The roots</b><p class="sub" style="margin:4px 0 8px">'+FND.length+' starting points. Tap one to see what it says and how much grows from it.</p>'+FND.map(function(f){return'<details class="efnd"><summary><span class="eft">'+f.t+'</span>'+esc(f.n)+'<span class="pill">'+thUses(f.id)+' templates</span></summary><p>'+esc(f.s)+'</p><p class="sub">'+esc(f.m)+'</p><p class="thp">'+esc(f.p)+'</p></details>'}).join('')+'</div>';
  h+='<h2 class="eh">Chapters</h2><div class="chgrid">'+ST.filter(function(c){return TH[c.id]}).map(function(c){return'<button class="chtile" onclick="thOpen(\''+c.id+'\')"><b>'+esc(c.n)+'</b><span class="sub" style="font-size:.78rem">'+(S.thr[c.id]?'✓ Read':TH[c.id].P.length+' principles')+'</span></button>'}).join('')+'</div>';
  app.innerHTML=h}
function thChap(ch){var t=TH[ch],c=stCh(ch);S.thr[ch]=1;save();var sto=(S.ths||{})[ch]||[];
  var h='<button class="link" onclick="TV.c=null;render();window.scrollTo(0,0)">‹ All chapters</button><h1>'+esc(c.n)+'</h1>';
  h+='<div class="card thpic"><small class="thl">Picture it</small><p>'+esc(t.h)+'</p>'+sto.map(function(s){return'<p class="thp">✨ '+esc(s)+'</p>'}).join('')+'<button class="link" id="thGo" onclick="thStory(\''+ch+'\')">✨ Another picture from my interests</button><div id="thMsg" class="sub" aria-live="polite"></div></div>';
  h+='<div class="card"><small class="thl">The big idea</small><p>'+esc(t.i)+'</p><div class="sub">Built on: '+t.f.map(function(f){return FBY[f].n}).join(' · ')+'</div></div>';
  h+='<h2 class="eh">Principles, and where each comes from</h2>';
  t.P.forEach(function(P,i){var tp=pats(ch).filter(function(p){return PR[p[0]]&&PR[p[0]][2]===i});
    h+='<div class="card thpr"><b>'+esc(P[0])+'</b><div class="ctext thst">'+esc(P[1])+'</div><p><span class="thl">↑ Step back</span> '+esc(P[2])+'</p><div class="thch">'+P[3].map(function(f){return'<span class="pill">'+esc(FBY[f].n)+'</span>'}).join('')+'</div>'+
      (tp.length?'<div class="sub" style="margin-top:6px">Templates grown from this: '+tp.map(function(p){return'<button class="link" onclick="tlOpen(\''+ch+'\',\''+p[0]+'\')">'+esc(p[1])+'</button>'}).join(', ')+'</div>':'')+'</div>'});
  h+='<h2 class="eh">The roots under this chapter</h2><div class="card">'+t.f.map(function(f){return eChip(f)}).join('')+'</div>';
  h+='<div class="card hi"><small class="thl">Think about it</small><p>'+esc(t.q)+'</p><button class="btn alt" onclick="thThink(\''+ch+'\')">'+CHAT_ICON+' Talk it over with Claude</button></div>';
  h+='<div class="row2"><button class="btn" onclick="tlOpen(\''+ch+'\')">Templates for this chapter</button><button class="btn alt" onclick="STV.c=\''+ch+'\';STV.p=null;STV.dr=null;goView(\'st\')">Practise the patterns</button></div>';
  app.innerHTML=h}
function thThink(ch){var t=TH[ch];openChat(chatHead()+'In the theory of '+stCh(ch).n+' my app asked me this:\n“'+t.q+'”\n\nThe big idea: '+t.i+'\n\nDiscuss it with me like a philosophy-minded maths teacher. Ask me what I think first, then connect my answer to the axioms underneath this chapter. Keep each reply short.')}
async function thStory(ch){var b=document.getElementById('thGo'),m=document.getElementById('thMsg');if(EBUSY)return;EBUSY=true;if(b)b.disabled=true;if(m)m.textContent='Claude is thinking of a picture…';
  try{var s=await getS();if(!s){if(m)m.textContent='This needs Claude. Open the app while signed in to claude.ai.';return}
    var t=TH[ch],old=[t.h].concat((S.ths||{})[ch]||[]);
    var d=await s.json('Write one short, vivid picture (under 60 words) that makes the theory of '+stCh(ch).n+' interesting to a student. Big idea: '+t.i+'\nPrinciples: '+t.P.map(function(P){return P[0]+': '+P[1]}).join('; ')+intLine()+'\nPick one interest and make the maths in it exact and correct. Do not repeat these pictures:\n- '+old.join('\n- ')+'\nReturn JSON only: {"s":"the picture"}',{cache:false,modelTier:'default'});
    if(!d||!d.s)throw new Error('shape');S.ths=S.ths||{};(S.ths[ch]=S.ths[ch]||[]).push(String(d.s));if(S.ths[ch].length>4)S.ths[ch].shift();save();render()
  }catch(err){if(m)m.textContent=err&&err.code?sampleErr(err):'That came back in the wrong shape. Try again.'}
  finally{EBUSY=false;var bb=document.getElementById('thGo');if(bb)bb.disabled=false}}

/* ---------- Template library ---------- */
function tlOpen(ch,pid){TLF.c=ch||null;TLF.f=null;TLF.p=pid||null;view='tl';render();setTimeout(function(){var el=pid&&document.getElementById('tl_'+pid);el?el.scrollIntoView({block:'start'}):window.scrollTo(0,0)},30)}
function tlCard(ch,p){var pr=PR[p[0]],P=TH[ch].P[pr[2]];
  return'<div class="card tlc'+(TLF.p===p[0]?' hi':'')+'" id="tl_'+p[0]+'"><b>'+esc(p[1])+'</b><div class="sub">Spot it: '+esc(p[2])+'</div>'+eTpl(p)+
   '<p class="tlw"><span class="thl">Why it works</span> '+esc(pr[0])+'</p><div class="sub">Principle: '+esc(P[0])+'</div><div class="thch">'+pr[1].map(function(f){return'<button class="pill tlf" onclick="TLF.f=\''+f+'\';TLF.c=null;TLF.p=null;render();window.scrollTo(0,0)">'+esc(FBY[f].n)+'</button>'}).join('')+'</div>'+
   '<button class="link" onclick="STV.c=\''+ch+'\';STV.p=\''+p[0]+'\';STV.dr=null;goView(\'st\')">Worked example and practice ›</button></div>'}
function tlView(){var n=Object.keys(PR).length,h='<h1>Templates</h1><p class="sub">'+n+' templates, each a recipe that fits a whole family of questions. Each rests on a principle, and every principle on a few roots.</p>';
  h+='<div class="tlbar" role="group" aria-label="Filter by root"><button class="chipb'+(!TLF.f?' on':'')+'" onclick="TLF.f=null;render()">All roots</button>'+FND.map(function(f){return'<button class="chipb'+(TLF.f===f.id?' on':'')+'" onclick="TLF.f=\''+f.id+'\';TLF.c=null;TLF.p=null;render()">'+esc(f.n)+'</button>'}).join('')+'</div>';
  if(TLF.f){var f=FBY[TLF.f];h+='<div class="card thr"><b>'+esc(f.n)+'</b> <span class="eft">'+f.t+'</span><p>'+esc(f.s)+'</p><p class="sub">'+thUses(f.id)+' templates grow from this root.</p></div>';
    ST.forEach(function(c){var L=pats(c.id).filter(function(p){return PR[p[0]]&&PR[p[0]][1].indexOf(TLF.f)>=0});if(L.length)h+='<h2 class="eh">'+esc(c.n)+'</h2>'+L.map(function(p){return tlCard(c.id,p)}).join('')});app.innerHTML=h;return}
  ST.forEach(function(c){if(!TH[c.id])return;var open=TLF.c===c.id,L=pats(c.id);
    h+='<button class="trow tlh" aria-expanded="'+open+'" onclick="TLF.c=TLF.c===\''+c.id+'\'?null:\''+c.id+'\';TLF.p=null;render()"><span class="tt"><b>'+esc(c.n)+'</b><small>'+L.map(function(p){return p[1]}).join(' · ')+'</small></span><span class="pill">'+L.length+'</span></button>';
    if(open)h+=L.map(function(p){return tlCard(c.id,p)}).join('')+'<button class="link" onclick="thOpen(\''+c.id+'\')">Read the theory of '+esc(c.n)+' ›</button>'});
  app.innerHTML=h}

/* Ask uses the theory screens too */
var _ctxNow0=ctxNow;ctxNow=function(){try{
  if(view==='th'&&TV.c){var t=TH[TV.c],L='Section: Theory\nChapter: '+stCh(TV.c).n+'\nBig idea: '+t.i+'\nPrinciples: '+t.P.map(function(P){return P[0]+': '+P[1]+' (from: '+P[2]+')'}).join('; ')+'\n';return['Theory · '+stCh(TV.c).n,L]}
  if(view==='th')return['Theory','Section: Theory — the axioms and definitions maths is built on: '+FND.map(function(f){return f.n}).join(', ')+'\n'];
  if(view==='tl')return['Template library','Section: Template library'+(TLF.c?'\nChapter: '+stCh(TLF.c).n+'\nTemplates: '+pats(TLF.c).map(function(p){return p[1]}).join(', '):'')+(TLF.f?'\nRoot: '+FBY[TLF.f].n:'')+'\n'];
 }catch(e){}return _ctxNow0()};

(function(){var b=document.createElement('button');b.id='explFab';b.className='askfab explfab';b.hidden=true;b.title='Explain: step back to the roots (F3)';b.setAttribute('aria-label','Explain: step back to the roots (F3)');b.innerHTML=EICO+'<span>Explain</span>';b.onclick=eOpen;document.body.appendChild(b);
  document.addEventListener('keydown',function(ev){if(ev.key==='F3'){ev.preventDefault();if(!b.hidden)eOpen()}else if(ev.key==='Escape'){eClose()}});
  window.addEventListener('resize',hFabSoon);hFab()})();

