/* Module 8: Mind and Conversation. Curiosity, listening, questions and opinions held with grace. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[8] = {
    title: 'Mind and Conversation',
    intro: 'Attraction deepens when a conversation is alive. This module helps her feed her curiosity, become both interesting and interested, ask questions that open people up, and hold her opinions with confidence and grace. None of it is about performing or impressing.',
    safety: 'Being interesting does not mean agreeing with everything, knowing everything or hiding what you think. Nothing here assumes a level of education, a language, a country or a set of beliefs. If a man mocks your mind, talks over you every time, or punishes you for disagreeing, that is a signal worth noticing. If a conversation ever feels unsafe, you can end it.'
  };

  [
    { id: '8.1', title: 'Curiosity and reading', mins: 40, line: 'Feed your mind on purpose, and follow the world without drowning in it.' },
    { id: '8.2', title: 'Interesting and interested', mins: 40, line: 'Know your own stories, and give people your full attention.' },
    { id: '8.3', title: 'The art of the good question', mins: 45, line: 'Ask questions that open people up, and see your conversation snapshot.' },
    { id: '8.4', title: 'Opinions with confidence and grace', mins: 40, line: 'Say what you think, disagree kindly, and say "I don’t know" without shame.' },
    { id: '8.5', title: 'Your conversation practice', mins: 40, line: 'Turn what you learned into a small weekly practice.' }
  ].forEach(function (l) { l.module = 8; D.LESSONS.push(l); });

  D.CONVO = {
    curious: { name: 'Feeding your curiosity', body: 'A mind with something to chew on is never short of things to say. Curiosity grows when you follow it a little each week, not when you try to know everything.', practice: 'Choose one topic that pulls at you, and spend twenty minutes this week reading, watching or listening to something about it.' },
    share: { name: 'Sharing your own stories', body: 'People connect through specifics. A short story about something that happened to you, with how it felt, gives the other person something to hold.', practice: 'Prepare three short stories from your life, such as a funny moment, a lesson and something you are proud of, and tell one to a friend this week.' },
    listen: { name: 'Asking and listening', body: 'The people others remember are those who made them feel heard. Follow-up questions, and patience with silence, do more than clever remarks.', practice: 'In your next conversation, ask two follow-up questions before you share your own view, and notice what you learn.' },
    disagree: { name: 'Disagreeing with grace', body: 'You can hold a view firmly and still be kind. Calm disagreement shows self-respect, and it lets the other person show how they handle it.', practice: 'Next time you disagree, say "I see it differently" and give one reason, then ask what led them to their view.' }
  };

  D.CONTENT['8.1'] = {
    lead: 'You do not need to know everything. You need to be curious about something, and willing to say so.',
    story: { h: 'Story: Amara, 33, Toronto', p: [
      'Amara worked long days and spent her evenings scrolling. When a man on a second date asked what she had been reading lately, she realised she could not remember the last thing she had really thought about. She felt flat, and she wondered whether she had become dull.',
      'She decided on one small habit: twenty minutes before bed with a book or a long article on a subject she chose, not one the feed chose. She picked the history of her grandmother’s region. Within a month she was telling friends stories she had not known before. On her next date she said, “I have been reading about how my grandmother’s town was founded, and it is stranger than I thought.” The man leaned in. She said, “I did not become more interesting. I became more interested.”',
      'Amara is a composite character.'] },
    framework: { h: 'Framework: choose, follow and filter', intro: 'Three habits keep a mind alive without exhausting it.', items: [
      ['Choose:', 'two or three topics you are genuinely curious about, for no reason other than that they pull at you.'],
      ['Follow:', 'a small, steady habit: a book, a podcast, a long article, a class. Twenty minutes a day beats a weekend binge.'],
      ['Filter:', 'follow the news in a limited way, once or twice a day from a source you trust, and step away from the endless scroll. Knowing your own region and one wider topic is plenty.'],
      ['Any language, any format:', 'reading in your first language, listening to audio, or learning from a person all count. Your education or reading speed does not limit your curiosity.']] },
    exercise: { h: 'Exercise: your curiosity map', intro: 'About 40 minutes. Follow what pulls you, not what you think you should like.', blocks: [
      { t: 'p', text: 'What are you curious about? Choose up to four.' },
      { t: 'chips', k: 'topics', max: 4, options: ['History', 'Science and nature', 'People and psychology', 'Art and design', 'Music', 'Food and culture', 'Business and money', 'Faith and philosophy', 'Health', 'Technology', 'Travel and places', 'Fiction and stories'] },
      { t: 'inp', k: 'habit', label: 'My small learning habit', ph: 'For example: twenty minutes of reading before bed.' },
      { t: 'ta', k: 'next', label: 'Something I will read, watch or listen to in the next two weeks', rows: 2, ph: 'A title, a person or a topic.' },
      { t: 'ta', k: 'news', label: 'How I will follow the news without being overwhelmed', rows: 2, ph: 'A source, a time of day, a limit.' },
      { t: 'ta', k: 'shame', label: 'Something I feel I should know but do not', rows: 2, ph: 'Write it down, then decide whether you want to learn it or let it go.' }] },
    foryou: [{ when: 'gentle', text: 'If concentration is hard because you are exhausted or low, begin with five minutes. If low mood or poor focus lasts, talk to a doctor or counsellor as well.' }],
    embrace: [
      ['Following what you are genuinely curious about', 'Reading to look impressive'],
      ['Twenty minutes a day', 'A big plan that collapses in a week'],
      ['A limited, trusted way to follow the news', 'Doom-scrolling until you feel flat'],
      ['Saying "I am learning about..."', 'Pretending to know what you do not']]
  };

  D.CONTENT['8.2'] = {
    lead: 'Interesting people have stories to tell and the generosity to listen. The second matters more than the first.',
    story: { h: 'Story: Soo-jin, 36, Busan', p: [
      'Soo-jin was an excellent listener and a terrible talker. On dates she asked questions and gave short answers about herself. One man told her, kindly, “I have talked for two hours and I know almost nothing about you.” She went home embarrassed.',
      'She decided to prepare, not to perform. She wrote down three short stories: the time she got lost in Lisbon and was rescued by a baker, what she learned from her first failed business, and why she loves rainy days. On the next date she shared one of them when the moment came, then asked the man about his own. He said, “That was the best conversation I have had in a year.” She said, “I had always thought my stories were boring. They were just unspoken.”',
      'Soo-jin is a composite character.'] },
    framework: { h: 'Framework: stories in, attention out', intro: 'Good conversation is a balance of giving and receiving.', items: [
      ['Three stories:', 'a funny one, a learning one and a proud one. Keep them short, specific and true.'],
      ['The feeling:', 'say how it felt, not only what happened. Feelings are what people remember.'],
      ['Full attention:', 'put the phone away, look at the person, and let them finish. Listening is a way of showing respect.'],
      ['Balance:', 'aim for a rough half and half. If you tend to talk too little, share more. If you tend to talk too much, pause and ask.']] },
    exercise: { h: 'Exercise: your three stories', intro: 'About 40 minutes. Write them in your own voice.', blocks: [
      { t: 'inp', k: 'funny', label: 'A funny story, in one line', ph: 'For example: the day I got lost in Lisbon.' },
      { t: 'inp', k: 'learn', label: 'A story where I learned something, in one line', ph: 'For example: my first failed business.' },
      { t: 'inp', k: 'proud', label: 'A story I am proud of, in one line', ph: 'For example: the time I stood up for a colleague.' },
      { t: 'p', text: 'In conversations, I usually tend to...' },
      { t: 'chips', k: 'tend', max: 1, options: ['Talk too much', 'Talk too little', 'Balance it well', 'Depends on how nervous I am'] },
      { t: 'ta', k: 'attend', label: 'What distracts me when someone is talking, and what I will do about it', rows: 3, ph: 'Phone, my own thoughts, planning my reply.' }] },
    foryou: [{ when: 'gentle', text: 'If you were taught that talking about yourself is rude or boastful, you can share a small piece and then hand the conversation back. Sharing is generous, not vain.' }],
    embrace: [
      ['Short, specific, true stories', 'Long monologues or vague boasts'],
      ['Saying how it felt', 'Listing facts'],
      ['Full attention on the person in front of you', 'Planning your reply while they speak'],
      ['A fair balance of talking and listening', 'Interrogating, or being interrogated']]
  };

  D.CONTENT['8.3'] = {
    lead: 'One good question can do more than an hour of clever talk. It tells the other person that you care what they think.',
    story: { h: 'Story: Leila, 41, Casablanca', p: [
      'Leila ran out of conversation within ten minutes of meeting anyone. She would ask, “What do you do?” and “Where are you from?”, receive short answers and then fall silent. She believed she was not good with people.',
      'A friend taught her a simple ladder: begin with an open question, follow it with a question about the answer, and finish with one about feelings. When a man told her he was a teacher, she asked, “What made you choose it?” He talked about a teacher who changed his life. She asked, “What is it like when a student finally understands something?” He smiled for the first time that evening. She said, “I did not need to be clever. I needed to be curious about him.”',
      'Leila is a composite character.'] },
    framework: { h: 'Framework: the question ladder', intro: 'Climb one rung at a time.', items: [
      ['Open:', 'questions that need more than yes or no. "What do you enjoy about...?" "How did you get into...?"'],
      ['Follow:', 'a question about their last answer. "What was that like?" "What happened next?"'],
      ['Feel:', 'a question about what it meant. "What made it matter to you?" "How did that feel?"'],
      ['Silence:', 'a pause is allowed. Counting to three before you speak often brings a richer answer.'],
      ['Avoid:', 'rapid-fire questions, interrogation, and questions that are really opinions in disguise.']] },
    exercise: { h: 'Exercise: your questions and your snapshot', intro: 'About 45 minutes. This is a snapshot, not a score of your charm.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'curious', text: 'I follow topics I am curious about every week.' },
        { axis: 'share', text: 'I can share a short story about myself with ease.' },
        { axis: 'listen', text: 'I ask follow-up questions and let people finish.' },
        { axis: 'disagree', text: 'I can disagree kindly without arguing or going quiet.' }] },
      { t: 'result', fn: 'convo' },
      { t: 'ta', k: 'open', label: 'Five open questions I like to ask', rows: 4, ph: 'Questions about work, joy, places, people, ideas.' },
      { t: 'ta', k: 'feelq', label: 'Two questions about feelings that suit me', rows: 2, ph: 'In my own words, not a script.' },
      { t: 'inp', k: 'practise', label: 'Who I will practise on this week', ph: 'A friend, a colleague, a relative.' }] },
    roots: {
      christian: 'Many Christian traditions describe being quick to listen and slow to speak as wisdom. Consider whom you could listen to more fully this week.',
      muslim: 'Many Muslim traditions treasure the seeking of knowledge and good speech. Consider how asking sincere questions could be a form of respect.',
      jewish: 'Many Jewish traditions value questioning as a path to wisdom, and disagreement for the sake of understanding. Consider what you would ask a chavruta.',
      hindu: 'Many Hindu traditions value svadhyaya, self-study, and respectful dialogue between student and teacher. Consider what a good question would open for you.',
      buddhist: 'Many Buddhist traditions teach right speech and deep listening. Consider how full attention could be a form of compassion.',
      secular: 'Consider how curiosity and respect for another person’s mind connect to the values you wrote in Module 3.'
    },
    foryou: [{ when: 'gentle', text: 'If questions feel like an interrogation, begin with comments such as "That sounds interesting" and let the other person fill the silence.' }],
    embrace: [
      ['Open questions that need a story', 'Yes-or-no questions that end the topic'],
      ['Following up on what they just said', 'Waiting for your turn to speak'],
      ['Comfortable pauses', 'Filling every silence'],
      ['Real curiosity', 'Questions asked only to appear interested']]
  };

  D.CONTENT['8.4'] = {
    lead: 'A woman who can say what she thinks, kindly and clearly, is easier to trust. Opinions held with grace attract those who value honest minds.',
    story: { h: 'Story: Anneke, 38, Rotterdam', p: [
      'Anneke avoided disagreement. When a date said something she found dismissive about a political issue, she nodded and changed the subject. Later she resented herself, and she suspected he thought she agreed.',
      'She practised one sentence: “I see it differently, and I would like to understand how you got there.” On her next date, the man said something about work and gender that she disagreed with. She used her sentence. He paused, then said, “I had not thought about it that way,” and the conversation became the best part of the evening. A week later, another man bristled at the same sentence and cut the evening short. Anneke said, “Both responses were useful. I learned more in ten minutes than in ten dates of nodding.”',
      'Anneke is a composite character.'] },
    framework: { h: 'Framework: view, reason and curiosity', intro: 'Hold your view and hold the other person.', items: [
      ['Your view:', 'say it plainly, with "I think" or "I see it differently", not as an attack on the person.'],
      ['Your reason:', 'give one short reason. A view with a reason invites conversation, not a fight.'],
      ['Your curiosity:', 'ask what led them to theirs. Often you will find a shared value under different conclusions.'],
      ['Not knowing:', '"I don’t know enough about that" is a strong sentence. Saying it builds trust.'],
      ['Know your line:', 'disagreement is healthy. Contempt, mockery, shouting and punishing you for having a view are not.']] },
    exercise: { h: 'Exercise: your opinions and your sentences', intro: 'About 40 minutes. Write the version you would really say.', blocks: [
      { t: 'ta', k: 'views', label: 'Three opinions I hold, with one reason each', rows: 4, ph: 'Work, family, society, faith, anything that matters to you.' },
      { t: 'inp', k: 'sentence', label: 'My sentence for disagreeing kindly', ph: 'For example: I see it differently, and I would like to understand how you got there.' },
      { t: 'inp', k: 'notknow', label: 'My sentence for "I don’t know"', ph: 'For example: I don’t know enough about that. What do you think?' },
      { t: 'p', text: 'When I disagree with someone, I usually...' },
      { t: 'chips', k: 'tendency', max: 1, options: ['Go quiet', 'Agree to keep the peace', 'Argue hard', 'Change the subject', 'Say it calmly'] },
      { t: 'ta', k: 'line', label: 'What would show me that disagreement is not safe with someone', rows: 3, ph: 'Contempt, mockery, shouting, punishment for having a view.' }] },
    foryou: [{ when: 'gentle', text: 'If speaking up has been punished in your past, start with low-stakes topics and trusted people. You do not have to debate anyone to be a woman with a mind.' }],
    embrace: [
      ['Saying what you think, with a reason', 'Nodding along to keep the peace'],
      ['Curiosity about how they got there', 'Trying to win'],
      ['"I do not know enough about that"', 'Bluffing to avoid looking uninformed'],
      ['Treating contempt as information', 'Accepting mockery as banter']]
  };

  D.CONTENT['8.5'] = {
    lead: 'Conversation is a skill, and skills grow with small, regular practice. This lesson turns your reflections into a weekly routine.',
    story: { h: 'Story: Paloma, 44, Bogotá', p: [
      'Paloma attended a friend’s dinner and found herself the quiet one at a table of lively talkers. She left thinking, “I have so much to say, and I never say it.” A friend suggested a gentle experiment: one conversation a week where she deliberately practised one skill.',
      'In week one she asked two follow-up questions. In week two she told one of her three stories. In week three she disagreed, politely, about a film. By the end of two months, she noticed that the dread before social events had eased. At her cousin’s wedding she spent twenty minutes in deep conversation with a widower who had read the same obscure novel. She said, “I did not transform. I practised, one small conversation at a time.”',
      'Paloma is a composite character.'] },
    framework: { h: 'Framework: one skill a week', intro: 'Treat conversation like a gentle training plan.', items: [
      ['Pick one skill:', 'a follow-up question, a short story, a kind disagreement, a pause.'],
      ['Pick one place:', 'a coffee with a friend, a work lunch, a family call. Low stakes first.'],
      ['Notice, don’t judge:', 'afterwards, write one line about what went well and one about what you would try next.'],
      ['Rest:', 'conversation takes energy. Allow recovery time, especially if you are introverted.']] },
    exercise: { h: 'Exercise: your weekly practice', intro: 'About 40 minutes. Keep each week small.', blocks: [
      { t: 'inp', k: 'skill1', label: 'Week 1 skill', ph: 'For example: ask two follow-up questions.' },
      { t: 'inp', k: 'skill2', label: 'Week 2 skill', ph: 'For example: tell one of my three stories.' },
      { t: 'inp', k: 'skill3', label: 'Week 3 skill', ph: 'For example: disagree kindly once.' },
      { t: 'ta', k: 'where', label: 'Where I will practise, and with whom', rows: 2, ph: 'A friend, a colleague, a class, a family call.' },
      { t: 'ta', k: 'rest', label: 'How I will recover afterwards', rows: 2, ph: 'A walk, quiet time, a nap.' },
      { t: 'summary8' }] },
    foryou: [{ when: 'gentle', text: 'If conversation leaves you drained, shorter and more frequent is better than long and rare. Introverts are not worse at conversation, only more careful with their energy.' }],
    embrace: [
      ['One skill at a time', 'Trying to fix everything at once'],
      ['Low-stakes practice with people who like you', 'Waiting for a date to try something new'],
      ['One line of reflection after each practice', 'Replaying it in your head for days'],
      ['Rest as part of the plan', 'Pushing through exhaustion']]
  };

  D.SCENARIOS.push(
    { id: 's8-1', module: 8, title: 'The silence',
      setup: 'On a first date with Samuel, the conversation stalls after ten minutes. You both look at your drinks. You can feel the pause stretching.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Smile and say, “Tell me about the best trip you have ever taken.”',
          protects: 'It restarts the conversation with warmth and curiosity.', cost: 'It takes a little courage.',
          try: 'Keep two open questions in your pocket before any date.' },
        { id: 'b', tag: 'accommodate', text: 'Fill the silence by talking quickly about whatever comes to mind.',
          protects: 'It avoids the pause.', cost: 'You may ramble and feel exhausted.',
          try: 'Let a pause last three seconds before you speak.' },
        { id: 'c', tag: 'react', text: 'Check your phone to escape the discomfort.',
          protects: 'It relieves the tension.', cost: 'It tells him you have switched off.',
          try: 'Put the phone away and take one slow breath.' },
        { id: 'd', tag: 'withdraw', text: 'Decide he is not interested and mentally end the date.',
          protects: 'It protects you from rejection.', cost: 'You may miss a person who is simply nervous.',
          try: 'Name the pause lightly: “Is it me, or are we both a bit shy tonight?”' },
        { id: 'e', tag: 'ruminate', text: 'Spend the next ten minutes judging yourself for being boring.',
          protects: 'It keeps you alert.', cost: 'It guarantees you stay distracted.',
          try: 'Redirect your attention to him and ask a question.' }
      ] },
    { id: 's8-2', module: 8, title: 'The strong opinion',
      setup: 'At dinner, Marcus says something sweeping about working mothers that you strongly disagree with. He says it confidently, then waits for your reaction.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say calmly, “I see it differently, and I would like to understand how you got there.”',
          protects: 'It protects your view and invites an honest exchange.', cost: 'He may be uncomfortable.',
          try: 'Watch how he handles being asked a question. Curiosity or contempt tells you a lot.' },
        { id: 'b', tag: 'accommodate', text: 'Nod and say, “I suppose that is one way to see it.”',
          protects: 'It keeps the evening smooth.', cost: 'He may think you agree, and you carry the resentment.',
          try: 'Offer one sentence of your own view, even a short one.' },
        { id: 'c', tag: 'react', text: 'Snap, “That is ridiculous,” and list your arguments.',
          protects: 'It expresses your conviction.', cost: 'It turns a conversation into a contest.',
          try: 'Take a breath and lead with a question.' },
        { id: 'd', tag: 'withdraw', text: 'Go quiet and wait for the evening to end.',
          protects: 'It avoids conflict.', cost: 'He learns nothing about you, and you learn little about him.',
          try: 'Say one honest sentence. It does not have to be a debate.' },
        { id: 'e', tag: 'ruminate', text: 'Say nothing, then replay his words all night and compose arguments in your head.',
          protects: 'It keeps you thoughtful.', cost: 'It costs you sleep and the moment has passed.',
          try: 'Pick one sentence, say it kindly, and let it go.' }
      ] },
    { id: 's8-3', module: 8, title: 'The monologue',
      setup: 'Julian has talked about himself for almost an hour. He asks you nothing. You are starting to feel invisible.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Wait for a pause and say, “I would love to share a bit about me too. Can I tell you about...?”',
          protects: 'It brings balance and tests whether he can listen.', cost: 'He may be surprised.',
          try: 'Notice whether he asks about your story afterwards.' },
        { id: 'b', tag: 'accommodate', text: 'Keep nodding and smiling until the end.',
          protects: 'It keeps him happy.', cost: 'You leave unseen and drained.',
          try: 'Ask yourself whether you want a second date with someone who never asks.' },
        { id: 'c', tag: 'react', text: 'Interrupt sharply, “Do you ever ask questions?”',
          protects: 'It releases your frustration.', cost: 'It humiliates him and ends the chance of learning more.',
          try: 'Take a breath, then redirect with a warm sentence.' },
        { id: 'd', tag: 'withdraw', text: 'Check the time, say you have an early start, and leave.',
          protects: 'It ends a draining evening.', cost: 'You never find out whether he was just nervous.',
          try: 'Try one bridge sentence first, then decide.' },
        { id: 'e', tag: 'ruminate', text: 'Wonder all night whether you are too quiet, or whether he is self-centred.',
          protects: 'It keeps you reflecting.', cost: 'It confuses a pattern with a moment.',
          try: 'Watch what he does after you speak up.' }
      ] },
    { id: 's8-4', module: 8, title: 'The topic you do not know',
      setup: 'Over lunch, Idris talks excitedly about a subject you know almost nothing about, such as astrophysics or a sport you have never followed. He asks, “Do you follow it?”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Smile and say, “Not at all, but I love how excited you are. What got you into it?”',
          protects: 'It honours honesty and curiosity.', cost: 'You admit a gap.',
          try: 'Saying "I do not know" with warmth is attractive.' },
        { id: 'b', tag: 'accommodate', text: 'Pretend you follow it and nod along.',
          protects: 'It avoids looking uninformed.', cost: 'You are caught out or have to keep up the act.',
          try: 'Be curious instead of pretending.' },
        { id: 'c', tag: 'react', text: 'Say, “No, and it sounds boring,” and change the subject.',
          protects: 'It saves you from discomfort.', cost: 'It closes the door on his enthusiasm.',
          try: 'Find the human part: ask what he loves about it.' },
        { id: 'd', tag: 'withdraw', text: 'Go quiet and wait for him to finish.',
          protects: 'It avoids exposure.', cost: 'You miss the chance to connect.',
          try: 'One question is enough to re-enter the conversation.' },
        { id: 'e', tag: 'ruminate', text: 'Spend the rest of the lunch worrying that you seem ignorant.',
          protects: 'It keeps you humble.', cost: 'You stop listening.',
          try: 'Remember that curiosity impresses more than knowledge.' }
      ] }
  );

  D.ASK.push(
    { id: 'conversation', title: 'What to talk about', domains: ['d9'], modules: [8],
      keys: ['what to talk about', 'run out of things to say', 'nothing to say', 'small talk', 'conversation starters', 'boring', 'am i boring', 'bad at conversation', 'conversation', 'talk too much', 'talk too little', 'dull'],
      answer: ['Conversation grows from curiosity. Keep two or three open questions ready, such as "What have you enjoyed lately?" and "How did you get into that?", and follow up on what the person says instead of planning your next line.',
        'Prepare three short stories about yourself, and let pauses last a few seconds. Lessons 8.2 and 8.3 walk you through both.'] },
    { id: 'opinions', title: 'Disagreeing and holding opinions', domains: ['d9'], modules: [8],
      keys: ['disagree', 'disagreement', 'politics', 'political', 'different opinions', 'debate', 'my opinion', 'speak up', 'talks over me', 'interrupts me', 'dismisses my opinion', 'afraid to say what i think'],
      answer: ['You can hold a view and stay kind. Try: "I see it differently, and I would like to understand how you got there." Give one reason, then ask about theirs.',
        'Watch how someone handles it. Curiosity is a good sign. Mockery, contempt or punishing you for having a view is information, and in a pattern it is a warning sign. Lesson 8.4 helps you prepare your own sentences.'] },
    { id: 'reading', title: 'Reading, news and staying informed', domains: ['d9'], modules: [8],
      keys: ['what to read', 'read more', 'books', 'reading habit', 'current affairs', 'stay informed', 'podcast', 'podcasts', 'keep up with the news', 'do not follow the news', 'ignorant', 'not well read'],
      answer: ['You do not need to know everything. Choose two or three topics that pull at you, give them twenty minutes a day, and follow the news in a limited way from a source you trust.',
        'Saying "I do not know much about that, tell me more" is attractive. Lesson 8.1 helps you build a small, steady habit.'] }
  );
})();
