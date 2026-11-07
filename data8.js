/* Module 7: Home, Friendships and Community. Hosting and domestic skills are a choice, never an obligation. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[7] = {
    title: 'Home, Friendships and Community',
    intro: 'A woman with a place that feels like hers, people who know her and a life worth joining is steady, warm and easy to love. This module helps her shape her home, decide what hosting and domestic skills mean to her, tend her circle, and find communities and interests that fill her weeks.',
    safety: 'Home here means any place you live, whether that is a family home, a shared flat, a hostel room or your own house. Nothing assumes a budget, a country or a family shape. Hosting and domestic skills are offered as a choice and never as a duty a woman owes a man. A partner who tries to cut you off from friends, family or your own interests is showing a warning sign. If you feel isolated or unsafe, tell someone you trust and contact a local support service, and if you are in danger, contact your local emergency service now.'
  };

  [
    { id: '7.1', title: 'A home that feels like you', mins: 40, line: 'Shape one corner, and one routine, so your space restores you.' },
    { id: '7.2', title: 'Hosting and domestic skills, by choice', mins: 40, line: 'Decide what you love, what you can learn and what you will not owe anyone.' },
    { id: '7.3', title: 'Your circle', mins: 45, line: 'See who feeds you, who drains you, and who to keep close.' },
    { id: '7.4', title: 'Hobbies, travel and a life worth joining', mins: 40, line: 'Fill your weeks with things and places you love.' },
    { id: '7.5', title: 'Reach out and plan', mins: 40, line: 'Repair one friendship, accept one invitation, and write your plan.' }
  ].forEach(function (l) { l.module = 7; D.LESSONS.push(l); });

  D.CIRCLE = {
    depth: { name: 'Depth with a few people', body: 'Most women need two or three people who know the real her, the tired, funny, uncertain one. Depth comes from honesty, shared time and being the first to share something true.', practice: 'Choose one friend and tell her something real that you usually keep to yourself.' },
    mutual: { name: 'Friendships that run both ways', body: 'Healthy friendship goes in both directions. If you give most of the effort, or take most of it, the balance can usually be adjusted with a kind, direct conversation.', practice: 'Name one friendship that feels uneven, and choose a small, clear request to make this month.' },
    reach: { name: 'Seeing people regularly', body: 'Friendships fade without contact. A recurring plan, such as a Sunday walk or a monthly meal, keeps them alive without much effort.', practice: 'Set one recurring plan with a friend, and put the first date in your calendar.' },
    belong: { name: 'A community of your own', body: 'A place where people know your name, whether a class, club, faith community, team or volunteer group, gives you belonging and puts good people in your path.', practice: 'Pick one group to attend three times before you decide whether it suits you.' }
  };

  D.CONTENT['7.1'] = {
    lead: 'Your home does not have to be big or new. It has to be a place where you can breathe, and one that you would be glad to share when the time comes.',
    story: { h: 'Story: Wen, 31, Singapore', p: [
      'Wen shared a flat with two flatmates, and her room was the place where she dumped her bag and slept. She dreaded the thought of anyone seeing it. A friend asked what she would change if she could change one thing, and Wen said, “I want somewhere I like coming back to.”',
      'She cleared one corner, added a lamp with a warm bulb, a plant and a chair for reading, and decided that her first ten minutes at home would be quiet, with tea. Within a month she noticed she was less tense in the evenings. When she started seeing someone, she realised she no longer felt ashamed of her space. She said, “It was one corner, but it changed how the whole room felt.”',
      'Wen is a composite character.'] },
    framework: { h: 'Framework: refuge, rhythm and readiness', intro: 'Three ideas help a home support your life.', items: [
      ['Refuge:', 'one place that is calm and yours, even if it is a chair, a shelf or a corner of a shared room.'],
      ['Rhythm:', 'a few routines that make the space work: a quiet arrival, a tidy reset, a way to end the day.'],
      ['Readiness:', 'a home where you would feel comfortable having a trusted friend, and in time a partner, over for a meal.'],
      ['Whatever your situation:', 'living with family, in a shared flat, in a rented room or abroad all count. The aim is comfort, not a showpiece.']] },
    exercise: { h: 'Exercise: your refuge', intro: 'About 40 minutes. Work with what you have.', blocks: [
      { t: 'p', text: 'Where do you live at the moment?' },
      { t: 'chips', k: 'living', max: 1, options: ['Alone', 'With family', 'With flatmates', 'With a partner', 'In temporary housing', 'Somewhere else'] },
      { t: 'inp', k: 'refuge', label: 'The corner or space I will make mine', ph: 'For example: the chair by the window.' },
      { t: 'p', text: 'What will make it restful? Choose up to three.' },
      { t: 'chips', k: 'feel', max: 3, options: ['Warm light', 'Tidy', 'Plants', 'Music', 'Scent', 'Books', 'Photos', 'Quiet', 'Colour', 'Prayer or reflection space'] },
      { t: 'inp', k: 'routine', label: 'One small home routine I will start', ph: 'For example: ten quiet minutes with tea when I arrive.' },
      { t: 'ta', k: 'change', label: 'The one thing that would make home feel more like me', rows: 3, ph: 'Cost, effort and time, kept small.' }] },
    foryou: [{ when: 'gentle', text: 'If home is not safe or comfortable right now, your first goal is a safe place, even a temporary one. Speak to a trusted person or a local support service about options.' }],
    embrace: [
      ['One calm corner that is yours', 'Waiting for a perfect home before you settle in'],
      ['Small routines that help you arrive and rest', 'Using your space only to store things and sleep'],
      ['A space you would be glad to share', 'Hiding your living situation from people you trust'],
      ['Making do with warmth and creativity', 'Spending beyond your means to impress']]
  };

  D.CONTENT['7.2'] = {
    lead: 'Cooking, hosting and keeping a home are skills, and they are yours to use or not use. A woman who has them has options. A woman who is expected to have them has a burden.',
    story: { h: 'Story: Funmi, 37, Lagos', p: [
      'Funmi loved her career and could barely boil rice. Her aunts often reminded her that “a man will want a wife who can cook.” She felt both ashamed and resentful. Then a friend asked her a different question: “What would you like to be able to do in your own kitchen?”',
      'Funmi realised she wanted to cook three dishes well, because she loved sharing food and hated eating out alone. She took a short class, learned jollof and a good stew, and began hosting friends once a month. When she later met Obi, she told him, “I cook because I enjoy it, and I expect us to share the work.” He laughed and said he was happy to wash up. She said, “Learning it for myself changed everything about how I felt.”',
      'Funmi is a composite character.'] },
    framework: { h: 'Framework: skill, choice and fairness', intro: 'Separate what you would enjoy from what you are expected to do.', items: [
      ['Skill:', 'a few things you can do well: a meal you are proud of, a clean and welcoming space, a simple way to host.'],
      ['Choice:', 'which of these you enjoy and want, and which you do only because someone expects it.'],
      ['Fairness:', 'in a partnership, household work is shared by agreement, whatever each person’s culture or family did before. Agree it early and revisit it.'],
      ['Hospitality across cultures:', 'in many places, welcoming guests is an honour and a joy. It can be a gift you choose to give without being a test of your worth.']] },
    exercise: { h: 'Exercise: your hosting and home skills', intro: 'About 40 minutes. Be honest about what you want.', blocks: [
      { t: 'p', text: 'Which of these would you like to be able to do well? Choose up to four.' },
      { t: 'chips', k: 'skills', max: 4, options: ['Cook three signature dishes', 'Host a relaxed meal', 'Keep a tidy home', 'Manage a household budget', 'Do simple repairs', 'Plan a small celebration', 'Make a welcoming guest space', 'Cook for one, well'] },
      { t: 'inp', k: 'dish', label: 'A dish or a way of hosting I will learn or improve', ph: 'For example: my grandmother’s stew.' },
      { t: 'ta', k: 'expect', label: 'Something I do only because it is expected of me', rows: 3, ph: 'Be honest, and notice how it feels.' },
      { t: 'ta', k: 'share', label: 'How I would like household work to be shared in a partnership', rows: 3, ph: 'Cooking, cleaning, money, planning, family visits.' },
      { t: 'inp', k: 'first', label: 'The first small gathering I will host', ph: 'For example: tea for two friends this month.' }] },
    foryou: [{ when: 'gentle', text: 'If you were taught that your worth depends on domestic skill, you can learn the ones you like and let the rest go. Your value does not depend on your cooking.' }],
    embrace: [
      ['Learning skills because you want them', 'Performing skills to earn approval'],
      ['Hosting as a gift you choose to give', 'Hosting as a test you must pass'],
      ['Agreeing a fair share of household work', 'Assuming a man will, or will not, do his part'],
      ['Honouring your culture’s hospitality in your own way', 'Rejecting it just to prove a point']]
  };

  D.CONTENT['7.3'] = {
    lead: 'Your circle shapes your mood, your standards and the people you meet. Tend it as carefully as you would tend a garden.',
    story: { h: 'Story: Renata, 34, São Paulo', p: [
      'Renata had a busy group of friends who met for drinks every Friday. She dreaded most of the evenings. The conversation was gossip, and the group teased her about being single. One quiet friend, Beatriz, texted her after each night to ask how she was really doing. Renata realised the friendship she valued was the one she was neglecting.',
      'She began to see Beatriz on Sundays, joined a pottery class, and went to the Friday drinks only once a month. Nobody made a scene. Within a year her circle was smaller and warmer. When she began dating, she found she was not asking her friends for approval, only for company. She said, “I did not drop anyone. I just stopped feeding what drained me.”',
      'Renata is a composite character.'] },
    framework: { h: 'Framework: keep, grow and ease off', intro: 'Look at your circle with kindness and honesty.', items: [
      ['Keep close:', 'people who know the real you, wish you well and leave you feeling better.'],
      ['Grow:', 'people you would like to know better: a colleague, a neighbour, someone from a class or community.'],
      ['Ease off:', 'friendships that drain you or keep you small. You can step back quietly, without a dramatic exit.'],
      ['Mentors:', 'one or two people ahead of you in life, who can see further than you can. Ask for a coffee and one question.'],
      ['Warning:', 'a partner who makes you feel guilty for seeing friends, or who gradually reduces your contact with people, is showing an early sign of control.']] },
    exercise: { h: 'Exercise: your circle snapshot and map', intro: 'About 45 minutes. This is a snapshot, not a score of your worth.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'depth', text: 'I have two or three people who know the real me.' },
        { axis: 'mutual', text: 'My friendships feel balanced, with give and take on both sides.' },
        { axis: 'reach', text: 'I see or speak to people I care about every week.' },
        { axis: 'belong', text: 'I belong to a group or place where people know me.' }] },
      { t: 'result', fn: 'circle' },
      { t: 'ta', k: 'keep', label: 'People I want to keep close, and why', rows: 3, ph: 'Names or roles, and what they give you.' },
      { t: 'ta', k: 'ease', label: 'A friendship I want to ease off, and how I will do it kindly', rows: 3, ph: 'Less contact, fewer invitations, no drama.' },
      { t: 'inp', k: 'mentor', label: 'A mentor or role model I would like to ask for advice', ph: 'A name or a kind of person.' }] },
    roots: {
      christian: 'Many Christian traditions describe friendship and fellowship as part of a good life, and speak of bearing one another’s burdens. Consider who walks with you, and who you walk with.',
      muslim: 'Many Muslim traditions value companionship and the ummah, and speak of choosing good company. Consider whose company brings you closer to your best self.',
      jewish: 'Many Jewish traditions value chavruta, learning and growing together, and communal life. Consider who your chavruta is, or could be.',
      hindu: 'Many Hindu traditions speak of satsang, keeping good company. Consider whose company lifts your thoughts and actions.',
      buddhist: 'Many Buddhist traditions speak of kalyana-mitta, a spiritual friend who encourages your growth. Consider who plays that role, and for whom you play it.',
      secular: 'Consider which relationships match the values you wrote in Module 3, and which ones pull against them.'
    },
    foryou: [{ when: 'gentle', text: 'If you feel isolated, start with one small contact. If loneliness feels heavy or lasting, talk to a doctor or counsellor as well as to a friend.' }],
    embrace: [
      ['Two or three friends who know the real you', 'A large circle where no one does'],
      ['Easing off a draining friendship quietly', 'Dramatic exits or silent resentment'],
      ['Asking a mentor for one clear piece of advice', 'Waiting to be noticed'],
      ['Keeping friends while you date', 'Dropping your circle for a new man']]
  };

  D.CONTENT['7.4'] = {
    lead: 'A woman with things she loves doing is interesting, relaxed and easy to meet. The best way to meet good people is to be doing something you enjoy.',
    story: { h: 'Story: Noor, 39, Vancouver', p: [
      'Noor worked long hours, and her free time was a blur of streaming and takeaway. When a colleague asked what she did for fun, she could not answer. She remembered that she used to love hiking and photography, and decided to go on one hike a month with a local group.',
      'The first time, she nearly turned back at the car park. She went anyway. Over the following months she made two friends, took photographs she was proud of, and found she looked forward to weekends. In the autumn she met Daniel, a fellow member of the group, who had noticed her photographs. She said, “I did not go to find a man. I went to find myself, and I found both.”',
      'Noor is a composite character.'] },
    framework: { h: 'Framework: interests, adventures and belonging', intro: 'Build a life you would want to join.', items: [
      ['Interests:', 'two or three things you do for joy, not for results: music, sport, craft, reading, cooking, faith practice.'],
      ['Adventures:', 'travel in whatever size you can manage, whether a new neighbourhood, a day trip or a country. Travel solo safely, and choose what suits you.'],
      ['Belonging:', 'regular activities with the same people, such as a class, team, choir, congregation or volunteer group.'],
      ['The rule of three:', 'attend something three times before you decide. The first visit is usually awkward.']] },
    exercise: { h: 'Exercise: your life worth joining', intro: 'About 40 minutes. Choose what you would enjoy, not what looks impressive.', blocks: [
      { t: 'p', text: 'Which of these would you enjoy? Choose up to four.' },
      { t: 'chips', k: 'interests', max: 4, options: ['Walking or hiking', 'A sport or fitness class', 'Music or choir', 'Art or craft', 'Cooking classes', 'A book club', 'Volunteering', 'A faith or community group', 'Learning a language', 'Dance', 'Gardening', 'Travel'] },
      { t: 'inp', k: 'try', label: 'One thing I will try three times this quarter', ph: 'For example: a Thursday evening pottery class.' },
      { t: 'ta', k: 'travel', label: 'A trip I would like to take, and how I will do it safely', rows: 3, ph: 'Where, with whom or alone, budget, safety plan.' },
      { t: 'ta', k: 'fear', label: 'What stops me from joining things', rows: 3, ph: 'Shyness, time, money, fear of judgment.' },
      { t: 'inp', k: 'date', label: 'The date I will go the first time', ph: 'A real date in the calendar.' }] },
    foryou: [{ when: 'gentle', text: 'If shyness or worry makes joining hard, go with a friend the first time, arrive early when it is quieter, and leave when you have had enough.' }],
    embrace: [
      ['Doing things you enjoy for their own sake', 'Joining things only to meet a man'],
      ['Going three times before deciding', 'Quitting after one awkward visit'],
      ['Travelling safely in the way that suits you', 'Taking risks to look adventurous'],
      ['Regular activities with the same people', 'One-off outings that never build into friendship']]
  };

  D.CONTENT['7.5'] = {
    lead: 'Good friendships need small, regular gestures. This lesson turns your reflections into three actions.',
    story: { h: 'Story: Aisha, 45, Nairobi', p: [
      'Aisha had drifted from her oldest friend, Wanjiru, after a misunderstanding two years earlier. She thought of her often and assumed it was too late. A colleague said, “It is rarely too late. People usually wait for the other to move first.”',
      'Aisha sent Wanjiru a short message: “I have been thinking of you. I am sorry for how we left things, and I miss you.” Wanjiru replied within the hour. They met for lunch, cried a little, and made a standing plan for the first Saturday of every month. Aisha also accepted a long-standing invitation to a neighbour’s church supper. She said, “It took three sentences. I wasted two years being afraid of them.”',
      'Aisha is a composite character.'] },
    framework: { h: 'Framework: repair, invite and plan', intro: 'Three small acts that keep a circle alive.', items: [
      ['Repair:', 'one friendship worth restoring. A short, kind message that names the gap without blame is usually enough.'],
      ['Invite and accept:', 'ask someone to something small, and say yes to an invitation you would normally decline.'],
      ['Plan:', 'a recurring commitment to your circle, a home routine and an interest, written with dates.'],
      ['Be the friend you want:', 'remember birthdays, check in after hard days, celebrate good news. Warmth is a habit.']] },
    exercise: { h: 'Exercise: your three actions', intro: 'About 40 minutes. Keep each action small enough to do this month.', blocks: [
      { t: 'inp', k: 'repair', label: 'Who I will reach out to', ph: 'A name or a role.' },
      { t: 'ta', k: 'msg', label: 'The short message I will send', rows: 3, ph: 'A few warm, honest sentences, with no blame.' },
      { t: 'inp', k: 'invite', label: 'Who I will invite to something small, or the invitation I will accept', ph: 'For example: Sunday walk with Ngozi.' },
      { t: 'inp', k: 'standing', label: 'A recurring plan I will set up', ph: 'For example: first Saturday lunch.' },
      { t: 'ta', k: 'week', label: 'How my home, circle and interests will fit into a normal week', rows: 3, ph: 'Days, times and who is involved.' },
      { t: 'summary7' }] },
    foryou: [{ when: 'gentle', text: 'If reaching out feels frightening, send the shortest message you can. You do not need a perfect apology, only an honest hello.' }],
    embrace: [
      ['A short, warm message to restart contact', 'Waiting for the other person to move first'],
      ['Saying yes to small invitations', 'Staying in because it is easier'],
      ['A recurring plan with a real date', 'Vague promises to meet soon'],
      ['Celebrating friends’ good news', 'Keeping score of who did what']]
  };

  D.SCENARIOS.push(
    { id: 's7-1', module: 7, title: 'The friend who always cancels',
      setup: 'Your close friend Chidinma cancels on you again, an hour before dinner. It is the fourth time this year, and you had turned down another invitation to keep the evening free.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Tell her kindly, “I miss you, and the last-minute cancellations are hurting. Can we find a plan that works for you?”',
          protects: 'It protects the friendship and your time.', cost: 'It takes courage, and she may feel defensive.',
          try: 'Name the pattern, not her character, and offer a way forward.' },
        { id: 'b', tag: 'accommodate', text: 'Say, “No problem at all,” and keep your evenings open for her.',
          protects: 'It avoids conflict.', cost: 'You teach her that your time is flexible, and resentment builds.',
          try: 'Make a plan that does not depend on one night.' },
        { id: 'c', tag: 'react', text: 'Send a sharp message, “You always do this. Do not bother next time.”',
          protects: 'It releases your anger.', cost: 'It may end a friendship that could have been repaired.',
          try: 'Wait until you are calm, then say it once, plainly.' },
        { id: 'd', tag: 'withdraw', text: 'Stop inviting her and let the friendship fade.',
          protects: 'It stops the disappointment.', cost: 'You lose a friend without a conversation.',
          try: 'One honest conversation costs less than a lost friendship.' },
        { id: 'e', tag: 'ruminate', text: 'Spend the evening wondering what you did wrong and whether she still likes you.',
          protects: 'It keeps you alert.', cost: 'It drains you and answers nothing.',
          try: 'Ask her directly, kindly, and see what she says.' }
      ] },
    { id: 's7-2', module: 7, title: 'The hosting assumption',
      setup: 'You have been seeing Kwame for two months. He mentions, lightly, that his parents will visit next month and says, “I told them you would cook a proper meal for everyone.” You have not been asked.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say warmly, “I would be glad to meet them. I would like us to plan the meal together, and I need to be asked, not told.”',
          protects: 'It protects your choice and invites a shared plan.', cost: 'He may be surprised.',
          try: 'Notice whether he listens and adjusts, or defends the assumption.' },
        { id: 'b', tag: 'accommodate', text: 'Smile and agree, then spend the week cooking for ten people.',
          protects: 'It keeps the peace.', cost: 'It sets an expectation you may not want to keep.',
          try: 'If you choose to cook, make it your gift, and say so.' },
        { id: 'c', tag: 'react', text: 'Snap, “I am not your housekeeper.”',
          protects: 'It states your limit.', cost: 'It turns a misunderstanding into a fight.',
          try: 'Take a breath, then say the same thing without the edge.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing, then become unavailable the week they visit.',
          protects: 'It avoids the conversation.', cost: 'He is left confused, and nothing is resolved.',
          try: 'Tell him early what you are and are not willing to do.' },
        { id: 'e', tag: 'ruminate', text: 'Lie awake wondering whether this means he expects a traditional wife.',
          protects: 'It keeps you cautious.', cost: 'It builds a story before you have asked him.',
          try: 'Ask him what he assumes, and what he is willing to share.' }
      ] },
    { id: 's7-3', module: 7, title: 'The bitter friend',
      setup: 'Your friend Ruth has been hurt, and she now says all men are cheats. Every time you mention dating, she tells you horror stories. You leave each conversation more fearful.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I care about you and I know you were hurt. I am hoping for something different, and I need you to hold that with me.”',
          protects: 'It protects your hope and honours her pain.', cost: 'She may feel unseen at first.',
          try: 'Spend time with her on topics other than dating, and share good news with other friends.' },
        { id: 'b', tag: 'accommodate', text: 'Nod along, and keep your dating news to yourself.',
          protects: 'It keeps the peace.', cost: 'You carry her fear and hide your hope.',
          try: 'Share your plans with someone encouraging.' },
        { id: 'c', tag: 'react', text: 'Tell her sharply that she is bitter and she needs help.',
          protects: 'It ends the pressure.', cost: 'It hurts her and may end the friendship.',
          try: 'Care for her gently and set a limit on the topic.' },
        { id: 'd', tag: 'withdraw', text: 'Reduce contact until she seems happier.',
          protects: 'It protects your mood.', cost: 'She may feel abandoned during a hard time.',
          try: 'Keep a lighter connection and a different kind of plan.' },
        { id: 'e', tag: 'ruminate', text: 'Replay her stories in your head and wonder if you are naive.',
          protects: 'It keeps you cautious.', cost: 'It turns her experience into your fear.',
          try: 'Write down what you want, and keep that list in view.' }
      ] },
    { id: 's7-4', module: 7, title: 'The weekends',
      setup: 'You have been dating Tomás for six weeks. He says, “Why do you go to choir on Saturdays? Stay with me instead. You do not need them when you have me.” He says it with a smile.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say warmly, “I love spending time with you, and choir is part of who I am. I would like both.”',
          protects: 'It protects your life and your identity.', cost: 'He may be disappointed.',
          try: 'Watch how he responds to a kind, clear boundary. Respect for your interests is a green flag.' },
        { id: 'b', tag: 'accommodate', text: 'Skip choir this week to keep him happy.',
          protects: 'It avoids tension.', cost: 'It is the first step toward shrinking your life.',
          try: 'Keep your commitments, and plan time together around them.' },
        { id: 'c', tag: 'react', text: 'Snap, “Do not tell me what to do.”',
          protects: 'It defends your freedom.', cost: 'It closes a conversation you need.',
          try: 'Take a breath, and say your boundary without the heat.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing, and slowly drift away from choir and from him.',
          protects: 'It avoids a confrontation.', cost: 'You lose both without understanding what you are choosing.',
          try: 'Be direct early. It is easier than it feels.' },
        { id: 'e', tag: 'ruminate', text: 'Wonder for days whether he is possessive or just romantic.',
          protects: 'It keeps you alert.', cost: 'It exhausts you without giving you facts.',
          try: 'Watch the pattern over time. One comment is a signal, a pattern is information.' }
      ] }
  );

  D.ASK.push(
    { id: 'friends', title: 'Friends, circle and belonging', domains: ['d8'], modules: [7],
      keys: ['make friends', 'no friends', 'few friends', 'lost touch', 'drifted apart', 'friend group', 'toxic friend', 'my circle', 'new city', 'friendship', 'friendships', 'lost my friends', 'friends are pulling away'],
      answer: ['A good circle is usually small. Two or three people who know the real you matter more than a large group. Start by contacting one person you miss, with a short, warm message, and set a recurring plan.',
        'If a friendship drains you, you can ease off without drama. If you feel isolated or the loneliness is heavy, talk to a doctor, counsellor or trusted person as well. Lessons 7.3 and 7.5 walk you through it.'] },
    { id: 'home', title: 'Home, space and living situation', domains: ['d8'], modules: [7],
      keys: ['my home', 'my flat', 'my apartment', 'my room', 'roommate', 'flatmate', 'living alone', 'live with my parents', 'living with family', 'decorate', 'declutter', 'my space', 'embarrassed of my home'],
      answer: ['Home does not need to be big or new, only calm and yours. One corner and one small routine can change how the whole space feels, in any kind of living situation.',
        'If home is not safe, your first step is a safe place, and a trusted person or local support service can help. Lesson 7.1 walks you through making a refuge.'] },
    { id: 'hosting', title: 'Cooking, hosting and housework', domains: ['d8'], modules: [7, 16],
      keys: ['cook', 'cooking', 'cannot cook', "can't cook", 'host a dinner', 'hosting', 'domestic skills', 'housework', 'traditional wife', 'who does the housework', 'chores', 'good wife', 'wife material'],
      answer: ['Cooking and hosting are skills you can enjoy and choose, and they are not a test of your worth. Learn the ones you like, and let the rest go.',
        'In a partnership, household work is shared by agreement, and it is wise to discuss it early. If someone treats it as your duty alone, notice that. Lesson 7.2 helps you decide what you want.'] },
    { id: 'community', title: 'Hobbies, travel and community', domains: ['d8'], modules: [7],
      keys: ['hobby', 'hobbies', 'solo travel', 'travel alone', 'join a club', 'join a group', 'volunteer', 'volunteering', 'free time', 'weekends', 'nothing to do', 'bored', 'find a community'],
      answer: ['The easiest way to meet good people is to be doing something you enjoy. Choose one regular activity and go three times before you decide.',
        'Travel safely in the way that suits you. Tell someone your plans, stay in well-reviewed places and trust your instincts. Lesson 7.4 helps you choose and plan.'] }
  );
})();
