/* Module 5: Style, Image and Presence. Same shape as Modules 2 to 4. Fit, comfort and culture before trends; no body-size or beauty standards. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[5] = {
    title: 'Style, Image and Presence',
    intro: 'How you present yourself is a way of saying who you are before you speak. This module helps her build a style that feels like her, a simple wardrobe that fits her life and budget, grooming she can keep up, a steady presence, and photos and profiles that are honest and warm.',
    safety: 'Style here means feeling like yourself, not fitting a mould. Nothing assumes a body size, budget, climate, faith or culture, and modest dress, uniforms and traditional clothing are as welcome as anything else. A man who tries to control what you wear is a signal worth noticing, and this module says so.'
  };

  [
    { id: '5.1', title: 'Style starts with you', mins: 40, line: 'Find the words and feelings behind the clothes you love.' },
    { id: '5.2', title: 'Your wardrobe, simply', mins: 45, line: 'Keep what fits and feels like you, and fill one gap.' },
    { id: '5.3', title: 'Grooming and small details', mins: 40, line: 'Choose a care routine you can keep and one signature detail.' },
    { id: '5.4', title: 'Presence: how you arrive', mins: 40, line: 'Posture, voice and the way you enter a room.' },
    { id: '5.5', title: 'Photos, profiles and first impressions', mins: 45, line: 'Show the real you, safely, in a photo, a bio and a first-date plan.' }
  ].forEach(function (l) { l.module = 5; D.LESSONS.push(l); });

  D.PRESENCE = {
    posture: { name: 'Posture and stillness', body: 'Standing and sitting in a way that feels open and steady tells people you are comfortable before you say a word.', practice: 'Three times today, pause, drop your shoulders, lengthen your spine and take one slow breath.' },
    voice: { name: 'Voice and pace', body: 'A pace and volume you are happy with makes you easy to listen to. Slowing down usually helps more than speaking louder.', practice: 'Read a paragraph aloud at a slightly slower pace than feels natural, and notice how it sounds.' },
    eyes: { name: 'Eyes and warmth', body: 'A friendly gaze and an easy smile make people feel welcome. They do not have to be constant, and they should feel like you.', practice: 'In your next three conversations, hold a friendly gaze for a moment longer than usual, then look away naturally.' },
    entry: { name: 'Entering a room', body: 'Many people dread walking in alone. A calm arrival, slow and unhurried, changes how you feel and how others see you.', practice: 'Before you walk in, take one slow breath, pick one person to greet, and walk at an unhurried pace.' }
  };

  D.CONTENT['5.1'] = {
    lead: 'Style is not a look to copy. It is the way you let your clothes say who you are and how you want to feel.',
    story: { h: 'Story: Dalia, 36, Cairo', p: [
      'Dalia owned a closet full of clothes chosen for other people: what her mother approved of, what a colleague wore, what an influencer said was “in.” She felt like a costume rack and not like herself. A friend asked her what she wanted to feel when she got dressed. Dalia said, “Calm, a little elegant, and like I can move.”',
      'She turned those words into a filter. Anything that did not fit the feeling went into a bag for donation. What was left was smaller, simpler and, she realised, more her. At a family wedding a cousin said she looked radiant. Dalia said, “I just stopped dressing for a committee.”',
      'Dalia is a composite character.'] },
    framework: { h: 'Framework: feeling, life and roots', intro: 'Three questions shape a style that is yours.', items: [
      ['The feeling:', 'how do you want to feel when you are dressed? Calm, bold, soft, polished, free?'],
      ['The life:', 'what do your days require: work, weather, travel, children, budget, dress codes?'],
      ['The roots:', 'what does your culture, family or faith offer or ask? Many traditions have beautiful clothing worth wearing with pride, and modest dress is a style choice like any other.'],
      ['The filter:', 'turn your answers into three style words. Use them as a filter for what you buy, keep and wear.']] },
    exercise: { h: 'Exercise: your style words', intro: 'About 40 minutes. Look at your favourite clothes, not the ones you think you should like.', blocks: [
      { t: 'p', text: 'Choose up to three style words that feel like you.' },
      { t: 'chips', k: 'words', max: 3, options: ['Warm', 'Polished', 'Relaxed', 'Bold', 'Classic', 'Playful', 'Modest', 'Creative', 'Elegant', 'Practical', 'Soft', 'Sharp'] },
      { t: 'inp', k: 'feeling', label: 'The feeling I want when I get dressed', ph: 'For example: calm and a little elegant.' },
      { t: 'ta', k: 'fav', label: 'My favourite outfit, and why I love it', rows: 3, ph: 'The fit, the colour, how I feel in it, who I am in it.' },
      { t: 'ta', k: 'avoid', label: 'Something I wear that does not feel like me', rows: 2, ph: 'And who I bought it for.' },
      { t: 'ta', k: 'roots', label: 'Clothing from my culture, family or faith that I love (optional)', rows: 2, ph: 'A fabric, a colour, a piece I would like to wear more.' }] },
    foryou: [{ when: 'gentle', text: 'If someone once criticised or controlled how you dress, take your time. Choosing for yourself is part of getting steady.' }],
    embrace: [
      ['Clothes that make you feel like yourself', 'Dressing for a committee'],
      ['Three style words as a filter', 'Copying whatever is trending'],
      ['Wearing your culture’s clothing with pride', 'Hiding it to blend in, or performing it for others'],
      ['Comfort and movement', 'Pain for the sake of an outfit']]
  };

  D.CONTENT['5.2'] = {
    lead: 'A small wardrobe that fits well and suits your life beats a full one that does not. Fit and comfort come before fashion and price.',
    story: { h: 'Story: Zawadi, 28, Nairobi', p: [
      'Zawadi had a modest budget and a closet that frustrated her. She bought bargains that did not fit and wore a third of what she owned. She stopped shopping for three months and wrote down everything she wore, and one thing she wished she had.',
      'The list was short. She took two pieces to a tailor, who made them fit properly for a small fee. She bought one good pair of shoes secondhand and gave away a bag of clothes to a friend. She said, “Everything I own now fits and I like it. I spend less, and I feel richer.”',
      'Zawadi is a composite character.'] },
    framework: { h: 'Framework: fit, feel and life', intro: 'Test every piece against three questions before you keep or buy it.', items: [
      ['Does it fit?', 'Fit matters more than brand or price. A small alteration often turns an ordinary piece into a favourite.'],
      ['Does it feel like me?', 'Does it match your style words and the way you want to feel?'],
      ['Does it suit my life?', 'Will you wear it in the places you actually go, in your climate, within your budget?'],
      ['The simple wardrobe:', 'most of what you wear comes from a smaller set you love. Build around a few pieces that mix well, and add one thing at a time.']] },
    exercise: { h: 'Exercise: the wardrobe check', intro: 'About 45 minutes. Pick up ten items you wear or own, and be honest.', blocks: [
      { t: 'ta', k: 'keep', label: 'Pieces I love and wear often', rows: 2, ph: 'What they have in common: fit, colour, fabric.' },
      { t: 'ta', k: 'tailor', label: 'Pieces worth altering or repairing', rows: 2, ph: 'And what each needs.' },
      { t: 'ta', k: 'release', label: 'Pieces I will pass on, sell or donate', rows: 2, ph: 'The ones that do not fit, or do not feel like me.' },
      { t: 'inp', k: 'gap', label: 'The one gap I will fill first', ph: 'For example: a jacket that works for work and evenings.' },
      { t: 'p', text: 'Where is your money best spent? Choose up to two.' },
      { t: 'chips', k: 'priority', max: 2, options: ['Tailoring', 'Good shoes', 'A great coat or jacket', 'Underwear that fits', 'A bag I use daily', 'Secondhand finds', 'Fabrics that last'] },
      { t: 'inp', k: 'budget', label: 'A budget for this season that I can keep', ph: 'In words or numbers, whichever you prefer.' }] },
    foryou: [{ when: 'gentle', text: 'If shopping has been a way to cope, go slowly. A small, honest wardrobe is a form of care, and it does not have to be done in a weekend.' }],
    embrace: [
      ['Fit first, then everything else', 'Buying for the size you wish you were'],
      ['Alterations, repairs and secondhand', 'Cheap pieces that never get worn'],
      ['A budget you can keep', 'Debt for a look'],
      ['One gap at a time', 'A closet clear-out you regret']]
  };

  D.CONTENT['5.3'] = {
    lead: 'Grooming is care, not a standard to meet. A routine you can keep, and one detail that is yours, is all you need.',
    story: { h: 'Story: Maya, 42, Chennai', p: [
      'Maya had an elaborate routine in her twenties, then let most of it go during years of caring for her parents. She told herself it did not matter. On a first date she noticed she was tugging at her hair and hiding her hands. She did not want a bigger routine. She wanted to stop hiding.',
      'She booked a haircut with someone who listened, chose one skincare habit she could keep, and added a favourite scent. She also chose a signature detail: a pair of earrings from her grandmother. She said, “It took ten minutes a day, and I stopped thinking about it.”',
      'Maya is a composite character.'] },
    framework: { h: 'Framework: the care layer', intro: 'A short list of basics, then one detail that is yours.', items: [
      ['Cleanliness:', 'regular washing, fresh clothes, clean teeth and hands. It is basic respect for yourself and others.'],
      ['Hair and skin:', 'a simple routine that suits your hair, skin and climate. If a skin or hair problem worries you, a doctor or a trained professional can help.'],
      ['Scent:', 'light and kind. Many people are sensitive to strong perfume, and what is pleasant varies between cultures.'],
      ['Hands, feet and shoes:', 'clean, cared for and comfortable. Shoes you can walk in matter more than shoes that photograph well.'],
      ['A signature detail:', 'one small thing that is yours, such as a scarf, earrings, a colour or a scent.']] },
    exercise: { h: 'Exercise: your care layer', intro: 'About 40 minutes. Keep it small, and choose what you can keep.', blocks: [
      { t: 'ta', k: 'now', label: 'My care routine right now', rows: 3, ph: 'Morning, evening, hair, skin, hands. No judgement.' },
      { t: 'inp', k: 'upgrade', label: 'One upgrade I will make this month', ph: 'For example: a haircut with someone who listens.' },
      { t: 'inp', k: 'signature', label: 'My signature detail', ph: 'For example: my grandmother’s earrings.' },
      { t: 'ta', k: 'help', label: 'A professional who could help (hairdresser, tailor, doctor)', rows: 2, ph: 'And the first step.' }] },
    foryou: [{ when: 'gentle', text: 'If caring for yourself feels hard right now, start with the smallest step: one clean, comfortable thing you can do each day.' }],
    embrace: [
      ['A routine you can keep', 'A routine that collapses by Friday'],
      ['Light scent and clean basics', 'Heavy fragrance'],
      ['One signature detail that is yours', 'Copying someone else’s look'],
      ['Help from a good professional', 'Spending heavily on products that do not suit you']]
  };

  D.CONTENT['5.4'] = {
    lead: 'Presence is how you arrive: steady, warm and unhurried. It can be practised in small ways, whatever your temperament.',
    story: { h: 'Story: Greta, 39, Berlin', p: [
      'Greta was quiet, and she believed that meant she lacked presence. At parties she crossed her arms and waited by the wall. A friend gently pointed out that she looked unwelcoming, and Greta was embarrassed to learn that her nervousness was being read as coldness.',
      'She tried three tiny habits: a slow breath before entering a room, one friendly sentence to the first person she saw, and dropping her shoulders. She did not become loud. She became easier to approach. At the next party a man said, “You looked so calm, I assumed you knew everyone.” Greta laughed, because she had known no one.',
      'Greta is a composite character.'] },
    framework: { h: 'Framework: four parts of presence', intro: 'You can practise each one in minutes, and each works for quiet and lively people alike.', items: [
      ['Posture and stillness:', 'an open, steady stance. Moving less often reads as calm.'],
      ['Voice and pace:', 'a pace and volume you like. Slowing down helps more than speaking louder.'],
      ['Eyes and warmth:', 'a friendly gaze and a natural smile, as they suit you and your culture.'],
      ['Entering a room:', 'arrive before you walk in. Breathe, pick one person to greet and walk at an unhurried pace.']] },
    exercise: { h: 'Exercise: your presence reset', intro: 'About 40 minutes. Presence is a skill, not a personality type.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'posture', text: 'I stand and sit in a way that feels open and steady.' },
        { axis: 'voice', text: 'I speak at a pace and volume I am happy with.' },
        { axis: 'eyes', text: 'I can hold a friendly gaze and smile naturally.' },
        { axis: 'entry', text: 'I can walk into a room of strangers without dreading it.' }] },
      { t: 'result', fn: 'presence' },
      { t: 'breathe' },
      { t: 'p', text: 'Choose up to two micro-habits to practise this week.' },
      { t: 'chips', k: 'habits', max: 2, options: ['A slow breath before I walk in', 'Dropping my shoulders', 'Slowing my speech', 'One friendly sentence to the first person', 'Holding a friendly gaze', 'Uncrossing my arms'] },
      { t: 'ta', k: 'place', label: 'Where I will practise this week', rows: 2, ph: 'A coffee shop, a family gathering, a class, a meeting.' },
      { t: 'ta', k: 'worry', label: 'What I worry people see, and what is true', rows: 2, ph: 'Worry: ... What is true: ...' }] },
    foryou: [{ when: 'gentle', text: 'If crowds or strangers feel unsafe, choose small, safe places to practise first. Presence grows from comfort, not from forcing yourself.' }],
    embrace: [
      ['Arriving calmly, one breath at a time', 'Rushing in and hoping for the best'],
      ['A pace and volume you like', 'Copying a louder personality'],
      ['A friendly gaze, in a way that suits you', 'A fixed smile'],
      ['Small practice in safe places', 'Waiting until you feel confident to begin']]
  };

  D.CONTENT['5.5'] = {
    lead: 'A photo, a bio and a first-date outfit are the first things a stranger meets. They should be honest, warm and safe.',
    story: { h: 'Story: Priya, 31, London', p: [
      'Priya’s dating photos were beautiful and a little unreal: heavy filters, a group shot where nobody could tell which one she was, and a profile that said only “love travel and food.” She received plenty of attention and met no one she liked. A friend looked at her profile and said, “I can’t tell who you are.”',
      'She chose four recent photos: one clear smiling face, one doing something she loves, one with friends, and one full-length. She wrote three honest lines about what she cares about. The matches slowed down and the conversations improved. She met a man who said, “You look exactly like your photos,” and she laughed with relief.',
      'Priya is a composite character.'] },
    framework: { h: 'Framework: honest, recent, warm, safe', intro: 'Four rules for a photo or profile.', items: [
      ['Honest:', 'recent photos that look like you on a normal day, without heavy filters or old pictures.'],
      ['Warm:', 'one clear face shot with a natural expression, and one that shows what you love.'],
      ['Specific:', 'a short bio with real details beats general phrases that fit anyone.'],
      ['Safe:', 'keep your address, workplace details and children’s identifying information private, meet in public, and tell a friend where you are going. Module 13 goes deeper.']] },
    exercise: { h: 'Exercise: your profile and first-date plan', intro: 'About 45 minutes. You do not have to use an app to do this. It also works for introductions through friends.', blocks: [
      { t: 'ta', k: 'photos', label: 'Photos I would use, and why', rows: 3, ph: 'One clear smiling face, one doing something I love, one with friends, one full-length.' },
      { t: 'ta', k: 'bio', label: 'A draft of my bio (three honest lines)', rows: 4, ph: 'What I care about, what my days look like, what I would like to share with someone.' },
      { t: 'ta', k: 'outfit', label: 'My first-date outfit plan', rows: 3, ph: 'Comfortable, appropriate for the place, like me, and easy to move in.' },
      { t: 'ta', k: 'safe', label: 'My safety plan for first dates', rows: 2, ph: 'Public place, a friend who knows, my own transport, my own limits.' },
      { t: 'summary5' }] },
    foryou: [{ when: 'gentle', text: 'Share only what feels safe. You can leave your profile private and take it step by step, and you are allowed to end any date at any time.' }],
    embrace: [
      ['Recent, honest photos', 'Heavy filters or old pictures'],
      ['A specific, warm bio', 'A list of clichés'],
      ['Meeting in public and telling a friend', 'Sharing your address or going alone to a private place'],
      ['An outfit that is comfortable and you', 'Dressing as someone you are not']]
  };

  D.SCENARIOS.push(
    { id: 's5-1', module: 5, title: 'What to wear on the first date',
      setup: 'It is Friday evening, and you have a first date with Emeka at 8. You have changed outfits five times and your bed is covered in clothes. It is 7:05.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Pick the outfit that fits, feels like you and suits the venue, put the rest away, and leave on time.',
          protects: 'It protects your energy and your calm.', cost: 'You commit, and nothing is perfect.',
          try: 'Use your three style words as a filter next time, so the decision is quicker.' },
        { id: 'b', tag: 'ruminate', text: 'Keep changing until you are late, and arrive tense.',
          protects: 'It feels like trying hard.', cost: 'You arrive stressed and already tired.',
          try: 'Choose the night before, and set a time limit.' },
        { id: 'c', tag: 'accommodate', text: 'Message a friend for opinions, then wear whatever she thinks he would like.',
          protects: 'It protects you from judgement.', cost: 'You dress for an imagined audience, not for yourself.',
          try: 'Ask a friend whether you look like yourself.' },
        { id: 'd', tag: 'react', text: 'Throw up your hands, put on the first thing you see, and go in a bad mood.',
          protects: 'It ends the stress quickly.', cost: 'You arrive annoyed and uncomfortable.',
          try: 'Take a slow breath, then pick one of the first two options you liked.' },
        { id: 'e', tag: 'withdraw', text: 'Text him that something came up and stay home.',
          protects: 'It ends the pressure.', cost: 'It turns a wardrobe problem into a missed chance.',
          try: 'Choose a comfortable outfit, and go for one hour if you want to.' }
      ] },
    { id: 's5-2', module: 5, title: 'The comment on your clothes',
      setup: 'Two months in, Kelvin says, “I wish you’d wear dresses more. And not that colour, it’s not very flattering. Can you wear what I picked for you?” He sounds light, but he has said similar things before.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say calmly, “I like how I dress, and I choose my own clothes. I’m happy to hear what you enjoy, but the decision is mine.”',
          protects: 'It protects your autonomy and gives him a chance to respond well.', cost: 'He may be annoyed.',
          try: 'Watch what he does next. Respect is the answer you need.' },
        { id: 'b', tag: 'accommodate', text: 'Start wearing what he likes, so there are no arguments.',
          protects: 'It keeps the peace.', cost: 'It teaches both of you that your choices can be edited, and the requests can grow.',
          try: 'Pay attention to whether the requests stay about clothes.' },
        { id: 'c', tag: 'react', text: 'Snap, “You’re not my father!” and storm off.',
          protects: 'It makes your feeling clear.', cost: 'The argument becomes about your tone.',
          try: 'Say the one clear sentence calmly, in private.' },
        { id: 'd', tag: 'withdraw', text: 'Say nothing, wear what you like, and quietly get colder with him.',
          protects: 'It protects your wardrobe.', cost: 'He never hears your limit, and you carry the strain.',
          try: 'One clear sentence is kinder than silence.' },
        { id: 'e', tag: 'ruminate', text: 'Wonder for days if he is right and whether something is wrong with your taste.',
          protects: 'It keeps you open to feedback.', cost: 'It erodes your confidence over a preference that was not yours to change.',
          try: 'Ask yourself: is this a request or a pattern of control? If you feel unsafe, speak to someone you trust.' }
      ] },
    { id: 's5-3', module: 5, title: 'Walking in alone',
      setup: 'A friend’s birthday party. You know the host and almost nobody else. At the door you hear the noise, and your stomach tightens.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Take a slow breath, find the host, say hello and ask to be introduced to one person.',
          protects: 'It uses a friendly anchor and eases you in.', cost: 'A moment of effort.',
          try: 'Set a small goal: two conversations, then decide whether to stay.' },
        { id: 'b', tag: 'withdraw', text: 'Stay near the wall with your phone and leave after twenty minutes.',
          protects: 'It protects you from awkwardness.', cost: 'You miss the chance to connect, and you look closed.',
          try: 'Put the phone away and greet one person.' },
        { id: 'c', tag: 'accommodate', text: 'Stick with the one person you know, and agree with everything she says.',
          protects: 'It keeps you comfortable.', cost: 'You stay in a small circle and lose your own voice.',
          try: 'Ask her to introduce you to one other person.' },
        { id: 'd', tag: 'react', text: 'Talk very fast and loudly to make an impression.',
          protects: 'It covers your nerves.', cost: 'It tires you and may overwhelm others.',
          try: 'Slow down, and ask a question instead.' },
        { id: 'e', tag: 'ruminate', text: 'Stay by the door, replaying what might go wrong, and leave without speaking to anyone.',
          protects: 'It avoids a bad moment.', cost: 'The worry gets bigger every time you avoid.',
          try: 'Choose one small action, such as saying hello to someone near you.' }
      ] },
    { id: 's5-4', module: 5, title: 'The profile photos',
      setup: 'Your friend Joy is helping you with your dating profile. She says, “Use the one with the heavy filter and the old haircut. You look ten years younger, and you will get way more matches.”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I would rather meet someone who likes how I really look. Let’s choose recent photos where I look like me.”',
          protects: 'It protects honesty and saves an awkward first meeting.', cost: 'Fewer matches at first.',
          try: 'Choose a clear, warm face photo, one doing something you love, and one with friends.' },
        { id: 'b', tag: 'accommodate', text: 'Use Joy’s photos because she knows best.',
          protects: 'It pleases Joy and gets attention.', cost: 'You meet people who like a version of you that does not exist.',
          try: 'Take the advice about lighting and composition, not about changing your face.' },
        { id: 'c', tag: 'withdraw', text: 'Decide to skip the profile and rely on luck.',
          protects: 'It avoids the exposure.', cost: 'You close a door because of one decision.',
          try: 'A simple, honest profile is a safe start.' },
        { id: 'd', tag: 'react', text: 'Snap, “I’m not going to lie!” and end the session.',
          protects: 'It states your value.', cost: 'It turns a helpful friend into an opponent.',
          try: 'Thank her, then tell her what you want your photos to say.' },
        { id: 'e', tag: 'ruminate', text: 'Keep both sets of photos and compare for weeks before posting anything.',
          protects: 'It avoids a hasty decision.', cost: 'The delay costs time and confidence.',
          try: 'Choose with Joy tonight, and review in a week.' }
      ] }
  );

  D.ASK.push(
    { id: 'dress', title: 'What should I wear?', domains: ['d5', 'd2'], modules: [5],
      keys: ['what to wear', 'what should i wear', 'outfit', 'my style', 'dress code', 'makeup', 'how to dress', 'clothes', 'wardrobe'],
      answer: ['Wear something you feel like yourself in, that fits, is comfortable and suits the place. A first date is not the time for new shoes or an outfit you cannot sit in.',
        'If you are unsure, go back to your three style words and choose the option that matches them. Lessons 5.1 and 5.2 help you build a wardrobe you do not have to think about.'] },
    { id: 'confidence', title: 'I am shy or nervous around new people', domains: ['d5', 'd9'], modules: [5, 9],
      keys: ['shy', 'nervous', 'confident', 'confidence', 'introvert', 'walk into a room', 'awkward', 'anxious around people', 'social anxiety', 'freeze up'],
      answer: ['Quiet people can have strong presence. Start with the body: a slow breath before you go in, shoulders down, and one friendly sentence to the first person you meet. Small practice in safe places works better than forcing yourself into big ones.',
        'If fear of people is stopping you from living your life, a counsellor can help. Lesson 5.4 builds a presence reset, and Module 9 goes into social grace.'] },
    { id: 'profile', title: 'Photos and my dating profile', domains: ['d5', 'd11'], modules: [5, 12],
      keys: ['profile', 'photos', 'photo', 'selfie', 'bio', 'filter', 'profile picture'],
      answer: ['Use recent, honest photos: a clear smiling face, one doing something you love, one with friends and one full-length. Write three specific lines about what you care about, and avoid heavy filters and old pictures.',
        'Keep your address, workplace details and your children’s identifying information private, and meet in public. Lesson 5.5 helps you write a draft, and Module 13 covers safety.'] }
  );
})();
