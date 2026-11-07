/* Module 12: Attraction, Dating and Discernment. Safety, pacing and her own limits come first. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[12] = {
    title: 'Attraction, Dating and Discernment',
    intro: 'This is the module where the earlier work meets real people. It helps her choose where to meet good people, understand attraction and chemistry, plan and pace first dates, tell green flags from red ones, hold the limits she set in Module 1, and date again after heartbreak or at any age.',
    safety: 'Her safety and her pace come first. Meet in public, tell a friend, use your own transport, and keep money, home address and intimate images out of the early weeks. Nobody is owed a date, a reply or a kiss. Desire is not shameful, and what she does with it is her choice, not a test. If a man pressures, rushes or controls, that is information. If you ever feel unsafe, leave. If you are in danger, contact your local emergency service now.'
  };

  [
    { id: '12.1', title: 'Where to meet good people', mins: 40, line: 'Choose two ways to meet people, and give them a fair trial.' },
    { id: '12.2', title: 'Attraction and chemistry', mins: 40, line: 'Tell a spark from compatibility, and slow-burn from fireworks.' },
    { id: '12.3', title: 'First dates and pacing', mins: 45, line: 'Plan well, stay safe, and let a connection grow at a steady pace.' },
    { id: '12.4', title: 'Green flags, red flags and your list', mins: 45, line: 'See your discernment snapshot, and sharpen what you will and will not accept.' },
    { id: '12.5', title: 'Dating again, and at any age', mins: 40, line: 'Begin again after heartbreak or a long gap, and write your dating plan.' }
  ].forEach(function (l) { l.module = 12; D.LESSONS.push(l); });

  D.DATING = {
    meet: { name: 'Putting yourself where people are', body: 'Good people are met in places, not by luck. A small, regular presence in two settings beats a flurry of effort followed by exhaustion.', practice: 'Choose two ways to meet people, such as one community activity and one app or introduction, and give each a fair three-month trial.' },
    pace: { name: 'Keeping a steady pace', body: 'Connections that grow at a steady pace tell you more than those that race. You are allowed to slow down when you like someone, and to speed up when you are sure.', practice: 'Before your next date, decide one thing you will not rush, such as exclusivity or meeting family, and say it kindly if the moment comes.' },
    flags: { name: 'Noticing and acting on flags', body: 'Early signs matter. Noticing a red flag is not harsh. It is care for yourself, and acting on it early is far kinder than hoping it will change.', practice: 'After each date, note one green flag and one concern in a line each. Review them after three dates.' },
    limits: { name: 'Holding your limits', body: 'Liking someone can blur your lines. Your values are the reason you are dating, so keep the limits that protect them, calmly and without apology.', practice: 'Pick one non-negotiable from Module 1 and rehearse a calm sentence you could say if it were tested.' }
  };

  D.CONTENT['12.1'] = {
    lead: 'You do not meet good people by waiting at home, and you do not meet them by trying everywhere at once. Choose a few places, show up regularly, and give them time.',
    story: { h: 'Story: Nia, 35, Atlanta', p: [
      'Nia had tried everything: three apps, speed dating, friends’ setups and a week of saying yes to everything. She was exhausted, and nothing had led anywhere. A friend asked, “Which of those did you actually enjoy?” Nia realised the answer was none.',
      'She chose two settings: a weekly running club, because she loved running, and one app, used only twice a week with a firm limit on time. She deleted the rest. After four months, she had made friends, been asked out twice, and met a man called Marcus through the club who was kind, funny and unhurried. She said, “I stopped hunting and started living in places where good people go.”',
      'Nia is a composite character.'] },
    framework: { h: 'Framework: two channels and a trial', intro: 'Fewer places, more consistency.', items: [
      ['Community:', 'classes, clubs, faith communities, volunteering, sports, neighbourhood events. You meet people in context, and you see how they behave over time.'],
      ['Introductions:', 'friends, family, colleagues and matchmakers where that is part of your culture. A person who knows both of you can vouch for character.'],
      ['Online:', 'apps and sites work best used lightly: a good profile, a time limit, and moving from messages to a call and then to a public meeting without long delays.'],
      ['Two at a time:', 'choose two channels, give them three months, then review what you enjoyed and what produced good conversations.'],
      ['Your safety:', 'meet in public, tell a friend, use your own transport, and verify a person is who they say they are before meeting.']] },
    exercise: { h: 'Exercise: your two channels', intro: 'About 40 minutes. Choose what suits your life and your culture.', blocks: [
      { t: 'p', text: 'Which ways of meeting people would you try? Choose up to two.' },
      { t: 'chips', k: 'channels', max: 2, options: ['A class or club', 'Faith or community group', 'Volunteering', 'Introductions from friends', 'Family introductions', 'Matchmaker', 'A dating app or site', 'Work and professional events', 'Sport or fitness group'] },
      { t: 'ta', k: 'plan', label: 'How I will use each channel for the next three months', rows: 3, ph: 'Days, times, how often, what I will say yes to.' },
      { t: 'inp', k: 'limit', label: 'My time limit, so it does not take over my life', ph: 'For example: two evenings a week, no apps after 9 p.m.' },
      { t: 'ta', k: 'ask', label: 'Who I will ask for an introduction, and what I will say', rows: 2, ph: 'A friend, a colleague, a relative.' },
      { t: 'inp', k: 'review', label: 'My review date', ph: 'A real date in three months.' }] },
    foryou: [{ when: 'gentle', text: 'If meeting people drains you, start with the setting you enjoy most, and bring a friend the first time. Quality of attention matters more than the number of events.' }],
    embrace: [
      ['Two channels, given three months', 'Everything at once, then burnout'],
      ['Places where you see people over time', 'One-off events with strangers'],
      ['Introductions from people who know you both', 'Pressure from relatives to accept anyone'],
      ['A time limit on apps', 'Endless swiping']]
  };

  D.CONTENT['12.2'] = {
    lead: 'Attraction is real and it is not the whole story. Learn to enjoy a spark, and to notice what lasts when it settles.',
    story: { h: 'Story: Solveig, 38, Bergen', p: [
      'Solveig had always followed fireworks. The men who made her heart race were exciting, unpredictable and, she eventually admitted, rarely kind. She had dismissed quiet, steady men as “nice but no spark”.',
      'After a painful break-up, a friend asked her to list what she wanted in a partner. Her list was about kindness, humour and reliability. Her pattern was about adrenaline. She decided to give a second and third date to a man called Henrik, who had made her laugh but not made her pulse jump. By the fourth date she noticed a quiet warmth building. She said, “It was not fireworks. It was a fire I could sit beside.”',
      'Solveig is a composite character.'] },
    framework: { h: 'Framework: spark, safety and substance', intro: 'Three questions help you read attraction.', items: [
      ['Spark:', 'physical or emotional attraction. It matters, and it can grow with familiarity as well as arrive in a flash.'],
      ['Safety:', 'do you feel calm and like yourself with him, or on edge and performing? A racing heart can mean excitement or anxiety.'],
      ['Substance:', 'do your values, life plans and ways of treating people fit? Chemistry without compatibility fades, and compatibility without any attraction rarely sustains romance.'],
      ['The adrenaline trap:', 'if the men who thrill you tend to be unreliable, check whether you are mistaking anxiety for chemistry. Your Module 2 snapshot may help.'],
      ['Give it a fair chance:', 'unless something is wrong, a second or third date often tells you more than the first.']] },
    exercise: { h: 'Exercise: your pattern of attraction', intro: 'About 40 minutes. Be honest, and kind with yourself.', blocks: [
      { t: 'p', text: 'What draws you most? Choose up to three.' },
      { t: 'chips', k: 'draw', max: 3, options: ['Humour', 'Confidence', 'Kindness', 'Intelligence', 'Looks', 'Ambition', 'Calm', 'Mystery', 'Warmth', 'Physical chemistry', 'Shared values', 'Being pursued'] },
      { t: 'ta', k: 'pattern', label: 'The pattern in the men I have been most attracted to', rows: 3, ph: 'Qualities, behaviour, how I felt around them.' },
      { t: 'ta', k: 'calm', label: 'How I feel when I am with someone who is good for me', rows: 3, ph: 'Calm, seen, free to be myself.' },
      { t: 'inp', k: 'chance', label: 'My rule for giving a quiet connection a fair chance', ph: 'For example: at least three dates unless something is wrong.' }] },
    foryou: [{ when: 'gentle', text: 'If your pattern has brought pain, you are not broken. Patterns can be understood and changed, with time, friends and sometimes a counsellor.' }],
    embrace: [
      ['Enjoying a spark and checking the substance', 'Following adrenaline alone'],
      ['Noticing whether you feel calm and yourself', 'Treating anxiety as chemistry'],
      ['A fair chance for a quiet connection', 'Dismissing kindness as "no spark"'],
      ['Compatibility and attraction together', 'Settling without either']]
  };

  D.CONTENT['12.3'] = {
    lead: 'A first date is a conversation, not an audition. Plan it simply, keep it safe, and let the connection grow at its own pace.',
    story: { h: 'Story: Farah, 33, Karachi', p: [
      'Farah’s friends had set her up with Imran, a cousin of a colleague. She was nervous and over-prepared. She chose a busy cafe near her office, told her sister the time and place, drove herself, and kept the first meeting to an hour and a half. She also decided on three things to find out: how he treated the staff, how he talked about his family, and whether she felt at ease.',
      'They talked easily. At the end, she said, “I enjoyed this. I would like to meet again.” Over the next weeks, they met in public, then with friends, then once with family. Farah said, “The pace felt like mine. There was no pressure to hurry, and nothing I had to prove. When I felt unsure, I said so, and he was patient.”',
      'Farah is a composite character.'] },
    framework: { h: 'Framework: plan, pace and debrief', intro: 'Simple habits for every date.', items: [
      ['Plan:', 'choose a public place that suits conversation, with a natural end time. A coffee or a walk is enough.'],
      ['Safety:', 'tell a friend where you are, use your own transport, keep your drink in sight, and leave if you feel unsafe. Do not share your address or money details.'],
      ['Conversation:', 'bring curiosity, a few open questions (Module 8), and some stories (Module 9). Listen for values, not performance.'],
      ['Pace:', 'decide how quickly you want to move on exclusivity, family, and physical closeness, and say it kindly when it matters. Your pace is yours.'],
      ['Debrief:', 'afterwards, write one green flag, one concern and how you felt in your body. Compare after three dates.'],
      ['Closing:', 'if you are interested, say so. If not, a short, kind message is enough. You owe honesty and courtesy, not a long explanation.']] },
    exercise: { h: 'Exercise: your first-date plan', intro: 'About 45 minutes. This is your plan, to adjust as you like.', blocks: [
      { t: 'ta', k: 'place', label: 'The kind of first date I would feel comfortable with', rows: 2, ph: 'Where, when, how long.' },
      { t: 'ta', k: 'safety', label: 'My safety routine', rows: 3, ph: 'Who knows, how I travel, what I will not share, when I leave.' },
      { t: 'ta', k: 'learn', label: 'Three things I want to learn about him', rows: 2, ph: 'How he treats others, how he speaks about family, how I feel.' },
      { t: 'ta', k: 'pace', label: 'The pace I want, and a sentence for when I need to slow down', rows: 3, ph: 'Exclusivity, family, physical closeness.' },
      { t: 'inp', k: 'close', label: 'My kind, short way to say no thank you', ph: 'For example: I enjoyed meeting you, but I do not feel it is right. I wish you well.' }] },
    foryou: [{ when: 'gentle', text: 'If dating feels frightening, bring a friend close by on the first few dates, choose daytime, and set a firm end time. Safe and slow is a good way to begin.' }],
    embrace: [
      ['A public place and a clear end time', 'A private place on a first meeting'],
      ['Telling a friend where you are', 'Going unannounced'],
      ['Your pace, said kindly', 'Pressure to match his pace'],
      ['A short, kind no thank you', 'Ghosting, or a long justification']]
  };

  D.CONTENT['12.4'] = {
    lead: 'Discernment is not suspicion. It is paying attention early, keeping your values and acting on what you see.',
    story: { h: 'Story: Delphine, 41, Brussels', p: [
      'Delphine liked Olivier. He was charming, generous and quick to compliment her. On their third date he spoke harshly about his ex, saying she was “crazy” and “impossible”. Delphine felt a flicker of unease and told herself it was just a bad break-up.',
      'The next week, he teased her in front of friends in a way that felt less like play and more like a test. She remembered the list she had written in Module 1 and saw that “respect” was the first line. She spoke to him calmly, said what she had noticed, and watched. He laughed it off. She said, “I did not have proof of anything. I had a pattern, and a list I had made when I was calm.” She stepped back, kindly and clearly.',
      'Delphine is a composite character.'] },
    framework: { h: 'Framework: green flags, red flags and dealbreakers', intro: 'Use your head and your gut together.', items: [
      ['Green flags:', 'consistency, curiosity about you, kindness to others, accountability, comfort with your boundaries, a life of his own, honesty about his past, and ease with your friends and family.'],
      ['Yellow flags:', 'things to watch and discuss: poor communication, unresolved anger at an ex, big differences in values, avoidance of any serious topic.'],
      ['Red flags:', 'contempt, control, pressure, secrecy, cruelty to people with less power, blaming everyone else, rapid intensity, breaking your limits, and any violence or threat.'],
      ['Dealbreakers:', 'your non-negotiables from Module 1, kept short and tied to your values. Preferences, such as height or hobbies, are different from dealbreakers.'],
      ['Act early:', 'name what you notice calmly. If it persists or he dismisses you, step back. You do not owe more time to someone who shows you disrespect.']] },
    exercise: { h: 'Exercise: your discernment snapshot and your list', intro: 'About 45 minutes. This is a snapshot of right now.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'meet', text: 'I put myself in places where I can meet people I would like.' },
        { axis: 'pace', text: 'I let a connection develop at a steady pace.' },
        { axis: 'flags', text: 'I notice concerns early and act on them.' },
        { axis: 'limits', text: 'I keep my values and limits when I like someone.' }] },
      { t: 'result', fn: 'dating' },
      { t: 'ta', k: 'green', label: 'My five most important green flags', rows: 3, ph: 'Specific behaviours, not adjectives.' },
      { t: 'ta', k: 'red', label: 'The red flags I will not explain away', rows: 3, ph: 'Contempt, control, pressure, secrecy, cruelty.' },
      { t: 'ta', k: 'deal', label: 'My dealbreakers, in a few lines', rows: 3, ph: 'Short, and tied to my values.' },
      { t: 'ta', k: 'pref', label: 'Preferences I can be flexible about', rows: 2, ph: 'Height, hobbies, background, habits that are not about respect.' }] },
    roots: {
      christian: 'Many Christian traditions speak of discernment as wisdom, asking for guidance, weighing fruit over time and seeking counsel from those who know you well. Consider who could help you see clearly.',
      muslim: 'Many Muslim traditions use istikhara, a prayer for guidance, together with consultation and attention to character. Consider how prayer and trusted advice could work alongside your own observation.',
      jewish: 'Many Jewish traditions encourage careful inquiry about a person’s character and conduct before commitment, and value asking trusted friends and family. Consider what you would ask, and whom.',
      hindu: 'Many Hindu traditions value viveka, discernment between what is lasting and what is passing, and the counsel of elders. Consider what patterns last and what only dazzles.',
      buddhist: 'Many Buddhist traditions teach wise attention, seeing clearly without clinging or aversion. Consider how steady, kind observation could guide your choices.',
      secular: 'Consider how your values from Module 3 can act as a compass when charm and attraction cloud your view.'
    },
    foryou: [{ when: 'gentle', text: 'If you were taught to ignore your instincts, begin by simply noticing them. You do not have to act on every one, but they are information.' }],
    embrace: [
      ['Specific green flags you can name', 'Vague hopes'],
      ['Acting on a concern early and calmly', 'Hoping it will change'],
      ['Short dealbreakers tied to your values', 'A long wish list'],
      ['Flexibility on preferences', 'Mistaking preferences for principles']]
  };

  D.CONTENT['12.5'] = {
    lead: 'There is no age at which dating stops being possible, and no clock that you must obey. You can begin again at your own pace, wherever you are starting from.',
    story: { h: 'Story: Mirela, 52, Bucharest', p: [
      'Mirela had been widowed for four years. Friends said it was time to date again, and she felt both ready and absurd. The thought of dating at fifty-two made her laugh and then cry. She asked herself what she wanted from companionship and what she was afraid of.',
      'She wrote it down: company, laughter, someone to travel with, and no pressure to replace her husband. Her fear was feeling disloyal. She joined a dance class, said yes to a friend’s dinner invitation and, after months, accepted a coffee with a widower called Teodor. They talked about their late spouses openly. Mirela said, “I discovered I could carry my past with me and still make room for someone. Starting again did not erase anything.”',
      'Mirela is a composite character.'] },
    framework: { h: 'Framework: begin again, gently', intro: 'Whatever your starting point, a few ideas help.', items: [
      ['Heal alongside, not instead:', 'dating is not a cure for loss. Talk to someone you trust, or a counsellor, while you begin.'],
      ['Know your why:', 'companionship, partnership, family, fun. Your reasons shape the pace and the people.'],
      ['Start small:', 'a coffee, a class, a conversation. You do not have to leap into a relationship.'],
      ['Every age has gifts:', 'self-knowledge, clarity and lower tolerance for nonsense. Use them.'],
      ['Honour your past:', 'children, former partners, grief and history are part of you. The right person will make room for them.'],
      ['No clock:', 'decisions about marriage, children and timing are yours. Nobody else sets the deadline.']] },
    exercise: { h: 'Exercise: your dating plan', intro: 'About 40 minutes. Gather what you have learned in this module.', blocks: [
      { t: 'p', text: 'Where are you starting from? Choose any that apply.' },
      { t: 'chips', k: 'start', max: 4, options: ['Never dated seriously', 'After a break-up', 'After divorce', 'After being widowed', 'After a long gap', 'With children', 'In a new country', 'Not sure'] },
      { t: 'ta', k: 'why', label: 'What I want from dating in this season', rows: 3, ph: 'Companionship, partnership, fun, a family.' },
      { t: 'ta', k: 'fear', label: 'What I am afraid of, and what I will do about it', rows: 3, ph: 'Be honest, and consider who could support you.' },
      { t: 'inp', k: 'first', label: 'My first small step', ph: 'For example: join the walking group on Saturday.' },
      { t: 'inp', k: 'support', label: 'Who will know about my plan', ph: 'A friend, a sister, a counsellor.' },
      { t: 'summary12' }] },
    foryou: [{ when: 'gentle', text: 'If grief or heartbreak is recent, you can wait. When you are ready, begin small, and tell someone you trust. Healing and hoping can happen together.' }],
    embrace: [
      ['Healing and hoping together', 'Dating to avoid grief'],
      ['Small first steps', 'A leap to prove you are over it'],
      ['Self-knowledge as an advantage', 'Apologising for your age'],
      ['Making room for your past', 'Hiding it']]
  };

  D.SCENARIOS.push(
    { id: 's12-1', module: 12, title: 'Tonight, at his place',
      setup: 'You matched with Victor four days ago. He is charming and quick. Tonight he writes, “Come to mine, I will cook, no point wasting time.” You have not yet spoken on the phone.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Reply, “Cooking sounds lovely. I like to meet in public first. Would coffee on Saturday work?”',
          protects: 'It protects your safety and tests how he responds to a boundary.', cost: 'He may lose interest.',
          try: 'A decent man will accept it without sulking.' },
        { id: 'b', tag: 'accommodate', text: 'Go, because you do not want to seem difficult.',
          protects: 'It avoids disappointing him.', cost: 'It puts your safety and your pace in someone else’s hands.',
          try: 'You can say yes to him and no to the place.' },
        { id: 'c', tag: 'react', text: 'Reply angrily that he is presumptuous and block him.',
          protects: 'It ends the contact.', cost: 'You lose the chance to see how he handles a clear answer.',
          try: 'State your limit calmly. His response is the data.' },
        { id: 'd', tag: 'withdraw', text: 'Do not reply, and let it go quiet.',
          protects: 'It avoids confrontation.', cost: 'He may keep messaging, and you miss the chance to be clear.',
          try: 'One short, kind message is enough.' },
        { id: 'e', tag: 'ruminate', text: 'Agonise about it for hours and ask friends what to do.',
          protects: 'It feels careful.', cost: 'It delays an answer you already know.',
          try: 'Check your list. A public place is a reasonable rule.' }
      ] },
    { id: 's12-2', module: 12, title: 'Nice, but no spark',
      setup: 'Your third date with Anthony was easy and kind. He listens, he is reliable, and he makes you laugh. You still do not feel the spark you expected, and a friend says, “Do not settle.”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Give it two or three more dates, check how you feel in your body, and tell him honestly if the spark does not come.',
          protects: 'It gives a quiet connection a fair chance and keeps you honest.', cost: 'It takes a little time.',
          try: 'Notice whether warmth grows, and whether you feel calm and yourself.' },
        { id: 'b', tag: 'accommodate', text: 'Keep seeing him to avoid hurting him, though you know you are not interested.',
          protects: 'It avoids a hard conversation.', cost: 'It wastes both your time and may hurt him more later.',
          try: 'End kindly when you know.' },
        { id: 'c', tag: 'react', text: 'End it immediately because the fireworks are missing.',
          protects: 'It follows your first impression.', cost: 'You may miss a slow burn.',
          try: 'Give at least one more date unless something is wrong.' },
        { id: 'd', tag: 'withdraw', text: 'Stop replying and let it fade.',
          protects: 'It avoids a conversation.', cost: 'It is unkind and leaves him confused.',
          try: 'A short, honest message is better.' },
        { id: 'e', tag: 'ruminate', text: 'Analyse every moment of the dates for signs of spark.',
          protects: 'It feels thorough.', cost: 'It turns a feeling into an exam.',
          try: 'Pay attention to how you feel after a date, not during it.' }
      ] },
    { id: 's12-3', module: 12, title: 'What he said about the waiter',
      setup: 'On your second date, Ben is charming until the food is late. He snaps at the waiter, then smiles at you and says, “You have to be firm with people like that.” Earlier, he described all his exes as “crazy.”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say calmly, “I was not comfortable with how you spoke to him. That matters to me.” Then watch his response.',
          protects: 'It names your value and tests his accountability.', cost: 'The mood may cool.',
          try: 'A decent man will reflect. Defensiveness or mockery is information.' },
        { id: 'b', tag: 'accommodate', text: 'Laugh it off and change the subject.',
          protects: 'It keeps the evening smooth.', cost: 'You ignore a signal about how he treats people with less power.',
          try: 'Write it down in your debrief.' },
        { id: 'c', tag: 'react', text: 'Snap at him in public and leave.',
          protects: 'It expresses your anger.', cost: 'It is dramatic and gives him a story about you.',
          try: 'You can leave calmly without a scene.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing, finish the date and decline the next one.',
          protects: 'It avoids confrontation.', cost: 'He never learns why, and you did not use your voice.',
          try: 'A kind, short message is enough.' },
        { id: 'e', tag: 'ruminate', text: 'Tell yourself it was one bad moment and keep making excuses for him.',
          protects: 'It keeps hope alive.', cost: 'It trains you to ignore flags.',
          try: 'Look for the pattern across dates, not one moment.' }
      ] },
    { id: 's12-4', module: 12, title: 'Three months after',
      setup: 'It has been three months since your relationship of seven years ended. A friend has set you up with a kind man called Daniel and is excited. You are curious and also afraid.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Tell your friend, “I would like to try a coffee, and I am going slowly. Please do not push.” Then meet him for an hour.',
          protects: 'It honours both curiosity and caution.', cost: 'You may feel vulnerable.',
          try: 'Be honest with Daniel that you are early in healing.' },
        { id: 'b', tag: 'accommodate', text: 'Agree to please your friend, though you do not feel ready.',
          protects: 'It avoids letting her down.', cost: 'It may hurt you and him.',
          try: 'You can say not yet.' },
        { id: 'c', tag: 'react', text: 'Snap that you are not ready to date and end the conversation.',
          protects: 'It stops the pressure.', cost: 'It may strain a good friendship.',
          try: 'Say it warmly. A calm no is enough.' },
        { id: 'd', tag: 'withdraw', text: 'Avoid your friend for a few weeks.',
          protects: 'It avoids the question.', cost: 'You lose support when you need it.',
          try: 'Tell her what you need from her instead.' },
        { id: 'e', tag: 'ruminate', text: 'Wonder for weeks whether you are betraying your past or wasting your future.',
          protects: 'It feels responsible.', cost: 'It keeps you stuck.',
          try: 'Take one small step and see how it feels, with someone to talk to.' }
      ] }
  );

  D.ASK.push(
    { id: 'firstdate', title: 'First dates and pacing', domains: ['d11'], modules: [12],
      keys: ['first date', 'second date', 'date ideas', 'where to go on a date', 'moving too fast', 'too soon', 'how fast', 'slow down', 'exclusive', 'what to say on a date', 'pacing', 'how long before'],
      answer: ['Keep a first date simple: a public place, a natural end time, a friend who knows where you are, and your own transport. Bring curiosity and let your pace be yours.',
        'If something feels rushed, say so kindly and watch how he responds. A decent man slows down. Lesson 12.3 helps you write your first-date plan.'] },
    { id: 'greenflag', title: 'Green flags and dealbreakers', domains: ['d11'], modules: [12],
      keys: ['green flag', 'green flags', 'good sign', 'good signs', 'is he serious', 'is he the one', 'dealbreaker', 'dealbreakers', 'deal breaker', 'must haves', 'how do i know he is good', 'yellow flag'],
      answer: ['Green flags are patterns: consistency, curiosity about you, kindness to others, accountability, comfort with your boundaries, honesty about his past, and ease with your friends and family.',
        'Keep your dealbreakers short and tied to your values, and separate them from preferences. Note one green flag and one concern after each date and compare after three. Lesson 12.4 helps you build your list.'] },
    { id: 'datingagain', title: 'Dating again, at any stage', domains: ['d11'], modules: [12],
      keys: ['dating again', 'back out there', 'start dating again', 'dating after', 'dating in my', 'dating at', 'long gap', 'never dated', 'first relationship', 'nervous about dating'],
      answer: ['There is no age or clock for dating. Begin small, a coffee or a class, and let healing and hoping happen together. Tell someone you trust, and consider a counsellor if grief or fear is heavy.',
        'You can carry your past with you and still make room for someone. Lesson 12.5 helps you write a gentle plan for this season.'] },
    { id: 'chemistry', title: 'Chemistry, spark and gut feeling', domains: ['d11'], modules: [12],
      keys: ['no spark', 'chemistry', 'butterflies', 'gut feeling', 'my gut', 'something feels off', 'not sure about him', 'attracted to', 'not attracted', 'slow burn'],
      answer: ['A spark matters, and it can arrive in a flash or grow with familiarity. Ask three questions: is there attraction, do I feel calm and like myself, and do our values and plans fit?',
        'If the men who thrill you tend to be unreliable, check whether you are mistaking anxiety for chemistry. A racing heart can mean excitement or fear. Lesson 12.2 helps you read your pattern.'] }
  );

  D.REFLECT = D.REFLECT || {};
  D.REFLECT[12] = {
    idea: 'Choosing well is a form of self-respect. Each time you notice what is true about a person and act on it kindly, you teach yourself that your judgment can be trusted.',
    qs: ['When have I trusted my own read of a person, and what happened?', 'What would it mean to choose from calm rather than from loneliness or fear?']
  };
})();
