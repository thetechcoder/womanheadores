/* Module 4: Health, Body and Energy. Same shape as Modules 2 and 3. No medical advice, no numbers or targets for food or weight. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[4] = {
    title: 'Health, Body and Energy',
    intro: 'Energy is the quiet foundation of attraction and of a relationship that lasts. This module helps her notice where her energy comes from, make peace with her body, set a pace she can keep, look after her health, and build a weekly rhythm she can hold, including in hard weeks.',
    safety: 'This module is general guidance, not medical advice. It uses no weight, calorie or fitness targets. If you have a health condition, are pregnant, or are unsure what is safe for you, ask a doctor. If thoughts about food, weight or your body take over your days, or you restrict, binge or purge, please speak to a doctor or a specialist support service. If you ever feel unsafe, contact your local emergency service or someone you trust now.'
  };

  [
    { id: '4.1', title: 'Your energy sources', mins: 40, line: 'Find where your energy comes from and where it leaks, then start one tiny habit.' },
    { id: '4.2', title: 'Your body, and your peace with it', mins: 40, line: 'Move from judging your body to looking after it.' },
    { id: '4.3', title: 'Stress, rest and your calendar', mins: 45, line: 'Match your commitments to your real capacity and make rest part of the plan.' },
    { id: '4.4', title: 'Looking after your health', mins: 40, line: 'List what is due, book one appointment and write your questions.' },
    { id: '4.5', title: 'Your weekly energy rhythm', mins: 40, line: 'Build a rhythm that survives hard weeks.' }
  ].forEach(function (l) { l.module = 4; D.LESSONS.push(l); });

  D.ENERGY = {
    rest: { name: 'Rest and sleep', body: 'Rest is where your energy comes from first. When it runs low, everything else, including mood, patience and attraction to your own life, runs low too.', practice: 'Choose one small change to your evening that protects your sleep, such as a fixed time to put the phone away.' },
    move: { name: 'Movement', body: 'Movement you enjoy lifts mood and steadies your body. It does not have to be a workout, and it should be something you can keep doing.', practice: 'Pick one kind of movement you actually like, and do a small version of it on three days this week.' },
    fuel: { name: 'Nourishment', body: 'Regular, satisfying meals keep your energy steady. This is about feeling well, not about rules, targets or the size of your body.', practice: 'Notice one meal you tend to skip or rush, and make it a little more regular and a little more enjoyable.' },
    joy: { name: 'Joy and connection', body: 'People, play and meaning refill you in ways that rest alone cannot. A life with nothing to look forward to is tiring.', practice: 'Put one thing on the calendar this week that you look forward to, with someone whose company you enjoy.' }
  };

  D.CONTENT['4.1'] = {
    lead: 'Energy is the quiet foundation of everything else. Before you change your whole life, find where your energy comes from and where it leaks.',
    story: { h: 'Story: Lindiwe, 38, Johannesburg', p: [
      'Lindiwe ran on coffee and adrenaline. She went on dates tired, said yes to everything, and wondered why she felt flat when a kind man asked her questions. Her sister suggested she was not shy or difficult. She was exhausted.',
      'She chose one change: a fixed time to put her phone away at night. Within two weeks she woke easier. Because she was less tired, she said no to two commitments she resented, and, to her surprise, she started to look forward to things again. She said, “I thought I needed a new personality. I needed more sleep.”',
      'Lindiwe is a composite character.'] },
    framework: { h: 'Framework: four energy sources', intro: 'Energy comes from four places. When one runs low, the others carry more of the load, and eventually everything feels heavy.', items: [
      ['Rest and sleep:', 'the base. Without it, nothing else lasts.'],
      ['Movement:', 'anything that gets you out of your head and into your body, in a way you enjoy.'],
      ['Nourishment:', 'regular, satisfying meals and enough water. It is about steady energy, not about rules.'],
      ['Joy and connection:', 'people, play, beauty and meaning. Feeling alive is energy too.'],
      ['The principle:', 'change one thing, make it very small, and keep it for two weeks before adding another.']] },
    exercise: { h: 'Exercise: your energy snapshot and one tiny habit', intro: 'About 40 minutes. This is a quick snapshot of how things are right now, not a verdict.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'rest', text: 'I wake up mostly rested.' },
        { axis: 'move', text: 'I move my body in ways I enjoy.' },
        { axis: 'fuel', text: 'I eat in a way that gives me steady energy.' },
        { axis: 'joy', text: 'I have time each week for things that make me feel alive.' }] },
      { t: 'result', fn: 'energy' },
      { t: 'ta', k: 'routine', label: 'A normal day for me right now', rows: 3, ph: 'When I wake, eat, work, move, rest and go to sleep. Be honest and kind.' },
      { t: 'ta', k: 'leak', label: 'The biggest leak in my energy', rows: 2, ph: 'For example: scrolling late, skipped lunches, saying yes to everything.' },
      { t: 'inp', k: 'tiny', label: 'My tiny habit for the next two weeks', ph: 'For example: phone away at 10 p.m.' },
      { t: 'inp', k: 'cue', label: 'The cue that will remind me', ph: 'For example: when I brush my teeth.' }] },
    foryou: [{ when: 'gentle', text: 'If you are carrying grief or old hurt, your energy may be low for good reasons. Keep your tiny habit truly tiny, and speak to a doctor if low energy or low mood lasts.' }],
    embrace: [
      ['One tiny habit, kept for two weeks', 'Five new habits that all collapse by Friday'],
      ['Treating sleep as part of your appeal', 'Wearing exhaustion as a badge of honour'],
      ['Movement and food that make you feel well', 'Punishing yourself with rules'],
      ['Asking a doctor when tiredness is constant', 'Assuming it is only stress']]
  };

  D.CONTENT['4.2'] = {
    lead: 'You do not have to love how your body looks every day. You can respect what it does and look after it, and that shift changes how you walk into a room.',
    story: { h: 'Story: Rosa, 45, Madrid', p: [
      'Rosa avoided mirrors, photos and, if she was honest, a few invitations. She believed that being loved would require a different body. When a friend asked her what her body had done for her this year, she was quiet for a while. It had carried her through a long illness in her family, danced at her niece’s wedding, and walked her to work every day.',
      'She started a short list called “what my body does,” and added to it each morning for a month. She did not suddenly love her reflection. She did start dressing for the woman who was living her life, not hiding from the one in the photo. A colleague said she looked different. Rosa said, “I just stopped arguing with myself.”',
      'Rosa is a composite character.'] },
    framework: { h: 'Framework: from judging to caring', intro: 'Three shifts, in order.', items: [
      ['Function before form:', 'start with what your body does for you before you consider how it looks.'],
      ['Neutral before positive:', 'you do not have to feel beautiful every day. “This is my body, and I will care for it” is enough to start.'],
      ['Care as action:', 'rest, movement, nourishment, clothes that fit and a doctor when you need one. Care is something you do, not something you feel.'],
      ['The critic:', 'notice the voice that scolds you. Ask whether you would say it to a friend, and say the kinder version instead.']] },
    exercise: { h: 'Exercise: what my body does', intro: 'About 40 minutes. Go gently. If a prompt feels heavy, skip it.', blocks: [
      { t: 'ta', k: 'does', label: 'Five things my body has done for me this year', rows: 3, ph: 'Carried, healed, danced, hugged, worked, rested.' },
      { t: 'ta', k: 'critic', label: 'What my inner critic says, and what I would say to a friend', rows: 3, ph: 'Critic: ... Friend: ...' },
      { t: 'p', text: 'When do you feel most at home in your body? Choose up to three.' },
      { t: 'chips', k: 'home', max: 3, options: ['Moving', 'Resting', 'Being outdoors', 'Dressed in something I love', 'With people I trust', 'Dancing', 'Creating', 'Praying or meditating'] },
      { t: 'ta', k: 'care', label: 'One act of care for my body this week', rows: 2, ph: 'Small and specific. Something I can do, not something I have to feel.' },
      { t: 'inp', k: 'sentence', label: 'A kind sentence I will say when the critic starts', ph: 'For example: “This body has carried me through a lot.”' }] },
    foryou: [{ when: 'gentle', text: 'If your body has been hurt, judged or controlled, you decide what to do with this lesson. You can stop at any point, and a counsellor or doctor can help.' }],
    embrace: [
      ['Respect for what your body does', 'Waiting to love your body before you live'],
      ['Clothes and care that fit the woman you are now', 'Hiding until you reach an imagined body'],
      ['Speaking to yourself as you would to a friend', 'Comparing your body with edited images'],
      ['Help from a professional when food or body thoughts take over', 'Handling it alone']]
  };

  D.CONTENT['4.3'] = {
    lead: 'Ambition, family and love all draw on the same limited energy. A relationship that lasts needs a woman who has some left for it.',
    story: { h: 'Story: Yuki, 34, Osaka', p: [
      'Yuki said yes to every project, every family obligation and every friend in crisis. Her calendar was full and her tank was empty. When a man she liked invited her on a weekend away, she said yes and then spent the weekend half-asleep, and he took it for disinterest.',
      'She drew a simple map: her real capacity for a week on one side, her commitments on the other. The gap was embarrassing. She dropped two commitments, scheduled one evening of nothing, and told her family she would see them every second Sunday. Her family adjusted. She said, “The surprise was that people respected the limit more than they had respected the exhaustion.”',
      'Yuki is a composite character.'] },
    framework: { h: 'Framework: capacity, commitments and rest', intro: 'A calendar is a moral document: it shows what you value and what you pay for it.', items: [
      ['Capacity:', 'the honest amount of time and energy you have in a normal week, after work, sleep, meals and travel.'],
      ['Commitments:', 'everything you have agreed to, from work to family to friends to your own goals.'],
      ['The gap:', 'when commitments exceed capacity, something gives: sleep, health, patience or a relationship.'],
      ['Kinds of rest:', 'physical, mental (a quiet mind), social (time alone or with safe people), and creative or spiritual. You may need a different kind than the one you have been taking.']] },
    exercise: { h: 'Exercise: your calendar audit', intro: 'About 45 minutes. Use a real week from your recent past.', blocks: [
      { t: 'ta', k: 'week', label: 'Last week, honestly', rows: 4, ph: 'What took my time and energy, and what was left for me.' },
      { t: 'ta', k: 'gap', label: 'Where commitments exceeded capacity', rows: 2, ph: 'And what gave: sleep, mood, a friendship, my own plans.' },
      { t: 'ta', k: 'drop', label: 'One commitment I will drop, shrink or share', rows: 2, ph: 'And the warm sentence I will use to say so.' },
      { t: 'p', text: 'Which kinds of rest do you need most? Choose up to two.' },
      { t: 'chips', k: 'rest', max: 2, options: ['Physical rest', 'A quiet mind', 'Time alone', 'Time with safe people', 'Beauty and creativity', 'Faith or stillness'] },
      { t: 'inp', k: 'block', label: 'A protected block of rest in my week', ph: 'For example: Saturday morning, no plans.' }] },
    foryou: [{ when: 'gentle', text: 'If you are carrying more than you should, rest is not selfish. If you cannot rest because worry is constant, speak to a doctor or counsellor as well.' }],
    roots: {
      christian: 'Many Christian traditions describe a day of rest as a gift and a command, and treat the body as a trust to look after. Consider what keeping a sabbath rhythm could look like in your week.',
      muslim: 'Many Muslim traditions emphasise balance, and the idea that the body has rights over you. Consider how your prayer times and rest could give your week a steadier shape.',
      jewish: 'Many Jewish traditions centre a weekly day of rest, Shabbat, as a way to stop and renew. Consider what a protected day or evening could look like for you.',
      hindu: 'Many Hindu traditions speak of balance across the stages and rhythms of life, including practices such as yoga and routines that care for body and mind. Consider which of these steadies you.',
      buddhist: 'Many Buddhist traditions teach the middle way, between excess and neglect, and compassion for yourself. Consider what a middle path could look like in your calendar.',
      secular: 'You might treat rest as a value you protect on purpose, and choose a weekly rhythm that suits the way you live. A friend who also values balance can help keep you honest.'
    },
    embrace: [
      ['A calendar that matches your real capacity', 'A calendar built on how much you wish you could do'],
      ['A warm, clear no to protect your rest', 'A silent yes followed by resentment'],
      ['Protected rest that is not earned', 'Rest only after you collapse'],
      ['Telling people your rhythm early', 'Expecting a partner to read your exhaustion']]
  };

  D.CONTENT['4.4'] = {
    lead: 'Looking after your health is part of caring for your future relationship. Appointments you put off do not make the questions go away.',
    story: { h: 'Story: Efua, 40, Accra', p: [
      'Efua kept rescheduling her check-up. First work was too busy, then she was dating, and then she told herself she felt fine. A friend’s diagnosis, caught early, scared her into booking. Her own results were reassuring. She said the relief was almost as big as the fear had been.',
      'After that she made a list of what was due: a routine check-up, a dental visit, an eye test and one conversation she had been avoiding. She booked one a month. She said, “I used to treat appointments like exams I might fail. Now I treat them like maintenance.”',
      'Efua is a composite character.'] },
    framework: { h: 'Framework: the care list', intro: 'Take care of the basics before you need them. What is right for you depends on your age, health and where you live, so ask your own doctor.', items: [
      ['Routine care:', 'a regular check-up and the screenings your doctor recommends for your age and history.'],
      ['Body maintenance:', 'dental, eyes, hearing, skin and vaccinations.'],
      ['Reproductive and sexual health:', 'ask your doctor about contraception, screening and fertility, whatever your stage of life, and about protection when dating.'],
      ['Mental health:', 'a counsellor or doctor is for ordinary seasons too, and not only for crises.'],
      ['Habits that affect your judgement:', 'alcohol and other substances change how you read people and how safely you date. Know your own limits before a date, not during it.']] },
    exercise: { h: 'Exercise: your care list', intro: 'About 40 minutes. Your answers stay private on your phone. Write only what you want to.', blocks: [
      { t: 'ta', k: 'due', label: 'What I know is due or overdue', rows: 3, ph: 'Check-up, dental, eyes, screening, a vaccination, a conversation with my doctor.' },
      { t: 'ta', k: 'avoid', label: 'What I have been avoiding, and why', rows: 2, ph: 'Fear, cost, time, embarrassment, past experience.' },
      { t: 'inp', k: 'book', label: 'The one appointment I will book this week', ph: 'And the date I will do it by.' },
      { t: 'ta', k: 'questions', label: 'Questions I want to ask my doctor', rows: 3, ph: 'For example: what is right for my age, my family history, my energy, my sleep.' },
      { t: 'ta', k: 'limits', label: 'My limits for dates', rows: 2, ph: 'For example: how much I will drink, where I will meet, who knows where I am.' }] },
    foryou: [{ when: 'gentle', text: 'If medical settings feel frightening because of past experiences, you can bring someone you trust, ask for a woman clinician where available, and say at the start what you need.' }],
    embrace: [
      ['Booking the appointment you have been postponing', 'Waiting for symptoms or a crisis'],
      ['Asking your own doctor what is right for you', 'Comparing yourself with advice meant for someone else'],
      ['Setting your date limits before the date', 'Deciding in the moment, when it is harder'],
      ['Counselling for ordinary seasons too', 'Waiting until you cannot cope']]
  };

  D.CONTENT['4.5'] = {
    lead: 'A rhythm is a pattern you can keep. The best plan is the one you can still follow in a bad week.',
    story: { h: 'Story: Beatriz, 52, Lisbon', p: [
      'Beatriz had tried every plan: the six-week reset, the early-morning routine, the strict schedule. They all lasted until the first hard week. At fifty-two she noticed her body had changed its rules, and she was tired of fighting it. A doctor’s appointment gave her information and, as she said, permission to stop punishing herself.',
      'She wrote a rhythm with two versions: a normal week and a minimum week. The normal week had three anchors: a walk with a friend, an early night twice a week, and one evening of nothing. The minimum week kept only one anchor. For the first time she did not quit after a bad week, because the minimum version was always there. She said, “I stopped trying to be perfect and started trying to be consistent.”',
      'Beatriz is a composite character.'] },
    framework: { h: 'Framework: anchors and a minimum week', intro: 'Build a weekly rhythm on a few anchors, and keep a smaller version for hard weeks.', items: [
      ['Anchors:', 'two or three regular things you do for your energy, such as a walk, an early night, a protected evening or time with a friend.'],
      ['The minimum week:', 'the one anchor you will keep even when everything is hard. Having it means a bad week does not turn into a bad month.'],
      ['Seasons change:', 'your body and life change over the years. Review your rhythm every few months, and ask your doctor about changes you cannot explain.'],
      ['Someone who knows:', 'one person who knows your rhythm and can check in without nagging.']] },
    exercise: { h: 'Exercise: your weekly rhythm', intro: 'About 40 minutes. Keep it smaller than you think you need.', blocks: [
      { t: 'p', text: 'Choose up to three anchors for a normal week.' },
      { t: 'chips', k: 'anchors', max: 3, options: ['A regular walk', 'An early night twice a week', 'A protected evening of nothing', 'Time with a friend', 'Movement I enjoy', 'A weekly meal I cook and enjoy', 'Prayer or stillness', 'A creative hour', 'Time outdoors'] },
      { t: 'inp', k: 'minimum', label: 'My minimum week: the one anchor I always keep', ph: 'For example: an early night, twice.' },
      { t: 'ta', k: 'hard', label: 'What usually throws me off, and what I will do', rows: 3, ph: 'For example: when work spikes, I keep my minimum and move the rest.' },
      { t: 'inp', k: 'person', label: 'The person who knows my rhythm (optional)', ph: 'Someone who checks in kindly.' },
      { t: 'summary4' }] },
    foryou: [{ when: 'gentle', text: 'Keep the minimum week truly small. A rhythm that depends on how well you are doing will fail exactly when you need it.' }],
    embrace: [
      ['A rhythm with a minimum version', 'A plan that only works when life is easy'],
      ['Asking your doctor about changes in your body', 'Fighting changes you do not understand'],
      ['Reviewing the plan as seasons change', 'Sticking with a plan that no longer fits'],
      ['Consistency over perfection', 'Quitting the whole plan after one bad week']]
  };

  D.SCENARIOS.push(
    { id: 's4-1', module: 4, title: 'The late-night invitation',
      setup: 'It is Thursday. You have an early start tomorrow, and you are tired. Tobi, whom you have seen three times, texts at 9:30 p.m.: “Fancy a drink? Just around the corner.”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Reply: “I’d love to see you, but I’m wiped and have an early start. Could we do Saturday afternoon instead?”',
          protects: 'It protects your sleep and still shows interest.', cost: 'He may be disappointed, and you tolerate that.',
          try: 'Notice whether he accepts a clear no with an alternative easily.' },
        { id: 'b', tag: 'accommodate', text: 'Say yes, drag yourself out, and spend the evening hiding how tired you are.',
          protects: 'It pleases him and avoids a refusal.', cost: 'You are not at your best, and you start the next day depleted.',
          try: 'Choose your yeses when you can give them fully.' },
        { id: 'c', tag: 'withdraw', text: 'Ignore the text and reply the next day.',
          protects: 'It protects your evening.', cost: 'He may read it as disinterest, and the pattern avoids honesty.',
          try: 'A two-line reply costs less than silence.' },
        { id: 'd', tag: 'react', text: 'Snap back: “It’s late, why would you ask me now?”',
          protects: 'It expresses your irritation.', cost: 'It turns a normal invitation into a conflict.',
          try: 'Take a breath, then say what you need in a friendly way.' },
        { id: 'e', tag: 'ruminate', text: 'Spend an hour deciding whether to go and what it means if you do not.',
          protects: 'It gives you time to think.', cost: 'The hour of worry costs more than a short reply.',
          try: 'Decide on your rest first, then reply once.' }
      ] },
    { id: 's4-2', module: 4, title: 'The remark about your body',
      setup: 'At a family lunch, your aunt looks you up and down and says, “You look different. Have you put on weight? You should watch it if you want a husband.” Your cousins fall silent.',
      options: [
        { id: 'a', tag: 'accommodate', text: 'Laugh it off and say, “Yes, I should start a diet,” and take a smaller plate.',
          protects: 'It keeps the peace.', cost: 'It tells everyone your body is open to comment, and it hurts for days.',
          try: 'You can be light and still draw a line.' },
        { id: 'b', tag: 'assertive', text: 'Say calmly, “I’m happy with how I look and how I live. I’d rather talk about something else, Auntie.”',
          protects: 'It protects your dignity and the relationship.', cost: 'Your aunt may feel corrected.',
          try: 'Speak to her privately later if you can: “I know you care, and the comments hurt.”' },
        { id: 'c', tag: 'react', text: 'Snap, “Mind your own business!” and walk out.',
          protects: 'It expresses how you feel.', cost: 'It turns you into the story.',
          try: 'Step outside, breathe, return calmly and say one clear sentence.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing and avoid family lunches for a while.',
          protects: 'It avoids the hurt.', cost: 'You lose support, and the comments continue.',
          try: 'Tell one trusted relative how it feels, and go to the events you value.' },
        { id: 'e', tag: 'ruminate', text: 'Smile, say nothing, and spend the week studying yourself in the mirror.',
          protects: 'It avoids a scene.', cost: 'The comment grows in your mind and feeds the critic.',
          try: 'Write the remark down and then one fact about what your body does for you.' }
      ] },
    { id: 's4-3', module: 4, title: 'The exhausted yes',
      setup: 'You are worn out after a heavy month at work. Ravi invites you to a weekend away, and you want to go. You also know you are running on empty.',
      options: [
        { id: 'a', tag: 'accommodate', text: 'Say yes, pack, and push through the weekend smiling.',
          protects: 'It keeps things exciting and avoids disappointing him.', cost: 'You spend the weekend depleted and may seem distant.',
          try: 'Tell him you are tired and plan a gentler trip.' },
        { id: 'b', tag: 'assertive', text: 'Say, “I’d love to go. I’m exhausted, so can we keep it low-key with plenty of rest?”',
          protects: 'It protects your energy and invites him to plan with you.', cost: 'You show a limit, and he may need to adjust.',
          try: 'Notice how he responds to your honesty.' },
        { id: 'c', tag: 'withdraw', text: 'Say you are busy and avoid him for a couple of weeks.',
          protects: 'It protects your rest.', cost: 'It confuses him and keeps your real reason hidden.',
          try: 'One honest sentence is kinder than two weeks of silence.' },
        { id: 'd', tag: 'ruminate', text: 'Go back and forth for days about whether you are a failure for being so tired.',
          protects: 'It keeps you alert to your limits.', cost: 'The worry uses the energy you are short of.',
          try: 'Decide with one question: what would I choose if I were rested?' },
        { id: 'e', tag: 'react', text: 'Cancel suddenly with “I can’t do any of this,” then feel awful.',
          protects: 'It ends the pressure.', cost: 'It overreacts to a good invitation.',
          try: 'Take a breath and tell him the truth in one calm sentence.' }
      ] },
    { id: 's4-4', module: 4, title: 'The appointment you keep moving',
      setup: 'You booked a check-up weeks ago. This week, you have a date on the same day, and rescheduling would be the fourth time. Part of you is also nervous about the visit.',
      options: [
        { id: 'a', tag: 'withdraw', text: 'Cancel the appointment and promise yourself you will rebook soon.',
          protects: 'It avoids the nerves.', cost: 'The same excuse is easy to repeat for months.',
          try: 'Rebook before you cancel, then protect the date.' },
        { id: 'b', tag: 'assertive', text: 'Keep the appointment, and ask your date for another time with an honest, light reason.',
          protects: 'It protects your health and sets the tone for how you treat your own needs.', cost: 'A small rescheduling conversation.',
          try: 'Notice whether he takes “I have a health appointment” with respect.' },
        { id: 'c', tag: 'accommodate', text: 'Keep the date and cancel the appointment, since he is only free that day.',
          protects: 'It pleases him.', cost: 'It sets a pattern of putting your health second.',
          try: 'A good partner will move a date for an appointment.' },
        { id: 'd', tag: 'ruminate', text: 'Spend days imagining everything the check-up might find.',
          protects: 'It prepares you for the worst.', cost: 'The worry hurts more than the visit would.',
          try: 'Write your questions for the doctor, and go. Information is easier than guessing.' },
        { id: 'e', tag: 'react', text: 'Cancel both in a rush, annoyed at everything.',
          protects: 'It stops the pressure.', cost: 'You lose the date and the appointment.',
          try: 'Take a breath, then choose one to keep.' }
      ] }
  );

  D.ASK.push(
    { id: 'burnout', title: 'I am exhausted all the time', domains: ['d4', 'd6'], modules: [4],
      keys: ['exhausted', 'burnout', 'burned out', 'no energy', 'too tired', 'always tired', 'overworked', 'drained', 'worn out'],
      answer: ['Constant tiredness usually has several causes: too little sleep, too many commitments, stress, and sometimes a health issue. Start with one small change to your sleep, and map your real capacity against your commitments.',
        'If you are tired most days for weeks, or you feel low or hopeless, speak to a doctor. Lessons 4.1 and 4.3 help you find your leaks and build a pace you can keep.'] },
    { id: 'bodyimage', title: 'I feel unhappy with my body', domains: ['d4', 'd1'], modules: [4, 5],
      keys: ['my body', 'body image', 'weight', 'ugly', 'not pretty', 'not attractive', 'fat', 'look good', 'my appearance'],
      answer: ['Many women feel this, and it can shrink your life if you let it. Start with what your body does for you, speak to yourself the way you would to a friend, and dress and care for the body you have now.',
        'If thoughts about food, weight or your body take over your days, or you restrict, binge or purge, please talk to a doctor or a specialist support service. Lesson 4.2 goes into this, and Module 5 covers style.'] },
    { id: 'checkup', title: 'Health checks and sexual health', domains: ['d4', 'd11'], modules: [4, 13],
      keys: ['check-up', 'checkup', 'check up', 'screening', 'gynae', 'gynec', 'sexual health', 'contracep', 'sti', 'std', 'fertility', 'smear', 'pap'],
      answer: ['Routine care, screening, contraception and sexual health are worth a regular conversation with your own doctor, because what is right depends on your age, history and where you live. You are allowed to ask questions without being judged.',
        'Lesson 4.4 helps you list what is due and write your questions. If you feel unsafe in a relationship or have been hurt, a doctor or local support service can help, and your local emergency service is there if you are in danger.'] }
  );
})();
