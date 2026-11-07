/* Module 2: Healing and Inner Work. Lessons are data; app.js renders them generically. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO = { 2: {
    title: 'Healing and Inner Work',
    intro: 'Before you choose well, you need to feel steady. This module is about how you attach, what your family handed you, how to say no with warmth, and how to calm yourself, so love is something you choose and not something you chase.',
    safety: 'This module touches old hurt. Go at your pace, skip anything that feels too heavy, and consider a counsellor for the heavier parts. If you ever feel unsafe, contact your local emergency service or someone you trust now.'
  } };

  D.LESSONS.forEach(function (l) { l.module = 1; });
  [
    { id: '2.1', title: 'How you attach', mins: 45, line: 'A short reflection on how you seek closeness and safety.' },
    { id: '2.2', title: 'Family blueprints and old wounds', mins: 50, line: 'See what your home taught you about love, and choose what to keep.' },
    { id: '2.3', title: 'Worth, boundaries and people-pleasing', mins: 45, line: 'Tell a loving yes from a fearful one, and write your boundary sentence.' },
    { id: '2.4', title: 'Calming your system', mins: 40, line: 'Build a calm kit for the moments you spiral.' },
    { id: '2.5', title: 'Singleness as a season, and your support', mins: 40, line: 'Make this season count and build the team around you.' }
  ].forEach(function (l) { l.module = 2; D.LESSONS.push(l); });


  D.ATTACH = {
    sec: { name: 'Leaning secure for now',
      body: 'Closeness and space both feel manageable to you right now. You can probably ask for what you need and hear a no without losing your footing. Stay curious, since stress and new relationships can shift this.',
      practice: 'Keep doing what works, and help a friend who is struggling. Notice what keeps you steady so you can return to it.' },
    anx: { name: 'Leaning anxious',
      body: 'Your alarm for being left is set high. You notice every shift and want reassurance. This is a pattern learned for good reasons, and it is not a flaw.',
      practice: 'When the alarm rings, name it, wait twenty minutes, and ask once and plainly for what you need. Lesson 2.4 gives you a calm kit.' },
    avd: { name: 'Leaning avoidant',
      body: 'Independence keeps you safe, and closeness can feel crowded. You are steady and self-reliant, and you may pull back just as something good begins.',
      practice: 'When you want to pull away, say so out loud: “I notice I want space, and I want to stay.” Stay a few minutes longer than is comfortable.' },
    both: { name: 'Leaning both ways',
      body: 'You want closeness and you fear it, so you may chase and then retreat. That push and pull is exhausting, and it is common in people who learned that love is both precious and risky.',
      practice: 'Slow things down. Name the pull you feel before you act on it, and consider a counsellor, who can help you make sense of the pattern.' }
  };

  var LIK = ['Not me', 'A little', 'Mostly', 'Very me'];

  D.CONTENT = {
    '2.1': {
      lead: 'Attachment is how you learned to seek closeness and safety. It is a pattern and not a label, and patterns can change.',
      story: { h: 'Story: Marisol, 27, Mexico City', p: [
        'Whenever a man took more than an hour to reply, Marisol’s chest tightened and she sent a second message, then a third. Her boyfriend Diego finally said, gently, “I feel like I’m being checked on.” She heard it as proof that she was too much, and she cried for an evening.',
        'A counsellor offered her a different reading. As a child she had never known which version of her father would walk through the door, so her body learned to scan for signs of withdrawal. The alarm was old, and it was trying to protect her. Marisol did not need to switch it off. She learned to say, “My alarm is ringing,” and to wait twenty minutes before acting on it. Diego stayed, and she also learned she would have been all right if he had not.',
        'Marisol is a composite character.'] },
      framework: { h: 'Framework: four tendencies', intro: 'Researchers describe attachment as tendencies along two lines: how much you worry about being left, and how much you pull away from closeness. Most people lean one way in some seasons and another way in others.', items: [
        ['Leaning secure:', 'closeness feels safe and so does space. You can ask for what you need and hear a no without falling apart. Many people become more secure through steady relationships, friendships and therapy.'],
        ['Leaning anxious:', 'you notice every shift and want reassurance. Your gift is devotion and attunement. The trap is chasing, over-explaining and reading silence as rejection.'],
        ['Leaning avoidant:', 'you value independence and feel crowded when someone leans in. Your gift is steadiness and self-reliance. The trap is pulling back just as it gets good.'],
        ['Leaning both:', 'you want closeness and fear it. Your gift is deep feeling. The trap is the push and pull that confuses you and the other person.']] },
      exercise: { h: 'Exercise: your attachment snapshot', intro: 'About 45 minutes. Ten quick statements first, then three short writing prompts. This is a snapshot of how you feel in close relationships right now, not a diagnosis.', blocks: [
        { t: 'p', text: 'How true is each statement for you in romantic relationships or close friendships?' },
        { t: 'likert', k: 'q', labels: LIK, items: [
          { axis: 'anx', text: 'When someone I like goes quiet, I assume something is wrong.' },
          { axis: 'avd', text: 'When someone gets close, I feel the urge to pull away.' },
          { axis: 'anx', text: 'I need frequent reassurance to feel okay about us.' },
          { axis: 'avd', text: 'I prefer to handle my problems alone.' },
          { axis: 'anx', text: 'I worry that I care more than they do.' },
          { axis: 'avd', text: 'I feel uncomfortable when someone depends on me emotionally.' },
          { axis: 'anx', text: 'I replay conversations looking for signs I did something wrong.' },
          { axis: 'avd', text: 'I keep parts of myself private even from people I love.' },
          { axis: 'anx', text: 'I fear being left, even when things are going well.' },
          { axis: 'avd', text: 'I feel relief when plans get cancelled.' }] },
        { t: 'result', fn: 'attach' },
        { t: 'ta', k: 'alarm', label: 'A moment recently when my alarm rang', rows: 3, ph: 'What happened, what I felt in my body, and what I did.' },
        { t: 'ta', k: 'need', label: 'What I most need when I feel unsure', rows: 2, ph: 'For example: a short message saying he is thinking of me.' },
        { t: 'ta', k: 'ask', label: 'How I could ask for it plainly and kindly', rows: 2, ph: 'For example: “When plans change, a quick text helps me feel settled.”' },
        { t: 'inp', k: 'phrase', label: 'A sentence I can say to myself when the alarm rings', ph: 'For example: “This feeling is old. I can wait twenty minutes.”' }] },
      foryou: [
        { when: 'gentle', text: 'You chose a starting point that needs care. Skip anything that feels heavy, and treat the statements as curiosity and not as a verdict.' },
        { when: 'beginner', text: 'If you have little dating history, answer for friendships and family. Attachment shows up there too.' }],
      embrace: [
        ['Treating your reaction as information about the past', 'Treating it as proof that something is wrong with you'],
        ['Naming the alarm out loud before you act', 'Sending three messages to quiet the feeling'],
        ['Asking for reassurance once, plainly', 'Testing a partner to see if he cares'],
        ['Staying close for a minute longer than feels comfortable', 'Withdrawing just as it gets good']]
    },

    '2.2': {
      lead: 'Your family and culture handed you a blueprint for love. Some of it is a gift, some of it is a weight, and you get to choose what to keep.',
      story: { h: 'Story: Hana, 38, Seoul', p: [
        'Hana’s parents never argued. They also never touched, laughed together or said what they wanted. She grew up believing that a good marriage was quiet endurance, so she drifted toward men who were cool and hard to read, and she worked tirelessly to earn warmth from them.',
        'The turning point was small. A friend’s parents teased each other at dinner, and Hana felt envy and then grief. She wrote down what love had looked like at home, what was never said, and what role she had played. She had been the peacemaker and the achiever. She decided to keep her loyalty and her work ethic, adjust how she speaks up, and release the idea that love has to be earned through silence.',
        'Hana is a composite character.'] },
      framework: { h: 'Framework: the blueprint review', intro: 'Three questions show you the blueprint. Then you choose what to keep, adjust or release. Your family and culture also gave you strengths, so honour them while you look.', items: [
        ['What I was shown:', 'how did the adults around you treat each other? How was affection, conflict and money handled?'],
        ['What was never said:', 'which rules did everyone follow without discussing them? For example: do not complain, do not ask for help, family comes first, marriage is duty.'],
        ['The role I played:', 'peacemaker, achiever, caretaker, invisible one, rebel, or the strong one. Roles help children survive, and they can fit badly in adult love.']] },
      exercise: { h: 'Exercise: keep, adjust, release', intro: 'About 50 minutes. Write what is true, in your own words. If your home included harm, go gently and consider doing this with a counsellor.', blocks: [
        { t: 'ta', k: 'shown', label: 'What love looked like at home', rows: 3, ph: 'How the adults treated each other. Include the good.' },
        { t: 'ta', k: 'unsaid', label: 'The unspoken rules about love, conflict and money', rows: 3, ph: 'For example: we do not talk about feelings. Marriage is for life.' },
        { t: 'p', text: 'Which roles did you play? Choose up to two.' },
        { t: 'chips', k: 'roles', max: 2, options: ['Peacemaker', 'Achiever', 'Caretaker', 'Invisible one', 'Rebel', 'The strong one'] },
        { t: 'ta', k: 'keep', label: 'What I keep', rows: 2, ph: 'A value or habit from home that I am proud of.' },
        { t: 'ta', k: 'adjust', label: 'What I adjust', rows: 2, ph: 'Something good that needs a different shape for my life.' },
        { t: 'ta', k: 'release', label: 'What I release', rows: 2, ph: 'A belief that no longer serves me.' }] },
      foryou: [
        { when: 'gentle', text: 'You chose a starting point that needs care. Write only what feels safe, and stop whenever you need to. A counsellor can hold the heavier parts with you.' },
        { when: 'recovering', text: 'You are recovering from a relationship. Notice whether the pattern you named in Lesson 1.3 echoes anything from home. You do not have to fix it today.' }],
      embrace: [
        ['Honouring the love your family did give', 'Blaming them for everything, or excusing everything'],
        ['Choosing what to keep, adjust and release', 'Repeating the blueprint because it feels familiar'],
        ['Talking it through with someone safe or a counsellor', 'Confronting family before you feel steady'],
        ['Seeing culture as a gift with some weights in it', 'Rejecting your roots to prove your independence']]
    },

    '2.3': {
      lead: 'To be adored is different from being needed. A yes given out of fear teaches people your needs are optional, and a loving yes does not.',
      story: { h: 'Story: Tolu, 44, Lagos', p: [
        'Tolu hosted every family event, lent money without being asked back, and answered messages at midnight. She thought being agreeable was the same as being lovable. Then a man she liked said, kindly, “I never know what you actually want.” She realised she had been so busy being easy that she had become hard to know.',
        'She started small. She said no to one favour a week, with a warm sentence and an alternative. Two people grumbled. Most adjusted. Her friendships got more honest, and on her next first date she said, “I would love to, but not on a weeknight.” He said, “Saturday, then.” It was the easiest yes she had ever received.',
        'Tolu is a composite character.'] },
      framework: { h: 'Framework: the three-question yes', intro: 'Before you say yes to a favour, a plan or a person, ask three things.', items: [
        ['Is it freely given?', 'Would I still say yes if I knew nobody would be upset when I said no?'],
        ['Will I resent it?', 'Resentment is a signal that a boundary was needed earlier.'],
        ['Could I tell them my real reason?', 'If the honest reason would embarrass me, the yes is probably fear.']] },
      exercise: { h: 'Exercise: your boundary sentence', intro: 'About 45 minutes. A boundary describes what you will do, not what another person must do. It is warm, short and stays kind.', blocks: [
        { t: 'ta', k: 'resent', label: 'A yes I gave this month that I resent', rows: 2, ph: 'What was it, and who was it for?' },
        { t: 'ta', k: 'fear', label: 'What I was afraid would happen if I said no', rows: 2, ph: 'Be honest. The fear is the information.' },
        { t: 'p', text: 'A simple shape: “I can’t do that, and here is what I can do.” Add a brief reason only if you want to.' },
        { t: 'ta', k: 'sentence', label: 'My boundary sentence', rows: 2, ph: 'For example: “I can’t this weekend. I could help on Tuesday evening.”' },
        { t: 'inp', k: 'small', label: 'One small no I will practise this week', ph: 'Something low-stakes, with someone safe.' },
        { t: 'ta', k: 'worth', label: 'Something I bring that has nothing to do with being useful', rows: 2, ph: 'Your humour, your curiosity, your steadiness, your way of listening.' }] },
      foryou: [
        { when: 'gentle', text: 'If saying no has ever been unsafe for you, your first boundary is your safety. Choose a no with a person who is safe, and take your time.' }],
      embrace: [
        ['A warm no with an alternative', 'A silent yes followed by resentment'],
        ['Boundaries about your own actions', 'Rules you expect another person to obey'],
        ['Humility and firmness together', 'Believing kindness means having no limits'],
        ['Noticing how people respond to your no', 'Staying where your no is punished']]
    },

    '2.4': {
      lead: 'You cannot think your way out of a body that feels in danger. Calm the body first, then the story, then choose.',
      story: { h: 'Story: Ingrid, 36, Gothenburg', p: [
        'After every promising date, Ingrid lay awake until three, drafting messages and imagining endings. In the morning she was exhausted, irritable and convinced she had ruined it. She often cancelled the second date.',
        'Her counsellor suggested a sequence: breathe first, name the feeling, separate fact from story, and take one small action. The first night she tried it, the spiral lasted twenty minutes and not three hours. Over a month, she noticed the spirals arrived when she was tired, hungry or had skipped her walk. Her calm kit began with sleep and a walk after dinner, long before the breathing.',
        'Ingrid is a composite character.'] },
      framework: { h: 'Framework: body, name, fact, step', intro: 'When a feeling is loud, work through four moves in order.', items: [
        ['Body first:', 'one long exhale, longer than the inhale. Drop your shoulders. Plant your feet. A minute of slow breathing lowers alarm.'],
        ['Name it:', '“I feel anxious,” or “I feel hurt.” Naming a feeling reduces its grip.'],
        ['Fact and story:', 'write what you know for certain, then the story you are telling. “He hasn’t replied in a day” is a fact. “He’s lost interest” is a story.'],
        ['One small step:', 'choose one action you will be glad of tomorrow, such as sleeping, walking, or sending one clear sentence in the morning.']] },
      exercise: { h: 'Exercise: your calm kit', intro: 'About 40 minutes. Build the kit while you are calm, so it is ready when you are not.', blocks: [
        { t: 'breathe' },
        { t: 'ta', k: 'signs', label: 'My early warning signs', rows: 2, ph: 'For example: tight chest, checking my phone, snapping at people.' },
        { t: 'ta', k: 'triggers', label: 'What makes spirals more likely', rows: 2, ph: 'For example: no sleep, skipped meals, scrolling, alcohol, being alone late at night.' },
        { t: 'ta', k: 'story', label: 'A recent spiral: the fact and the story', rows: 3, ph: 'Fact: ... Story: ...' },
        { t: 'p', text: 'Which body tools will you use? Choose up to three.' },
        { t: 'chips', k: 'tools', max: 3, options: ['Slow breathing', 'A walk', 'Cold water on my face', 'Stretching', 'Music', 'Prayer or stillness', 'Talking to a friend', 'Writing it out'] },
        { t: 'ta', k: 'hour', label: 'What I will do in the first hour of a spiral', rows: 2, ph: 'For example: breathe for a minute, put the phone in another room, write the fact and the story.' },
        { t: 'inp', k: 'person', label: 'The person I can call (optional)', ph: 'A friend, family member or counsellor.' }] },
      foryou: [
        { when: 'gentle', text: 'If worry or low mood feels constant, or you have panic attacks, talk to a doctor or counsellor as well. This lesson supports that help and does not replace it.' }],
      embrace: [
        ['Sleep, food and movement as part of romance', 'Treating exhaustion as a character flaw'],
        ['Waiting before you send', 'Sending to relieve the feeling'],
        ['Asking a friend to help you check the facts', 'Asking six friends to analyse every word'],
        ['Professional help when feelings are heavy or constant', 'Pushing through alone']]
    },

    '2.5': {
      lead: 'Being single is a season, not a verdict. What you do with it, and who stands beside you, shapes the woman who arrives at the next relationship.',
      story: { h: 'Story: Rania, 41, Amman', p: [
        'After her divorce, Rania heard the same comments at every gathering: “Don’t wait too long,” “You are still young.” She started to feel that her life was a waiting room. She stopped travelling, stopped inviting people over, and declined most invitations.',
        'A friend asked, “What would you do this year if you knew you would be single for all of it?” Rania took a language course, rejoined a hiking group, and started seeing a counsellor. Within a year she had a full life and a circle she trusted. She also began dating, with less urgency and more discernment. She said later, “I stopped being someone waiting to be chosen, and I became someone who could choose.”',
        'Rania is a composite character.'] },
      framework: { h: 'Framework: season, stop, support', intro: 'Three questions turn waiting into living.', items: [
        ['What is this season for?', 'Every season offers something: rest, repair, growth, adventure or service. Name what yours makes possible.'],
        ['What will I stop postponing?', 'The trip, the course, the friends, the home. Build the life you would want if you knew you would stay single for a while.'],
        ['Who is on my team?', 'A confidant who listens, a truth-teller who is honest, and someone who brings fun. Add a professional when you need one: a counsellor, a doctor, or a trained leader from your community.']] },
      exercise: { h: 'Exercise: your season and your team', intro: 'About 40 minutes. This is the last lesson of Module 2, so there is a short summary of your answers at the end.', blocks: [
        { t: 'ta', k: 'season', label: 'What this season is for', rows: 2, ph: 'For example: healing, building my career, learning to enjoy my own company.' },
        { t: 'ta', k: 'postponed', label: 'One thing I will stop postponing', rows: 2, ph: 'And the first step, with a date.' },
        { t: 'inp', k: 'confidant', label: 'My confidant', ph: 'Someone who listens without fixing.' },
        { t: 'inp', k: 'truth', label: 'My truth-teller', ph: 'Someone who will tell me what I need to hear, kindly.' },
        { t: 'inp', k: 'fun', label: 'My joy person', ph: 'Someone who makes me laugh.' },
        { t: 'ta', k: 'pro', label: 'Support I want from a professional or my community', rows: 2, ph: 'For example: a counsellor, a doctor, a trained leader in my faith community. A next step I can take this month.' },
        { t: 'summary2' }] },
      foryou: [
        { when: 'gentle', text: 'If you are still healing, a professional on your team is not a luxury. It is part of how you take care of yourself. Many places offer sliding-scale, community or online counselling, and a doctor can point you to local options.' }],
      roots: {
        christian: 'Many Christian traditions speak of seasons and of waiting well, and of community as the place love is practised. Consider asking a pastor or trusted friend to walk with you through this season.',
        muslim: 'Many Muslim traditions emphasise patience (sabr), trust in timing, and the support of a good community. Consider asking a trusted imam, mentor or friend to be part of your circle.',
        jewish: 'Many Jewish traditions emphasise community, learning and the idea that a person’s time is held within a larger story. Consider asking a rabbi, mentor or friend to study or talk with you.',
        hindu: 'Many Hindu traditions speak of stages of life and of acting with devotion without clinging to results. Consider asking a teacher or elder you trust to guide you through this season.',
        buddhist: 'Many Buddhist traditions teach impermanence and compassion, including compassion for yourself. Consider a teacher or a sangha as part of your circle.',
        secular: 'You might treat this season as a deliberate chapter, and choose a few values to live by during it. A mentor or friend who shares those values can be part of your team.'
      },
      embrace: [
        ['Building a life you love now', 'Treating your life as a waiting room'],
        ['A small circle you can trust', 'Telling everyone, or no one'],
        ['Professional help when you need it', 'Handling heavy feelings alone'],
        ['Dating from fullness', 'Dating from fear of being behind']]
    }
  };

  /* Module 2 scenarios use the same five response styles as Module 1. */
  D.SCENARIOS.push(
    { id: 's2-1', module: 2, title: 'The 11 p.m. spiral',
      setup: 'You had a lovely third date with Kofi on Tuesday. He said he would call Thursday. It is now Friday night, 11 p.m., and nothing. You are in bed with your phone, and your chest feels tight.',
      options: [
        { id: 'a', tag: 'ruminate', text: 'Reread the whole message history for clues, and text two friends to analyse his last sentence.',
          protects: 'It feels like gathering evidence.', cost: 'You lose sleep and hand your judgement to others, and the facts do not change.',
          try: 'Write the fact (“He has not called”) and the story (“He has lost interest”), then sleep.' },
        { id: 'b', tag: 'react', text: 'Send: “Hey, just checking you’re alive, lol” and watch for the dots.',
          protects: 'It releases the tension right now.', cost: 'You teach yourself to act on the feeling, and you may show more anxiety than you meant to.',
          try: 'Wait until morning. If you still want to message, ask a real question calmly.' },
        { id: 'c', tag: 'assertive', text: 'Take a minute of slow breathing, put the phone in another room, and decide in the morning whether to send one clear sentence.',
          protects: 'It protects your sleep and your self-respect.', cost: 'You tolerate not knowing for one night.',
          try: 'In the morning: “I enjoyed Tuesday. Are you still up for getting together?”' },
        { id: 'd', tag: 'withdraw', text: 'Decide he is clearly not interested, delete the thread, and stop thinking about it.',
          protects: 'It ends the discomfort of waiting.', cost: 'You close a door on an assumption, and you never learn what happened.',
          try: 'Give it one clear message before you close the door.' },
        { id: 'e', tag: 'accommodate', text: 'Text: “No worries if you’re busy! Whenever works for you :)” even though you do mind.',
          protects: 'It keeps things light and easy.', cost: 'Your real feeling goes unsaid, and it teaches him your time is flexible.',
          try: 'Keep it warm and add one honest line about what you would like.' }
      ] },
    { id: 's2-2', module: 2, title: 'The favour that costs too much',
      setup: 'Daniel has asked you, for the third time this month, to cancel your plans and join him at a work event. This time it clashes with your sister’s birthday dinner, which you promised to attend. He says, “It would really mean a lot to me.”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say: “I can’t miss my sister’s dinner. I’d love to meet your colleagues another time, or join you for dessert after.”',
          protects: 'It protects your promise and your relationship with your sister.', cost: 'He may be disappointed, and you tolerate that.',
          try: 'Watch how he responds. Disappointment is fine, and pressure or sulking is information.' },
        { id: 'b', tag: 'accommodate', text: 'Cancel on your sister and apologise to her, since he asked nicely.',
          protects: 'It keeps Daniel happy tonight.', cost: 'It teaches both of you that your commitments bend, and your sister notices.',
          try: 'Ask yourself if you would make the same request of him.' },
        { id: 'c', tag: 'react', text: 'Snap: “You always do this! Everything is about your work!”',
          protects: 'It expresses how worn out you feel.', cost: 'The argument becomes about your tone, and the real issue gets buried.',
          try: 'Name the pattern calmly: “This is the third time this month, and I need to talk about it.”' },
        { id: 'd', tag: 'withdraw', text: 'Say “fine, go without me,” go quiet, and keep your distance for a few days.',
          protects: 'It protects you from an argument.', cost: 'He does not know what he did, and resentment grows.',
          try: 'Say one sentence about what bothered you before you step back.' },
        { id: 'e', tag: 'ruminate', text: 'Say you will think about it, then spend two days weighing whether you are being selfish.',
          protects: 'It buys you time.', cost: 'The time is spent doubting yourself, and he is left waiting.',
          try: 'Decide using the three-question yes. Then answer him within a day.' }
      ] },
    { id: 's2-3', module: 2, title: 'The question about your past',
      setup: 'On a second date, Marcus asks gently why your last relationship ended. It ended badly, and you feel a flush of shame and the urge to either tell him everything or change the subject.',
      options: [
        { id: 'a', tag: 'react', text: 'Tell him the full story, including the worst details, and watch his face for judgement.',
          protects: 'It feels honest, and you get the weight off your chest.', cost: 'It can overwhelm a new connection, and trust is built in steps.',
          try: 'Share in stages. Trust grows as you each share a little more.' },
        { id: 'b', tag: 'withdraw', text: 'Make a joke, change the subject, and plan to be vague whenever it comes up.',
          protects: 'It protects your privacy.', cost: 'If it becomes a habit, he may feel he is not allowed in.',
          try: 'Privacy is fine. Say so openly: “That’s a longer story. I’ll tell you when I know you better.”' },
        { id: 'c', tag: 'accommodate', text: 'Say it was mostly your fault and agree with whatever he suggests about it.',
          protects: 'It makes you look reasonable and humble.', cost: 'It can set up a story where you are always the one at fault.',
          try: 'Own your part and not more than your part.' },
        { id: 'd', tag: 'assertive', text: 'Say: “It ended because we wanted different things, and I learned a lot about what I need. I’ll tell you more as we get to know each other.”',
          protects: 'It protects your dignity and your pace.', cost: 'He may want more, and you tolerate that.',
          try: 'Ask him the same question, and notice whether he answers with care.' },
        { id: 'e', tag: 'ruminate', text: 'Answer briefly, then replay the conversation all evening wondering what he thinks of you.',
          protects: 'It keeps you from oversharing.', cost: 'The evening is spent in your head, not enjoying the date.',
          try: 'Write one sentence about what went well, then let it rest.' }
      ] },
    { id: 's2-4', module: 2, title: 'The family dinner remark',
      setup: 'At a big family dinner your aunt says, loud enough for everyone: “Your cousin is expecting her second, and you are still on your own. What are you waiting for?” The table goes quiet and everyone looks at you.',
      options: [
        { id: 'a', tag: 'accommodate', text: 'Laugh it off: “You’re right, I should hurry up!” and quickly offer to bring dessert.',
          protects: 'It keeps the peace and the mood.', cost: 'It tells the room that your life is a project they can comment on, and the sting stays.',
          try: 'You can be light and still honest, and a warm boundary is not a rebellion.' },
        { id: 'b', tag: 'assertive', text: 'Smile and say: “I’m happy with how my life is going, and I’ll share news when I have it. How is your garden, Auntie?”',
          protects: 'It protects your dignity and the relationship.', cost: 'Someone may feel corrected, and you may have to repeat it.',
          try: 'Speak to your aunt privately later: “I know you care. The comments hurt more than they help.”' },
        { id: 'c', tag: 'react', text: 'Say sharply: “It’s none of your business!” and leave the table.',
          protects: 'It makes your feelings visible.', cost: 'The story becomes your outburst, and your aunt feels attacked.',
          try: 'Step outside for five minutes, then return calmly and set a boundary.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing, eat quietly, and avoid family gatherings for a while.',
          protects: 'It protects you from the pressure.', cost: 'You lose family support, and the pressure remains when you return.',
          try: 'Choose one trusted relative to tell how you feel, and keep going to the gatherings you value.' },
        { id: 'e', tag: 'ruminate', text: 'Smile, say nothing, and spend the next week wondering whether she is right and you are running out of time.',
          protects: 'It avoids a scene.', cost: 'You carry the remark alone, and it feeds the fear that you are behind.',
          try: 'Write the remark down, then write what is true about your life. Pick one fact to hold on to.' }
      ] }
  );

  /* More built-in answers */
  D.ASK.push(
    { id: 'attach', title: 'Anxious, avoidant, secure: what am I?', domains: ['d1', 'd2'], modules: [2],
      keys: ['attachment', 'anxious', 'avoidant', 'clingy', 'needy', 'too attached', 'insecure', 'secure'],
      answer: ['Attachment describes tendencies, not types you are stuck in. You may lean anxious with one person, avoidant with another, and steadier when you feel safe. Lesson 2.1 gives you a short snapshot and a way to work with your own pattern.',
        'The most helpful step is noticing the alarm and naming it before you act. Steady relationships, good friendships and counselling can all move you toward feeling more secure.'] },
    { id: 'pullaway', title: 'I pull away when it gets serious', domains: ['d1', 'd2'], modules: [2, 10],
      keys: ['pull away', 'push him away', 'run away', 'get scared', 'sabotage', 'commitment', 'afraid of intimacy', 'cold feet', 'self-sabotage'],
      answer: ['Pulling away at the point of closeness often protects you from an old fear: being hurt, being swallowed up, or losing yourself. It makes sense, and it also keeps good things out.',
        'Try saying what is happening instead of acting on it: “I notice I want to pull back, and I’m not sure why. I’d like to stay.” If the pattern is strong or tied to painful history, a counsellor can help.'] },
    { id: 'therapy', title: 'Do I need a counsellor?', domains: ['d1'], modules: [2],
      keys: ['therapy', 'therapist', 'counsellor', 'counselor', 'professional help', 'trauma', 'depressed', 'anxiety', 'panic'],
      answer: ['If the same pain keeps returning, if old events still flood you, if sleep, work or relationships suffer, or if your feelings feel too big to carry, a counsellor is worth it. Seeking help is a strength, and it makes love easier.',
        'Options differ around the world: a family doctor can refer you, many communities offer low-cost or sliding-scale services, and online counselling is available in many places. If you ever feel unsafe or think of harming yourself, contact your local emergency service or someone you trust now.'] },
    { id: 'spiral', title: 'I overthink everything', domains: ['d1', 'd10'], modules: [2, 4],
      keys: ['overthink', 'spiral', 'cannot stop thinking', "can't stop thinking", 'obsess', 'ruminate', 'worry all night', 'racing thoughts', 'can’t sleep'],
      answer: ['Overthinking is usually an alarm and not an analysis. Start with the body: one long exhale, feet on the floor, phone in another room. Then write the fact and the story, and take one small step.',
        'Sleep, food and movement matter more than most people think. If worry feels constant or takes over your days, speak to a doctor or counsellor. Lesson 2.4 helps you build a calm kit.'] },
    { id: 'season', title: 'Is it okay to be single and happy?', domains: ['d1', 'd8'], modules: [2, 7],
      keys: ['single and happy', 'happy single', 'content alone', 'enjoy being single', 'on my own', 'is it okay to be single'],
      answer: ['Yes. A full single life makes you a better partner, because you choose from fullness and not from fear. You can want love and still enjoy this season.',
        'Loneliness is information, not failure. Build your circle, keep doing what you love, and let dating be one part of life and not the whole of it. Lesson 2.5 goes into this.'] },
    { id: 'trust', title: 'How do I trust again after being hurt?', domains: ['d1', 'd11'], modules: [2, 13],
      keys: ['trust again', 'trust issues', 'cannot trust', "can't trust", 'betrayed', 'cheated on', 'hurt before', 'burned', 'afraid to trust'],
      answer: ['Trust is rebuilt in small steps, not by a leap. Offer a little, notice how it is held, and offer a little more. Trust is earned through consistency over time.',
        'You can also trust yourself: your ability to notice warning signs and to leave. Healing from betrayal often goes better with support. A counsellor can help you tell old fear from new information.'] }
  );
})();
