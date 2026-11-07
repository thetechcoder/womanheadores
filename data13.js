/* Module 11: Understanding Men. No stereotypes: men are individuals, and nothing here excuses harm. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[11] = {
    title: 'Understanding Men',
    intro: 'Men are as varied as women. This module is not a manual for decoding a type. It helps her read the man in front of her through what he does, understand how upbringing and culture shape how men love and show up, hold the dynamics of attraction without stereotypes, avoid the common mistakes, and keep her softness and her strength together.',
    safety: 'No lesson claims that all men are alike, and nothing here excuses harm. "Men are like that" is never an explanation for cruelty, control or violence. A decent man is not a perfect one, and she is allowed to expect respect, honesty and consistency. The guide speaks about men because that is who it is written for. If you date women or others, the skills here still apply. If a man frightens or controls you, it is not a misunderstanding to be decoded. Tell someone you trust and contact a local support service, and if you are in danger, contact your local emergency service now.'
  };

  [
    { id: '11.1', title: 'Men as individuals', mins: 40, line: 'Set stereotypes down and learn to read the man in front of you.' },
    { id: '11.2', title: 'How men show up and show love', mins: 40, line: 'Learn the many ways care appears, and what consistency looks like.' },
    { id: '11.3', title: 'Dynamics without stereotypes', mins: 45, line: 'Initiating, receiving and agreeing roles, with your snapshot.' },
    { id: '11.4', title: 'Common mistakes', mins: 40, line: 'Spot the habits that undermine good connections, and swap them for better ones.' },
    { id: '11.5', title: 'Softness and strength', mins: 40, line: 'Keep your gentleness and your backbone together, and write your plan.' }
  ].forEach(function (l) { l.module = 11; D.LESSONS.push(l); });

  D.MEN = {
    person: { name: 'Reading the man, not the type', body: 'The most reliable guide to a man is what he does over time. Types and labels help less than watching his consistency, his kindness to others and how he handles disappointment.', practice: 'For the next person you meet, keep a simple note of what he does, not what you imagine, and review it after three meetings.' },
    initiate: { name: 'Showing interest', body: 'Many women wait to be chosen. Warm, clear interest, such as a message, a suggestion or an invitation, gives a decent man something to respond to and tells you quickly how he receives it.', practice: 'Take one small step this month, such as suggesting a coffee or replying with a question, and notice how he responds.' },
    receive: { name: 'Receiving care', body: 'Letting someone help, pay for a meal, carry something or take care of you is not weakness. Being able to receive is part of a mutual relationship, as long as you can say no too.', practice: 'The next time someone offers kindness you would normally refuse, say "thank you" and notice how it feels.' },
    roles: { name: 'Talking about roles openly', body: 'Couples are happiest when roles are agreed, not assumed. Traditional, shared and mixed arrangements can all work when both people choose them with their eyes open.', practice: 'Write three things you would like to share equally and three you would be happy to divide differently, ready for a conversation.' }
  };

  D.CONTENT['11.1'] = {
    lead: 'There is no such thing as "men" who all think alike. There are individual men shaped by families, cultures and choices, and your task is to read the one in front of you.',
    story: { h: 'Story: Lucía, 37, Montevideo', p: [
      'Lucía had decided that men were either emotionally closed or emotionally needy. Each date was a test of which box he fitted. A kind man named Joaquín told her about his late father, and she dismissed it as “needy”. When another man was brisk and unemotional, she labelled him “closed”, though she knew almost nothing about him.',
      'A friend asked her to describe a man she respected in three sentences about what he did, not what he was. Lucía realised she could. Her uncle was quiet, reliable and generous. She began to notice behaviour: who followed through, who asked questions, who was kind to the waiter. She said, “I stopped sorting men into types and started watching what they did. It was less exciting and far more useful.”',
      'Lucía is a composite character.'] },
    framework: { h: 'Framework: person, culture and conduct', intro: 'Three lenses give a clearer picture than any label.', items: [
      ['The person:', 'every man has a temperament, a history and a set of values. Two men from the same street can be entirely different.'],
      ['The culture and upbringing:', 'families and societies teach men different rules about feelings, work, money and care. Understanding the rules helps you read his behaviour, and it does not excuse it.'],
      ['The conduct:', 'what he does over time is the strongest evidence: kept promises, kindness to others, how he handles stress, how he treats you when he is disappointed.'],
      ['Curiosity before conclusions:', 'ask about his family, his work, how he was taught to show care. Listen for values, not performance.'],
      ['The limit:', 'understanding is not tolerance. You can understand why a man behaves a certain way and still decide it is not for you.']] },
    exercise: { h: 'Exercise: your assumptions and your evidence', intro: 'About 40 minutes. Be honest and kind with yourself.', blocks: [
      { t: 'p', text: 'Which of these ideas about men have you caught yourself believing? Choose up to three.' },
      { t: 'chips', k: 'beliefs', max: 3, options: ['Men do not talk about feelings', 'Men are only after one thing', 'Men are all the same', 'Men need to be managed', 'Men cannot be trusted', 'Men want a woman who does not need anything', 'Men are simple', 'Good men are taken'] },
      { t: 'ta', k: 'origin', label: 'Where I picked that up', rows: 3, ph: 'Family, friends, past experiences, media.' },
      { t: 'ta', k: 'counter', label: 'A man I know who does not fit that idea', rows: 3, ph: 'What does he do that contradicts it?' },
      { t: 'inp', k: 'watch', label: 'Three behaviours I will watch for in anyone I meet', ph: 'For example: keeps promises, curious about me, kind to staff.' },
      { t: 'ta', k: 'culture', label: 'What I know about how men were taught to show care where I grew up', rows: 3, ph: 'Actions, provision, words, silence.' }] },
    foryou: [{ when: 'gentle', text: 'If men have hurt you, a guarded view is understandable. You do not have to drop your guard, only to keep looking at the actual man in front of you.' }],
    embrace: [
      ['Watching what he does over time', 'Sorting him into a type on a first date'],
      ['Curiosity about how he was raised', 'Excusing harm as "men are like that"'],
      ['Asking about values, not performance', 'Reading his mind'],
      ['Understanding without tolerating', 'Understanding as a reason to stay']]
  };

  D.CONTENT['11.2'] = {
    lead: 'Care takes many shapes. Learn to read them, and to say clearly what you need to feel cared for.',
    story: { h: 'Story: Marguerite, 42, Québec City', p: [
      'Marguerite wanted words. She had grown up in a home where love was spoken, and she felt unloved when her partner Étienne did not say it. He fixed her car, brought soup when she was sick, and drove two hours to see her. She interpreted it as him being “practical” and not romantic.',
      'A friend asked her to list everything Étienne had done in a month. The list ran to twenty-three items. Marguerite sat with it and cried. She told Étienne, “I see what you do. I also need to hear it sometimes.” He was quiet, then said, “I thought doing was saying.” He began leaving her short notes. She said, “His care was there all along. It spoke a language I had not learned, and I had never taught him mine.”',
      'Marguerite is a composite character.'] },
    framework: { h: 'Framework: signals of showing up', intro: 'Look for patterns, not single moments.', items: [
      ['Time and attention:', 'he makes time, is present when he is with you, and puts the phone away.'],
      ['Follow-through:', 'he does what he says, and tells you early when plans change.'],
      ['Practical care:', 'he notices what you need and helps without being asked.'],
      ['Words and affection:', 'he says it, shows it, or finds his own way. Ask for what you need in this area.'],
      ['Integration:', 'he brings you into his life: friends, family, plans. He talks about a future that includes you at a pace that suits you both.'],
      ['Red lights:', 'inconsistency, secrecy, hot and cold behaviour, pressure and disrespect are information, however charming the moments in between.']] },
    exercise: { h: 'Exercise: how I give and receive care', intro: 'About 40 minutes. These are your preferences, not a test.', blocks: [
      { t: 'p', text: 'What makes you feel most cared for? Choose up to three.' },
      { t: 'chips', k: 'receive', max: 3, options: ['Time and attention', 'Kind words', 'Practical help', 'Thoughtful gifts', 'Physical affection', 'Reliability', 'Being introduced to his people', 'Being asked about my day'] },
      { t: 'p', text: 'How do you tend to show care? Choose up to three.' },
      { t: 'chips', k: 'give', max: 3, options: ['Time and attention', 'Kind words', 'Practical help', 'Thoughtful gifts', 'Physical affection', 'Reliability', 'Cooking or hosting', 'Listening'] },
      { t: 'ta', k: 'ask', label: 'How I will tell a partner what makes me feel cared for', rows: 3, ph: 'A plain, kind sentence in my own words.' },
      { t: 'ta', k: 'notice', label: 'The ways someone has shown care that I may have overlooked', rows: 3, ph: 'Think of a friend, a family member or a past partner.' },
      { t: 'inp', k: 'redlight', label: 'One inconsistency I will not explain away', ph: 'For example: disappearing without a word, repeatedly.' }] },
    foryou: [{ when: 'gentle', text: 'If affection was used as a tool against you, it is fine to move slowly. Real care does not need you to hurry.' }],
    embrace: [
      ['Reading effort across weeks', 'Reading one grand gesture as proof'],
      ['Telling him what care looks like for you', 'Waiting for him to guess'],
      ['Valuing practical and quiet care', 'Dismissing it because it is not romantic'],
      ['Treating inconsistency as information', 'Explaining it away']]
  };

  D.CONTENT['11.3'] = {
    lead: 'Attraction and partnership involve initiating, receiving, leading and following. You can decide how these work in your relationship without being boxed in by anyone else’s script.',
    story: { h: 'Story: Zainab, 36, Amman', p: [
      'Zainab grew up believing the man should always initiate. She waited, politely, for a colleague named Karim to ask her to coffee. After months, nothing happened. A cousin told her, “You can send a message, you know.” The idea terrified her, and it also felt unfair.',
      'She sent a short, warm note about a book they had discussed, and suggested they continue the conversation over coffee. Karim replied within the hour. Over coffee he said, “I was waiting because I did not want to presume.” They laughed. Later, when they discussed roles, they agreed he would plan many outings, and she would plan others. Zainab said, “It was never about who is the man. It was about whether either of us was brave enough to start.”',
      'Zainab is a composite character.'] },
    framework: { h: 'Framework: initiate, receive and agree', intro: 'Healthy dynamics have room for both of you to lead and follow.', items: [
      ['Initiating:', 'showing interest, suggesting plans and asking for what you want are all open to you. Customs vary, so pace this to your own comfort and context.'],
      ['Receiving:', 'accepting kindness, help and attention with grace. Receiving is half of giving.'],
      ['Leading and following:', 'in a good partnership, each leads where they are strong, and each can follow. Neither role is fixed.'],
      ['Agreeing roles:', 'traditional, egalitarian or something in between can all work when both choose it knowingly. Talk about it before it becomes a pattern.'],
      ['Stereotypes as starting points only:', 'ideas about masculine and feminine energy can be helpful metaphors. Use them as a mirror, not a rulebook.']] },
    exercise: { h: 'Exercise: your dynamics snapshot', intro: 'About 45 minutes. This is a snapshot, not a judgment.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'person', text: 'I judge a man by what he does over time, not by a type.' },
        { axis: 'initiate', text: 'I am comfortable showing interest in someone first.' },
        { axis: 'receive', text: 'I can accept help, kindness or generosity without feeling in debt.' },
        { axis: 'roles', text: 'I can talk openly about roles and expectations.' }] },
      { t: 'result', fn: 'men' },
      { t: 'ta', k: 'share', label: 'Three things I would like to share equally', rows: 3, ph: 'Money, chores, decisions, planning, family time.' },
      { t: 'ta', k: 'divide', label: 'Three things I would be happy to divide differently', rows: 3, ph: 'Who leads on what, in a way that suits us both.' },
      { t: 'p', text: 'My comfort with initiating is...' },
      { t: 'chips', k: 'comfort', max: 1, options: ['High', 'Medium, depending on context', 'Low, I prefer to be approached', 'Still working it out'] }] },
    foryou: [{ when: 'gentle', text: 'Your culture, faith or family may have clear expectations about who initiates. You can honour them, adapt them or talk them through, and nobody gets to tell you which.' }],
    embrace: [
      ['Warm, clear interest', 'Waiting indefinitely to be chosen'],
      ['Agreed roles that fit you both', 'Roles assumed from a script'],
      ['Accepting kindness with grace', 'Refusing help to prove independence'],
      ['Stereotypes as a mirror', 'Stereotypes as a rulebook']]
  };

  D.CONTENT['11.4'] = {
    lead: 'Most relationship mistakes are well-meant. Spotting yours kindly is the quickest way to stop repeating them.',
    story: { h: 'Story: Katarzyna, 39, Kraków', p: [
      'Katarzyna kept a mental scoreboard on dates. Did he open the door? Did he text within an hour? Did he say the right thing about her work? She called it “standards”. Two men withdrew within a month. A third told her, gently, “I feel like I am being graded.”',
      'She decided to review her habits. She tested him, she hid her interest, she overexplained her past, and she assumed the worst when he was quiet. She chose one to replace first: instead of testing, she would ask. On the next date she said, “I would love to know how you are feeling about us so far.” He answered honestly and warmly. Katarzyna said, “Most of my habits were armour. Once I put it down, I could finally see him.”',
      'Katarzyna is a composite character.'] },
    framework: { h: 'Framework: common habits and their replacements', intro: 'Each habit has a protective purpose. Each has a gentler substitute.', items: [
      ['Testing him:', 'hidden tests rarely produce truth. Replace with a direct question or request.'],
      ['Hiding interest:', 'playing it cool confuses people. Replace with warm, clear interest at your own pace.'],
      ['Over-giving early:', 'doing too much to earn love leaves you tired and him unsure. Replace with giving that matches what is offered.'],
      ['Rescuing and fixing:', 'trying to repair a man teaches you both that he is a project. Replace with support and a boundary.'],
      ['Mind-reading:', 'assuming the worst or the best fills the gaps with fear. Replace with asking.'],
      ['Comparing:', 'measuring him against an ex or a fantasy. Replace with noticing the man in front of you.'],
      ['Ignoring red flags:', 'hoping they will change. Replace with a clear line you keep.']] },
    exercise: { h: 'Exercise: your habits and your swaps', intro: 'About 40 minutes. Be kind, and be honest.', blocks: [
      { t: 'p', text: 'Which of these habits do you recognise? Choose up to three.' },
      { t: 'chips', k: 'habits', max: 3, options: ['Testing him', 'Hiding my interest', 'Over-giving early', 'Rescuing and fixing', 'Mind-reading', 'Comparing him to an ex', 'Ignoring red flags', 'Keeping a scoreboard', 'Rushing the pace', 'Going silent'] },
      { t: 'ta', k: 'purpose', label: 'What my main habit has been trying to protect me from', rows: 3, ph: 'Rejection, being hurt again, being alone, losing control.' },
      { t: 'inp', k: 'swap', label: 'The replacement I will practise first', ph: 'For example: ask a direct question instead of testing.' },
      { t: 'ta', k: 'sentence', label: 'A sentence I will say instead', rows: 2, ph: 'In my own words, warm and clear.' },
      { t: 'ta', k: 'line', label: 'A red flag I will not hope away', rows: 2, ph: 'Contempt, secrecy, pressure, control, disrespect.' }] },
    foryou: [{ when: 'gentle', text: 'Habits formed to protect you were smart when you needed them. You can honour what they did for you and still let them go slowly.' }],
    embrace: [
      ['A direct question', 'A hidden test'],
      ['Warm, clear interest', 'Pretending not to care'],
      ['Support with boundaries', 'Rescuing and fixing'],
      ['Asking what he feels', 'Filling gaps with fear']]
  };

  D.CONTENT['11.5'] = {
    lead: 'Softness is not weakness, and strength is not hardness. The women who are loved best are often both, in turn.',
    story: { h: 'Story: Ife, 34, Ibadan', p: [
      'Ife had built a reputation as unshakeable. In her family she was the one who solved everything. In relationships she took the same stance: capable, organised and never needy. A kind man named Tunde told her, after a few months, “I am never sure what you need from me.” She laughed it off, but it stayed.',
      'She realised she had equated softness with risk. Her first experiments were small: letting Tunde carry the shopping, telling him she was tired, asking for a hug. Each time, she waited for something to go wrong, and it did not. She also kept her backbone: she told him calmly what she would not accept. She said, “I learned I could be soft in the right places and firm in others. They were never opposites.”',
      'Ife is a composite character.'] },
    framework: { h: 'Framework: soft and firm', intro: 'Two qualities that belong together.', items: [
      ['Softness:', 'showing feeling, asking for help, receiving care, being playful and tender. It is a form of courage.'],
      ['Strength:', 'knowing your limits, saying no, keeping your own life and recovering from disappointment.'],
      ['Pace:', 'you decide how fast to be vulnerable. Share a little, see how it is held, then share more.'],
      ['Safe people:', 'vulnerability belongs with those who respond with care. Ones who mock or exploit it are not safe.'],
      ['Your own definition:', 'femininity, womanhood and strength are yours to define, and they can look quiet, bold, traditional or modern.']] },
    exercise: { h: 'Exercise: your softness, your strength and your plan', intro: 'About 40 minutes. Gather what you have learned in this module.', blocks: [
      { t: 'ta', k: 'soft', label: 'One way I would like to be softer', rows: 2, ph: 'Asking for help, telling someone I am tired, saying what I feel.' },
      { t: 'ta', k: 'firm', label: 'One way I want to stay firm', rows: 2, ph: 'A limit, a value, a standard.' },
      { t: 'inp', k: 'define', label: 'What femininity or womanhood means to me, in a line', ph: 'In my own words.' },
      { t: 'inp', k: 'pace', label: 'How I will pace vulnerability with someone new', ph: 'For example: share one small thing, then watch how he responds.' },
      { t: 'inp', k: 'safe', label: 'A person with whom I can practise being soft', ph: 'A friend, a sister, a mentor.' },
      { t: 'summary11' }] },
    roots: {
      christian: 'Many Christian traditions describe gentleness as a fruit of the spirit and as strength under control. Consider where gentleness has been your strength.',
      muslim: 'Many Muslim traditions praise rifq, gentleness, and the strength of the women who shaped the early community. Consider how gentleness and resolve live together in you.',
      jewish: 'Many Jewish traditions honour the eshet chayil, the woman of valour, whose strength and kindness appear together. Consider what valour looks like in your life.',
      hindu: 'Many Hindu traditions speak of Shakti, the power that is also grace, and honour women as bearers of both strength and tenderness. Consider where your power and your tenderness meet.',
      buddhist: 'Many Buddhist traditions teach that compassion is strength and that openness takes courage. Consider where kindness has been a form of bravery for you.',
      secular: 'Consider how softness and strength both serve the values you wrote in Module 3, and where you want more of each.'
    },
    foryou: [{ when: 'gentle', text: 'If softness has been used against you, keep your armour for as long as you need it. You can take it off in small, safe steps, or not at all with certain people.' }],
    embrace: [
      ['Softness and a backbone together', 'Choosing between being kind and being firm'],
      ['Sharing a little, then watching', 'Telling everything to prove trust'],
      ['Defining womanhood yourself', 'Accepting someone else’s script'],
      ['Safe people for tenderness', 'Offering tenderness to those who exploit it']]
  };

  D.SCENARIOS.push(
    { id: 's11-1', module: 11, title: 'Warm, then busy',
      setup: 'For two weeks, Ibrahim has been warm, attentive and full of plans. Then he is suddenly “swamped with work.” Replies come slowly, plans are vague, and you cannot tell what has changed.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Message him, “I have really enjoyed getting to know you. I have noticed things feel different lately. Can you tell me how you are feeling about us?”',
          protects: 'It asks directly and gives him a chance to be honest.', cost: 'You may hear something you do not want to.',
          try: 'Judge by his answer and what he does next, not by hints.' },
        { id: 'b', tag: 'accommodate', text: 'Tell him you understand, and wait for him to be free.',
          protects: 'It avoids pressure.', cost: 'You carry the uncertainty alone.',
          try: 'Be understanding and clear: say what you need to feel secure.' },
        { id: 'c', tag: 'react', text: 'Send a sharp message about his lack of communication.',
          protects: 'It releases the frustration.', cost: 'It starts a fight before you have any facts.',
          try: 'Ask a question, not a verdict.' },
        { id: 'd', tag: 'withdraw', text: 'Stop replying so he feels what it is like.',
          protects: 'It feels like control.', cost: 'It is a hidden test and confuses both of you.',
          try: 'If you are stepping back, say it plainly.' },
        { id: 'e', tag: 'ruminate', text: 'Analyse his messages for hours looking for a hidden meaning.',
          protects: 'It feels like preparation.', cost: 'It gives you stories, not facts.',
          try: 'Ask him, then watch what he does.' }
      ] },
    { id: 's11-2', module: 11, title: 'He insists on paying',
      setup: 'On your fifth date, Segun insists on paying for the whole evening and says, “Let me take care of you.” You like being treated, but you also value contributing, and you wonder what the gesture means.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say warmly, “Thank you, I love that. Next time, let me take us somewhere.”',
          protects: 'It lets you receive and keeps things mutual.', cost: 'It takes a moment of grace.',
          try: 'Notice whether he accepts your turn with ease.' },
        { id: 'b', tag: 'accommodate', text: 'Let him pay every time, and feel quietly uneasy about it.',
          protects: 'It avoids awkwardness.', cost: 'The unease grows, and the balance tips.',
          try: 'If you are comfortable, enjoy it. If not, say so kindly.' },
        { id: 'c', tag: 'react', text: 'Insist on splitting, with an edge: “I do not need anyone to take care of me.”',
          protects: 'It defends your independence.', cost: 'It may feel like rejection of his kindness.',
          try: 'You can be independent and still say thank you.' },
        { id: 'd', tag: 'withdraw', text: 'Stop seeing him because you suspect he is controlling.',
          protects: 'It avoids a possible trap.', cost: 'You decide from one gesture without more evidence.',
          try: 'Watch for patterns: does generosity come with expectations or pressure?' },
        { id: 'e', tag: 'ruminate', text: 'Wonder for days whether his generosity means he expects something.',
          protects: 'It keeps you careful.', cost: 'It drains the fun out of dating.',
          try: 'Ask lightly what it means to him. Then watch what he does.' }
      ] },
    { id: 's11-3', module: 11, title: 'Actions, not words',
      setup: 'Six months in, Gabriel fixes things for you, drives across the city to see you and remembers everything you tell him. He has never said “I love you,” and you would like to hear it.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I see how much you do for me, and I love it. I also sometimes need to hear words. Is that something you could try?”',
          protects: 'It honours his care and states your need.', cost: 'He may be uncomfortable.',
          try: 'See whether he finds his own way of saying it.' },
        { id: 'b', tag: 'accommodate', text: 'Tell yourself actions are enough and stop thinking about it.',
          protects: 'It avoids a hard conversation.', cost: 'The need goes unmet and may harden into resentment.',
          try: 'Name it once, kindly.' },
        { id: 'c', tag: 'react', text: 'Say, “You clearly do not love me if you cannot say it.”',
          protects: 'It states your hurt.', cost: 'It puts him on trial.',
          try: 'Lead with what you appreciate, then your request.' },
        { id: 'd', tag: 'withdraw', text: 'Say it first, and silently count his response.',
          protects: 'It tests his feelings.', cost: 'It is a test, and may hurt either way.',
          try: 'Say it because you mean it, not as a test.' },
        { id: 'e', tag: 'ruminate', text: 'Compare his silence with friends’ partners who say it daily.',
          protects: 'It keeps you vigilant.', cost: 'It makes his care look smaller than it is.',
          try: 'Compare yesterday with today, not him with others.' }
      ] },
    { id: 's11-4', module: 11, title: 'The first move',
      setup: 'You and Daniel have chatted at a regular class for two months. You like him. He is friendly but has not asked you out, and you are not sure whether he is shy, uninterested or waiting.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I enjoy talking with you. Would you like to get a coffee after class sometime?”',
          protects: 'It gives clarity quickly and honestly.', cost: 'You risk a no.',
          try: 'Whatever the answer, you learn something and keep your self-respect.' },
        { id: 'b', tag: 'accommodate', text: 'Keep waiting and hoping he will ask.',
          protects: 'It avoids rejection.', cost: 'Months can pass and nothing changes.',
          try: 'Set a time limit for waiting, then take a small step.' },
        { id: 'c', tag: 'react', text: 'Become cool and distant to punish him for not asking.',
          protects: 'It protects your pride.', cost: 'It confuses him and ends a possibility.',
          try: 'Be honest instead of cold.' },
        { id: 'd', tag: 'withdraw', text: 'Stop attending the class so you do not have to see him.',
          protects: 'It avoids discomfort.', cost: 'You lose something you enjoy.',
          try: 'Keep the class, take one small step.' },
        { id: 'e', tag: 'ruminate', text: 'Analyse every glance in class and ask friends what it means.',
          protects: 'It feels like gathering evidence.', cost: 'You end up with theories, not facts.',
          try: 'A direct invitation answers more than weeks of analysis.' }
      ] }
  );

  D.ASK.push(
    { id: 'men', title: 'Understanding men and mixed signals', domains: ['d11'], modules: [11],
      keys: ['what do men want', 'how do men think', 'men are confusing', 'understand men', 'why do men', 'mixed signals', 'is he interested', 'does he like me', 'does he like me', 'what men want', 'hot and cold', 'men are all the same', 'all men'],
      answer: ['Men are as varied as women, so the best guide is the individual in front of you. Watch what he does over time: follow-through, kindness to others, curiosity about you, how he handles disappointment.',
        'If signals are mixed, ask him directly and warmly, then trust his answer and his actions. Never accept "men are like that" as an excuse for cruelty or control. Lesson 11.1 helps you set stereotypes down and read the man.'] },
    { id: 'showlove', title: 'How he shows love', domains: ['d11'], modules: [11],
      keys: ['show love', 'shows love', 'love language', 'love languages', 'does not say i love you', 'never says i love you', 'acts of service', 'provide for me', 'provider', 'does he love me', 'how do i know he loves me', 'affection'],
      answer: ['Care takes many shapes: time, follow-through, practical help, words, affection and being brought into his life. Look at the pattern over weeks, not one gesture.',
        'If you need words or touch, say so plainly and kindly, and notice whether he tries. Inconsistency, secrecy and pressure are information, however warm the moments between. Lesson 11.2 helps you map what care means to you.'] },
    { id: 'femininity', title: 'Femininity, roles and softness', domains: ['d11'], modules: [11],
      keys: ['femininity', 'feminine', 'masculine', 'softness', 'be softer', 'traditional roles', 'gender roles', 'submissive', 'submit to him', 'lead the relationship', 'independent woman', 'chivalry', 'hold the door', 'open doors'],
      answer: ['Softness is not weakness and strength is not hardness. You can define femininity and womanhood for yourself, and roles in a relationship work best when they are discussed and agreed, whether traditional, shared or mixed.',
        'Share vulnerability at your own pace, with people who handle it with care. Lessons 11.3 and 11.5 help you think through roles and find your own balance of softness and strength.'] },
    { id: 'firstmove', title: 'Making the first move', domains: ['d11'], modules: [11],
      keys: ['first move', 'ask him out', 'chasing', 'chase him', 'pursue him', 'pursuing', 'initiate', 'who should ask', 'he is not pursuing', 'waiting for him to ask', 'shy guy'],
      answer: ['You are allowed to show interest. A warm, clear message or invitation gives a decent man something to respond to and tells you quickly how he receives it. Customs vary, so pace it to your comfort and context.',
        'If you invite and he is lukewarm, you have learned something kindly. Lesson 11.3 helps you find your comfort level with initiating.'] }
  );

  D.REFLECT = D.REFLECT || {};
  D.REFLECT[11] = {
    idea: 'The kindest way to understand another person is to see them as one human being, not a category. When you let go of what you expect him to be, you can start to notice who he is, and who you are beside him.',
    qs: ['Where have I treated a person as a category instead of a human being?', 'Where in my life are softness and strength already working together?']
  };
})();
