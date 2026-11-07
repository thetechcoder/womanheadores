/* Module 13: Safety, Rejection and Resilience. Abuse is never framed as a communication problem. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[13] = {
    title: 'Safety, Rejection and Resilience',
    intro: 'This module protects her. It covers practical dating safety online and offline, romance scams and pressure, the difference between a hard relationship and an abusive one, how to give and receive a no, and how to keep her heart and hope in good repair.',
    safety: 'Nothing in this module is a communication skill for dealing with abuse. If someone hurts, frightens, threatens, isolates or controls you, it is not your fault and you do not have to fix it. Tell a person you trust, contact a local support service, and if you are in danger, contact your local emergency service now. Leaving can be the most dangerous time, so plan it with support.'
  };

  [
    { id: '13.1', title: 'Dating safety, online and offline', mins: 40, line: 'Build a simple safety routine you will actually use.' },
    { id: '13.2', title: 'Scams, pressure and control', mins: 45, line: 'Spot romance fraud, coercion and abuse early, and know what to do.' },
    { id: '13.3', title: 'Giving and receiving a no', mins: 40, line: 'Handle rejection without shrinking, and decline with kindness.' },
    { id: '13.4', title: 'Resilience for the long road', mins: 45, line: 'See your resilience snapshot, and build the habits that keep hope alive.' },
    { id: '13.5', title: 'Your safety and resilience plan', mins: 35, line: 'Gather it into one plan you can act on and share with someone you trust.' }
  ].forEach(function (l) { l.module = 13; D.LESSONS.push(l); });

  D.RESIL = {
    safety: { name: 'Keeping yourself safe', body: 'Safety habits work best when they are simple, ready before you need them, and known to someone you trust.', practice: 'Write your three-line safety routine for any new meeting, and tell one person you trust that you will always share your plans with them.' },
    rejection: { name: 'Meeting a no with self-respect', body: 'A no is information about fit and timing, not a verdict on your worth. How you receive it, and how you give it, shapes how much hope you keep.', practice: 'After your next no, give yourself one evening to feel it, one kind sentence about yourself, and one small step forward the next day.' },
    support: { name: 'Leaning on people', body: 'Resilience is rarely solo. People who are known and supported recover faster and choose better.', practice: 'Name two people you can call after a hard date or a hard week, and tell them they are on your list.' },
    rest: { name: 'Rest and renewal', body: 'Hope runs on energy. Rest, joy and a life that does not depend on the outcome keep you steady while you wait.', practice: 'Plan one protected week off dating each season, with something you love in its place.' }
  };

  D.CONTENT['13.1'] = {
    lead: 'Safety is not fear. It is a routine, like locking your door. Decide it once, calmly, so that in the moment you only have to follow it.',
    story: { h: 'Story: Tamsin, 36, Cape Town', p: [
      'Tamsin loved meeting people and hated feeling anxious about it. After a friend’s frightening experience, she wrote a short routine and stuck it inside her phone case: meet in public, tell her sister the name, place and time, share her location for the evening, drive herself, keep her drink in sight, and leave if anything feels wrong.',
      'On one date, a man kept insisting they move to “somewhere quieter”. Tamsin said, “I am happy here,” twice, then paid for her coffee and left. She texted her sister from the car. He wrote that she was “paranoid”. Tamsin said, “I was not paranoid. I was following my plan. A man who respects me does not mind a plan.”',
      'Tamsin is a composite character.'] },
    framework: { h: 'Framework: the routine and the checks', intro: 'Small habits protect you without taking the joy out of dating.', items: [
      ['Before:', 'check that the person is real. A live video call, a consistent name and photos that match, and a friend who can look them up. Search the name and photos if you can.'],
      ['Meeting:', 'a public place, your own transport, a friend who knows who, where and when, and a time to message them afterwards.'],
      ['During:', 'keep your drink and phone with you, do not accept lifts, and leave if you feel pressured or unwell. You do not owe an explanation.'],
      ['Information:', 'keep your home address, workplace details, financial information and children’s details private in the early weeks.'],
      ['Images:', 'do not share intimate images with someone you do not yet trust fully, and know that you can say no to a request at any time.'],
      ['Afterwards:', 'tell your friend you are safe. If someone harasses you, block, keep records, and report to the platform and, where needed, to local authorities.']] },
    exercise: { h: 'Exercise: your three-line routine', intro: 'About 40 minutes. Make it fit your city and your life.', blocks: [
      { t: 'ta', k: 'before', label: 'How I will check someone is who they say they are', rows: 3, ph: 'Video call, matching photos, a friend who looks them up.' },
      { t: 'ta', k: 'meeting', label: 'My routine for any new meeting', rows: 3, ph: 'Public place, own transport, who I tell, when I message.' },
      { t: 'ta', k: 'private', label: 'What I keep private in the first weeks', rows: 2, ph: 'Address, workplace, money, children’s details, images.' },
      { t: 'inp', k: 'person', label: 'The person who will always know my plans', ph: 'A friend, a sister, a colleague.' },
      { t: 'inp', k: 'exit', label: 'My exit sentence, if I need to leave', ph: 'For example: I am going to head home now. Thank you for your time.' }] },
    foryou: [{ when: 'gentle', text: 'If you have been hurt before, a routine can help you feel steady. Add a code word with a friend that means “call me and help me leave”.' }],
    embrace: [
      ['A routine decided in advance', 'Deciding under pressure'],
      ['A friend who always knows', 'Meeting in secret'],
      ['Leaving when it feels wrong', 'Staying to be polite'],
      ['Keeping private details private', 'Sharing to prove trust']]
  };

  D.CONTENT['13.2'] = {
    lead: 'Most scams and abusive patterns start gently. Learn the shape of them so that you can spot them early, and know that falling for one says nothing bad about you.',
    story: { h: 'Story: Odile, 47, Lyon', p: [
      'Odile met “Daniel” online, an engineer working abroad. He was attentive, wrote beautiful messages and called her his future. He could never video call. After six weeks he had a crisis: a customs fee, just for a few days. He cried. He said only she could help.',
      'Odile’s friend Chloé listened and said, “He has never been on camera, he moves fast, and now he needs money. That is the pattern.” Odile felt sick and then relieved. She sent no money, stopped replying and reported the profile. She also told her bank. She said, “I felt foolish for a week. Then I realised these people are professionals, and I had done the sensible thing in the end.”',
      'Odile is a composite character.'] },
    framework: { h: 'Framework: scams, pressure and control', intro: 'Three patterns to know. None of them are your fault.', items: [
      ['Romance fraud:', 'fast intimacy, an excuse never to meet or video call, a crisis, and a request for money, gift cards, crypto or “investments”. Never send money to someone you have not met in person and known for a long time.'],
      ['Pressure:', 'rushing, guilt, sulking, threats to leave, or “if you loved me”. A reasonable partner can wait for your yes.'],
      ['Control:', 'monitoring your phone, choosing your clothes or friends, jealousy presented as love, cutting you off from family, controlling money, or constantly criticising you.'],
      ['Abuse:', 'any violence, threat, intimidation, sexual coercion, or fear of how he will react. This is not a communication problem and it is not yours to fix.'],
      ['What to do:', 'stop sending money and information, keep records, tell someone you trust, contact a local support service or the police if you need to, and plan your exit with support. Leaving can be the riskiest time.'],
      ['Your worth:', 'being targeted says nothing about your intelligence. These people are skilled at what they do.']] },
    exercise: { h: 'Exercise: your early-warning list', intro: 'About 45 minutes. Write it while you are calm.', blocks: [
      { t: 'p', text: 'Which of these would make you stop and check? Choose any that apply.' },
      { t: 'chips', k: 'signs', max: 8, options: ['Never video calls', 'Asks for money', 'Fast declarations of love', 'A sudden crisis', 'Isolates me from friends', 'Checks my phone', 'Jealous and controlling', 'Pressure about sex', 'Threats or fear', 'Makes me doubt my memory'] },
      { t: 'ta', k: 'rule', label: 'My rule about money and information', rows: 3, ph: 'For example: I never send money to anyone I have not met and known for a year.' },
      { t: 'ta', k: 'who', label: 'Who I would tell, and what I would say', rows: 3, ph: 'A friend, a sister, a counsellor, a local support service.' },
      { t: 'ta', k: 'support', label: 'Local places I can turn to', rows: 2, ph: 'Look up and write down the names. I do not have to need them to prepare.' },
      { t: 'p', text: 'If you are already in a situation like this, you do not need to finish this exercise. Tell someone you trust today.' }] },
    foryou: [{ when: 'gentle', text: 'If any of this is familiar, you are not alone and it is not your fault. You do not have to decide anything today. Talking to one trusted person is a strong first step.' }],
    embrace: [
      ['Stopping when something feels off', 'Explaining it away'],
      ['Telling someone early', 'Handling it alone out of shame'],
      ['Keeping records and reporting', 'Deleting everything in embarrassment'],
      ['Planning an exit with support', 'Confronting alone']]
  };

  D.CONTENT['13.3'] = {
    lead: 'You will hear no, and you will have to say it. Both can be done with dignity, and both get easier with practice.',
    story: { h: 'Story: Chidinma, 34, Enugu', p: [
      'Chidinma sent a warm message to a man she had enjoyed talking to. He replied kindly that he did not feel a romantic connection. She was crushed and spent the evening listing everything wrong with herself.',
      'The next morning she called her friend Uche, who asked, “If a friend told you this, what would you say?” Chidinma said she would tell her that it was one person’s fit, not her worth. She did something small: a walk, a good breakfast, a note in her journal. She also noticed that she had been brave. A few weeks later, she turned down a man gently herself, with a short and kind message. She said, “Now I understand that a clear no is a kindness in both directions.”',
      'Chidinma is a composite character.'] },
    framework: { h: 'Framework: feel it, frame it, move', intro: 'A no stings. Here is how to carry it.', items: [
      ['Feel it:', 'allow disappointment without turning it into a story about your worth. One evening of feeling is healthy.'],
      ['Frame it:', 'a no is about fit, timing and chemistry. It is information, not a verdict. Ask what you can learn, then stop.'],
      ['Move:', 'one small action the next day: a walk, a call, an activity. Momentum beats rumination.'],
      ['Giving a no:', 'be clear, kind and brief. “I enjoyed meeting you, but I do not feel a romantic connection. I wish you well.” No long explanations and no false hope.'],
      ['When a no is ignored:', 'repeat once, then stop replying and block if needed. Persistence after a clear no is a safety signal, not romance.'],
      ['Ghosting:', 'if you have been ghosted, it says more about them than you. If you are tempted to ghost, send a short message instead.']] },
    exercise: { h: 'Exercise: your no, both ways', intro: 'About 40 minutes. Prepare before you need it.', blocks: [
      { t: 'ta', k: 'receive', label: 'What I will tell myself when I hear a no', rows: 3, ph: 'Fit, timing, chemistry. What a good friend would say.' },
      { t: 'ta', k: 'move', label: 'My small step the day after a no', rows: 2, ph: 'A walk, a call, a class, a good meal.' },
      { t: 'ta', k: 'give', label: 'My own kind, clear no, in my words', rows: 3, ph: 'Short, warm, and final.' },
      { t: 'inp', k: 'ignored', label: 'My sentence if a no is ignored', ph: 'For example: I have said no. Please do not contact me again.' },
      { t: 'inp', k: 'friend', label: 'The friend I will tell after a hard no', ph: 'Name or role.' }] },
    foryou: [{ when: 'gentle', text: 'If rejection hits you hard, notice whether old hurts are speaking. Be gentle, and consider a counsellor if it keeps you from trying.' }],
    embrace: [
      ['Feeling it, then moving', 'Replaying it for weeks'],
      ['A clear, kind no', 'Ghosting or leading someone on'],
      ['Treating a no as information', 'Treating it as a verdict'],
      ['Stopping after a clear no is ignored', 'Explaining it again']]
  };

  D.CONTENT['13.4'] = {
    lead: 'Resilience is not toughness. It is the habit of coming back to yourself, with help, after each setback, so that hope stays alive.',
    story: { h: 'Story: Adaeze, 40, Port Harcourt', p: [
      'After two disappointing relationships and a year of dates that went nowhere, Adaeze felt tired. She told her friend, “Maybe I should just stop.” Her friend suggested not stopping, but resting. Adaeze took two months off dating. She joined a choir, travelled to see her cousin, started sleeping properly and let herself enjoy her life without a man in it.',
      'When she returned, she was calmer and more discerning. She said, “I had been treating dating like a job. Rest reminded me that I was already a whole person. That made it easier to see who was worth my time.”',
      'Adaeze is a composite character.'] },
    framework: { h: 'Framework: the four supports', intro: 'Resilience grows from four places.', items: [
      ['Safety:', 'a routine and people who know. It lets you take risks calmly.'],
      ['Meaning of a no:', 'seeing setbacks as information, not verdicts.'],
      ['People:', 'friends, family, a counsellor, a community. Do not carry it alone.'],
      ['Rest and joy:', 'a life that is full without the outcome. Breaks are part of the plan, not failure.'],
      ['When you are low:', 'if sadness or hopelessness lasts or deepens, speak to a doctor, counsellor or trusted person. That is strength.']] },
    exercise: { h: 'Exercise: your resilience snapshot', intro: 'About 45 minutes. This is a snapshot of right now.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'safety', text: 'I have a safety routine and someone who knows my plans.' },
        { axis: 'rejection', text: 'I can hear a no without taking it as a verdict on my worth.' },
        { axis: 'support', text: 'I have people I can turn to when dating is hard.' },
        { axis: 'rest', text: 'I rest, and my life is full even when dating is quiet.' }] },
      { t: 'result', fn: 'resil' },
      { t: 'ta', k: 'recover', label: 'What helps me recover after a setback', rows: 3, ph: 'People, places, habits, music, movement, prayer.' },
      { t: 'ta', k: 'hope', label: 'What keeps my hope alive', rows: 3, ph: 'Stories, friends, faith, my own progress.' },
      { t: 'inp', k: 'rest', label: 'My planned rest from dating this year', ph: 'For example: December, and one weekend each season.' }] },
    roots: {
      christian: 'Many Christian traditions speak of hope, perseverance and lament, of being held in difficulty rather than expected to be strong alone. Consider what community and prayer could hold for you.',
      muslim: 'Many Muslim traditions speak of sabr, patient perseverance, and of tawakkul, trusting while still acting. Consider how patience and effort can work together for you.',
      jewish: 'Many Jewish traditions hold lament and hope together, and value community support in hard seasons. Consider who sits with you, as well as what you hope for.',
      hindu: 'Many Hindu traditions speak of acting with care while holding the outcome lightly, and of steadiness through change. Consider what that balance looks like for you.',
      buddhist: 'Many Buddhist traditions teach compassion for oneself in suffering and equanimity amid change. Consider how kindness toward yourself could be your first response to a setback.',
      secular: 'Consider what steady, humane philosophies or practices have helped you through difficulty, and how you can carry them into dating.'
    },
    foryou: [{ when: 'gentle', text: 'If you have been hurt before, begin with the support side. A counsellor, a friend and a routine make everything else easier.' }],
    embrace: [
      ['Resting as part of the plan', 'Pushing through exhaustion'],
      ['People around you', 'Carrying it alone'],
      ['A full life beyond dating', 'Making dating your whole identity'],
      ['Seeking help when low for long', 'Waiting until it is unbearable']]
  };

  D.CONTENT['13.5'] = {
    lead: 'Everything in this module is only useful if it is ready before you need it. Gather it into one plan, and share it with someone you trust.',
    story: { h: 'Story: Wanjiru, 31, Nairobi', p: [
      'Wanjiru had been caught off guard twice: once by a pushy date and once by a hurtful rejection. She decided to write one page: her safety routine, her early-warning signs, who she would call, her exit sentence, and what she would do after a no.',
      'She gave a copy to her friend Mwende and put another in her phone. A few months later, a match started pushing her to move the chat to a private app and asked about her savings. She read her page, stopped replying and told Mwende. She said, “Having it written meant I did not have to think. I only had to follow it.”',
      'Wanjiru is a composite character.'] },
    framework: { h: 'Framework: one page, one person', intro: 'Keep it short and findable.', items: [
      ['Safety routine:', 'before, during and after any new meeting.'],
      ['Early warnings:', 'the signs that make you stop and check.'],
      ['Your people:', 'who knows, who you call, and what you will say.'],
      ['After a no:', 'your steps for the evening and the next day.'],
      ['Rest and review:', 'when you will pause, and when you will review how dating is going.']] },
    exercise: { h: 'Exercise: your plan', intro: 'About 35 minutes. Gather what you wrote in this module.', blocks: [
      { t: 'summary13' },
      { t: 'ta', k: 'call', label: 'The three people I will call, in order', rows: 2, ph: 'Names, and what I will say.' },
      { t: 'ta', k: 'review', label: 'When I will review my plan and how dating is going', rows: 2, ph: 'A real date, and a question to ask myself.' },
      { t: 'inp', k: 'share', label: 'Who will have a copy of my plan', ph: 'A friend, a sister, a counsellor.' },
      { t: 'p', text: 'If something in this module brought up something from your past or present that is hard, please talk to someone you trust or a local support service. You deserve support.' }] },
    foryou: [{ when: 'gentle', text: 'You do not have to feel brave to have a plan. A plan is what lets you be brave when it matters.' }],
    embrace: [
      ['One page, shared with one person', 'A plan only in your head'],
      ['Reviewing it from time to time', 'Writing it once and forgetting'],
      ['Following your plan under pressure', 'Negotiating with it'],
      ['Asking for help early', 'Waiting until it is serious']]
  };

  D.SCENARIOS.push(
    { id: 's13-1', module: 13, title: 'Can I borrow a little?',
      setup: 'You have been messaging Victor from an app for five weeks. He is warm and says he loves you. He lives abroad for work and cannot video call. Tonight he writes that his account is frozen and asks you to send a small amount, just for two days.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Reply, “I do not send money to anyone I have not met. If this is real, we can sort it out when we meet.” Then tell a friend and report the profile.',
          protects: 'It protects your money and keeps you in control.', cost: 'He may disappear, which tells you what you needed to know.',
          try: 'Tell your bank if you sent anything earlier.' },
        { id: 'b', tag: 'accommodate', text: 'Send a small amount to show you trust him.',
          protects: 'It avoids a conflict.', cost: 'It confirms you will pay, and the requests grow.',
          try: 'Trust is built by actions over time, not by money.' },
        { id: 'c', tag: 'react', text: 'Send an angry message and block him at once.',
          protects: 'It ends the contact.', cost: 'You skip reporting and telling someone.',
          try: 'Block, then report and tell a friend.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing and quietly stop replying, ashamed.',
          protects: 'It avoids embarrassment.', cost: 'He may target others, and you carry it alone.',
          try: 'Telling one friend usually brings relief.' },
        { id: 'e', tag: 'ruminate', text: 'Spend days wondering if you are being unfair and he is genuine.',
          protects: 'It feels charitable.', cost: 'Doubt gives the scam time to work.',
          try: 'Apply your rule about money. It was written for exactly this.' }
      ] },
    { id: 's13-2', module: 13, title: 'He wants to see my phone',
      setup: 'Your boyfriend of three months says that if you loved him you would have nothing to hide, and asks for your phone passcode. Last week he was upset that you saw friends without telling him first.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say calmly, “My phone is private, and so is yours. I will not be checked on.” Tell a trusted friend what is happening.',
          protects: 'It keeps your privacy and brings in support.', cost: 'He may react badly, which is information.',
          try: 'If he becomes frightening, do not argue. Leave safely and call someone.' },
        { id: 'b', tag: 'accommodate', text: 'Give him the passcode to keep the peace.',
          protects: 'It stops the argument.', cost: 'It sets a pattern of control that tends to grow.',
          try: 'Control is not love. Write down what has changed in the last weeks.' },
        { id: 'c', tag: 'react', text: 'Shout and demand his phone instead.',
          protects: 'It feels fair.', cost: 'It escalates and puts you in a contest.',
          try: 'State your boundary once, calmly.' },
        { id: 'd', tag: 'withdraw', text: 'Stop seeing friends so there is nothing to argue about.',
          protects: 'It removes the trigger.', cost: 'It isolates you, which is how control deepens.',
          try: 'Keep your friends close. They notice what you cannot.' },
        { id: 'e', tag: 'ruminate', text: 'Tell yourself he is just insecure and will change.',
          protects: 'It preserves hope.', cost: 'It delays action while the pattern builds.',
          try: 'Look at the pattern, not the promise, and speak to someone you trust.' }
      ] },
    { id: 's13-3', module: 13, title: 'Not feeling it',
      setup: 'After four dates, Samuel writes that you are lovely, but he does not feel a romantic connection. You had started to hope. You feel foolish and are tempted to write a long reply.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Reply, “Thank you for telling me. I appreciate your honesty. I wish you well.” Then take a walk and call a friend.',
          protects: 'It keeps your dignity and lets you move on.', cost: 'The disappointment is still there.',
          try: 'Let yourself feel it for an evening, then do one small thing the next day.' },
        { id: 'b', tag: 'accommodate', text: 'Beg him to give it a little longer.',
          protects: 'It keeps the door open.', cost: 'It puts your worth in his hands.',
          try: 'A reluctant yes is not what you want.' },
        { id: 'c', tag: 'react', text: 'Send a sharp message about wasting your time.',
          protects: 'It releases hurt.', cost: 'It leaves a bitter last word.',
          try: 'Write the sharp message, then do not send it.' },
        { id: 'd', tag: 'withdraw', text: 'Delete the apps and promise yourself you are done with dating.',
          protects: 'It stops the pain.', cost: 'One no becomes a long retreat.',
          try: 'Rest for a week, then decide.' },
        { id: 'e', tag: 'ruminate', text: 'Go over every message to find what you did wrong.',
          protects: 'It feels like learning.', cost: 'It turns a no about fit into a flaw in you.',
          try: 'Ask one question: what did I learn? Then stop.' }
      ] },
    { id: 's13-4', module: 13, title: 'Worn out',
      setup: 'It has been a year of apps and dates. A friend has introduced you to someone who seems nice. You feel tired and cynical, and you have started cancelling plans.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Tell your friend, “I am tired. I want to pause for six weeks, then see how I feel.” Plan something you enjoy in the meantime.',
          protects: 'It protects your energy and keeps the door open.', cost: 'You may feel you are losing time.',
          try: 'Put a date in your diary to review.' },
        { id: 'b', tag: 'accommodate', text: 'Go on the date to avoid disappointing your friend.',
          protects: 'It pleases her.', cost: 'It spends energy you do not have.',
          try: 'You can say not yet.' },
        { id: 'c', tag: 'react', text: 'Snap that dating is pointless and you are done.',
          protects: 'It ends the pressure.', cost: 'It damages a supportive friendship.',
          try: 'Say it warmly: I need a break.' },
        { id: 'd', tag: 'withdraw', text: 'Stop answering messages and stay home most evenings.',
          protects: 'It avoids effort.', cost: 'It deepens the tiredness and loneliness.',
          try: 'Keep one small, easy plan each week.' },
        { id: 'e', tag: 'ruminate', text: 'Wonder for weeks whether something is wrong with you.',
          protects: 'It feels thoughtful.', cost: 'It drains the energy you need.',
          try: 'Talk to someone you trust. If the low mood lasts, see a doctor or counsellor.' }
      ] }
  );

  D.ASK.push(
    { id: 'scam', title: 'Scams and requests for money', domains: ['d11'], modules: [13],
      keys: ['scam', 'scammer', 'romance fraud', 'fraud', 'catfish', 'fake profile', 'send money', 'asks for money', 'asked for money', 'borrow money', 'gift card', 'crypto', 'investment', 'wire money', 'never video call', 'cannot video call'],
      answer: ['Be careful with anyone who moves fast, avoids video calls or meeting, and then has a crisis that needs money, gift cards, crypto or an investment. Do not send money to someone you have not met and known for a long time. Stop, tell a person you trust, and report the profile.',
        'If you have already sent money, tell your bank straight away and report it. This happens to clever, careful people, and it is not your fault. Lessons 13.1 and 13.2 help you write your rule.'] },
    { id: 'rejection', title: 'Handling rejection', domains: ['d11'], modules: [13],
      keys: ['rejected', 'rejection', 'turned me down', 'said no to me', 'not interested in me', 'does not like me', 'not feeling it', 'friend zone', 'hurts to be', 'how to say no', 'turn him down'],
      answer: ['A no is information about fit and timing, not a verdict on your worth. Allow one evening of feeling it, say one kind thing to yourself, and take a small step the next day.',
        'To give a no, be clear, kind and brief: you enjoyed meeting, you do not feel a romantic connection, and you wish them well. Lesson 13.3 helps you prepare both.'] },
    { id: 'resilience', title: 'When dating wears you out', domains: ['d11'], modules: [13],
      keys: ['tired of dating', 'dating fatigue', 'give up on dating', 'give up on love', 'burnt out', 'keep going', 'bounce back', 'discouraged', 'losing hope', 'lose hope', 'cynical'],
      answer: ['Weariness is a sign to rest, not a sign to quit. Plan a break, keep one easy social plan each week, and lean on people who know you. Hope returns more easily when life is full without the outcome.',
        'If sadness or hopelessness is lasting or getting heavier, please talk to a doctor, counsellor or someone you trust. Lesson 13.4 helps you see what to build first.'] },
    { id: 'abuse', title: 'Abuse, control and feeling unsafe', domains: ['d11'], modules: [13],
      keys: ['abusive', 'abuse', 'hits me', 'hit me', 'violent', 'violence', 'coercive', 'forces me', 'forced me', 'checks my phone', 'stalking', 'stalk', 'harass', 'unsafe', 'not safe', 'afraid to leave', 'trapped'],
      answer: ['If someone hurts, frightens, threatens, isolates or controls you, it is not your fault and it is not a communication problem to solve. Tell someone you trust, contact a local support service, and if you are in danger, contact your local emergency service now.',
        'Leaving can be the riskiest time, so plan it with support rather than alone. Keep records, keep key documents and a bag somewhere safe, and know where you could go. Lesson 13.2 helps you prepare.'] }
  );

  D.REFLECT = D.REFLECT || {};
  D.REFLECT[13] = {
    idea: 'Safety and resilience are forms of self-respect. You can protect yourself, hear a no and keep your hope, all at once, because you are worth the care.',
    qs: ['Who in my life makes me feel safe, and have I let them know?', 'What would it mean to trust that a no is not the end of my story?']
  };
})();
