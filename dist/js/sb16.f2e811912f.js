
/*THINK-START*/
/* THINK: History, Psychology and Philosophy as thinking subjects. No exam, no marks: one puzzle at a time, a guess, what is known, a doubt, and a tool to keep. */
/* item: id, s subject, k kind, t title, h hook, p scene paragraphs, q question, o [[option, reply]], a index of what really happened (null when it is a matter of judgement),
   r what is known, v {c caption, b [[label, percent]]}, tl [[year, event]], w the doubt, tool [name, how to use it], d three deeper questions, y something to try, x link to other subjects */
var TQD=[
{id:"psy_gorilla",s:"psy",k:"Experiment",t:"The gorilla nobody saw",
h:"You see far less than you think you do.",
p:["Six students pass two basketballs around. Your job is simple: count the passes made by the players in white. It takes concentration, because players in black are passing a ball too.",
"Halfway through, a person in a full gorilla suit walks into the middle of the group, faces the camera, thumps its chest and walks off. It is on screen for nine seconds."],
q:"If you were counting the passes, would you have noticed the gorilla?",
o:[["Of course. Nobody could miss that","Almost everyone says this. It is the most interesting part of the result."],["Probably","A fair guess. In the real study it was close to a coin toss."],["I might well have missed it","You are in good company: about half of the viewers did."]],a:null,
r:["Daniel Simons and Christopher Chabris ran this at Harvard in 1999. About half of the people watching did not see the gorilla at all. When shown the film again, many refused to believe it was the same film.",
"The eyes were not the problem. The gorilla crossed the very spot people were looking at. Attention was busy with the count, and what attention is not given to can simply fail to reach awareness. Psychologists call it inattentional blindness."],
v:{c:"Viewers who were counting passes",b:[["Missed the gorilla",50],["Saw it",50]]},
w:"Surely experts are safer? In 2013 Trafton Drew and colleagues put a small picture of a gorilla into a lung scan and asked 24 radiologists to look for cancer nodules. Twenty of them, 83%, did not report it, and eye tracking showed most had looked straight at it. Being skilled at a search makes you better at finding what you are looking for, and no better at finding what you are not.",
tool:["The spotlight","Attention lights up a small patch and leaves the rest dark. Before you trust “I would have noticed”, ask what your attention was busy with at the time."],
d:["If you can look straight at something and not see it, what does “seeing” actually mean?","Is a witness who missed something obvious lying, careless or neither?","What might be walking through your day unnoticed because you are busy counting something else?"],
y:"Next time you are a passenger, pick one thing to count for five minutes (red cars, say). Then try to recall anything else about the road. Notice how little is there.",
x:"Road safety law (phones at the wheel), magic tricks, and why proofreading your own answer script is so hard."},

{id:"psy_asch",s:"psy",k:"Experiment",t:"The line everyone got wrong",
h:"How many people does it take to make you doubt your own eyes?",
p:["You sit at a table with seven other students. A card shows one line; a second card shows three lines, marked A, B and C. You are asked which of the three matches the first. It is not close. A child could do it.",
"Each person answers aloud, and you are second to last. On the third round, the first student gives an answer that is plainly wrong. So does the second. And the third. All six before you give the same wrong answer. Now it is your turn."],
q:"What do you say?",
o:[["The answer I can see is right","Most answers in the study were like yours. But holding out was harder than it sounds: people who did so were visibly uncomfortable."],["The same as everyone else","Many did, at least once. Afterwards most said they knew the group was wrong and did not want to stand out."],["I would start to think my eyes were wrong","A few people reported exactly this: they came to believe the group saw something they could not."]],a:null,
r:["Solomon Asch ran this in 1951. The other students were actors. Alone, people made mistakes less than 1% of the time. In the group, about three out of four real participants went along with the wrong answer at least once, and about a third of all answers on the rigged rounds were wrong.",
"Then Asch changed one thing. He let a single actor give the correct answer. With just one ally in the room, going along with the majority fell to a small fraction of what it had been."],
v:{c:"Participants across the rigged rounds",b:[["Went along at least once",75],["Never went along",25]]},
w:"This study is usually retold as “people are sheep”. Read the numbers again: about two thirds of all the answers defied a unanimous group, and a quarter of people never gave in once. Later studies also found the effect is not fixed. It is stronger in cultures that prize group harmony and has been weaker in some later American samples. The same data supports “people conform” and “people resist”. Which headline you write is a choice.",
tool:["One dissenter","A unanimous room is far more powerful than a large one. A single voice saying “I see it differently” frees everyone else to be honest. Sometimes that voice has to be yours."],
d:["Is going along with a group ever the reasonable thing to do? When?","What is the difference between changing your answer and changing your mind?","Where in your own week is there a unanimous room that might be wrong?"],
y:"In the next group decision you are part of (a film, a place to eat), notice who speaks first and how often the rest follow. Try writing choices down before anyone speaks.",
x:"Sociology (norms and social control), Political Science (public opinion, the secret ballot), Economics (herd behaviour in markets)."},

{id:"psy_milgram",s:"psy",k:"Experiment",t:"Please continue",
h:"What would an ordinary person do if a man in a grey coat told them to hurt a stranger?",
p:["New Haven, 1961. A newspaper advertisement offers four dollars for an hour of a “memory study” at Yale. You arrive and draw lots with another volunteer, a friendly man of about fifty. He becomes the learner; you are the teacher.",
"He is strapped into a chair in the next room. Each time he gets a word pair wrong, you are to press a switch that gives him an electric shock, and move one switch up each time. The switches run from 15 volts to 450, in steps of 15. The last ones are labelled “Danger: severe shock” and then just “XXX”. At 150 volts he shouts that he wants to stop. At 300 he pounds the wall. Then he goes silent. Whenever you hesitate, the experimenter says calmly: “Please continue.”"],
q:"Out of every 100 ordinary adults, how many do you think went all the way to 450 volts?",
o:[["Almost none: 1 or 2","Psychiatrists asked beforehand predicted about one person in a thousand. They were wrong by a very wide margin."],["A minority: about 20","A reasonable guess, and still far too low for the basic version of the study."],["Most: about 65","That is the figure. Twenty-six of the first forty went to the end."]],a:2,
r:["Stanley Milgram found that 65% of people in the basic version went to the last switch. Nobody stopped before 300 volts. There were no shocks: the learner was an actor. But the teachers did not know that. Many sweated, trembled, laughed nervously and argued, and continued.",
"Milgram then ran the study again and again, changing one thing each time. When the experimenter gave orders by telephone, obedience fell to about a fifth. When two other “teachers” in the room refused to go on, only one person in ten continued. Distance from authority, and the sight of someone else refusing, changed everything."],
v:{c:"Who went to 450 volts",b:[["Experts predicted",1],["Basic version",65],["Orders by telephone",21],["Two others refuse first",10]]},
w:"The study has been challenged. Historian Gina Perry listened to the original tapes and found the experimenter often pushed far beyond the script, and that a good many participants suspected the shocks were fake. Some later researchers argue people continued because they believed in the science, which is closer to persuasion than obedience. And the study itself put people under severe stress without their consent; it helped bring about the ethics rules that would forbid it today.",
tool:["The small step","No one was asked to give 450 volts. They were asked to give 15 more than last time. When each step is small, look at where the staircase ends."],
d:["Who is responsible for a harmful act: the person who orders it, the person who does it, or both?","Was it right to run this experiment? Does what we learned change your answer?","The fifteenth step felt almost the same as the fourteenth. Where should a person have stopped, and how would they know?"],
y:"Think of one rule you follow without knowing the reason for it. Find out the reason. Decide whether you still agree.",
x:"History (ordinary people in the wars and genocides of the 20th century), Political Science (authority and legitimacy), Sociology (roles)."},

{id:"psy_marsh",s:"psy",k:"Experiment",t:"One marshmallow now, or two later",
h:"A famous test of willpower turned out to be measuring something else as well.",
p:["A nursery school at Stanford, around 1970. A four-year-old sits at a table. On a plate is one marshmallow. The researcher says: you may eat it now, or, if you wait until I come back, you may have two. Then the adult leaves the room.",
"Some children eat it at once. Others cover their eyes, sing, kick the table or sniff the marshmallow and put it down again. Years later, the researchers track the same children down as teenagers."],
q:"The children who waited did better at school years later. What is the best explanation?",
o:[["They were born with more self-control","This was the popular reading for decades, and it sold a great many books. It is at best a small part of the story."],["They had learned that adults keep promises","A 2013 study tested exactly this, and trust turned out to matter enormously."],["Their families had more money and stability","When later researchers took family background into account, most of the link faded."]],a:null,
r:["Walter Mischel’s follow-up studies found that children who had waited longer tended to have higher test scores and cope better with stress as teenagers. The story spread everywhere: self-control at four predicts success in life.",
"In 2013 Celeste Kidd and colleagues ran the test with a twist. First, an adult promised each child better crayons and stickers. For half the children the adult came back with them; for the other half the adult returned empty-handed and apologised. Then came the marshmallow. Children who had just been let down waited about three minutes on average. Children whose adult had kept the promise waited about twelve.",
"In 2018 Tyler Watts and colleagues repeated the long-term study with more than 900 children from a much wider range of families. The link between waiting and later achievement was about half the original size, and most of it disappeared once family background and early ability were taken into account."],
v:{c:"Average minutes a child waited (Kidd, 2013)",b:[["Adult had kept a promise",100],["Adult had broken a promise",25]],u:["12 min","3 min"]},
w:"Not waiting can be the sensible choice. If the adults in your life often fail to deliver, the marshmallow in front of you is the only one you can count on. What looked like a weakness in the child may be an accurate reading of the child’s world.",
tool:["Person or situation?","When someone’s behaviour looks like a flaw in their character, ask what in their situation would make that behaviour reasonable. We blame the person first far too often."],
d:["If patience depends on trust, what does that say about asking people in hard circumstances to “plan for the future”?","A result was believed for forty years and then shrank. How should that change the way you read a striking study?","When has waiting been the wrong decision for you?"],
y:"Next time you judge someone as lazy or careless, write down two things about their situation that could explain it instead. See whether the judgement survives.",
x:"Economics (saving, and why the poor are said to “discount the future”), Sociology (class and opportunity)."},

{id:"psy_loftus",s:"psy",k:"Experiment",t:"The crash that changed with one word",
h:"Memory does not play back. It rebuilds.",
p:["A group of students watch a short film of two cars colliding. Afterwards they fill in a questionnaire. One question differs between groups by a single word.",
"Some are asked: “About how fast were the cars going when they hit each other?” Others are asked how fast the cars were going when they “smashed into” each other. Everyone saw the same film."],
q:"Does the word in the question change what people remember?",
o:[["No. They all saw the same film","It seems it should not. But the groups gave clearly different speeds."],["Yes, a little: the estimates differ","Right, and the effect did not stop at the estimate."],["Yes, and it adds things that never happened","This is what the second part of the study showed."]],a:2,
r:["Elizabeth Loftus and John Palmer ran this in 1974. People asked about cars that “smashed” estimated about 41 miles an hour. People asked about cars that “contacted” each other said about 32. Same film.",
"A week later the students were asked: did you see any broken glass? There was none in the film. About a third of the “smashed” group said yes, more than twice the rate of the “hit” group. The word had not only shifted a number. It had been built into the memory itself."],
v:{c:"Remembered broken glass that was never there",b:[["Asked with “smashed”",32],["Asked with “hit”",14]]},
w:"This matters most in court. In the United States, mistaken eyewitnesses played a part in roughly seven out of ten of the first few hundred convictions later overturned by DNA evidence. Those witnesses were not lying. Confidence and accuracy are much less connected than juries assume. Yet memory is not useless: under careful, neutral questioning soon after an event, people are often accurate. The question is how the memory was handled.",
tool:["Rebuilt, not replayed","Each time you recall something you put it together again from pieces, including pieces added later. A vivid, confident memory is evidence. It is not proof."],
d:["If your memories can be changed without your knowing, in what sense are they yours?","Should a court ever convict on one confident eyewitness alone?","Two honest people remember the same quarrel differently. Is one of them wrong?"],
y:"Ask a family member to describe an event you both attended years ago, before you say anything. Compare the two versions and look for details that cannot both be true.",
x:"History (how far to trust memoirs and oral accounts), law, and journalism (leading questions)."},

{id:"psy_bat",s:"psy",k:"Puzzle",t:"The bat and the ball",
h:"The answer that arrives first is not always the one you would sign.",
p:["Answer quickly. A bat and a ball cost ₹110 in total. The bat costs ₹100 more than the ball.","How much does the ball cost?"],
q:"Your answer:",
o:[["₹10","This is the answer that jumps to mind for most people. Check it: if the ball is ₹10, the bat is ₹110, and together they cost ₹120."],["₹5","Right. Ball ₹5, bat ₹105, total ₹110. If it came easily, notice whether ₹10 flashed up first."],["₹1","Not this one. Try it: bat ₹101, total ₹102."]],a:1,
r:["The ball costs ₹5. Shane Frederick used this puzzle (in dollars) in 2005, and Daniel Kahneman made it famous. More than half of the students tested at Harvard, MIT and Princeton gave the wrong answer. They were not short of ability. They did not check.",
"Kahneman describes two ways of thinking. System 1 is fast, effortless and automatic: it reads faces, finishes “2 + 2 =” and offers ₹10. System 2 is slow, effortful and lazy: it can do the algebra, but only if called. Most errors happen when System 2 accepts what System 1 hands it without looking."],
v:{c:"Students at three top universities",b:[["Gave the quick wrong answer",50],["Got it right",50]]},
w:"Fast thinking is not the enemy. A chess master’s instant sense of a good move and a batter’s response to a ball at 140 km/h are System 1, trained by thousands of hours of feedback. The trouble comes when a quick answer feels just as certain in a situation where you have had no such training. Later research also suggests the two-system picture is too neat: it is a useful story about the mind, not a map of the brain.",
tool:["The second look","When an answer arrives instantly and feels obvious, spend five seconds checking it against the question. In an exam, this single habit catches more slips than any formula."],
d:["If intelligent people get this wrong, what is the difference between being intelligent and thinking well?","When should you trust your gut, and how could you tell in the moment?","An advertisement is designed to be answered by System 1. What would it look like to answer it with System 2?"],
y:"In your next maths practice, mark each answer F (it felt fast) or S (you worked it through). Afterwards, see which letter your slips carry.",
x:"Maths (checking by substitution), Economics (behavioural economics; Kahneman won the Nobel in 2002)."},

{id:"psy_dissonance",s:"psy",k:"Experiment",t:"One dollar or twenty",
h:"We do not only act on what we believe. We come to believe what we have acted on.",
p:["Stanford, 1959. You spend an hour on a deliberately dull task: turning wooden pegs a quarter turn, one after another, then doing it again. When it is over, the experimenter asks a favour. The next participant is waiting outside. Would you tell them the task was really enjoyable? You will be paid for it.",
"Half the students are paid one dollar to say this. The other half are paid twenty dollars, a lot of money in 1959. Afterwards, everyone is asked privately how enjoyable the task actually was."],
q:"Which group rated the boring task as more enjoyable?",
o:[["The $20 group: more reward, warmer feelings","This is what the reward theories of the day predicted. The result went the other way."],["The $1 group","Yes. The people paid almost nothing came to like the task more."],["No difference","There was a clear difference, and not the one most people expect."]],a:1,
r:["Leon Festinger and James Carlsmith found that the students paid one dollar rated the task as clearly more enjoyable than those paid twenty.",
"Festinger’s explanation: the $20 group had a ready reason for the lie (“I did it for the money”). The $1 group had none. Holding “the task was dull” and “I told someone it was fun, for almost nothing” together was uncomfortable. They could not unsay the words, so they changed the belief: perhaps it was not so dull after all. He called the discomfort cognitive dissonance."],
w:"Daryl Bem offered a rival explanation in 1967 that needs no discomfort at all. We often work out our own attitudes the way we work out other people’s: by watching what we do. “I said it was fun and nobody paid me much. I suppose I liked it.” The two theories predict nearly the same results, and psychologists argued for years about how to tell them apart. Two good explanations can fit the same facts.",
tool:["Belief follows action","After you have defended a position or paid a price for something, your belief in it rises. Ask: do I think this because it is true, or because I have already acted as if it were?"],
d:["If your beliefs shift to match your actions, how much are they really your conclusions?","Why might a group ask new members to do something difficult or embarrassing to join?","Could you use this deliberately, to come to like something that is good for you?"],
y:"Think of something you paid a lot for, in money or effort, and now defend. Would you defend it as strongly if it had been free?",
x:"Economics (the sunk cost fallacy), Political Science (why people double down), marketing."},

{id:"psy_pygmalion",s:"psy",k:"Experiment",t:"The children who were going to bloom",
h:"What happens when a teacher is told a child is about to shine?",
p:["A primary school in California, in the mid-1960s. All the children take a test. The teachers are told it is a new Harvard test that can pick out the pupils about to “bloom”, and each teacher is given the names of the few in the class who are.",
"The test could do no such thing. The names, about one child in five, had been picked at random. Nothing was said to the children or their parents. Eight months later everyone was tested again."],
q:"What happened to the children whose names were on the list?",
o:[["Nothing. A label cannot change a child","A reasonable position, and for the older classes close to true. But not for the youngest."],["They gained more than their classmates","In the first two years of school, yes, by a wide margin."],["They did worse under the pressure","No. Nobody had told the children anything, so they felt no pressure."]],a:1,
r:["Robert Rosenthal and Lenore Jacobson reported that in the youngest classes the “bloomers” gained far more on the test than their classmates: about 27 points against 12 in the first year. In the older classes there was little difference.",
"Nobody had lied to the children. The belief travelled through small things: a warmer tone, more time to answer, harder questions, more encouragement after a mistake. Sociologist Robert Merton had already named the pattern in 1948: the self-fulfilling prophecy, a false belief that makes itself come true."],
w:"The study is famous and also disputed. Critics pointed out that the test was unreliable for very young children, and repeat studies have given mixed results. A large review in 2005 concluded that teacher expectations do affect pupils, but the effect is usually small, and teachers’ expectations are often simply accurate. The honest summary: expectations leak, but they are not magic.",
tool:["The leaking expectation","What you expect of a person changes how you treat them, and how you treat them changes what they do. Before you conclude “I was right about them”, ask how much of the result you produced."],
d:["Whose expectations of you have shaped what you became good at?","If the bloomers did better only because of a false belief, was the experiment unfair to the other children?","Can you hold a high expectation of yourself that you have no evidence for yet? Should you?"],
y:"For one week, treat one subject you think you are “bad at” as though you were about to bloom in it: sit nearer, ask a question, take the harder problem. Notice what changes.",
x:"Sociology (labelling and the self-fulfilling prophecy), Economics (expectations and bank runs)."},

{id:"psy_flow",s:"psy",k:"Idea",t:"The beeper and the best moments",
h:"When are people actually happiest? It is not when they say they are.",
p:["In the 1980s the psychologist Mihaly Csikszentmihalyi gave people an electronic pager. It beeped at random about eight times a day. Each time it went off, they wrote down what they were doing and how they felt: alert or dull, strong or weak, involved or bored.",
"He was looking for the moments people describe as the best of their lives. Painters, climbers, surgeons and chess players had all told him about the same state: time disappears, the self goes quiet, and the activity seems to carry itself."],
q:"When the beeper went off, where were people most often in that state?",
o:[["Relaxing: television, resting, free time","This is what most people predict, and what they say they want more of. The beeper disagreed."],["Working at something hard that they were good at","Yes. It turned up at work about three times as often as in free time."],["With friends","Time with friends rated well for mood, but the deep absorbed state came mostly from demanding activity."]],a:1,
r:["Csikszentmihalyi called the state flow. It appears when a challenge is high and your skill is just about equal to it, the goal is clear, and you can tell at once how you are doing. Too hard, and you feel anxious. Too easy, and you are bored.",
"His pager studies found people in this high-challenge, high-skill condition for about half of their working time and under a fifth of their free time. And yet, when beeped at work, they said they wished they were doing something else. People are poor judges of what will absorb them."],
v:{c:"Time spent in high-challenge, high-skill activity",b:[["At work",54],["In free time",18]]},
w:"Flow is not the same as doing good. A gambler at a machine and a player lost in a game for ten hours can be in flow. The state tells you that challenge and skill are matched. It tells you nothing about whether the activity is worth your life. And the theory rests heavily on what people report about themselves, which is hard to verify.",
tool:["Match the challenge","If you are bored, the task is too easy: raise the difficulty. If you are anxious, it is too hard: cut it into a smaller piece. The absorbing zone is just beyond what you can already do."],
d:["If hard work makes people happier than rest, why do we keep wishing for rest?","Is a life full of flow a good life, whatever the activity?","Which is better: to feel happy, or to be absorbed in something that matters to you?"],
y:"Take a piece of music, a maths topic or a sport skill you practise. Find the version that is just too hard, slow it down until you can only just do it, and work there for twenty minutes.",
x:"Music and sport practice, Economics (what income does and does not buy), Philosophy (the experience machine)."},

{id:"psy_spotlight",s:"psy",k:"Experiment",t:"The embarrassing T-shirt",
h:"How many people in the room noticed? Fewer than you think.",
p:["Cornell University, around 1998. A student is asked to put on a T-shirt with a large picture of a singer most students found uncool, and then to walk into a room where other students are already sitting, filling in forms. The student stays for a minute and is called out again.",
"Outside, the student is asked: how many of the people in that room could say who was on your T-shirt?"],
q:"The students wearing the shirt guessed about half the room had noticed. How many really had?",
o:[["About half, as they guessed","That is what it felt like from the inside. The real number was much lower."],["About a quarter","Yes. Roughly half as many as the wearers believed."],["Nearly everyone","No. Most people in the room were busy with their own forms and their own thoughts."]],a:1,
r:["Thomas Gilovich and colleagues found that only about a quarter of the people in the room could name the person on the shirt. The wearers had overestimated by a factor of two. The same happened with a shirt the students were proud of.",
"They called it the spotlight effect. You are the centre of your own world, so you assume you are near the centre of everyone else’s. But they are at the centre of theirs, wondering who noticed them."],
v:{c:"People who noticed the T-shirt",b:[["Wearer’s guess",50],["Actual",25]]},
w:"The effect is an average. A person who stands out sharply in a group, by appearance, accent or being new, often really is watched more. And online, a moment can be recorded and replayed in a way a walk across a room never was. The finding says that we overestimate attention. It does not say nobody is looking.",
tool:["Halve the spotlight","When you feel that everyone saw your mistake, cut your estimate in half, then remember that most of those people will have forgotten by tomorrow."],
d:["If others notice you much less than you think, how much of your behaviour is for an audience that is not there?","Is caring what others think a weakness, a strength or both?","Does a camera in every pocket make the spotlight effect less of an illusion?"],
y:"Ask a question in class that you would normally hold back for fear of looking foolish. The next day, ask a classmate whether they remember who asked it.",
x:"Sociology (Goffman: everyday life as a performance), Economics (spending to impress)."}
];
TQD=TQD.concat([
{id:"phi_ship",s:"phi",k:"Thought experiment",t:"The ship of Theseus",
h:"Replace every part of a thing. Is it still the same thing?",
p:["The Athenians kept the ship in which the hero Theseus had sailed home from Crete. As the centuries passed, a plank rotted and was replaced with a new one. Then another. Then a mast, a rib, an oar. Plutarch, writing about it some two thousand years ago, says philosophers already used the ship as a standing puzzle.",
"Eventually not one piece of the original timber is left. The ship in the harbour looks the same, sits in the same place and has been called Theseus’s ship every day without a break."],
q:"Is it still the ship of Theseus?",
o:[["Yes. It never stopped being that ship","Then sameness does not depend on the material. Hold that thought for the twist below."],["No. It is a copy standing in the same place","Then at which plank did it stop being the ship? The first? The last? The one that tipped it past half?"],["There is no fact of the matter","A serious position. But then what are we doing when we say a thing is “the same” as before?"]],a:null,
r:["Those who say yes usually point to continuity: the ship changed gradually, kept its form and its function, and was never taken apart. Those who say no hold that a thing is its matter, so new matter means a new thing.",
"In 1655 Thomas Hobbes added a twist. Suppose someone had collected every old plank as it was removed and, at the end, put them together again in the original order. Now there are two ships. One has the continuous history. The other has all the original wood. Which one did Theseus sail?"],
w:"This is not only about ships. Most of the cells in your body are replaced over the years, and so are your opinions, tastes and memories. A band replaces every member and keeps touring under its name. A river is never the same water. If “the same” has no single meaning, perhaps we use several meanings (same matter, same form, same history, same role) and switch between them without noticing.",
tool:["Same in what way?","When someone says a thing is or is not “the same”, ask which sameness they mean: material, shape, history or purpose. Many arguments end the moment that is settled."],
d:["Are you the same person you were at five? What, exactly, has stayed?","If a perfect copy of you were made and the original destroyed, would you have survived?","A country changes all its people, its laws and its borders over 500 years. Is it the same country?"],
y:"Pick an object you have repaired or upgraded many times (a bicycle, a phone, a school bag). Decide what would have to change before you called it a different one.",
x:"Political Science (what makes a state the same state after a revolution), law (company identity), biology."},

{id:"phi_chariot",s:"phi",k:"Dialogue",t:"The king and the chariot",
h:"A monk tells a king that there is no such person as himself.",
p:["North-west India, about 2,100 years ago. The Indo-Greek king Milinda (the Greeks called him Menander) loves an argument and has worn out every teacher in his kingdom. He goes to meet the Buddhist monk Nāgasena and asks his name. The monk replies: “I am called Nāgasena. But that is only a name, a convenient label. No person is found here.”",
"The king is delighted. If there is no Nāgasena, who wears these robes? Who keeps the rules? Who is speaking? Nāgasena answers with a question. “Your Majesty, how did you come here?” “By chariot.” “Then show me the chariot. Is it the axle? The wheels? The pole? The frame?” To each the king says no. “Is it something apart from these?” No. “Then I find no chariot. Your Majesty has spoken a falsehood.”"],
q:"Is there a chariot?",
o:[["Yes. The parts put together are the chariot","That is close to the king’s own reply. Notice what it gives away: “chariot” is then a name for an arrangement, not an extra thing."],["No. There are only parts","Then is there an axle? It also has parts. How far down does this go?"],["“Chariot” is just a useful word","This is Nāgasena’s view, and he applies it to the self as well."]],a:null,
r:["The king answers that “chariot” is a name used because the parts are present together. Nāgasena agrees, and turns it round: in the same way, “Nāgasena” is a name used because body, feeling, perception, habits and awareness are present together. There is a flow of connected events, and a convenient name for it. There is no separate owner behind them.",
"The dialogue is preserved in the Milindapañha, “The Questions of Milinda”. Nearly two thousand years later the Scottish philosopher David Hume looked inside himself for a self and reported much the same: he could find only particular perceptions, heat or cold, love or hatred, and never a self apart from them."],
w:"Other Indian schools would not accept this. The Nyāya philosophers and the thinkers of the Upanishads argued for a lasting self, the ātman, and asked hard questions back. If there is only a stream, who remembers yesterday? Who is rewarded or blamed for an act done years ago? Memory and responsibility seem to need someone who was there both times. The debate ran for more than a thousand years and is not settled now.",
tool:["The thing behind the word","A noun makes us assume there is one solid thing it names. Ask whether there is, or whether the word is a handle for many things working together: “the economy”, “society”, “the nation”, “me”."],
d:["If there is no fixed self, who is responsible for what you did last year?","Is a team something over and above its players? Is a nation?","Would believing Nāgasena make a person calmer, or more careless? Why?"],
y:"Sit quietly for two minutes and try to catch yourself without any particular thought, feeling or sensation. Report honestly what you find.",
x:"Sociology (is society more than individuals?), Economics (does “the market” want anything?), History (Indo-Greek kingdoms)."},

{id:"phi_trolley",s:"phi",k:"Thought experiment",t:"The switch and the bridge",
h:"Five lives against one. Twice. Most people give two different answers.",
p:["A runaway tram is heading for five people working on the track. They cannot get away. You are standing by a switch. If you pull it, the tram turns onto a side track, where one person is working. One will die in place of five.",
"Now a second case. The same tram, the same five people. This time you are on a footbridge above the track, next to a very large stranger. The only way to stop the tram is to push that stranger off the bridge into its path. The stranger will die. The five will live."],
q:"What would you do?",
o:[["Pull the switch, and push the stranger","You are consistent: five lives outweigh one. Would you also approve of a surgeon who takes one healthy patient’s organs to save five?"],["Pull the switch, but not push","This is by far the most common answer. The hard part is saying why, since the numbers are identical."],["Neither. I will not kill anyone","Also consistent. Then is letting five die when you could prevent it something you can fully stand behind?"]],a:null,
r:["Philippa Foot set out the first case in 1967; Judith Jarvis Thomson added the footbridge. In one large survey about 85% of people said pulling the switch was acceptable, and only about 12% said the same of pushing. The outcome is the same: one dead, five saved.",
"One family of answers looks only at results: the right act is the one that leaves the world better. On that view the two cases are the same. Another says some things may not be done to a person whatever the result. Pushing uses the stranger as a tool; pulling the switch redirects a danger, and the death on the side track is foreseen but not the means of saving anyone."],
v:{c:"Said it was acceptable (one large survey)",b:[["Pull the switch",85],["Push the stranger",12]]},
w:"Perhaps the difference is not a principle at all. Brain-imaging work by Joshua Greene suggests the footbridge case sets off a strong emotional reaction that the switch case does not: one is up close and done with your hands. If so, is that feeling a moral insight to respect or a bias to overcome? And these cases are artificially tidy. In life you never know that pushing will work, or that five will die.",
tool:["Find your rule","When you give different answers to two cases, write down the rule that separates them. Then test the rule on a third case. If it fails there, either the rule or one of your answers has to go."],
d:["Is there a real moral difference between killing and letting die?","A self-driving car must choose between its passenger and two pedestrians. Who should decide the rule: the owner, the maker or the law?","If a feeling of horror stops you doing what the numbers say, should you trust the feeling or the numbers?"],
y:"Put both cases to two people at home, separately. Ask each for the reason behind the answer, and note whether the reason would survive the surgeon case.",
x:"Political Science (rights against the greater good), Economics (cost-benefit analysis), law (necessity as a defence)."},

{id:"phi_cave",s:"phi",k:"Allegory",t:"The cave",
h:"What if everything you have seen so far is the shadow of something else?",
p:["Plato asks us to picture people who have lived all their lives in a cave, chained so that they can only face the back wall. Behind them is a fire. Between the fire and the prisoners, people carry objects along a low wall, and the fire throws the shadows of those objects onto the wall the prisoners can see.",
"The prisoners have never seen anything else. They name the shadows, study them, and give honours to whoever is quickest at predicting which shadow comes next. Then one prisoner is freed and dragged up, past the fire, out into daylight. At first the sun blinds him. Slowly he sees real things, and understands what the shadows were."],
q:"He goes back down to tell the others. What happens?",
o:[["They are grateful and follow him out","Plato thinks not. Ask yourself how you react when someone tells you your world is not the real one."],["They laugh at him","Yes. His eyes are no longer used to the dark. He is now bad at the shadow game, which is all they respect."],["They turn on him","Plato goes this far: if they could lay hands on anyone who tried to free them, he says, they would kill him. His own teacher, Socrates, had been put to death by Athens."]],a:null,
r:["The story is in Book VII of the Republic, written about 375 BCE. For Plato the cave is ordinary life: we take appearances, opinions and what everyone around us says for reality. Education is not pouring facts into a mind. It is turning the whole person round to face a different direction, and it hurts.",
"The returning prisoner stumbles in the dark and is mocked. Plato’s point is uncomfortable: the person who knows more can look like the fool, and the crowd’s contempt proves nothing either way."],
w:"The allegory can be turned against the one who tells it. Anyone with a strange belief can say “you are still in the cave”. The claim to have seen the light is exactly what a crank and a prophet both make. Plato himself drew a troubling conclusion from it: that those who have left the cave should rule the rest. So the question it leaves you with is not “am I in a cave?” but “how could I tell, from the inside?”",
tool:["What is casting this?","When you are shown something (a headline, a feed, a statistic, a reputation), ask what produced it and who is carrying the object past the fire. The shadow is real. It is just not the thing."],
d:["How could you tell, from inside, whether you are in a cave?","Is it kind or cruel to tell someone their comfortable world is a shadow?","A feed chosen for you by an algorithm shows what holds your attention. Is that a cave? Who built it?"],
y:"Choose one news story. Read how three different outlets report it. List what stays the same across all three and what is each one’s shadow.",
x:"Political Science (propaganda, philosopher-kings), Sociology (ideology), media studies."},

{id:"phi_machine",s:"phi",k:"Thought experiment",t:"The experience machine",
h:"If you could have any life you wanted, as a perfect illusion, would you take it?",
p:["Suppose scientists have built a machine that can give you any experience you choose. You float in a tank with wires to your brain, and it seems to you, completely, that you are writing a great novel, winning a final, falling in love. You can programme a whole lifetime of the best experiences there are.",
"Once you are inside you will not know it. It will feel entirely real. Your body will be looked after. Other people can plug in too, so you need not stay out for their sake. The only choice is now: plug in for life, or not."],
q:"Would you plug in?",
o:[["Yes. A wonderful life is a wonderful life","Then what matters to you is how life feels from the inside. Many serious philosophers have held that view."],["No. It would not be real","Most people say this. So something matters to you besides how things feel. What is it?"],["For a short while, to try it","Fair. Notice that you want to come back. To what?"]],a:null,
r:["Robert Nozick proposed the machine in 1974 to test a simple theory: that the only thing that finally matters is pleasant experience. If that were true, plugging in would be the obvious choice. Most people refuse.",
"Nozick took the refusal as evidence. We want to actually do things, not only to have the experience of doing them. We want to be a certain kind of person, and a body in a tank is no kind of person. And we want contact with a reality deeper than anything people can build."],
w:"Perhaps we refuse for a worse reason: we cling to whatever we already have. In 2010 Felipe De Brigard reversed the story. You are told that your life so far has been inside the machine, and asked whether you want to leave for your real life. A large share of people chose to stay. If we prefer reality only when reality is what we are used to, the refusal tells us less than Nozick hoped.",
tool:["Flip the question","To check whether a preference is a principle or a habit, reverse the starting point. If your answer flips with it, you were defending the status quo, not a value."],
d:["What do you want from life that could not be delivered as an experience?","Hours inside a game or a feed are small experience machines. What separates them from a novel, or a daydream?","If someone is perfectly happy believing something false, are they missing anything?"],
y:"Write down the three best hours of your last month. For each, ask: would it have been as good if it had only seemed to happen?",
x:"Economics (is welfare the same as satisfaction?), Psychology (flow), technology and virtual worlds."},

{id:"phi_veil",s:"phi",k:"Thought experiment",t:"Behind the veil",
h:"Design a society without knowing who you will be in it.",
p:["You and some others are asked to choose the basic rules of a society: who has which rights, how wealth and opportunity are shared, who makes decisions. You will then have to live in it.",
"There is a condition. You choose from behind a veil of ignorance. You do not know whether you will be born rich or poor, into which religion or caste, male or female, healthy or ill, clever or slow, in a city or a village. You could turn out to be anyone."],
q:"Which rule for sharing wealth would you choose?",
o:[["Strict equality: everyone gets the same","Safe. But if allowing some inequality made everyone better off, even the poorest, would you still refuse it?"],["Whatever makes the average as high as possible","A good bet on average. But you might be the one at the bottom, and the average says nothing about how low the bottom is."],["Inequality only where it lifts the worst-off","This is the rule John Rawls argued a rational person would choose."]],a:null,
r:["John Rawls set this out in A Theory of Justice in 1971. Not knowing your place, he argued, you would insist on two things. First, equal basic liberties for all. Second, fair equality of opportunity, with differences in wealth allowed only when they work to the benefit of the least well-off. You would look hardest at the worst seat, because it might be yours.",
"The idea is older than it looks. When two children share a cake, “one cuts, the other chooses” gets a fair cut without trusting anyone to be good. The veil does the same for a whole society."],
w:"Would people really choose Rawls’s rule? The economist John Harsanyi used a similar device earlier and concluded that a rational person would maximise the average. When Norman Frohlich and Joe Oppenheimer ran experiments in which groups had to agree on a rule before learning their place, most groups chose neither: they picked the highest average with a guaranteed floor. And Robert Nozick objected to the whole exercise: wealth is not a cake found on a table. People made it, and it comes already attached to them.",
tool:["Rule first, seat later","To test whether a rule is fair, choose it before you know which side of it you will be on. If you would only accept it from one seat, it is an interest dressed up as a principle."],
d:["Are your talents yours to profit from, or a matter of luck like everything else behind the veil?","Would you accept less freedom in return for more equality? How much?","Behind the veil you do not know which country you are born in. What does that do to arguments about borders?"],
y:"Take a rule at school or at home that benefits you. Rewrite it as you would if you did not know which person in the house or class you were going to be.",
x:"Political Science (justice, liberty, equality), Economics (inequality, taxation, welfare), Sociology (stratification)."},

{id:"phi_room",s:"phi",k:"Thought experiment",t:"The Chinese room",
h:"Can something give all the right answers and understand none of them?",
p:["You are locked in a room. You speak no Chinese at all; to you the characters are just shapes. Through a slot in the door come cards covered in Chinese writing. In the room is a huge rule book, in English, that tells you which shapes to send back for any shapes that come in.",
"You follow the rules exactly and pass cards back out. The rule book is so good that the people outside, who are native speakers asking questions, are convinced there is a fluent Chinese speaker in the room."],
q:"Does anything in that room understand Chinese?",
o:[["No. It is only shuffling symbols","This is Searle’s own answer. Symbols, however well arranged, do not add up to meaning."],["Yes: the whole system does, though you do not","This is the best-known reply. You are one part of the system, as a single neuron is one part of a brain."],["If you cannot tell the difference, there is none","Then understanding just is behaving as though you understand. Is that true of you?"]],a:null,
r:["John Searle published the argument in 1980. His target was the claim that a suitably programmed computer does not merely imitate a mind but has one. A program, he said, works on the shapes of symbols (syntax). Understanding is about what the symbols mean (semantics). You in the room have all the syntax and none of the meaning, and a computer is in the same position.",
"The systems reply says understanding belongs to the whole: you, the book and the cards together. Searle answered: then let me memorise the book and do it all in my head. I am now the whole system, and I still do not understand a word."],
w:"Thirty years earlier Alan Turing had proposed the opposite test: if a machine’s conversation cannot be told from a person’s, stop asking whether it “really” thinks. Critics of Searle add that a rule book able to hold a real conversation would be so vast and intricate that our intuitions about a man with a book are worthless. And there is a sharper worry: your own neurons do not understand Chinese or anything else. If understanding can arise from cells that understand nothing, why not from something else? You are using a program that answers questions in this app. Is there anyone in the room?",
tool:["Doing or understanding?","Getting the right output and grasping why are different things. Ask it of machines, and of yourself: could I produce this answer by following steps I do not understand?"],
d:["What would a machine have to do before you said it understood?","When you apply a formula you cannot derive, are you the person in the room?","If understanding cannot be seen from outside, how do you know that other people have it?"],
y:"Take one formula you use often. Try to explain to someone why it is true, not how to use it. See where the explanation runs out.",
x:"Maths (procedure against understanding), technology and AI, Psychology (what is a mind?)."},

{id:"phi_gyges",s:"phi",k:"Story",t:"The ring of Gyges",
h:"Would you still be honest if you could never be caught?",
p:["In Plato’s Republic, a young man named Glaucon tells a story to challenge Socrates. A shepherd called Gyges is out with his flock when an earthquake opens the ground. In the chasm he finds a gold ring. Sitting with the other shepherds later, he turns the ring on his finger and finds that he has become invisible. He turns it back and reappears.",
"Gyges gets himself sent as a messenger to the king’s court. There, using the ring, he wins over the queen, kills the king with her help and takes the throne."],
q:"Glaucon’s challenge: give the same ring to an honest person. What happens?",
o:[["They stay honest","Then honesty is worth having for itself, not for its rewards. Glaucon will ask you to prove it."],["Sooner or later they take what they want","That is Glaucon’s claim: we are just only because we fear being caught."],["It depends on the person","Probably true. Then what is the difference between the two kinds of person?"]],a:null,
r:["Glaucon argues that no one is just willingly. Justice is a bargain the weak make to protect themselves: I will not harm you if you do not harm me. Remove the risk of being caught and the bargain has no hold. Anyone who had the ring and did not use it would be privately thought a fool.",
"Socrates spends the rest of the Republic answering. His reply is that injustice damages the person who does it. An unjust person is at war inside, ruled by appetites, unable to trust or be trusted. Gyges gains a kingdom and loses the only thing that could have made it worth having: a self in good order."],
w:"There is some evidence for Glaucon. In one well-known study, people paying for coffee through an honesty box paid nearly three times as much in the weeks when a picture of a pair of eyes was pinned above it than when the picture was of flowers. Later attempts to repeat that “watching eyes” effect have had mixed results. And there is plain evidence for Socrates too: people return lost wallets, give anonymously and keep promises to the dead.",
tool:["Remove the audience","To find out whether you hold a value or perform it, imagine no one could ever know. What you would still do is yours. The rest is reputation."],
d:["Is a person who does right only from fear of being caught a good person?","Anonymity online is a kind of ring. What does behaviour there tell us?","Socrates says doing wrong harms the wrongdoer. Is that true, or is it what we would like to be true?"],
y:"For one day, note each good thing you do and mark whether anyone would have known if you had not. Look at the unmarked ones.",
x:"Political Science (why obey the law? the social contract), Economics (incentives and cheating), Sociology (social control)."},

{id:"phi_induction",s:"phi",k:"Puzzle",t:"The chicken and the black swan",
h:"The sun has risen every day so far. Why does that tell you anything about tomorrow?",
p:["A farmer feeds a chicken every morning. On the first day the chicken is wary. After a hundred mornings it is confident; after a thousand it is certain: when the farmer comes, food follows. It has more evidence for this than most scientists have for anything. One morning the farmer comes and wrings its neck. The example is Bertrand Russell’s.",
"For centuries Europeans could have told you with the same confidence that all swans are white. Every swan anyone had ever recorded was white. Then in 1697 a Dutch expedition reached a river in western Australia and found swans that were black."],
q:"A thousand cases all agree. How sure can you be about the next one?",
o:[["Certain. A thousand cases is proof","The chicken thought so. No number of agreeing cases adds up to a proof."],["Fairly sure, but never certain","This is where most scientists stand. The hard part is saying what “fairly sure” rests on."],["No more sure than at the start","This is David Hume’s unsettling conclusion, at least as far as logic goes."]],a:null,
r:["David Hume put the problem in the 1700s. We reason from “it has always been so” to “it will be so”. That step assumes the future will resemble the past. How do we know that? Only because, in the past, the future has resembled the past. The argument assumes the very thing it is trying to show.",
"Karl Popper’s response was to stop looking for proof by examples. A thousand white swans cannot prove that all swans are white, but one black swan can disprove it. So a good scientific claim is one that sticks its neck out and says what would show it to be false, and science advances by trying hard to find that."],
w:"Mathematics shows why piling up examples is not proof. Take n² + n + 41. Put in n = 0, 1, 2, 3 and so on: you get 41, 43, 47, 53, and every result is prime, forty times in a row. At n = 40 the pattern breaks, because the result is 41 × 41. But Popper’s answer has its own difficulty: in practice scientists do not drop a good theory at the first awkward result, and they are often right not to. So we go on trusting induction, with every bridge and every medicine, without a reason that satisfies a logician.",
tool:["Hunt the black swan","Do not ask how many cases agree with you. Ask what a case against you would look like, and go looking for it. One counterexample outweighs a thousand confirmations."],
d:["If induction cannot be justified, is it irrational to expect the sun to rise tomorrow?","What is the difference between a proof in maths and evidence in science?","What is one belief of yours that rests on “it has always been that way”?"],
y:"Take a rule you believe (about people, about yourself, about a subject). Spend ten minutes searching only for a counterexample.",
x:"Maths (proof against pattern; mathematical induction is a different thing), Economics (forecasts and “black swan” crashes), science."},

{id:"phi_know",s:"phi",k:"Idea",t:"Smoke on the hill",
h:"How do you know what you know? Indian philosophers made a list.",
p:["You are walking towards a hill and see smoke rising behind it. You say: there is a fire on that hill. You have not seen the fire. Do you know it is there?",
"The Nyāya school of Indian philosophy, some two thousand years ago, used this as its standard example. They asked: by what means does a person come to know anything at all? They called each reliable means a pramāṇa and argued about how many there were."],
q:"Which of these do you count as real sources of knowledge?",
o:[["Only what I perceive myself","This was the position of the sceptical Cārvāka school. But have you perceived that the Earth goes round the Sun, or that you were born?"],["Perception and reasoning from it","Many Buddhist philosophers accepted just these two. Then how do you know anything about history?"],["Perception, reasoning, and trustworthy testimony","Nyāya accepted these, and one more: learning what a thing is by its likeness to something known."]],a:null,
r:["Nyāya listed four means: perception (pratyakṣa), inference (anumāna), comparison (upamāna) and the word of a reliable person (śabda). The fire on the hill is inference: wherever there is smoke there is fire, as in a kitchen; there is smoke here; so there is fire here. They spelled out the steps, and what makes an inference go wrong.",
"Almost everything you know rests on testimony: your date of birth, the shape of the continents, every fact of history. Rejecting it would leave you knowing almost nothing. Accepting it means the question becomes: which sources are reliable, and how can I tell?"],
w:"Suppose what you saw was not smoke but a cloud of dust, or insects. You conclude there is a fire. By chance, there is one, out of sight. Your belief is true and you had a reason for it. Did you know? Indian philosophers such as Dharmottara were discussing cases like this around the 8th century. In 1963 the American philosopher Edmund Gettier published a three-page paper with the same kind of case and overturned a definition of knowledge (true belief with good reasons) that went back to Plato. Being right, with reasons, is still not always knowing.",
tool:["How do I know this?","For any belief, name the route it came by: did I see it, work it out, or was I told? If told, by whom, and how would they know? Most false beliefs fail at this step."],
d:["How much of what you know have you checked for yourself? Could anyone check more?","Is a lucky guess that turns out right a piece of knowledge?","When two experts disagree and you cannot check, what should you believe?"],
y:"Write down five things you are sure of. Beside each, write S (saw it), R (reasoned it) or T (was told). For each T, name who told you and how they knew.",
x:"History (sources and evidence), science (observation and inference), media (who is a reliable witness?)."}
]);
TQD=TQD.concat([
{id:"his_indus",s:"his",k:"Mystery",t:"The city with no palace",
h:"A great civilisation left drains, bricks and weights, and no trace of a king.",
p:["Mohenjo-daro, about 4,500 years ago. Tens of thousands of people live in a city laid out on a grid. Streets run north to south and east to west. Houses have bathing rooms, and waste water runs into covered drains along the street, with inspection covers. Baked bricks are made to one proportion, 4 : 2 : 1, here and in cities hundreds of kilometres away. Traders use stone weights cut to a single standard across the whole region.",
"Archaeologists who had dug in Egypt and Mesopotamia knew what to look for next: the palace, the royal tombs, the great temple, the statues of the ruler, the carvings of conquered enemies. At the Indus cities they have not found one that everyone accepts. The writing, a few signs at a time on small seals, has never been read."],
q:"No palace, no royal tomb, no monument to a king. What is the best conclusion?",
o:[["There were no kings: it was run by councils or merchants","Possible, and many find it attractive. But you are reading a great deal from what was not found."],["There were rulers; we have not found or recognised them","Also possible. Much of each site is unexcavated, and wood, cloth and paint do not last 4,000 years."],["We cannot say yet","The most cautious answer. The useful question is what evidence would change your mind."]],a:null,
r:["Someone organised all this. Standard bricks, standard weights and planned drainage across a region larger than Egypt or Mesopotamia do not happen by accident. What is missing is the usual display of power. There are few weapons, almost no pictures of war, and graves that do not differ much in wealth.",
"Some scholars see a society run by groups of merchants or elders, with power spread out. Others argue that rulers existed and showed their status in ways we do not recognise. The famous small statue called the “Priest-King” was given that name by excavators. Nothing shows that the man was a priest or a king."],
tl:[[-2600,"Planned cities appear across the Indus region"],[-2500,"Mohenjo-daro at its height"],[-1900,"The cities decline and are slowly abandoned"],[1921,"Excavation begins at Harappa"],[1924,"The discovery is announced to the world"]],
w:"“We found no palace” and “there was no palace” are different claims. Only a fraction of these cities has been dug, and the lowest levels at Mohenjo-daro lie under water. Yet silence can be evidence when you have looked hard in the places where a thing should be. The skill is judging how hard anyone has looked. Notice also how much the first labels shape later thinking: once a building is named the “Granary” or a figure the “Priest-King”, the name outlives the evidence.",
tool:["The argument from silence","Absence of evidence counts for something only if evidence would be expected to survive and someone has searched for it. Ask both questions before you conclude “there was none”."],
d:["Can a large, complex society work without a ruler? What would hold it together?","If the script were read tomorrow, what one thing would you most want it to say?","What will archaeologists 4,000 years from now conclude about us from what survives?"],
y:"Look around your room and list what would survive 4,000 years in the ground. What would a future archaeologist conclude about you, and what would they get wrong?",
x:"Political Science (must a state have a ruler?), Economics (standard weights and trade), Sociology (inequality)."},

{id:"his_ashoka",s:"his",k:"Source",t:"The emperor who said sorry",
h:"A conqueror carved his remorse into rock. Should we believe him?",
p:["About 261 BCE the Mauryan emperor Ashoka conquers Kalinga, on the east coast, in present-day Odisha. A few years later an inscription appears on rocks across his empire, in his own words. It says that 150,000 people were carried away, 100,000 were killed and many more died. And then something no conqueror had put in writing before: that the king now feels deep remorse, and that the suffering of those people weighs heavily on his mind.",
"He announces that from now on he will conquer by dhamma, right conduct, and not by arms. He has wells dug and trees planted along the roads, appoints officers to look after the welfare of his subjects, and asks all sects to respect one another."],
q:"How should a historian read this inscription?",
o:[["As sincere: a ruler changed by what he had done","Many historians accept the remorse as real. Then why announce it on rock, across an empire?"],["As politics: a way to hold a huge empire together","A strong reading. An empire of many peoples needs an idea that all of them can accept. But must it be one or the other?"],["As both, and as his version of events","This is how a careful historian treats any source written by the person it is about."]],a:null,
r:["The text is Rock Edict XIII. It is our main evidence for the Kalinga war, and it was written by the victor. Ashoka does not give Kalinga back. In the same edict he warns the forest peoples that the king, even in his remorse, has the power to punish. And at the two sites in Kalinga itself, this edict is left out. In its place are separate edicts telling his officials to govern justly.",
"For centuries nobody could read any of it. The script was deciphered by James Prinsep in 1837, and the “Beloved of the Gods” who speaks in the edicts was identified as Ashoka with the help of Sri Lankan Buddhist chronicles. An emperor almost forgotten in India was recovered from his own rocks."],
tl:[[-268,"Ashoka becomes emperor"],[-261,"The Kalinga war"],[-257,"The major rock edicts are inscribed"],[-232,"Ashoka dies"],[1837,"James Prinsep deciphers the script"]],
w:"Why would the edict about Kalinga be missing in Kalinga? Perhaps out of tact towards a people who had just been crushed. Perhaps because an admission of regret is dangerous to make to the conquered. The Buddhist legends, written centuries later, tell a different story again, of a cruel prince transformed by faith. We have the ruler’s own account and his admirers’ accounts. We do not have a single word from Kalinga.",
tool:["Who is speaking, to whom, and why?","Before you ask whether a source is true, ask who made it, for which audience and what they wanted it to do. Then ask whose voice is missing."],
d:["Does it matter whether Ashoka was sincere, if the wells were dug and the wars stopped?","Can a state founded on conquest ever truly rule by non-violence?","Which of today’s public statements will future historians read the way we read Rock Edict XIII?"],
y:"Take a public apology or announcement from this week’s news. Write down who is speaking, to whom, what they want, and who is not quoted.",
x:"Political Science (legitimacy, the welfare state, the Ashoka Chakra on the flag), Philosophy (the ring of Gyges), Sociology (religion and the state)."},

{id:"his_zero",s:"his",k:"Journey",t:"The long road of zero",
h:"A better way to write numbers took six hundred years to win, and was once banned.",
p:["In 628 CE, in Rajasthan, the astronomer Brahmagupta writes down rules that nobody had stated before. A number minus itself is zero. A number plus zero is itself. A number times zero is zero. He also gives rules for “debts” and “fortunes”: negative and positive numbers. Zero is no longer a gap between other numbers. It is a number.",
"With nine digits and zero, any number can be written and any sum done on a small surface, without a counting board. About two centuries later the scholar al-Khwārizmī in Baghdad writes a book explaining the Indian method. Latin translations carry it to Europe. In 1202 Leonardo of Pisa, known as Fibonacci, who learned the system from Arab traders in North Africa, publishes a book showing merchants how to use it."],
q:"The new numerals were plainly better for calculation. Why did Europe take centuries to adopt them?",
o:[["People distrusted anything foreign","Partly. But merchants adopted many foreign things quickly when there was profit in it."],["The old system had its experts and its rules","Yes. Abacus masters, guilds and account books were all built round Roman numerals."],["The new numerals were easier to forge","This was the reason actually given when they were banned."]],a:null,
r:["In 1299 the money-changers’ guild of Florence forbade its members to keep accounts in the new figures. The worry was fraud: a 0 can be turned into a 6 or a 9 with one stroke, and a digit added at the end multiplies a sum by ten. Roman numerals were harder to tamper with. Contracts and official records stayed in Roman numerals long after merchants were doing their private sums the new way.",
"The change came slowly, through schools for merchants’ sons, and faster once printed arithmetic books spread after 1450. By about 1500 the new numerals had largely won in commerce. A good idea is not enough. It needs carriers, and it has to get past those who do well out of the old way."],
tl:[[628,"Brahmagupta states rules for zero"],[825,"Al-Khwārizmī explains Indian numerals in Baghdad"],[876,"A zero is carved in an inscription at Gwalior"],[1202,"Fibonacci’s Liber Abaci"],[1299,"Florence bans the numerals from guild accounts"],[1500,"The numerals prevail in European commerce"]],
w:"“India invented zero” needs care. The Babylonians used a placeholder sign long before, and the Maya developed a zero independently. What Indian mathematicians did was treat zero as a number with its own arithmetic, and that is the step that mattered. Even Brahmagupta did not get everything right: he said that zero divided by zero is zero. Great ideas arrive unfinished.",
tool:["Follow the road","An idea does not spread because it is true. Trace who carried it, along which route, who gained, and who stood to lose. The delay is usually where the history is."],
d:["Why is it so hard to think of “nothing” as a thing?","What better idea today is being held back by people who are expert in the old way?","If the idea passed through India, Baghdad and Italy, who does it belong to?"],
y:"Multiply XLVII by XXIX using Roman numerals only. Then do 47 × 29. Time both.",
x:"Maths (place value, why division by zero is undefined), Economics (double-entry bookkeeping and trade), the history of science."},

{id:"his_print",s:"his",k:"Cause",t:"Did the printing press cause the Reformation?",
h:"One monk’s protest split Europe. An earlier one, just as bold, got its author burned.",
p:["In 1415 the Czech priest Jan Hus is burned at the stake. He had attacked the sale of indulgences and the wealth of the Church, and preached that the Bible should be read in the people’s own language. His ideas survive in Bohemia and go little further.",
"In 1517 a German monk, Martin Luther, makes many of the same criticisms in ninety-five theses. Within weeks they are being read across Germany; within months, across Europe. In three years some 300,000 copies of his writings are sold. The Church cannot contain it. Western Christianity splits, and more than a century of religious wars follows. Between Hus and Luther, around 1450, Johannes Gutenberg had begun printing with movable metal type."],
q:"Did the printing press cause the Reformation?",
o:[["Yes. Without it Luther would have ended like Hus","Strong evidence for you: towns with a press early on were more likely to turn Protestant. But was the press enough on its own?"],["No. The anger at the Church was the cause","The anger was real and old. Yet it had been there in 1415, and nothing spread."],["It was needed, but it was not enough","This is the distinction that settles most arguments about causes."]],a:null,
r:["By 1500 there were presses in about 250 European towns and some twenty million books had been printed. One study found that towns with a press by 1500 were much more likely to be Protestant a century later. Printing made a local quarrel impossible to contain, and it put the Bible, in German, into ordinary hands.",
"But the press was not sufficient. It needed grievances that were already widespread, German princes who had their own reasons for defying Rome and protected Luther, and a growing number of townspeople who could read."],
tl:[[1040,"Bi Sheng makes movable type from clay in China"],[1377,"A book is printed with metal type in Korea"],[1415,"Jan Hus is burned"],[1455,"The Gutenberg Bible"],[1517,"Luther’s ninety-five theses"],[1648,"The religious wars in Europe end"]],
w:"China had movable type four hundred years before Gutenberg, and Korea was printing with metal type by 1377. Neither had a Reformation. A script with thousands of characters made movable type less of an advantage there, and printing was largely in the hands of the state. The same invention, in a different society, had a different effect. A technology does not carry its consequences inside it.",
tool:["Necessary or sufficient?","When someone says A caused B, ask two things. Would B have happened without A? Does A always bring B? Most historical causes are needed, and not enough alone."],
d:["Does a new technology change what people think, or only spread what they already think?","What is today’s printing press, and who has lost control because of it?","If Luther had never lived, would someone else have done it?"],
y:"Take one big change in your lifetime. List three things without which it would not have happened, and decide whether any one of them was enough alone.",
x:"Political Science (the nation-state after 1648), Sociology (Weber on Protestantism and capitalism), Economics (how technology spreads)."},

{id:"his_plague",s:"his",k:"Consequence",t:"The plague that raised wages",
h:"The worst disaster in European history left the survivors better paid.",
p:["Between 1347 and 1351 a plague spreads along the trade routes from Asia into Europe. People call it the Great Pestilence; later ages name it the Black Death. In four years it kills somewhere between a third and a half of the population. Whole villages are left empty. Crops rot in the fields because there is nobody to bring them in.",
"Think now about a peasant who has survived. Before the plague there were too many hands and not enough land. Lords could set the terms. Now it is the other way round."],
q:"What happens to the survivors’ wages?",
o:[["They fall: the economy has collapsed","Trade did slump. But think about what had become scarce, and what had not."],["They rise: workers are scarce","Yes. Land was as plentiful as before and hands were few. Labourers could ask for more, and go elsewhere if refused."],["They stay the same: the law fixes them","The law tried exactly that, and failed."]],a:1,
r:["Wages rose sharply. In England the government reacted at once: a law of 1351 ordered that nobody be paid more than before the plague and forbade workers to leave their lords. It was widely ignored, because lords competed with one another for scarce labour. Over the next century English real wages roughly doubled.",
"When the authorities kept trying to hold wages down and added new taxes, the result was the Peasants’ Revolt of 1381. The revolt was crushed, but serfdom in England faded away over the following decades. Labourers ate more meat, and some bought land."],
tl:[[1347,"The plague reaches Sicily by ship"],[1348,"It reaches England; within a year wages begin to rise"],[1351,"The Statute of Labourers tries to freeze wages"],[1381,"The Peasants’ Revolt"],[1450,"Real wages stand about twice as high as before the plague"]],
w:"The same plague struck eastern Europe, and there the opposite happened. Lords in Poland, Prussia and Russia answered the shortage of labour by binding peasants to the land more tightly than before, and that serfdom lasted into the 19th century. The shock was the same and so was the shortage. What differed was who had the power to bargain, and whether there were towns to escape to. Supply and demand set the pressure. Power decided the outcome.",
tool:["The unintended consequence","Ask of any great event: what did it change that nobody intended? Then ask why the same event produced different results in different places."],
d:["Can a catastrophe be good for those who survive it? Is it right to say so?","Why can a law not simply set wages where a government wants them?","What does a shortage of workers do today, in a country with an ageing population?"],
y:"Look up how a recent shock (a pandemic, a war, a new technology) changed wages in one kind of work. Who gained and who lost?",
x:"Economics (demand and supply of labour, real wages), Political Science (revolt and rights), Sociology (class)."},

{id:"his_chilli",s:"his",k:"Journey",t:"Where the chilli came from",
h:"The most “traditional” ingredient in Indian food has been here for about five hundred years.",
p:["Picture an Indian kitchen in the year 1400. There are rice, lentils, ghee, turmeric, ginger, cumin, mustard seed, tamarind. Heat comes from black pepper and long pepper. There are no chillies. There are also no potatoes, no tomatoes, no maize, no cashews, no guavas and no papayas. None of these plants grows anywhere in Asia, Europe or Africa.",
"All of them come from the Americas. After Columbus crosses the Atlantic in 1492 and Vasco da Gama reaches Calicut in 1498, ships begin to connect continents that had been separate for thousands of years. The Portuguese bring the chilli to Goa in the 1500s. Within a few generations it is grown across India."],
q:"A dish of potatoes with tomatoes and chillies. Is it traditional Indian food?",
o:[["Yes. Five hundred years is tradition enough","Then tradition is something that gets made, and can be made again."],["No. Its main ingredients are foreign","Then what is? Tea reached Indian homes much later, and many “ancient” customs are younger still."],["“Traditional” means what feels as though it was always here","Probably the most honest account of how the word is used."]],a:null,
r:["The historian Alfred Crosby named this the Columbian Exchange. Plants, animals and diseases crossed the oceans in both directions and changed how most of the world eats. The potato alone is thought to explain a sizeable part of the growth of Europe’s population after 1700. Italian cooking got the tomato, West Africa got cassava, and China got the sweet potato.",
"Going the other way were horses, cattle, wheat and sugar cane. So were smallpox and measles, against which the peoples of the Americas had no defence. In many regions the population fell by as much as nine tenths within a century and a half. The exchange that filled the world’s kitchens emptied a continent."],
tl:[[1492,"Columbus reaches the Caribbean"],[1498,"Vasco da Gama reaches Calicut"],[1510,"The Portuguese take Goa"],[1600,"Chillies are grown widely in India"],[1972,"Alfred Crosby names the Columbian Exchange"]],
w:"Almost everything called timeless turns out to have a date. That does not make it fake. A tradition is real to the people who live by it, however old it is. But when someone argues “this is how it has always been”, a historian’s first move is to ask: since when? The answer is often “since our grandparents”, and sometimes “since a ship arrived”.",
tool:["Since when?","When something is defended as ancient or natural, ask for its date. Then ask who gains from its being thought older than it is."],
d:["If a tradition is only a few centuries old, does it lose any of its authority?","Europe gained the potato and the Americas lost most of their people. Can those be weighed on one scale?","What that feels permanent in your life arrived within your grandparents’ lifetime?"],
y:"Take last night’s dinner. For each main ingredient, find out which continent it first grew on and when it reached India.",
x:"Economics (trade and globalisation), Sociology (culture and tradition), Political Science (colonialism)."},

{id:"his_1857",s:"his",k:"Names",t:"One year, three names",
h:"Mutiny, revolt, or war of independence? The word you choose is already an argument.",
p:["On 10 May 1857, Indian soldiers of the East India Company’s army at Meerut turn on their officers and march to Delhi. There they proclaim the old Mughal emperor, Bahadur Shah Zafar, as their leader. Over the next months the fighting spreads across much of north and central India: Kanpur, Lucknow, Jhansi, Bihar. It takes the British more than a year to put it down, with great violence on both sides.",
"What should this be called? British writers of the time called it the Sepoy Mutiny. In 1909 V. D. Savarkar wrote a book titled The Indian War of Independence, 1857, which the British banned before it was even published. Many historians today say the Revolt, the Rebellion or the Uprising of 1857."],
q:"Which name is the most accurate?",
o:[["The Sepoy Mutiny","It did begin as a mutiny of soldiers. But the name keeps out the peasants, landholders and rulers who joined, and suggests nothing more than indiscipline."],["The First War of Independence","The name gives the rising dignity and a purpose. But large parts of India did not rise, and the rebels had no single idea of the nation they were fighting for."],["The Revolt of 1857","Wider than a mutiny, and it claims less than a war for a nation. Notice that choosing the careful word is a choice too."]],a:null,
r:["Each name selects some facts and leaves out others. “Mutiny” fits the start and suited an empire that wanted the rising to look like a breach of military discipline. “War of Independence” suited a national movement, fifty years later, that needed a founding struggle. The historian R. C. Majumdar argued that it was not the first, not national and not a war of independence. Others answer that people fighting foreign rule do not need a modern idea of the nation to be resisting it.",
"What nobody disputes is the result. In 1858 the East India Company was abolished and India was placed directly under the British Crown. The army was reorganised so that it could not happen again."],
tl:[[1857,"Soldiers rise at Meerut and take Delhi"],[1858,"The rising is crushed; Company rule ends and Crown rule begins"],[1909,"Savarkar’s book names it a war of independence"],[1957,"The centenary is marked in independent India"]],
w:"The rebels did not agree among themselves. Some fought to restore the Mughal emperor, some for the Peshwa, some for their own lost lands, some against the threat to their religion from the greased cartridge. Most of the south, Bengal and Punjab stayed quiet, and Sikh and Gurkha regiments fought on the British side. A single name suggests a single event with a single aim. It was many risings, joined for a year.",
tool:["Who named it?","The name of an event is an interpretation that has hardened. Ask who chose it, when, and what it lets you see and stops you seeing. Then try the event under a different name."],
d:["Can people fight for a nation before the idea of that nation exists?","Is there such a thing as a neutral name for a contested event?","Which events in today’s news go by two names, depending on who is speaking?"],
y:"Find one event that two sides call by different names. Write one sentence about it using each name, and see how the sentence changes.",
x:"Political Science (nationalism, what makes a nation), Sociology (collective memory), Philosophy (the thing behind the word)."},

{id:"his_famine",s:"his",k:"Cause",t:"The famine in a year of rice",
h:"Three million people died in Bengal in 1943. The puzzle is how much rice there was.",
p:["Bengal, 1943. The Second World War is at India’s eastern border: Japan has taken Burma. People are dying of hunger in the villages and walking to Calcutta to die on its pavements. By the time it is over, between two and three million are dead. The obvious explanation is that there was not enough food.",
"Forty years later the economist Amartya Sen, who had seen the famine as a nine-year-old child in Bengal, went back to the figures. By his reckoning, more food was available in Bengal in 1943 than in 1941, and in 1941 there had been no famine."],
q:"If there was no great shortage of rice, why did millions starve?",
o:[["There must have been a shortage; the figures are wrong","Some historians argue exactly this. Hold on to it for the doubt below."],["Traders hoarded the rice","Hoarding and speculation did happen and made things worse. But why did prices give them the chance?"],["People could not afford the rice that was there","This is Sen’s answer: people starve when they lose the means to obtain food, even if food exists."]],a:null,
r:["Sen’s argument: the war economy pushed up prices. The army and the war industries bought grain, and the government printed money to pay for the war. In Calcutta, wages rose with prices. In the countryside, the earnings of landless labourers, fishermen and craftsmen did not. Rice was in the market at a price they could no longer pay.",
"Policy made it worse. Imports of rice from Burma had stopped. To deny supplies to a possible invader, the authorities removed boats and rice stocks from the coastal districts, which wrecked fishing and local trade. Provinces barred the movement of grain. Requests for relief shipments were turned down in London. Sen later made a wider claim: no major famine has occurred in a functioning democracy with a free press, because a government that must face voters and newspapers cannot ignore one."],
tl:[[1942,"Burma falls to Japan; a cyclone strikes coastal Bengal in October"],[1943,"Famine across Bengal"],[1944,"Deaths from disease continue after the harvest"],[1981,"Amartya Sen publishes Poverty and Famines"],[1998,"Sen is awarded the Nobel prize in economics"]],
w:"Sen’s figures have been challenged. Some scholars argue that the cyclone of October 1942 and a crop disease that followed destroyed far more of the harvest than the official statistics recorded, so there was a real shortage as well. The debate is still alive. Both sides agree on one thing: nothing in the weather made three million deaths unavoidable. The famine followed from decisions.",
tool:["Who could not afford it?","When there is a shortage, do not stop at how much there was. Ask who had the means to get it, and who had lost them. Scarcity is rarely shared equally."],
d:["If food existed and people starved, who or what is responsible?","Why would a free press and elections make a famine less likely? Is that enough to prevent hunger?","Where today is there enough of something for everyone, and people still go without?"],
y:"Find the price of one basic food today and a year ago. Work out what share of a daily wage it takes at each date for someone earning the minimum wage.",
x:"Economics (entitlements, inflation, poverty), Political Science (democracy, accountability), Sociology (who is vulnerable)."},

{id:"his_diverge",s:"his",k:"Comparison",t:"Why did the factories start there?",
h:"In 1750 India and China made over half the world’s manufactured goods. By 1900 they made almost none.",
p:["Go back to 1750. By one widely used estimate, India produces about a quarter of the world’s manufactured goods and China about a third. Britain produces under 2%. Indian cotton cloth is the best in the world; Bengal’s muslins and the calicoes of the Coromandel coast sell from Japan to West Africa. English wool-makers are so alarmed that Parliament bans printed Indian cottons in 1700 and again in 1721.",
"Now go forward to 1900. Britain alone produces nearly a fifth of the world’s manufactures. India’s share has fallen below 2%. In a century and a half the workshop of the world has moved to a small, damp island off Europe."],
q:"Why did industry take off in Britain and not in India or China?",
o:[["Britain had coal, and high wages that made machines worth building","The argument of historians such as Robert Allen: where labour is dear and fuel is cheap, a machine pays for itself."],["Britain had better institutions: secure property, parliament, patents","The argument of many economists. But those institutions also existed in places that did not industrialise first."],["Britain had an empire: colonies, the slave trade, captive markets","The argument that the wealth and the raw cotton came from elsewhere, and that rivals were held down by force and tariffs."]],a:null,
r:["Historians have not agreed, and each answer has evidence behind it. Kenneth Pomeranz showed that the richest part of China was about as prosperous as England until around 1800, and argued that two strokes of fortune made the difference: coal lying near England’s industries, and the land and resources of the Americas. Others stress a culture of tinkering and applied science, or the state’s readiness to protect its own makers. The same Britain that later preached free trade had sheltered its young textile industry from Indian cloth for a century.",
"For India the outcome was severe. Machine-made cloth from Lancashire undersold the handloom weaver, British India was not free to put up tariffs of its own, and regions that had exported cloth came to export raw cotton instead."],
v:{c:"Share of world manufacturing output (estimates)",b:[["India, 1750",25],["Britain, 1750",2],["India, 1900",2],["Britain, 1900",19]]},
w:"The question itself may be tilted. Asking why India and China “failed” to industrialise treats Britain’s path as the normal one and everyone else’s as the thing to be explained. Comparison needs care: India in 1750 was not a single economy, and estimates from that period are rough. And a single cause is unlikely. Coal without markets, or markets without coal, might have produced nothing.",
tool:["Compare the cases","To test a cause, find a place that had it and see whether the result followed, and a place that lacked it and see whether the result was missing. One case can prove almost anything."],
d:["Was the Industrial Revolution a British achievement, a piece of geographical luck or a result of empire?","Would India have industrialised on its own if it had not been colonised? What evidence would bear on that?","Britain protected its industries while it was weak and preached free trade once it was strong. What does that suggest for countries today?"],
y:"Pick two countries that were similar in 1950 and are very different now. List three differences that might explain it, and for each, look for a third country that tests it.",
x:"Economics (growth, tariffs, free trade, development), Political Science (colonialism), Sociology (industrial society)."},

{id:"his_time",s:"his",k:"Invention",t:"Who decided what time it is?",
h:"Until the railways, every town kept its own time. Bombay and Calcutta were more than an hour apart.",
p:["In 1830 nobody would have understood the question “what time is it in India?”. Each town set its clocks by the sun overhead. When it was noon in Calcutta it was not yet eleven in Bombay. This troubled nobody, because nothing moved faster than a horse.",
"Then came the railway and the telegraph. A train timetable is impossible if every station keeps a different time, and two trains on one track with clocks that disagree are a collision. In Britain the railway companies began running on London time in the 1840s, and towns followed whether they liked it or not. In 1884 delegates from twenty-five countries met in Washington to choose a single line from which the whole world would count."],
q:"Standard time made life far more convenient. How was it received?",
o:[["Gladly. Everyone could see the benefit","Travellers and traders could. Many others saw outsiders telling them when noon was."],["With resistance, for decades","Yes. Cities kept their own time long after the law changed."],["Nobody noticed","People noticed. Some towns ran public clocks with two minute hands, one for local time and one for railway time."]],a:1,
r:["The conference chose the line through Greenwich, near London, largely because most of the world’s shipping already used British charts. France abstained and kept Paris time until 1911. In India a single standard time, five and a half hours ahead of Greenwich, was introduced in 1906. Calcutta went on keeping its own time until 1948, and Bombay until 1955. In Bombay the question became a matter of civic pride and of politics.",
"Hours, time zones, the week and the calendar feel like facts of nature. They are agreements, made by particular people at particular dates, usually because a new technology made the old arrangement unworkable, and usually on terms that favoured whoever was strongest at the time."],
tl:[[1840,"A British railway adopts London time for all its stations"],[1884,"The Washington conference chooses Greenwich"],[1906,"Indian Standard Time is introduced"],[1911,"France gives up Paris time"],[1948,"Calcutta gives up its own time"],[1955,"Bombay gives up its own time"]],
w:"The agreement is still argued over. India stretches nearly 3,000 km from west to east and keeps one time, so the sun rises almost two hours earlier in the far north-east than in Gujarat. Tea gardens in Assam have long run their own informal “garden time”, an hour ahead. A single time helps the railways and the nation’s sense of itself. It costs people in the east their daylight. Every standard is convenient for someone and awkward for someone else.",
tool:["What had to be invented?","When something seems natural and permanent, ask whether it was once decided. If it was, find out by whom, when, and what it replaced. What was decided can be decided again."],
d:["Is the time on your phone a fact, or an agreement?","Should India have two time zones? Who gains and who loses from one?","What else do you treat as natural that was decided in a meeting?"],
y:"Find today’s sunrise time for a town in Gujarat and one in Arunachal Pradesh. Work out what the clock time of sunrise would be in each if clocks followed the sun.",
x:"Political Science (who sets standards; federalism), Economics (coordination and networks), geography (longitude)."}
]);
/* one video per question: [YouTube id, title as listed on YouTube]. Shown only after the first answer, so a film never gives the result away. */
var TQY={psy_gorilla:["vJG698U2Mvo","selective attention test"],psy_asch:["NyDDyT1lDhA","Asch Conformity Experiment"],psy_milgram:["vuMt8b4UrcI","The Milgram Experiment: Obedience to Authority"],psy_marsh:["QX_oy9614HQ","The Marshmallow Test"],psy_loftus:["PB2OegI6wvI","How reliable is your memory? (Elizabeth Loftus, TED)"],psy_bat:["Xz8s4qYaP7Q","Daniel Kahneman: The Bat and Ball Puzzle"],psy_dissonance:["tHKj5lzqxBI","Cognitive Dissonance Theory: Telling a Lie for Twenty Dollars"],psy_pygmalion:["4aN5TbGW5JA","The Pygmalion Effect"],psy_flow:["fXIeFJCqsPs","Mihaly Csikszentmihalyi: Flow, the secret to happiness (TED)"],psy_spotlight:["FmU4wDKUiQo","The Spotlight Effect: Why Nobody Is Actually Watching You"],
phi_ship:["UHwVyplU3Pg","Who am I? A philosophical inquiry (TED-Ed)"],phi_chariot:["s-hPa6-xXrw","Nagasena and the Chariot"],phi_trolley:["yg16u_bzjPE","Would you sacrifice one person to save five? (TED-Ed)"],phi_cave:["1RWOpQXTltA","Plato’s Allegory of the Cave (TED-Ed)"],phi_machine:["0FF4_7IULoo","The Experience Machine by Robert Nozick"],phi_veil:["A8GDEaJtbq4","The Veil Of Ignorance"],phi_room:["TryOC83PH1g","The Chinese Room: 60-Second Adventures in Thought"],phi_gyges:["TfVmW6sNux8","Plato’s allegory of the ring (TED-Ed)"],phi_induction:["9_Gor1E8IxI","David Hume and the Problem of Induction"],phi_know:["5wCVhhzmSlU","Epistemology: Analyzing Knowledge (The Gettier Problem)"],
his_indus:["n7ndRwqJYDM","Indus Valley Civilization: Crash Course World History #2"],his_ashoka:["8Nn5uqE3C9w","Buddha and Ashoka: Crash Course World History #6"],his_zero:["9Y7gAzTMdMA","What is Zero? Getting Something from Nothing, with Hannah Fry"],his_print:["1o8oIELbNxE","Luther and the Protestant Reformation: Crash Course World History #218"],his_plague:["ySClB6-OH-Q","The past, present, and future of the bubonic plague (TED-Ed)"],his_chilli:["HQPA5oNpfM4","The Columbian Exchange: Crash Course World History #23"],his_1857:["EHRE4egjqzs","The Revolt of 1857 Animated Explainer"],his_famine:["9hH0DTy77FE","The Bengal Famine of 1943"],his_diverge:["zhL5DCizj5c","Coal, Steam, and The Industrial Revolution: Crash Course World History #32"],his_time:["qP4hE8X9gNk","The Day America Had Two Noons: How Railways Invented Time Zones"]};
/* ---------- engine ---------- */
(function(){
var SUB={his:{n:'History',v:'sj_his',ic:'🧭',c:'c4',lead:'Not for any exam. Ten questions historians still argue about. Take a view, see the evidence, meet the doubt, and keep the tool each one teaches for reading the past.',rv:'What historians found'},
 psy:{n:'Psychology',v:'sj_psy',ic:'🧠',c:'c2',lead:'Not for any exam. Ten famous studies of how people see, remember, obey and decide. Guess first. Then see what happened, and where the result is doubted.',rv:'What happened'},
 phi:{n:'Philosophy',v:'sj_phi',ic:'💭',c:'c5',lead:'Not for any exam. Ten old puzzles with no agreed answer. Take a side, meet the strongest reply to it, and argue it out.',rv:'How it has been answered'}};
window.TQN={his:'History',psy:'Psychology',phi:'Philosophy'};
var TQV={open:null,chat:{},busy:false,hm:'q',free:{}};window.TQV=TQV;
function st(){if(!S.tq)S.tq={};if(!S.tq.d)S.tq.d={};return S.tq}
function got(id){return st().d[id]}
function item(id){return TQD.filter(function(x){return x.id===id})[0]}
function list(s){return TQD.filter(function(x){return x.s===s})}
function nDone(s){return list(s).filter(function(x){return got(x.id)}).length}
function yr(y){return y<0?(-y)+' BCE':String(y)}

/* ---------- navigation: the three thinking subjects sit together at the end of Other subjects ---------- */
GRP.subj=GRP.subj.filter(function(t){return['sj_his','sj_psy','sj_phi'].indexOf(t[0])<0}).concat([['sj_his','History'],['sj_psy','Psychology'],['sj_phi','Philosophy']]);
SECN.sj_psy='Psychology';SECN.sj_phi='Philosophy';
var _vt=viewTop;viewTop=function(v){_vt(v);if(v==='sj_his'||v==='sj_psy'||v==='sj_phi'){TQV.open=null;if(v==='sj_his')TQV.hm='q'}};
var _sj=sjView;sjView=function(id){if(id==='psy'||id==='phi')return tqView(id);return _sj(id)};
/* History opens on the big questions; the story timeline is the second tab, and anything that links to a story still lands on it */
var _his=hisView;hisView=function(){if(HV.c&&hisCh(HV.c))return _his();if(TQV.open&&item(TQV.open)&&item(TQV.open).s==='his')return tqOne(item(TQV.open));
  if(TQV.hm==='story'){_his();var z=app.querySelector('.hz');if(z){var h1=z.querySelector('h1');if(h1)h1.insertAdjacentHTML('afterend',hisSeg());var sb=z.querySelector('p.sub');if(sb)sb.textContent='The story from 1790 to 1995, told one chapter at a time, with India and the world on one time scale. Read it for the background behind Political Science, Economics and Sociology.'}return}
  tqList('his')};
var _ho=hisOpen;hisOpen=function(id){TQV.open=null;TQV.hm='story';_ho(id)};
function hisSeg(){return'<div class="seg" role="tablist" aria-label="History sections">'+[['q','Big questions'],['story','Story timeline']].map(function(t){return'<button role="tab" aria-selected="'+(TQV.hm===t[0])+'" onclick="tqHm(\''+t[0]+'\')">'+t[1]+'</button>'}).join('')+'</div>'}
window.tqHm=function(m){TQV.hm=m;TQV.open=null;HV.c=null;render();window.scrollTo(0,0)};
function tqView(s){var it=TQV.open&&item(TQV.open);if(it&&it.s===s)return tqOne(it);TQV.open=null;tqList(s)}
window.tqOpen=function(id){var it=item(id);if(!it)return;TQV.open=id;HV.c=null;TQV.hm='q';if(view!==SUB[it.s].v)goView(SUB[it.s].v);else render();window.scrollTo(0,0)};
window.tqBack=function(){TQV.open=null;render();window.scrollTo(0,0)};

/* ---------- list ---------- */
function phiCheck(){
  var F=[['Argument map','One question: your position, the strongest objection, your reply.','Help me build an argument map on a question I choose: my position, the strongest objection to it, and my reply. Ask me for each part in turn and do not write them for me.'],
    ['Steelman','Make the best case for a view you disagree with.','I want to steelman a view I disagree with. Ask which view that is, then help me build its best case in my own words, and push back where it is weak.'],
    ['Dialogue','Two thinkers from different traditions argue it out.','Help me write a short dialogue between two thinkers from different traditions, for example Charvaka and Nyaya, or Buddha and Sartre. Ask which two and which question, let me write the lines, and object where a thinker would.'],
    ['Viva','A 10-minute talk on a question you have not seen.','Hold a short viva with me. Ask me one question I have not seen, on any big question about knowledge, the self, justice or the good life, then probe my answer with one follow-up at a time. At the end tell me in two lines where my reasoning was strongest and where it was thinnest.']];
  var Q=['If there is no afterlife, does morality matter more or less?','Can a society be democratic while its members remain deeply unequal?','When does patriotism begin to conflict with humanity?','Is there a permanent self, or is identity made by relationships and choices?'];
  var C=[['Clear claim','a position stated plainly, key terms defined'],['Sound reasoning','premises that really support the conclusion'],['Faces objections','takes the strongest counter-argument seriously'],['Cross-tradition','draws on two or more traditions and compares them fairly'],['Honest thinking','admits limits and is willing to change its mind']];
  var h='<div class="card tqkit"><b>Show your thinking</b><p class="sub" style="margin:2px 0 8px">No written exam and no right answer to memorise. Thinking here is checked in four open-book ways. Pick one to practise with Claude below.</p><div class="tqtools">'+
    F.map(function(f,i){return'<button class="tqtool on" title="'+esc(f[1])+'" onclick="phiGo('+i+')">'+esc(f[0])+'</button>'}).join('')+'</div>'+
    '<ul class="sub" style="margin:8px 0 0;padding-left:18px">'+F.map(function(f){return'<li><b>'+esc(f[0])+'.</b> '+esc(f[1])+'</li>'}).join('')+'</ul>'+
    '<p class="sub" style="margin:10px 0 4px"><b>What is looked for</b>. Each piece gets feedback and a level for each point: Emerging, Developing, Secure or Original. No marks and no ranking.</p>'+
    '<ul class="sub" style="margin:0;padding-left:18px">'+C.map(function(c){return'<li><b>'+esc(c[0])+'</b>: '+esc(c[1])+'</li>'}).join('')+'</ul>'+
    '<p class="sub" style="margin:10px 0 4px"><b>Try a viva question</b></p><div class="tqtools">'+Q.map(function(q,i){return'<button class="tqtool on" style="text-align:left" onclick="phiQ('+i+')">'+esc(q)+'</button>'}).join('')+'</div></div>';
  window._phiF=F;window._phiQ=Q;return h}
window.phiGo=function(i){var f=window._phiF&&window._phiF[i];if(!f||TQV.busy)return;send('free_phi',f[2],false);var c=document.getElementById('tqChat');if(c)c.scrollIntoView({behavior:'smooth',block:'center'})};
window.phiQ=function(i){var q=window._phiQ&&window._phiQ[i];if(!q||TQV.busy)return;send('free_phi',q,true);var c=document.getElementById('tqChat');if(c)c.scrollIntoView({behavior:'smooth',block:'center'})};
function tqList(s){var M=SUB[s],L=list(s),n=nDone(s);
  var h='<div class="tq tq-'+s+'"><h1>'+M.n+'</h1>'+(s==='his'?hisSeg():'')+'<p class="sub">'+M.lead+'</p>';
  h+='<div class="hprog"><div class="bar"><i style="width:'+Math.round(n/L.length*100)+'%"></i></div><span>'+n+' of '+L.length+' explored</span></div>';
  h+='<div class="card tqkit"><b>Your thinking toolkit</b><p class="sub" style="margin:2px 0 8px">Each question leaves you with one tool you can use anywhere. '+(n?n+' collected here.':'Explore one to collect the first.')+'</p><div class="tqtools">'+L.map(function(x){return got(x.id)?'<button class="tqtool on" onclick="tqOpen(\''+x.id+'\')">'+esc(x.tool[0])+'</button>':'<span class="tqtool" aria-label="Not collected yet">?</span>'}).join('')+'</div></div>';
  h+='<div class="card tqlist">';
  L.forEach(function(x,i){var d=got(x.id);h+='<button class="trow" onclick="tqOpen(\''+x.id+'\')"><span class="tn'+(d?' tqd':'')+'">'+(d?'✓':(i+1))+'</span><span class="tt"><b>'+esc(x.t)+'</b><small>'+esc(x.h)+'</small></span><span class="pill">'+esc(x.k)+'</span></button>'});
  h+='</div>';
  if(s==='phi')h+=phiCheck();
  h+='<div class="card"><b>A question of your own</b><p class="sub" style="margin:2px 0 6px">Anything in '+M.n.toLowerCase()+' you have wondered about. Claude will not hand you an answer: it will ask what you think, and push back.</p>'+
    '<form class="ask" onsubmit="event.preventDefault();tqSay(\'free_'+s+'\')"><input id="tqIn" placeholder="Ask or claim something" autocomplete="off" aria-label="Your question"><button class="chipb" type="submit">Start</button></form><div id="tqChat">'+chatHtml('free_'+s)+'</div></div></div>';
  app.innerHTML=h}

/* ---------- one exploration ---------- */
function bars(v){var mx=Math.max.apply(null,v.b.map(function(b){return b[1]}))||1;
  return'<div class="tqbars" role="img" aria-label="'+esc(v.c+': '+v.b.map(function(b,i){return b[0]+' '+(v.u?v.u[i]:b[1]+'%')}).join(', '))+'"><div class="tqbc">'+esc(v.c)+'</div>'+v.b.map(function(b,i){return'<div class="tqbar"><span>'+esc(b[0])+'</span><div><i style="width:'+Math.max(1.5,b[1]/Math.max(mx,v.u?mx:100)*100)+'%"></i></div><em>'+esc(v.u?v.u[i]:b[1]+'%')+'</em></div>'}).join('')+'</div>'}
function tqOne(x){var M=SUB[x.s],d=got(x.id),pk=d?d.p:null,L=list(x.s),i=L.indexOf(x),nx=L[i+1],pv=L[i-1];
  var pm=x.a!=null&&!x.keep?optPm('tq:'+x.id,x.o.map(function(o){return o[0]})):x.o.map(function(_,k){return k});
  var h='<div class="tq tq-'+x.s+'"><p class="back"><button class="link" onclick="tqBack()">← '+M.n+'</button></p>';
  h+='<article class="hstory tqstory"><div class="eyebrow">'+M.n+' · '+esc(x.k)+'</div><h1>'+esc(x.t)+'</h1><p class="hhook">'+esc(x.h)+'</p><div class="hbody">'+x.p.map(function(p){return'<p>'+esc(p)+'</p>'}).join('')+'</div></article>';
  h+='<div class="card hi tqq"><div class="eyebrow">'+(pk==null?'Before you read on':'Your first answer')+'</div><div class="q">'+esc(x.q)+'</div>';
  pm.forEach(function(k){var cl='';if(pk!=null){if(x.a!=null){if(k===x.a)cl=' ok';else if(k===pk)cl=' bad'}else if(k===pk)cl=' tqpick'}
    h+='<button class="opt'+cl+'" onclick="tqPick(\''+x.id+'\','+k+')"'+(pk!=null?' disabled':'')+'>'+esc(x.o[k][0])+'</button>'});
  if(pk==null){h+='<p class="sub" style="margin:8px 0 0">'+(x.a!=null?'Commit to a guess. The rest opens once you do.':'There is no marked answer here. Pick the one you would defend. The rest opens once you do.')+'</p></div></div>';app.innerHTML=h;return}
  h+='<div class="fb '+(x.a==null?'mid':pk===x.a?'ok':'bad')+'">'+esc(x.o[pk][1])+'</div></div>';
  h+='<div class="card"><h2>'+M.rv+'</h2>'+x.r.map(function(p){return'<p class="tqp">'+esc(p)+'</p>'}).join('')+(x.v?bars(x.v):'')+'</div>';
  if(x.tl)h+='<div class="card"><h2>On the time scale</h2><ol class="htl">'+x.tl.map(function(e){return'<li><b>'+yr(e[0])+'</b><span>'+esc(e[1])+'</span></li>'}).join('')+'</ol></div>';
  h+='<div class="card tqdoubt"><h2>But wait</h2><p class="tqp">'+esc(x.w)+'</p></div>';
  h+='<div class="card tqtoolc"><div class="eyebrow">Thinking tool · added to your toolkit</div><b class="tqtn">'+esc(x.tool[0])+'</b><p class="tqp">'+esc(x.tool[1])+'</p></div>';
  h+='<div class="card"><h2>Think further</h2><p class="sub" style="margin:0 0 6px">Tap one to argue it out with Claude below.</p>'+x.d.map(function(q,k){return'<button class="tqdq" onclick="tqDeep(\''+x.id+'\','+k+')"><span>'+(k+1)+'</span>'+esc(q)+'</button>'}).join('')+'</div>';
  h+='<div class="card hask" id="tqTalk"><h2>Argue it out with Claude</h2><p class="sub" style="margin:0 0 6px">Say what you think and why. Claude takes the other side.</p><div id="tqChat">'+chatHtml(x.id)+'</div>'+
    '<form class="ask" onsubmit="event.preventDefault();tqSay(\''+x.id+'\')"><input id="tqIn" placeholder="I think…" autocomplete="off" aria-label="Your view"><button class="chipb" type="submit">Send</button></form></div>';
  var yv=TQY[x.id];h+='<div class="card tqwatch"><h2>Watch</h2>'+(yv?'<a class="tqyt" href="https://www.youtube.com/watch?v='+yv[0]+'" target="_blank" rel="noopener"><span class="tqplay" aria-hidden="true">▶</span><span><b>'+esc(yv[1])+'</b><small>Opens on YouTube</small></span></a>':'')+'<p class="tqx" style="margin-top:8px"><a href="https://www.youtube.com/results?search_query='+encodeURIComponent(x.t+' '+SUB[x.s].n.toLowerCase())+'" target="_blank" rel="noopener">More videos on this ↗</a>. Watch with the same doubt you would bring to any source: who made it, and what does it leave out?</p></div>';
  h+='<div class="card"><h2>Try it</h2><p class="tqp">'+esc(x.y)+'</p><p class="tqx"><b>Where this connects:</b> '+esc(x.x)+'</p></div>';
  h+='<div class="row2"><button class="btn alt" onclick="tqNote(\''+x.id+'\')">Save an insight to Notes</button><button class="btn alt" onclick="tqRedo(\''+x.id+'\')">Change my first answer</button></div>';
  h+='<div class="row2">'+(pv?'<button class="btn alt" onclick="tqOpen(\''+pv.id+'\')">← '+esc(pv.t)+'</button>':'<span></span>')+(nx?'<button class="btn alt" onclick="tqOpen(\''+nx.id+'\')">'+esc(nx.t)+' →</button>':'<span></span>')+'</div></div>';
  app.innerHTML=h}
window.tqPick=function(id,k){var x=item(id);if(!x||got(id))return;st().d[id]={p:k,ts:Date.now()};
  try{S.ev.push({k:'tq',topic:SUB[x.s].n+' · '+x.t,ok:true,habit:'',type:'big question',ts:Date.now()})}catch(e){}
  save();var y=window.scrollY;render();window.scrollTo(0,y);showToast('Thinking tool collected: '+x.tool[0])};
window.tqRedo=function(id){if(!got(id))return;delete st().d[id];save();render();window.scrollTo(0,0)};
window.tqNote=function(id){var x=item(id);if(!x)return;if(window.ROLE==='tutor'){showToast('Notes belong to the student. Switch to Student to add one.');return}
  ntNew('text','insight',{sj:SUB[x.s].n,ch:x.t.slice(0,60),src:SUB[x.s].n+' · '+x.t})};

/* ---------- arguing it out, inside the app ---------- */
function chatHtml(id){var L=TQV.chat[id]||[];return L.map(function(m){return m.me?'<div class="cmsg tqme"><div class="ctext">'+esc(m.t)+'</div></div>':'<div class="cmsg exp"><div class="ctext">'+(m.t==null?'<span class="muted">Claude is thinking…</span>':esc(m.t))+'</div></div>'}).join('')}
function redraw(id){var o=document.getElementById('tqChat');if(o){o.innerHTML=chatHtml(id);if(o.lastChild)o.lastChild.scrollIntoView({block:'nearest'})}}
window.tqDeep=function(id,k){var x=item(id);if(!x||TQV.busy)return;send(id,x.d[k],true)};
window.tqSay=function(id){var i=document.getElementById('tqIn');if(!i)return;var t=i.value.trim();if(!t||TQV.busy)return;i.value='';send(id,t,false)};
async function send(id,text,asQ){var L=TQV.chat[id]=TQV.chat[id]||[];L.push({me:1,t:text});var rep={me:0,t:null};L.push(rep);TQV.busy=true;redraw(id);
  var free=id.indexOf('free_')===0,x=free?null:item(id),sub=free?id.slice(5):x.s,d=x&&got(x.id);
  try{var s=await getS();if(!s)throw new Error('none');
    var hist=L.slice(0,-2).slice(-8).map(function(m){return(m.me?'STUDENT: ':'YOU: ')+m.t}).join('\n');
    var p='You are a Socratic thinking partner for a senior-school student who is exploring '+SUB[sub].n.toLowerCase()+' out of curiosity. This is not exam coaching: never mention marks, exams, syllabuses or answer-writing. Your job is to make the student think harder. Take their view seriously, then give the strongest objection to it. If they have given no view yet, ask what they think and why before saying much. Bring in one concrete case, fact or thinker when it helps, keep facts accurate, and say plainly when scholars disagree or a finding is disputed. Do not flatter and do not lecture. Never settle an open question for them. Plain text only, no markdown, at most 110 words, and end with exactly one question that moves the argument forward. Use neutral wording for the student and never assume their gender, class or school.\n'+
      (x?'TOPIC: '+x.t+'. '+x.p.join(' ')+'\nQUESTION PUT TO THE STUDENT: '+x.q+'\nSTUDENT’S FIRST ANSWER: '+(d?x.o[d.p][0]:'(not given)')+'\nALREADY SHOWN IN THE APP: '+x.r.join(' ')+' '+x.w+'\nTHINKING TOOL TAUGHT: '+x.tool[0]+': '+x.tool[1]:'SUBJECT: '+SUB[sub].n+' (an open question raised by the student)')+
      '\nCONVERSATION SO FAR:\n'+(hist||'(none)')+'\n'+(asQ?'THE STUDENT CHOSE THIS QUESTION TO THINK ABOUT (they have not answered it yet, so open it up and ask for their view): ':'STUDENT NOW SAYS: ')+text+'\nReturn JSON only: {"reply": "your reply"}';
    var r=await s.json(p,{cache:false,modelTier:'default'});rep.t=String(r&&r.reply||'Claude had nothing to add just now. Try putting it another way.')}
  catch(e){rep.t=e&&e.code?sampleErr(e):'Claude could not reply just now. Try again in a moment.'}
  TQV.busy=false;if(TQV.open===id||(free&&!TQV.open&&view===SUB[sub].v))redraw(id)}

/* Ask and the quick-note button know these screens */
var _cx=ctxNow;ctxNow=function(){try{var s=view==='sj_psy'?'psy':view==='sj_phi'?'phi':view==='sj_his'&&!HV.c&&TQV.hm==='q'?'his':null;
  if(s){var x=TQV.open&&item(TQV.open);if(x&&x.s===s){var d=got(x.id);return[SUB[s].n+' · '+x.t,'Section: '+SUB[s].n+' (thinking for its own sake, not exam work)\nTopic: '+x.t+'\n'+x.p.join(' ')+'\nQuestion: '+x.q+'\n'+(d?'My first answer: '+x.o[d.p][0]+'\nThinking tool: '+x.tool[0]+': '+x.tool[1]+'\n':'I have not answered yet, so please do not tell me what the study found or what philosophers concluded. Ask me what I think.\n')]}
    return[SUB[s].n,'Section: '+SUB[s].n+' (big questions, thinking for its own sake, not exam work)\nTopics: '+list(s).map(function(q){return q.t}).join('; ')+'\n']}}catch(e){}return _cx()};

/* Today: one big question a day, from whichever has not been explored yet */
function todayCard(){if(view!=='today'||app.querySelector('.tqday'))return;var open=TQD.filter(function(x){return!got(x.id)});if(!open.length)return;
  var dn=Math.floor((Date.now()+19800000)/864e5),x=open[dn%open.length],cs=app.querySelectorAll('.card'),after=null;
  for(var i=0;i<cs.length;i++){var b=cs[i].querySelector('b');if(b&&b.textContent==='Quick picks')after=cs[i]}
  if(!after)return;var c=document.createElement('div');c.className='card tqday tq-'+x.s;
  c.innerHTML='<div class="eyebrow">Think deeper · '+SUB[x.s].n+' · no marks</div><b class="tqtn">'+esc(x.t)+'</b><p class="sub" style="margin:2px 0 8px">'+esc(x.h)+'</p><button class="btn alt" style="text-align:center" onclick="tqOpen(\''+x.id+'\')">Open this question</button>';
  after.insertAdjacentElement('afterend',c)}
var _r=render;render=function(){_r();try{todayCard()}catch(e){}};
try{render()}catch(e){}
})();
/*THINK-END*/
