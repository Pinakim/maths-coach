
/*SPLUS-START*/
/*SPLUS: a Concept lab on the Economics, Political Science and Sociology screens. Concept first, exam question at the end.
  Built in: Spot the difference, Chain reaction, You decide, Thinkers argue (economics, political science), Play with it (economics).
  With Claude: Answer ladder, Teach it back, Headline to chapter. */
(function(){
function stu(){return window.ROLE==='student'||window.ROLE==='guest'}
function LS(){S.lab=S.lab||{};S.lab.d=S.lab.d||{};S.lab.al=S.lab.al||{};return S.lab}
function nm(sid){return sjSub(sid).n}
function mark(key,sid,kind){var l=LS();if(!key||!l.d[key]){if(key)l.d[key]=Date.now();S.ev.push({k:'lab',topic:nm(sid),ok:true,habit:'',type:kind,ts:Date.now()})}save()}

/* ---------- content ---------- */
/* spot the difference: [A, B, the key difference, [[statement, 0 for A or 1 for B] x4]] */
var SDD={eco:[
 ['Microeconomics','Macroeconomics','Micro studies individual units such as one consumer, one firm or one market. Macro studies the economy as a whole through aggregates.',[['The price of onions in one market',0],['The national income of India',1],['The general price level',1],['How a single firm decides its output',0]]],
 ['Economic growth','Economic development','Growth is a sustained rise in real national income, so it is about quantity. Development is growth plus better health, education and equality, so it is about quality of life too.',[['Measured mainly by the rise in real GDP',0],['Looks at literacy, life expectancy and inequality',1],['Can happen even when poverty does not fall',0],['The wider idea, which includes the other one',1]]],
 ['Positive economics','Normative economics','Positive statements describe what is and can be tested against facts. Normative statements say what ought to be and rest on value judgements.',[['A rise in price usually reduces the quantity bought',0],['The government should tax the rich more',1],['Unemployment rose last year',0],['Poverty ought to be removed before anything else',1]]],
 ['Capitalist economy','Socialist economy','Under capitalism the means of production are privately owned and prices decide what is made. Under socialism the state owns them and a central plan decides.',[['The profit motive drives production',0],['A central planning authority sets the targets',1],['Consumer demand guides what is produced',0],['Social welfare is the main aim of production',1]]],
 ['Absolute poverty','Relative poverty','Absolute poverty means living below a fixed minimum, the poverty line. Relative poverty compares one group’s income with another’s, so it is really about inequality.',[['Measured with a poverty line based on minimum consumption',0],['Exists even in rich countries, because incomes are unequal',1],['The head-count ratio measures it',0],['Compares the poorest fifth with the richest fifth',1]]],
 ['Disguised unemployment','Seasonal unemployment','Disguised: more people work than are needed, so removing some would not reduce output. Seasonal: people have work only in some months of the year.',[['Seven family members work a small farm that needs four',0],['Farm labourers have no work between harvest and sowing',1],['The extra workers add nothing to total output',0],['Sugar mill workers are idle in the off-season',1]]],
 ['Mean','Median','The mean uses every value, so one extreme value pulls it. The median is the middle value, so extremes hardly move it.',[['Add all the values and divide by how many there are',0],['Arrange in order and take the middle one',1],['Badly affected by one very large value',0],['Better for incomes when a few people are very rich',1]]]],
pol:[
 ['State','Government','The state is the whole political community, with four elements: population, territory, government and sovereignty. The government is only one of them: the agency that runs the state, and it changes.',[['Possesses sovereignty',0],['Changes after an election',1],['Is permanent: it continues when ministers resign',0],['Is only one of the four elements of the other',1]]],
 ['State','Nation','A state is a political and legal unit with sovereignty. A nation is a people bound by a feeling of oneness from shared history, culture or language, and it can exist without a state of its own.',[['Must have a definite territory and sovereignty',0],['Rests on an emotional feeling of unity',1],['A people can be this without a government of their own',1],['A legal and political organisation',0]]],
 ['Negative liberty','Positive liberty','Negative liberty is the absence of restraints: being left alone. Positive liberty is the presence of conditions in which a person can develop, which may need the state to act.',[['Freedom means the absence of restraints',0],['The state should provide education so people can use their freedom',1],['The state must not interfere in actions that affect only oneself',0],['Laws against exploitation can increase freedom',1]]],
 ['Legal sovereignty','Political sovereignty','The legal sovereign is the body with supreme power to make law, recognised by the courts. The political sovereign is the power behind it: the electorate and public opinion.',[['The supreme law-making body',0],['The electorate',1],['Definite, organised and recognised by the courts',0],['Unorganised, yet the other must in the end bow to it',1]]],
 ['Liberalism','Socialism','Liberalism puts the individual first: liberty, rights and limited government. Socialism puts society first: equality, and social ownership or control of the means of production.',[['Individual liberty is the highest value',0],['Economic equality is the highest value',1],['Private property and free competition',0],['Social ownership of the main means of production',1]]],
 ['ASEAN','SAARC','ASEAN was founded in 1967 by Southeast Asian states and has its secretariat in Jakarta. SAARC was founded in 1985 by South Asian states and has its secretariat in Kathmandu.',[['Founded in 1967 by the Bangkok Declaration',0],['India is a founding member',1],['Its secretariat is in Kathmandu',1],['Founded by Indonesia, Malaysia, the Philippines, Singapore and Thailand',0]]]],
soc:[
 ['Sociology','Anthropology','Sociology grew up studying modern, complex, industrial societies, often with surveys. Anthropology grew up studying small, simple or tribal societies as a whole, through long fieldwork.',[['Traditionally studied small tribal societies',1],['Long fieldwork with participant observation is its classic method',1],['Traditionally studied modern industrial societies',0],['Often uses surveys and questionnaires on large samples',0]]],
 ['Society','Community','Society is the whole web of social relationships; it is abstract and has no fixed area. A community is a group living in a definite locality with a we-feeling.',[['A web of social relationships',0],['A definite locality is essential',1],['Marked by community sentiment, or we-feeling',1],['Abstract, and includes both cooperation and conflict',0]]],
 ['Primary group','Secondary group','Primary groups are small, face-to-face and intimate, like the family. Secondary groups are large, formal and formed for a purpose, like a company or a political party.',[['Family and close friends',0],['A trade union or a political party',1],['Relations are personal and valued for their own sake',0],['Relations are formal and based on rules or contract',1]]],
 ['Status','Role','Status is the position a person occupies in society. Role is the behaviour expected of someone in that position: the dynamic side of status.',[['The position of teacher',0],['Teaching, marking and guiding students',1],['Can be ascribed or achieved',0],['The dynamic aspect of the other',1]]],
 ['Primary data','Secondary data','Primary data are collected first-hand by the researcher for the study. Secondary data were collected by someone else, for another purpose.',[['Your own interviews with thirty families',0],['Census reports',1],['Original, but slow and costly to collect',0],['Quick and cheap, but may not fit your question',1]]],
 ['Folkways','Mores','Folkways are everyday customs, and breaking them brings only mild disapproval. Mores are norms seen as vital to society’s welfare, and breaking them brings strong condemnation.',[['Greeting elders in the customary way',0],['The rule against stealing',1],['Breaking it earns a frown or a laugh, nothing more',0],['Carry a strong sense of right and wrong',1]]],
 ['Sanskritisation','Westernisation','Sanskritisation: a lower caste adopts the customs and way of life of a higher caste to rise in the hierarchy. Westernisation: change brought by long contact with Western, especially British, culture.',[['A caste gives up meat and takes up upper-caste rituals',0],['English education, new dress and new technology',1],['Movement up within the caste system, not out of it',0],['Began with British rule in India',1]]]]};
/* chain reaction: [title, steps in the right order, why] */
var CHD={eco:[
 ['The vicious circle of poverty',['Income is low','Little can be saved','Little is invested in machines and skills','Productivity stays low','Income stays low'],'Each link causes the next, so a poor economy stays poor unless something breaks the circle, such as investment in capital and in people.'],
 ['India, 1991: from crisis to reform',['Imports cost far more than exports earn','Foreign exchange reserves fall to about two weeks of imports','India turns to the IMF and the World Bank for loans','The New Economic Policy is announced','Industrial licensing is cut back and trade is opened up','Foreign investment and competition increase'],'A balance of payments crisis forced the reforms known as liberalisation, privatisation and globalisation.'],
 ['How human capital grows an economy',['Spending on education and health rises','Workers become more skilled and healthier','Each worker produces more','Incomes and national output rise','Families and the state can spend more on education and health'],'People are a resource. Investment in them raises productivity, and the gains can be invested again.']],
pol:[
 ['How the Soviet Union came apart',['The economy stagnates and shortages grow','Gorbachev begins glasnost and perestroika (1985)','Communist governments fall across Eastern Europe (1989)','Hardliners attempt a coup against Gorbachev and fail (August 1991)','Russia, Ukraine and Belarus declare the USSR at an end and form the CIS (December 1991)','Gorbachev resigns and fifteen independent states replace the USSR'],'Reform loosened control faster than it fixed the economy, and the republics pulled away.'],
 ['The road to the European Union',['European Coal and Steel Community (1951)','Treaty of Rome creates the European Economic Community (1957)','Maastricht Treaty creates the European Union (1992)','Euro notes and coins enter circulation (2002)','Treaty of Lisbon comes into force (2009)','The United Kingdom leaves the EU (2020)'],'Cooperation began with coal and steel, widened to a common market, and deepened into a union with its own currency.'],
 ['How regional cooperation deepens',['Free trade area: no tariffs between members','Customs union: one common tariff for outsiders','Common market: goods, capital and workers move freely','Economic and monetary union: shared policies and one currency','Political union: shared institutions and laws'],'Each stage gives up a little more national control in return for a larger shared market. The EU has gone furthest; SAARC is still at the first stage.']],
soc:[
 ['The steps of social research',['Choose and define the problem','Review what is already known','Frame a hypothesis','Choose the method and the sample','Collect the data','Analyse and interpret the data','Write the report'],'Each step depends on the one before it. A vague problem or a poor sample cannot be repaired at the analysis stage.'],
 ['Comte’s law of three stages',['Theological stage: events are explained by gods and spirits','Metaphysical stage: events are explained by abstract forces','Positive stage: events are explained by observation and science'],'Comte held that human thought, and society with it, passes through these stages. Sociology belongs to the positive stage.'],
 ['How a social problem gets tackled',['A harmful condition exists in society','People become aware of it and call it a problem','Groups debate what should be done','Laws and programmes are made','The change is carried out and reviewed'],'A condition becomes a social problem only when enough people see it as one and believe collective action can change it.']]};
/* you decide: [title, scene, [[option, what follows, concept] x3], takeaway, exam question] */
var YDD={eco:[
 ['Finance Minister, June 1991','Foreign exchange reserves can pay for about two weeks of imports. Oil bills are due, and the world’s lenders are watching.',[['Borrow from the IMF and open up the economy','Loans arrive with conditions. Licensing is cut, tariffs fall and foreign investment enters. Growth picks up within a few years, though some protected industries struggle.','Liberalisation, privatisation and globalisation'],['Ban most imports and wait it out','Factories run short of oil, parts and machines. Shortages spread and prices rise. The cause, an economy that exports too little, is untouched.','The limits of import substitution'],['Refuse to repay foreign loans','India is shut out of world credit for years. Trade finance dries up and essential imports stop.','Balance of payments crisis']],'This was the real choice in 1991, and India took the first path.','Explain the circumstances that led to the economic reforms of 1991.'],
 ['Planning Commission, 1956','The Second Five Year Plan is being drafted. Savings are scarce. Where should they go first?',[['Heavy industry: steel, machines and power','Growth is slow at first and consumer goods stay scarce, but the country builds the base to make its own machines. This is the Mahalanobis strategy that India chose.','Self-reliance through heavy industry'],['Consumer goods and small industries','Jobs and goods arrive sooner, but machines must still be imported and foreign exchange runs short.','Employment and wage goods first'],['Agriculture first','Food output rises and prices steady, but industry has to wait. India turned this way later, with the Green Revolution.','Agricultural development']],'Every plan is a choice between goals that all matter: growth, self-reliance, jobs and equity.','Discuss the main objectives of India’s five year plans.']],
pol:[
 ['You are the judge','A city bans a peaceful student march, saying it will block traffic and disturb order. The students say their liberty is being denied.',[['Uphold the ban: order comes first','The city stays calm today. But if “order” can stop any protest, liberty exists only when the authorities agree with you.','Liberty against authority'],['Strike down the ban completely','The march goes ahead and ambulances are stuck for hours. The rights of others were never weighed.','Liberty is not licence'],['Allow the march on a fixed route and time','Free expression is protected, and so are other people’s rights. This is how courts usually reason: liberty with reasonable restrictions.','Reasonable restrictions and the harm principle']],'Liberty is the freedom to act without harming the equal liberty of others.','“Liberty does not mean the absence of all restraints.” Discuss.'],
 ['The admissions policy','A college has 100 seats. Applicants from poor rural schools score lower on average than those who could afford coaching.',[['One cut-off for everyone','The rule treats everyone alike, yet most seats go to those who started ahead. This is formal equality.','Equality before law'],['Reserve some seats for the disadvantaged','More first-generation students get in. Critics ask about merit; supporters answer that the race did not start level.','Equality of opportunity and protective discrimination'],['Fill the seats by lottery','Nobody can call it biased, but neither effort nor need counts for anything.','Why equality is not sameness']],'Equality means removing unfair disadvantages, not treating unlike cases identically.','Distinguish between equality before law and equality of opportunity.']],
soc:[
 ['You are the researcher','You want to find out why some girls in a village leave school after Class 8. You have one month.',[['Send a printed questionnaire to 300 homes','Numbers come in quickly, but many parents cannot read it, and the real reasons do not fit your boxes.','Questionnaire: wide but shallow, and it needs literacy'],['Interview thirty families at home','It is slower, but people explain in their own words and you can ask why. A schedule filled in by the interviewer works even where people cannot read.','Interview and schedule'],['Live in the village and observe for the month','You see what people do, not only what they say. But it is one village, and your presence may change how people behave.','Participant observation']],'No method is best for everything. Good research often combines them.','Compare the questionnaire and the interview as tools of data collection.']]};
/* thinkers argue: who = [name, years, lens]; ev = [title, scene, [[concept, argument, what it misses] per thinker]] */
var TAD={eco:{intro:'Smith, Marshall, Robbins and Samuelson each defined economics differently. Watch the four definitions explain the same event.',who:[['Adam Smith','1723–1790','Economics is about wealth: how a nation produces more of it.'],['Alfred Marshall','1842–1924','Economics is about welfare: people in the ordinary business of life.'],['Lionel Robbins','1898–1984','Economics is about choice: unlimited wants, scarce means with alternative uses.'],['Paul Samuelson','1915–2009','Economics is about growth: using scarce resources over time, for now and for the future.']],ev:[
 ['The IPL auction','A franchise has a fixed purse. It spends a fifth of it on one fast bowler and has to let two all-rounders go.',[['Wealth','Watch how wealth is created. Specialists, each doing one job very well, make something millions will pay to watch. That is the division of labour at work.','Says little about whether anyone is better off, or about the choice the team just made.'],['Welfare','Ask what this does for people’s well-being. Players earn a living and fans gain enjoyment. Economics studies the part of life tied to material welfare.','Welfare is hard to measure, and is a fan’s joy really “material”?'],['Scarcity and choice','The purse is limited, the wants are not, and the money has other uses. Buying the bowler meant giving up two all-rounders. This is the economic problem itself.','Treats it as a neutral puzzle and says nothing about growth or fairness.'],['Growth over time','The team is choosing between today and tomorrow: a star now, or young players whose value will grow. Economics is about using scarce resources over time.','Wide enough to cover almost anything, so it is harder to pin down.']]],
 ['A mother’s unpaid work','She cooks, cleans and teaches her children every day. No one pays her, so none of it appears in the national income.',[['Wealth','It adds nothing to the wealth that is bought and sold, so the science of wealth leaves it out.','A whole household runs on work this view cannot see.'],['Welfare','It clearly raises the family’s well-being. But it cannot be measured in money, so it falls outside economic welfare.','Splitting welfare into material and non-material looks artificial here.'],['Scarcity and choice','Her time is scarce and has alternative uses: paid work, rest, study. Any choice about scarce time is economic, paid or not.','Explains the choice but is silent on whether the arrangement is fair.'],['Growth over time','Teaching her children builds their future earning power. It is an investment in the next generation.','The return is real, but far off and very hard to count.']]]]},
pol:{intro:'Hobbes, Locke, Mill and Marx disagree about what the state is for. Watch them judge the same present-day event.',who:[['Thomas Hobbes','1588–1679','Without a strong authority, life is a war of all against all. Order comes first.'],['John Locke','1632–1704','Government exists by consent, to protect life, liberty and property.'],['J. S. Mill','1806–1873','Power may be used over a person only to prevent harm to others.'],['Karl Marx','1818–1883','Ask whose class interest the state and its laws serve.']],ev:[
 ['A compulsory ID app','To enter college, ride the metro or collect a ration, everyone must now show a government app that records where they go.',[['Order and security','A sovereign that cannot see cannot protect. If the app stops crime and fraud, obeying it is the price of peace.','Sets almost no limit on the ruler. Who protects people from the protector?'],['Consent and natural rights','People set up government to protect their liberty, not to track it. Did they consent to this? A government that breaks its trust loses its claim to obedience.','Consent is hard to find in practice. Nobody signed a contract.'],['The harm principle','Where I walk harms no one. Unless it prevents harm to others, watching everyone is an unjustified limit on liberty.','The line between acts that affect only me and acts that affect others is blurry.'],['Class interest','Ask who gains. The poor must show the app for rations while the rich pass freely. The tools of the state usually serve those who own.','Reduces every question to class. Some rules protect everyone.']]],
 ['A hostel curfew','A college locks its hostel gates at 8 p.m. “for the students’ own safety”. Students over eighteen object.',[['Order','Rules made by a recognised authority must be obeyed, or every hostel becomes a quarrel. Safety is what authority is for.','Obedience is not the same as justice.'],['Consent','Authority is a trust. Were the students asked? Rules made with the consent of the governed are legitimate; rules imposed are not.','Even agreed rules can be unfair to a minority.'],['Against paternalism','A person’s own good is not a sufficient reason to compel them. Over their own life, the individual is sovereign.','Assumes adults always judge their own risks well.'],['Who makes the rules','Notice who is locked in and who decides. Rules come from those with power in the institution and protect its interests first.','The college may simply be worried, not self-interested.']]]]}};
var HLX={eco:['Monsoon is below normal in several states','Unemployment rises among graduates','A state sells its stake in a public sector company'],pol:['Opposition walks out as a bill is passed','Court strikes down a ban on a protest','Leaders meet at a regional summit'],soc:['Survey finds more women in paid work in cities','Village council bans a wedding custom','Study links social media use to loneliness']};

/* ---------- lab home ---------- */
var ACT=[['al','↗','Answer ladder','One question answered for 1, 3 and 6 marks, then as an essay plan',1],['sd','⇄','Spot the difference','Two ideas that get mixed up: sort each statement'],['ch','⛓','Chain reaction','Put causes and effects in the right order'],['yd','⚖','You decide','Take the decision, then see what follows'],['ta','🗣','Thinkers argue','Four thinkers explain one event. Who is right?'],['pl','◔','Play with it','Move the sliders: production possibilities, and averages'],['tb','🎓','Teach it back','Explain an idea to a confused junior',1],['hl','📰','Headline to chapter','Find the chapter idea behind a news headline',1]];
function items(sid,k){return k==='sd'?SDD[sid]:k==='ch'?CHD[sid]:k==='yd'?YDD[sid]:k==='ta'?(TAD[sid]?TAD[sid].ev:sid==='soc'?[]:null):k==='pl'?(sid==='eco'?PLK:null):[]}
function cnt(sid,k){var I=items(sid,k)||[],d=LS().d,n=0;I.forEach(function(x,i){if(d[k+'_'+sid+'_'+i])n++});return[n,I.length]}
function V(){return SJV.lab}
window.labOpen=function(sid,k,i){if(k==='ta'&&sid==='soc'){SJV.lab=null;taOpen();return}SJV.ta=null;SJV.ec=null;SJV.p=null;SJV.qz=null;SJV.mm=null;SJV.rv=null;
  SJV.lab={sid:sid,k:k||'home',i:i||0,a:{}};if(k==='sd'||k==='ch'||k==='yd'||k==='ta'){var I=items(sid,k),d=LS().d,f=-1;if(i==null){I.forEach(function(x,j){if(f<0&&!d[k+'_'+sid+'_'+j])f=j});SJV.lab.i=f<0?0:f}}
  view='sj_'+sid;render();window.scrollTo(0,0)};
window.labClose=function(){var sid=V()&&V().sid;SJV.lab=null;if(sid){view='sj_'+sid;render();window.scrollTo(0,0)}};
function hd(t,sub){var v=V();return'<button class="link back" onclick="'+(v.k==='home'?'labClose()':'labOpen(\''+v.sid+'\')')+'" style="margin-bottom:8px">‹ '+(v.k==='home'?esc(nm(v.sid)):'Concept lab')+'</button><h1>'+t+'</h1>'+(sub?'<p class="sub">'+sub+'</p>':'')}
function homeView(){var v=V(),sid=v.sid,h=hd('Concept lab · '+esc(nm(sid)),'Understand the idea first, then meet it as an exam question. Pick any activity.')+'<div class="card">';
  ACT.forEach(function(a){if(items(sid,a[0])===null)return;var c=cnt(sid,a[0]);h+='<button class="trow" onclick="labOpen(\''+sid+'\',\''+a[0]+'\')"><span class="tn">'+a[1]+'</span><span class="tt"><b>'+a[2]+'</b><small>'+a[3]+(a[4]?' · with Claude':'')+'</small></span>'+(c[1]?'<span class="pill'+(c[0]>=c[1]?' ok':c[0]?' mid':'')+'">'+c[0]+'/'+c[1]+'</span>':'')+'</button>'});
  app.innerHTML=h+'</div>'}
function nextBtn(k){var v=V(),I=items(v.sid,k),last=v.i+1>=I.length;return'<button class="btn" onclick="'+(last?'labOpen(\''+v.sid+'\')':'labOpen(\''+v.sid+'\',\''+k+'\','+(v.i+1)+')')+'">'+(last?'Back to the lab':'Next one')+'</button>'}

/* ---------- spot the difference ---------- */
window.labSd=function(j,x){var v=V(),p=SDD[v.sid][v.i],s=p[3][j];if(v.a[j]!=null)return;v.a[j]=x;
  if(x!==s[1]&&stu()){mkAdd({src:'Concept lab',topic:nm(v.sid),q:'Which one does this describe? '+s[0],o:[p[0],p[1]],a:s[1],pick:x,habit:p[0]+' or '+p[1],h:p[2],ref:'lab:'+s[0]});save()}
  if(p[3].every(function(t,i){return v.a[i]===t[1]}))mark('sd_'+v.sid+'_'+v.i,v.sid,'spot the difference');var y=window.scrollY;sdView();window.scrollTo(0,y)};
function sdView(){var v=V(),D=SDD[v.sid],p=D[v.i],n=0,all=true,h=hd('Spot the difference','Pair '+(v.i+1)+' of '+D.length+'. Which idea does each statement describe?');
  h+='<div class="card"><div class="lbvs"><b>'+esc(p[0])+'</b><span>or</span><b>'+esc(p[1])+'</b></div>';
  p[3].forEach(function(s,j){var a=v.a[j];if(a==null)all=false;else if(a===s[1])n++;
    h+='<div class="lbst'+(a==null?'':a===s[1]?' ok':' bad')+'"><p>'+esc(s[0])+'</p><div class="row2">'+[0,1].map(function(x){return'<button class="btn alt'+(a===x?' on':'')+'"'+(a!=null?' disabled':'')+' onclick="labSd('+j+','+x+')">'+esc(p[x])+'</button>'}).join('')+'</div>'+(a!=null&&a!==s[1]?'<small>This describes <b>'+esc(p[s[1]])+'</b>.</small>':'')+'</div>'});
  h+='</div>';if(all)h+='<div class="fb '+(n===4?'ok':'mid')+'" style="margin:0 0 14px"><b>'+n+' of 4.</b> '+esc(p[2])+(n<4?' The ones you missed are in My mistakes.':'')+'</div>'+nextBtn('sd');
  app.innerHTML=h}

/* ---------- chain reaction ---------- */
function shuf(n){var a=[],i,j,t;for(i=0;i<n;i++)a.push(i);do{for(i=n-1;i>0;i--){j=Math.floor(Math.random()*(i+1));t=a[i];a[i]=a[j];a[j]=t}}while(a.every(function(x,k){return x===k}));return a}
window.labCh=function(x,rm){var v=V();if(v.ok)return;v.chk=0;if(rm)v.sel=v.sel.filter(function(y){return y!==x});else if(v.sel.indexOf(x)<0)v.sel.push(x);var y=window.scrollY;chView();window.scrollTo(0,y)};
window.labChk=function(){var v=V(),c=CHD[v.sid][v.i];v.chk=1;if(v.sel.every(function(x,i){return x===i})){v.ok=1;mark('ch_'+v.sid+'_'+v.i,v.sid,'chain reaction')}chView()};
window.labChFix=function(){var v=V(),k=0;while(k<v.sel.length&&v.sel[k]===k)k++;v.sel=v.sel.slice(0,k);v.chk=0;chView()};
function chView(){var v=V(),D=CHD[v.sid],c=D[v.i],st=c[1];if(!v.ord){v.ord=shuf(st.length);v.sel=[]}
  var h=hd('Chain reaction','Chain '+(v.i+1)+' of '+D.length+'. Tap the steps in the order they happen.')+'<div class="card"><b>'+esc(c[0])+'</b>';
  v.sel.forEach(function(x,i){h+='<button class="lbstep'+(v.chk?(x===i?' ok':' bad'):'')+'" onclick="labCh('+x+',1)"'+(v.ok?' disabled':'')+'><b>'+(i+1)+'</b><span>'+esc(st[x])+'</span></button>'});
  var rest=v.ord.filter(function(x){return v.sel.indexOf(x)<0});
  if(rest.length){h+='<p class="sub" style="margin:10px 0 2px">'+(v.sel.length?'What comes next?':'What comes first?')+'</p>';rest.forEach(function(x){h+='<button class="lbstep free" onclick="labCh('+x+')"><span>'+esc(st[x])+'</span></button>'})}
  else if(!v.chk)h+='<button class="btn" onclick="labChk()">Check my chain</button><p class="sub" style="margin:8px 0 0">Tap a step to take it out.</p>';
  h+='</div>';
  if(v.ok)h+='<div class="fb ok" style="margin:0 0 14px"><b>The chain holds.</b> '+esc(c[2])+'</div>'+nextBtn('ch');
  else if(v.chk)h+='<div class="fb bad" style="margin:0 0 14px"><b>Not quite.</b> The green steps are in the right place. Ask of each red one: what must already have happened for this to follow?</div><button class="btn" onclick="labChFix()">Keep the correct start and try again</button>';
  app.innerHTML=h}

/* ---------- you decide ---------- */
window.labYd=function(x){var v=V();if(v.pick!=null)return;v.pick=x;mark('yd_'+v.sid+'_'+v.i,v.sid,'you decide');ydView();window.scrollTo(0,0)};
function ydView(){var v=V(),D=YDD[v.sid],c=D[v.i],h=hd('You decide',D.length>1?'Decision '+(v.i+1)+' of '+D.length+'.':'');
  h+='<div class="card"><b>'+esc(c[0])+'</b><p class="lbscene" style="margin-top:6px">'+esc(c[1])+'</p></div>';
  if(v.pick==null){h+='<div class="card"><b>What do you do?</b>';c[2].forEach(function(o,i){h+='<button class="opt" onclick="labYd('+i+')">'+esc(o[0])+'</button>'});h+='</div>'}
  else{c[2].map(function(o,i){return i}).sort(function(a,b){return(a===v.pick?-1:0)-(b===v.pick?-1:0)}).forEach(function(i){var o=c[2][i];h+='<div class="lbtake'+(i===v.pick?' won':'')+'"><div class="th"><b>'+(i===v.pick?'You chose: ':'If you had chosen: ')+esc(o[0])+'</b></div><p>'+esc(o[1])+'</p><div class="ms">The idea at work: <b>'+esc(o[2])+'</b></div></div>'});
    h+='<div class="fb mid" style="margin:10px 0 14px"><b>'+esc(c[3])+'</b><div style="margin-top:6px">The exam asks it like this: <b>'+esc(c[4])+'</b></div></div>'+nextBtn('yd')}
  app.innerHTML=h}

/* ---------- thinkers argue ---------- */
window.labTa=function(x){var v=V();if(v.pick!=null)return;v.pick=x;var l=LS();l.ta=l.ta||{};var k=v.sid+x;l.ta[k]=(l.ta[k]||0)+1;mark('ta_'+v.sid+'_'+v.i,v.sid,'thinkers argue');taView2();window.scrollTo(0,0)};
window.labTaChat=function(){var v=V(),T=TAD[v.sid],e=T.ev[v.i],w=T.who[v.pick];
  openChat('I am studying '+nm(v.sid)+'. In my Study Buddy app, four thinkers explained this event:\n"'+e[0]+'": '+e[1]+'\n\n'+T.who.map(function(p,i){return p[0]+' ('+e[2][i][0]+'): '+e[2][i][1]}).join('\n')+'\n\nI think '+w[0]+' explains it best. Argue against me as one of the other three would, one short point at a time, and make me defend my choice with the ideas from my syllabus. After three rounds, tell me which exam question this debate would help me answer.\n\nMy first argument: ')};
function taView2(){var v=V(),T=TAD[v.sid],e=T.ev[v.i],h=hd('Thinkers argue',esc(T.intro));
  h+='<div class="card"><b>'+esc(e[0])+'</b><p class="lbscene" style="margin-top:6px">'+esc(e[1])+'</p></div>';
  T.who.forEach(function(w,i){var t=e[2][i];h+='<div class="lbtake lbt'+i+(v.pick===i?' won':'')+'"><div class="th"><b>'+esc(w[0])+'</b><small class="muted">'+w[1]+'</small><span>'+esc(t[0])+'</span></div><p>'+esc(t[1])+'</p>'+(v.pick!=null?'<div class="ms"><b>What it misses:</b> '+esc(t[2])+'</div>':'')+'</div>'});
  if(v.pick==null){h+='<div class="card"><b>Who explains it best?</b><div class="row2" style="margin-top:8px">'+T.who.map(function(w,i){return'<button class="btn alt" onclick="labTa('+i+')">'+esc(w[0])+'</button>'}).join('')+'</div></div>'}
  else h+='<div class="fb mid" style="margin:10px 0 14px"><b>You sided with '+esc(T.who[v.pick][0])+'.</b> There is no single right answer here. In an exam, the marks are for explaining one view and showing what it leaves out.</div><button class="btn alt chatb" onclick="labTaChat()">'+CHAT_ICON+'Argue it out in Claude chat</button>'+nextBtn('ta');
  app.innerHTML=h}

/* ---------- play with it (economics) ---------- */
function r2(x){return String(Math.round(x*100)/100).replace('-','−')}
function st5(v){var a=[v.a,v.b,v.c,v.d,v.e].sort(function(x,y){return x-y}),m=a.reduce(function(s,x){return s+x},0)/5;return{a:a,mean:m,med:a[2],range:a[4]-a[0],md:a.reduce(function(s,x){return s+Math.abs(x-m)},0)/5,sd:Math.sqrt(a.reduce(function(s,x){return s+(x-m)*(x-m)},0)/5)}}
var PLK=[
 {n:'Production possibility curve',s:[['x','Wheat produced',0,12,1,4],['y','Machines produced',0,12,1,5],['g','Resources and technology',8,12,2,10]],
  where:function(v){var d=v.x*v.x+v.y*v.y-v.g*v.g;return d<0?-1:d>0?1:0},
  eq:function(v){var w=this.where(v);return w<0?'Inside the curve':w>0?'Outside the curve':'On the curve'},
  draw:function(v){var u=320/13,X=function(x){return 24+x*u*.92},Y=function(y){return 300-y*u*.92},d='',t,w=this.where(v);for(t=0;t<=90;t+=3)d+=(d?'L':'M')+X(v.g*Math.cos(t*Math.PI/180))+' '+Y(v.g*Math.sin(t*Math.PI/180));
   return'<path d="M24 8V300H316" fill="none" stroke="var(--muted)" stroke-width="1.2"/><text x="316" y="315" font-size="11" text-anchor="end" fill="var(--muted)">Wheat →</text><text x="28" y="16" font-size="11" fill="var(--muted)">Machines ↑</text><path d="'+d+'" fill="none" stroke="var(--accent)" stroke-width="2.5"/><circle cx="'+X(v.x)+'" cy="'+Y(v.y)+'" r="6" fill="'+(w<0?'var(--c2)':w>0?'var(--muted)':'var(--c3)')+'"/>'},
  facts:function(v){var w=this.where(v),oc=v.x<v.g?v.x/Math.sqrt(v.g*v.g-v.x*v.x):null;return[['This point is',w<0?'attainable but inefficient: some resources are idle or badly used':w>0?'not attainable with the present resources':'efficient: every resource is fully used'],['Most machines possible with this much wheat',v.x<=v.g?r2(Math.sqrt(v.g*v.g-v.x*v.x)):'none: this much wheat cannot be grown'],['Opportunity cost of one more wheat, on the curve',oc==null?'cannot be read here':'about '+r2(oc)+' machines'],['Why the curve bends outwards','the cost of each extra wheat rises as more wheat is made']]},
  tasks:[['Show an economy with unemployment.',function(v,p){return p.where(v)<0},'Any point inside the curve leaves resources idle. Output could rise without giving anything up.'],
   ['With resources at 10, show full employment while producing 6 wheat.',function(v,p){return v.g===10&&v.x===6&&p.where(v)===0},'On the curve with 6 wheat, the economy makes 8 machines: 36 + 64 = 100.'],
   ['Show a combination the economy cannot reach.',function(v,p){return p.where(v)>0},'Points outside the curve need more resources or better technology than the economy has.'],
   ['Show economic growth: make 8 wheat and 8 machines attainable.',function(v,p){return v.x===8&&v.y===8&&p.where(v)<=0},'Growth shifts the whole curve outwards, so combinations that were out of reach come inside it.'],
   ['With resources at 10, move along the curve from 6 wheat to 8 wheat.',function(v,p){return v.g===10&&v.x===8&&p.where(v)===0},'Going from 6 to 8 wheat costs 2 machines (8 down to 6). On the curve, more of one good always means less of the other: that is opportunity cost.']]},
 {n:'Averages and spread',s:[['a','Value 1',0,20,1,4],['b','Value 2',0,20,1,7],['c','Value 3',0,20,1,9],['d','Value 4',0,20,1,12],['e','Value 5',0,20,1,18]],
  eq:function(v){var s=st5(v);return'Mean '+r2(s.mean)+' · Median '+s.med},
  draw:function(v){var s=st5(v),X=function(x){return 20+x*14},h='<path d="M20 200H300" stroke="var(--muted)" stroke-width="1.2"/>',seen={},i;for(i=0;i<=20;i+=5)h+='<text x="'+X(i)+'" y="218" font-size="10" text-anchor="middle" fill="var(--muted)">'+i+'</text>';
   s.a.forEach(function(x){seen[x]=(seen[x]||0)+1;h+='<circle cx="'+X(x)+'" cy="'+(200-seen[x]*18+6)+'" r="7" fill="var(--accent)"/>'});
   return h+'<path d="M'+X(s.mean)+' 228l-7 12h14z" fill="var(--c2)"/><text x="'+X(s.mean)+'" y="254" font-size="11" font-weight="600" text-anchor="middle" fill="var(--c2)">mean</text><path d="M'+X(s.med)+' 262l-7 12h14z" fill="var(--c3)"/><text x="'+X(s.med)+'" y="288" font-size="11" font-weight="600" text-anchor="middle" fill="var(--c3)">median</text>'},
  facts:function(v){var s=st5(v);return[['In order',s.a.join(', ')],['Mean',r2(s.mean)],['Median (the middle value)',String(s.med)],['Range',String(s.range)],['Mean deviation from the mean',r2(s.md)],['Standard deviation',r2(s.sd)]]},
  tasks:[['Make the mean exactly 10 and the median 8.',function(v){var s=st5(v);return s.mean===10&&s.med===8},'The total must be 50 with the middle value 8. A large value on the right pulls the mean above the median.'],
   ['Make the standard deviation 0.',function(v){return st5(v).sd===0},'Spread is zero only when every value is the same, so every value equals the mean.'],
   ['Keep the mean at 10 but make the standard deviation more than 6.',function(v){var s=st5(v);return s.mean===10&&s.sd>6},'Two sets can share a mean and still differ a lot. Dispersion tells you how far the values lie from the mean.'],
   ['Make the mean at least 3 more than the median.',function(v){var s=st5(v);return s.mean-s.med>=3},'One very large value drags the mean up but leaves the median almost alone. This is why incomes are often summarised by the median.'],
   ['Make the range 12 and the median 10.',function(v){var s=st5(v);return s.range===12&&s.med===10},'The range uses only the largest and smallest values, so it says nothing about the values in between.']]}];
function plGet(){var v=V(),p=PLK[v.i];if(!v.v){v.v={};p.s.forEach(function(s){v.v[s[0]]=s[5]})}return p}
function plT(){var v=V(),p=plGet(),n=0,d=LS().d;if(v.ti==null){while(n<p.tasks.length&&d['plt_'+v.i+'_'+n])n++;v.ti=n>=p.tasks.length?0:n}return p.tasks[v.ti]}
function plFx(){return plGet().facts(V().v).map(function(f){return'<li><span>'+esc(f[0])+':</span> <b>'+esc(f[1])+'</b></li>'}).join('')}
window.labPl=function(key,val){var v=V(),p=plGet();v.v[key]=+val;var b=document.getElementById('lbv_'+key),s=document.getElementById('lbSvg'),f=document.getElementById('lbFx'),e=document.getElementById('lbEq'),x=document.getElementById('lbFb');
  if(b)b.textContent=val;if(s)s.innerHTML=p.draw(v.v);if(f)f.innerHTML=plFx();if(e)e.textContent=p.eq(v.v);if(x&&v.fb!=='ok'){x.innerHTML='';v.fb=null}};
window.labPlChk=function(){var v=V(),p=plGet(),t=plT(),x=document.getElementById('lbFb');
  if(t[1](v.v,p)){v.fb='ok';var l=LS(),d=l.d;if(!d['plt_'+v.i+'_'+v.ti]){d['plt_'+v.i+'_'+v.ti]=1;if(p.tasks.every(function(q,j){return d['plt_'+v.i+'_'+j]}))mark('pl_eco_'+v.i,'eco','play');else save()}plView2()}
  else if(x){v.fb='no';x.innerHTML='<div class="fb bad"><b>Not yet.</b> Change one slider at a time and read the facts under the picture.</div><button class="link" style="margin-top:8px" onclick="labPlWhy()">Show me the idea</button>'}};
window.labPlWhy=function(){var x=document.getElementById('lbFb');if(x)x.innerHTML='<div class="fb mid"><b>The idea:</b> '+esc(plT()[2])+' Now set the sliders to show it.</div>'};
window.labPlNext=function(){var v=V();v.ti=(v.ti+1)%plGet().tasks.length;v.fb=null;plView2()};
window.labPlSw=function(i){var v=V();v.i=i;v.v=null;v.ti=null;v.fb=null;plView2();window.scrollTo(0,0)};
function plView2(){var v=V(),p=plGet(),t=plT(),h=hd('Play with it','Move a slider and watch the picture and the facts change. Then try the challenges.');
  h+='<div class="chaps">'+PLK.map(function(q,i){return'<button class="chap'+(i===v.i?' on':'')+'" onclick="labPlSw('+i+')">'+q.n+'</button>'}).join('')+'</div>';
  h+='<div class="card"><div class="pleq" id="lbEq">'+esc(p.eq(v.v))+'</div><svg id="lbSvg" class="plsvg" viewBox="0 0 320 320" role="img" aria-label="'+esc(p.n)+'">'+p.draw(v.v)+'</svg><div class="plsl">';
  p.s.forEach(function(s){h+='<label for="lbs_'+s[0]+'">'+esc(s[1])+' = <b id="lbv_'+s[0]+'">'+v.v[s[0]]+'</b></label><input type="range" id="lbs_'+s[0]+'" min="'+s[2]+'" max="'+s[3]+'" step="'+s[4]+'" value="'+v.v[s[0]]+'" oninput="labPl(\''+s[0]+'\',this.value)">'});
  h+='</div><ul class="plfacts" id="lbFx">'+plFx()+'</ul></div><div class="card hi"><div class="eyebrow">Challenge '+(v.ti+1)+' of '+p.tasks.length+'</div><p style="margin:6px 0 0"><b>'+esc(t[0])+'</b></p>';
  if(v.fb==='ok')h+='<div class="fb ok"><b>That shows it.</b> '+esc(t[2])+'</div><button class="btn" onclick="labPlNext()">Next challenge</button>';
  else h+='<button class="btn" onclick="labPlChk()">Check my sliders</button><div id="lbFb"></div>';
  app.innerHTML=h+'</div>'}

/* ---------- with Claude: answer ladder, teach it back, headline to chapter ---------- */
var BUSY=false;
function chips(fn){var v=V();return'<div class="chaps">'+scbOf(v.sid).map(function(c,i){return'<button class="chap'+(v.ch===i?' on':'')+'" onclick="'+fn+'('+i+')">'+esc(c.n)+'</button>'}).join('')+'</div>'}
function ctx(v){return'Subject: '+nm(v.sid)+' (senior secondary school syllabus).\nChapters in the syllabus: '+scbOf(v.sid).map(function(c){return c.n}).join('; ')+'.'}
async function ask(p,okf){if(BUSY)return;var v=V(),m=document.getElementById('lbMsg');BUSY=true;if(m)m.textContent='Claude is thinking…';
  try{var s=await getS();if(!s){if(m)m.textContent='Claude is not available here. Open the app while signed in to claude.ai.';return}
    var d=await s.json(p,{cache:false,modelTier:'default'});if(!d||!okf(d))throw new Error('shape');if(V()===v){labView();return d}
  }catch(e){var x=document.getElementById('lbMsg');if(x)x.textContent=e&&e.code?sampleErr(e):'Claude’s answer came back in the wrong shape. Tap again to retry.'}
  finally{BUSY=false}}
window.labAl=function(i,fresh){if(BUSY)return;var v=V(),ch=scbOf(v.sid)[i],k=v.sid+'|'+ch.id,l=LS();v.ch=i;v.r=1;v.d=fresh?null:l.al[k]||null;if(v.d){alView();return}alView();
  ask('You are an experienced examiner and teacher.\n'+ctx(v)+'\nChapter: '+ch.n+'\n'+(l.al[k]?'Do not reuse this question: '+l.al[k].q+'\n':'')+'Pick ONE key concept from this chapter that exams ask about, and show how the SAME question is answered at four lengths, so the student sees what earns extra marks. Each rung must contain the previous one and add to it. Be factually exact and stay within a school syllabus. Plain text.'+intLine()+'\nReturn JSON only: {"q":"the exam-style question","rungs":[{"marks":"1 mark","answer":"one sentence","adds":"what this rung contains"},{"marks":"3 marks","answer":"three points in about 50 words","adds":"what was added to earn the extra marks"},{"marks":"6 marks","answer":"about 120 words: definition, explanation, one example, one limitation or contrast","adds":"what was added"},{"marks":"Essay plan","answer":"5 to 7 short lines, one per paragraph, separated by newlines","adds":"how a long answer is organised"}]}',
   function(d){if(!d.q||!Array.isArray(d.rungs)||d.rungs.length<3)return false;v.d={q:String(d.q),rungs:d.rungs.slice(0,4).map(function(r){return{m:String(r.marks||''),a:String(r.answer||''),x:String(r.adds||'')}})};l.al[k]=v.d;var ks=Object.keys(l.al);if(ks.length>12)delete l.al[ks[0]];mark(null,v.sid,'answer ladder');return true})};
window.labAlUp=function(){var v=V();v.r++;var y=window.scrollY;alView();window.scrollTo(0,y)};
function alView(){var v=V(),h=hd('Answer ladder','More marks do not mean more words. They mean more points, an example and a judgement. Choose a chapter and climb.')+chips('labAl');
  if(v.d){h+='<div class="card"><div class="eyebrow">The question</div><p style="margin:4px 0 0"><b>'+esc(v.d.q)+'</b></p>';
    v.d.rungs.slice(0,v.r).forEach(function(r,i){h+='<div class="lbrung"><small>'+esc(r.m)+'</small><div>'+esc(r.a)+'</div>'+(r.x?'<em>'+(i?'What earned the extra marks: ':'What it contains: ')+esc(r.x)+'</em>':'')+'</div>'});
    if(v.r<v.d.rungs.length)h+='<p class="sub" style="margin:10px 0 0">Before you climb: what would you add to earn more marks?</p><button class="btn" onclick="labAlUp()">Climb to: '+esc(v.d.rungs[v.r].m)+'</button>';
    else h+='<div class="fb mid"><b>Your turn.</b> Cover the screen and write the 3-mark answer from memory, then check it against the ladder.</div><button class="btn alt" onclick="labAl('+v.ch+',1)">Another ladder from this chapter</button>';
    h+='</div>'}
  app.innerHTML=h+'<div id="lbMsg" class="sub" aria-live="polite">'+(v.ch!=null&&!v.d?'Claude is thinking…':'')+'</div>'}
window.labTb=function(i){if(BUSY)return;var v=V(),ch=scbOf(v.sid)[i];v.ch=i;v.q=null;v.res=null;v.txt='';tbView();
  ask('You are role-playing a curious younger student who has NOT studied this subject.\n'+ctx(v)+'\nChapter: '+ch.n+'\nChoose one key concept from this chapter and ask the older student to explain it to you, in your own simple words, as one short question.'+intLine()+'\nReturn JSON only: {"concept":"the concept, 2 to 6 words","ask":"your question, in the first person, under 30 words"}',
   function(d){if(!d.concept||!d.ask)return false;v.q={c:String(d.concept),a:String(d.ask)};return true})};
window.labTbGo=function(){var v=V(),t=document.getElementById('lbTxt'),m=document.getElementById('lbMsg');v.txt=t?t.value.trim():'';if(v.txt.length<20){if(m)m.textContent='Explain it in a few sentences first.';return}
  ask('A student is explaining a concept to a younger student to test their own understanding.\n'+ctx(v)+'\nConcept: '+v.q.c+'\nThe younger student asked: '+v.q.a+'\nThe explanation given:\n"""\n'+v.txt.slice(0,1500)+'\n"""\n\nFirst reply as the younger student: say what you understood and name one thing that is still confusing, if anything is. Then judge the explanation as an examiner: which key points were covered correctly, and which points an examiner would expect are missing or wrong. Be exact and kind. Plain text.\nReturn JSON only: {"reply":"the younger student’s reply, under 50 words","covered":["key points covered correctly"],"missing":["key points missing or wrong; empty if none"],"score":0 to 5,"tip":"one sentence on how to say it better in an exam"}',
   function(d){if(d.reply==null||d.score==null)return false;var sc=Math.max(0,Math.min(5,Math.round(+d.score)||0));v.res={r:String(d.reply),c:(d.covered||[]).map(String),m:(d.missing||[]).map(String),s:sc,t:String(d.tip||'')};
     S.ev.push({k:'lab',topic:nm(v.sid),ok:sc>=4,habit:sc>=4?'':'Could not yet explain: '+v.q.c,type:'teach it back',ts:Date.now()});
     if(sc<4&&stu())mkAdd({src:'Concept lab',topic:nm(v.sid),q:'Explain in your own words: '+v.q.c,ans:v.res.m.join('; ')||'See Claude’s feedback',mine:'Teach it back: '+sc+' of 5',habit:'',note:v.res.t,ref:'lab:tb:'+v.q.c});save();return true})};
function tbView(){var v=V(),h=hd('Teach it back','If you can explain it simply, you understand it. Choose a chapter, and a curious junior will ask you something.')+chips('labTb');
  if(v.q){h+='<div class="card"><div class="eyebrow">'+esc(v.q.c)+'</div><p class="lbscene" style="margin-top:4px">“'+esc(v.q.a)+'”</p><textarea id="lbTxt" rows="5" placeholder="Explain it in your own words, as you would to a younger student" oninput="SJV.lab.txt=this.value">'+esc(v.txt||'')+'</textarea>';
    if(v.res){var r=v.res;h+='<div class="lbtake"><div class="th"><b>The junior says</b></div><p>'+esc(r.r)+'</p></div><div class="fb '+(r.s>=4?'ok':r.s>=2?'mid':'bad')+'"><b>'+r.s+' of 5 as an exam explanation.</b>'+(r.c.length?'<div style="margin-top:6px"><b>Covered:</b> '+esc(r.c.join('; '))+'</div>':'')+(r.m.length?'<div style="margin-top:6px"><b>Missing:</b> '+esc(r.m.join('; '))+'</div>':'')+(r.t?'<div style="margin-top:6px"><b>Exam tip:</b> '+esc(r.t)+'</div>':'')+'</div>'}
    h+='<button class="btn'+(v.res?' alt':'')+'" onclick="labTbGo()">'+(v.res?'Explain it again':'Explain it')+'</button>'+(v.res?'<button class="btn alt" onclick="labTb('+v.ch+')">A different question</button>':'')+'</div>'}
  app.innerHTML=h+'<div id="lbMsg" class="sub" aria-live="polite">'+(v.ch!=null&&!v.q?'Claude is thinking…':'')+'</div>'}
window.labHlEx=function(i){var t=document.getElementById('lbTxt');if(t){t.value=HLX[V().sid][i];V().txt=t.value}};
window.labHl=function(){var v=V(),t=document.getElementById('lbTxt'),m=document.getElementById('lbMsg');v.txt=t?t.value.trim():'';if(v.txt.length<8){if(m)m.textContent='Type or paste a headline first.';return}
  ask('A student has seen this news headline and wants to connect it to their syllabus.\n'+ctx(v)+'\nHeadline, as the student typed it: "'+v.txt.slice(0,300)+'"\n\nYou do not know the news story itself, so do NOT add facts, names, dates or figures about the event. Work only from what the headline says. Find the chapter and the concept that this kind of event illustrates, explain the link in two sentences, and write one exam-style question that this headline could be used to answer, with the points a good answer needs. If the headline does not fit this subject, say which subject it fits better. Plain text.\nReturn JSON only: {"fits":true or false,"chapter":"one of the chapters listed","concept":"the concept, 2 to 6 words","link":"two sentences","q":"an exam-style question","points":["3 to 5 points a good answer needs"],"other":"if it does not fit: the subject it fits better; else empty"}',
   function(d){if(d.fits==null)return false;v.res={f:!!d.fits,ch:String(d.chapter||''),c:String(d.concept||''),l:String(d.link||''),q:String(d.q||''),p:(d.points||[]).map(String),o:String(d.other||'')};mark(null,v.sid,'headline to chapter');return true})};
function hlView(){var v=V(),h=hd('Headline to chapter','What you study is in the news every day. Type a headline you have seen, and find the chapter idea behind it.');
  h+='<div class="card"><textarea id="lbTxt" rows="2" placeholder="Type or paste a news headline" oninput="SJV.lab.txt=this.value">'+esc(v.txt||'')+'</textarea><p class="sub" style="margin:4px 0 4px">Or try a typical one:</p><div class="chips">'+HLX[v.sid].map(function(x,i){return'<button class="chipb" onclick="labHlEx('+i+')">'+esc(x)+'</button>'}).join('')+'</div><button class="btn" onclick="labHl()">Find the idea</button></div>';
  if(v.res){var r=v.res;h+=r.f?'<div class="card"><div class="eyebrow">'+esc(r.ch)+'</div><p style="margin:4px 0 0"><b>'+esc(r.c)+'</b></p><p>'+esc(r.l)+'</p><div class="lbrung"><small>The exam could ask</small><div>'+esc(r.q)+'</div></div>'+(r.p.length?'<p style="margin:8px 0 2px"><b>A good answer needs:</b></p><ul style="margin:0;padding-left:1.2em">'+r.p.map(function(x){return'<li>'+esc(x)+'</li>'}).join('')+'</ul>':'')+'<p class="sub" style="margin:10px 0 0">Claude worked only from the headline’s words, not from the news story itself.</p></div>':'<div class="fb mid"><b>This one does not sit in '+esc(nm(v.sid))+'.</b> '+esc(r.l)+(r.o?' It fits better in '+esc(r.o)+'.':'')+'</div>'}
  app.innerHTML=h+'<div id="lbMsg" class="sub" aria-live="polite"></div>'}

/* ---------- routing and hooks ---------- */
function labView(){var v=V(),k=v.k;if(k==='sd')sdView();else if(k==='ch')chView();else if(k==='yd')ydView();else if(k==='ta')taView2();else if(k==='pl')plView2();else if(k==='al')alView();else if(k==='tb')tbView();else if(k==='hl')hlView();else homeView()}
var _sv=sjView;sjView=function(id){if(SJV.lab){if(SJV.lab.sid!==id||SJV.qz||SJV.mm||SJV.rv||SJV.p||SJV.ta||SJV.ec)SJV.lab=null;else return labView()}_sv(id)};
var _sh=sjHome;sjHome=function(id){_sh(id);try{if(!SDD[id])return;var a=app.querySelector('.sub'),n=0,t=0;['sd','ch','yd','ta','pl'].forEach(function(k){var c=cnt(id,k);n+=c[0];t+=c[1]});
  if(a)a.insertAdjacentHTML('afterend','<div class="card lbcard"><p class="tattl">Concept lab</p><p class="sub" style="margin:0 0 4px">Build the idea first, then meet it as an exam question: answer ladders, spot the difference, chain reactions, decisions to take, and teaching it back.'+(n?' You have finished '+n+' of '+t+' built-in activities.':'')+'</p><button class="btn" style="text-align:center;background:var(--c3);color:var(--card)" onclick="labOpen(\''+id+'\')">'+(n?'Continue in the lab':'Open the lab')+'</button></div>')}catch(e){}};
var _vt=viewTop;viewTop=function(v){_vt(v);if(v.indexOf('sj_')===0)SJV.lab=null};
try{var _to=taOpen;taOpen=function(){SJV.lab=null;return _to.apply(this,arguments)};var _eo=ecOpen;ecOpen=function(){SJV.lab=null;return _eo.apply(this,arguments)}}catch(e){}
try{var _cx=ctxNow;ctxNow=function(){try{var v=V();if(v&&view==='sj_'+v.sid){var a=ACT.filter(function(x){return x[0]===v.k})[0];return['Concept lab · '+nm(v.sid),'Section: Concept lab'+(a?', '+a[2]:'')+'\nSubject: '+nm(v.sid)+'\nOn screen:\n'+app.innerText.slice(0,1200)+'\n']}}catch(e){}return _cx.apply(this,arguments)}}catch(e){}
try{if(typeof tutorText==='function'){var _tt=tutorText;tutorText=function(){var t=_tt.apply(this,arguments);try{if(typeof t!=='string')return t;var wk=Date.now()-7*864e5,c={};S.ev.forEach(function(e){if(e.k==='lab'&&e.ts>=wk)c[e.topic]=(c[e.topic]||0)+1});var ks=Object.keys(c);if(ks.length)t+='\nConcept lab this week: '+ks.map(function(k){return k+' '+c[k]}).join(', ')+' activities.'}catch(e){}return t}}}catch(e){}
})();
/*SPLUS-END*/

;

/*TPACK-START*/
/*TPACK: Practise > Tutor pack. For each maths chapter: a two-hour practice sheet (PDF) and a separate answer key (PDF)
  with the strategy, full steps, alternative methods, a detailed explanation, common slips and a check for every question.
  Built with Claude in the app, then every answer is solved a second time independently and flagged if the two disagree.
  Saved on this device only (localStorage 'sb_tpack'), not in the cloud copy. No student details appear in either document. */
(function(){
var LSK='sb_tpack',TP={id:null,busy:false,err:'',paste:'',pv:null};
var CHL=[['#','Term I'],['qe','Quadratic Equations'],['ie','Inequalities'],['ar','Angles and Arc Length'],['tg','Trigonometric Functions'],['ca','Compound and Multiple Angles'],['pc','Permutations and Combinations'],['bt','Binomial Theorem'],['se','Sets'],['rf','Relations and Functions'],['lm','Limits'],['dv','Differentiation'],
 ['#','Term II'],['cx','Complex Numbers'],['ss','Sequences and Series'],['pt','Coordinate Geometry: Points and their Coordinates'],['sl','The Straight Line'],['ci','Circles'],['pr','Probability'],['cs','Conic Sections: Parabola, Ellipse and Hyperbola'],['td','Introduction to 3D Geometry'],['md','Measures of Dispersion']];
function cname(id){var r=CHL.filter(function(c){return c[0]===id})[0];return r?r[1]:id}
function ld(){try{return JSON.parse(localStorage.getItem(LSK)||'{}')}catch(e){return{}}}
function C(id){return ld()[id]||null}
function put(id,c){var o=ld(),ks;c.ts=Date.now();o[id]=c;ks=Object.keys(o);if(ks.length>8){ks.sort(function(a,b){return(o[a].ts||0)-(o[b].ts||0)});delete o[ks[0]]}try{localStorage.setItem(LSK,JSON.stringify(o))}catch(e){}}
function H(s){return esc(String(s==null?'':s)).replace(/\n/g,'<br>')}
function tot(c,k){return c.qs.reduce(function(s,q){return s+(q[k]||0)},0)}
function setMsg(t){var m=document.getElementById('tpMsg');if(m)m.textContent=t}
async function cl(p){var e0;for(var t=0;t<2;t++){try{var s=await getS();if(!s)throw{nos:1};var d=await s.json(p,{cache:false,modelTier:'default'});if(d)return d}catch(e){e0=e;if(e&&e.nos)throw e}}throw e0||new Error('shape')}
var MATHNOTE='Write maths in plain text with Unicode (x², x₁, √, π, ≤, ≥, ≠, ∈, ∞, a/b, (a+b)/(c+d)), never LaTeX or dollar signs.';

/* ---------- building ---------- */
async function stPlan(id,c){
  var name=cname(id),seeds=BX.filter(function(e){return e.c===id}).map(function(e){return e.q}).slice(0,6),own=c.own||[];
  var p='You are an experienced ISC senior secondary maths teacher preparing a two-hour (120 minute) tutoring session on one chapter.\nChapter: '+name+'\nWrite the practice sheet as a list of original questions in the style of the worked examples and exercises in standard ISC maths textbooks. Cover every standard question type that a textbook example would cover for this chapter, ordered from the simplest to the hardest, so that a tutor who works through the sheet has covered the chapter. Do not copy any textbook’s wording or numbers.\n'
   +(seeds.length?'Include these questions as they are:\n- '+seeds.join('\n- ')+'\n':'')
   +(own.length?'The tutor also supplied these questions from the book in use. Include every one, fixing only obvious typing errors:\n- '+own.join('\n- ')+'\n':'')
   +'Give each question a realistic time in minutes for a student working on paper, and marks from 1 to 8. The times must add up to between 110 and 120 minutes, with 10 to 16 questions. Every question must be a complete instruction (Find…, Prove that…, Solve…) holding every number it needs. '+MATHNOTE+'\nReturn JSON only: {"types":["each question type covered, 3 to 8 words"],"qs":[{"q":"the question","marks":3,"mins":8,"kind":"routine, concept, application or proof"}]}';
  var d=await cl(p);if(!d||!Array.isArray(d.qs)||d.qs.length<6)throw new Error('shape');
  var qs=d.qs.filter(function(x){return x&&x.q}).map(function(x){return{q:String(x.q),m:Math.max(1,Math.min(8,Math.round(+x.marks)||2)),t:Math.max(3,Math.round(+x.mins)||8),k:String(x.kind||'')}}).slice(0,18);
  var T=qs.reduce(function(s,q){return s+q.t},0);if(T<100||T>125){var f=116/T;qs.forEach(function(q){q.t=Math.max(3,Math.round(q.t*f))})}
  c.qs=qs;c.types=(d.types||[]).map(String).slice(0,12);c.sol={};c.ver=null;c.done=0}
async function stSol(id,c,i){
  var B=[i];if(c.qs[i+1])B.push(i+1);
  var p='You are an experienced ISC senior secondary maths teacher writing the answer key for a tutor. Chapter: '+cname(id)+'.\nWrite a complete worked solution for each question below. The tutor will teach from it, so it must be mathematically exact and elaborate.\n'
   +B.map(function(k,j){return'Question '+(j+1)+' ['+c.qs[k].m+' marks, about '+c.qs[k].t+' minutes]: '+c.qs[k].q}).join('\n')
   +'\n\nFor each question give:\n- "strategy": 3 to 5 sentences written BEFORE any calculation: what kind of problem this is, which idea or result unlocks it, and the plan in order.\n- "steps": at least 4 steps, each {"do":"the working, one move","why":"the reason for that move"}.\n- "answer": the final answer, stated clearly.\n- "methods": one or two genuinely different alternative methods, each {"name":"...","when":"when this method is the better choice","steps":["worked line","worked line"]}. If no real alternative exists, return an empty list.\n- "explain": 120 to 200 words on WHY the method works and the concept behind it, so the student can recognise the same pattern in other questions.\n- "slips": 2 or 3 common mistakes students make on this type.\n- "check": one line saying how to verify the answer.\n'+MATHNOTE+'\nReturn JSON only: {"items":[{"strategy":"","steps":[{"do":"","why":""}],"answer":"","methods":[],"explain":"","slips":[],"check":""}]} with one item per question, in order.';
  var d=await cl(p);if(!d||!Array.isArray(d.items)||d.items.length<B.length)throw new Error('shape');
  B.forEach(function(k,j){var x=d.items[j];if(!x||!x.strategy||!Array.isArray(x.steps)||x.steps.length<2||x.answer==null)throw new Error('shape');
    c.sol[k]={s:String(x.strategy),st:x.steps.map(function(y){return{d:String(y.do||y.d||''),w:String(y.why||y.w||'')}}),a:String(x.answer),m:(x.methods||[]).slice(0,2).map(function(y){return{n:String(y.name||'Another way'),w:String(y.when||''),s:(y.steps||[]).map(String)}}),e:String(x.explain||''),sl:(x.slips||[]).map(String).slice(0,4),c:String(x.check||'')}})}
async function stVer(id,c){
  var L=c.qs.map(function(q,i){return(i+1)+'. '+q.q}).join('\n');
  var d=await cl('Solve each of these maths questions carefully and independently. Give only the final answer to each, short.\n'+L+'\n'+MATHNOTE+'\nReturn JSON only: {"a":[{"n":1,"ans":"final answer"}]}');
  if(!d||!Array.isArray(d.a))throw new Error('shape');var ind={};d.a.forEach(function(x){if(x&&x.n!=null)ind[+x.n]=String(x.ans)});
  var P=c.qs.map(function(q,i){return(i+1)+'. Answer A: '+c.sol[i].a+'  |  Answer B: '+(ind[i+1]||'(none)')}).join('\n');
  var j=await cl('Two people answered the same maths questions. For each, decide whether Answer A and Answer B agree mathematically. Equivalent forms agree (1/2 and 0.5, or x = 3 and 3). A missing answer does not agree.\n'+P+'\nReturn JSON only: {"r":[{"n":1,"agree":true,"note":"if they differ, a few words on how"}]}');
  if(!j||!Array.isArray(j.r))throw new Error('shape');var v={};j.r.forEach(function(x){if(x&&x.n!=null)v[+x.n-1]={ok:!!x.agree,ind:ind[+x.n]||'',note:String(x.note||'')}});c.ver=v}
window.tpBuild=async function(id){
  if(TP.busy)return;TP.id=id;var c=C(id)||{id:id,qs:null,sol:{},ver:null};
  if(!c.qs){c.own=(TP.paste||'').split('\n').map(function(x){return x.trim()}).filter(function(x){return x.length>8}).slice(0,20)}
  TP.busy=true;TP.err='';tpView();
  try{
    if(!c.qs){setMsg('Planning a two-hour sheet…');await stPlan(id,c);put(id,c)}
    for(var i=0;i<c.qs.length;i+=2){if(c.sol[i]&&(!c.qs[i+1]||c.sol[i+1]))continue;setMsg('Writing worked solutions: questions '+(i+1)+(c.qs[i+1]?' and '+(i+2):'')+' of '+c.qs.length+'…');await stSol(id,c,i);put(id,c)}
    if(!c.ver){setMsg('Checking every answer with a second, independent solve…');await stVer(id,c);put(id,c)}
    c.done=1;put(id,c)
  }catch(e){TP.err=e&&e.nos?'Claude is not available here. Open the app while signed in to claude.ai, then tap Continue.':e&&e.code?sampleErr(e):'Claude’s answer came back in the wrong shape. Tap Continue to try again; what is finished is kept.'}
  finally{TP.busy=false}
  if(view==='tp')tpView()};
window.tpRebuild=function(id){var o=ld();delete o[id];try{localStorage.setItem(LSK,JSON.stringify(o))}catch(e){}TP.pv=null;TP.err='';tpView()};

/* ---------- the two documents ---------- */
var CSS='@page{size:A4;margin:16mm 15mm 18mm;@bottom-center{content:counter(page);font:9pt sans-serif;color:#666}}*{box-sizing:border-box}body{font:11.5pt/1.5 Georgia,"Times New Roman",serif;color:#111;margin:0}h1{font:700 19pt/1.2 sans-serif;margin:0 0 4px}h2{font:700 13pt/1.3 sans-serif;margin:0 0 6px;break-after:avoid}h3{font:700 10.5pt/1.3 sans-serif;margin:12px 0 4px;text-transform:uppercase;letter-spacing:.04em;color:#333;break-after:avoid}.meta{font:10pt sans-serif;color:#444;margin:0 0 10px}.rule{border-bottom:2px solid #111;margin:6px 0 12px}.note{font:10pt/1.45 sans-serif;border:1px solid #999;padding:6px 9px;margin:0 0 12px}.q{break-inside:avoid;margin:0 0 6mm}.qh{font:700 10.5pt sans-serif;display:flex;justify-content:space-between;gap:10px;border-bottom:1px solid #bbb;padding-bottom:2px;margin-bottom:4px}.qh span{font-weight:400;color:#444}.qt{font-size:12pt}.sp{border-left:2px dotted #bbb;margin-top:3mm}table{border-collapse:collapse;width:100%;font:10pt sans-serif;margin:6px 0 12px}td,th{border:1px solid #999;padding:3px 7px;text-align:left}th{background:#eee}.sol{margin:0 0 9mm}.box{border:1.5px solid #111;padding:6px 10px;margin:8px 0;break-inside:avoid}.box h3{margin-top:0}.box p{margin:0}ol.st{padding-left:1.4em;margin:4px 0}ol.st li{margin:0 0 5px;break-inside:avoid}.why{font:10pt/1.4 sans-serif;color:#444}.ans{border:2px solid #111;padding:5px 10px;margin:8px 0;font-weight:700;break-inside:avoid}.warn{font:10pt/1.4 sans-serif;border:2px solid #b00;color:#900;padding:5px 9px;margin:6px 0}.when{font:10pt sans-serif;color:#444;margin:0 0 3px}ul{margin:3px 0;padding-left:1.3em}.chk{font:10.5pt sans-serif;margin:8px 0 0}.pb{break-before:page}';
var LASTB='';function doc(t,body){LASTB=body;return'<!doctype html><html><head><meta charset="utf-8"><title>'+esc(t)+'</title><style>'+CSS+'</style></head><body>'+body+'</body></html>'}
function qhead(c,i){var q=c.qs[i],by=c.qs.slice(0,i+1).reduce(function(s,x){return s+x.t},0);return'<span>'+q.m+' mark'+(q.m>1?'s':'')+' · about '+q.t+' min · aim to be done by '+Math.floor(by/60)+':'+('0'+by%60).slice(-2)+'</span>'}
function sheetDoc(c){var n=cname(c.id),b='<h1>Maths practice · '+H(n)+'</h1><div class="meta">Time allowed: 2 hours · Total marks: '+tot(c,'m')+' · '+c.qs.length+' questions · Study Buddy tutor pack</div><div class="rule"></div><div class="note">Work in the space under each question or on separate paper. Show every step: marks are for method as well as for the answer. The time shown beside each question is a guide for keeping to two hours.</div>';
  c.qs.forEach(function(q,i){b+='<div class="q"><div class="qh"><b>Question '+(i+1)+'</b>'+qhead(c,i)+'</div><div class="qt">'+H(q.q)+'</div><div class="sp" style="height:'+Math.max(24,Math.min(90,q.t*4.5))+'mm"></div></div>'});
  return doc('Practice sheet · '+n,b)}
function keyDoc(c){var n=cname(c.id),b='<h1>Answer key and worked solutions · '+H(n)+'</h1><div class="meta">For the tutor · Total marks: '+tot(c,'m')+' · Study Buddy tutor pack</div><div class="rule"></div>';
  var bad=c.ver?Object.keys(c.ver).filter(function(k){return!c.ver[k].ok}).length:0;
  b+='<div class="note">Each question opens with the solution strategy, then the full steps with the reason for every move, then other methods and a detailed explanation. The solutions were written with Claude and every answer was then solved a second time independently.'+(bad?' <b>'+bad+' answer'+(bad>1?'s':'')+' marked ⚠ did not match the second solve: please check '+(bad>1?'those':'that one')+' before teaching from it.</b>':' All answers matched the second solve. Please still read them before teaching.')+'</div>';
  b+='<h3>Time plan for the two hours</h3><table><tr><th>Q</th><th>Marks</th><th>Minutes</th><th>Be done by</th><th>Kind</th></tr>';var run=0;c.qs.forEach(function(q,i){run+=q.t;b+='<tr><td>'+(i+1)+'</td><td>'+q.m+'</td><td>'+q.t+'</td><td>'+Math.floor(run/60)+':'+('0'+run%60).slice(-2)+'</td><td>'+H(q.k)+'</td></tr>'});b+='</table>';
  if(c.types&&c.types.length)b+='<h3>Question types covered</h3><ul>'+c.types.map(function(t){return'<li>'+H(t)+'</li>'}).join('')+'</ul>';
  c.qs.forEach(function(q,i){var s=c.sol[i],v=c.ver&&c.ver[i];b+='<section class="sol pb"><h2>Question '+(i+1)+' <small style="font:400 10pt sans-serif;color:#444">· '+q.m+' mark'+(q.m>1?'s':'')+' · about '+q.t+' min</small></h2><div class="qt">'+H(q.q)+'</div>';
    if(v&&!v.ok)b+='<div class="warn">⚠ A second, independent solve gave “'+H(v.ind||'no answer')+'”'+(v.note?' ('+H(v.note)+')':'')+', which does not match the answer below. Please check this question before teaching from it.</div>';
    b+='<div class="box"><h3>Solution strategy</h3><p>'+H(s.s)+'</p></div><h3>Step-by-step solution</h3><ol class="st">'+s.st.map(function(x){return'<li>'+H(x.d)+(x.w?'<div class="why">Why: '+H(x.w)+'</div>':'')+'</li>'}).join('')+'</ol><div class="ans">Answer: '+H(s.a)+'</div>';
    s.m.forEach(function(m){b+='<h3>Alternative method: '+H(m.n)+'</h3>'+(m.w?'<p class="when">Best when: '+H(m.w)+'</p>':'')+'<ol class="st">'+m.s.map(function(x){return'<li>'+H(x)+'</li>'}).join('')+'</ol>'});
    if(s.e)b+='<h3>Why this works</h3><p>'+H(s.e)+'</p>';
    if(s.sl.length)b+='<h3>Common slips</h3><ul>'+s.sl.map(function(x){return'<li>'+H(x)+'</li>'}).join('')+'</ul>';
    if(s.c)b+='<p class="chk"><b>Check:</b> '+H(s.c)+'</p>';
    b+='</section>'});
  return doc('Answer key · '+n,b)}
function docOf(w){var c=C(TP.id);return w==='q'?sheetDoc(c):keyDoc(c)}
function fname(w){return'StudyBuddy-'+cname(TP.id).replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'')+(w==='q'?'-practice-sheet':'-answer-key')}
window.tpPrint=function(w){var f=document.createElement('iframe');f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0';document.body.appendChild(f);
  f.onload=function(){try{f.contentWindow.focus();f.contentWindow.print()}catch(e){showToast('Printing is blocked here. Use Download file, then print it from your browser.')}setTimeout(function(){try{f.remove()}catch(e){}},120000)};f.srcdoc=docOf(w)};
function saveBlob(blob,name,okMsg){return(async function(){var D=null;try{D=window.claude&&claude.use?await claude.use('downloads'):null}catch(e){D=null}
  if(D){try{await D.save({filename:name,data:blob});showToast(okMsg);return}catch(e){if(e&&e.code==='declined')return;showToast('The viewer could not save this file here.');return}}
  try{var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){a.remove()},2000);showToast(okMsg)}catch(e){showToast('Saving is blocked here. Open the app in a normal browser tab and try again.')}})()}
window.tpDown=function(w){saveBlob(new Blob([docOf(w)],{type:'text/html'}),fname(w)+'.html','Saved. Open the file and choose Print, then Save as PDF.')};
/* real PDF: each page is drawn from the document and packed into a small PDF file */
var PW=794,PH=1123,PM=57,PS=2;
function measure(w){docOf(w);var css=CSS.replace(/@page\{[^{}]*\{[^{}]*\}\}/,'').replace('body{','.pg{'),m=document.createElement('div');m.style.cssText='position:absolute;left:-9999px;top:0;width:'+(PW-2*PM)+'px';m.innerHTML='<style>'+css+'</style><div class="pg">'+LASTB+'</div>';document.body.appendChild(m);
  var base=m.getBoundingClientRect().top,A=[].slice.call(m.querySelectorAll('li,p,tr,h1,h2,h3,.qt,.ans,.warn,.box,.q,.note,.meta,.rule,table,.qh')).filter(function(e){return!(e.tagName==='P'&&e.parentNode.classList.contains('box'))&&!e.closest('.box')||e.classList.contains('box')}).map(function(e){var r=e.getBoundingClientRect();return{t:r.top-base,b:r.bottom-base,h:/^H[123]$/.test(e.tagName),pb:e.classList.contains('pb')||(e.parentNode&&e.parentNode.classList&&e.parentNode.classList.contains('pb')&&e.previousElementSibling==null)}});
  var forced=[].slice.call(m.querySelectorAll('.pb')).map(function(e){return e.getBoundingClientRect().top-base});
  var Hc=PH-2*PM-6,total=m.getBoundingClientRect().height,cuts=[0],y=0;
  while(total-y>Hc){var lim=y+Hc,f=forced.filter(function(z){return z>y+4&&z<=lim})[0],c;
    if(f!=null)c=f;else{c=null;var cand=A.map(function(a){return a.t}).filter(function(z){return z>y+60&&z<=lim}).sort(function(a,b){return b-a});
      for(var i=0;i<cand.length&&c==null;i++){var z=cand[i];if(!A.some(function(a){return a.t<z-1&&a.b>z+1&&!a.h}))c=z}
      if(c!=null){var moved=1;while(moved){moved=0;A.forEach(function(a){if(a.h&&Math.abs(a.b-c)<14&&a.t>y+60){c=a.t;moved=1}})}}
      if(c==null)c=lim}
    cuts.push(c);y=c}
  m.style.cssText='';var html=new XMLSerializer().serializeToString(m);document.body.removeChild(m);return{html:html,css:css,cuts:cuts,total:total}}
function rastPage(M,i){return new Promise(function(res,rej){var y0=M.cuts[i],n=M.cuts.length,cy=i+1<n?Math.round(PM+(M.cuts[i+1]-y0)):PH,
  svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+PW+'" height="'+PH+'"><foreignObject x="0" y="0" width="'+PW+'" height="'+PH+'"><div xmlns="http://www.w3.org/1999/xhtml" style="position:relative;width:'+PW+'px;height:'+PH+'px;overflow:hidden;background:#fff"><div style="position:absolute;left:'+PM+'px;top:'+(PM-y0)+'px;width:'+(PW-2*PM)+'px">'+M.html+'</div><div style="position:absolute;left:0;right:0;top:'+cy+'px;height:'+(PH-cy)+'px;background:#fff"></div><div style="position:absolute;left:0;right:0;top:0;height:'+(PM-6)+'px;background:#fff"></div></div></foreignObject></svg>',
  im=new Image();im.onload=function(){try{var cv=document.createElement('canvas');cv.width=PW*PS;cv.height=PH*PS;var x=cv.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,cv.width,cv.height);x.drawImage(im,0,0,cv.width,cv.height);x.fillStyle='#666';x.font=(9*PS*1.33)+'px sans-serif';x.textAlign='center';x.fillText(String(i+1)+' / '+n,cv.width/2,cv.height-PM*PS*.45);
    cv.toBlob(function(b){if(!b)return rej(new Error('blob'));b.arrayBuffer().then(function(ab){res({u:new Uint8Array(ab),w:cv.width,h:cv.height})})},'image/jpeg',.88)}catch(e){rej(e)}};im.onerror=function(){rej(new Error('img'))};im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg)})}
function pdfBlob(P){var enc=new TextEncoder(),parts=[],off=0,xr=[],N=P.length;function add(x){var u=typeof x==='string'?enc.encode(x):x;parts.push(u);off+=u.length}function obj(n,b){xr[n]=off;add(n+' 0 obj\n'+b+'\nendobj\n')}
  add('%PDF-1.4\n');obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,'<< /Type /Pages /Count '+N+' /Kids ['+P.map(function(p,i){return(3+3*i)+' 0 R'}).join(' ')+'] >>');
  P.forEach(function(p,i){var pg=3+3*i,ct=pg+1,im=pg+2,cs='q 595.28 0 0 841.89 0 0 cm /Im0 Do Q';obj(pg,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 '+im+' 0 R >> >> /Contents '+ct+' 0 R >>');obj(ct,'<< /Length '+cs.length+' >>\nstream\n'+cs+'\nendstream');
    xr[im]=off;add(im+' 0 obj\n<< /Type /XObject /Subtype /Image /Width '+p.w+' /Height '+p.h+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+p.u.length+' >>\nstream\n');add(p.u);add('\nendstream\nendobj\n')});
  var xo=off,max=2+3*N;add('xref\n0 '+(max+1)+'\n0000000000 65535 f \n');for(var k=1;k<=max;k++)add(('0000000000'+xr[k]).slice(-10)+' 00000 n \n');add('trailer\n<< /Size '+(max+1)+' /Root 1 0 R >>\nstartxref\n'+xo+'\n%%EOF');return new Blob(parts,{type:'application/pdf'})}
window.tpMkPdf=async function(w){var M=measure(w),P=[];for(var i=0;i<M.cuts.length;i++){P.push(await rastPage(M,i))}return pdfBlob(P)};
var PDFBUSY=false;
window.tpPdf=async function(w){if(PDFBUSY)return;PDFBUSY=true;showToast('Making the PDF…');try{var b=await tpMkPdf(w);await saveBlob(b,fname(w)+'.pdf','PDF saved.')}catch(e){showToast('Could not make the PDF here. Use Print, or Save as web page, then print that.')}finally{PDFBUSY=false}};
window.tpPreview=function(w){TP.pv=TP.pv===w?null:w;tpView()};

/* ---------- screens ---------- */
window.tpOpen=function(id){TP.id=id;TP.pv=null;TP.err='';if(!TP.busy)TP.paste='';tpView();window.scrollTo(0,0)};
window.tpHome=function(){TP.id=null;TP.pv=null;tpView();window.scrollTo(0,0)};
function pill(id){var c=C(id);return c?(c.done?'<span class="pill ok">Ready</span>':'<span class="pill mid">Part built</span>'):''}
function tpView(){
  if(!TP.id){var h='<h1>Tutor pack</h1><p class="sub">For a tutor session. Choose a chapter and get two PDFs: a two-hour practice sheet, and a separate answer key. The key opens each question with the solution strategy, then the full steps, other methods and a detailed explanation.</p><div class="card">';
    CHL.forEach(function(r){if(r[0]==='#')h+='<div class="eyebrow" style="margin:10px 0 2px">'+r[1]+'</div>';else h+='<button class="trow" onclick="tpOpen(\''+r[0]+'\')"><span class="tt"><b>'+esc(r[1])+'</b></span>'+pill(r[0])+'</button>'});
    app.innerHTML=h+'</div>';return}
  var id=TP.id,c=C(id),n=cname(id),h='<button class="link back" onclick="tpHome()" style="margin-bottom:8px">‹ Tutor pack</button><h1>'+esc(n)+'</h1>';
  if(TP.busy){app.innerHTML=h+'<div class="card"><b>Building the pack</b><p class="sub" id="tpMsg" aria-live="polite" style="margin:6px 0 0">Starting…</p><p class="sub" style="margin:8px 0 0">This takes several minutes. Keep this page open. Finished parts are saved as it goes.</p></div>';return}
  if(c&&c.done&&c.qs){var bad=c.ver?Object.keys(c.ver).filter(function(k){return!c.ver[k].ok}).length:0;
    h+='<p class="sub">'+c.qs.length+' questions · '+tot(c,'m')+' marks · 2 hours</p>';
    [['q','Practice sheet','The questions only, with the time to aim for and space to work.'],['k','Answer key','Strategy first, then full steps, other methods, a detailed explanation, common slips and a check, for every question.'+(bad?' '+bad+' answer'+(bad>1?'s':'')+' flagged ⚠ for checking.':'')]].forEach(function(x){
      h+='<div class="card"><b>'+x[1]+'</b><p class="sub" style="margin:4px 0 6px">'+x[2]+'</p><div class="row2"><button class="btn" onclick="tpPdf(\''+x[0]+'\')">Save as PDF</button><button class="btn alt" onclick="tpPrint(\''+x[0]+'\')">Print</button></div><button class="link" onclick="tpPreview(\''+x[0]+'\')" style="margin-top:6px">'+(TP.pv===x[0]?'Hide preview':'Preview')+'</button> <button class="link" onclick="tpDown(\''+x[0]+'\')" style="margin:6px 0 0 12px">Save as web page</button>'+(TP.pv===x[0]?'<iframe id="tpPv" title="Preview" style="width:100%;height:70vh;border:1px solid var(--line);border-radius:10px;margin-top:8px;background:#fff"></iframe>':'')+'</div>'});
    h+='<div class="card"><b>Another round</b><p class="sub" style="margin:4px 0 6px">Build a new sheet for this chapter, optionally with questions from the book your tutor uses. The current pack is replaced.</p><button class="btn alt" onclick="tpRebuild(\''+id+'\')">Start over for this chapter</button></div>';
    app.innerHTML=h;if(TP.pv){var f=document.getElementById('tpPv');if(f)f.srcdoc=docOf(TP.pv)}return}
  h+='<p class="sub">A two-hour practice sheet and a separate answer key, built for this chapter.</p>';
  if(c&&c.qs)h+='<div class="card"><b>Part built</b><p class="sub" style="margin:4px 0 0">'+c.qs.length+' questions planned, '+Object.keys(c.sol).length+' solved so far.</p>'+(TP.err?'<div class="fb bad" style="margin-top:8px">'+esc(TP.err)+'</div>':'')+'<button class="btn" onclick="tpBuild(\''+id+'\')">Continue building</button></div>';
  else h+='<div class="card"><label for="tpPaste"><b>Questions from your tutor’s book (optional)</b></label><p class="sub" style="margin:4px 0 4px">Type or paste them, one per line. Every one goes onto the sheet and into the answer key, and Claude fills the rest of the two hours with the other standard types for the chapter.</p><textarea id="tpPaste" rows="5" placeholder="One question per line" oninput="TP_paste(this.value)">'+esc(TP.paste||'')+'</textarea>'+(TP.err?'<div class="fb bad" style="margin-top:8px">'+esc(TP.err)+'</div>':'')+'<button class="btn" onclick="tpBuild(\''+id+'\')">Build the pack</button><p class="sub" style="margin:8px 0 0">Questions are written fresh in the style of standard ISC textbook examples. They are not copied from any book.</p></div>';
  app.innerHTML=h}
window.TP_paste=function(v){TP.paste=v};

/* ---------- hooks ---------- */
try{var G=GRP.maths;if(G&&!G.some(function(t){return t[0]==='tp'}))G.push(['tp','Tutor']);
  if(window.MSEC)MSEC.forEach(function(s){if(s[0]==='prac'&&s[2].indexOf('tp')<0)s[2].push('tp')});
  if(typeof SECN!=='undefined')SECN.tp='Tutor pack'}catch(e){}
var _sb2=subBar;subBar=function(){_sb2();try{document.querySelectorAll('#sub .segs2 button').forEach(function(b){var o=b.getAttribute('onclick')||'';if(o.indexOf("goView('tp')")>=0&&b.firstChild&&b.firstChild.nodeType===3)b.firstChild.nodeValue='Tutor'})}catch(e){}};

})();
/*TPACK-END*/

;

/*TPACK2-START*/
/*TPACK2 (replaces TPACK): Practise > Tutor. For every maths chapter in the syllabus:
  1. a chapter question paper covering the worked-example types, with no time limit (PDF, print, or a web version to send);
  2. a separate answer key: strategy first, full steps with reasons, alternative methods, a detailed explanation, slips and a check;
  3. upload photos of the student's answer sheet: Claude marks it against the key, the lost marks go to My mistakes with the kind
     of slip, the weak spots are saved, and a follow-up paper can be built on exactly those weak spots.
  Papers and keys are kept on this device (localStorage 'sb_tpack2'); marking results are saved with the rest of the progress. */
(function(){
var LSK='sb_tpack2',TP={k:null,busy:false,err:'',paste:'',pv:null,files:[],mk:false,merr:'',all:null};
var CHL=[['#','Term I'],['qe','Quadratic Equations'],['ie','Inequalities'],['ar','Angles and Arc Length'],['tg','Trigonometric Functions'],['ca','Compound and Multiple Angles'],['pc','Permutations and Combinations'],['bt','Binomial Theorem'],['se','Sets'],['rf','Relations and Functions'],['lm','Limits'],['dv','Differentiation'],
 ['#','Term II'],['cx','Complex Numbers'],['ss','Sequences and Series'],['pt','Coordinate Geometry: Points and their Coordinates'],['sl','The Straight Line'],['ci','Circles'],['pr','Probability'],['cs','Conic Sections: Parabola, Ellipse and Hyperbola'],['td','Introduction to 3D Geometry'],['md','Measures of Dispersion']];
function base(k){return String(k).replace(/_f$/,'')}
function isF(k){return/_f$/.test(k)}
function cname(k){var id=base(k),r=CHL.filter(function(c){return c[0]===id})[0];return r?r[1]:id}
function title(k){return cname(k)+(isF(k)?' · follow-up':'')}
function ld(){try{return JSON.parse(localStorage.getItem(LSK)||'{}')}catch(e){return{}}}
function C(k){return ld()[k]||null}
function put(k,c){var o=ld();c.ts=Date.now();o[k]=c;try{localStorage.setItem(LSK,JSON.stringify(o))}catch(e){throw{full:1}}}
function drop(k){var o=ld();delete o[k];try{localStorage.setItem(LSK,JSON.stringify(o))}catch(e){}}
function W(){S.tpw=S.tpw||{};return S.tpw}
function weakOf(id){var a=W()[id],b=W()[id+'_f'],w=a&&b?(b.ts>a.ts?b:a):(a||b);return w&&w.weak?w.weak:[]}
function stu(){return window.ROLE==='student'||window.ROLE==='guest'}
function H(s){return esc(String(s==null?'':s)).replace(/\n/g,'<br>')}
function tot(c){return c.qs.reduce(function(s,q){return s+(q.m||0)},0)}
function setMsg(t){var m=document.getElementById('tpMsg');if(m)m.textContent=t}
function fm(x){return String(Math.round(x*2)/2)}
async function cl(p,ims){var e0;for(var t=0;t<2;t++){try{var s=await getS();if(!s)throw{nos:1};var o={cache:false,modelTier:'default'};if(ims)o.images=ims;var d=await s.json(p,o);if(d)return d}catch(e){e0=e;if(e&&e.nos)throw e}}throw e0||new Error('shape')}
var MATHNOTE='Write maths in plain text with Unicode (x², x₁, √, π, ≤, ≥, ≠, ∈, ∞, a/b, (a+b)/(c+d)), never LaTeX or dollar signs.';
var TEACH='You are an experienced ISC senior secondary maths teacher (first year of the two-year course).';

/* ---------- building ---------- */
async function stPlan(k,c){
  var id=base(k),name=cname(k),weak=weakOf(id).map(function(x){return x.name+(x.why?' ('+x.why+')':'')}),p;
  if(isF(k)){var main=C(id),w=W()[id]||{},lost=main&&w.res?Object.keys(w.res).filter(function(i){return w.res[i].v!=='right'&&main.qs[i]}).map(function(i){return main.qs[i].q.slice(0,140)+' [went wrong: '+(w.res[i].w||w.res[i].s||'')+']'}).slice(0,12):[];
    p=TEACH+' A student’s answer sheet for the chapter “'+name+'” has just been marked.\nWeak spots found:\n- '+(weak.join('\n- ')||'general accuracy')+'\n'+(lost.length?'Questions that lost marks:\n- '+lost.join('\n- ')+'\n':'')+'Write a follow-up question paper of 8 to 12 original questions that rebuilds exactly these weak spots. For each weak spot give one easier question first, then two at exam level. Use new numbers: do not repeat the earlier questions. Group the questions under the weak spot they train, as the section name.';
  }else{var seeds=BX.filter(function(e){return e.c===id}).map(function(e){return e.q}).slice(0,8),own=c.own||[];
    p=TEACH+' A tutor works through the worked examples of one chapter with a student, and needs the chapter’s question paper.\nChapter: '+name+'\nWrite original questions in the style of the worked examples in standard ISC maths textbooks, so that together they cover EVERY type of worked example those books give for this chapter: every standard result, method and variation, including the proofs and the applied problems. Group the questions by type under a short section name, and order them from the simplest type to the hardest. Write 18 to 24 questions. There is no time limit and no length limit. Do not copy any textbook’s wording or numbers.\n'
     +(seeds.length?'Include these questions as they are, in the sections where they belong:\n- '+seeds.join('\n- ')+'\n':'')
     +(own.length?'The tutor also supplied these questions from the book in use. Include every one, fixing only obvious typing errors:\n- '+own.join('\n- ')+'\n':'')
     +(weak.length?'An earlier answer sheet showed these weak spots. Add one extra question on each:\n- '+weak.join('\n- ')+'\n':'')+(window.SB_FOCUS?'Where this chapter allows it, include questions that train these known weak habits: '+SB_FOCUS.join('; ')+'.\n':'')}
  p+='\nEvery question must be a complete instruction (Find…, Prove that…, Solve…) holding every number it needs, with marks from 1 to 8. '+MATHNOTE+'\nReturn JSON only: {"qs":[{"sec":"section name, 2 to 6 words","q":"the question","marks":3,"kind":"routine, concept, application or proof"}]}';
  var d=await cl(p);if(!d||!Array.isArray(d.qs)||d.qs.length<(isF(k)?4:8))throw new Error('shape');
  c.qs=d.qs.filter(function(x){return x&&x.q}).map(function(x){return{q:String(x.q),m:Math.max(1,Math.min(8,Math.round(+x.marks)||2)),s:String(x.sec||''),k:String(x.kind||'')}}).slice(0,28);c.sol={};c.ver=null;c.done=0}
async function stSol(k,c,i){
  var B=[i];if(c.qs[i+1])B.push(i+1);
  var p=TEACH+' You are writing the answer key for a tutor. Chapter: '+cname(k)+'.\nWrite a complete worked solution for each question below. The tutor will teach from it, so it must be mathematically exact and elaborate.\n'
   +B.map(function(x,j){return'Question '+(j+1)+' ['+c.qs[x].m+' marks]: '+c.qs[x].q}).join('\n')
   +'\n\nFor each question give:\n- "strategy": 3 to 5 sentences written BEFORE any calculation: what kind of problem this is, which idea or result unlocks it, and the plan in order.\n- "steps": every step of the working, at least 4, each {"do":"the working, one move","why":"the reason for that move"}.\n- "answer": the final answer, stated clearly.\n- "methods": EVERY genuinely different alternative method that a student could use (up to three), each {"name":"...","when":"when this method is the better choice","steps":["worked line","worked line"]} worked through to the same answer. If no real alternative exists, return an empty list.\n- "explain": 150 to 250 words on WHY the method works and the concept behind it, so the student can recognise the same pattern in other questions.\n- "slips": 2 or 3 common mistakes students make on this type.\n- "check": one line saying how to verify the answer.\n'+MATHNOTE+'\nReturn JSON only: {"items":[{"strategy":"","steps":[{"do":"","why":""}],"answer":"","methods":[],"explain":"","slips":[],"check":""}]} with one item per question, in order.';
  var d=await cl(p);if(!d||!Array.isArray(d.items)||d.items.length<B.length)throw new Error('shape');
  B.forEach(function(x,j){var y=d.items[j];if(!y||!y.strategy||!Array.isArray(y.steps)||y.steps.length<2||y.answer==null)throw new Error('shape');
    c.sol[x]={s:String(y.strategy),st:y.steps.map(function(z){return{d:String(z.do||z.d||''),w:String(z.why||z.w||'')}}),a:String(y.answer),m:(y.methods||[]).slice(0,3).map(function(z){return{n:String(z.name||'Another way'),w:String(z.when||''),s:(z.steps||[]).map(String)}}),e:String(y.explain||''),sl:(y.slips||[]).map(String).slice(0,4),c:String(y.check||'')}})}
async function stVer(k,c){
  var L=c.qs.map(function(q,i){return(i+1)+'. '+q.q}).join('\n');
  var d=await cl('Solve each of these maths questions carefully and independently. Give only the final answer to each, short. For a proof, answer “proved”.\n'+L+'\n'+MATHNOTE+'\nReturn JSON only: {"a":[{"n":1,"ans":"final answer"}]}');
  if(!d||!Array.isArray(d.a))throw new Error('shape');var ind={};d.a.forEach(function(x){if(x&&x.n!=null)ind[+x.n]=String(x.ans)});
  var P=c.qs.map(function(q,i){return(i+1)+'. Answer A: '+c.sol[i].a+'  |  Answer B: '+(ind[i+1]||'(none)')}).join('\n');
  var j=await cl('Two people answered the same maths questions. For each, decide whether Answer A and Answer B agree mathematically. Equivalent forms agree (1/2 and 0.5, or x = 3 and 3). Two statements that something was proved agree. A missing answer does not agree.\n'+P+'\nReturn JSON only: {"r":[{"n":1,"agree":true,"note":"if they differ, a few words on how"}]}');
  if(!j||!Array.isArray(j.r))throw new Error('shape');var v={};j.r.forEach(function(x){if(x&&x.n!=null)v[+x.n-1]={ok:!!x.agree,ind:ind[+x.n]||'',note:String(x.note||'')}});c.ver=v}
function errText(e){return e&&e.full?'This device has no room left to keep another paper. Open a chapter you no longer need and choose Start over, or clear old site data, then try again.':e&&e.nos?'Claude is not available here. Open the app while signed in to claude.ai, then continue.':e&&e.noimg?'Photo reading is not available on this account.':e&&e.code?sampleErr(e):'Claude’s answer came back in the wrong shape. Tap again to continue; what is finished is kept.'}
async function build(k,own){var c=C(k)||{id:k,qs:null,sol:{},ver:null},pre=TP.all?cname(k)+': ':'';
  if(!c.qs&&own)c.own=own;
  try{
    if(!c.qs){setMsg(pre+'planning the question paper…');await stPlan(k,c);put(k,c)}
    for(var i=0;i<c.qs.length;i+=2){if(c.sol[i]&&(!c.qs[i+1]||c.sol[i+1]))continue;setMsg(pre+'writing worked solutions, questions '+(i+1)+(c.qs[i+1]?' and '+(i+2):'')+' of '+c.qs.length+'…');await stSol(k,c,i);put(k,c)}
    if(!c.ver){setMsg(pre+'checking every answer with a second, independent solve…');await stVer(k,c);put(k,c)}
    c.done=1;put(k,c);return true
  }catch(e){TP.err=errText(e);return false}}
window.tpBuild=async function(k){if(TP.busy)return;TP.k=k;var own=isF(k)?null:(TP.paste||'').split('\n').map(function(x){return x.trim()}).filter(function(x){return x.length>8}).slice(0,30);
  TP.busy=true;TP.err='';tpView();await build(k,own);TP.busy=false;if(view==='tp')tpView()};
window.tpAll=async function(){if(TP.busy)return;var L=CHL.filter(function(r){var c=C(r[0]);return r[0]!=='#'&&!(c&&c.done)}).map(function(r){return r[0]});if(!L.length){showToast('Every chapter is already built.');return}
  TP.busy=true;TP.err='';TP.k=null;TP.all={i:0,n:L.length,id:L[0]};
  for(var i=0;i<L.length;i++){TP.all.i=i;TP.all.id=L[i];if(view==='tp')tpView();if(!await build(L[i]))break}
  TP.busy=false;TP.all=null;if(view==='tp')tpView()};
window.tpRebuild=function(k){drop(k);delete W()[k];save();TP.pv=null;TP.err='';TP.files=[];tpView()};

/* ---------- the two documents ---------- */
var CSS='@page{size:A4;margin:16mm 15mm 18mm;@bottom-center{content:counter(page);font:9pt sans-serif;color:#666}}*{box-sizing:border-box}body{font:11.5pt/1.5 Georgia,"Times New Roman",serif;color:#111;margin:0}h1{font:700 19pt/1.2 sans-serif;margin:0 0 4px}h2{font:700 13pt/1.3 sans-serif;margin:0 0 6px;break-after:avoid}h3{font:700 10.5pt/1.3 sans-serif;margin:12px 0 4px;text-transform:uppercase;letter-spacing:.04em;color:#333;break-after:avoid}.meta{font:10pt sans-serif;color:#444;margin:0 0 10px}.rule{border-bottom:2px solid #111;margin:6px 0 12px}.note{font:10pt/1.45 sans-serif;border:1px solid #999;padding:6px 9px;margin:0 0 12px}.q{break-inside:avoid;margin:0 0 6mm}.qh{font:700 10.5pt sans-serif;display:flex;justify-content:space-between;gap:10px;border-bottom:1px solid #bbb;padding-bottom:2px;margin-bottom:4px}.qh span{font-weight:400;color:#444}.qt{font-size:12pt}.sp{border-left:2px dotted #bbb;margin-top:3mm}table{border-collapse:collapse;width:100%;font:10pt sans-serif;margin:6px 0 12px}td,th{border:1px solid #999;padding:3px 7px;text-align:left}th{background:#eee}.sol{margin:0 0 9mm}.box{border:1.5px solid #111;padding:6px 10px;margin:8px 0;break-inside:avoid}.box h3{margin-top:0}.box p{margin:0}ol.st{padding-left:1.4em;margin:4px 0}ol.st li{margin:0 0 5px;break-inside:avoid}.why{font:10pt/1.4 sans-serif;color:#444}.ans{border:2px solid #111;padding:5px 10px;margin:8px 0;font-weight:700;break-inside:avoid}.warn{font:10pt/1.4 sans-serif;border:2px solid #b00;color:#900;padding:5px 9px;margin:6px 0}.when{font:10pt sans-serif;color:#444;margin:0 0 3px}ul{margin:3px 0;padding-left:1.3em}.chk{font:10.5pt sans-serif;margin:8px 0 0}.pb{break-before:page}.sec{font:700 11pt sans-serif;border-bottom:2px solid #111;margin:6mm 0 4mm;padding-bottom:2px;break-after:avoid}';
var LASTB='';var LASTB='';function doc(t,body){LASTB=body;return'<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(t)+'</title><style>'+CSS+'@media screen{body{max-width:820px;margin:0 auto;padding:16px}}</style></head><body>'+body+'</body></html>'}
function mk(q){return q.m+' mark'+(q.m>1?'s':'')}
function sheetDoc(c){var n=title(c.id),ls='',b='<h1>Maths question paper · '+H(n)+'</h1><div class="meta">'+c.qs.length+' questions · Total marks: '+tot(c)+' · No time limit · Study Buddy tutor pack</div><div class="rule"></div><div class="note">Work under each question or on separate paper, and write the question number beside your working. Show every step: marks are for method as well as for the answer.</div>';
  c.qs.forEach(function(q,i){if(q.s&&q.s!==ls){ls=q.s;b+='<div class="sec">'+H(q.s)+'</div>'}b+='<div class="q"><div class="qh"><b>Question '+(i+1)+'</b><span>'+mk(q)+'</span></div><div class="qt">'+H(q.q)+'</div><div class="sp" style="height:'+(22+q.m*9)+'mm"></div></div>'});
  return doc('Question paper · '+n,b)}
function keyDoc(c){var n=title(c.id),b='<h1>Answer key and worked solutions · '+H(n)+'</h1><div class="meta">'+c.qs.length+' questions · Total marks: '+tot(c)+' · Study Buddy tutor pack</div><div class="rule"></div>';
  var bad=c.ver?Object.keys(c.ver).filter(function(k){return!c.ver[k].ok}).length:0;
  b+='<div class="note">Each question opens with the solution strategy, then every step with the reason for it, then the other methods and a detailed explanation. The solutions were written with Claude and every answer was then solved a second time independently.'+(bad?' <b>'+bad+' answer'+(bad>1?'s':'')+' marked ⚠ did not match the second solve: please check '+(bad>1?'those':'that one')+' before teaching from it.</b>':' All answers matched the second solve. Please still read them before teaching.')+'</div>';
  b+='<h3>Quick answers</h3><table><tr><th>Q</th><th>Type</th><th>Marks</th><th>Answer</th></tr>';c.qs.forEach(function(q,i){var v=c.ver&&c.ver[i];b+='<tr><td>'+(i+1)+'</td><td>'+H(q.s)+'</td><td>'+q.m+'</td><td>'+(v&&!v.ok?'⚠ ':'')+H(c.sol[i].a)+'</td></tr>'});b+='</table>';
  c.qs.forEach(function(q,i){var s=c.sol[i],v=c.ver&&c.ver[i];b+='<section class="sol pb"><h2>Question '+(i+1)+' <small style="font:400 10pt sans-serif;color:#444">· '+mk(q)+(q.s?' · '+H(q.s):'')+'</small></h2><div class="qt">'+H(q.q)+'</div>';
    if(v&&!v.ok)b+='<div class="warn">⚠ A second, independent solve gave “'+H(v.ind||'no answer')+'”'+(v.note?' ('+H(v.note)+')':'')+', which does not match the answer below. Please check this question before teaching from it.</div>';
    b+='<div class="box"><h3>Solution strategy</h3><p>'+H(s.s)+'</p></div><h3>Step-by-step solution</h3><ol class="st">'+s.st.map(function(x){return'<li>'+H(x.d)+(x.w?'<div class="why">Why: '+H(x.w)+'</div>':'')+'</li>'}).join('')+'</ol><div class="ans">Answer: '+H(s.a)+'</div>';
    s.m.forEach(function(m){b+='<h3>Alternative method: '+H(m.n)+'</h3>'+(m.w?'<p class="when">Best when: '+H(m.w)+'</p>':'')+'<ol class="st">'+m.s.map(function(x){return'<li>'+H(x)+'</li>'}).join('')+'</ol>'});
    if(s.e)b+='<h3>Why this works</h3><p>'+H(s.e)+'</p>';
    if(s.sl.length)b+='<h3>Common slips</h3><ul>'+s.sl.map(function(x){return'<li>'+H(x)+'</li>'}).join('')+'</ul>';
    if(s.c)b+='<p class="chk"><b>Check:</b> '+H(s.c)+'</p>';
    b+='</section>'});
  return doc('Answer key · '+n,b)}
function docOf(w){var c=C(TP.k);return w==='q'?sheetDoc(c):keyDoc(c)}
function fname(w){return'StudyBuddy-'+title(TP.k).replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'')+(w==='q'?'-question-paper':'-answer-key')}
window.tpPrint=function(w){var f=document.createElement('iframe');f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0';document.body.appendChild(f);
  f.onload=function(){try{f.contentWindow.focus();f.contentWindow.print()}catch(e){showToast('Printing is blocked here. Use Save as PDF instead.')}setTimeout(function(){try{f.remove()}catch(e){}},120000)};f.srcdoc=docOf(w)};
function saveBlob(blob,name,okMsg){return(async function(){var D=null;try{D=window.claude&&claude.use?await claude.use('downloads'):null}catch(e){D=null}
  if(D){try{await D.save({filename:name,data:blob});showToast(okMsg);return}catch(e){if(e&&e.code==='declined')return;showToast('The viewer could not save this file here.');return}}
  try{var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){a.remove()},2000);showToast(okMsg)}catch(e){showToast('Saving is blocked here. Open the app in a normal browser tab and try again.')}})()}
window.tpDown=function(w){saveBlob(new Blob([docOf(w)],{type:'text/html'}),fname(w)+'.html','Web version saved. It opens in any browser and can be sent as a file.')};
/* real PDF: each page is drawn from the document and packed into a small PDF file */
var PW=794,PH=1123,PM=57,PS=2;
function measure(w){docOf(w);var css=CSS.replace(/@page\{[^{}]*\{[^{}]*\}\}/,'').replace('body{','.pg{'),m=document.createElement('div');m.style.cssText='position:absolute;left:-9999px;top:0;width:'+(PW-2*PM)+'px';m.innerHTML='<style>'+css+'</style><div class="pg">'+LASTB+'</div>';document.body.appendChild(m);
  var base=m.getBoundingClientRect().top,A=[].slice.call(m.querySelectorAll('li,p,tr,h1,h2,h3,.qt,.ans,.warn,.box,.q,.note,.meta,.rule,table,.qh')).filter(function(e){return!(e.tagName==='P'&&e.parentNode.classList.contains('box'))&&!e.closest('.box')||e.classList.contains('box')}).map(function(e){var r=e.getBoundingClientRect();return{t:r.top-base,b:r.bottom-base,h:/^H[123]$/.test(e.tagName),pb:e.classList.contains('pb')||(e.parentNode&&e.parentNode.classList&&e.parentNode.classList.contains('pb')&&e.previousElementSibling==null)}});
  var forced=[].slice.call(m.querySelectorAll('.pb')).map(function(e){return e.getBoundingClientRect().top-base});
  var Hc=PH-2*PM-6,total=m.getBoundingClientRect().height,cuts=[0],y=0;
  while(total-y>Hc){var lim=y+Hc,f=forced.filter(function(z){return z>y+4&&z<=lim})[0],c;
    if(f!=null)c=f;else{c=null;var cand=A.map(function(a){return a.t}).filter(function(z){return z>y+60&&z<=lim}).sort(function(a,b){return b-a});
      for(var i=0;i<cand.length&&c==null;i++){var z=cand[i];if(!A.some(function(a){return a.t<z-1&&a.b>z+1&&!a.h}))c=z}
      if(c!=null){var moved=1;while(moved){moved=0;A.forEach(function(a){if(a.h&&Math.abs(a.b-c)<14&&a.t>y+60){c=a.t;moved=1}})}}
      if(c==null)c=lim}
    cuts.push(c);y=c}
  m.style.cssText='';var html=new XMLSerializer().serializeToString(m);document.body.removeChild(m);return{html:html,css:css,cuts:cuts,total:total}}
function rastPage(M,i){return new Promise(function(res,rej){var y0=M.cuts[i],n=M.cuts.length,cy=i+1<n?Math.round(PM+(M.cuts[i+1]-y0)):PH,
  svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+PW+'" height="'+PH+'"><foreignObject x="0" y="0" width="'+PW+'" height="'+PH+'"><div xmlns="http://www.w3.org/1999/xhtml" style="position:relative;width:'+PW+'px;height:'+PH+'px;overflow:hidden;background:#fff"><div style="position:absolute;left:'+PM+'px;top:'+(PM-y0)+'px;width:'+(PW-2*PM)+'px">'+M.html+'</div><div style="position:absolute;left:0;right:0;top:'+cy+'px;height:'+(PH-cy)+'px;background:#fff"></div><div style="position:absolute;left:0;right:0;top:0;height:'+(PM-6)+'px;background:#fff"></div></div></foreignObject></svg>',
  im=new Image();im.onload=function(){try{var cv=document.createElement('canvas');cv.width=PW*PS;cv.height=PH*PS;var x=cv.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,cv.width,cv.height);x.drawImage(im,0,0,cv.width,cv.height);x.fillStyle='#666';x.font=(9*PS*1.33)+'px sans-serif';x.textAlign='center';x.fillText(String(i+1)+' / '+n,cv.width/2,cv.height-PM*PS*.45);
    cv.toBlob(function(b){if(!b)return rej(new Error('blob'));b.arrayBuffer().then(function(ab){res({u:new Uint8Array(ab),w:cv.width,h:cv.height})})},'image/jpeg',.88)}catch(e){rej(e)}};im.onerror=function(){rej(new Error('img'))};im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg)})}
function pdfBlob(P){var enc=new TextEncoder(),parts=[],off=0,xr=[],N=P.length;function add(x){var u=typeof x==='string'?enc.encode(x):x;parts.push(u);off+=u.length}function obj(n,b){xr[n]=off;add(n+' 0 obj\n'+b+'\nendobj\n')}
  add('%PDF-1.4\n');obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,'<< /Type /Pages /Count '+N+' /Kids ['+P.map(function(p,i){return(3+3*i)+' 0 R'}).join(' ')+'] >>');
  P.forEach(function(p,i){var pg=3+3*i,ct=pg+1,im=pg+2,cs='q 595.28 0 0 841.89 0 0 cm /Im0 Do Q';obj(pg,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 '+im+' 0 R >> >> /Contents '+ct+' 0 R >>');obj(ct,'<< /Length '+cs.length+' >>\nstream\n'+cs+'\nendstream');
    xr[im]=off;add(im+' 0 obj\n<< /Type /XObject /Subtype /Image /Width '+p.w+' /Height '+p.h+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+p.u.length+' >>\nstream\n');add(p.u);add('\nendstream\nendobj\n')});
  var xo=off,max=2+3*N;add('xref\n0 '+(max+1)+'\n0000000000 65535 f \n');for(var k=1;k<=max;k++)add(('0000000000'+xr[k]).slice(-10)+' 00000 n \n');add('trailer\n<< /Size '+(max+1)+' /Root 1 0 R >>\nstartxref\n'+xo+'\n%%EOF');return new Blob(parts,{type:'application/pdf'})}
window.tpMkPdf=async function(w){var M=measure(w),P=[];for(var i=0;i<M.cuts.length;i++){P.push(await rastPage(M,i))}return pdfBlob(P)};
var PDFBUSY=false;
window.tpPdf=async function(w){if(PDFBUSY)return;PDFBUSY=true;showToast('Making the PDF…');try{var b=await tpMkPdf(w);await saveBlob(b,fname(w)+'.pdf','PDF saved.')}catch(e){showToast('Could not make the PDF here. Use Print, or the web version.')}finally{PDFBUSY=false}};
window.tpPreview=function(w){TP.pv=TP.pv===w?null:w;tpView()};

/* ---------- marking the student's answer sheet ---------- */
var KDM={concept:'c',method:'m',calculation:'a',careless:'k'};
function setMk(t){var m=document.getElementById('tpMk');if(m)m.textContent=t}
window.tpPick=function(el){TP.files=[].slice.call(el.files||[]).slice(0,16);TP.merr='';tpView()};
window.tpMark=async function(){if(TP.mk||TP.busy)return;var k=TP.k,c=C(k),F=TP.files;if(!c||!c.done)return;if(!F.length){TP.merr='Choose the photos of the answer sheet first.';tpView();return}
  TP.mk=true;TP.merr='';tpView();
  try{var s=await getS();if(!s)throw{nos:1};var lim=await s.limits();if(!lim.images)throw{noimg:1};
    var key=c.qs.map(function(q,i){return(i+1)+'. ['+q.m+' marks] '+q.q+'\n   Correct answer: '+c.sol[i].a+'\n   Method: '+c.sol[i].st.map(function(x){return x.d}).join(' ; ').slice(0,280)}).join('\n'),res={};
    for(var b=0;b<F.length;b+=4){setMk('Reading page'+(F.length>1?'s '+(b+1)+' to '+Math.min(b+4,F.length):'')+' of '+F.length+'…');var ims=[];for(var j=b;j<Math.min(b+4,F.length);j++)ims.push(await shrink(F[j]));
      var d=await cl('You are an experienced school maths examiner. The photos are pages of ONE student’s handwritten answer sheet for the chapter “'+cname(k)+'”. Mark it the way an exam script is marked: marks for each correct step of working (method) and for the correct final answer (accuracy). Accept any correct method, not only the one in the key.\n\nThe question paper and key:\n'+key+'\n\nFor every question whose working you can see on these pages, return one item. Match by the question number the student wrote, or by the working itself. Do not guess at handwriting you cannot read: leave that question out and list its number under "unreadable". If a question’s working clearly continues on a page you cannot see, mark what you can see and set "cont" to true. '+MATHNOTE+'\nReturn JSON only: {"items":[{"n":1,"got":2,"verdict":"right, partial or wrong","seen":"the final answer the student wrote","wrong":"one sentence: the first wrong step, or what is missing; empty if fully right","kind":"concept, method, calculation or careless; empty if fully right","skill":"the weak skill in 2 to 6 words; empty if fully right","cont":false}],"unreadable":[]}',ims);
      if(!d||!Array.isArray(d.items))throw new Error('shape');
      d.items.forEach(function(x){var i=+x.n-1,q=c.qs[i];if(!q)return;var g=Math.max(0,Math.min(q.m,Math.round((+x.got||0)*2)/2)),v=g>=q.m?'right':g>0?'partial':'wrong',r={g:g,v:v,seen:String(x.seen||'').slice(0,80),w:v==='right'?'':String(x.wrong||'').slice(0,240),kd:v==='right'?'':(KDM[String(x.kind||'').toLowerCase().trim()]||''),s:v==='right'?'':String(x.skill||'').slice(0,60),ct:!!x.cont},o=res[i];
        if(!o||(o.ct&&!r.ct)||(o.ct===r.ct&&r.g>o.g))res[i]=r})}
    var n=Object.keys(res).length;if(!n)throw{none:1};
    setMk('Finding the weak spots…');var got=0,mx=0,lines=[];Object.keys(res).forEach(function(i){var r=res[i],q=c.qs[i];got+=r.g;mx+=q.m;lines.push('Q'+(+i+1)+' ['+q.s+'] '+fm(r.g)+'/'+q.m+(r.w?' · '+r.w+' · '+(r.s||''):''))});
    var sm={weak:[],strong:[],ft:''};try{var z=await cl(TEACH+' A student’s answer sheet for the chapter “'+cname(k)+'” was marked. Results by question:\n'+lines.join('\n')+'\n\nName the real weak spots behind the lost marks (at most 5, the most costly first; fewer if fewer exist, none if no marks were lost), what is already strong, and a note for the tutor. Be specific to the maths, and kind. Plain text.\nReturn JSON only: {"weak":[{"name":"2 to 6 words","why":"one sentence: what goes wrong","fix":"one sentence: what to practise"}],"strong":["2 to 6 words"],"for_tutor":"two sentences"}');
      sm={weak:(z.weak||[]).slice(0,5).map(function(x){return{name:String(x.name||''),why:String(x.why||''),fix:String(x.fix||'')}}).filter(function(x){return x.name}),strong:(z.strong||[]).map(String).slice(0,5),ft:String(z.for_tutor||'')}}catch(e){}
    W()[k]={ts:Date.now(),got:got,mx:mx,n:n,nq:c.qs.length,res:res,weak:sm.weak,strong:sm.strong,ft:sm.ft};
    S.ev.push({k:'tp',topic:cname(k),ok:mx>0&&got/mx>=.8,habit:sm.weak[0]?sm.weak[0].name:'',type:'tutor sheet',sc:got,m:mx,ts:Date.now()});
    if(stu())Object.keys(res).forEach(function(i){var r=res[i],q=c.qs[i],ref='tp:'+k+':'+q.q.slice(0,90);
      if(r.v==='right'){try{mkFix(ref)}catch(e){}return}
      mkAdd({src:'Tutor sheet',topic:cname(k),q:q.q,ans:c.sol[i].a,mine:'Answer sheet: '+fm(r.g)+' of '+q.m+' marks'+(r.seen?' · wrote '+r.seen:''),habit:r.s,note:r.w,h:c.sol[i].s,ref:ref});
      var m=mkList().filter(function(x){return x.ref===ref&&!x.fx})[0];if(m&&r.kd){m.kd=r.kd;m.kds='ai'}
      if(r.s){S.tg[r.s]=S.tg[r.s]||[r.s,r.w];S.w[r.s]=(S.w[r.s]||0)+2}});
    save();TP.files=[]
  }catch(e){TP.merr=e&&e.none?'Claude could not match any working on those photos to the questions. Retake them in good light, one page per photo, with the question numbers visible.':errText(e)}
  finally{TP.mk=false}
  if(view==='tp'){tpView()}};
window.tpUnmark=function(){delete W()[TP.k];save();tpView()};
/* the answer key stays closed until its own PIN is entered (the tutor role opens it without one) */
var KL='sb_tpkey',KU=false;
function kh(p){var h=5381,t='sbk:'+p;for(var i=0;i<t.length;i++)h=((h<<5)+h+t.charCodeAt(i))|0;return String(h)}
function kget(){try{return localStorage.getItem(KL)||''}catch(e){return''}}
function locked(){return!KU&&window.ROLE!=='tutor'}
function lockCard(){var set=!!kget();return'<div class="card"><b>Answer key</b><p class="sub" style="margin:4px 0 6px">'+(set?'Locked. Enter the answer key PIN to open it.':'Choose an answer key PIN of 4 to 8 digits, so the key stays closed until after the class. It is separate from the student PIN.')+'</p><input id="tpKp" class="field" type="password" inputmode="numeric" maxlength="8" autocomplete="off" placeholder="'+(set?'Answer key PIN':'New answer key PIN')+'"><div id="tpKm" class="sub" aria-live="polite" style="margin:6px 0 0"></div><button class="btn" onclick="tpKey()">'+(set?'Open the answer key':'Save the PIN and open')+'</button></div>'}
window.tpKey=function(){var el=document.getElementById('tpKp'),p=el?el.value.trim():'',m=document.getElementById('tpKm'),cur=kget();
  if(!/^\d{4,8}$/.test(p)){if(m)m.textContent='Enter 4 to 8 digits.';return}
  if(!cur){try{localStorage.setItem(KL,kh(p))}catch(e){}KU=true;showToast('Answer key PIN saved.');tpView();return}
  if(kh(p)===cur){KU=true;tpView()}else if(m)m.textContent='That PIN does not match.'};
window.tpLock=function(){KU=false;TP.pv=null;tpView()};
var VN={right:'Right',partial:'Partly right',wrong:'Wrong'},VC={right:'ok',partial:'mid',wrong:'bad'};
function markCard(k,c){var w=W()[k],h='<div class="card"><b>The student’s answer sheet</b>';
  if(TP.mk)return h+'<p class="sub" id="tpMk" aria-live="polite" style="margin:6px 0 0">Starting…</p><p class="sub" style="margin:8px 0 0">Keep this page open while Claude reads the pages.</p></div>';
  if(w){h+='<p style="margin:6px 0 0"><b style="font-size:1.3rem">'+fm(w.got)+' of '+w.mx+'</b> on the '+w.n+' question'+(w.n>1?'s':'')+' found'+(w.n<w.nq?' ('+(w.nq-w.n)+' not found on the photos)':'')+' · '+new Date(w.ts).toLocaleDateString()+'</p>';
    if(w.weak.length){h+='<p style="margin:10px 0 2px"><b>Weak spots to work on</b></p>';w.weak.forEach(function(x){h+='<div class="fb mid" style="margin:6px 0"><b>'+esc(x.name)+'.</b> '+esc(x.why)+(x.fix?' <em style="font-style:normal;display:block;margin-top:4px">Practise: '+esc(x.fix)+'</em>':'')+'</div>'})}
    else h+='<div class="fb ok" style="margin:8px 0">No weak spots stood out on this sheet.</div>';
    if(w.strong&&w.strong.length)h+='<p class="sub" style="margin:6px 0 0"><b>Already strong:</b> '+esc(w.strong.join('; '))+'</p>';
    if(w.ft)h+='<p class="sub" style="margin:6px 0 0"><b>For the tutor:</b> '+esc(w.ft)+'</p>';
    h+='<details style="margin-top:10px"><summary><b>Question by question</b></summary>';Object.keys(w.res).sort(function(a,b){return a-b}).forEach(function(i){var r=w.res[i],q=c.qs[i];if(!q)return;h+='<div style="border-top:1px solid var(--line);padding:8px 0"><span class="pill '+VC[r.v]+'">'+VN[r.v]+'</span> <b>Q'+(+i+1)+'</b> · '+fm(r.g)+' of '+q.m+(r.kd&&window.KD&&KD[r.kd]?' · '+KD[r.kd][0]:'')+(r.w?'<div class="sub" style="margin:4px 0 0">'+esc(r.w)+'</div>':'')+'</div>'});h+='</details>';
    h+='<p class="sub" style="margin:10px 0 6px">The questions that lost marks are now in My mistakes, so check-backs and practice will bring them back. Claude read the marks from photos, so a misread is possible: remove any wrong entry from My mistakes.</p>';
    if(!isF(k)&&w.weak.length)h+='<button class="btn" onclick="tpOpen(\''+k+'_f\')">'+(C(k+'_f')?'Open the follow-up paper':'Build a follow-up paper on these weak spots')+'</button>';
    return h+'<button class="btn alt" onclick="tpUnmark()">Mark a different sheet</button></div>'}
  h+='<p class="sub" style="margin:4px 0 6px">After the class, photograph each page of the answer sheet. Claude marks it against the key, finds the weak spots, and sends the lost marks into My mistakes so later practice works on them.</p><input type="file" id="tpF" class="field" accept="image/*" multiple onchange="tpPick(this)">'+(TP.files.length?'<p class="sub" style="margin:6px 0 0">'+TP.files.length+' photo'+(TP.files.length>1?'s':'')+' chosen.</p>':'<p class="sub" style="margin:6px 0 0">Up to 16 photos, one page each, with the question numbers visible.</p>')+(TP.merr?'<div class="fb bad" style="margin-top:8px">'+esc(TP.merr)+'</div>':'')+'<button class="btn" onclick="tpMark()">Mark the answer sheet</button></div>';return h}

/* ---------- screens ---------- */
window.tpOpen=function(k){TP.k=k;TP.pv=null;TP.err='';TP.merr='';TP.files=[];if(!TP.busy)TP.paste='';tpView();window.scrollTo(0,0)};
window.tpHome=function(){var k=TP.k;if(k&&isF(k)){tpOpen(base(k));return}TP.k=null;TP.pv=null;tpView();window.scrollTo(0,0)};
function pill(id){var c=C(id),w=W()[id];return(w?'<span class="pill st">'+fm(w.got)+'/'+w.mx+'</span> ':'')+(c?(c.done?'<span class="pill ok">Ready</span>':'<span class="pill mid">Part built</span>'):'')}
function tpView(){
  if(TP.busy){var bn=TP.all?cname(TP.all.id):title(TP.k);app.innerHTML='<h1>Tutor pack</h1><div class="card"><b>Building: '+esc(bn)+'</b>'+(TP.all?'<p class="sub" style="margin:4px 0 0">Chapter '+(TP.all.i+1)+' of '+TP.all.n+' still to build.</p>':'')+'<p class="sub" id="tpMsg" aria-live="polite" style="margin:6px 0 0">Starting…</p><p class="sub" style="margin:8px 0 0">Each chapter takes several minutes. Keep this page open. Finished parts are saved as it goes, so it can continue later.</p></div>';return}
  if(!TP.k){var left=CHL.filter(function(r){var c=C(r[0]);return r[0]!=='#'&&!(c&&c.done)}).length,h='<h1>Tutor pack</h1><p class="sub">For classes with the tutor. Each chapter has a question paper covering its worked-example types, and a separate answer key with the strategy, every step, other methods and a detailed explanation. After the class, upload the answer sheet to find the weak spots.</p>';
    if(TP.err)h+='<div class="fb bad" style="margin:0 0 12px">'+esc(TP.err)+'</div>';
    h+='<div class="card">';CHL.forEach(function(r){if(r[0]==='#')h+='<div class="eyebrow" style="margin:10px 0 2px">'+r[1]+'</div>';else h+='<button class="trow" onclick="tpOpen(\''+r[0]+'\')"><span class="tt"><b>'+esc(r[1])+'</b></span>'+pill(r[0])+'</button>'});h+='</div>';
    if(left)h+='<div class="card"><b>Build every chapter</b><p class="sub" style="margin:4px 0 6px">'+left+' chapter'+(left>1?'s are':' is')+' not built yet. This builds them one after another. It takes a long time and may stop at Claude’s usage limit: tap again later and it carries on from where it stopped.</p><button class="btn alt" onclick="tpAll()">Build the remaining chapters</button></div>';
    app.innerHTML=h;return}
  var k=TP.k,c=C(k),h='<button class="link back" onclick="tpHome()" style="margin-bottom:8px">‹ '+(isF(k)?esc(cname(k)):'Tutor pack')+'</button><h1>'+esc(title(k))+'</h1>';
  if(c&&c.done&&c.qs){var bad=c.ver?Object.keys(c.ver).filter(function(x){return!c.ver[x].ok}).length:0;
    h+='<p class="sub">'+c.qs.length+' questions · '+tot(c)+' marks · no time limit</p>';
    [['q','Question paper','The questions only, grouped by type, with space to work. Hand this to the student.'],['k','Answer key','For every question: the strategy first, then every step with its reason, the other methods, a detailed explanation, common slips and a check.'+(bad?' '+bad+' answer'+(bad>1?'s':'')+' flagged ⚠ for checking.':'')]].forEach(function(x){
      h+='<div class="card"><b>'+x[1]+'</b><p class="sub" style="margin:4px 0 6px">'+x[2]+'</p><div class="row2"><button class="btn" onclick="tpPdf(\''+x[0]+'\')">Save as PDF</button><button class="btn alt" onclick="tpPrint(\''+x[0]+'\')">Print</button></div><button class="btn alt" onclick="tpDown(\''+x[0]+'\')">Save the web version to send</button><button class="link" onclick="tpPreview(\''+x[0]+'\')" style="margin-top:6px">'+(TP.pv===x[0]?'Hide preview':'Preview')+'</button>'+(TP.pv===x[0]?'<iframe id="tpPv" title="Preview" style="width:100%;height:70vh;border:1px solid var(--line);border-radius:10px;margin-top:8px;background:#fff"></iframe>':'')+'</div>'});
    if(locked()){var ki=h.indexOf('<div class="card"><b>Answer key</b>');if(ki>=0)h=h.slice(0,ki)+lockCard();if(TP.pv==='k')TP.pv=null}else if(window.ROLE!=='tutor')h+='<button class="link" onclick="tpLock()" style="margin:0 0 12px">Lock the answer key again</button>';
    h+=markCard(k,c);
    h+='<div class="card"><b>A new paper</b><p class="sub" style="margin:4px 0 6px">Build a fresh paper for this '+(isF(k)?'follow-up':'chapter')+'. The current paper, key and marking are replaced'+(isF(k)?'':', and known weak spots get extra questions')+'.</p><button class="btn alt" onclick="tpRebuild(\''+k+'\')">Start over</button></div>';
    app.innerHTML=h;if(TP.pv){var f=document.getElementById('tpPv');if(f)f.srcdoc=docOf(TP.pv)}return}
  h+='<p class="sub">'+(isF(k)?'A shorter paper built on the weak spots from the marked answer sheet, with its own answer key.':'A question paper covering the chapter’s worked-example types, and a separate answer key.')+'</p>';
  var er=TP.err?'<div class="fb bad" style="margin-top:8px">'+esc(TP.err)+'</div>':'';
  if(c&&c.qs)h+='<div class="card"><b>Part built</b><p class="sub" style="margin:4px 0 0">'+c.qs.length+' questions planned, '+Object.keys(c.sol).length+' solved so far.</p>'+er+'<button class="btn" onclick="tpBuild(\''+k+'\')">Continue building</button></div>';
  else if(isF(k))h+='<div class="card">'+er+'<button class="btn" onclick="tpBuild(\''+k+'\')">Build the follow-up paper</button></div>';
  else h+='<div class="card"><label for="tpPaste"><b>Examples from the tutor’s book (optional)</b></label><p class="sub" style="margin:4px 0 4px">Type or paste them, one per line. Every one goes onto the paper and into the answer key, alongside questions covering the other example types of the chapter.</p><textarea id="tpPaste" rows="5" placeholder="One question per line" oninput="TP_paste(this.value)">'+esc(TP.paste||'')+'</textarea>'+er+'<button class="btn" onclick="tpBuild(\''+k+'\')">Build the paper and key</button><p class="sub" style="margin:8px 0 0">Questions are written fresh in the style of standard ISC textbook examples. They are not copied from any book.</p></div>';
  app.innerHTML=h}
window.TP_paste=function(v){TP.paste=v};

/* ---------- hooks ---------- */
try{var G=GRP.maths;if(G&&!G.some(function(t){return t[0]==='tp'}))G.push(['tp','Tutor']);
  if(window.MSEC)MSEC.forEach(function(s){if(s[0]==='prac'&&s[2].indexOf('tp')<0)s[2].push('tp')});
  if(typeof SECN!=='undefined')SECN.tp='Tutor pack'}catch(e){}
['tpPdf','tpPrint','tpDown','tpPreview'].forEach(function(n){var f=window[n];window[n]=function(w){if(w==='k'&&locked())return;return f.apply(this,arguments)}});
var _r4=render;render=function(){_r4();if(view==='tp')tpView()};
try{if(typeof tutorText==='function'){var _tt2=tutorText;tutorText=function(){var t=_tt2.apply(this,arguments);try{if(typeof t!=='string')return t;var w=W(),ks=Object.keys(w).sort(function(a,b){return w[b].ts-w[a].ts}).slice(0,6);
  if(ks.length)t+='\nTutor answer sheets: '+ks.map(function(k){return title(k)+' '+fm(w[k].got)+'/'+w[k].mx+(w[k].weak&&w[k].weak.length?' (weak: '+w[k].weak.map(function(x){return x.name}).join(', ')+')':'')}).join('; ')+'.'}catch(e){}return t}}}catch(e){}
})();
/*TPACK2-END*/

;

/*IMPV-START*/
/*IMPV: "How to improve". Opened from the Improve button on Today (beside Guide) and from Revise > Improve.
  Part 1 is written from the notebook pages reviewed in chat and is replaced with each new review (IMP below).
  Part 2 is live: weak spots from marked answer sheets and the kinds of slip in My mistakes. Skill names only, no personal details. */
(function(){
var IMP={upd:'15 Nov 2026',pages:33,chap:'straight lines, circles, series, quadratics, inequalities, indices and trigonometry',
strong:['Careful step-by-step algebra once the start is right','Sums with Σn, Σn² and Σn³ are set up and combined correctly','Spots useful substitutions, such as y = 2x² − x','Proves identities and uses tan(A + B) correctly','Crosses out a wrong start and redoes it properly'],
habits:['Before the first line, write the plan in a few words.','Say what each letter in the formula means, and mark it on a small sketch.','Put every negative number in brackets, and make one move per line.','After an expansion, put x = 1 into both sides as a ten-second check.','Box the final answer in the form the question asks for.'],
weak:[
{n:'Allied angles: the sign and the sin/cos change',c:'Trigonometry',why:"Angles such as 180° − θ, 180° + θ or 270° − θ can be written using an acute angle. Two things may change: the sign, which the quadrant decides, and the name, which switches between sin and cos only when the angle is built from 90° or 270°. Decide the sign first and the name second, so the two are never mixed up.",ex:[{"t": "Write sin 200° using an acute angle", "w": "sin 200° = cos 20°. The sign and the change of name were both guessed.", "r": ["200° is in the third quadrant, where sin is negative, so the sign is −.", "200° = 180° + 20°, and 180° keeps the name, so it stays sin.", "sin 200° = −sin 20°."]}, {"t": "Simplify cos(90° − A)", "w": "cos(90° − A) = sin(−A). The 90° was treated as if it were an angle to subtract.", "r": ["The angle contains 90°, so cos changes to sin.", "For a small A, 90° − A is in the first quadrant, where cos is positive, so the sign is +.", "cos(90° − A) = sin A."]}],wk:["200° = 180° + 20°. Third quadrant, so sin is negative. 180° keeps the name. sin 200° = −sin 20°.", "150° = 180° − 30°. Second quadrant, so cos is negative. 180° keeps the name. cos 150° = −cos 30° = −√3/2.", "270° changes sin to cos. 270° − θ is in the third quadrant for small θ, where sin is negative. So sin(270° − θ) = −cos θ.", "315° = 360° − 45°. Fourth quadrant, so tan is negative. tan 315° = −tan 45° = −1.", "240° + θ = 180° + (60° + θ), so sin(240° + θ) = −sin(60° + θ). Also cos(330° + θ) = cos(30° − θ) = sin(60° + θ). The two cancel and the sum is 0.", "π rad = 180°, so π/4 = 180° ÷ 4 = 45°. tan 60° = √3. (1/√3 belongs to tan 30°.)"],
 seen:['cos x = sin 200° was written as cos x = cos 20°: the sign and the change from sin to cos were both lost.','cos(90° − A) was turned into sin(−A), so sin(240° + θ) + cos(330° + θ) did not come to 0.','π/4 was first read as 90°, and tan 60° was first written as 1/√3.'],
 fix:['Step 1: name the quadrant of the whole angle, and from it the sign of the function you started with.','Step 2: 90° and 270° change sin to cos and cos to sin. 180° and 360° keep the function.','Step 3: only now write the answer, sign first.','Recite the table of 0°, 30°, 45°, 60°, 90° in degrees and radians for two minutes before each session.'],
 d:[['Write sin 200° using an acute angle.','−sin 20°. 200° is in the third quadrant, where sin is negative, and 180° keeps sin.'],['Find cos 150°.','−√3/2'],['Simplify sin(270° − θ).','−cos θ'],['Find tan 315°.','−1'],['Simplify sin(240° + θ) + cos(330° + θ).','0. The first is −sin(60° + θ); the second is cos(30° − θ) = sin(60° + θ).'],['Write π/4 in degrees, and give tan 60°.','45°, and √3']]},
{n:'What the words and letters mean',c:'Coordinate geometry',why:"Every formula uses letters with a fixed meaning. In y = mx + c, c is where the line cuts the y-axis, so the point is (0, c) and not (c, 0). In Ax + By + C = 0, A and B are the numbers beside x and y, and C is the number on its own. A one-line sketch shows what the question really asks for.",ex:[{"t": "A y-intercept of −3/2", "w": "The point is (−3/2, 0).", "r": ["The y-intercept is where the line meets the y-axis, and there x = 0.", "So the point is (0, −3/2).", "Check: put x = 0 into y = x/2 − 3/2 and y = −3/2."]}, {"t": "The letters A, B, C in y + 4 = 0", "w": "A = 4 and B = 1, because 4 and 1 are the numbers that can be seen.", "r": ["Write every term, even the missing one: 0·x + 1·y + 4 = 0.", "A is beside x, so A = 0. B is beside y, so B = 1. C is alone, so C = 4."]}, {"t": "Distance along the line 2x − y = 0", "w": "Draw a perpendicular from P to the other line and measure that.", "r": ["“Along the line” means moving on 2x − y = 0 itself, not at right angles to it.", "Find where 2x − y = 0 meets the other line: put y = 2x into 4x + 7y + 5 = 0, so 18x + 5 = 0, x = −5/18, y = −5/9.", "Then measure from P(1, 2) to (−5/18, −5/9): the distance is 23√5/18."]}],wk:["y = mx + c with m = 1/2 and c = −3/2 gives y = x/2 − 3/2. Multiply by 2: 2y = x − 3, so x − 2y − 3 = 0.", "Slope = −A/B = −3/(−4) = 3/4. Put y = 0: 3x = −12, so x = −4. Put x = 0: −4y = −12, so y = 3.", "Write y + 4 = 0 as 0x + 1y + 4 = 0. Then A = 0, B = 1 and C = 4.", "On 2x − y = 0, y = 2x. Put this into 4x + 7y + 5 = 0: 18x + 5 = 0, so x = −5/18 and y = −5/9. The gaps from P are 23/18 and 23/9, so the distance is (23/18)√(1 + 4) = 23√5/18."],
 seen:['A y-intercept of −3/2 was used as the point (−3/2, 0), which is on the x-axis.','c was written as the slope formula, and for y + 4 = 0 the labels A and B were swapped.','“Distance along the line 2x − y = 0” was solved by drawing a perpendicular to that line.'],
 fix:['Before using a formula, write one line saying what each letter stands for.','Draw a small sketch and mark the intercept or the distance that is asked for.','Say the question back in your own words: “I need the point where … meets …”.','Check whether a given point lies on a given line. It often shows what the question means.'],
 d:[['A line has slope 1/2 and y-intercept −3/2. Write its equation.','y = x/2 − 3/2, which is x − 2y − 3 = 0'],['For 3x − 4y + 12 = 0, give the slope and both intercepts.','Slope 3/4, x-intercept −4, y-intercept 3'],['For y + 4 = 0, state A, B and C.','A = 0, B = 1, C = 4'],['Find the distance from P(1, 2) to the line 4x + 7y + 5 = 0, measured along 2x − y = 0.','23√5/18. P lies on 2x − y = 0, which meets the other line at (−5/18, −5/9).']]},
{n:'Signs and expansions',c:'Algebra',why:"Most marks lost here are not lost on ideas but on small slips in arithmetic or in a sign, and one slip early on spoils everything after it. Writing one step per line, putting a bracket round every negative number and checking with a quick value such as x = 1 makes the slips show up before they spread.",ex:[{"t": "21 × 15", "w": "21 × 15 = 351. Both roots that followed were then wrong.", "r": ["Break it up: 21 × 15 = 20 × 15 + 1 × 15.", "= 300 + 15 = 315.", "Check the other way: 21 × 10 + 21 × 5 = 210 + 105 = 315."]}, {"t": "The x-intercept of Ax + By + C = 0", "w": "The x-intercept is C/A.", "r": ["The x-intercept is where y = 0, so the equation becomes Ax + C = 0.", "Ax = −C, so x = −C/A. The minus sign comes from moving C across."]}, {"t": "−b in the quadratic formula, for 7m² − 2m − 7 = 0", "w": "b is read as 2 or the sign of −b is dropped.", "r": ["Here a = 7, b = −2, c = −7. Put every value in brackets.", "−b = −(−2) = +2. b² − 4ac = 4 + 196 = 200.", "m = (2 ± √200)/14 = (2 ± 10√2)/14 = (1 ± 5√2)/7."]}],wk:["(m + 1)(2m + 1) = 2m² + m + 2m + 1 = 2m² + 3m + 1. Take away m: 2m² + 2m + 1.", "(n + 2)(2n + 3) = 2n² + 3n + 4n + 6 = 2n² + 7n + 6. Check with n = 1: 3 × 5 = 15 and 2 + 7 + 6 = 15.", "21 × 15 = 20 × 15 + 15 = 315. Second way: 21 × 10 + 21 × 5 = 210 + 105 = 315.", "a = 7, b = −2, c = −7. m = (2 ± √(4 + 196))/14 = (2 ± 10√2)/14 = (1 ± 5√2)/7.", "Put y = 0: Ax + C = 0, so x = −C/A."],
 seen:['21 × 15 was written as 351 instead of 315, which made both roots wrong in a well-planned solution.','(m + 1)(2m + 1) − m and (n + 2)(2n + 3) were expanded wrongly at the first attempt.','The x-intercept came out as C/A instead of −C/A, and −b was written wrongly in the quadratic formula.'],
 fix:['Bracket every negative when you substitute.','Move one term per line.','Check an expansion by putting x = 1 into both sides.','Do an important product a second way: 21 × 15 = 20 × 15 + 15.'],
 d:[['Expand (m + 1)(2m + 1) − m.','2m² + 2m + 1'],['Expand (n + 2)(2n + 3).','2n² + 7n + 6'],['Work out 21 × 15 in two ways.','315'],['Solve 7m² − 2m − 7 = 0.','m = (1 ± 5√2)/7'],['Find the x-intercept of Ax + By + C = 0.','−C/A']]},
{n:'Inequalities and modulus: cases and direction',c:'Inequalities',why:"An equation has answers that are single points. An inequality has answers that are whole stretches of the number line. For a product of brackets, find the points where each bracket changes sign, mark them on a line and read off the stretch you need. The sign of an inequality turns round only when you multiply or divide by a negative number. A modulus equation |A| = |B| always gives two cases, because A and B may have the same sign or opposite signs.",ex:[{"t": "(2x − 3)(x + 3) ≤ 0", "w": "x ≤ 3/2 and x ≤ −3, as if each bracket were an equation.", "r": ["The roots are x = 3/2 and x = −3. Mark both on a number line.", "The product is positive for x < −3, negative between −3 and 3/2, and positive for x > 3/2.", "We want ≤ 0, so the answer is −3 ≤ x ≤ 3/2."]}, {"t": "1 − 4ab > 0", "w": "4ab > 1, because the 1 was moved across without turning the sign.", "r": ["Take 1 from both sides: −4ab > −1.", "Divide by −4. A division by a negative number turns the sign round.", "ab < 1/4."]}, {"t": "|2x − 1| = |x + 4|", "w": "Only 2x − 1 = x + 4 was solved, so x = 5 was the only answer.", "r": ["Case 1: 2x − 1 = x + 4, so x = 5.", "Case 2: 2x − 1 = −(x + 4), so 3x = −3 and x = −1.", "Check both in the original: |9| = |9| and |−3| = |3|. Both answers work."]}, {"t": "m² = −1 for a slope m", "w": "m = i.", "r": ["m² = −1 has no real solution.", "A slope is a real number, so reject it and write the reason in words."]}],wk:["2x² + 3x − 9 = (2x − 3)(x + 3). The roots are 3/2 and −3. The product is ≤ 0 between the roots, so −3 ≤ x ≤ 3/2.", "x² − 5x + 6 = (x − 2)(x − 3). The roots are 2 and 3. The product is positive outside the roots, so x < 2 or x > 3.", "1 − 4ab > 0 gives −4ab > −1. Dividing by −4 turns the sign round, so ab < 1/4.", "Case 1: 2x − 1 = x + 4 gives x = 5. Case 2: 2x − 1 = −x − 4 gives 3x = −3, so x = −1.", "3 − 2x ≥ −7 gives −2x ≥ −10. Dividing by −2 turns the sign round, so x ≤ 5."],
 seen:['(2x − 3)(x + 3) ≤ 0 was answered “x ≤ 3/2, x ≤ −3”, as if it were an equation.','1 − 4ab > 0 was turned into 4ab > 1.','For |A| = |B| only one case was solved at first, and m² = −1 was answered m = i instead of being rejected.'],
 fix:['For a quadratic inequality, mark the roots on a sign line and read the answer from the line.','The sign flips only when you multiply or divide by a negative number.','For |A| = |B|, write “A = B or A = −B” as the very first line.','A slope, a length or an angle must be real: reject other values in words.'],
 d:[['Solve 2x² + 3x − 9 ≤ 0.','−3 ≤ x ≤ 3/2'],['Solve x² − 5x + 6 > 0.','x < 2 or x > 3'],['If 1 − 4ab > 0, what is true of ab?','ab < 1/4'],['Solve |2x − 1| = |x + 4|.','x = 5 or x = −1'],['Solve 3 − 2x ≥ −7.','x ≤ 5']]},
{n:'Planning beyond the first step',c:'All chapters',why:"A good solution is planned before it is calculated. The plan can be one short sentence, such as “collect the terms, factor, divide”. When the working stops after a correct first move, go back to the plan and ask what is still standing between you and the answer being alone on one side.",ex:[{"t": "Make t the subject of x = (2t + 1)/(2 − t)", "w": "x(2 − t) = 2t + 1, and then the working stops.", "r": ["Plan: bring every t term to one side, take t out as a common factor, then divide.", "2x − xt = 2t + 1, so 2x − 1 = 2t + xt = t(2 + x).", "t = (2x − 1)/(x + 2)."]}, {"t": "Show that x² − x + 1 is always positive", "w": "Only a few values of x are tried, or the working stops before the sign is explained.", "r": ["Plan: write it as a square plus a number.", "x² − x + 1 = (x − ½)² + ¾.", "A square is never negative, so the whole is at least ¾, which is positive for every real x."]}],wk:["x(2 − t) = 2t + 1, so 2x − xt = 2t + 1. Then 2x − 1 = t(2 + x), and t = (2x − 1)/(x + 2).", "Plan: 4ˣ terms to one side, powers of 3 to the other, factor each side, then divide. 4ˣ + 2^(2x−1) = 4ˣ·3/2 and 3^(x+½) + 3^(x−½) = 3ˣ·4/√3. So (4/3)ˣ = 8/(3√3) = (4/3)^(3/2).", "x² − x + 1 = (x − ½)² + ¾. A square is at least 0, so the whole is at least ¾, which is greater than 0.", "Let u = 2ˣ. Then u² − 5u + 4 = 0, so (u − 1)(u − 4) = 0 and u = 1 or 4. So x = 0 or x = 2."],
 seen:['An indices equation was split correctly and then left.','From x = (2 tan A + 1)/(2 − tan A), tan A was not made the subject.','A “fraction less than 2” question stopped before showing that the denominator is always positive.'],
 fix:['Write the plan in words before the working: “collect, factor, divide”.','Same base on both sides: bring each base to one side and take out the common factor.','A letter that appears twice: gather its terms on one side, then factor it out.','A fraction compared with a number: bring everything to one side, then ask what sign the denominator has.'],
 d:[['Make t the subject of x = (2t + 1)/(2 − t).','t = (2x − 1)/(x + 2)'],['Solve 4ˣ − 3^(x − ½) = 3^(x + ½) − 2^(2x − 1).','x = 3/2. Collect: 4ˣ(1 + ½) = 3ˣ(√3 + 1/√3), so (4/3)ˣ = 8/(3√3) = (4/3)^(3/2).'],['Show that x² − x + 1 is positive for every real x.','x² − x + 1 = (x − ½)² + ¾, which is at least ¾.'],['Solve 2^(2x) − 5·2ˣ + 4 = 0.','x = 0 or x = 2']]},
{n:'Finishing with a complete answer',c:'All chapters',why:"Marks are given for the answer in the form the question asks for. A correct method that stops early earns only part of the marks. Before you move on, read the last line of the question again, check that your last line answers it, and write the reason whenever you reject a value.",ex:[{"t": "2ˣ = −1", "w": "y = −1 is crossed out with no reason given.", "r": ["2ˣ is positive for every real x.", "So 2ˣ = −1 has no real solution. Write that sentence as the last line."]}, {"t": "n(n + 1)(2n + 1)/3 + 7n(n + 1)/2 + 6n", "w": "The sum is left as three separate terms.", "r": ["Use the common denominator 6 and the common factor n: n[2(n + 1)(2n + 1) + 21(n + 1) + 36]/6.", "Inside: 2(2n² + 3n + 1) + 21n + 21 + 36 = 4n² + 27n + 59.", "Final answer, boxed: n(4n² + 27n + 59)/6."]}],wk:["2ˣ is positive for every real x, so it can never equal −1. Write this in words.", "The normal form is x cos α + y sin α = p with p > 0. y + 4 = 0 gives −y = 4, and since cos 270° = 0 and sin 270° = −1 this is x cos 270° + y sin 270° = 4.", "Take out n/6: n[2(n + 1)(2n + 1) + 21(n + 1) + 36]/6 = n(4n² + 27n + 59)/6."],
 seen:['A second line equation was left without its x.','A quadratic was left before its roots were found, and a sum was left unsimplified.','y = −1 was dropped without saying that 2ˣ cannot be negative.'],
 fix:['A question is finished only when the final answer is boxed in the form asked.','When you reject a value, write the reason in a few words.','Read the last line of the question again before moving on.'],
 d:[['Solve 2ˣ = −1.','No real solution, because 2ˣ is always positive.'],['Write y + 4 = 0 in normal form.','x cos 270° + y sin 270° = 4'],['Simplify n(n + 1)(2n + 1)/3 + 7n(n + 1)/2 + 6n.','n(4n² + 27n + 59)/6']]}
]};
var KN={c:'Concept',m:'Method',a:'Calculation',k:'Careless'};
window.impChat=function(i){var w=IMP.weak[i];openChat('I am practising one weak spot in maths: '+w.n+' ('+w.c+').\nWhat went wrong before:\n- '+w.seen.join('\n- ')+'\nThe routine I should follow:\n- '+w.fix.join('\n- ')+'\n\nGive me one question at a time on exactly this weak spot, starting easy and getting harder. Wait for my answer, then check each step of it against the routine and tell me the first step that slipped. After five questions, tell me whether the weak spot looks fixed.\n\nMy answer to your first question will follow. Please ask it now.')};
window.impOpen=function(){goView('imp')};
/* write a full answer on one weak spot: Claude marks the working, not only the final answer */
window.impWrite=function(i){var w=IMP.weak[i],L=S.impw=S.impw||{},n=L[i]||0,d=w.d[n%w.d.length];L[i]=n+1;try{save()}catch(e){}
  if(!window.wrCustom){impChat(i);return}wrCustom({topic:w.c,q:d[0],ask:d[0],ans:d[1],h:w.fix.join(' '),m:3,o:[d[1]],a:0})};
function live(){var h='',w=S.tpw||{},ks=Object.keys(w).filter(function(k){return w[k].weak&&w[k].weak.length}).sort(function(a,b){return w[b].ts-w[a].ts}).slice(0,4);
  if(ks.length){h+='<p style="margin:8px 0 2px"><b>From marked answer sheets</b></p>';ks.forEach(function(k){w[k].weak.slice(0,3).forEach(function(x){h+='<div class="fb mid" style="margin:6px 0"><b>'+esc(x.name)+'.</b> '+esc(x.why||'')+(x.fix?' <em style="font-style:normal;display:block;margin-top:4px">Practise: '+esc(x.fix)+'</em>':'')+'</div>'})})}
  var c={},n=0;try{mkList().forEach(function(m){if(!m.fx&&m.kd&&KN[m.kd]){c[m.kd]=(c[m.kd]||0)+1;n++}})}catch(e){}
  if(n){var top=Object.keys(c).sort(function(a,b){return c[b]-c[a]});h+='<p style="margin:10px 0 2px"><b>From My mistakes</b></p><p class="sub" style="margin:0">Open slips by kind: '+top.map(function(k){return KN[k]+' '+c[k]}).join(' · ')+'.'+(window.KD&&KD[top[0]]?' Most common: '+KN[top[0]].toLowerCase()+'. '+esc(KD[top[0]][2]):'')+'</p>'}
  return h||'<p class="sub" style="margin:6px 0 0">Nothing yet. This part fills in when an answer sheet is marked under Practise, Tutor, or when slips in My mistakes are sorted by kind.</p>'}
var HX=[{"w": "A plan stops you rushing into a first move and then stopping. It takes ten seconds, and it tells you when you are finished: when the plan has been carried out.", "e": ["Question: make t the subject of x = (2t + 1)/(2 − t).", "Plan: bring the t terms together, take t out as a factor, divide.", "Now the working has a destination: t alone on one side. After x(2 − t) = 2t + 1 the plan says there is more to do."]}, {"w": "A letter in a formula means one fixed thing. Saying what it means before you use it prevents mix-ups such as using c as a slope, or turning an intercept into the wrong point. A small sketch shows where the point really sits.", "e": ["Line y = x/2 − 3/2. Say it: m = 1/2 is the slope, and c = −3/2 is where the line meets the y-axis.", "Sketch the axes: that point is on the y-axis, so it is (0, −3/2), not (−3/2, 0)."]}, {"w": "Most sign errors happen when a negative number is dropped into a formula, or when two changes are made in one line. A bracket keeps the sign attached to the number. One move per line shows exactly where a slip began.", "e": ["Quadratic formula for 7m² − 2m − 7 = 0. Write b = (−2), so −b = −(−2) = +2, not −2.", "Then one move per line: b² − 4ac = (−2)² − 4(7)(−7)", "= 4 + 196 = 200."]}, {"w": "If two expressions are equal for every x, they are equal when x = 1. A wrong expansion usually fails this test, so it catches slips in seconds. A match does not prove the expansion right, but a mismatch proves it wrong.", "e": ["Expand (n + 2)(2n + 3) and get 2n² + 7n + 6.", "Put n = 1. Left: 3 × 5 = 15. Right: 2 + 7 + 6 = 15. They match.", "Had 2n² + 5n + 6 been written, the right side would be 13, and the slip would show at once."]}, {"w": "Marks are given for the answer in the form the question asks. A correct method that stops one line early still loses the final mark. Read the question’s last words again and make your last line answer them.", "e": ["“Find the equation of the line”: the last line is an equation in x and y, boxed, such as x − 2y − 3 = 0. It is not m = 1/2 or c = −3/2.", "“Solve 2ˣ = −1”: the last line is “no real solution, because 2ˣ is always positive”."]}];
function impView(){var h='<h1>How to improve</h1><p class="sub">The weak spots that cost the most marks, with what went wrong, a routine to fix each one, and a few questions to try. Updated '+IMP.upd+' from '+IMP.pages+' notebook pages ('+IMP.chap+').</p>';
  h+='<div class="card hi"><b>Five habits for every question</b> <span class="sub">(each with why and an example)</span><ol style="margin:6px 0 0;padding-left:1.3em">'+IMP.habits.map(function(x,i){var z=HX[i];return'<li style="margin:6px 0"><b>'+esc(x)+'</b>'+(z?'<div style="margin:3px 0 0">'+esc(z.w)+'</div><div class="fb ok" style="margin:6px 0 2px"><b>Example:</b><ul style="margin:4px 0 0;padding-left:1.2em">'+z.e.map(function(t){return'<li style="margin:2px 0">'+esc(t)+'</li>'}).join('')+'</ul></div>':'')+'</li>'}).join('')+'</ol></div>';
  IMP.weak.forEach(function(w,i){h+='<details class="card"'+(i===0?' open':'')+'><summary style="cursor:pointer"><b>'+(i+1)+'. '+esc(w.n)+'</b> <span class="pill st">'+esc(w.c)+'</span></summary><p style="margin:10px 0 2px"><b>Why it matters</b></p><p style="margin:0">'+esc(w.why)+'</p><p style="margin:10px 0 2px"><b>Worked examples</b> <span class="sub">(a wrong start, then the right way)</span></p>'+w.ex.map(function(e){return'<div style="border-top:1px solid var(--line);padding:8px 0"><b>'+esc(e.t)+'</b><div class="fb bad" style="margin:6px 0"><b>Wrong:</b> '+esc(e.w)+'</div><div class="fb ok" style="margin:0"><b>Right:</b><ol style="margin:4px 0 0;padding-left:1.3em">'+e.r.map(function(x){return'<li style="margin:2px 0">'+esc(x)+'</li>'}).join('')+'</ol></div></div>'}).join('')+'<p style="margin:10px 0 2px"><b>What went wrong</b></p><ul style="margin:0;padding-left:1.2em">'+w.seen.map(function(x){return'<li style="margin:3px 0">'+esc(x)+'</li>'}).join('')+'</ul><p style="margin:10px 0 2px"><b>The routine</b></p><ul style="margin:0;padding-left:1.2em">'+w.fix.map(function(x){return'<li style="margin:3px 0">'+esc(x)+'</li>'}).join('')+'</ul><p style="margin:10px 0 2px"><b>Try these</b> <span class="sub">(tap a question for its answer)</span></p>'+w.d.map(function(q,j){return'<details style="border-top:1px solid var(--line);padding:8px 0"><summary style="cursor:pointer">'+esc(q[0])+'</summary><div class="fb ok" style="margin:6px 0 0"><b>Answer:</b> '+esc(q[1])+(w.wk&&w.wk[j]?'<div style="margin-top:6px"><b>Working:</b> '+esc(w.wk[j])+'</div>':'')+'</div></details>'}).join('')+'<button class="btn" onclick="impWrite('+i+')">Write one out, and Claude marks the working</button><button class="btn alt chatb" onclick="impChat('+i+')">'+(window.CHAT_ICON||'')+'Practise this with Claude</button></details>'});
  h+='<div class="card"><b>Already strong</b><ul style="margin:6px 0 0;padding-left:1.2em">'+IMP.strong.map(function(x){return'<li style="margin:3px 0">'+esc(x)+'</li>'}).join('')+'</ul></div>';
  h+='<div class="card"><b>From work in the app</b>'+live()+'</div>';
  app.innerHTML=h}
try{var G=GRP.maths;if(G&&!G.some(function(t){return t[0]==='imp'}))G.push(['imp','Improve']);
  if(window.MSEC)MSEC.forEach(function(s){if(s[0]==='rev'&&s[2].indexOf('imp')<0)s[2].push('imp')});
  if(typeof SECN!=='undefined')SECN.imp='How to improve'}catch(e){}
/* Practise shows three tabs; the others sit behind More */
var PMORE=['lz','cb','tt','tp'],PX=false;
var _sb6=subBar;subBar=function(){_sb6();try{var bs=[].slice.call(document.querySelectorAll('#sub .segs2 button')),ids=bs.map(function(b){var m=(b.getAttribute('onclick')||'').match(/goView\('(\w+)'\)/);return m?m[1]:''});
  if(ids.indexOf('practice')<0||ids.indexOf('tp')<0)return;var cur=PMORE.indexOf(view)>=0,open=PX||cur;
  bs.forEach(function(b,i){if(PMORE.indexOf(ids[i])>=0)b.style.display=open?'':'none'});
  if(!cur){var mb=document.createElement('button');mb.setAttribute('aria-expanded',String(open));mb.textContent=open?'Less':'More';mb.onclick=function(){PX=!open;subBar()};bs[0].parentNode.appendChild(mb)}}catch(e){}};
var _sb5=subBar;subBar=function(){_sb5();try{document.querySelectorAll('#sub .segs2 button').forEach(function(b){var o=b.getAttribute('onclick')||'';if(o.indexOf("goView('imp')")>=0&&b.firstChild&&b.firstChild.nodeType===3)b.firstChild.nodeValue='Improve'})}catch(e){}};
window.IMPD=IMP;window.SB_FOCUS=IMP.weak.map(function(w){return w.n});
function focusCard(){var d=Math.floor(Date.now()/864e5),ix=window.impPick?impPick(d):d%IMP.weak.length,w=IMP.weak[ix],q=w.d[Math.floor(d/IMP.weak.length)%w.d.length];return'<div class="card hi impf"><div class="eyebrow">Today’s focus</div><p style="margin:4px 0 0"><b>'+esc(w.n)+'</b></p><p class="sub" style="margin:4px 0 6px">'+esc(w.fix[0])+'</p><details><summary style="cursor:pointer"><b>Try it:</b> '+esc(q[0])+'</summary><div class="fb ok" style="margin:6px 0 0">'+esc(q[1])+'</div></details><div class="row2" style="margin-top:8px"><button class="btn alt" onclick="impMark('+ix+',1)">I got it right</button><button class="btn alt" onclick="impMark('+ix+',0)">Not yet</button></div><button class="btn" style="margin-top:8px" onclick="impWrite('+ix+')">Write one out, and Claude marks the working</button><button class="link" style="margin-top:8px" onclick="impOpen()">All weak spots and routines ›</button></div>'}
var _r5=render;render=function(){_r5();try{if(view==='imp')impView();else{var b=document.querySelector('.tdbtns');if(b&&!b.querySelector('.impb')){b.insertAdjacentHTML('afterbegin','<button class="guideb impb" onclick="impOpen()">📈 Improve</button>');var hd=b.closest('.tdhd'),nx=hd&&hd.nextElementSibling;if(hd&&!app.querySelector('.impf'))(nx&&nx.classList.contains('sub')?nx:hd).insertAdjacentHTML('afterend',focusCard())}}}catch(e){}};
})();
/*IMPV-END*/

;

/*HWN-START*/
/*HWN: handwriting notes. Added to every request in which Claude reads a photo (answer sheets, written answers, notebook checks),
  so that any model reads this handwriting the same way. Editable under Revise > Improve. Describes pen strokes only. */
(function(){
var HW0=['The cursive x looks like n, u or a curly r: “2n + 3” is 2x + 3, and “mn + c” is mx + c.',
'An open-topped 4 looks like h or y: “hx + 7y” is 4x + 7y, and “hs” is 45.',
'5 looks like s or S, and 2 looks like L or z. A small raised L after a letter is a squared sign: “x L” is x².',
'3 can look like J or a reversed E, 9 like g or q, 1 is a bare stroke, and 7 has no bar.',
'θ looks like O or 0, and α looks like d. “tan” is squeezed and can look like “ton” or “tau”.',
'A plus sign can look like t. ≤ and ≥ are drawn with a slanted lower stroke.',
'Subscripts sit low and small: “m L” is m₂ and “x ,” is x₁.',
'Fractions use a long bar, with the denominator well below it. Modulus bars are tall single strokes.',
'Wrong starts are crossed out with a line, a scribble or a large X. Ignore everything crossed out.',
'Small sums in the right-hand margin are rough arithmetic, not part of the answer.',
'The final answer is the last line that is not crossed out. It is rarely boxed.',
'Neat, upright, larger writing, often in red and sometimes in black, is the tutor’s. Do not mark it as the student’s work.',
'Pages may be photographed sideways or upside down.'].join('\n');
function note(){var t=(S&&typeof S.hwn==='string'&&S.hwn.trim())?S.hwn.trim():HW0;return'\n\nHow this student writes (use it to read the handwriting):\n- '+t.split('\n').filter(function(x){return x.trim()}).join('\n- ').slice(0,2200)+'\nWhen a symbol could be read two ways, choose the reading that keeps the mathematics consistent with the lines around it. If it is still unclear, say it is unreadable instead of guessing.'+(window.SB_FOCUS&&SB_FOCUS.length?'\nThis student’s known weak spots (say in one line if any of them shows up in this work, and name it): '+SB_FOCUS.join('; ')+'.':'')}
var HWC=new WeakMap(),_g=getS;
getS=async function(){var s=await _g.apply(this,arguments);if(!s||typeof s.json!=='function')return s;var w=HWC.get(s);if(w)return w;
  w={};try{for(var k in s)w[k]=typeof s[k]==='function'?s[k].bind(s):s[k];Object.getOwnPropertyNames(s).forEach(function(k){if(!(k in w))w[k]=typeof s[k]==='function'?s[k].bind(s):s[k]})}catch(e){return s}
  w.json=function(p,o){try{if(o&&o.images&&o.images.length&&typeof p==='string')p+=note()}catch(e){}return s.json(p,o)};
  HWC.set(s,w);return w};
window.hwSave=function(){var t=document.getElementById('hwTx');if(!t)return;S.hwn=t.value.trim();save();showToast('Handwriting notes saved.')};
window.hwReset=function(){S.hwn='';save();render();showToast('Back to the built-in notes.')};
var _r7=render;render=function(){_r7();try{if(view==='imp'&&!document.getElementById('hwTx'))app.insertAdjacentHTML('beforeend','<details class="card"><summary style="cursor:pointer"><b>Handwriting notes for Claude</b></summary><p class="sub" style="margin:8px 0 6px">These lines are sent with every photo Claude reads in this app, so answer sheets and written answers are read the way this student writes. One note per line. Describe pen strokes only, with no names.</p><textarea id="hwTx" rows="12">'+esc((S.hwn&&S.hwn.trim())||HW0)+'</textarea><div class="row2"><button class="btn" onclick="hwSave()">Save notes</button><button class="btn alt" onclick="hwReset()">Use built-in notes</button></div></details>')}catch(e){}};
})();
/*HWN-END*/

;

/*IMPT-START*/
/*IMPT: the app keeps count of how each known weak spot is going and steers practice to the weakest one.
  Self-report ("I got it right" / "Not yet") on Today’s focus and on every practice question in Improve, saved in S.impt. */
(function(){
function T(){S.impt=S.impt||{};return S.impt}
function mastery(i){var t=T()[i]||{ok:0,no:0};return (t.ok+1)/(t.ok+t.no+2)}
window.impPick=function(d){var D=window.IMPD;if(!D)return 0;var n=D.weak.length,best=0,bs=9;
  for(var i=0;i<n;i++){var sc=mastery(i)+((i-d%n+n)%n)*0.01;if(sc<bs){bs=sc;best=i}}return best};
window.impMark=function(i,ok){var t=T()[i]=T()[i]||{ok:0,no:0,ts:0};if(ok)t.ok++;else t.no++;t.ts=Date.now();try{save()}catch(e){}
  try{showToast(ok?'Noted. This one will come up less often.':'Noted. This one will come up again soon.')}catch(e){}try{render()}catch(e){}};
function line(i){var t=T()[i];if(!t||!(t.ok+t.no))return'Not practised yet';return'Got right '+t.ok+' of '+(t.ok+t.no)+' tries'}
function decorate(){var D=window.IMPD;if(!D||view!=='imp')return;var cs=document.querySelectorAll('#app details.card, details.card');
  var pick=impPick(Math.floor(Date.now()/864e5));
  [].slice.call(cs).forEach(function(c,i){if(i>=D.weak.length||c.getAttribute('data-trk'))return;c.setAttribute('data-trk','1');
    var sm=c.querySelector('summary');if(sm)sm.insertAdjacentHTML('beforeend','<div class="sub" style="margin:2px 0 0;font-weight:400">'+line(i)+(i===pick?' · next in line for practice':'')+'</div>');
    var qs=c.querySelectorAll(':scope > details');qs.forEach(function(q){var fb=q.querySelector('.fb.ok');if(fb)fb.insertAdjacentHTML('beforeend','<div class="row2" style="margin-top:8px"><button class="btn alt" onclick="impMark('+i+',1)">I got it right</button><button class="btn alt" onclick="impMark('+i+',0)">Not yet</button></div>')})})}
var _r9=render;render=function(){_r9();try{decorate()}catch(e){}};
})();
/*IMPT-END*/
/*SIMPLE-START*/
/*SIMPLE: the maths part opens on two choices, Quick prep and Build concepts. Every older page is still there, reached from
  one of the two or from More. Chapters carry a tag for how much of next year's paper rests on them, and Build concepts
  suggests the highest-priority unfinished chapter first. No saved progress is changed. */
(function(){
var HUBS=[['qp','Quick prep'],['cd','Build concepts'],['mm','More']];
var IN={qp:['stk','practice','tt','pp','mk','mc','st'],cd:['base','ex','th','tl','cb','pl','lz','story'],mm:['today','spots','imp','check','wr','tp','fx']};
var T1=['tg','te','qe','rf','pr','lm','dv'],T2=['sl','ci','pt','pc','se','md','td','co'],T3=['cx','ss','cs','bt','mi','mr','ix'];
var TIER={};T1.forEach(function(c){TIER[c]=1});T2.forEach(function(c){TIER[c]=2});T3.forEach(function(c){TIER[c]=3});
var TN={1:'Builds next year',2:'Partly carries over',3:'This year only'};
var FULL=false;
function hubOf(v){for(var k in IN)if(v===k||IN[k].indexOf(v)>=0)return k;return'mm'}
var NMX={stk:'I got stuck',th:'Concept map',tl:'Templates',wr:'Written answers',tp:'Tutor pack',fx:'Rewards',imp:'How to improve',spots:'Progress',check:'Check notebook',today:'Plan and points',tt:'Timed test',pl:'Play with it',cb:'Concept Builder',lz:'Lazy mode',mk:'My mistakes',mc:'Memory cards',st:'Which method fits?',pp:'Full paper',ex:'Worked examples',story:'Stories',base:'Cover the base',practice:'Chapters'};
function nm(v){return NMX[v]||(typeof SECN!=='undefined'&&SECN[v])||v}
try{var G=GRP.maths;if(G){HUBS.slice().reverse().forEach(function(h){if(!G.some(function(t){return t[0]===h[0]}))G.unshift([h[0],h[1]])})}
  if(typeof SECN!=='undefined'){SECN.qp='Quick prep';SECN.cd='Build concepts';SECN.mm='More maths tools'}}catch(e){}

/* second row: three tabs, and a way back when inside a tool */
var _sb=subBar;subBar=function(){_sb();try{if(grpOf(view)!=='maths')return;var el=document.getElementById('sub'),hb=hubOf(view);
  var h='<div class="segs fit2" role="tablist">'+HUBS.map(function(t){return'<button role="tab" aria-selected="'+(t[0]===hb)+'" onclick="goView(\''+t[0]+'\')">'+t[1]+'</button>'}).join('')+'</div>';
  if(view!==hb)h+='<div class="smcrumb"><button class="link" onclick="goView(\''+hb+'\')">← '+esc(nm(hb))+'</button><span>'+esc(nm(view))+'</span></div>';
  el.innerHTML=h;var nav=document.getElementById('topnav');if(nav)document.documentElement.style.setProperty('--navh',nav.offsetHeight+'px')}catch(e){}};

function row(i,t,s,on,pill){return'<button class="trow" onclick="'+on+'"><span class="tn">'+i+'</span><span class="tt"><b>'+t+'</b><small>'+s+'</small></span>'+(pill||'')+'</button>'}
function head(t,sub){var g=typeof GUIDE!=='undefined'?GUIDE:'';return'<div class="tdhd"><h1>'+t+'</h1><span class="tdbtns">'+(g?'<a class="guideb" href="'+g+'" target="_blank" rel="noopener">📖 Guide</a>':'')+'</span></div><p class="sub">'+sub+'</p>'}
function tag(c){var t=TIER[c];return t?'<span class="smtag sm'+t+'">'+TN[t]+'</span>':''}
function prog(c){try{return chProg(c)}catch(e){return{tot:0,done:0,att:0}}}
function suggest(){var B={};try{B=baseSt()}catch(e){}var open=function(c){var p=prog(c);return p.tot&&p.done<p.tot};
  if(B.ch&&TIER[B.ch]===1&&open(B.ch))return B.ch;var L=T1.concat(T2,T3);for(var i=0;i<L.length;i++)if(open(L[i]))return L[i];return null}
window.smCh=function(c){try{var B=baseSt();B.ch=c;B.g=null;save();EXC=c;EXI=null;view='ex';render();window.scrollTo(0,0)}catch(e){goView('base')}};
window.smFull=function(){FULL=true;goView('today')};

function qpView(){var open=0,hot=0;try{open=mkList().filter(function(m){return!m.fx}).length;hot=mcAll().filter(function(m){return mcHeat(m)>=3}).length}catch(e){}
  var h=head('Quick prep','A test or class coming up? Pick one. Each takes a few minutes.');
  try{var D=window.IMPD;if(D&&D.weak&&D.weak.length){var ix=window.impPick?impPick(Math.floor(Date.now()/864e5)):0,w=D.weak[ix];
    h+='<div class="card hi"><div class="eyebrow">Start here · 5 minutes</div><p style="margin:4px 0 0"><b>'+esc(w.n)+'</b></p><p class="sub" style="margin:4px 0 8px">'+esc(w.fix[0])+'</p><button class="btn" onclick="impOpen()">Practise this weak spot</button></div>'}}catch(e){}
  h+='<div class="card">'+
    row('✓','Quick round on a chapter','8 questions, about 10 minutes',"goView('practice')")+
    row('↻','Retry my mistakes',open?open+' still open':'Nothing open. Great work!',open?"goView('mk');mkStart()":"goView('mk')",open?'<span class="pill bad">'+open+'</span>':'')+
    row('♥','Memory cards','Formulas and facts to have ready',"goView('mc')",hot?'<span class="pill bad">'+hot+'</span>':'')+
    row('◎','Which method fits?','Spot the pattern before you start',"goView('st')")+
    row('▦','Templates','The standard recipe for each kind of question',"goView('tl')")+
    row('⏱','Timed test','Against the clock',"goView('tt')")+
    row('∑','Full paper','Exam pattern, marked part by part',"goView('pp')")+'</div>';
  app.innerHTML=h}

function ctDone(){try{return baseAll().done}catch(e){return 0}}
window.smTarget=function(n){S.ctg={n:n,base:ctDone(),ts:Date.now()};try{save()}catch(e){}render();window.scrollTo(0,0)};
window.smTargetEnd=function(){S.ctg=null;try{save()}catch(e){}render()};
function ctCard(){var t=S.ctg;
  if(!t||!t.n)return'<div class="card"><b>Set a concept target</b><p class="sub" style="margin:2px 0 8px">A small target you can reach. A concept counts when you have understood it, solved it and practised it.</p><div class="row2"><button class="btn alt" onclick="smTarget(1)">1 concept</button><button class="btn alt" onclick="smTarget(2)">2 concepts</button><button class="btn alt" onclick="smTarget(3)">3 concepts</button></div></div>';
  var got=Math.max(0,ctDone()-t.base),n=t.n,d='';for(var i=0;i<n;i++)d+='<i class="'+(i<got?'on':'')+'"></i>';
  if(got>=n)return'<div class="card hi"><div class="eyebrow">Target reached</div><p style="margin:4px 0 2px"><b>'+n+' concept'+(n>1?'s':'')+' done. You earned that.</b></p><div class="ctdots">'+d+'</div><p class="sub" style="margin:6px 0 8px">Each one you finish is one less thing that can surprise you in a test.</p><div class="row2"><button class="btn" onclick="smTarget('+Math.min(n+1,5)+')">Set the next target</button><button class="btn alt" onclick="smTargetEnd()">Done for now</button></div></div>';
  return'<div class="card hi"><div class="eyebrow">Your concept target</div><p style="margin:4px 0 2px"><b>'+got+' of '+n+' concept'+(n>1?'s':'')+' complete</b></p><div class="ctdots">'+d+'</div><p class="sub" style="margin:6px 0 0">'+(got?'Good progress. Keep going, you are closer than it feels.':'Start with the suggested chapter below. One concept at a time.')+'</p></div>'}
function cdView(){var c=suggest(),p=c?prog(c):null;
  var h=head('Build concepts','No rush here. One idea at a time, until it makes sense.');
  h+='<div class="smtiles"><button onclick="goView(\'th\')"><span>🗺️</span><b>Concept map</b><small>See how an idea connects to the ones beneath it</small></button><button onclick="goView(\'tl\')"><span>▦</span><b>Templates</b><small>The standard recipe for each kind of question</small></button><button class="smwide" onclick="goView(\'lz\')"><span>☾</span><b>Lazy mode</b><small>Lie back and choose each next step; the app does the sums</small></button></div>';
  h+=ctCard();
  if(c)h+='<div class="card hi"><div class="eyebrow">Suggested next</div><p style="margin:4px 0 2px"><b>'+esc(BXN[c])+'</b> '+tag(c)+'</p><p class="sub" style="margin:2px 0 8px">'+p.done+' of '+p.tot+' concepts complete</p><div class="row2"><button class="btn" onclick="smCh(\''+c+'\')">'+(p.att?'Continue':'Start')+'</button><button class="btn alt" onclick="goView(\'base\')">Choose a chapter</button></div></div>';
  else h+='<div class="card hi"><b>Every chapter is complete</b><button class="btn" style="margin-top:8px" onclick="goView(\'base\')">See all chapters</button></div>';
  h+='<div class="card">'+
    row('→','Worked examples','Step by step, with hints and Claude to ask',"goView('ex')")+
    row('◷','Concept Builder','Questions that adapt until it clicks',"goView('cb')")+
    row('✋','Play with it','Move things and watch what changes',"goView('pl')")+
    row('★','Stories','Where the maths came from',"goView('story')")+'</div>';
  h+='<div class="card"><b>What to learn first</b><p class="sub" style="margin:2px 0 6px">Some chapters are used again and again next year. Go deepest on those.</p>'+
    [[1,T1],[2,T2],[3,T3]].map(function(g){return'<p style="margin:10px 0 4px"><span class="smtag sm'+g[0]+'">'+TN[g[0]]+'</span></p><div class="smchips">'+g[1].filter(function(x){return BXN[x]}).map(function(x){var q=prog(x);return'<button onclick="smCh(\''+x+'\')">'+esc(BXN[x])+(q.tot&&q.done===q.tot?' ✓':'')+'</button>'}).join('')+'</div>'}).join('')+'</div>';
  app.innerHTML=h}

function mmView(){var h=head('More','Everything else in maths. Nothing has been removed.');
  h+='<div class="card">'+
    row('📈','How to improve','Weak spots and the routine for each',"goView('imp')")+
    row('✎','Check my notebook','Photo or stylus: Claude checks each step',"goView('check')")+
    row('✍','Written answers','Write one out and Claude marks the working',"goView('wr')")+
    row('▤','Progress','Levels, weak spots and history',"goView('spots')")+
    row('▦','Templates','The standard shape of each problem type',"goView('tl')")+
    row('⎙','Tutor pack','Practice sheet and answer key for each chapter',"goView('tp')")+
    row('✦','Rewards','Curiosity cards unlocked by practice',"goView('fx')")+
    row('☰','The old Today page','Plan, points and quick picks, as before',"smFull()")+'</div>';
  app.innerHTML=h}

/* chapter tags on the older chapter lists */
var BYN={};try{BXC.forEach(function(c){BYN[c[1]]=c[0]})}catch(e){}
function decorate(){if(view==='base')app.querySelectorAll('[data-bc]').forEach(function(b){var c=b.dataset.bc,n=b.querySelector('.bcn');if(n&&TIER[c]&&!n.querySelector('.smtag'))n.insertAdjacentHTML('beforeend',tag(c))});
  if(view==='practice')app.querySelectorAll('.chtile').forEach(function(b){var t=b.querySelector('b'),c=t&&BYN[t.textContent];if(c&&TIER[c]&&!b.querySelector('.smtag'))t.insertAdjacentHTML('afterend',tag(c))})}

var _r=render;render=function(){if(view==='today'&&!FULL)view='qp';if(view!=='today')FULL=false;_r();
  try{if(view==='qp')qpView();else if(view==='cd')cdView();else if(view==='mm')mmView();else decorate()}catch(e){}};
var st=document.createElement('style');st.textContent='.smtiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 12px}.smtiles button{display:flex;flex-direction:column;align-items:flex-start;gap:2px;text-align:left;border:1px solid var(--accent);background:var(--card);color:var(--fg);border-radius:14px;padding:12px;font:inherit;cursor:pointer}.smtiles button span{font-size:1.4rem}.smtiles .smwide{grid-column:1/-1}.smtiles button small{color:var(--muted);font-size:.8rem}.smtiles button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.ctdots{display:flex;gap:8px;margin:6px 0}.ctdots i{width:18px;height:18px;border-radius:50%;border:2px solid var(--accent);box-sizing:border-box}.ctdots i.on{background:var(--accent)}.smcrumb{display:flex;align-items:center;gap:10px;padding:8px 2px 0;font-size:.88rem;color:var(--muted)}.smcrumb span{font-weight:600;color:var(--fg)}.smtag{display:inline-block;font-size:.7rem;font-weight:600;border-radius:20px;padding:1px 8px;border:1px solid var(--line);color:var(--muted);white-space:nowrap;vertical-align:middle}.smtag.sm1{border-color:var(--accent);color:var(--accent)}.chtile .smtag{margin-top:4px}.smchips{display:flex;flex-wrap:wrap;gap:6px}.smchips button{border:1px solid var(--line);background:var(--card);color:var(--fg);border-radius:20px;padding:6px 12px;font:inherit;font-size:.86rem;cursor:pointer}.smchips button:focus-visible{outline:2px solid var(--accent);outline-offset:1px}';document.head.appendChild(st);
try{render()}catch(e){}
})();
/*SIMPLE-END*/
/*STUCK-START*/
/*STUCK: "I got stuck". The student uploads a photo of the question and their attempt (or types them).
  1. The app first asks: where do you think it went wrong?
  2. Claude then leads the student, one question at a time, to find the answer themselves, always naming the template step they are on.
  3. Once solved (or after real effort, on request) Claude lays out the whole path: where it went wrong, the strategy, the template and each step.
  4. The student must put the template's steps back in order before finishing, so the recipe is understood, not just read.
  5. The slip is saved to My mistakes and counted against the matching weak spot in Improve. */
(function(){
var K={st:'cap',photo:null,url:null,tq:'',ta:'',info:null,self:'',chat:[],busy:false,fin:null,ord:[],got:[],miss:0,tries:0,sim:null};window.STK=K;
var WHERE=[['start','I did not know how to start'],['mid','I started, but got stuck in the middle'],['wrong','I finished, but the answer is wrong'],['unsure','I am not sure']];
function weakNames(){return(window.IMPD&&IMPD.weak||[]).map(function(w){return w.n})}
function reset(){K.st='cap';K.photo=null;K.url=null;K.tq='';K.ta='';K.info=null;K.self='';K.chat=[];K.busy=false;K.fin=null;K.ord=[];K.got=[];K.miss=0;K.tries=0;K.sim=null}
window.stkOpen=function(){reset();goView('stk')};
function box(t){return'<div class="cmsg exp"><div class="ctext">'+t+'</div></div>'}
function tplBox(){var i=K.info;if(!i||!i.template)return'';return'<details class="card stktpl"><summary style="cursor:pointer"><b>Template: '+esc(i.template)+'</b> <span class="sub">tap to see the recipe</span></summary><ol style="margin:8px 0 0;padding-left:1.3em">'+(i.template_steps||[]).map(function(s){return'<li style="margin:3px 0">'+esc(s)+'</li>'}).join('')+'</ol></details>'}
function qBox(){var i=K.info;if(!i)return'';return'<div class="card"><div class="eyebrow">The question'+(i.topic?' · '+esc(i.topic):'')+'</div><p class="ctext" style="margin:4px 0 0">'+esc(i.problem)+'</p>'+(i.attempt?'<details style="margin-top:6px"><summary class="sub" style="cursor:pointer">Your attempt, as Claude read it</summary><p class="ctext sub" style="margin:4px 0 0">'+esc(i.attempt)+'</p></details>':'')+'</div>'}

/* ---------- screens ---------- */
function stkView(){var h='<h1>I got stuck</h1>';
  if(K.st==='cap'){
    h+='<p class="sub">Send the question and what you tried. Claude will not just hand you the answer: first you find where it went wrong, then you work it out together.</p>';
    h+='<div class="card hi"><b>1. Photo of the question and your working</b><p class="sub" style="margin:2px 0 8px">One photo with both is fine. Crossed-out lines are ignored.</p>'+pickBtns('stk','Take a photo')+'<img id="stkPv" alt="Your photo" style="margin-top:8px;border-radius:10px"'+(K.url?' src="'+K.url+'"':' hidden')+'></div>';
    h+='<div class="card"><b>Or type it</b><textarea id="stkQ" rows="3" placeholder="The question" style="width:100%;margin-top:6px">'+esc(K.tq)+'</textarea><textarea id="stkA" rows="4" placeholder="What you tried, line by line (optional)" style="width:100%;margin-top:6px">'+esc(K.ta)+'</textarea></div>';
    h+='<button class="btn" id="stkGo">Help me find where it went wrong</button><div id="stkMsg" class="sub" style="margin:8px 0 0"></div>';
    h+=histHtml();
  }else if(K.st==='reading'){h+='<div class="card"><p class="sub">Claude is reading your question and working…</p></div>'}
  else if(K.st==='where'){
    h+=qBox()+'<div class="card hi"><b>Before any help: where do you think it went wrong?</b><p class="sub" style="margin:2px 0 8px">Your own guess matters. Spotting the slip yourself is half the fix.</p>'+WHERE.map(function(w){return'<button class="opt sm" style="width:100%;text-align:left" onclick="stkWhere(\''+w[0]+'\')">'+esc(w[1])+'</button>'}).join('')+
      '<p class="sub" style="margin:10px 0 4px">Or say it in your own words, for example “line 3, the sign”.</p><form class="ask" onsubmit="event.preventDefault();stkWhere(\'own\')"><input id="stkW" placeholder="I think it went wrong at…" autocomplete="off" aria-label="Where it went wrong"><button class="chipb" type="submit">Go</button></form></div>';
  }else if(K.st==='chat'){
    h+=qBox()+tplBox()+'<div class="card"><b>Work it out together</b><p class="sub" style="margin:2px 0 4px">Answer each question on paper first, then type what you got. Short answers are fine.</p><div id="stkChat">'+chatList()+'</div>'+
      '<form class="ask" onsubmit="event.preventDefault();stkSay()"><input id="stkIn" placeholder="Your answer or question" autocomplete="off" aria-label="Your reply"'+(K.busy?' disabled':'')+'><button class="chipb" type="submit"'+(K.busy?' disabled':'')+'>Send</button></form>'+
      '<div class="row2" style="margin-top:8px"><button class="btn alt" onclick="stkSay(\'I do not know. Give me a bigger hint, please.\')"'+(K.busy?' disabled':'')+'>Bigger hint</button>'+
      (K.tries>=3?'<button class="btn alt" onclick="stkFinal(false)"'+(K.busy?' disabled':'')+'>Show me the whole path</button>':'<button class="btn alt" disabled title="Try a few steps first">Whole path after 3 tries</button>')+'</div></div>';
  }else if(K.st==='final'){h+=qBox()+'<div class="card"><p class="sub">Claude is laying out the whole path…</p></div>'}
  else if(K.st==='path'||K.st==='recall'||K.st==='done'){h+=pathHtml();if(K.st==='recall')h+=recallHtml();if(K.st==='done')h+=doneHtml()}
  app.innerHTML=h;wire()}
function chatList(){return K.chat.map(function(m){return m.me?'<div class="cmsg tqme"><div class="ctext">'+esc(m.t)+'</div></div>':'<div class="cmsg exp"><div class="ctext">'+(m.t==null?'<span class="muted">Claude is thinking…</span>':esc(m.t))+'</div></div>'}).join('')}
function pathHtml(){var f=K.fin,i=K.info;if(!f)return'';
  var h=(K.solved?'<div class="card hi"><div class="eyebrow">You found it</div><p style="margin:4px 0 0"><b>Answer: '+esc(f.answer)+'</b></p><p class="sub" style="margin:4px 0 0">You worked that out. Now see the whole path, so the next one like it is easy.</p></div>':'')+qBox();
  h+='<div class="card"><b>Where it went wrong</b><p style="margin:4px 0 0">'+esc(f.where)+'</p>'+(f.why?'<p class="sub" style="margin:6px 0 0">'+esc(f.why)+'</p>':'')+'</div>';
  h+='<div class="card"><b>Strategy: how to spot this kind of question</b><p style="margin:4px 0 0">'+esc(f.strategy)+'</p></div>';
  h+='<div class="card hi"><b>Template: '+esc(f.template.name)+'</b><ol style="margin:6px 0 0;padding-left:1.3em">'+f.template.steps.map(function(s){return'<li style="margin:3px 0">'+esc(s)+'</li>'}).join('')+'</ol></div>';
  h+='<div class="card"><b>The whole path for this question</b>'+f.path.map(function(p,n){return'<div style="border-top:1px solid var(--line);padding:8px 0"><div class="eyebrow">Template step '+(n+1)+(p.step?' · '+esc(p.step):'')+'</div><p class="ctext" style="margin:2px 0 0">'+esc(p.work)+'</p></div>'}).join('')+'<div class="fb ok" style="margin:8px 0 0"><b>Answer:</b> '+esc(f.answer)+'</div>'+(f.check?'<p class="sub" style="margin:8px 0 0"><b>Check it:</b> '+esc(f.check)+'</p>':'')+'</div>';
  h+='<div class="card"><b>Saved to your weak spots</b><p style="margin:4px 0 0">'+esc(f.weak_spot)+'</p><p class="sub" style="margin:4px 0 0"><b>Habit:</b> '+esc(f.habit)+'</p></div>';
  if(K.st==='path')h+='<button class="btn" onclick="stkRecall()">Now put the template in order</button>';
  return h}
function recallHtml(){var f=K.fin,n=f.template.steps.length;
  return'<div class="card hi" id="stkRec"><b>Your turn: the template, in order</b><p class="sub" style="margin:2px 0 8px">Tap the steps in the order you would use them. This is the recipe you will use next time, so it has to be yours.</p>'+
    (K.got.length?'<ol style="margin:0 0 8px;padding-left:1.3em">'+K.got.map(function(i){return'<li style="margin:3px 0">'+esc(f.template.steps[i])+'</li>'}).join('')+'</ol>':'')+
    '<div>'+K.ord.filter(function(i){return K.got.indexOf(i)<0}).map(function(i){return'<button class="opt sm" style="width:100%;text-align:left" onclick="stkTap('+i+')">'+esc(f.template.steps[i])+'</button>'}).join('')+'</div>'+
    '<p id="stkRm" class="sub" style="margin:6px 0 0">'+K.got.length+' of '+n+' in place</p></div>'}
function doneHtml(){var s=K.sim;
  var h='<div class="card hi"><div class="eyebrow">Template learnt</div><p style="margin:4px 0 0"><b>'+esc(K.fin.template.name)+'</b>'+(K.miss?'':' · first time, no slips')+'</p><p class="sub" style="margin:4px 0 8px">The best way to keep it: use it once more, straight away.</p>';
  if(!s)h+='<button class="btn" onclick="stkSim()"'+(K.busy?' disabled':'')+'>'+(K.busy?'Making one…':'Give me a similar question')+'</button>';
  else{h+='<p class="ctext" style="margin:0 0 8px"><b>Try this:</b> '+esc(s.q)+'</p><p class="sub" style="margin:0 0 8px">Write the template steps first, then solve on paper.</p><details><summary style="cursor:pointer"><b>Show the answer</b></summary><div class="fb ok" style="margin:6px 0">'+esc(s.a)+'</div>'+(s.r?'':'<div class="row2"><button class="btn alt" onclick="stkSimMark(1)">I got it right</button><button class="btn alt" onclick="stkSimMark(0)">Not yet</button></div>')+'</details>'+(s.r?'<p class="sub" style="margin:8px 0 0">'+(s.r===1?'Well done. The template is yours.':'Noted. It will come back in your weak-spot practice.')+'</p>':'')}
  h+='</div><div class="row2"><button class="btn alt" onclick="stkOpen()">Another question</button><button class="btn alt" onclick="goView(\'mk\')">My mistakes</button></div>';
  return h}
function histHtml(){var L=(S.stk||[]).slice(-5).reverse();if(!L.length)return'';
  return'<div class="card"><b>Recently stuck on</b>'+L.map(function(x){return'<div style="border-top:1px solid var(--line);padding:8px 0"><b>'+esc(x.tpl)+'</b><small class="sub" style="display:block">'+esc(x.topic||'')+' · '+esc(x.ws||'')+'</small></div>'}).join('')+'</div>'}
function wire(){if(K.st==='cap'){try{onPick('stk',function(f){K.photo=f;try{K.url=URL.createObjectURL(f)}catch(e){}var p=document.getElementById('stkPv');if(p&&K.url){p.src=K.url;p.hidden=false}})}catch(e){}
    var g=document.getElementById('stkGo');if(g)g.onclick=read}
  if(K.st==='chat'){var o=document.getElementById('stkChat');if(o&&o.lastChild)o.lastChild.scrollIntoView({block:'nearest'});var i=document.getElementById('stkIn');if(i&&!K.busy&&K.chat.length)i.focus({preventScroll:true})}}
function rer(){if(view==='stk')render()}

/* ---------- Claude ---------- */
function ctx(){var i=K.info;return'QUESTION: '+i.problem+'\nSTUDENT’S ATTEMPT: '+(i.attempt||'(none)')+'\nTOPIC: '+(i.topic||'')+'\nTEMPLATE THAT FITS: '+i.template+'\nTEMPLATE STEPS: '+(i.template_steps||[]).map(function(s,n){return(n+1)+'. '+s}).join(' ')+'\nWHERE THE WORK FIRST GOES WRONG (for you only): '+(i.first_slip||'')+'\nCORRECT ANSWER (for you only, never state it): '+(i.answer||'')+'\nSTUDENT’S OWN GUESS AT WHERE IT WENT WRONG: '+(K.self||'')}
async function read(){var msg=document.getElementById('stkMsg');K.tq=(document.getElementById('stkQ')||{}).value||'';K.ta=(document.getElementById('stkA')||{}).value||'';K.tq=K.tq.trim();K.ta=K.ta.trim();
  if(!K.photo&&!K.tq){msg.textContent='Add a photo, or type the question.';return}
  var s=null;try{s=await getS()}catch(e){}if(!s){msg.textContent='Claude is not available just now. Try again in a moment.';return}
  var opt={cache:false,modelTier:'default'};
  if(K.photo){try{var lim=await s.limits();if(!lim.images){msg.textContent='Photo reading is not available on this account. Type the question instead.';return}opt.images=[await shrink(K.photo)]}catch(e){msg.textContent='Could not open that photo. Try another, or type it.';return}}
  K.st='reading';rer();
  var p='You are reading a senior-school maths question and a student’s attempt at it.'+(K.photo?' The photo shows the question and the student’s handwritten working.':'')+(K.tq?'\nTYPED QUESTION: '+K.tq:'')+(K.ta?'\nTYPED ATTEMPT: '+K.ta:'')+
    '\nSolve it yourself carefully. Then return JSON only: {"problem":"the question written out in full, plain text, use symbols like √ ² π θ","attempt":"the student’s working in short, one line per step, or empty if none","topic":"the chapter","template":"a short name for the standard method (template) this kind of question uses","template_steps":["3 to 6 short general steps of that method, each under 14 words, not specific to this question"],"first_slip":"exactly where the student’s work first goes wrong and what the slip is, or \'not started\', or \'no slip found\'","answer":"the correct final answer"}';
  try{var d=await s.json(p,opt);if(!d||!d.problem||!d.template)throw new Error('shape');d.template_steps=Array.isArray(d.template_steps)?d.template_steps.slice(0,6).map(String):[];K.info=d;K.st='where'}
  catch(e){K.st='cap';rer();var m=document.getElementById('stkMsg');if(m)m.textContent=e&&e.code?sampleErr(e):'Claude could not read that. Try a clearer photo, or type it.';return}
  rer();window.scrollTo(0,0)}
window.stkWhere=function(k){var w=WHERE.filter(function(x){return x[0]===k})[0],t=k==='own'?((document.getElementById('stkW')||{}).value||'').trim():w&&w[1];if(!t)return;
  K.self=t;K.st='chat';K.chat=[{me:1,t:'Where I think it went wrong: '+t}];turn(null,true)};
window.stkSay=function(t){if(K.busy||K.st!=='chat')return;if(t==null){var i=document.getElementById('stkIn');t=i?i.value.trim():'';if(!t)return}K.chat.push({me:1,t:t});K.tries++;turn(t,false)};
async function turn(text,first){K.busy=true;var rep={me:0,t:null};K.chat.push(rep);rer();
  try{var s=await getS();if(!s)throw new Error('none');
    var hist=K.chat.slice(0,-1).slice(-12).map(function(m){return(m.me?'STUDENT: ':'YOU: ')+m.t}).join('\n');
    var p='You are a patient maths tutor helping a student who got stuck. The student must find the answer themselves.\n'+ctx()+'\nCONVERSATION SO FAR:\n'+hist+
      '\nRULES: '+(first?'Start from the student’s own guess. Say briefly whether the guess is close (without giving the slip away if they have not found it), then ask one question that points them at the first slip. If they have not started, ask what the question wants and which template fits.':'Respond to what the student just said. If it is right, say so in a few words and ask for the next step. If it is wrong, ask a question that lets them see why, without correcting it for them.')+
      ' Always name the template step you are on, as “Template step 2: …”. Ask exactly one question. Never state the final answer, and never do a step the student could do. If the student says they do not know, give a bigger hint: a tiny similar example with numbers, then ask again. Plain text, no markdown, at most 80 words. Set "solved" true only when the student has themselves written the correct final answer.\nReturn JSON only: {"reply":"...","solved":false}';
    var r=await s.json(p,{cache:false,modelTier:'default'});rep.t=String(r&&r.reply||'Try putting that another way.');K.busy=false;
    if(r&&r.solved===true){K.solved=true;rer();return stkFinal(true)}}
  catch(e){rep.t=e&&e.code?sampleErr(e):'Claude could not reply just now. Try again in a moment.';K.busy=false}
  rer()}
window.stkFinal=async function(solved){if(K.busy)return;K.busy=true;K.solved=!!solved;K.st='final';rer();window.scrollTo(0,0);
  var names=weakNames();
  try{var s=await getS();if(!s)throw new Error('none');
    var hist=K.chat.slice(-14).map(function(m){return(m.me?'STUDENT: ':'TUTOR: ')+m.t}).join('\n');
    var p='A student was stuck on this maths question and has '+(solved?'now worked out the answer with hints.':'asked to see the whole path after trying.')+'\n'+ctx()+'\nTHE CONVERSATION:\n'+hist+
      '\nWrite the full explanation the student keeps. Plain text in every field, no markdown, symbols like √ ² π θ. Return JSON only: {"where":"where the student’s work went wrong, in one or two sentences, pointing to their line","why":"why this slip happens, one sentence","strategy":"how to recognise this kind of question and choose the template, two sentences","template":{"name":"short name","steps":["3 to 6 general steps, each under 14 words"]},"path":[{"step":"short label of the template step","work":"the working for this question at this step"}],"answer":"the final answer","weak_spot":"'+(names.length?'exactly one of: '+names.join(' | ')+' — or, only if none fits, a new short name':'a short name for the skill that slipped')+'","habit":"one line the student can do every time to avoid this","check":"a quick way to check this answer"}. The path must have one entry per template step, in the same order.';
    var f=await s.json(p,{cache:false,modelTier:'default'});
    if(!f||!f.template||!Array.isArray(f.template.steps)||!f.template.steps.length||!Array.isArray(f.path))throw new Error('shape');
    f.template.steps=f.template.steps.slice(0,7).map(String);K.fin=f;K.st='path';record()}
  catch(e){K.st='chat';K.chat.push({me:0,t:e&&e.code?sampleErr(e):'Claude could not lay out the path just now. Tap again in a moment.'})}
  K.busy=false;rer();window.scrollTo(0,0)};
function record(){var f=K.fin,i=K.info;if(window.ROLE!=='student')return;
  try{mkAdd({src:'I got stuck',topic:i.topic||'Maths',q:i.problem,habit:f.weak_spot,note:f.where+(K.self?' (Student’s own guess: '+K.self+')':''),h:'Template: '+f.template.name+'. '+f.template.steps.map(function(s,n){return(n+1)+'. '+s}).join(' '),ref:'stk:'+String(i.problem).slice(0,100)})}catch(e){}
  try{var ix=weakNames().indexOf(f.weak_spot);if(ix>=0){S.impt=S.impt||{};var t=S.impt[ix]=S.impt[ix]||{ok:0,no:0,ts:0};t.no++;t.ts=Date.now()}}catch(e){}
  S.stk=S.stk||[];S.stk.push({ts:Date.now(),topic:i.topic||'',tpl:f.template.name,ws:f.weak_spot,solved:K.solved?1:0});if(S.stk.length>60)S.stk=S.stk.slice(-60);
  try{save()}catch(e){}}
window.stkRecall=function(){var n=K.fin.template.steps.length,a=[];for(var i=0;i<n;i++)a.push(i);for(var j=n-1;j>0;j--){var r=Math.floor(Math.random()*(j+1)),t=a[j];a[j]=a[r];a[r]=t}
  if(n>1&&a.every(function(v,i){return v===i})){var t2=a[0];a[0]=a[1];a[1]=t2}K.ord=a;K.got=[];K.miss=0;K.st='recall';rer();var e=document.getElementById('stkRec');if(e)e.scrollIntoView({behavior:'smooth',block:'start'})};
window.stkTap=function(i){var need=K.got.length,f=K.fin;
  if(i===need){K.got.push(i);if(K.got.length===f.template.steps.length){K.st='done';try{var L=S.stk;if(L&&L.length)L[L.length-1].tl=1;save()}catch(e){}}rer();var e=document.getElementById('stkRec');if(e)e.scrollIntoView({block:'nearest'});return}
  K.miss++;var m=document.getElementById('stkRm');if(m)m.textContent='Not yet. Ask yourself: what has to be known before this step can happen? Step '+(need+1)+' comes first.'};
window.stkSim=async function(){if(K.busy)return;K.busy=true;rer();
  try{var s=await getS();if(!s)throw new Error('none');var f=K.fin;
    var r=await s.json('Write one new maths question that uses exactly this template, at the same level as the original but with different numbers or setting. Original: '+K.info.problem+'\nTemplate: '+f.template.name+': '+f.template.steps.join(' | ')+'\nPlain text, symbols like √ ² π θ. Return JSON only: {"q":"the question","a":"the final answer with a one-line method"}',{cache:false,modelTier:'default'});
    if(!r||!r.q)throw new Error('shape');K.sim={q:String(r.q),a:String(r.a||''),r:0}}
  catch(e){try{showToast(e&&e.code?sampleErr(e):'Could not make one just now. Try again.')}catch(_){}}
  K.busy=false;rer()};
window.stkSimMark=function(ok){if(!K.sim)return;K.sim.r=ok?1:2;
  try{if(window.ROLE==='student'){var ix=weakNames().indexOf(K.fin.weak_spot);if(ix>=0){S.impt=S.impt||{};var t=S.impt[ix]=S.impt[ix]||{ok:0,no:0,ts:0};if(ok)t.ok++;else t.no++;t.ts=Date.now()}save()}}catch(e){}
  rer()};

/* ---------- placement: a big button on Quick prep and Build concepts, a row under More ---------- */
function bigBtn(){return'<button class="stkbig" onclick="stkOpen()"><span class="stki">✋</span><span><b>I got stuck</b><small>Photo of the question and your attempt. Find where it went wrong, then learn the template.</small></span></button>'}
var _r=render;render=function(){_r();try{
  if(view==='stk'){stkView();return}
  if(view==='qp'||view==='cd'){var hd=app.querySelector('.tdhd'),nx=hd&&hd.nextElementSibling;if(hd&&!app.querySelector('.stkbig'))(nx&&nx.classList.contains('sub')?nx:hd).insertAdjacentHTML('afterend',bigBtn())}
  if(view==='mm'){var c=app.querySelector('.card');if(c&&!app.querySelector('.stkrow'))c.insertAdjacentHTML('afterbegin','<button class="trow stkrow" onclick="stkOpen()"><span class="tn">✋</span><span class="tt"><b>I got stuck</b><small>Upload a question you could not do</small></span></button>')}
}catch(e){}};
try{if(typeof SECN!=='undefined')SECN.stk='I got stuck';var G=GRP.maths;if(G&&!G.some(function(t){return t[0]==='stk'}))G.push(['stk','I got stuck'])}catch(e){}
var _sb=subBar;subBar=function(){_sb();try{if(view!=='stk')return;var c=document.querySelector('#sub .smcrumb');if(c)c.innerHTML='<button class="link" onclick="goView(\'qp\')">← Quick prep</button><span>I got stuck</span>'}catch(e){}};
var _vt=viewTop;viewTop=function(v){_vt(v);if(v==='stk')reset()};
var st=document.createElement('style');st.textContent='.stkbig{display:flex;align-items:center;gap:12px;width:100%;text-align:left;border:0;border-radius:16px;padding:14px 16px;margin:0 0 12px;background:var(--bad);color:#fff;font:inherit;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.12)}.stkbig b{display:block;font-size:1.08rem}.stkbig small{display:block;opacity:.92;font-size:.84rem;margin-top:2px}.stki{font-size:1.8rem;flex:0 0 auto}.stkbig:focus-visible{outline:3px solid var(--accent);outline-offset:2px}.stktpl summary{list-style:revert}';document.head.appendChild(st);
try{render()}catch(e){}
})();
/*STUCK-END*/
/*ALTM-START*/
/*ALTM: "Other ways to solve it" on every worked example. Shown under the full explanation once it is open.
  Claude writes one or two genuinely different methods on demand; the result is kept per example so it is asked for only once. */
(function(){
var BUSY={};
function store(){S.exalt=S.exalt||{};return S.exalt}
function cardHtml(e){var d=store()[e.id],h='<div class="card altm" id="xAlt"><h2>Other ways to solve it</h2>';
  if(!d){h+='<p class="sub" style="margin:0 0 8px">The method above is not the only road. See a different way in, when it is better, and how it checks the answer.</p><button class="btn alt" onclick="altGet(\''+e.id+'\')"'+(BUSY[e.id]?' disabled':'')+'>'+(BUSY[e.id]?'Claude is working one out…':'Show another method')+'</button><div class="sub" id="altMsg" style="margin:6px 0 0"></div></div>';return h}
  if(!d.m.length){h+='<p style="margin:0">'+esc(d.note||'This question has really only one sensible method.')+'</p></div>';return h}
  d.m.forEach(function(m,i){h+='<div style="'+(i?'border-top:1px solid var(--line);padding-top:10px;margin-top:10px':'')+'"><div class="eyebrow">Method '+(i+2)+'</div><p style="margin:2px 0 4px"><b>'+esc(m.name)+'</b></p><p class="sub" style="margin:0 0 6px">'+esc(m.idea)+'</p><ol class="steps" style="margin:0;padding-left:1.3em">'+m.steps.map(function(s){return'<li style="margin:3px 0">'+fmt(s)+'</li>'}).join('')+'</ol>'+
    (m.when?'<p style="margin:8px 0 0"><b>Use it when:</b> '+esc(m.when)+'</p>':'')+(m.compare?'<p class="sub" style="margin:4px 0 0"><b>Compared with method 1:</b> '+esc(m.compare)+'</p>':'')+'</div>'});
  h+=(d.note?'<p class="sub" style="margin:10px 0 0">'+esc(d.note)+'</p>':'')+'<p class="sub" style="margin:10px 0 0">Which way would you choose in an exam, and why? Ask Claude below if you want to talk it through.</p></div>';return h}
window.altGet=async function(id){if(BUSY[id])return;var e=BX.filter(function(x){return x.id===id})[0];if(!e)return;BUSY[id]=true;try{render()}catch(_){}
  var err='';
  try{var s=await getS();if(!s)throw new Error('none');
    var p='A senior-school maths worked example has been solved by one method. Give up to two GENUINELY different correct methods (a different idea or route, not the same steps reworded). If no sensible different method exists, return an empty list and say why in "note".\nQUESTION: '+e.q+'\nANSWER: '+e.a+'\nMETHOD 1 (already shown): '+e.s.map(function(x){return plain(x)}).join(' ')+
      '\nRules: each method must reach exactly the answer above; check it before writing. Plain text, symbols like √ ² π θ, no markdown, no LaTeX. Steps short, at most 6 per method. You may wrap the key result of a step in {{ }}.\nReturn JSON only: {"methods":[{"name":"short name","idea":"one sentence: the idea behind this route","steps":["..."],"when":"when this route is the better choice","compare":"one sentence comparing it with method 1, or how it confirms the answer"}],"note":"optional one line"}';
    var r=await s.json(p,{cache:false,modelTier:'default'});
    var m=(r&&Array.isArray(r.methods)?r.methods:[]).filter(function(x){return x&&x.name&&Array.isArray(x.steps)&&x.steps.length}).slice(0,2).map(function(x){return{name:String(x.name),idea:String(x.idea||''),steps:x.steps.slice(0,7).map(String),when:String(x.when||''),compare:String(x.compare||'')}});
    store()[id]={m:m,note:String(r&&r.note||''),ts:Date.now()};try{save()}catch(_){}}
  catch(x){err=x&&x.code?sampleErr(x):'Claude could not write one just now. Try again in a moment.'}
  BUSY[id]=false;try{render()}catch(_){}
  if(err){var g=document.getElementById('altMsg');if(g)g.textContent=err}
  else{var c=document.getElementById('xAlt');if(c)c.scrollIntoView({behavior:'smooth',block:'start'})}};
function put(){if(view!=='ex'||!EXI)return;var ex=document.getElementById('xExpl');if(!ex||document.getElementById('xAlt'))return;var e=BX.filter(function(x){return x.id===EXI})[0];if(e)ex.insertAdjacentHTML('afterend',cardHtml(e))}
if(typeof exOne==='function'){var _eo=exOne;exOne=function(){var r=_eo.apply(this,arguments);try{put()}catch(_){}return r}}
var _r=render;render=function(){_r();try{if(view!=='ex'||!EXI)return;var ex=document.getElementById('xExpl');if(!ex||document.getElementById('xAlt'))return;var e=BX.filter(function(x){return x.id===EXI})[0];if(e)ex.insertAdjacentHTML('afterend',cardHtml(e))}catch(_){}};
})();
/*ALTM-END*/
/*TPLTAG-START*/
/*TPLTAG: every worked example carries its template name, coloured by the kind of template:
  1 rewrite to a standard shape · 2 use a formula · 3 cases and signs · 4 counting · 5 proof · 6 set up and solve.
  Shown on the example card and in the chapter’s example list. */
(function(){
var FAM={1:'Standard shape',2:'Formula',3:'Cases and signs',4:'Counting',5:'Proof',6:'Set up and solve'};
var T={
cx1:['Conjugate + cycle of 4',1],cx2:['Polar form',1],cx3:['Square root of a + ib',6],cx4:['Equate real and imaginary',6],cx5:['Quadratic formula with i',2],cx6:['ω identities',1],cx7:['Locus of z',6],
ss1:['AP from two terms',6],ss2:['Sum of an AP, two answers',3],ss3:['Three terms in GP',6],ss4:['GP sum to infinity',2],ss5:['Rewrite as a GP',1],ss6:['Σn, Σn², Σn³',2],ss7:['AM–GM',2],ss8:['Multiply by r and subtract',1],
pt1:['Distance formula',2],pt2:['Section formula',2],pt3:['Zero area',2],pt4:['Locus of a point',6],pt5:['Midpoints of diagonals',2],
sl1:['Intercept form',1],sl2:['Normal form',1],sl3:['Perpendicular slopes',2],sl4:['Distance between parallels',2],sl5:['Foot of the perpendicular',6],sl6:['Family of lines',6],sl7:['Angle between lines, ±',3],
ci1:['Complete the square',1],ci2:['Three points',6],ci3:['Diameter form',2],ci4:['Touching both axes, ±',3],ci5:['Distance = radius',2],ci6:['Centre on a line',6],
cs1:['Read off a parabola',1],cs2:['Focus and directrix',2],cs3:['Read off an ellipse',1],cs4:['Ellipse from data',6],cs5:['Read off a hyperbola',1],cs6:['Hyperbola from data',6],
td1:['Distances in space',2],td2:['Section formula in space',2],td3:['Centroid',2],td4:['Locus in space',6],
pr1:['Addition rule',2],pr2:['Complement for "at least one"',3],pr3:['Sample space',4],pr4:['Count favourable cases',4],pr5:['Complement and union',2],pr6:['Odds',2],
md1:['Mean deviation about the mean',2],md2:['Mean deviation about the median',2],md3:['Step deviation',2],md4:['Coefficient of variation',2],md5:['Rebuild the totals',1],
se1:['Roster form, count subsets',4],se2:['Set operations',1],se3:['Two-set Venn',4],se4:['Three-set Venn',4],
rf1:['Domain: what is forbidden',6],rf2:['Domain: what is forbidden',6],rf3:['Relation as pairs',4],rf4:['Combining functions',2],rf5:['Count relations',4],rf6:['Composition: inside first',2],rf7:['Modulus: two cases',3],
tg1:['Arc = radius × angle',2],tg2:['Triangle + quadrant',3],tg3:['Reduce the angle',3],tg4:['Compound angles',2],tg5:['Sum to product',5],tg6:['Half angle + quadrant',3],tg7:['Prove a multiple-angle identity',5],tg8:['Allied angles',3],tg9:['t-formulas',2],
te1:['General solution',6],te2:['Change to one function',6],te3:['a cos x + b sin x',1],te4:['Principal solutions',3],te5:['Make a product',6],
mi1:['Induction',5],mi2:['Induction',5],
qe1:['Discriminant = 0',6],qe2:['Sum and product of roots',2],qe3:['Form the equation',2],qe4:['Substitute to a quadratic',1],qe5:['Sign of a quadratic',3],qe6:['Square, then test roots',3],qe7:['Quadratic formula',2],qe8:['Complex roots',2],qe9:['Discriminant = 0, keep ±',3],
pc1:['Fill the places',4],pc2:['Solve for n',6],pc3:['Repeated letters',4],pc4:['"At least": split cases',4],pc5:['ⁿCᵣ = ⁿCₙ₋ᵣ',4],
bt1:['Expand',2],bt2:['General term',2],bt3:['General term, power 0',2],bt4:['Middle term',2],bt5:['Binomial for arithmetic',1],
lm1:['Factor and cancel',1],lm2:['Rationalise',1],lm3:['(xⁿ − aⁿ)/(x − a)',2],lm4:['Turn into sin θ/θ',1],lm5:['Left and right limits',3],lm6:['sin θ/θ',1],
dv1:['First principles',5],dv2:['Product rule',2],dv3:['Quotient rule',2],dv4:['Slope of a tangent',2],dv5:['Power rule',2],dv6:['First principles',5],
mr1:['Converse and contrapositive',5],mr2:['Negation',5],
co1:['Karl Pearson’s r',2],co2:['Spearman’s rank',2],
ix1:['Aggregate index',2],ix2:['Weighted relatives',2],ix3:['Moving averages',2],
r21:['Equivalence: three checks',5],r22:['One-one and onto',5],r23:['Composition',2],
it1:['Principal values',3],it2:['Adding inverse tangents',2],it3:['Back into the principal range',3],
mx1:['Row by column',2],mx2:['Substitute the matrix',2],mx3:['Symmetric + skew parts',1],mx4:['Equate entries',6],
dt1:['Expand a determinant',2],dt2:['Area by determinant, ±',3],dt3:['Inverse by adjoint',2],dt4:['Matrix method',6],
cd1:['Left = right = value',3],cd2:['Chain rule',2],cd3:['Implicit',2],cd4:['Take logs',1],cd5:['Parametric',2],
ad1:['Rate of change',2],ad2:['Sign of f′',3],ad3:['Tangent and normal',2],ad4:['Derivative tests',3],ad5:['Optimise',6],
ig1:['Substitution',1],ig2:['By parts',2],ig3:['Partial fractions',1],ig4:['Identity first',1],ig5:['Complete the square',1],
di1:['Evaluate',2],di2:['f(a − x) property',1],di3:['Split at the corner',3],
de1:['Order and degree',1],de2:['Separate variables',6],de3:['Integrating factor',2],de4:['Put y = vx',1],
p21:['Conditional probability',2],p22:['Bayes’ theorem',2],p23:['Independence',2],p24:['Distribution and mean',4],
vc1:['Unit vector',2],vc2:['Angle by dot product',2],vc3:['Area by cross product',2],vc4:['Projection',2],
g31:['Direction cosines',2],g32:['Line in space',2],g33:['Angle between lines',2],g34:['Distance to a plane',2],
ar1:['Area as an integral',2],ar2:['Area between curves',6],
cm1:['Marginal revenue',2],cm2:['Maximise profit',6],
lr1:['Regression line',2],lr2:['Two regression lines',6],
lp1:['Corner points',6],lp2:['Form, then corner points',6]};
function ov(){var o=null;try{o=(window.ROLE==='student'?S.tplx:JSON.parse(localStorage.getItem('sbTplx')||'null'))}catch(_){}return o||{}}
function tp(id){var o=ov()[id];return o&&o[0]?o:(T[id]||null)}
function setOv(id,v){if(window.ROLE==='student'){S.tplx=S.tplx||{};if(v)S.tplx[id]=v;else delete S.tplx[id];try{save()}catch(_){}}
  else{var o=ov();if(v)o[id]=v;else delete o[id];try{localStorage.setItem('sbTplx',JSON.stringify(o))}catch(_){}}}
var ED=null;
window.tplEdit=function(){ED={n:tp(EXI)[0],f:tp(EXI)[1]};paint()};
window.tplPick=function(f){if(!ED)return;var i=document.getElementById('tplN');if(i)ED.n=i.value;ED.f=f;paint()};
window.tplSave=function(){var i=document.getElementById('tplN'),n=(i?i.value:ED.n).trim().slice(0,40);if(!n){showToast('Type a template name first.');return}setOv(EXI,[n,ED.f]);ED=null;paint();showToast('Template label saved.')};
window.tplReset=function(){setOv(EXI,null);ED=null;paint();showToast('Back to the original label.')};
window.tplCancel=function(){ED=null;paint()};
function paint(){var b=document.getElementById('tplBox');if(b)b.outerHTML=box(EXI)}
function box(id){var t=tp(id);if(!t)return'';var mine=!!(ov()[id]&&ov()[id][0]);
  if(!ED)return'<div id="tplBox" style="margin:4px 0 6px"><span class="sub" style="font-size:.78rem">Template</span> '+chip(id,1)+' <span class="sub" style="font-size:.78rem">· '+esc(FAM[t[1]])+(mine?' · your label':'')+'</span> <button class="link" style="font-size:.8rem" onclick="tplEdit()">✎ Edit</button></div>';
  return'<div id="tplBox" class="tpled"><label class="sub" for="tplN" style="font-size:.8rem">Template name</label><input id="tplN" maxlength="40" value="'+esc(ED.n)+'" style="width:100%;margin:2px 0 8px"><div class="sub" style="font-size:.8rem;margin-bottom:4px">Colour: what kind of move it is</div><div class="tplegend">'+Object.keys(FAM).map(function(k){return'<button class="tpc tf'+k+(+k===+ED.f?' on':'')+'" onclick="tplPick('+k+')" aria-pressed="'+(+k===+ED.f)+'">'+FAM[k]+'</button>'}).join('')+'</div><div class="row2" style="margin-top:8px"><button class="btn" onclick="tplSave()">Save</button><button class="btn alt" onclick="tplCancel()">Cancel</button></div>'+(T[id]?'<button class="link" style="margin-top:6px;font-size:.82rem" onclick="tplReset()">Reset to the original: '+esc(T[id][0])+'</button>':'')+'</div>'}
function chip(id,big){var t=tp(id);if(!t)return'';return'<span class="tpc tf'+t[1]+(big?' big':'')+'" title="'+esc(FAM[t[1]])+' template">'+esc(t[0])+'</span>'}
window.tplOf=function(id){var t=tp(id);return t?{n:t[0],f:t[1],fam:FAM[t[1]]}:null};
function legend(){return'<div class="tplegend">'+Object.keys(FAM).map(function(k){return'<span class="tpc tf'+k+'">'+FAM[k]+'</span>'}).join('')+'</div>'}
function put(){if(view!=='ex')return;
  if(EXI){var q=app.querySelector('.qcard .ttl');if(q&&!document.getElementById('tplBox')){if(ED&&ED.id!==EXI)ED=null;q.insertAdjacentHTML('afterend',box(EXI))}if(ED)ED.id=EXI}
  else{var rows=app.querySelectorAll('.trow[data-i]');rows.forEach(function(b){var tt=b.querySelector('.tt small');if(tt&&!b.querySelector('.tpc'))tt.insertAdjacentHTML('beforebegin',chip(b.dataset.i))});
    var c=rows.length&&rows[0].closest('.card');if(c&&!app.querySelector('.tplegend'))c.insertAdjacentHTML('beforebegin','<div class="card"><b>Template colours</b><p class="sub" style="margin:2px 0 6px">Each example shows its template. The colour says what kind of move it is.</p>'+legend()+'</div>')}}
if(typeof exOne==='function'){var _eo=exOne;exOne=function(){var r=_eo.apply(this,arguments);try{put()}catch(_){}return r}}
var _r=render;render=function(){_r();try{put()}catch(_){}};
var st=document.createElement('style');st.textContent='.tpc{display:inline-block;font-size:.76rem;font-weight:600;border-radius:20px;padding:2px 9px;margin:2px 4px 2px 0;border:1.5px solid;white-space:nowrap;vertical-align:middle;background:var(--card)}.tpc.big{font-size:.86rem;padding:3px 11px}.trow .tt .tpc{margin:3px 0 2px;display:table;white-space:normal}.tplegend{display:flex;flex-wrap:wrap;gap:4px}'+
 '.tplegend button.tpc{cursor:pointer;font:inherit;font-size:.76rem;font-weight:600}.tplegend button.tpc.on{color:#fff}.tf1.on{background:#1c64c8}.tf2.on{background:#1f8a43}.tf3.on{background:#c2410c}.tf4.on{background:#7048e8}.tf5.on{background:#c2255c}.tf6.on{background:#0b7285}.tpled{border:1px solid var(--line);border-radius:12px;padding:10px;margin:6px 0}'+'.tf1{color:#1c64c8;border-color:#1c64c8}.tf2{color:#1f8a43;border-color:#1f8a43}.tf3{color:#c2410c;border-color:#c2410c}.tf4{color:#7048e8;border-color:#7048e8}.tf5{color:#c2255c;border-color:#c2255c}.tf6{color:#0b7285;border-color:#0b7285}';document.head.appendChild(st);
try{render()}catch(_){}
})();
/*TPLTAG-END*/

;

/*PACE-START*/
/* PACE: can the student map a question to a template, and how long does it take.
   Additive module. Wraps stDrill, stPick and render. Reads S.ev; adds a "Pace and patterns" screen under More. */
(function(){
try{
var SPOT_PAR=20000; /* app's estimate: 20 s to spot a pattern */
function parQ(l){l=Math.max(1,Math.min(3,+l||1));return(60+30*l)*1000} /* app's estimate: 90, 120, 150 s by level */
function med(a){if(!a.length)return null;var b=a.slice().sort(function(x,y){return x-y}),m=b.length>>1;return b.length%2?b[m]:(b[m-1]+b[m])/2}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function fmt(ms){if(ms==null)return '–';var s=Math.round(ms/1000);return s<60?s+' s':Math.floor(s/60)+' min '+(s%60)+' s'}

/* 1. exact time to spot a pattern */
var _d=window.stDrill;
if(typeof _d==='function'){window.stDrill=function(){var r=_d.apply(this,arguments);try{if(STV&&STV.dr&&STV.dr.pick==null)window.__paceT0=Date.now()}catch(e){}return r}}
var _p=window.stPick;
if(typeof _p==='function'){window.stPick=function(k){
  var pid=null,c=null,chosen=null,t0=null,now=Date.now();
  try{var d=STV.dr;if(d&&d.pick==null){var it=d.q[d.i];pid=it.pid;c=d.c;chosen=d.o[k];t0=window.__paceT0||null}}catch(e){}
  var r=_p.apply(this,arguments);
  try{if(pid){var e=S.ev[S.ev.length-1];if(e&&e.k==='sp'&&e.ts>=now){e.pid=pid;e.pick=chosen;e.c=c;if(t0&&now-t0>0&&now-t0<600000)e.ms=now-t0;save()}}}catch(e2){}
  return r}}

/* 2. read the data */
function data(){
  var ev=(typeof S!=='undefined'&&S&&S.ev)||[],sp={},qs=[],prev=null;
  ev.forEach(function(e){
    if(!e||!e.ts)return;
    if(e.k==='sp'&&e.pid){var o=sp[e.pid]||(sp[e.pid]={pid:e.pid,n:0,ok:0,ms:[]});o.n++;if(e.ok)o.ok++;if(e.ms)o.ms.push(e.ms)}
    if(e.k==='q'&&typeof e.ok==='boolean'&&!/mock|past paper/.test(e.type||'')){
      var gap=prev?e.ts-prev:null;
      if(gap!=null&&gap>=3000&&gap<=300000)qs.push({ok:e.ok,ms:gap,l:e.l,key:e.topic||e.tag||'Practice'})}
    prev=e.ts});
  return{sp:sp,qs:qs}}
function patInfo(pid){try{var r=stFind(pid);return r?{n:r.p[1],c:r.c.n}:{n:pid,c:''}}catch(e){return{n:pid,c:''}}}
function zone(o){
  if(o.n<2)return{t:'Too few tries so far',c:'var(--muted)',o:3};
  var acc=o.ok/o.n,m=med(o.ms);
  if(acc<0.6)return{t:'Not mapped yet: practise Spot',c:'var(--bad)',o:0};
  if(m!=null&&m>SPOT_PAR*1.5)return{t:'Mapped, but slow',c:'#e8a317',o:1};
  return{t:'Mapped and fast',c:'var(--ok,#2a8)',o:2}}

/* 3. the screen */
function paceView(){
  var D=data(),h='<div class="tdhd"><h1>Pace and patterns</h1></div><p class="sub">Two questions. Can you tell which template a question belongs to? And how long does it take?</p>';
  h+='<p class="back"><button class="link" onclick="goView(\'mm\')">← More</button></p>';
  /* spotting */
  var ids=Object.keys(D.sp);
  h+='<div class="card"><b>1 · Spotting the template</b>';
  if(!ids.length){
    h+='<p class="sub" style="margin:6px 0">Nothing yet. Open <b>Which method fits?</b> in Quick prep, choose a chapter and try its pattern spotter. Each answer is timed.</p><button class="btn" onclick="goView(\'st\')">Open Which method fits?</button>'
  }else{
    var rows=ids.map(function(id){var o=D.sp[id],z=zone(o),pi=patInfo(id);return{o:o,z:z,pi:pi}}).sort(function(a,b){return a.z.o-b.z.o||b.o.n-a.o.n});
    h+='<p class="sub" style="margin:6px 0">Not mapped means you did not name the right pattern. That is fresh ground: you are solving without a template. Mapped but slow means the template is known but takes time to run.</p>';
    rows.forEach(function(r){var m=med(r.o.ms);
      h+='<div style="border-top:1px solid var(--line);padding:8px 0"><b>'+esc(r.pi.n)+'</b> <small style="color:var(--muted)">'+esc(r.pi.c)+'</small><br><span style="color:'+r.z.c+';font-weight:600">'+esc(r.z.t)+'</span><br><small>'+r.o.ok+' of '+r.o.n+' right'+(m!=null?' · usual time to spot '+fmt(m)+' (par '+fmt(SPOT_PAR)+')':'')+'</small></div>'});
    h+='<button class="btn alt" style="margin-top:8px" onclick="goView(\'st\')">Practise spotting</button>'}
  h+='</div>';
  /* solving pace */
  var qs=D.qs;
  h+='<div class="card"><b>2 · Solving pace</b>';
  if(qs.length<5){
    h+='<p class="sub" style="margin:6px 0">Needs about 5 timed questions. So far: '+qs.length+'. Do a Quick round on a chapter and come back.</p>'
  }else{
    var all=qs.map(function(q){return q.ms}),m=med(all),pars=med(qs.map(function(q){return parQ(q.l)})),ratio=m/pars;
    var band=ratio<=1.1?'Within par':ratio<=1.5?'A little slow':'Slow';
    h+='<p style="margin:6px 0"><b>'+fmt(m)+'</b> per question, usual. Par (the app\'s estimate): '+fmt(pars)+'. <b>'+band+'</b>.</p>';
    if(qs.length>=12){var last=all.slice(-10),before=all.slice(-20,-10),a=med(last),b=before.length>=5?med(before):null;
      if(b!=null){var dlt=Math.round((b-a)/1000);h+='<p class="sub" style="margin:2px 0 6px">Compared with your earlier questions: '+(Math.abs(dlt)<5?'about the same.':dlt>0?'faster by about '+dlt+' s.':'slower by about '+(-dlt)+' s.')+'</p>'}}
    var by={};qs.forEach(function(q){(by[q.key]=by[q.key]||[]).push(q)});
    var list=Object.keys(by).filter(function(k){return by[k].length>=3}).map(function(k){var L=by[k];return{k:k,n:L.length,m:med(L.map(function(q){return q.ms})),p:med(L.map(function(q){return parQ(q.l)})),acc:Math.round(100*L.filter(function(q){return q.ok}).length/L.length)}}).sort(function(a,b){return b.m/b.p-a.m/a.p}).slice(0,5);
    if(list.length){h+='<p class="sub" style="margin:8px 0 2px">Where time goes (slowest first, 3 or more questions):</p>';
      list.forEach(function(x){h+='<div style="border-top:1px solid var(--line);padding:6px 0"><b>'+esc(x.k)+'</b><br><small>'+fmt(x.m)+' (par '+fmt(x.p)+') · '+x.acc+'% right · '+x.n+' questions</small></div>'})}
  }
  h+='</div>';
  /* population */
  h+='<div class="card"><b>3 · Compared with other students</b><p class="sub" style="margin:6px 0">Not shown yet. A percentile needs timings from many students, and the app has only a few. Until then the app compares you with your own earlier times and with par.</p></div>';
  h+='<p class="sub">How it is timed: spotting is timed exactly. Other questions are timed from the previous answer, and pauses over 5 minutes are ignored. Speed only matters when the answer is right.</p>';
  app.innerHTML=h}
window.paceView=paceView;

/* 4. a row under More */
var ROW='<button class="trow pacerow" onclick="goView(\'pace\')"><span class="tn">⏱</span><span class="tt"><b>Pace and patterns</b><small>Can you spot the template, and how fast</small></span></button>';
function addRow(){
  if(typeof app==='undefined'||app.querySelector('.pacerow'))return;
  var b=app.querySelectorAll('.trow'),at=null;
  for(var i=0;i<b.length;i++){if(/Progress/.test(b[i].textContent)){at=b[i];break}}
  if(at)at.insertAdjacentHTML('afterend',ROW)}
try{var G=GRP.maths;if(G&&!G.some(function(t){return t[0]==='pace'}))G.push(['pace','Pace']);
if(window.MSEC)MSEC.forEach(function(s){if(s[0]==='rev'&&s[2].indexOf('pace')<0)s[2].push('pace')});
if(typeof SECN!=='undefined')SECN.pace='Pace and patterns'}catch(e){}
var _r=window.render;
window.render=function(){var r=_r.apply(this,arguments);try{if(view==='pace')paceView();else if(view==='mm')addRow()}catch(e){}return r};
}catch(err){try{console.log('pace module not loaded',err)}catch(x){}}
})();
/*PACE-END*/
