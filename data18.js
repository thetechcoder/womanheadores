/* Module 16: Building Something That Lasts. Parts A to D and the capstone, What love is for. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[16] = {
    title: 'Building Something That Lasts',
    intro: 'This is the last module, and it has four parts. Part A moves from dating to commitment. Part B covers family, legal and practical matters. Part C is about becoming a partner and keeping a long love alive. Part D is about what to do when things go wrong. It closes with a capstone, What love is for, where she reads her starting-line letter again and sees how far she has come. The core path reaches Part A in week 16, and Parts B to D can run longer, at her own pace.',
    safety: 'Nothing here asks her to stay in a relationship that hurts her. Trust repair does not apply to violence, threats, control or fear, which are not problems to solve and are never her fault. Legal and financial points are general guidance only, because the law differs by country, so use a qualified local adviser for your own situation. If you are in danger, contact your local emergency service now, and tell a person you trust.'
  };

  [
    { id: '16.1', title: 'Part A: From interested to committed', mins: 40, line: 'Move from interested to exclusive to committed, with clear words.' },
    { id: '16.2', title: 'Part A: The compatibility conversations', mins: 45, line: 'Money, children, place and roles, before they become arguments.' },
    { id: '16.3', title: 'Part A: Meeting each other’s people', mins: 40, line: 'Introduce and be introduced to family, friends and faith communities.' },
    { id: '16.4', title: 'Part B: Family, children and blended homes', mins: 45, line: 'In-laws, stepfamilies, and dating with or without children.' },
    { id: '16.5', title: 'Part B: Law, money and property', mins: 45, line: 'Know what to learn, and whom to ask, about marriage law and shared money.' },
    { id: '16.6', title: 'Part C: Becoming a partner', mins: 45, line: 'Trust, teamwork, shared vision and your own identity, with your snapshot.' },
    { id: '16.7', title: 'Part C: A long romance and a good beginning', mins: 45, line: 'Keep love alive, and prepare for engagement and marriage well.' },
    { id: '16.8', title: 'Part D: When things go wrong', mins: 45, line: 'Repair trust where it can be repaired, and leave well when it cannot.' },
    { id: '16.9', title: 'Capstone: What love is for', mins: 50, line: 'Read your letter again, see how far you have come, and write your own answer.' }
  ].forEach(function (l) { l.module = 16; D.LESSONS.push(l); });

  D.PARTNER = {
    trust: { name: 'Building trust', body: 'Trust is built in small, repeated moments of honesty and reliability, and repaired through accountability. It is the base everything else rests on.', practice: 'Choose one small promise this week, keep it exactly, and tell a partner or a friend how it felt.' },
    team: { name: 'Teamwork and shared vision', body: 'Strong couples act like a team: they share a direction, divide the load fairly, and face problems side by side rather than against each other.', practice: 'Write three sentences about the life you would like to build, and invite a partner or a close friend to write their own.' },
    self: { name: 'Keeping your own identity', body: 'A good partnership is two whole people. Keeping your friends, work, faith, interests and voice makes you a better partner, not a lesser one.', practice: 'Name one part of your life that is yours alone, and protect one hour for it each week.' },
    spark: { name: 'Keeping love alive', body: 'Long love is tended. Curiosity, play, appreciation and small rituals keep closeness fresh long after the beginning.', practice: 'Choose one small ritual, such as a weekly walk or a nightly question, and keep it for a month.' }
  };

  D.CONTENT['16.1'] = {
    lead: 'Between a lovely few dates and a shared life, there are steps. Walk them in words, not guesses, so that neither of you is left wondering.',
    story: { h: 'Story: Eilidh, 37, Glasgow', p: [
      'Eilidh and Callum had been seeing each other for five months. They spent most weekends together and met each other’s friends, but they had never said what they were. Eilidh felt a quiet worry growing, and found herself reading his messages for clues.',
      'She decided to ask. She chose a calm walk, not a text, and said, “I am really happy with you. I would like to know where you see us going, because I am hoping for something committed.” Callum was quiet, then said that he had been wanting to say the same thing and had been afraid of rushing. They agreed to be exclusive, and talked about what that meant to each of them. Eilidh said, “The question I had been dreading was a relief for both of us.”',
      'Eilidh is a composite character.'] },
    framework: { h: 'Framework: three steps, said out loud', intro: 'Each step deserves a conversation.', items: [
      ['Interested:', 'you enjoy each other and are getting to know each other. There is no promise yet, and each of you is free.'],
      ['Exclusive:', 'you have agreed to see only each other. Say what exclusive means to each of you, including contact with exes and use of apps.'],
      ['Committed:', 'you are building toward a shared future. You talk about where you will live, how you will handle money, and whether marriage or a lifelong partnership is where this is heading.'],
      ['Ask in a calm moment:', 'in person, kindly and clearly. “I am hoping for something committed. Where are you?”'],
      ['Listen to actions:', 'words and behaviour should match. A man who wants you will make room, and will say so.'],
      ['Give it a date, not a deadline:', 'it is fair to agree to talk again in a few weeks. It is not fair to use ultimatums.'],
      ['Honour the answer:', 'if the answer is no or not yet, believe it. You can grieve, then decide what you want to do.']] },
    exercise: { h: 'Exercise: your next honest conversation', intro: 'About 40 minutes. Write it before you need it.', blocks: [
      { t: 'ta', k: 'stage', label: 'Where I think I am with someone, or where I would like to be', rows: 2, ph: 'Interested, exclusive, committed, or not dating at present.' },
      { t: 'ta', k: 'want', label: 'What I want from this stage, in plain words', rows: 3, ph: 'Clarity, exclusivity, a plan, a pace.' },
      { t: 'inp', k: 'ask', label: 'The sentence I would use to ask where we are going', ph: 'Warm, clear, and not an ultimatum.' },
      { t: 'inp', k: 'when', label: 'When and where I would raise it', ph: 'A calm moment, in person.' },
      { t: 'ta', k: 'answer', label: 'What different answers would tell me, and what I would do', rows: 3, ph: 'Yes, not yet, no, silence.' }] },
    foryou: [{ when: 'gentle', text: 'If asking feels frightening, rehearse with a friend first. A kind question is not a demand, and you deserve to know where you stand.' }],
    embrace: [
      ['Asking clearly and kindly', 'Reading his messages for clues'],
      ['Saying what exclusive means', 'Assuming you agree'],
      ['Believing the answer', 'Hoping it will change'],
      ['A date to talk again', 'An ultimatum']]
  };

  D.CONTENT['16.2'] = {
    lead: 'Most couples who struggle are not short of love. They are short of agreement on a handful of practical things nobody discussed early enough. Have these conversations while you are curious, not when you are cross.',
    story: { h: 'Story: Parisa, 35, Toronto', p: [
      'Parisa and Daniel were engaged and happy, and had never talked about money. When they started planning the wedding, they discovered that she expected to support her parents each month and that he expected to save for a house. Neither was wrong, and each felt blindsided.',
      'They sat down with a notebook and made four columns: money, children, place and roles. They did not solve everything in an evening. They listed what each wanted, where they agreed, and where they needed more talk. It took four conversations over two months. Parisa said, “I was afraid that naming our differences would break us. It showed us we could handle them.”',
      'Parisa is a composite character.'] },
    framework: { h: 'Framework: the four big conversations', intro: 'Start with curiosity, and take them in turn.', items: [
      ['Money:', 'earning, spending, saving, debt, support for family, who pays for what, and how you will decide together. Be honest about your history.'],
      ['Children:', 'whether, how many, when, and how you would raise them, including faith, language and schooling. Include what you would do if it did not happen as planned.'],
      ['Place:', 'where you will live, how close to family, whose career moves, and what would make you move.'],
      ['Roles and work:', 'who does what at home, how you will share care and chores, and what each of you expects of work, ambition and rest. Ask rather than assume.'],
      ['Beyond the four:', 'faith, health, family duties, how you handle conflict, and what you want your life to feel like in ten years.'],
      ['How to talk:', 'one topic at a time, in a calm moment, with curiosity. Write down what you agree. Revisit as life changes.']] },
    exercise: { h: 'Exercise: your four columns', intro: 'About 45 minutes. Write your own views first.', blocks: [
      { t: 'ta', k: 'money', label: 'Money: what I believe, what I need, what worries me', rows: 3, ph: 'Earning, saving, debt, supporting family.' },
      { t: 'ta', k: 'kids', label: 'Children: what I want, and what I would do if plans change', rows: 3, ph: 'Whether, when, how, and what if not.' },
      { t: 'ta', k: 'place', label: 'Place: where I could live, and what would make me move', rows: 3, ph: 'City, country, nearness to family, work.' },
      { t: 'ta', k: 'roles', label: 'Roles and work: what I expect and what I could share', rows: 3, ph: 'Home, care, ambition, rest.' },
      { t: 'chips', k: 'first', max: 1, options: ['Money', 'Children', 'Place', 'Roles and work', 'Faith', 'Family duties'] },
      { t: 'inp', k: 'start', label: 'The first conversation I will start, and when', ph: 'A topic, a calm moment, and an opening line.' }] },
    foryou: [{ when: 'gentle', text: 'If these topics feel heavy, pick the one that scares you least and begin there. One honest conversation lightens the others.' }],
    embrace: [
      ['One topic at a time', 'Everything in one night'],
      ['Writing down what you agree', 'Relying on memory'],
      ['Curiosity before conclusions', 'Assuming you know his view'],
      ['Revisiting as life changes', 'Deciding once and forever']]
  };

  D.CONTENT['16.3'] = {
    lead: 'A partner comes with people. How you meet them, and how he meets yours, tells you a great deal about how you will live together.',
    story: { h: 'Story: Thuli, 33, Durban', p: [
      'Thuli had been dating Sipho for eight months before he invited her to meet his family. She was nervous. His mother asked searching questions, his aunts watched closely, and his friends teased him. Thuli was warm, listened more than she spoke, and brought a small gift.',
      'Afterwards, Thuli and Sipho compared notes. He told her what his family had said, and she told him what she had noticed: how he spoke to his mother, how he treated his younger cousins, how he behaved when he was teased. Two weeks later, he met her friends and her church community. Thuli said, “Meeting each other’s people was like reading each other’s backstory. It made our love feel real and rooted.”',
      'Thuli is a composite character.'] },
    framework: { h: 'Framework: introductions, with eyes open', intro: 'Meeting people is a gift and a source of information.', items: [
      ['When to introduce:', 'when the relationship is exclusive and heading toward commitment, not after the first few dates. Decide together.'],
      ['Start small:', 'a meal with friends, a short visit, a community event. Let the connection grow.'],
      ['Be yourself, with warmth:', 'bring respect, curiosity and small courtesies that fit their culture.'],
      ['Notice, kindly:', 'how does he treat his family and friends? How do they treat each other? Is there warmth, respect and freedom?'],
      ['Your people matter too:', 'a partner who avoids, mocks or isolates you from your people is giving you information.'],
      ['Faith communities:', 'if faith matters, visit each other’s communities and learn what is expected of a couple.'],
      ['Debrief:', 'afterwards, share what you each noticed, with kindness and without gossip.']] },
    exercise: { h: 'Exercise: meeting and being met', intro: 'About 40 minutes. Think about both sides.', blocks: [
      { t: 'ta', k: 'hopes', label: 'What I want a partner to see and understand about my people', rows: 3, ph: 'Family, friends, community, faith.' },
      { t: 'ta', k: 'watch', label: 'What I will notice when I meet his people', rows: 3, ph: 'Warmth, respect, how he is with them, how they are with each other.' },
      { t: 'inp', k: 'who', label: 'The first person from my life I would introduce him to', ph: 'A friend, a sister, a mentor.' },
      { t: 'inp', k: 'gift', label: 'A small courtesy I would bring or do', ph: 'Food, a gift, a greeting that fits their custom.' },
      { t: 'ta', k: 'debrief', label: 'The questions I would ask him afterwards', rows: 2, ph: 'What did you notice? How did it feel?' }] },
    foryou: [{ when: 'gentle', text: 'If meeting people makes you anxious, go for a short time with a clear end, and bring someone friendly. Warmth beats perfection.' }],
    embrace: [
      ['Small first meetings', 'A big event with high stakes'],
      ['Noticing how he treats his people', 'Only noticing how he treats you'],
      ['Sharing your own people', 'Hiding them'],
      ['A kind debrief', 'Gossip']]
  };

  D.CONTENT['16.4'] = {
    lead: 'Families are not obstacles to a relationship. They are part of it. In-laws, children and stepfamilies need patience, clear boundaries and a partner who stands beside you.',
    story: { h: 'Story: Dolores, 42, Manila', p: [
      'Dolores had a ten-year-old daughter, Isabel, from a previous marriage. She waited a year before introducing Miguel, a widower with two teenage sons. She and Miguel agreed on a plan: slow introductions, no pressure on the children to love each other, and no discipline of each other’s children for the first year.',
      'The boys were cool at first. Isabel was shy. Dolores and Miguel kept the family dinners short and the boundaries clear, and let the children set the pace. A year later, one of the boys asked Dolores for help with a school project. Dolores said, “We were not trying to create a perfect family. We were trying to create a safe one, and it took time.”',
      'Dolores is a composite character.'] },
    framework: { h: 'Framework: family, kept kindly', intro: 'A few principles for every shape of family.', items: [
      ['In-laws:', 'honour them, and agree privately what you will and will not do. Your partner speaks to his family, and you to yours, so nobody is put in the middle.'],
      ['Children:', 'children come first for a parent. Introduce them slowly, when a relationship is serious, and let them set the pace. Do not demand love.'],
      ['Stepfamilies:', 'expect awkwardness and grief as well as joy. Be an adult friend before an authority. The parent leads discipline at first.'],
      ['If you have children:', 'look for a partner who is kind to them and patient. Your children’s safety and wellbeing are not negotiable.'],
      ['If you do not:', 'you may be choosing a family of friends, work and chosen community. A partner needs to respect that or share it.'],
      ['If you are hoping for children:', 'talk about it early, and about what you would do if it did not happen.'],
      ['A united front:', 'privately agree your boundaries, and show them calmly together.']] },
    exercise: { h: 'Exercise: your family map', intro: 'About 45 minutes. Make it fit your own shape of family.', blocks: [
      { t: 'chips', k: 'situation', max: 5, options: ['I have children', 'He has children', 'I hope for children', 'Children are not part of my plan', 'Elderly parents I care for', 'Close extended family', 'Few family ties', 'A chosen family of friends'] },
      { t: 'ta', k: 'kids', label: 'How I would want children, mine or his, to be introduced and treated', rows: 3, ph: 'Pace, roles, discipline, respect.' },
      { t: 'ta', k: 'inlaws', label: 'What I would want from my partner with his family and mine', rows: 3, ph: 'Support, boundaries, speaking up.' },
      { t: 'inp', k: 'rule', label: 'One boundary I would hold about family', ph: 'For example: we decide big things together, before we tell anyone.' },
      { t: 'ta', k: 'role', label: 'The role I would be happy to take, and the one I would not', rows: 2, ph: 'Friend, helper, authority.' }] },
    foryou: [{ when: 'gentle', text: 'If family has been a source of hurt, you can build a different pattern in your own home. Take your time, and bring in support.' }],
    embrace: [
      ['Children setting the pace', 'Demanding instant love'],
      ['Each speaking to their own family', 'Putting a partner in the middle'],
      ['Agreeing boundaries in private', 'Arguing in front of others'],
      ['A safe family over a perfect one', 'Forcing a picture']]
  };

  D.CONTENT['16.5'] = {
    lead: 'Marriage and long partnership have legal and financial effects that vary widely by country. You do not need to be a lawyer. You need to know what to learn and whom to ask, before you commit.',
    story: { h: 'Story: Anouk, 39, Amsterdam', p: [
      'Anouk and Tomas, who had met when he moved from Poland, decided to marry. Anouk assumed their situation was simple. A friend suggested they speak to a notary. They discovered that the law on shared property, inheritance and pensions differed depending on how they married, where they lived, and where they might move.',
      'They chose to keep some savings separate and agreed on a written arrangement, drawn up with a professional. It was not romantic, and Anouk worried about how it would feel. Instead, it was a relief. She said, “We had talked about the possible bad days when we were happy, so the plan was about kindness, not suspicion.”',
      'Anouk is a composite character.'] },
    framework: { h: 'Framework: learn, ask and write down', intro: 'General guidance only. Laws differ by country, so ask a qualified local professional.', items: [
      ['Know your system:', 'in some countries marriage is civil, religious, customary or all three, and each can have different legal effects. Learn which applies to you.'],
      ['Property and money:', 'learn what happens to earnings, savings, property and debts in marriage, in divorce and on death in your place of residence.'],
      ['Agreements:', 'some couples make a written agreement before marriage about property or finances. It can be an act of care. Ask a lawyer about what is possible and fair where you live.'],
      ['Joint and separate:', 'decide which accounts and assets will be shared and which will stay yours. Keep your own records and, where wise, your own income.'],
      ['Moving countries:', 'immigration, residence, citizenship and work rights can depend on a relationship. Keep your own papers safe and know your rights.'],
      ['Wills and protection:', 'learn what happens to a partner and children if one of you dies, and what documents you may need.'],
      ['Written down:', 'whatever you decide, write it down and keep copies. Review it as life changes.']] },
    exercise: { h: 'Exercise: your questions for a professional', intro: 'About 45 minutes. This is a list of questions, not legal advice.', blocks: [
      { t: 'ta', k: 'know', label: 'What I need to learn about marriage and partnership law where I live or may live', rows: 3, ph: 'Property, inheritance, children, moving countries.' },
      { t: 'inp', k: 'lawyer', label: 'Who I could ask for qualified local advice', ph: 'A lawyer, notary, community legal service or trusted adviser.' },
      { t: 'ta', k: 'money', label: 'How I would want shared money to work, in principle', rows: 3, ph: 'Shared, separate, a mix.' },
      { t: 'ta', k: 'own', label: 'What I would keep in my own name or under my own control', rows: 3, ph: 'Savings, papers, income, property.' },
      { t: 'inp', k: 'date', label: 'When I will put these questions to a professional', ph: 'A real date.' }] },
    foryou: [{ when: 'gentle', text: 'If these topics feel cold, remember they protect love. Clear arrangements made calmly can prevent fear and conflict later.' }],
    embrace: [
      ['Asking a qualified local professional', 'Guessing or copying a friend'],
      ['Keeping your own papers and records', 'Handing everything over'],
      ['Writing agreements down', 'Relying on goodwill alone'],
      ['Reviewing as life changes', 'Setting it and forgetting it']]
  };

  D.CONTENT['16.6'] = {
    lead: 'The best partners are not perfect. They are trustworthy, they work as a team, and they stay themselves. These are skills, and they can be grown.',
    story: { h: 'Story: Zuri, 36, Nairobi', p: [
      'Zuri and Kevin had been together for three years and kept bumping into the same problem. He took on the household finances without telling her, and she took on the planning of the social calendar without telling him. Each felt carrying too much and unseen.',
      'They held a monthly “team meeting” over tea, with three questions: what is going well, what do we each need, and what are we building next year? They began to share the load, name their own needs, and write down a shared vision. Zuri also kept her Thursday evening choir. She said, “I used to think having my own life was a threat to us. It turned out it was part of what made us strong.”',
      'Zuri is a composite character.'] },
    framework: { h: 'Framework: four strengths of a partner', intro: 'Grow them one at a time.', items: [
      ['Trust:', 'small promises kept, honesty even when it is awkward, and repair when you fall short. Trust is built in tiny moments.'],
      ['Teamwork:', 'a shared direction, a fair division of the load, and facing problems side by side. “We against the problem”, not “you against me”.'],
      ['Shared vision:', 'where you want to be in five and ten years, in life, work, family, faith and place. Revisit it as you change.'],
      ['Identity:', 'friends, work, faith, interests and your own voice. A partner who flourishes outside the relationship brings more to it.'],
      ['Spark:', 'play, curiosity and appreciation. They are tended, not assumed.'],
      ['Warning:', 'none of this means giving up yourself, or tolerating control, fear or contempt. Partnership is between equals.']] },
    exercise: { h: 'Exercise: your partnership snapshot', intro: 'About 45 minutes. This is a snapshot of right now.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'trust', text: 'I keep my promises, tell the truth, and repair things when I fall short.' },
        { axis: 'team', text: 'I can work as part of a team and share a direction with someone.' },
        { axis: 'self', text: 'I keep my own friends, interests, faith and voice, whatever my relationships.' },
        { axis: 'spark', text: 'I bring play, curiosity and appreciation to the people I love.' }] },
      { t: 'result', fn: 'partner' },
      { t: 'ta', k: 'vision', label: 'The life I would like to build, in three sentences', rows: 3, ph: 'Home, work, family, faith, place, how it feels.' },
      { t: 'ta', k: 'identity', label: 'The parts of my life that are mine, and that I will protect', rows: 3, ph: 'Friends, work, faith, creative life, health.' },
      { t: 'inp', k: 'ritual', label: 'One small ritual I would like to keep in a relationship', ph: 'A weekly walk, a nightly question, a shared meal.' }] },
    foryou: [{ when: 'gentle', text: 'If trust has been broken for you, build it first with yourself. Keep one small promise a day and notice what it does.' }],
    embrace: [
      ['Small promises kept', 'Grand promises forgotten'],
      ['Facing the problem together', 'Facing each other'],
      ['Keeping your own friends and faith', 'Merging until you disappear'],
      ['Tending the spark', 'Assuming it will look after itself']]
  };

  D.CONTENT['16.7'] = {
    lead: 'A long romance is a series of choices to turn toward each other. And a good beginning to marriage is less about the wedding than about what you build before and after it.',
    story: { h: 'Story: Ioana, 45, Cluj', p: [
      'Ioana had been married for twelve years and described her marriage as “good but a bit grey”. One evening, she asked her husband Radu what they used to do that made them laugh. They remembered long walks and silly voices. They started again: a Sunday walk, no phones, and a question each. It felt awkward for three weeks and then natural.',
      'When her niece got engaged, Ioana found herself giving advice that surprised her: “Spend less time on the party and more time on the questions. Who handles money? How do we argue? What do we do when we are tired?” Ioana said, “It is not the big gestures that keep love alive. It is the small returns, over years.”',
      'Ioana is a composite character.'] },
    framework: { h: 'Framework: tending love, and preparing well', intro: 'For couples at any stage.', items: [
      ['Turn toward:', 'notice small bids for attention and respond. A look, a story, a joke. Turning toward each other, repeatedly, builds closeness.'],
      ['Appreciate aloud:', 'say what you value. Small thanks matter more than rare speeches.'],
      ['Keep curious:', 'people change. Ask new questions about old people.'],
      ['Play and rest:', 'laughter, trips, hobbies and time without a to-do list.'],
      ['Engagement:', 'a decision to build a life, not only a party. Many couples find premarital preparation, counselling or guidance from a faith or community guide valuable.'],
      ['What matters versus noise:', 'what matters is trust, money, children, family, faith, how you argue and how you love. The noise includes the venue, the guest list, what others expect, and perfect photos.'],
      ['Ceremonies:', 'honour what your culture or faith values, and keep it affordable. Do not begin a marriage in debt for a day.']] },
    exercise: { h: 'Exercise: tending and preparing', intro: 'About 45 minutes. Think about the relationship you hope to build.', blocks: [
      { t: 'ta', k: 'romance', label: 'Small ways I would like to keep love alive', rows: 3, ph: 'Walks, questions, laughter, thanks, travel.' },
      { t: 'ta', k: 'prep', label: 'What I think matters most to prepare before marriage or a lifelong commitment', rows: 3, ph: 'Money, children, family, faith, conflict.' },
      { t: 'ta', k: 'noise', label: 'What I would treat as noise', rows: 2, ph: 'The party, the pressure, comparisons.' },
      { t: 'inp', k: 'counsel', label: 'A person or service who could help us prepare well', ph: 'A counsellor, an elder, a faith guide, a course.' }] },
    roots: {
      christian: 'Many Christian traditions offer marriage preparation through the church, often including conversation with a pastor, and speak of marriage as a covenant of faithful love. Consider what preparation your community offers.',
      muslim: 'Many Muslim traditions speak of marriage as a source of tranquillity, love and mercy between spouses, and value consultation, the guidance of family, and an honest conversation about rights and responsibilities. Consider whom you could consult with knowledge and care.',
      jewish: 'Many Jewish traditions offer preparation for marriage through a rabbi or community, and speak of building a home together as a shared project. Consider what guidance your community provides.',
      hindu: 'Many Hindu traditions describe marriage as a partnership of shared duty, love and growth, often with rituals and vows that spell out what the couple promises. Consider which vows and customs are meaningful to you.',
      buddhist: 'Many Buddhist traditions emphasise kindness, honesty and mindful attention as the foundation of any close relationship. Consider how those could shape your daily life together.',
      secular: 'Consider which promises, values and rituals you would want to mark and keep, such as vows you write yourselves, an anniversary practice, or a regular check-in.'
    },
    foryou: [{ when: 'gentle', text: 'You do not need a perfect picture. A few honest conversations, and one person to guide you, make a strong start.' }],
    embrace: [
      ['Small returns, repeated', 'Waiting for a grand gesture'],
      ['Preparing for life, not a day', 'Preparing only for the party'],
      ['A ceremony you can afford', 'Debt for one day'],
      ['A guide who knows you both', 'Advice from everyone']]
  };

  D.CONTENT['16.8'] = {
    lead: 'Even good relationships hit hard places. Some can be repaired, some should end, and a few are unsafe. Knowing which is which, and what to do, is a form of courage and love.',
    story: { h: 'Story: Marlen, 43, Hamburg', p: [
      'Marlen discovered that her husband, Jonas, had been having an affair. She was devastated. After weeks of anger and grief, she told him she needed him to end it, to be fully honest, and to go with her to a counsellor. He agreed. Over the next year, they rebuilt slowly: transparency, patience, hard conversations. Some days she wondered if she was a fool.',
      'Eventually, they came to a place of cautious trust. It was not the same marriage, and Marlen said it was not an easy path. A friend of hers, Katja, had faced something similar and made a different choice: she left, with her friends and a lawyer beside her. Marlen said, “Both of us chose with open eyes. What mattered was that the choice was ours, and that we did not do it alone.”',
      'Marlen is a composite character.'] },
    framework: { h: 'Framework: repair, grow apart, or leave', intro: 'Read the situation honestly. Safety first.', items: [
      ['Safety first:', 'if there is violence, threat, control or fear, this is not a trust-repair problem, and nothing here applies. Tell a person you trust, contact a local support service, plan your exit with support, and see Module 13.'],
      ['Trust repair:', 'repair is possible when the person takes full responsibility, ends the harm, is transparent over time, and does the work. It takes months or years and it is slow. You may decide you do not want to try.'],
      ['Infidelity:', 'it hurts deeply. You may need time before deciding. Seek support, and see a doctor for health checks where relevant. You are not to blame for another person’s choice.'],
      ['Growing apart:', 'sometimes a quiet drift is the problem. Try honest talk, shared time and a counsellor. If effort is only one-sided, or you have both changed, you can decide to part with respect.'],
      ['Leaving well:', 'plan with support: where you will live, your money and papers, the children, and your safety. Tell trusted people. Do it with as much kindness as safety allows.'],
      ['Mourning:', 'the end of a relationship is a loss even when it is right. Give yourself time, friends and, if needed, a counsellor.'],
      ['Counselling:', 'a trained couples counsellor can help most couples that are not in danger. Choose someone who respects you both.']] },
    exercise: { h: 'Exercise: what I would do', intro: 'About 45 minutes. Write while you are calm, not in the middle of a crisis.', blocks: [
      { t: 'ta', k: 'repair', label: 'What I would need to see from a partner for trust to be repairable', rows: 3, ph: 'Honesty, accountability, time, help.' },
      { t: 'ta', k: 'wall', label: 'What I would not accept, whatever the apology', rows: 3, ph: 'Violence, control, repeated betrayal, contempt.' },
      { t: 'inp', k: 'support', label: 'Who I would turn to first if things went wrong', ph: 'A friend, a sister, a counsellor, a support service.' },
      { t: 'ta', k: 'leave', label: 'How I would plan to leave well, if it came to that', rows: 3, ph: 'Where I would stay, my money and papers, who I would tell.' },
      { t: 'p', text: 'If any of this is your situation now, you do not need to finish the exercise. Tell someone you trust today, and contact a local support service if you feel unsafe.' }] },
    foryou: [{ when: 'gentle', text: 'If you have been through a betrayal or a break-up, go gently. The aim is not to decide anything now. The aim is to know that you have choices.' }],
    embrace: [
      ['Safety before repair', 'Repairing what is unsafe'],
      ['Time, support and a plan', 'A decision in the first hour'],
      ['Full accountability from the one who harmed', 'Taking the blame yourself'],
      ['Leaving with care for yourself', 'Leaving without a plan']]
  };

  D.CONTENT['16.9'] = {
    lead: 'You began this guide with a question about what you wanted. This is the moment to look back, see what has changed, and say in your own words what love is for.',
    story: { h: 'Story: Eleni, 41, Athens', p: [
      'Eleni opened the letter she had written on her first day of the guide. She remembered feeling stuck, tired of the same pattern, and hopeful in a way she did not trust. She laughed at some of it and cried at some of it. She noticed that what she had been most afraid of, being too much and not enough at once, no longer ruled her.',
      'She retook the audit and saw that her scores had risen in some areas and barely moved in others. She said, “I used to think the point of all this was to find him. I now think the point was to become someone who could recognise him, and to build a life that was already good.” She wrote a new letter to herself for next year and put it in the app.',
      'Eleni is a composite character.'] },
    framework: { h: 'Framework: look back, look in, look ahead', intro: 'Take your time with this one.', items: [
      ['Look back:', 'read your starting-line letter. What has changed? What are you proud of? What surprised you?'],
      ['Measure kindly:', 'retake the audit and take your second readiness snapshot, then compare. Progress is rarely even. Celebrate what rose, and be curious about what did not.'],
      ['Look in:', 'what do you now believe about love, about men, about yourself? What do you want to keep?'],
      ['What love is for:', 'love is not a prize for being good enough, or a rescue. At its best it is a way two people become more truly themselves, and more generous to the world.'],
      ['Look ahead:', 'choose your next step, and write to the woman you will be in a year.'],
      ['You are not finished:', 'this is a beginning. You can return to any module whenever you need.']] },
    exercise: { h: 'Exercise: your letter, your score and your answer', intro: 'About 50 minutes. Settle in somewhere quiet.', blocks: [
      { t: 'result', fn: 'letterback' },
      { t: 'result', fn: 'journey' },
      { t: 'result', fn: 'readiness' },
      { t: 'ta', k: 'changed', label: 'What has changed in me since I began', rows: 4, ph: 'In how I think, how I feel, how I act.' },
      { t: 'ta', k: 'love', label: 'What love is for, in my own words', rows: 4, ph: 'Write it plainly. It does not need to be grand.' },
      { t: 'ta', k: 'letter', label: 'A letter to the woman I will be in a year', rows: 5, ph: 'Dear me...' },
      { t: 'inp', k: 'next', label: 'My next step', ph: 'One concrete thing, this week.' },
      { t: 'summary16' }] },
    roots: {
      christian: 'Many Christian traditions describe love as the greatest of virtues, patient and kind, and as the heart of faith. Consider what that love asks of you, and what it gives you.',
      muslim: 'Many Muslim traditions speak of love and mercy as signs of the divine in human life, including between spouses, and of compassion toward all. Consider how that shapes what you want to give and receive.',
      jewish: 'Many Jewish traditions speak of love as an act of kindness, loyalty and repair, expressed in how we treat the people near us, including the stranger. Consider how love shows up in your daily deeds.',
      hindu: 'Many Hindu traditions speak of love in many forms, including love of the divine, of family and of a partner, and of compassion as part of dharma. Consider which forms of love sustain you.',
      buddhist: 'Many Buddhist traditions teach loving-kindness and compassion as practices that can be grown toward oneself and all beings. Consider how that could be the ground of every relationship you have.',
      secular: 'Consider what thinkers, poets, friends and your own life have taught you about love, and what you would want to say to someone beginning where you began.'
    },
    foryou: [{ when: 'gentle', text: 'If your numbers did not rise as you hoped, be kind. Healing and rest are progress, and the guide will be here whenever you return.' }],
    embrace: [
      ['Measuring progress kindly', 'Measuring against others'],
      ['A life that is already good', 'A life waiting for a man'],
      ['Love as a way of becoming', 'Love as a prize'],
      ['Writing to your future self', 'Closing the book']]
  };

  D.SCENARIOS.push(
    { id: 's16-1', module: 16, title: 'Where is this going?',
      setup: 'You and Adrian have been together for seven months. You are happy, you spend most weekends together, and he has met your friends. You want to know whether he sees a future, and he has never mentioned one.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Choose a calm walk and say, “I am really happy with you. I am hoping for something committed. Where do you see us?”',
          protects: 'It brings the question into the open, kindly.', cost: 'The answer may not be what you hope.',
          try: 'Listen to the answer and to what he does next.' },
        { id: 'b', tag: 'accommodate', text: 'Keep enjoying the weekends and say nothing for fear of scaring him.',
          protects: 'It keeps things pleasant.', cost: 'It leaves you carrying a growing worry.',
          try: 'Kindness includes asking.' },
        { id: 'c', tag: 'react', text: 'Give him an ultimatum: commit this month or you are leaving.',
          protects: 'It forces an answer.', cost: 'It can produce a rushed yes or a defensive no.',
          try: 'Agree a time to talk, not a threat.' },
        { id: 'd', tag: 'withdraw', text: 'Pull back and see less of him to test whether he chases you.',
          protects: 'It avoids a direct question.', cost: 'It is a game, and it confuses you both.',
          try: 'Say it plainly instead.' },
        { id: 'e', tag: 'ruminate', text: 'Spend weeks analysing his messages for clues.',
          protects: 'It feels like gathering evidence.', cost: 'It drains your joy and answers nothing.',
          try: 'Write the question down, and plan when to ask it.' }
      ] },
    { id: 's16-2', module: 16, title: 'His children, your space',
      setup: 'You have been with Miguel for a year. His two teenagers are polite but cool toward you. Miguel says, “You just need to step in more and be firm with them.” You feel unsure and a little invisible.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I care about them and about us. Let me be a kind adult friend first. You lead on discipline, and I will back you. Can we agree that together?”',
          protects: 'It respects the children and the partnership.', cost: 'It takes patience.',
          try: 'Suggest one small activity with each of them, with no pressure.' },
        { id: 'b', tag: 'accommodate', text: 'Take on the disciplinarian role to please him.',
          protects: 'It meets his request.', cost: 'It tends to harden the children against you.',
          try: 'Authority usually comes after a relationship, not before it.' },
        { id: 'c', tag: 'react', text: 'Tell Miguel his kids are rude and he needs to fix it.',
          protects: 'It names your frustration.', cost: 'It puts him in the middle.',
          try: 'Describe what you need, not what they are.' },
        { id: 'd', tag: 'withdraw', text: 'Stay away when the boys are around.',
          protects: 'It avoids awkwardness.', cost: 'It deepens distance and leaves you out.',
          try: 'Stay present, calm and short.' },
        { id: 'e', tag: 'ruminate', text: 'Decide you will never be accepted and wonder if you should end it.',
          protects: 'It prepares you for loss.', cost: 'It cuts off a process that takes time.',
          try: 'Give it a long runway, and check in with Miguel often.' }
      ] },
    { id: 's16-3', module: 16, title: 'The message on his phone',
      setup: 'You and Daniel have been together for two years. His phone lights up with a warm, flirty message from a colleague. When you ask, he says it is nothing, but he changed his phone settings last month and has been more secretive.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Choose a calm moment and say what you saw, what you felt and what you need: honesty and an end to the secrecy. Then watch what he does.',
          protects: 'It names the issue without accusing, and tests his accountability.', cost: 'It may be a painful conversation.',
          try: 'Notice whether he takes responsibility or turns it on you.' },
        { id: 'b', tag: 'accommodate', text: 'Accept his “it is nothing” and push the worry down.',
          protects: 'It avoids a fight.', cost: 'The worry grows in silence.',
          try: 'A worry spoken kindly is easier than one swallowed.' },
        { id: 'c', tag: 'react', text: 'Go through his phone and confront him in anger.',
          protects: 'It feels like finding the truth.', cost: 'It breaks trust on both sides and can escalate.',
          try: 'Ask directly instead.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing, and quietly start to detach.',
          protects: 'It protects you from more hurt.', cost: 'It ends the relationship without a conversation.',
          try: 'Even a short honest talk gives you information.' },
        { id: 'e', tag: 'ruminate', text: 'Replay the message for days and imagine the worst.',
          protects: 'It feels like preparation.', cost: 'It exhausts you without evidence.',
          try: 'Talk to him, and to a friend you trust.' }
      ] },
    { id: 's16-4', module: 16, title: 'Growing apart',
      setup: 'After nine years together, you and Samuel are polite, tired and distant. You no longer laugh together. Neither of you has done anything wrong. You wonder whether love has quietly ended, or whether it just needs tending.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I miss us. I would like us to try, with time together and perhaps a counsellor. And I want us both to be honest about whether we still want this.”',
          protects: 'It gives the relationship a real chance, honestly.', cost: 'It takes courage and time.',
          try: 'Set a date to review in a few months.' },
        { id: 'b', tag: 'accommodate', text: 'Carry on as you are because it is safe and familiar.',
          protects: 'It avoids upheaval.', cost: 'It lets drift become the decision.',
          try: 'Make the decision on purpose.' },
        { id: 'c', tag: 'react', text: 'Announce that you want a separation, in the middle of an argument.',
          protects: 'It breaks the silence.', cost: 'It may be said in anger and cannot be unsaid.',
          try: 'Say it calmly, once you have thought it through.' },
        { id: 'd', tag: 'withdraw', text: 'Fill your evenings with other things and rarely see him.',
          protects: 'It reduces pain.', cost: 'It widens the gap.',
          try: 'Keep one regular time together.' },
        { id: 'e', tag: 'ruminate', text: 'Compare your marriage with other people’s and wonder who is to blame.',
          protects: 'It feels like analysis.', cost: 'It leads nowhere.',
          try: 'Ask what you each want next.' }
      ] }
  );

  D.ASK.push(
    { id: 'commit', title: 'Where is this going? Commitment and engagement', domains: ['d12'], modules: [16],
      keys: ['where is this going', 'define the relationship', 'are we exclusive', 'are we official', 'make it official', 'propose', 'proposal', 'engagement', 'engaged', 'get engaged', 'marry me', 'wedding planning', 'premarital', 'pre-marital', 'before we marry', 'marriage counselling', 'marriage counseling', 'marriage preparation'],
      answer: ['Move through the steps in words: interested, exclusive, committed. Choose a calm moment, say you are hoping for something committed, and ask where he is. Then believe both his words and his actions, and agree a time to talk again rather than issue an ultimatum.',
        'For engagement, prepare for the marriage rather than the party: money, children, family, faith and how you argue. A counsellor or a guide from your community can help. Lessons 16.1 and 16.7 help you prepare.'] },
    { id: 'blended', title: 'Children, stepfamilies and family', domains: ['d12'], modules: [16],
      keys: ['stepchild', 'stepchildren', 'stepmum', 'stepmother', 'step-mum', 'blended', 'single mother', 'single mum', 'he has kids', 'he has children', 'she has kids', 'dating with kids', 'dating with children', 'introduce my children', 'meet my children', 'meet my kids', 'my in laws'],
      answer: ['Children come first for a parent. Introduce them slowly, when a relationship is serious, let them set the pace, and do not demand love. In a stepfamily, be a kind adult friend before an authority, and let the parent lead discipline at first.',
        'Agree boundaries with your partner in private, and show them calmly together. Your own children’s safety and wellbeing are not negotiable. Lesson 16.4 helps you plan.'] },
    { id: 'legal', title: 'Marriage law, money and property', domains: ['d12'], modules: [16],
      keys: ['prenup', 'prenuptial', 'pre-nup', 'marriage law', 'marriage certificate', 'civil marriage', 'customary marriage', 'joint account', 'joint finances', 'shared finances', 'who owns', 'property in marriage', 'legal rights', 'marriage contract'],
      answer: ['The law on marriage, property, inheritance and children varies a great deal by country, and by how you marry, so ask a qualified local lawyer, notary or community legal service about your own situation. Some couples make a written agreement before marriage; asked and made calmly, it can be an act of care.',
        'Decide in principle what will be shared and what will stay yours, keep your own papers and records, and write down what you agree. This is general guidance, not legal advice. Lesson 16.5 gives you a list of questions to take along.'] },
    { id: 'trustbroken', title: 'Infidelity, trust and growing apart', domains: ['d12'], modules: [16],
      keys: ['he cheated', 'cheated on me', 'cheating', 'affair', 'unfaithful', 'infidelity', 'betrayal', 'trust broken', 'rebuild trust', 'growing apart', 'grown apart', 'drifted apart from him', 'fallen out of love', 'should i leave him', 'how to leave'],
      answer: ['Start with safety: if there is violence, threat, control or fear, this is not a trust-repair problem, so tell someone you trust, contact a local support service and see Module 13. Otherwise, take time before deciding anything, and get support. You are not to blame for another person’s choice.',
        'Trust can sometimes be rebuilt when the person takes full responsibility, ends the harm and is transparent over a long time. You may decide not to try. For a quiet drift, try honest talk, shared time and a counsellor. See a doctor for health checks where relevant. Lesson 16.8 helps you think it through.'] },
    { id: 'partnering', title: 'Being a good partner and keeping love alive', domains: ['d12'], modules: [16],
      keys: ['good partner', 'be a good wife', 'teamwork', 'keep the spark', 'spark', 'romance fading', 'keep love alive', 'long-term relationship', 'long term relationship', 'lose myself', 'losing myself', 'my identity in', 'stay myself'],
      answer: ['A good partner is trustworthy, works as part of a team, shares a vision, keeps her own identity and tends the spark. Each of these is a skill, and you can grow them one at a time.',
        'Keep your own friends, faith, work and voice, take small promises seriously, and keep a small ritual of closeness. Lesson 16.6 gives you a snapshot and a practice to begin with.'] }
  );

  D.REFLECT = D.REFLECT || {};
  D.REFLECT[16] = {
    idea: 'Love is not a prize for being good enough, and it is not a rescue. At its best it is a way two people become more truly themselves, and more generous to the world around them. Whatever comes next, you can carry that.',
    qs: ['If love is a way of becoming, who do I want to become by loving well?', 'What will I do this month that my future self will thank me for?']
  };
})();
