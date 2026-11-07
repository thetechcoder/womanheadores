/* Module 9: Charm and Social Grace. Warmth, play and manners across cultures; never manipulation, never games. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[9] = {
    title: 'Charm and Social Grace',
    intro: 'Charm is warmth made visible: making the people around you feel welcome, at ease and a little more themselves. This module helps her handle manners across cultures, flirt and play with honesty, stay poised when things go wrong, and build a reputation for kindness. It is never about tricks, games or pleasing everyone.',
    safety: 'Charm here means warmth, not manipulation. Flirting is playful and goes both ways, and it stops the moment the other person is uncomfortable, including when that person is you. Customs differ everywhere, and no culture is the standard. Teasing that humiliates is not humour, and a man who calls cruelty "just joking" is showing you something. You never have to drink, eat or accept anything you do not want, and you can leave any gathering that does not feel right.'
  };

  [
    { id: '9.1', title: 'Manners across cultures', mins: 40, line: 'Greet, dine and give with confidence, and know how to ask when you are unsure.' },
    { id: '9.2', title: 'Flirting, humour and play', mins: 40, line: 'Be playful and warm without games, and read how it lands.' },
    { id: '9.3', title: 'Warmth and poise', mins: 45, line: 'Make people feel welcome, recover from awkward moments, and see your grace snapshot.' },
    { id: '9.4', title: 'Gratitude, kindness and reputation', mins: 40, line: 'Build a name people trust through small, consistent acts.' },
    { id: '9.5', title: 'Your charm practice', mins: 40, line: 'Turn what you learned into a few small habits.' }
  ].forEach(function (l) { l.module = 9; D.LESSONS.push(l); });

  D.GRACE = {
    warmth: { name: 'Making people feel welcome', body: 'Warmth is the heart of charm. A real greeting, a name remembered, and attention that does not wander tell people they matter.', practice: 'In your next three encounters, use the person’s name, look up from your phone, and say one specific, kind thing.' },
    poise: { name: 'Recovering from awkward moments', body: 'Everyone spills, forgets a name or says the wrong thing. Poise is not avoiding mistakes. It is a calm recovery, often with a smile.', practice: 'Prepare one calm sentence for a slip, such as "Well, that was not my plan," and practise saying it lightly.' },
    play: { name: 'Play and humour', body: 'Play lightens a room. Gentle humour, including at your own expense, shows confidence, and works best when it includes the other person.', practice: 'Notice one thing that makes you laugh each day, and share it with someone.' },
    kindness: { name: 'Gratitude and kindness', body: 'People remember how you treated them when you did not need anything. Thanks, discretion and generosity build a reputation that arrives before you do.', practice: 'Send one specific thank-you this week, by message, note or in person.' }
  };

  D.CONTENT['9.1'] = {
    lead: 'Good manners are not a rulebook. They are a way of showing that you notice and respect the people around you, and the rules change from place to place.',
    story: { h: 'Story: Valentina, 36, Milan', p: [
      'Valentina was invited to dinner at the home of Kofi’s parents in Accra. She spent days worrying about what to wear, what to bring, and which hand to eat with. The night before, she asked Kofi, “What would make your mother feel respected?” He told her to greet the elders first, to accept the food offered, and to bring fruit.',
      'At the dinner, she did a few things differently from what she was used to, and she said so lightly: “Please tell me if I get anything wrong, I want to do this well.” His mother laughed and passed her more rice. Valentina said, “I did not need to know every custom. I needed to show that I cared, and to ask.”',
      'Valentina is a composite character.'] },
    framework: { h: 'Framework: notice, ask and adapt', intro: 'A short habit works in any country.', items: [
      ['Notice:', 'watch what others do at a meal, a greeting or a gift exchange. Most customs are visible if you pay attention.'],
      ['Ask:', 'one friendly question to someone you trust beats guessing. "What is the custom here?" is flattering, not foolish.'],
      ['Adapt:', 'follow the host’s lead where you can do it comfortably, such as greeting elders first, removing shoes, or waiting to start eating.'],
      ['Keep your own limits:', 'you can decline food, alcohol or a custom politely, with a smile and a simple reason.'],
      ['Repair fast:', 'if you slip, a quick, light apology is enough. People are forgiving of effort.']] },
    exercise: { h: 'Exercise: your customs kit', intro: 'About 40 minutes. Think of a gathering you may attend soon.', blocks: [
      { t: 'p', text: 'Which of these do you want to feel more confident about? Choose up to three.' },
      { t: 'chips', k: 'areas', max: 3, options: ['Greetings and introductions', 'Dining and table customs', 'Gifts and what to bring', 'Dress for the occasion', 'Meeting elders', 'Religious or cultural ceremonies', 'Business meals', 'Tipping and paying'] },
      { t: 'ta', k: 'event', label: 'A gathering I will attend, and what I want to find out first', rows: 3, ph: 'Whose home, what kind of event, who is likely to be there.' },
      { t: 'inp', k: 'ask', label: 'The person I can ask about the custom', ph: 'A friend, a colleague, the host.' },
      { t: 'inp', k: 'decline', label: 'My polite way to decline something I do not want', ph: 'For example: Thank you, that smells wonderful, I will pass on the drink tonight.' },
      { t: 'ta', k: 'slip', label: 'A slip I once made, and what I learned', rows: 2, ph: 'It is probably funnier than you remember.' }] },
    foryou: [{ when: 'gentle', text: 'If social occasions make you anxious, arrive early, bring a small gift, and pick one person to greet properly. One good greeting sets the tone.' }],
    embrace: [
      ['Noticing, asking and adapting', 'Memorising rules and freezing when they differ'],
      ['A light, quick apology', 'Pretending nothing happened'],
      ['Polite limits you can keep', 'Accepting what you do not want to avoid awkwardness'],
      ['Respecting other customs as equal to your own', 'Treating your own as the standard']]
  };

  D.CONTENT['9.2'] = {
    lead: 'Flirting is a conversation in play. It works when it is warm, honest and mutual, and it fails when it becomes a game or a performance.',
    story: { h: 'Story: Ayesha, 32, Dhaka', p: [
      'Ayesha thought flirting meant pretending to be someone else, a bolder, louder version of herself. She tried it once at a wedding and felt like an actor. The man she was talking to looked confused, and the conversation fizzled.',
      'A cousin told her, “Flirting is just letting someone see that you enjoy them.” At a later gathering, Ayesha noticed she was enjoying a conversation about food with a man called Rahim. She smiled, made a small joke about her own terrible cooking, and said, “I would love to see you try to make this dish.” He laughed. She said, “I did not change who I was. I let him see the part that was already having fun.”',
      'Ayesha is a composite character.'] },
    framework: { h: 'Framework: warmth, play and signals', intro: 'Four ideas keep it honest.', items: [
      ['Warmth first:', 'show real interest and enjoyment. A genuine smile and attention are most of it.'],
      ['Play, not performance:', 'light teasing that includes the other person, jokes at your own expense, and curiosity. Never at their expense.'],
      ['Read the response:', 'if they lean in, smile and play back, continue. If they go quiet, step back at once and change the subject.'],
      ['Both ways:', 'flirting is mutual. If it is not, it is not flirting. Your comfort counts as much as theirs.'],
      ['No games:', 'you do not need to hide your interest, play hard to get or keep someone guessing. Warm and clear is more attractive than mysterious.']] },
    exercise: { h: 'Exercise: your playful side', intro: 'About 40 minutes. Start from what already makes you laugh.', blocks: [
      { t: 'p', text: 'What is your natural kind of play? Choose up to two.' },
      { t: 'chips', k: 'style', max: 2, options: ['Dry wit', 'Silly and warm', 'Storytelling', 'Gentle teasing', 'Quick banter', 'Self-deprecating humour', 'Playful curiosity', 'Compliments'] },
      { t: 'ta', k: 'laugh', label: 'What makes me laugh, and who makes me laugh most', rows: 3, ph: 'Shows, friends, family, moments.' },
      { t: 'inp', k: 'line', label: 'A light, warm thing I could say when I enjoy someone’s company', ph: 'For example: I have enjoyed this far more than I expected.' },
      { t: 'ta', k: 'limit', label: 'Teasing that does not work for me, and how I will say so', rows: 3, ph: 'For example: I like a joke, but not about my family or my body.' },
      { t: 'inp', k: 'stop', label: 'How I will step back if someone does not respond', ph: 'For example: smile and move to a neutral topic.' }] },
    foryou: [{ when: 'gentle', text: 'If flirting has felt unsafe, scary or shameful, you can leave it for now. Warmth with friends and family counts as practice, and nothing here is owed to anyone.' }],
    embrace: [
      ['Real enjoyment of the person', 'A performance of someone bolder'],
      ['Humour that includes them', 'Teasing that humiliates'],
      ['Reading and respecting the response', 'Pushing on when they go quiet'],
      ['Warm and clear', 'Hot and cold games']]
  };

  D.CONTENT['9.3'] = {
    lead: 'Poise is not perfection. It is warmth that stays steady when something goes wrong.',
    story: { h: 'Story: Thuy, 40, Hanoi', p: [
      'At a work dinner, Thuy knocked a glass of red wine across the table, onto the shirt of a visiting executive. She froze, mortified. The room went quiet. In the long second before anyone spoke, she remembered her mother’s advice: “When something goes wrong, make the other person comfortable first.”',
      'She grabbed a napkin, said, “I am so sorry, and I promise this is the most dramatic thing I will do tonight,” and offered to pay for the cleaning. The executive laughed, and by dessert the story had become the table’s favourite. Three weeks later he recommended her for a project. She said, “It was not the spill that was remembered. It was how I handled it.”',
      'Thuy is a composite character.'] },
    framework: { h: 'Framework: welcome, recover and relax', intro: 'Three skills make poise learnable.', items: [
      ['Welcome:', 'greet people by name, offer a seat or a drink, introduce strangers to one another. Make the room feel smaller and friendlier.'],
      ['Recover:', 'pause, breathe, apologise in one sentence if needed, fix what you can, and move on. The recovery is what people remember.'],
      ['Relax:', 'a slower pace, a settled body and a kind face tell others it is safe to relax. Nerves are normal and rarely visible.'],
      ['Self-forgiveness:', 'you are allowed to be human. A mistake handled kindly makes you more likeable.']] },
    exercise: { h: 'Exercise: your grace snapshot and recovery lines', intro: 'About 45 minutes. This is a snapshot, not a score of your charm.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'warmth', text: 'People tell me, or show me, that I make them feel welcome.' },
        { axis: 'poise', text: 'I can recover calmly from an awkward moment.' },
        { axis: 'play', text: 'I can be playful and laugh at myself.' },
        { axis: 'kindness', text: 'I thank people and say kind things easily.' }] },
      { t: 'result', fn: 'grace' },
      { t: 'inp', k: 'recover', label: 'My calm sentence for when I slip', ph: 'For example: Well, that was not part of the plan.' },
      { t: 'ta', k: 'worst', label: 'The moment I fear most at a social event', rows: 3, ph: 'Spilling, forgetting a name, saying something wrong.' },
      { t: 'ta', k: 'plan', label: 'What I will do if it happens', rows: 3, ph: 'Pause, breathe, apologise once, help fix it, move on.' }] },
    foryou: [{ when: 'gentle', text: 'If anxiety makes recovery hard, remember that most people are thinking about themselves. Take one slow breath and rely on a prepared sentence.' }],
    embrace: [
      ['Greeting by name and remembering', 'Looking over their shoulder'],
      ['One sentence of apology and a fix', 'Long self-punishing apologies'],
      ['A calm, slow pace', 'Rushing to escape the moment'],
      ['Treating your own slip kindly', 'Replaying it for days']]
  };

  D.CONTENT['9.4'] = {
    lead: 'Reputation is the sum of small things you do when it costs you nothing and nobody is keeping score. It travels faster than you do.',
    story: { h: 'Story: Imani, 38, Dar es Salaam', p: [
      'Imani never thought about her reputation. She was polite to everyone and thanked the people who helped her, from the security guard to the cleaner to her junior colleagues. She never joined the office gossip. At a community event, a man named Joseph overheard two of her colleagues describing her to a friend. “She is the kind of person who remembers your children’s names,” one said.',
      'Joseph asked to be introduced. On their first date he told her, “Everyone I asked said the same thing about you.” Imani was surprised. She said, “I never did any of it to be noticed. But I see now that being kind and being discreet is a form of being seen.”',
      'Imani is a composite character.'] },
    framework: { h: 'Framework: thanks, discretion and generosity', intro: 'Reputation is built in three quiet ways.', items: [
      ['Thanks:', 'say thank you specifically and promptly. A message, a note or a few words in person is enough.'],
      ['Discretion:', 'do not repeat what was told in confidence, and step out of gossip. You can be warm without being the carrier of stories.'],
      ['Generosity:', 'give your time, attention and credit freely. Small acts, repeated, are remembered long after big ones are forgotten.'],
      ['How you treat people who cannot help you:', 'waiters, drivers, juniors and strangers show who you are, and others notice.'],
      ['Kind is not the same as pleasing:', 'you can be generous and still say no. Kindness with boundaries earns more respect than pleasing everyone.']] },
    exercise: { h: 'Exercise: your kindness and reputation plan', intro: 'About 40 minutes. Think about how you would like to be described.', blocks: [
      { t: 'ta', k: 'words', label: 'Three words I would like people to use about me', rows: 2, ph: 'For example: warm, honest, dependable.' },
      { t: 'ta', k: 'thanks', label: 'Three people I will thank this month, and for what', rows: 3, ph: 'Names, and one specific thing for each.' },
      { t: 'inp', k: 'gossip', label: 'My line when someone starts to gossip', ph: 'For example: I would rather not talk about her when she is not here.' },
      { t: 'ta', k: 'give', label: 'One generous habit I will keep', rows: 2, ph: 'Time, credit, a message, a small gift.' },
      { t: 'ta', k: 'noone', label: 'Someone I treat well when nobody is watching', rows: 2, ph: 'Notice who it is, and who it could be.' }] },
    roots: {
      christian: 'Many Christian traditions teach gratitude, kindness to strangers and guarding the tongue. Consider whom you could bless with a kind word this week.',
      muslim: 'Many Muslim traditions emphasise shukr, gratitude, and good character toward everyone, including a warning against backbiting. Consider how gratitude and discretion could shape your reputation.',
      jewish: 'Many Jewish traditions teach gemilut chasadim, acts of loving-kindness, and caution against lashon hara, harmful speech. Consider one quiet kindness and one conversation to step out of.',
      hindu: 'Many Hindu traditions value gratitude, hospitality to guests and truthful, gentle speech. Consider how you welcome people, and how your words leave them.',
      buddhist: 'Many Buddhist traditions practise generosity, loving-kindness and right speech. Consider how small acts of generosity and honest, gentle words could become a daily habit.',
      secular: 'Consider how gratitude, discretion and generosity connect to the values you wrote in Module 3, and what reputation they would build.'
    },
    foryou: [{ when: 'gentle', text: 'If you have been the subject of gossip, you do not have to answer it. A steady, kind way of living is the strongest reply.' }],
    embrace: [
      ['Specific, prompt thanks', 'Vague or forgotten gratitude'],
      ['Stepping out of gossip kindly', 'Joining in to fit in'],
      ['Treating everyone well, especially those who cannot help you', 'Charm that switches on for important people'],
      ['Kindness with boundaries', 'Pleasing everyone and resenting it']]
  };

  D.CONTENT['9.5'] = {
    lead: 'Charm grows from small habits repeated. This lesson turns your reflections into a few practices you can keep.',
    story: { h: 'Story: Siobhan, 46, Dublin', p: [
      'Siobhan had spent a decade as the dependable one at work and the quiet one at parties. Divorced for two years, she wanted to feel more at ease around people, and she did not want to reinvent herself. A friend suggested a gentle experiment: one small charm practice a week.',
      'The first week she used people’s names. The second she sent three thank-you notes. The third she told a funny story against herself at a dinner. By the end of two months she noticed her shoulders were lower at parties and that people sought her out. At her niece’s wedding, a widower asked her to dance. She said, “I did not become someone else. I just practised being the warm person I already was.”',
      'Siobhan is a composite character.'] },
    framework: { h: 'Framework: one habit at a time', intro: 'Charm is a practice, not a personality.', items: [
      ['Pick one:', 'a greeting, a thank-you, a playful remark, a recovery line.'],
      ['Pick where:', 'low-stakes places first: a shop, a work lunch, a family call.'],
      ['Notice:', 'afterwards, write one line about what worked and what you might try next.'],
      ['Rest:', 'charm takes energy. Plan quiet time after big social events, especially if you are introverted.'],
      ['Stay yourself:', 'every habit should feel like a better version of you, not a mask.']] },
    exercise: { h: 'Exercise: your charm habits', intro: 'About 40 minutes. Keep it small enough to do in a busy week.', blocks: [
      { t: 'inp', k: 'habit1', label: 'Week 1 habit', ph: 'For example: use people’s names.' },
      { t: 'inp', k: 'habit2', label: 'Week 2 habit', ph: 'For example: send three specific thank-yous.' },
      { t: 'inp', k: 'habit3', label: 'Week 3 habit', ph: 'For example: tell one funny story against myself.' },
      { t: 'ta', k: 'where', label: 'Where I will practise, and with whom', rows: 2, ph: 'A friend, a colleague, a family call.' },
      { t: 'ta', k: 'rest', label: 'How I will recover after social events', rows: 2, ph: 'A walk, quiet time, an early night.' },
      { t: 'summary9' }] },
    foryou: [{ when: 'gentle', text: 'If social life drains you, shorter and more frequent is better than long and rare. Introverts can be every bit as charming, at their own pace.' }],
    embrace: [
      ['One small habit at a time', 'Trying to become someone new overnight'],
      ['Low-stakes practice', 'Waiting for a date to test a new skill'],
      ['A line of reflection afterwards', 'Replaying the evening for days'],
      ['A better version of you', 'A mask']]
  };

  D.SCENARIOS.push(
    { id: 's9-1', module: 9, title: 'His family’s table',
      setup: 'Daniel has invited you to his grandmother’s birthday lunch. The customs are unfamiliar. Everyone is serving the elders first, and a dish is passed to you that you are not sure how to eat. You can feel people watching.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Smile and say quietly to Daniel’s aunt, “This looks wonderful. Will you show me the best way to eat it?”',
          protects: 'It shows respect, curiosity and ease.', cost: 'You admit you are new to it.',
          try: 'Asking graciously is usually welcomed more than perfect imitation.' },
        { id: 'b', tag: 'accommodate', text: 'Copy what you think is expected, even though you are uneasy with part of it.',
          protects: 'It avoids standing out.', cost: 'You may overstep your own limits or get it wrong anyway.',
          try: 'Follow what is comfortable, and politely decline the rest.' },
        { id: 'c', tag: 'react', text: 'Whisper sharply to Daniel, “Why did you not warn me?”',
          protects: 'It releases your stress.', cost: 'It makes the moment tense and public.',
          try: 'Ask Daniel before the next event what to expect.' },
        { id: 'd', tag: 'withdraw', text: 'Pick at the food, stay quiet and leave early.',
          protects: 'It avoids mistakes.', cost: 'Her family sees someone who seems cold, not shy.',
          try: 'One warm sentence to the grandmother changes the whole afternoon.' },
        { id: 'e', tag: 'ruminate', text: 'Eat nervously and replay every possible mistake all afternoon.',
          protects: 'It keeps you alert.', cost: 'You miss the occasion.',
          try: 'Pick one person to talk with and give them your full attention.' }
      ] },
    { id: 's9-2', module: 9, title: 'The teasing',
      setup: 'On your third date, Mateo teases you about being “always so organised.” Everyone at the table laughs. It stings a little, but he says it with a grin, and you are not sure whether it is affectionate or dismissive.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Smile and say, “I like a good tease, but I am proud of being organised, so let us keep it friendly.”',
          protects: 'It keeps the play and states your line.', cost: 'It takes a little nerve.',
          try: 'Notice whether he adjusts. A good partner adjusts easily.' },
        { id: 'b', tag: 'accommodate', text: 'Laugh along and say nothing.',
          protects: 'It keeps the mood light.', cost: 'He learns that it is fine to tease you about anything.',
          try: 'Laugh if you truly find it funny, and say so if you do not.' },
        { id: 'c', tag: 'react', text: 'Snap, “That is not funny.”',
          protects: 'It stops the joke.', cost: 'It turns a possibly harmless moment into a confrontation.',
          try: 'Take a breath, and say it with a smile.' },
        { id: 'd', tag: 'withdraw', text: 'Go quiet for the rest of the evening.',
          protects: 'It avoids a scene.', cost: 'He is left guessing.',
          try: 'A light sentence later in private works well.' },
        { id: 'e', tag: 'ruminate', text: 'Spend days wondering whether he secretly thinks you are dull.',
          protects: 'It keeps you alert.', cost: 'It builds a story from one joke.',
          try: 'Notice the pattern over time. One tease is not a verdict.' }
      ] },
    { id: 's9-3', module: 9, title: 'The spilled drink',
      setup: 'At a friend’s party, you turn too quickly and spill your drink down the front of a stranger’s jacket. He looks stunned. People nearby fall quiet.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I am so sorry, I promise I am usually more graceful,” grab napkins, and offer to cover the cleaning.',
          protects: 'It puts him at ease and shows grace.', cost: 'A moment of embarrassment.',
          try: 'One sentence, a fix, and a smile is plenty.' },
        { id: 'b', tag: 'accommodate', text: 'Apologise over and over, insisting you are terrible.',
          protects: 'It shows you care.', cost: 'It makes him comfort you, and the moment grows.',
          try: 'Apologise once, fix it, and move on.' },
        { id: 'c', tag: 'react', text: 'Snap, “You should have watched where you were standing.”',
          protects: 'It shifts the blame.', cost: 'It turns an accident into an argument.',
          try: 'Take responsibility lightly and calmly.' },
        { id: 'd', tag: 'withdraw', text: 'Mumble sorry and leave the party.',
          protects: 'It ends the embarrassment.', cost: 'You lose the evening, and the moment lingers in your head.',
          try: 'Step away for two minutes, then return.' },
        { id: 'e', tag: 'ruminate', text: 'Stay, but spend the rest of the party replaying the spill.',
          protects: 'It keeps you humble.', cost: 'You miss the party.',
          try: 'Remind yourself that most people have already moved on.' }
      ] },
    { id: 's9-4', module: 9, title: 'The gossip',
      setup: 'Over lunch, your friend Chiamaka starts to tell a juicy story about a mutual acquaintance’s divorce. She leans in and says, “You will not believe what I heard about her.” She expects you to join in.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Smile and say, “I would rather not talk about her when she is not here. How are you doing, though?”',
          protects: 'It protects your reputation and the friendship.', cost: 'She may feel gently corrected.',
          try: 'Redirect warmly to something about her.' },
        { id: 'b', tag: 'accommodate', text: 'Listen and add a few comments to keep her happy.',
          protects: 'It keeps the lunch friendly.', cost: 'You become a carrier of the story.',
          try: 'Practise one line you can use without lecturing.' },
        { id: 'c', tag: 'react', text: 'Say sharply, “That is awful gossip, and I will not listen.”',
          protects: 'It states your principle.', cost: 'It shames her and may harm the friendship.',
          try: 'Use a lighter tone and a change of subject.' },
        { id: 'd', tag: 'withdraw', text: 'Look at your phone until she stops.',
          protects: 'It avoids the conversation.', cost: 'She feels dismissed, and nothing is said.',
          try: 'A warm redirect keeps the friendship intact.' },
        { id: 'e', tag: 'ruminate', text: 'Listen in silence, then worry afterwards that you were complicit.',
          protects: 'It keeps your conscience active.', cost: 'It drains you without changing anything.',
          try: 'Decide your line now, so you can use it next time.' }
      ] }
  );

  D.ASK.push(
    { id: 'flirting', title: 'Flirting, humour and banter', domains: ['d9'], modules: [9],
      keys: ['how to flirt', 'flirting', 'flirt', 'be playful', 'banter', 'sense of humour', 'sense of humor', 'be funny', 'not funny', 'he teases me', 'teasing', 'make him laugh', 'play hard to get'],
      answer: ['Flirting is a conversation in play. Show real enjoyment, use humour that includes the other person, and notice how they respond. If they lean in and play back, continue. If they go quiet, step back at once.',
        'You do not need games or a performance. Warm and clear is more attractive than mysterious. Teasing that humiliates is not humour. Lesson 9.2 helps you find your natural style.'] },
    { id: 'etiquette', title: 'Manners, dining and customs', domains: ['d9'], modules: [9],
      keys: ['etiquette', 'table manners', 'dining', 'what to bring', 'gift for', 'customs', 'greet', 'greeting', 'tipping', 'dinner party', 'formal dinner', 'wrong fork', 'cultural faux pas'],
      answer: ['Manners are a way of showing respect, and the rules differ everywhere. Notice what others do, ask one friendly question of someone you trust, and follow the host’s lead where you are comfortable.',
        'You can politely decline food, drink or a custom you do not want. If you slip, a light apology is enough. Lesson 9.1 helps you build a small customs kit for your next occasion.'] },
    { id: 'embarrassed', title: 'Embarrassing moments and poise', domains: ['d9'], modules: [9],
      keys: ['embarrassed', 'embarrassing', 'embarrassment', 'spilled', 'tripped', 'forgot his name', 'cringe', 'faux pas', 'said the wrong thing', 'made a fool of myself', 'how to recover'],
      answer: ['Everyone has these moments, and poise is a calm recovery. Pause, breathe, apologise once if needed, fix what you can, and move on, ideally with a smile.',
        'People remember how you handle a slip far longer than the slip itself. Prepare one calm sentence in advance. Lesson 9.3 helps you build it.'] },
    { id: 'gossip', title: 'Gossip, kindness and reputation', domains: ['d9'], modules: [9],
      keys: ['gossip', 'gossiping', 'reputation', 'rumours', 'rumors', 'talking behind my back', 'thank you note', 'gratitude', 'grateful', 'how to be kind', 'kind to others'],
      answer: ['Reputation is built by small acts: prompt, specific thanks, discretion with what you hear, and generosity toward people who cannot help you.',
        'You can step out of gossip warmly: "I would rather not talk about her when she is not here. How are you?" If you are the subject of gossip, a steady, kind way of living is the strongest reply. Lesson 9.4 helps you plan.'] }
  );

  D.REFLECT = D.REFLECT || {};
  D.REFLECT[9] = {
    idea: 'Charm is generosity of attention. When you make another person feel seen and at ease, you give them something rare, and you tend to receive it back in kind.',
    qs: ['When have I felt most at ease with another person, and what did they do?', 'What small kindness could I make a habit this season?']
  };
})();
