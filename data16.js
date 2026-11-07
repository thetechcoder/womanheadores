/* Module 14: Cross-Cultural and Interfaith Love. No culture or faith is treated as the default or as the problem. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[14] = {
    title: 'Cross-Cultural and Interfaith Love',
    intro: 'Many loving partnerships cross a line of culture, faith, language, country or class. This module helps her see her own background clearly, get curious about his, sort what is core from what can flex, handle families and communities, plan practical life across borders, and know when a difference is a bridge and when it is a wall.',
    safety: 'Respect runs in both directions. Nobody should be pressured to convert, hide who they are, cut off family or give up their own income, papers or friends in the name of tradition or love. Do not make yourself dependent on a partner for your right to live somewhere. If someone uses culture or religion to frighten, control or isolate you, that is not respect, and it is not your fault. Tell a person you trust, contact a local support service, and if you are in danger, contact your local emergency service now.'
  };

  [
    { id: '14.1', title: 'Culture is the water you swim in', mins: 40, line: 'See your own background clearly, and get curious about his.' },
    { id: '14.2', title: 'Faith across difference', mins: 45, line: 'Separate what is core from what can flex, with respect on both sides.' },
    { id: '14.3', title: 'Families, community and approval', mins: 45, line: 'Handle blessings, expectations and disapproval with warmth and a spine.' },
    { id: '14.4', title: 'Practical life across borders', mins: 45, line: 'Plan language, place, holidays, money and children, and see your bridge snapshot.' },
    { id: '14.5', title: 'Your bridge plan', mins: 35, line: 'Gather the conversations you need to have, and know your walls.' }
  ].forEach(function (l) { l.module = 14; D.LESSONS.push(l); });

  D.BRIDGE = {
    curious: { name: 'Staying curious about his world', body: 'Love across difference grows when each person asks real questions and listens without judging. Curiosity turns differences into discoveries instead of threats.', practice: 'Ask him one question this week about a tradition, food, saying or memory that matters to him, and just listen.' },
    core: { name: 'Knowing your own core', body: 'You cannot bridge to someone from a place you have not yet found. Knowing what is core to you and what can flex makes every conversation easier.', practice: 'Write your short list: three things that are core to you, and three that you could share or change.' },
    family: { name: 'Handling family and community', body: 'Families and communities carry hopes, fears and history. A calm, loving, firm approach protects the relationship and the relatives.', practice: 'Choose one relative to speak with honestly this month, and plan one warm sentence and one clear boundary.' },
    plan: { name: 'Planning practical life', body: 'Language, place, holidays, money and children are decided earlier than most couples expect. Talking about them early is a form of respect.', practice: 'Schedule one conversation on one practical topic, such as where you would live or how you would raise children.' }
  };

  D.CONTENT['14.1'] = {
    lead: 'Everyone has a culture, including people who think they do not. The first step in loving across difference is seeing your own background clearly, as one way of living among many.',
    story: { h: 'Story: Ines, 33, Lisbon', p: [
      'Ines fell for Kofi, a Ghanaian engineer who had moved to her city for work. Early on they argued about small things: he arrived at her family lunch with a gift and stayed for hours, which she found odd; she texted him bluntly, which he read as cold. Each thought the other was being difficult.',
      'A friend suggested they stop arguing about who was right and start telling each other where the habit came from. Kofi explained what arriving with a gift meant, and what it meant to leave early. Ines explained that blunt, fast messages were how her family showed ease. They laughed. Ines said, “I had never thought of my way as a culture. I thought it was just normal.”',
      'Ines is a composite character.'] },
    framework: { h: 'Framework: see, ask, translate', intro: 'A simple loop for any difference.', items: [
      ['See your own:', 'notice habits you assume are universal: time, directness, food, hospitality, privacy, gender roles, money, silence. They are learned.'],
      ['Ask about his:', 'ask “where does that come from?” and “what does it mean to you?” rather than “why do you do that?”.'],
      ['Translate, do not judge:', 'a difference is not a flaw. Say what you saw, what you felt, and what you guess it meant, then check.'],
      ['Individual first:', 'a culture is not a person. He may live his tradition loosely, strictly or in his own way. Ask him, and do not assume.'],
      ['Beware stereotypes:', 'about his people and about yours. A stereotype is a shortcut that stops you from meeting the actual man.'],
      ['Notice weights too:', 'every culture carries gifts and some weights. You can love yours and still decide what you will carry forward.']] },
    exercise: { h: 'Exercise: your cultural map', intro: 'About 40 minutes. Be honest, and generous to every culture, including your own.', blocks: [
      { t: 'ta', k: 'mine', label: 'Three habits or expectations from my background that I used to think were just normal', rows: 3, ph: 'Time, hospitality, directness, privacy, gender roles, family, money.' },
      { t: 'ta', k: 'gifts', label: 'What I love about my background, and what I want to carry forward', rows: 3, ph: 'Food, language, music, values, ways of caring.' },
      { t: 'ta', k: 'weights', label: 'Something from my background I might set down', rows: 2, ph: 'A pressure, a rule, a silence.' },
      { t: 'ta', k: 'curious', label: 'Three questions I could ask a partner about where he comes from', rows: 3, ph: 'Open questions, asked with real curiosity.' },
      { t: 'inp', k: 'stereo', label: 'A stereotype I hold, and how I could test it', ph: 'Be honest. We all have some.' }] },
    foryou: [{ when: 'gentle', text: 'If your background was criticised or made you feel different, begin with the “gifts” box. You can love where you come from without defending it to anyone.' }],
    embrace: [
      ['Asking where a habit comes from', 'Asking why he is difficult'],
      ['Seeing your own way as a culture', 'Treating your way as the default'],
      ['Meeting the individual', 'Reading him as a stereotype'],
      ['Gifts and weights, in every culture', 'Idealising or dismissing a culture']]
  };

  D.CONTENT['14.2'] = {
    lead: 'Faith can be a deep source of meaning, community and values. In a relationship it is not something to win, hide or trade. It is something to understand, respect and plan around.',
    story: { h: 'Story: Yara, 36, Beirut', p: [
      'Yara and Daniel had been together a year. She was from a practising Muslim family; Daniel came from a quiet Catholic background and no longer attended church. They loved each other, and both avoided the subject of faith because it seemed too big.',
      'One evening, Yara said, “I need to tell you what is core for me.” She explained her prayers, her fasting, and that she wanted to raise children with those values. Daniel listened, then shared that he valued community and moral seriousness but was not sure about belief. They did not solve everything. They agreed to keep talking, to meet each other’s communities, and to notice whether the other felt respected, not managed. Yara said, “The question was not whether we believed the same thing. It was whether either of us was being asked to become someone else.”',
      'Yara is a composite character.'] },
    framework: { h: 'Framework: core, flexible and shared', intro: 'A calm way to talk about faith.', items: [
      ['Core:', 'what you cannot give up without losing yourself, such as a practice, a community, an upbringing for children, or a particular commitment.'],
      ['Flexible:', 'what you hold with love but can adapt, such as holidays, food, ceremony details, or how often you attend.'],
      ['Shared ground:', 'values you hold in common, such as honesty, generosity, fidelity, service and how to treat people.'],
      ['No conversion by pressure:', 'respect means neither of you is pressured, bribed, shamed or threatened into belief, and neither hides who they are.'],
      ['Children and ceremonies:', 'talk about these before commitment, not after. Silence now becomes conflict later.'],
      ['Community and clergy:', 'some traditions have requirements about marriage. Learn what they are, and what each of you could and could not do. A trusted guide can help.']] },
    exercise: { h: 'Exercise: your core, flexible and shared', intro: 'About 45 minutes. This is for you. You may share it with a partner later.', blocks: [
      { t: 'ta', k: 'core', label: 'What is core for me in faith, belief or worldview', rows: 3, ph: 'Practices, community, how I would raise children, what I will not give up.' },
      { t: 'ta', k: 'flex', label: 'What I hold with love but could adapt', rows: 3, ph: 'Holidays, ceremony details, food, how often I attend.' },
      { t: 'ta', k: 'shared', label: 'The values I would need us to share, whatever our faith', rows: 3, ph: 'Honesty, fidelity, generosity, respect.' },
      { t: 'ta', k: 'ask', label: 'Questions I would ask a partner about his faith or worldview', rows: 3, ph: 'Open and curious.' },
      { t: 'inp', k: 'wall', label: 'What would be a wall for me, if it came to it', ph: 'For example: being asked to hide my faith, or to raise children without it.' }] },
    roots: {
      christian: 'Many Christian traditions hold marriage as a sacred bond and encourage couples to seek counsel from a pastor or elder. Many also speak of respect for conscience. Consider what your tradition asks of you, and what a trusted guide could help you hold together.',
      muslim: 'Many Muslim traditions place great weight on the faith of a spouse and of children, and have specific teachings about who may marry whom. Many also value consultation with family and a trusted scholar. Consider what your community teaches, what you personally hold, and who can advise you with both knowledge and care.',
      jewish: 'Many Jewish traditions place weight on continuity of community and on a shared home life, and there is a wide range of views between communities. Consider what your family and tradition hold, and a rabbi or elder who can talk it through honestly.',
      hindu: 'Many Hindu traditions value family, ritual and community in marriage, with a wide range of practice across regions and families. Consider which customs are core to you, which you could share, and elders who can speak openly with you.',
      buddhist: 'Many Buddhist traditions emphasise compassion, non-harm and mindful choice, and tend to be open to partners of other faiths. Consider how those values shape what you need in a partner and in a household.',
      secular: 'Consider which values and rituals matter to you without a religious frame, and how a partner’s faith could sit alongside them with mutual respect.'
    },
    foryou: [{ when: 'gentle', text: 'If faith has been a source of pain as well as comfort, go gently. You are allowed to define your own relationship with it, and to take time.' }],
    embrace: [
      ['Naming your core early', 'Hoping it will not come up'],
      ['Respect without pressure', 'Conversion by guilt or bribe'],
      ['Meeting each other’s communities', 'Keeping a partner hidden'],
      ['Talking about children early', 'Postponing the hardest question']]
  };

  D.CONTENT['14.3'] = {
    lead: 'In many cultures, you do not marry only a person; you meet a family, a community and a history. Handle that with warmth, patience and a spine of your own.',
    story: { h: 'Story: Bukola, 38, Lagos', p: [
      'Bukola’s mother approved of Emeka’s job but worried because he was from a different ethnic group and his family lived far away. His mother, meanwhile, asked pointed questions about whether Bukola would “keep house”. Both women meant well. Both made Bukola and Emeka anxious.',
      'They agreed on a plan. Each would speak to their own parent first, not the other’s. They would say something warm and one thing firm: “We are choosing each other with care, and we would love your blessing.” They visited each family together, brought food, and listened more than they spoke. It took a year. Bukola said, “I stopped trying to win them over and started trying to be known. Some doors opened because of that. One stayed half closed, and we made our peace with it.”',
      'Bukola is a composite character.'] },
    framework: { h: 'Framework: warm, clear, patient', intro: 'Families deserve respect, and you still choose.', items: [
      ['Understand the fear:', 'family objections usually come from worry about safety, belonging, status, faith or grandchildren. Ask what the worry is.'],
      ['Each speaks to their own:', 'let him talk to his family first, and you to yours. It lands better from their own child.'],
      ['One warm, one firm:', '“We love you and want your blessing” and “we are choosing each other carefully”. Say both.'],
      ['Customs and ceremonies:', 'learn what is expected, such as introductions, gifts, bride price, ceremonies or elders’ blessings. Ask what each one means, and what is negotiable.'],
      ['Money and obligation:', 'customs sometimes involve money or duties. Talk openly, keep your own income and papers in your own hands, and never feel pressured into debt.'],
      ['Time and presence:', 'show up, listen, bring food, be kind, and be patient. Respect can change minds more than argument.'],
      ['When it is not safe:', 'if a family threatens, controls or isolates you, or you fear for your safety, tell someone you trust and contact a support service. Honour does not require harm.']] },
    exercise: { h: 'Exercise: families and blessings', intro: 'About 45 minutes. Think through your own family first.', blocks: [
      { t: 'ta', k: 'hopes', label: 'What my family hopes for me in a partner, and where that comes from', rows: 3, ph: 'Safety, status, faith, community, grandchildren.' },
      { t: 'ta', k: 'worry', label: 'What they might worry about with a partner from a different background', rows: 3, ph: 'Be fair to them.' },
      { t: 'ta', k: 'warm', label: 'My warm sentence, and my firm sentence', rows: 3, ph: 'For example: I love you, and I am choosing with care.' },
      { t: 'ta', k: 'custom', label: 'Customs I would want to learn about, and questions I would ask', rows: 3, ph: 'Introductions, gifts, ceremonies, elders, money.' },
      { t: 'inp', k: 'ally', label: 'One relative or elder who might be an ally', ph: 'An aunt, a cousin, a pastor, an imam, a family friend.' },
      { t: 'inp', k: 'safe', label: 'Who I would tell if I felt pressured or unsafe', ph: 'A friend, a counsellor, a support service.' }] },
    foryou: [{ when: 'gentle', text: 'If your family’s approval matters a great deal, that does not make you weak. It means you are connected. You can honour them and still choose carefully.' }],
    embrace: [
      ['Understanding the fear behind the objection', 'Fighting the objection'],
      ['Each speaking to their own family', 'Putting him in the line of fire'],
      ['Keeping your own money and papers', 'Becoming dependent for your right to stay'],
      ['Patience and presence', 'An ultimatum on day one']]
  };

  D.CONTENT['14.4'] = {
    lead: 'Love across difference is decided in ordinary details: which language you speak at home, where you live, how you spend holidays, what you do about money and children. Talk about them early, as a form of respect.',
    story: { h: 'Story: Mitsuko, 41, Osaka', p: [
      'Mitsuko and Rafael, a Brazilian engineer, met when he moved to Osaka for two years. They fell in love quickly and spoke a mix of English and broken Japanese. Only after a year did they realise they had not talked about what would happen when his contract ended.',
      'They made a list: where to live, which language the children would speak, how often to visit each family, how to handle money across two currencies, and what each was willing to give up. They disagreed on some. They agreed that Mitsuko would keep her own savings and career, that they would try two years in Brazil with a firm review date, and that both of them would learn the other’s language. Mitsuko said, “We were not afraid of the differences. We were afraid of drifting into a decision. Writing it down made it a choice.”',
      'Mitsuko is a composite character.'] },
    framework: { h: 'Framework: five practical conversations', intro: 'Have these before you commit, and again as life changes.', items: [
      ['Language:', 'which language at home, with children, and with each family? Who will learn whose? Be patient with misunderstandings, since many are language, not meaning.'],
      ['Place:', 'where would you live, for how long, and what would each of you give up? Keep your own income, papers, friends and a way home.'],
      ['Holidays and traditions:', 'which will you keep, blend or add? Whose house, which food, which days?'],
      ['Money:', 'how will you share it, send it to family, and handle currencies or customs of support? Keep your own account and your own records.'],
      ['Children:', 'name, language, faith, schooling and how you will raise them. This is among the most important conversations.']] },
    exercise: { h: 'Exercise: your bridge snapshot and the five conversations', intro: 'About 45 minutes. This is a snapshot of right now.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'curious', text: 'I ask real questions about other people’s backgrounds and listen without judging.' },
        { axis: 'core', text: 'I know what is core to me and what could flex.' },
        { axis: 'family', text: 'I can talk with families and elders calmly, warmly and firmly.' },
        { axis: 'plan', text: 'I raise practical topics such as place, language and children early.' }] },
      { t: 'result', fn: 'bridge' },
      { t: 'ta', k: 'lang', label: 'My thoughts on language', rows: 2, ph: 'At home, with children, with families.' },
      { t: 'ta', k: 'place', label: 'My thoughts on place, and what I would keep for myself', rows: 3, ph: 'Where, how long, my income, my papers, my friends, my way home.' },
      { t: 'ta', k: 'money', label: 'My thoughts on money and support for family', rows: 2, ph: 'Shared, separate, sent home.' },
      { t: 'ta', k: 'kids', label: 'My thoughts on children', rows: 3, ph: 'Name, language, faith, schooling.' }] },
    foryou: [{ when: 'gentle', text: 'If these questions feel enormous, pick one. Even a single honest conversation changes how the rest feels.' }],
    embrace: [
      ['Raising practical topics early', 'Drifting into decisions'],
      ['Your own income, papers and friends', 'Total dependence on a partner'],
      ['Learning each other’s language', 'Expecting translation to flow one way'],
      ['Reviewing plans at set dates', 'Deciding once and never again']]
  };

  D.CONTENT['14.5'] = {
    lead: 'A difference can be a bridge you build together or a wall you keep hitting. Knowing which is which, and agreeing it with yourself first, saves a great deal of pain.',
    story: { h: 'Story: Sanaa, 34, Casablanca', p: [
      'Sanaa loved Étienne, who was kind, funny and French. They spent two years working through language, family and faith. They built a bridge on many points: holidays, food, a shared set of values. On one point they could not: Sanaa could not imagine raising children without her faith, and Étienne could not imagine raising them with it.',
      'They tried for months to find a middle path. Eventually both said, quietly, that it was a wall, not a bridge. They grieved together and parted with respect. Sanaa said, “It was not a failure. We told each other the truth early enough that no one was ruined. Later, I knew what I was looking for, and I could say it out loud.”',
      'Sanaa is a composite character.'] },
    framework: { h: 'Framework: bridge, wall and next step', intro: 'A calm way to read where you are.', items: [
      ['Bridge:', 'a difference both of you are curious about, can talk about, and can build something with, even if it takes effort.'],
      ['Wall:', 'a difference where one of you must give up something core, hide, or be pressured. If it stays a wall after honest effort, it is information, not failure.'],
      ['Test with time:', 'revisit the hard topics after a few months. Are you both moving closer, or is one of you silently giving in?'],
      ['Ask for help:', 'a counsellor, mentor, faith guide or couples of mixed background can help. Choose people who respect both of you.'],
      ['Honour the end:', 'if you decide a wall is a wall, end kindly, mourn, and keep what you learned.'],
      ['Keep your safety:', 'if you ever feel controlled, frightened or isolated, that is not a cultural difference. Tell someone you trust and get support.']] },
    exercise: { h: 'Exercise: your bridge plan', intro: 'About 35 minutes. Gather what you wrote in this module.', blocks: [
      { t: 'summary14' },
      { t: 'ta', k: 'bridges', label: 'Differences I think could be bridges, and why', rows: 3, ph: 'Things I am curious about and willing to work on.' },
      { t: 'ta', k: 'walls', label: 'Differences that might be walls for me, in my own words', rows: 3, ph: 'Core things I could not give up.' },
      { t: 'inp', k: 'convo', label: 'The next conversation I want to have, and with whom', ph: 'With a partner, a relative, a mentor.' },
      { t: 'inp', k: 'guide', label: 'A person who could advise me with respect for both sides', ph: 'A friend, an elder, a counsellor, a faith guide.' },
      { t: 'p', text: 'If something in this module brought up pressure or fear, please tell someone you trust or a local support service. You deserve support.' }] },
    foryou: [{ when: 'gentle', text: 'You do not need all the answers to begin. Knowing your core and being curious about his is enough for the next good conversation.' }],
    embrace: [
      ['Naming a wall honestly', 'Pretending a wall is a bridge'],
      ['Revisiting hard topics over time', 'One conversation and done'],
      ['Advisers who respect both sides', 'Advisers who want a winner'],
      ['Ending with respect when it is a wall', 'Staying silently unhappy']]
  };

  D.SCENARIOS.push(
    { id: 's14-1', module: 14, title: 'The Sunday lunch',
      setup: 'Your boyfriend’s family has invited you to a Sunday lunch. Their customs are different from yours: you are not sure what to bring, how to greet his grandmother, or whether to ask about faith. You feel anxious about getting it wrong.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Ask him beforehand, “What would make your family feel welcomed? What should I know?” Then go, warm and curious.',
          protects: 'It shows respect and calms your nerves.', cost: 'You might still make a small mistake.',
          try: 'A small mistake made warmly is easily forgiven.' },
        { id: 'b', tag: 'accommodate', text: 'Copy whatever the others do and say as little as possible.',
          protects: 'It avoids errors.', cost: 'They never meet you.',
          try: 'Let one real question show your interest.' },
        { id: 'c', tag: 'react', text: 'Insist he explains every custom in advance and get irritated at the pressure.',
          protects: 'It reduces uncertainty.', cost: 'It puts a heavy burden on him.',
          try: 'Ask for two or three key things, and trust the rest.' },
        { id: 'd', tag: 'withdraw', text: 'Find a reason not to go this time.',
          protects: 'It spares you the worry.', cost: 'It delays the relationship and may look like disinterest.',
          try: 'Go for a shorter time, and say you are nervous.' },
        { id: 'e', tag: 'ruminate', text: 'Spend days rehearsing every possible mistake.',
          protects: 'It feels responsible.', cost: 'It drains your energy.',
          try: 'Write down three things you will do, and leave the rest.' }
      ] },
    { id: 's14-2', module: 14, title: 'When he asks you to convert',
      setup: 'Hamza says he loves you and wants to marry you, but his family expects you to convert first. You are not sure how you feel about your own faith, and he says, “It is only a formality.”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I want to understand what this means to you and your family. I am not willing to decide under pressure, and I would like to talk to someone I trust.”',
          protects: 'It protects your freedom of conscience.', cost: 'It may slow things down.',
          try: 'Notice if he respects your pace, or pushes.' },
        { id: 'b', tag: 'accommodate', text: 'Agree to convert quickly to keep the peace.',
          protects: 'It pleases his family.', cost: 'It may cost you something core, and resentment tends to follow.',
          try: 'A decision about belief should be yours alone.' },
        { id: 'c', tag: 'react', text: 'Say it is an outrage and end the relationship that night.',
          protects: 'It defends your boundary.', cost: 'It closes a conversation that might have mattered.',
          try: 'Ask what he really means before you decide.' },
        { id: 'd', tag: 'withdraw', text: 'Avoid the subject and hope it fades.',
          protects: 'It avoids conflict.', cost: 'The issue will return at a worse time.',
          try: 'Name the topic soon, kindly.' },
        { id: 'e', tag: 'ruminate', text: 'Lose sleep wondering whether you are selfish for hesitating.',
          protects: 'It feels humble.', cost: 'It treats your conscience as a fault.',
          try: 'Your hesitation is information. Take time and counsel.' }
      ] },
    { id: 's14-3', module: 14, title: 'Her mother’s silence',
      setup: 'You have told your mother about Daniel, who is from another country and another faith. She says nothing for a week, then says only that your aunt is worried. You feel torn between loving her and loving him.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Ask her gently what she fears, and say, “I love you, and I am choosing carefully. I would like your blessing, and I will not hide him.”',
          protects: 'It honours her and your choice.', cost: 'It may be an uncomfortable conversation.',
          try: 'Listen first. The fear is usually about safety or belonging.' },
        { id: 'b', tag: 'accommodate', text: 'Stop mentioning Daniel and see him secretly.',
          protects: 'It avoids a fight.', cost: 'It builds secrecy and strain.',
          try: 'Secrecy is rarely a long-term plan.' },
        { id: 'c', tag: 'react', text: 'Argue that she is old-fashioned and narrow-minded.',
          protects: 'It vents anger.', cost: 'It hardens her position.',
          try: 'Keep the door open with warmth.' },
        { id: 'd', tag: 'withdraw', text: 'Go quiet with the family and see less of them.',
          protects: 'It reduces tension.', cost: 'It hurts both sides.',
          try: 'Keep visiting and keep it warm.' },
        { id: 'e', tag: 'ruminate', text: 'Imagine the worst outcomes for weeks.',
          protects: 'It prepares you.', cost: 'It drains hope.',
          try: 'Ask one trusted person, such as an aunt or elder, for help.' }
      ] },
    { id: 's14-4', module: 14, title: 'Whose country, whose job',
      setup: 'After two years together, Tomas, who lives in another country, asks you to move there to be with him. You would give up your job, and the visa would depend on his sponsorship. He says, “You can find work there later.”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I want to be with you. Let us write down what I would do about work, papers and a way back, and review it in a year.”',
          protects: 'It protects your independence while showing commitment.', cost: 'He may find it unromantic.',
          try: 'Ask whether he can move, or share the sacrifice, and note how he responds.' },
        { id: 'b', tag: 'accommodate', text: 'Say yes immediately because you do not want to lose him.',
          protects: 'It removes uncertainty for him.', cost: 'It leaves you without income, status or a way home.',
          try: 'Love can wait for a plan.' },
        { id: 'c', tag: 'react', text: 'Say it is unfair that he asks and end the call.',
          protects: 'It signals how you feel.', cost: 'It closes the conversation.',
          try: 'Name the concern calmly, and propose alternatives.' },
        { id: 'd', tag: 'withdraw', text: 'Say you will think about it, and then stop responding.',
          protects: 'It avoids a hard talk.', cost: 'It leaves him confused and you stuck.',
          try: 'Give him a date for your answer.' },
        { id: 'e', tag: 'ruminate', text: 'Draw up endless pros and cons without talking to him.',
          protects: 'It feels rational.', cost: 'The real answer is in the conversation.',
          try: 'Talk to him and to someone who knows you well.' }
      ] }
  );

  D.ASK.push(
    { id: 'interfaithkids', title: 'Children, conversion and ceremonies', domains: ['d12'], modules: [14],
      keys: ['convert', 'conversion', 'raise our children', 'raise the children', 'bring up the children', 'children and religion', 'which religion for', 'religious wedding', 'two ceremonies', 'wedding ceremony', 'mixed marriage', 'mixed heritage'],
      answer: ['Conversion and the faith of children are two of the most important conversations to have early. Respect means neither of you is pressured, shamed or bribed into belief, and neither has to hide who they are.',
        'Write down what is core for you, what can flex, and what the traditions you belong to require. A trusted guide who respects both of you can help. Lessons 14.2 and 14.4 help you prepare.'] },
    { id: 'distance', title: 'Moving countries and long distance', domains: ['d12'], modules: [14],
      keys: ['long distance', 'long-distance', 'move countries', 'move for him', 'different countries', 'visa', 'sponsor', 'time zone', 'move overseas', 'leave my country'],
      answer: ['Moving for love can be wonderful and also leaves you exposed if your income, papers or friends depend on one person. Keep your own savings, documents and a way home, agree a review date, and ask whether the sacrifice is being shared.',
        'Talk through place, language, work and money before you decide, and write it down. Lesson 14.4 walks through the five conversations.'] },
    { id: 'inlaws', title: 'His family, customs and blessings', domains: ['d12'], modules: [14],
      keys: ['in-laws', 'in laws', 'mother-in-law', 'his mother', 'his mum', 'his parents', 'meet his', 'bride price', 'bridewealth', 'dowry', 'lobola', 'blessing', 'elders', 'introduction ceremony', 'approval'],
      answer: ['Start by understanding the fear behind an objection, which is usually safety, belonging, faith or grandchildren. Let each of you speak to your own family first, and say one warm thing and one firm thing.',
        'Ask what each custom means and what is negotiable, keep your own money and papers in your own hands, and be patient. Honour never requires harm. Lesson 14.3 helps you plan.'] },
    { id: 'langbarrier', title: 'Language and misunderstandings', domains: ['d12'], modules: [14],
      keys: ['language barrier', 'different language', 'speak different', 'mother tongue', 'accent', 'translate', 'lost in translation', 'misunderstand each other', 'misunderstood each', 'holidays', 'traditions clash'],
      answer: ['Many misunderstandings across languages are about style and meaning, not about care. Say what you heard, what you felt and what you guess he meant, then check. Slow down, and write down important things.',
        'Decide early which languages you will use at home, with children and with each family, and who will learn whose. Lesson 14.4 helps you plan it.'] }
  );

  D.REFLECT = D.REFLECT || {};
  D.REFLECT[14] = {
    idea: 'Love across difference asks for two things at once: a firm sense of who you are, and a real curiosity about who he is. When both are present, differences become the place where you find common ground.',
    qs: ['What is it about my own background that I would most want a partner to understand?', 'What would I want to be curious about, rather than afraid of, in someone from a different world?']
  };
})();
