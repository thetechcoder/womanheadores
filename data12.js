/* Module 10: Emotional Intelligence and Communication. Phase 3 begins. Conflict skills never apply to abuse, and the module says so. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[10] = {
    title: 'Emotional Intelligence and Communication',
    intro: 'Most relationships are not ended by one big thing. They are worn down by small misunderstandings that nobody repairs. This module helps her listen well, say what she needs, read the emotional temperature of a moment, argue fairly, apologise and forgive, and use messages and calls with care.',
    safety: 'These skills are for two people who both mean well. They are not for abuse. Contempt, threats, intimidation, controlling your phone, money or movements, being frightened to speak, or any violence is not a communication problem, and you cannot fix it by communicating better. Do not apologise for it or take the blame. Tell someone you trust and contact a local support service, and if you are in danger, contact your local emergency service now.'
  };

  [
    { id: '10.1', title: 'Listening and voicing your needs', mins: 40, line: 'Listen to understand, and say what you need without blame.' },
    { id: '10.2', title: 'Reading the emotional temperature', mins: 40, line: 'Notice feelings in yourself and others, and know when to pause.' },
    { id: '10.3', title: 'Healthy conflict', mins: 45, line: 'Disagree fairly, and see your communication snapshot.' },
    { id: '10.4', title: 'Repair and apologising well', mins: 40, line: 'Say sorry properly, receive an apology, and find your way back.' },
    { id: '10.5', title: 'Messages, calls and your plan', mins: 40, line: 'Use texts and calls with care, and write your communication plan.' }
  ].forEach(function (l) { l.module = 10; D.LESSONS.push(l); });

  D.COMMS = {
    listen: { name: 'Listening without defending', body: 'Listening to understand means letting the other person finish, checking what you heard, and holding your reply until they feel heard. It is the single most useful skill in conflict.', practice: 'In your next disagreement, say back what you heard before you answer: "So what you are saying is... Have I got that right?"' },
    voice: { name: 'Saying what you need', body: 'People cannot meet needs they cannot see. A clear, calm request, with no blame and no hints, gives the other person a real chance.', practice: 'Write one need as a plain request: "When X happens, I feel Y, and I would like Z."' },
    pause: { name: 'Pausing when flooded', body: 'When your heart is racing and your thinking narrows, you cannot have a good conversation. A pause is not avoidance if you say when you will return.', practice: 'Agree a sentence for yourself, such as "I need twenty minutes, and then I want to continue," and practise saying it.' },
    repair: { name: 'Repair and apology', body: 'Every couple has misses. What matters is how quickly and honestly they find their way back. A good apology names what you did, owns it and offers to put it right.', practice: 'Think of one old rupture and write the apology you would give, with no "but" in it.' }
  };

  D.CONTENT['10.1'] = {
    lead: 'Being understood is one of the deepest human wishes, and understanding someone is one of the deepest gifts. Both start with two skills: listening and asking.',
    story: { h: 'Story: Nomvula, 34, Durban', p: [
      'Nomvula and Sipho had been dating for six months, and she had begun to feel unseen. She hinted. She sighed. She went quiet and hoped he would notice. He did not. One evening, she snapped about something small, and he asked, genuinely baffled, “Where did that come from?”',
      'That night she wrote down what she actually needed: more time together without phones, and more questions about her day. The next week she said, “I feel a little disconnected lately. Could we keep Sunday evenings phone-free?” He said, “I thought you were happy. Of course.” She said, “I had been waiting for him to read my mind, and he had been waiting to be told.”',
      'Nomvula is a composite character.'] },
    framework: { h: 'Framework: hear it, say it plainly', intro: 'Two skills, each with a few simple moves.', items: [
      ['Listen to understand:', 'let them finish, ask one question, and say back what you heard. People relax when they feel understood.'],
      ['Notice the feeling under the words:', 'behind "you never help" there is often "I feel alone with this".'],
      ['Say it plainly:', 'use the shape "When ___ happens, I feel ___, and I would like ___." It is a request, not an accusation.'],
      ['Needs, not demands:', 'a need can be met in more than one way. A demand allows only one answer and invites a fight.'],
      ['No mind-reading:', 'hints and silent tests rarely work. Say it once, kindly, and give the other person a chance.']] },
    exercise: { h: 'Exercise: your listening and your request', intro: 'About 40 minutes. Use a real situation, big or small.', blocks: [
      { t: 'p', text: 'How do you usually react when someone is upset with you? Choose up to two.' },
      { t: 'chips', k: 'react', max: 2, options: ['Defend myself', 'Go quiet', 'Fix it fast', 'Get upset too', 'Apologise too much', 'Listen well', 'Change the subject', 'Walk away'] },
      { t: 'ta', k: 'need', label: 'A need I have not said out loud', rows: 3, ph: 'For example: more time together without phones.' },
      { t: 'ta', k: 'request', label: 'My request in the form: When ___, I feel ___, and I would like ___', rows: 3, ph: 'Plain, kind and specific.' },
      { t: 'inp', k: 'echo', label: 'My phrase for checking I understood', ph: 'For example: So what I hear is... Is that right?' },
      { t: 'inp', k: 'who', label: 'Who I will practise a request on this week', ph: 'A friend, a sibling, a colleague.' }] },
    foryou: [{ when: 'gentle', text: 'If asking for what you need was unsafe or ignored in the past, begin with small requests to people who respond kindly. Your needs are real, and so is the right to ask.' }],
    embrace: [
      ['Listening until they feel heard', 'Rehearsing your reply while they speak'],
      ['A plain, kind request', 'Hints, sighs and silent tests'],
      ['Needs that leave room for choices', 'Demands that allow one answer'],
      ['Checking what you heard', 'Assuming you know']]
  };

  D.CONTENT['10.2'] = {
    lead: 'Feelings are information. Reading them in yourself and in others, and knowing when to pause, will save you many arguments.',
    story: { h: 'Story: Rin, 39, Sapporo', p: [
      'Rin prided herself on staying calm. In meetings she was composed, and in arguments she went silent and cold. Her partner Haruto found it harder than shouting. “I never know what you feel,” he said. Rin, to her surprise, did not know either.',
      'A counsellor suggested she check her body during a tense moment: her jaw, her chest, her hands. Rin noticed her jaw clenching and her stomach dropping. She learned to name it: “I am feeling hurt, and I am shutting down.” The next time they argued, she said it aloud and added, “I need ten minutes, and then I want to hear you.” Haruto relaxed visibly. Rin said, “I had been calm on the outside and storming inside. Naming it was the beginning.”',
      'Rin is a composite character.'] },
    framework: { h: 'Framework: notice, name and choose', intro: 'A three-step habit.', items: [
      ['Notice:', 'your body gives early signals: tight jaw, fast heart, hot face, a sinking stomach. They arrive before the words.'],
      ['Name:', 'a few simple words go a long way: hurt, scared, ashamed, lonely, tired, angry. Naming a feeling softens its grip.'],
      ['Read the other person:', 'look at tone, pace, face and what they are not saying. Ask rather than assume: "You seem quiet. What is going on for you?"'],
      ['Choose:', 'respond, pause or ask for time. You are never forced to answer in the first second.'],
      ['Timing:', 'hungry, tired, rushed or late at night are poor times for hard talks. Ask for a better time.']] },
    exercise: { h: 'Exercise: your feelings map', intro: 'About 40 minutes. Be curious about your body and your words.', blocks: [
      { t: 'p', text: 'Where do you feel stress first? Choose up to two.' },
      { t: 'chips', k: 'body', max: 2, options: ['Jaw or face', 'Chest or heart', 'Stomach', 'Shoulders or neck', 'Hands', 'Head', 'Breath', 'I do not notice until later'] },
      { t: 'p', text: 'Which feelings are hardest for you to name? Choose up to three.' },
      { t: 'chips', k: 'hard', max: 3, options: ['Anger', 'Hurt', 'Fear', 'Shame', 'Jealousy', 'Loneliness', 'Disappointment', 'Guilt', 'Joy and excitement'] },
      { t: 'ta', k: 'last', label: 'The last time I felt a strong emotion in a relationship', rows: 3, ph: 'What happened, what I felt, what I did.' },
      { t: 'inp', k: 'phrase', label: 'My sentence for asking for time', ph: 'For example: I need ten minutes, and then I want to talk.' },
      { t: 'inp', k: 'ask', label: 'My way of checking in with someone else', ph: 'For example: You seem quiet. What is going on for you?' }] },
    foryou: [{ when: 'gentle', text: 'If strong feelings feel overwhelming or frightening, you do not have to handle them alone. A counsellor or doctor can help, and a trusted friend can sit with you.' }],
    embrace: [
      ['Noticing your body early', 'Waiting until you explode or shut down'],
      ['Naming the feeling in a few words', 'Burying it or acting it out'],
      ['Asking what is going on for them', 'Assuming you know their mind'],
      ['Asking for a better time', 'Fighting when exhausted or hungry']]
  };

  D.CONTENT['10.3'] = {
    lead: 'The goal of an argument is not to win. It is to understand each other and decide something together. How you fight matters more than how often.',
    story: { h: 'Story: Ximena, 37, Lima', p: [
      'Ximena and Diego argued about the same thing every few weeks: who did more at home. Each time it escalated into old grievances, raised voices and a slammed door. Afterwards, neither could say what had been decided.',
      'They agreed on a few ground rules: one topic at a time, no bringing up the past, no name-calling, and either person could call a twenty-minute pause. The next time, Ximena felt her voice rise, said, “I need twenty minutes,” and left the room. When they returned, Diego said, “I am sorry I made it sound like you do nothing.” They agreed on a simple weekly split. Ximena said, “We still disagree. We just don’t damage each other doing it.”',
      'Ximena is a composite character.'] },
    framework: { h: 'Framework: fair fighting', intro: 'A few rules turn a fight into a conversation.', items: [
      ['One topic:', 'stay with the issue at hand, and leave the old ones for another day.'],
      ['Start soft:', 'begin with the concern, not the charge. "I am worried about..." lands better than "You always...".'],
      ['No contempt:', 'sarcasm, eye-rolling, name-calling and mockery do more damage than the original issue.'],
      ['Pause when flooded:', 'say that you need time and when you will be back. Come back.'],
      ['Aim to decide:', 'end with a small agreement, or an agreement to disagree, and a time to revisit it.'],
      ['The limit:', 'these rules apply between two people who respect each other. If one is frightened of the other, it is not conflict. It is a safety issue.']] },
    exercise: { h: 'Exercise: your communication snapshot', intro: 'About 45 minutes. This is a snapshot, not a score of your relationships.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'listen', text: 'In a disagreement, I listen and check what I heard before I reply.' },
        { axis: 'voice', text: 'I say what I need clearly and calmly, without hints.' },
        { axis: 'pause', text: 'When I am flooded, I can pause and come back.' },
        { axis: 'repair', text: 'I can apologise and reconcile without dragging it out.' }] },
      { t: 'result', fn: 'comms' },
      { t: 'p', text: 'In conflict, I tend to...' },
      { t: 'chips', k: 'style', max: 2, options: ['Avoid it', 'Explode', 'Go cold', 'Give in', 'Bring up the past', 'Stay calm', 'Cry', 'Look for solutions'] },
      { t: 'ta', k: 'rules', label: 'Three ground rules I would want in a relationship', rows: 3, ph: 'For example: no name-calling, a pause when needed, no bringing up the past.' },
      { t: 'ta', k: 'line', label: 'What would show me this is not ordinary conflict but something unsafe', rows: 3, ph: 'Fear, threats, control, contempt as a habit.' }] },
    foryou: [{ when: 'gentle', text: 'If you grew up with shouting or silence, calm disagreement may feel unnatural at first. Practise with safe people, and expect it to get easier.' }],
    embrace: [
      ['One topic at a time', 'Dragging in every old grievance'],
      ['A soft start and a clear concern', 'A harsh opening that starts the fight'],
      ['A pause with a return time', 'Storming out or going silent for days'],
      ['Treating fear as a safety issue', 'Trying to communicate your way out of abuse']]
  };

  D.CONTENT['10.4'] = {
    lead: 'Every relationship has misses. What decides its health is how quickly and honestly two people find their way back.',
    story: { h: 'Story: Hadiza, 41, Kano', p: [
      'After an argument, Hadiza’s husband used to say, “I am sorry you feel that way,” and consider the matter closed. She would go quiet for days. When she finally raised it, they argued again, now about the silence.',
      'A friend suggested she tell him what a repair looked like for her. Hadiza said, “When I say I am hurt, I would like you to say what you did, say you are sorry for it, and ask what would help.” The next time, he tried. “I raised my voice and called your idea silly. I am sorry. What would help?” Hadiza felt her shoulders drop. She said, “I did not need a perfect apology. I needed one that was about what he did.”',
      'Hadiza is a composite character.'] },
    framework: { h: 'Framework: apologise, receive, return', intro: 'Repair has three parts.', items: [
      ['Apologise well:', 'name what you did, say you are sorry for it, own the effect, and offer to put it right. Leave out "but" and "if you felt".'],
      ['Receive an apology:', 'you may need time. You can say, "Thank you, I need a little while," and still mean it.'],
      ['Return:', 'after a rupture, do something small and warm together. Reconnection is part of repair.'],
      ['Forgiveness:', 'it is not forgetting, and it is not the same as trust. Trust returns with changed behaviour over time.'],
      ['Pattern, not only moment:', 'a sincere apology followed by the same behaviour every week is not repair. Look at what changes.']] },
    exercise: { h: 'Exercise: your apology and your repair', intro: 'About 40 minutes. Use something real, and keep it kind to yourself.', blocks: [
      { t: 'ta', k: 'apology', label: 'An apology I owe, in the form: I did..., I am sorry for it, and I would like to...', rows: 4, ph: 'Specific, with no "but" and no excuses.' },
      { t: 'ta', k: 'receive', label: 'What I need in order to feel an apology is real', rows: 3, ph: 'Naming what happened, taking responsibility, changing something.' },
      { t: 'inp', k: 'back', label: 'A small, warm way I reconnect after a fight', ph: 'For example: a walk, a cup of tea, a hand on the shoulder.' },
      { t: 'ta', k: 'old', label: 'An old hurt I am ready to loosen my grip on, or need more help with', rows: 3, ph: 'You can name it without sending anything.' }] },
    roots: {
      christian: 'Many Christian traditions place forgiveness and reconciliation at the centre of life, and speak of being reconciled with another before offering a gift. Consider whom you could reconcile with, and how.',
      muslim: 'Many Muslim traditions value afw, pardon, and sulh, reconciliation, and teach that forgiving is a high form of character. Consider what pardon and reconciliation could look like in your life.',
      jewish: 'Many Jewish traditions describe teshuvah, return, as including asking forgiveness from the person you have wronged, and giving it when it is sincerely asked. Consider who you could ask, or forgive.',
      hindu: 'Many Hindu traditions value kshama, forgiveness, as a mark of strength and inner peace. Consider what you are carrying that forgiveness could set down.',
      buddhist: 'Many Buddhist traditions teach releasing resentment through compassion for yourself and others, which is not the same as excusing harm. Consider what compassion could loosen.',
      secular: 'Consider how honesty, responsibility and repair connect to the values you wrote in Module 3, and what they ask of you in one relationship.'
    },
    foryou: [{ when: 'gentle', text: 'If you were hurt badly, forgiving is not required, and it never means going back to someone who is unsafe. You can forgive for your own peace and still keep your distance.' }],
    embrace: [
      ['A specific apology with no "but"', '"I am sorry you feel that way"'],
      ['Taking time to receive an apology', 'Forcing yourself to forgive on the spot'],
      ['A small, warm return', 'Pretending nothing happened'],
      ['Looking for changed behaviour', 'Accepting the same apology on repeat']]
  };

  D.CONTENT['10.5'] = {
    lead: 'Messages and calls are where many relationships are quietly made or strained. A few habits keep them kind, clear and calm.',
    story: { h: 'Story: Elodie, 35, Lyon', p: [
      'Elodie and Mathieu were in the early weeks of dating. She was a fast texter and he was not. His slow replies set off a familiar dread. One night, after an unanswered message, she wrote a long, pointed text about feeling ignored. She stopped, saved it as a draft and slept on it.',
      'The next morning, she deleted the draft and wrote instead, “I like talking to you, and I notice I get anxious when I do not hear back. Could we talk about what suits us both?” He called her at lunch, explained that he disliked his phone, and suggested a call twice a week. Elodie said, “The first message would have started a fight. The second started a conversation.”',
      'Elodie is a composite character.'] },
    framework: { h: 'Framework: slow down and match the medium', intro: 'Four habits for the digital side of love.', items: [
      ['Sleep on heavy messages:', 'write it, save it as a draft and decide in the morning. Most angry messages never need to be sent.'],
      ['Match the medium to the message:', 'logistics and warmth by text, feelings and hard topics by voice or in person, and break-ups never by text unless you are unsafe.'],
      ['Agree rhythms:', 'say what suits you, such as how often to message and when to call. Differences are normal and negotiable.'],
      ['Read gently:', 'tone is invisible in text. Assume good intent until you have asked.'],
      ['Protect yourself:', 'do not share passwords, locations or intimate images, and treat someone who demands them as a signal.']] },
    exercise: { h: 'Exercise: your messaging habits and your communication plan', intro: 'About 40 minutes. Gather what you have learned in this module.', blocks: [
      { t: 'ta', k: 'rhythm', label: 'The messaging and calling rhythm that suits me', rows: 2, ph: 'How often, what times, texts or calls.' },
      { t: 'inp', k: 'draft', label: 'My rule for heavy messages', ph: 'For example: save the draft and sleep on it.' },
      { t: 'inp', k: 'medium', label: 'The topics I will always take to voice or in person', ph: 'For example: hurt, money, plans, apologies.' },
      { t: 'inp', k: 'privacy', label: 'One digital boundary I will keep', ph: 'For example: I do not share passwords or my live location.' },
      { t: 'inp', k: 'practice1', label: 'The communication skill I will practise first', ph: 'For example: saying back what I heard.' },
      { t: 'ta', k: 'support', label: 'Who I can talk to if communication is not enough', rows: 2, ph: 'A friend, a counsellor, a support service.' },
      { t: 'summary10' }] },
    foryou: [{ when: 'gentle', text: 'If you feel monitored, pressured to share your phone or location, or punished for not replying fast enough, that is a safety signal. Talk to someone you trust.' }],
    embrace: [
      ['Sleeping on a heavy message', 'Sending it at midnight'],
      ['Voice or in person for hard topics', 'Arguing by text'],
      ['Agreed rhythms that suit you both', 'Silent tests of how fast he replies'],
      ['Privacy as a normal boundary', 'Handing over passwords to prove love']]
  };

  D.SCENARIOS.push(
    { id: 's10-1', module: 10, title: 'The forgotten day',
      setup: 'Last week was your birthday, and Femi, whom you have dated for six months, forgot. He apologised quickly but the hurt sits with you. You also remember you never told him how much birthdays matter to you.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “It hurt that you forgot, and I should also have told you how much birthdays mean to me. Could we plan for next time?”',
          protects: 'It names the hurt and your part, and asks for something concrete.', cost: 'It takes honesty about a tender spot.',
          try: 'Use the shape: when this happened, I felt this, I would like this.' },
        { id: 'b', tag: 'accommodate', text: 'Say, “It is fine, I understand,” and carry the sadness.',
          protects: 'It avoids a fuss.', cost: 'The need stays unspoken, and the hurt grows.',
          try: 'Tell him once, kindly, what you would like.' },
        { id: 'c', tag: 'react', text: 'Bring it up in the middle of another argument as proof he does not care.',
          protects: 'It releases the hurt.', cost: 'It buries the real issue under an attack.',
          try: 'Raise it on its own, at a calm time.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing and become distant for a few days.',
          protects: 'It avoids confrontation.', cost: 'He is left guessing and may not connect it to the birthday.',
          try: 'Say one honest sentence instead of going quiet.' },
        { id: 'e', tag: 'ruminate', text: 'Replay it nightly and conclude he does not really love you.',
          protects: 'It keeps you guarded.', cost: 'It turns one miss into a verdict.',
          try: 'Ask him, and watch whether he listens and changes.' }
      ] },
    { id: 's10-2', module: 10, title: 'The raised voice',
      setup: 'You and Kwabena are arguing about weekend plans. He raises his voice, your heart is pounding, and you feel your thoughts narrowing. It is the first time he has shouted.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say calmly, “I cannot talk well when voices are raised. I need twenty minutes, and then I want to continue.”',
          protects: 'It protects the conversation and shows him your limit.', cost: 'He may be irritated.',
          try: 'Watch what he does when you pause. His response tells you a lot.' },
        { id: 'b', tag: 'accommodate', text: 'Give in on the plans to calm him down.',
          protects: 'It stops the shouting.', cost: 'It teaches that raising his voice works.',
          try: 'You can pause without giving in.' },
        { id: 'c', tag: 'react', text: 'Shout back.',
          protects: 'It matches his energy.', cost: 'It escalates and nobody listens.',
          try: 'Lower your voice and slow your breath first.' },
        { id: 'd', tag: 'withdraw', text: 'Go silent and leave without saying anything.',
          protects: 'It stops the argument.', cost: 'He is left in the dark, and the topic stays open.',
          try: 'Say that you are pausing and when you will return.' },
        { id: 'e', tag: 'ruminate', text: 'Say nothing, then lie awake wondering whether this is who he really is.',
          protects: 'It keeps you alert.', cost: 'It costs you sleep and gives you no information.',
          try: 'Notice if it repeats. One shout is a signal to watch, and a pattern of shouting or fear is a safety issue.' }
      ] },
    { id: 's10-3', module: 10, title: 'The non-apology',
      setup: 'Ivan snapped at you in front of friends and said you were “too sensitive.” Later he says, “I am sorry you took it that way,” and expects the matter closed.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “Thank you for coming back to it. What helps me is hearing what you did and that you are sorry for it. Could you try that?”',
          protects: 'It teaches him what repair looks like for you.', cost: 'It asks him to do the work.',
          try: 'Watch whether he can adjust, and whether it changes the next time.' },
        { id: 'b', tag: 'accommodate', text: 'Say, “It is fine,” though it is not.',
          protects: 'It ends the awkwardness.', cost: 'It tells him that is enough.',
          try: 'If it matters, say so once, kindly.' },
        { id: 'c', tag: 'react', text: 'Snap, “That is not an apology!” and list everything he has done wrong.',
          protects: 'It states the truth.', cost: 'It buries your point in an attack.',
          try: 'Keep to this one event.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing, and keep a little more distance.',
          protects: 'It avoids a fight.', cost: 'Resentment builds with no repair.',
          try: 'Use one sentence about what you need.' },
        { id: 'e', tag: 'ruminate', text: 'Spend days building a case about his character.',
          protects: 'It keeps you cautious.', cost: 'It confuses a pattern with a moment.',
          try: 'Watch how he responds to a clear request.' }
      ] },
    { id: 's10-4', module: 10, title: 'The eleven o’clock message',
      setup: 'It is 11 p.m. Tariq cancelled your plans again today. You are upset and have drafted a long, pointed message listing everything that is wrong. Your thumb hovers over send.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Save it as a draft, sleep, and send a short, calm message in the morning asking to talk tonight.',
          protects: 'It protects the relationship and your point.', cost: 'You sit with the feeling overnight.',
          try: 'Re-read the draft tomorrow and keep only the request.' },
        { id: 'b', tag: 'accommodate', text: 'Delete it and say nothing, telling yourself it does not matter.',
          protects: 'It avoids conflict.', cost: 'The issue returns.',
          try: 'Raise it in a calm voice at a good time.' },
        { id: 'c', tag: 'react', text: 'Send it.',
          protects: 'It releases the pressure.', cost: 'It starts a fight by text, and you cannot unsend it.',
          try: 'Next time wait until morning.' },
        { id: 'd', tag: 'withdraw', text: 'Mute him for a few days and punish him with silence.',
          protects: 'It makes a point.', cost: 'He is confused, and trust erodes.',
          try: 'Tell him you need time and when you will be in touch.' },
        { id: 'e', tag: 'ruminate', text: 'Stay awake reading the draft over and over.',
          protects: 'It feels like doing something.', cost: 'It costs you rest and clarity.',
          try: 'Put the phone down. Decide in daylight.' }
      ] }
  );

  D.ASK.push(
    { id: 'conflict', title: 'Arguments and fighting fairly', domains: ['d10'], modules: [10],
      keys: ['argue', 'arguing', 'argument', 'arguments', 'we fought', 'fighting', 'fight with him', 'shouting', 'yelling', 'raise my voice', 'conflict', 'we keep arguing', 'same fight'],
      answer: ['Healthy conflict is one topic at a time, a soft start, no contempt, and a pause when either person is flooded, with a time to return. Aim to understand first and decide second.',
        'These rules are for two people who respect each other. If you are frightened of him, if there are threats, control or contempt as a habit, that is a safety issue, not a communication problem. Tell someone you trust and contact a local support service. Lesson 10.3 walks you through fair fighting.'] },
    { id: 'needs', title: 'Saying what I need', domains: ['d10'], modules: [10],
      keys: ['voice my needs', 'express my needs', 'ask for what i want', 'tell him how i feel', 'bottle up', 'hard to say', 'communicate', 'communication', 'say how i feel', 'does not listen', 'never listens', 'cannot express'],
      answer: ['People cannot meet needs they cannot see. Try the shape: "When ___ happens, I feel ___, and I would like ___." It is a request, not an accusation, and it leaves room for choices.',
        'Listen back too. Say what you heard before you reply. If asking has been unsafe in your past, begin with small requests to people who respond kindly. Lesson 10.1 helps you write yours.'] },
    { id: 'apology', title: 'Apologising and forgiving', domains: ['d10'], modules: [10],
      keys: ['apologise', 'apologize', 'apology', 'say sorry', 'make up after', 'forgive him', 'forgiveness', 'he will not apologise', 'repair', 'patch things up', 'reconcile'],
      answer: ['A good apology names what you did, owns it, and offers to put it right, with no "but" and no "if you felt". Receiving one can take time, and you can say so.',
        'Forgiveness is not forgetting, and it is not the same as trust, which returns with changed behaviour. If someone apologises and repeats the same harm, look at the pattern. Lesson 10.4 helps you write and receive an apology.'] },
    { id: 'digital', title: 'Texting, calls and social media', domains: ['d10'], modules: [10],
      keys: ['read receipts', 'voice notes', 'whatsapp', 'emoji', 'social media', 'phone calls', 'video call', 'long distance messages', 'screen time', 'phone etiquette', 'checking my phone', 'passwords', 'share my location'],
      answer: ['Match the medium to the message: logistics and warmth by text, feelings and hard topics by voice or in person. Sleep on heavy messages, and agree a rhythm that suits you both.',
        'Do not share passwords, intimate images or your live location because someone demands them, and treat pressure about that as a signal. Lesson 10.5 helps you set your own habits.'] }
  );

  D.REFLECT = D.REFLECT || {};
  D.REFLECT[10] = {
    idea: 'To be understood is among the deepest human wishes, and to understand someone is among the deepest gifts. Most of love is the long, patient practice of trying again to do both.',
    qs: ['Who in my life makes me feel truly understood, and what do they do?', 'What is one thing I have needed to say that I could say kindly this week?']
  };
})();
