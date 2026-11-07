/* Module 3: Identity, Values and Faith. Same shape as Module 2; app.js renders it generically. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[3] = {
    title: 'Identity, Values and Faith',
    intro: 'A partner can only love the woman he can see. This module helps you name what you value, who you are without the masks, what faith or meaning holds you up, and the life you want to build, so you can choose a partner by what matters and not by chemistry alone.',
    safety: 'Your beliefs are yours. Nothing here ranks one faith, culture or way of life above another, and every faith exercise is optional. If a question touches something painful, skip it and come back later.'
  };

  [
    { id: '3.1', title: 'Your core values', mins: 45, line: 'Choose the few values you will not trade, and check them against your real life.' },
    { id: '3.2', title: 'Who you are without the masks', mins: 45, line: 'Separate who you are from who you perform.' },
    { id: '3.3', title: 'Faith, meaning and partnership', mins: 50, line: 'Name what carries you and what you need to share with a partner.' },
    { id: '3.4', title: 'The life you want to build', mins: 45, line: 'Describe the life, and the kind of partnership, you are building toward.' },
    { id: '3.5', title: 'Your personal charter', mins: 40, line: 'Bring it together in one page you can stand on.' }
  ].forEach(function (l) { l.module = 3; D.LESSONS.push(l); });

  var VALUES = ['Honesty', 'Faithfulness', 'Kindness', 'Family', 'Faith', 'Ambition', 'Freedom', 'Adventure', 'Stability', 'Generosity', 'Humour', 'Learning', 'Health', 'Creativity', 'Service', 'Respect', 'Peace', 'Growth'];

  D.CONTENT['3.1'] = {
    lead: 'Values are what you will pay a price to keep. Preferences are what you enjoy. Choosing a partner well starts with knowing the difference.',
    story: { h: 'Story: Camila, 30, São Paulo', p: [
      'Camila’s list for a partner was long: tall, funny, stylish, good job. She dated three men who met most of it and felt flat with all of them. Then she met Rafael, who was none of the first four, and who told her the truth even when it cost him. She noticed how settled she felt around him, and she could not say why.',
      'A friend asked her to name the three things she would never trade. She wrote honesty, family and growth. She read it twice and understood that her old list had been a list of preferences, and that the first man to match her values had been invisible to it. She did not marry Rafael. She did start choosing by her values, and her dating life got quieter and better.',
      'Camila is a composite character.'] },
    framework: { h: 'Framework: values, preferences, rules', intro: 'Sort what you want into three layers. Only the first deserves your hardest decisions.', items: [
      ['Values:', 'what you will not trade, such as honesty, faithfulness or faith. They show up in what you do under pressure, not in what you say.'],
      ['Preferences:', 'what you enjoy, such as height, hobbies or style. They are pleasant and negotiable.'],
      ['Rules:', 'inherited “shoulds,” such as “he must earn more than me” or “he must be from my community.” Question each one. Some are values in disguise, and some are fear.']] },
    exercise: { h: 'Exercise: your top values, tested against your calendar', intro: 'About 45 minutes. Values are only real if your life shows them.', blocks: [
      { t: 'p', text: 'Choose up to five values that matter most to you.' },
      { t: 'chips', k: 'values', max: 5, options: VALUES },
      { t: 'ta', k: 'top3', label: 'My top three, and what each means to me in practice', rows: 3, ph: 'For example: Honesty means I tell hard truths kindly.' },
      { t: 'ta', k: 'proof', label: 'Where my last month shows these values', rows: 3, ph: 'One real thing you did, spent or said that proves each one.' },
      { t: 'ta', k: 'gap', label: 'Where my life and my values do not match yet', rows: 2, ph: 'Be kind and honest. This is where growth lives.' },
      { t: 'ta', k: 'rules', label: 'A “should” I inherited and want to question', rows: 2, ph: 'For example: “He must be older than me.” Is it a value, a preference or a fear?' }] },
    foryou: [{ when: 'gentle', text: 'If your values were punished at home or in a past relationship, write them anyway. They are yours, and naming them is part of getting steady.' }],
    embrace: [
      ['Values you can point to in your own behaviour', 'A list that only sounds impressive'],
      ['Treating preferences as pleasant extras', 'Rejecting good men over small preferences'],
      ['Questioning every inherited “should”', 'Obeying rules you have never examined'],
      ['Choosing by character first', 'Choosing by chemistry and hoping character follows']]
  };

  D.CONTENT['3.2'] = {
    lead: 'A partner can only love the woman he can see. Masks protect you in the short run and keep real love out in the long run.',
    story: { h: 'Story: Mei, 35, Singapore', p: [
      'Mei was brilliant at being what each room wanted: the efficient manager, the agreeable daughter, the easy girlfriend. After a year with Daniel, he said gently, “I love you, and I don’t think I’ve met you.” She spent a week angry, and then a week crying, and then she wrote a list titled “things I pretend.”',
      'The list began with trivial things, like pretending to enjoy loud bars. It ended with the big one: pretending she did not need anyone. She started telling small truths first, with her sister, then with a colleague, then with Daniel. Some people liked the real Mei less. Daniel liked her more, and so did she.',
      'Mei is a composite character.'] },
    framework: { h: 'Framework: three circles', intro: 'Draw three circles in your mind.', items: [
      ['Who I am:', 'your real values, tastes, needs and quirks, including the ones you are still learning.'],
      ['Who I perform:', 'the version you show to be liked, safe or successful. It is useful in some rooms and exhausting in all of them.'],
      ['Who I fear being:', 'the parts you hide: too needy, too ambitious, too quiet, too much. These are usually the parts that most need kind attention.'],
      ['The goal:', 'to move the performing circle closer to the real one, one safe truth at a time. Authenticity does not mean telling everyone everything. It means not lying about who you are.']] },
    exercise: { h: 'Exercise: take off one mask', intro: 'About 45 minutes. Start with something small and safe.', blocks: [
      { t: 'p', text: 'Which masks do you wear most? Choose up to three.' },
      { t: 'chips', k: 'masks', max: 3, options: ['The easy one', 'The strong one', 'The successful one', 'The funny one', 'The perfect one', 'The independent one', 'The good girl', 'The mysterious one'] },
      { t: 'ta', k: 'pretend', label: 'Three things I pretend', rows: 3, ph: 'Small or big. For example: that I love hiking, that I am fine, that I do not want marriage.' },
      { t: 'ta', k: 'feared', label: 'A part of me I am afraid to show', rows: 2, ph: 'And what I fear would happen.' },
      { t: 'ta', k: 'safe', label: 'One safe person and one small truth I will tell them', rows: 2, ph: 'Choose someone who has earned it.' },
      { t: 'inp', k: 'iam', label: 'Finish the sentence: I am a woman who...', ph: 'For example: tells the truth kindly and keeps her word.' }] },
    foryou: [{ when: 'gentle', text: 'Showing your real self is only wise with people who are safe. You are allowed to choose who sees what, and to take your time.' }],
    embrace: [
      ['Small truths, told early', 'One dramatic confession after a year'],
      ['Telling the difference between privacy and pretending', 'Hiding the things that matter most'],
      ['Letting the right people meet the real you', 'Editing yourself into whoever is in the room'],
      ['Kindness toward the parts you hide', 'Shame, and the habit of performing around it']]
  };

  D.CONTENT['3.3'] = {
    lead: 'Faith, or whatever gives your life meaning, shapes how you handle suffering, money, children and each ordinary Sunday. Name it, and decide what you need a partner to share.',
    story: { h: 'Story: Amina, 29, Nairobi', p: [
      'Amina prayed daily and attended her mosque. She fell for Joseph, who was kind, funny and not religious. For months she told herself that love was enough. Then they talked about weddings and children, and she realised she did not know what he would do on a Friday, or when she needed to pray, or how he would feel about raising children in her faith.',
      'They had one honest conversation, then another. Joseph said he respected her faith and did not share it, and he was open to learning. Amina decided she needed a partner who shared the foundation. They parted kindly. Her next relationship began with the conversation she had learned to start on day one. She said later, “I stopped asking whether I could tolerate the difference and started asking whether I could build a life on it.”',
      'Amina is a composite character.'] },
    framework: { h: 'Framework: five questions about faith and meaning', intro: 'Whatever your tradition, or none, ask these about yourself first, then about a partner.', items: [
      ['Belief:', 'what do I believe, and how firmly? What am I still questioning?'],
      ['Practice:', 'what do I do weekly or daily, and what would I miss if I could not?'],
      ['Community:', 'who and what supports me, and what will I want my family to belong to?'],
      ['Decisions:', 'how do faith or my deepest values guide money, conflict, sex, children and rest?'],
      ['Difference:', 'what must a partner share, what can differ if he respects it, and what is a true non-negotiable?']] },
    exercise: { h: 'Exercise: your faith and meaning map', intro: 'About 50 minutes. Everything here is optional, and none of it assumes a particular faith. If you are secular, write about what gives your life meaning and structure.', blocks: [
      { t: 'ta', k: 'belief', label: 'What gives my life meaning and steadiness', rows: 3, ph: 'A faith, a philosophy, a community, a calling. Write it in your own words.' },
      { t: 'ta', k: 'practice', label: 'What I practise, and what I would miss', rows: 2, ph: 'For example: Sunday service, daily prayer, a morning walk, reading.' },
      { t: 'p', text: 'In a partner, I need his faith or worldview to be...' },
      { t: 'chips', k: 'stance', max: 1, options: ['The same as mine', 'Compatible and respectful', 'Open to learning mine', 'Not important to me'] },
      { t: 'ta', k: 'must', label: 'What he must share, and what can differ', rows: 3, ph: 'For example: Must share: how we raise children. Can differ: how often we attend services.' },
      { t: 'ta', k: 'questions', label: 'Three questions I will ask early, kindly', rows: 3, ph: 'For example: What matters most to you in life? How do you handle hard times? What would our home look like on a weekend?' }] },
    foryou: [
      { when: 'gentle', text: 'If faith or community has hurt you, you can write about what you want to keep and what you want to leave behind. You do not owe anyone a tidy answer.' }],
    roots: {
      christian: 'Many Christian traditions describe marriage as a covenant, and ask a person to weigh shared faith carefully. Others stress grace and the freedom to love across difference. Consider talking with a pastor or trusted mentor who knows you.',
      muslim: 'Many Muslim traditions place weight on shared faith and family involvement in marriage, and on character and kindness above all. Perspectives differ widely across communities. Consider talking with a trusted imam, mentor or elder.',
      jewish: 'Many Jewish traditions emphasise shared community, home life and continuity, and communities differ in how they approach difference. Consider talking with a rabbi or mentor you trust.',
      hindu: 'Many Hindu traditions treat marriage as a union of families and of duty and devotion, and views on community, caste and tradition vary widely. Consider talking with a teacher or an elder you trust, and ask yourself what you truly value.',
      buddhist: 'Many Buddhist traditions emphasise compassion, honesty and mindful speech in relationships, and do not require a partner to share your tradition. Consider talking with a teacher or friends in your community.',
      secular: 'You might name the values that stand in for faith for you, such as honesty, service or curiosity, and look for a partner who lives them. A mentor who shares your approach can be a good sounding board.'
    },
    embrace: [
      ['Naming what carries you before you meet him', 'Hoping love will settle the question later'],
      ['Telling the difference between “must share” and “can differ”', 'Making every difference a dealbreaker, or none'],
      ['Respect for his path and honesty about yours', 'Pretending to share a faith, or converting to please'],
      ['Early, kind conversations about meaning', 'Waiting until the wedding to discuss children and faith']]
  };

  D.CONTENT['3.4'] = {
    lead: 'A good relationship is two lives that fit around a shared direction. Describe yours, and you will know whom to say yes to.',
    story: { h: 'Story: Sofia, 41, Athens', p: [
      'Sofia had never thought about “a vision.” She had a job, a flat and a mother who asked weekly about marriage. When a colleague asked what she wanted her next ten years to look like, she had no answer. She spent a weekend writing one: a smaller home near the sea, work she respected, regular travel, and, to her surprise, a partner who would rather cook at home than go out.',
      'She began dating with that picture in mind. Within a month she could tell in a single conversation who fit and who did not, and she stopped spending her energy on charming men who wanted a different life. She said, “The picture did not make me pickier. It made me clearer.”',
      'Sofia is a composite character.'] },
    framework: { h: 'Framework: the five-year picture and the partnership picture', intro: 'Describe the life first, then the partnership. Be specific enough that a stranger could picture it.', items: [
      ['Life picture:', 'where you live, how you work, what a normal week looks like, who is in your circle, how you rest.'],
      ['Partnership picture:', 'how you share money, home, decisions and time. What each of you brings, and how conflict is handled.'],
      ['Children and family:', 'whether you want children, and how much of your life is held by your family, your community or your work.'],
      ['Flexible and fixed:', 'which parts you will adjust for the right person, and which you will not.']] },
    exercise: { h: 'Exercise: draw your picture', intro: 'About 45 minutes. Write in the present tense, as if it were a Tuesday five years from now.', blocks: [
      { t: 'ta', k: 'tuesday', label: 'A Tuesday in my life five years from now', rows: 4, ph: 'Where I wake up, what I do, who I see, how the evening feels.' },
      { t: 'ta', k: 'partnership', label: 'What our partnership looks like', rows: 3, ph: 'How we share money, chores and decisions. How we make up after a disagreement.' },
      { t: 'p', text: 'Children, for me, are...' },
      { t: 'chips', k: 'kids', max: 1, options: ['Something I want', 'Something I am open to', 'Something I do not want', 'Something I am unsure about'] },
      { t: 'ta', k: 'fixed', label: 'What I will not adjust, and what I will', rows: 3, ph: 'Not adjusting: ... Happy to adjust: ...' },
      { t: 'inp', k: 'headline', label: 'My vision in one line', ph: 'For example: A warm home, meaningful work and a partner who laughs with me.' }] },
    foryou: [{ when: 'gentle', text: 'If you have been through a loss, keep your picture small and kind. It can change.' }],
    embrace: [
      ['A picture specific enough to test', 'A vague wish for “happiness”'],
      ['Room for what you cannot yet imagine', 'A rigid script no real person could fit'],
      ['Telling the difference between fixed and flexible', 'Adjusting everything to fit him'],
      ['Honest early talk about children and family', 'Assuming he feels the same']]
  };

  D.CONTENT['3.5'] = {
    lead: 'A charter is one page that says what you value, what you need and where you are going. It gives you something to stand on when charm, loneliness or pressure show up.',
    story: { h: 'Story: Ngozi, 47, Houston', p: [
      'Ngozi had been divorced for six years. She had dated, and she had also noticed that she negotiated her way out of her own standards whenever someone was attentive. Her sister suggested a single page she could read before any date. Ngozi wrote her values, the three things she needed, the three things she would not accept, and a sentence about the life she was building.',
      'The first time she read it, she cried. It was the first document in years that was entirely about what she wanted. She kept it on her phone. Before one date she read it and noticed she wanted to cancel; afterwards she realised the man was lovely and the nerves were about her fear, not about him. Another time she read it and left a first date early without guilt. She said, “It does not make decisions for me. It stops me from forgetting who I am.”',
      'Ngozi is a composite character.'] },
    framework: { h: 'Framework: the one-page charter', intro: 'Five short parts, written in your own voice. Revisit it every few months.', items: [
      ['I value:', 'your top values, from Lesson 3.1.'],
      ['I am:', 'your “I am a woman who” sentence, from Lesson 3.2.'],
      ['I need:', 'what a partner must share, from Lessons 3.3 and 3.4 and your non-negotiables from Lesson 1.3.'],
      ['I will not accept:', 'the behaviours that end a relationship, such as disrespect, deceit or control.'],
      ['I am building:', 'your one-line vision, from Lesson 3.4.']] },
    exercise: { h: 'Exercise: write your charter', intro: 'About 40 minutes. Fill in each line, then read it aloud.', blocks: [
      { t: 'ta', k: 'need', label: 'I need a partner who...', rows: 3, ph: 'Three things, in plain words.' },
      { t: 'ta', k: 'wont', label: 'I will not accept...', rows: 3, ph: 'Behaviours that would end it for me.' },
      { t: 'ta', k: 'before', label: 'What I will read before any date', rows: 2, ph: 'A line from this charter that steadies me.' },
      { t: 'summary3' }] },
    foryou: [{ when: 'gentle', text: 'The “I will not accept” line is a safety line. If you have been controlled or hurt, make it clear and make it yours, and share it with a trusted person.' }],
    embrace: [
      ['A charter you wrote in your own voice', 'A list copied from a book or a friend'],
      ['Reading it before a date', 'Writing it once and forgetting it'],
      ['Updating it as you learn', 'Treating it as a rulebook that cannot change'],
      ['Letting it steady you', 'Using it as a weapon against a man you have only just met']]
  };

  D.SCENARIOS.push(
    { id: 's3-1', module: 3, title: 'The faith question on date two',
      setup: 'On your second date, Elijah mentions that he does not practise any religion. Your faith is a large part of your life. He seems curious and kind, and he asks, “Does that bother you?”',
      options: [
        { id: 'a', tag: 'accommodate', text: 'Say, “No, not at all!” and change the subject.',
          protects: 'It keeps the evening easy.', cost: 'It hides something central, and you may be carrying it alone by month three.',
          try: 'You can be warm and honest in the same sentence.' },
        { id: 'b', tag: 'assertive', text: 'Say, “It’s important to me, and I’d like to understand what that means for us. Can I tell you how I live it, and hear how you think about meaning?”',
          protects: 'It protects honesty and invites a real conversation.', cost: 'It may end things sooner, which is a kindness.',
          try: 'Listen for respect and curiosity, not agreement.' },
        { id: 'c', tag: 'react', text: 'Say, “Then this probably won’t work,” and ask for the bill.',
          protects: 'It saves time.', cost: 'You decide before you know whether he is open, and the end is abrupt.',
          try: 'Ask one question first: “What would respect for my faith look like for you?”' },
        { id: 'd', tag: 'withdraw', text: 'Smile, say little, and quietly lose interest.',
          protects: 'It avoids a hard conversation.', cost: 'He never learns why, and you learn nothing about him.',
          try: 'Decide what you need, then tell him plainly.' },
        { id: 'e', tag: 'ruminate', text: 'Say, “Interesting,” then spend the week imagining your whole future together or apart.',
          protects: 'It gives you time to think.', cost: 'You build a story from one sentence.',
          try: 'Ask him the questions you actually have, one at a time.' }
      ] },
    { id: 's3-2', module: 3, title: 'The hobby you do not love',
      setup: 'Tendai loves hiking and talks about it with shining eyes. You dislike it. When he invites you on a long hike this weekend, you hear yourself say, “I love hiking!”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Laugh and say, “I should be honest. Hiking isn’t really my thing, and I’d love to hear why you love it. Could we do a short walk and a good lunch?”',
          protects: 'It protects honesty and keeps the connection.', cost: 'A moment of exposure.',
          try: 'Notice whether he meets your honesty with warmth.' },
        { id: 'b', tag: 'accommodate', text: 'Keep up the act, buy boots and go every weekend.',
          protects: 'It delights him for now.', cost: 'You build the relationship on a version of you that cannot last.',
          try: 'Try the hobby once with an open mind, and tell him what you really think.' },
        { id: 'c', tag: 'withdraw', text: 'Invent an excuse and avoid weekends.',
          protects: 'It avoids the confession.', cost: 'He is left confused and you stay hidden.',
          try: 'One honest sentence is kinder than six excuses.' },
        { id: 'd', tag: 'ruminate', text: 'Lie awake worrying that he will find out and think you are fake.',
          protects: 'It keeps you alert to risk.', cost: 'The worry costs you sleep, and the lie stays.',
          try: 'Fix it early. A small correction is easy and a large one is not.' },
        { id: 'e', tag: 'react', text: 'Cancel suddenly with “I can’t do this,” then feel awful.',
          protects: 'It ends the discomfort.', cost: 'It overreacts to a small truth.',
          try: 'Take a breath, and tell the truth in one calm sentence.' }
      ] },
    { id: 's3-3', module: 3, title: 'The small dishonesty',
      setup: 'You are out with Yusuf and he mentions, laughing, that he told his boss he was sick so he could attend a match. Later he tells the waiter a small lie to get a discount. You value honesty highly.',
      options: [
        { id: 'a', tag: 'ruminate', text: 'Say nothing, then analyse it for days: is he a liar, or is it harmless?',
          protects: 'It keeps the evening smooth.', cost: 'You decide alone, on partial information.',
          try: 'Notice it as data and watch the pattern. Ask a simple question when it is calm.' },
        { id: 'b', tag: 'assertive', text: 'Say lightly, afterwards, “I noticed the small fibs tonight. Honesty matters a lot to me. How do you see it?”',
          protects: 'It protects your values and gives him room to respond.', cost: 'He may feel judged for a moment.',
          try: 'Watch for defensiveness or curiosity. Both are informative.' },
        { id: 'c', tag: 'accommodate', text: 'Laugh along. It is only a small thing and you do not want to seem rigid.',
          protects: 'It protects the mood.', cost: 'You set aside a core value to be agreeable.',
          try: 'One joke is a data point. A pattern of fibs is information.' },
        { id: 'd', tag: 'react', text: 'Snap at him in the restaurant, “That’s lying!”',
          protects: 'It expresses how strongly you feel.', cost: 'Public correction makes it about the scene.',
          try: 'Wait until you are private and calm.' },
        { id: 'e', tag: 'withdraw', text: 'End it without a conversation.',
          protects: 'It protects your values from compromise.', cost: 'You never learn whether he would have listened.',
          try: 'If honesty is non-negotiable, say so once and see what he does.' }
      ] },
    { id: 's3-4', module: 3, title: 'The community question',
      setup: 'Your family loves your new partner Kwame, but an uncle says in front of everyone, “He is not from our community. Think carefully before this goes further.” Your mother looks at you.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say calmly, “I hear that you care. I’m choosing by character and values, and I’ll introduce him properly so you can judge for yourselves.”',
          protects: 'It protects both your dignity and the relationship with your family.', cost: 'It may not settle the matter.',
          try: 'Speak to your mother privately later, and ask what exactly worries her.' },
        { id: 'b', tag: 'accommodate', text: 'Say, “Of course, I’ll think about it,” and quietly start to cool things off.',
          protects: 'It keeps the family peace.', cost: 'You may give up a good relationship because of someone else’s fear.',
          try: 'Listen to what the concern is. Some of it may be wisdom, and some may be habit.' },
        { id: 'c', tag: 'react', text: 'Say sharply, “It’s my life,” and leave.',
          protects: 'It states your independence.', cost: 'It hardens positions and punishes your mother too.',
          try: 'Step outside, return calmly and say one clear sentence.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing and keep your relationship private from now on.',
          protects: 'It avoids conflict.', cost: 'Secrecy strains both the relationship and your family.',
          try: 'Choose one trusted relative to tell the truth to.' },
        { id: 'e', tag: 'ruminate', text: 'Smile, then lie awake weighing love against family for weeks.',
          protects: 'It avoids a scene.', cost: 'You carry the weight alone and the decision drifts.',
          try: 'Write your values and the real question, then talk to Kwame and one person you trust.' }
      ] }
  );

  D.ASK.push(
    { id: 'values', title: 'I do not know what I want in a partner', domains: ['d3', 'd2'], modules: [3, 12],
      keys: ['what i want', 'what i need', 'my type', 'know my values', 'core values', 'what matters', 'list of qualities', 'what to look for'],
      answer: ['Start with values and not looks or lists: three things you will not trade, such as honesty, faithfulness or faith. Then separate preferences, which are pleasant but flexible, from inherited “shoulds,” which deserve a second look.',
        'Lesson 3.1 walks you through it. Test each value against your own calendar and spending. A value you do not live yourself will be hard to find in someone else.'] },
    { id: 'identity', title: 'I have lost myself', domains: ['d3', 'd1'], modules: [3, 2],
      keys: ['who am i', 'lost myself', 'lost who i am', 'do not know myself', "don't know myself", 'not myself', 'identity', 'pretending'],
      answer: ['Losing yourself usually happens slowly, through years of being useful, agreeable or busy. You can find yourself again in small steps: notice what you enjoy, tell one small truth a day, and spend time with people who like the real you.',
        'Lesson 3.2 helps you take off one mask at a time. If you feel numb, hopeless or empty for long stretches, speak to a counsellor or doctor as well.'] },
    { id: 'children', title: 'Children, or not', domains: ['d3', 'd11'], modules: [3, 12],
      keys: ['want kids', 'want children', 'have kids', 'have children', 'childfree', 'child-free', 'biological clock', 'baby', 'no kids', 'motherhood'],
      answer: ['Whether you want children is a core question and not a detail, so say it early and kindly. Both “yes” and “no” are legitimate answers, and so is “I am not sure yet.” A partner who wants something different will not change for love alone.',
        'Lesson 3.4 helps you describe your life and name what is fixed and what is flexible. If time pressure weighs on you, talk to a doctor about your options so you decide with facts and not fear.'] }
  );
})();
