/* Module 15: Sexuality, Desire and Intimacy. Adult, non-explicit, consent-centred and values-led. Every path (waiting, exclusive, not wanting) is respected. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[15] = {
    title: 'Sexuality, Desire and Intimacy',
    intro: 'This module is for adult women, and it is written with care and without explicit detail. It helps her make peace with her body and her desire, understand consent and pace, name her own values and limits whether she is waiting, exclusive or exploring, talk about intimacy with a partner, and find help when something is hard. Every path she chooses for herself is respected.',
    safety: 'Consent is ongoing, enthusiastic and never owed. Nobody may pressure, trick, guilt or force you, and you can stop at any moment. If something has happened to you that you did not want, it was not your fault. You do not have to write about it here, and you can tell a person you trust, a counsellor or a local support service whenever you are ready. If you are in danger, contact your local emergency service now. Health questions belong with your own doctor.'
  };

  [
    { id: '15.1', title: 'Your body, your desire, your story', mins: 40, line: 'Meet what you were taught about desire, and decide what you believe.' },
    { id: '15.2', title: 'Consent and pace', mins: 45, line: 'Know your yes, your no and your not yet, and what real consent looks like.' },
    { id: '15.3', title: 'Your values and limits', mins: 45, line: 'Name what you want, what you are waiting for, and what you will not do.' },
    { id: '15.4', title: 'Talking about intimacy', mins: 45, line: 'Find words for affection, needs and difference, and see your intimacy snapshot.' },
    { id: '15.5', title: 'Repair, help and your plan', mins: 35, line: 'Know when and where to get help, and gather a plan that is yours.' }
  ].forEach(function (l) { l.module = 15; D.LESSONS.push(l); });

  D.INTIMACY = {
    body: { name: 'Peace with your body and desire', body: 'Many women learned silence, shame or fear around the body and desire. Peace here does not mean doing more. It means that what you do or do not do comes from you.', practice: 'Write three sentences you now believe about your body and your desire, and cross out any that belong to someone else.' },
    voice: { name: 'Your yes, no and not yet', body: 'Consent starts inside, with knowing what you want and being able to say it, in any order, at any time.', practice: 'Say aloud, alone, one sentence for each: yes, no and not yet. Choose wording you could really use.' },
    values: { name: 'Clear values and limits', body: 'Clear limits are not a wall. They are a map that helps you and a partner find the same road, or see early that you are on different ones.', practice: 'Write your values in one short paragraph: what you want, what you are waiting for, and what you will not do.' },
    talk: { name: 'Talking about intimacy', body: 'Couples who can talk about affection, needs and difference tend to feel safer and closer. The first conversation is the hardest one.', practice: 'Choose one calm moment this month to say one true sentence to a partner, a friend or a counsellor about what closeness means to you.' }
  };

  D.CONTENT['15.1'] = {
    lead: 'Most of us learned about the body and desire through silence, jokes, warnings or fear. Before you decide what you want, it helps to see what you were taught, and to choose what you will keep.',
    story: { h: 'Story: Citlali, 34, Mexico City', p: [
      'Citlali grew up in a warm, devout family where nobody ever spoke about sex. She learned from friends and from television, and from one sharp comment about a cousin. In her thirties she realised she felt both curious and guilty, and that she was waiting for someone to tell her what was acceptable.',
      'She began by writing down what she had absorbed: that desire was dangerous, that a “good” woman did not think about it, and that men “needed” it more. Then she wrote what she actually believed. She talked to a trusted older friend and later to a counsellor. Slowly the guilt loosened. She said, “I did not become a different person. I stopped borrowing other people’s fear.”',
      'Citlali is a composite character.'] },
    framework: { h: 'Framework: see it, sort it, own it', intro: 'A gentle way to look at what you were taught.', items: [
      ['See it:', 'notice the messages from family, faith, school, media and friends, spoken and unspoken.'],
      ['Sort it:', 'which messages are true and kind, which are fear, and which are simply someone else’s values?'],
      ['Own it:', 'decide what you believe about your body and desire. Waiting, not wanting, exploring and committing are all choices a woman may make.'],
      ['Shame is not a guide:', 'guilt can tell you when you have acted against your values, but shame about having a body or feelings is not a moral compass.'],
      ['Your body is yours:', 'your comfort, your pace, your privacy and your right to say no or yes belong to you.'],
      ['Different seasons:', 'desire changes with age, stress, health, medicine, hormones and life. Changes are normal. Pain or sudden change is worth asking a doctor about.']] },
    exercise: { h: 'Exercise: what I was taught', intro: 'About 40 minutes. This stays private. Write only what you want to.', blocks: [
      { t: 'ta', k: 'taught', label: 'What I was taught, spoken or unspoken, about the body and desire', rows: 3, ph: 'From family, faith, school, media, friends.' },
      { t: 'ta', k: 'keep', label: 'What I want to keep, because it is true and kind', rows: 3, ph: 'Respect, privacy, patience, care.' },
      { t: 'ta', k: 'release', label: 'What I want to set down, because it is fear or shame', rows: 3, ph: 'Messages that belong to someone else.' },
      { t: 'ta', k: 'believe', label: 'What I believe now about my body and desire', rows: 3, ph: 'In my own words.' },
      { t: 'p', text: 'You do not need to write about anything painful here. If something comes up that feels heavy, you can stop, and talk to someone you trust.' }] },
    foryou: [{ when: 'gentle', text: 'If this topic brings up discomfort, go slowly and skip what you need to. A counsellor can walk through it with you at your pace.' }],
    embrace: [
      ['Choosing what you believe', 'Inheriting guilt without looking at it'],
      ['Waiting, not wanting or exploring, as your choice', 'Judging yourself against others'],
      ['Asking a doctor about pain or change', 'Putting up with it in silence'],
      ['Privacy and your own pace', 'Sharing before you are ready']]
  };

  D.CONTENT['15.2'] = {
    lead: 'Consent is the foundation of every kind of closeness. It is a clear yes from a person who is free to say no, and it can change at any moment.',
    story: { h: 'Story: Fatou, 29, Dakar', p: [
      'Fatou had been on four dates with Ibrahim, who was funny and attentive. After dinner, he suggested they go back to his apartment. She felt a flutter of interest and a flutter of unease, and she realised she did not know how to say “not tonight” without it sounding like a rejection.',
      'She had practised a sentence with her cousin: “I am enjoying you, and I want to take this slowly.” She said it, smiled, and waited. Ibrahim paused, said, “Of course,” and walked her to her taxi. Fatou said afterwards, “How he responded was the information I needed. A kind man hears a not yet as a gift of honesty, not a door slammed.”',
      'Fatou is a composite character.'] },
    framework: { h: 'Framework: what real consent looks like', intro: 'Simple tests for any moment.', items: [
      ['Freely given:', 'no pressure, guilt, threats, tricks, or sulking. If someone is afraid to say no, there is no consent.'],
      ['Enthusiastic:', 'a real yes, not silence, not going along, not “fine”.'],
      ['Ongoing:', 'a yes now does not mean yes later. You can change your mind at any point, including partway through.'],
      ['Clear and sober:', 'alcohol or drugs can remove the ability to consent. Someone who is asleep or very drunk cannot say yes.'],
      ['Specific:', 'yes to one thing is not yes to everything.'],
      ['Never owed:', 'dinner, gifts, a relationship, a history or a marriage do not oblige you. Nobody owes anyone their body.'],
      ['Reading his response:', 'a good partner stops when you say stop, without punishment, sulking or argument. If he does not, that is a safety signal. Module 13 covers what to do.']] },
    exercise: { h: 'Exercise: your yes, your no, your not yet', intro: 'About 45 minutes. Practise with words you could really say.', blocks: [
      { t: 'ta', k: 'yes', label: 'How I would say yes, clearly and with pleasure', rows: 2, ph: 'In my own words.' },
      { t: 'ta', k: 'no', label: 'How I would say no, kindly and firmly', rows: 2, ph: 'A sentence that would work even if I was nervous.' },
      { t: 'ta', k: 'notyet', label: 'How I would say not yet, without apologising', rows: 2, ph: 'For example: I am enjoying this, and I want to go slowly.' },
      { t: 'ta', k: 'stop', label: 'How I would stop things partway, and what I would do next', rows: 3, ph: 'Words, an exit, a person I would text.' },
      { t: 'ta', k: 'react', label: 'How I would read his response, and what would worry me', rows: 3, ph: 'Respect, sulking, pressure, anger.' },
      { t: 'p', text: 'If any part of this reminds you of something that happened to you, it was not your fault. You can stop here and talk to someone you trust or a local support service.' }] },
    foryou: [{ when: 'gentle', text: 'If saying no has been hard for you, practise with small things first: a drink, a seat, a plan. Strength with small nos grows into strength with big ones.' }],
    embrace: [
      ['A clear yes, no or not yet', 'Going along to avoid a scene'],
      ['Checking in as you go', 'Assuming earlier yes means later yes'],
      ['Staying sober enough to decide', 'Deciding when you cannot'],
      ['Reading how he responds to a no', 'Excusing pressure as passion']]
  };

  D.CONTENT['15.3'] = {
    lead: 'There is no single right choice about physical intimacy. There is the choice that is truly yours, made clearly, and shared early with the person who may share your life.',
    story: { h: 'Story: Aiko, 32, Kyoto', p: [
      'Aiko had been taught to wait until marriage and had mostly stopped examining why. After a long relationship ended, she asked herself what she actually wanted. She spoke to a friend, a counsellor and, quietly, to her grandmother. She realised that waiting still felt like her own choice, but she wanted it to be a choice she made, not one she inherited.',
      'On her third date with Kenji, she said, “I want to tell you where I am, so you do not have to guess. I am waiting until I am married, and I would like us to be affectionate in ways that fit that.” Kenji was quiet, then said he respected that and wanted to think about what it meant for him. They talked again a week later. Aiko said, “I did not need him to agree immediately. I needed him to take me seriously.”',
      'Aiko is a composite character.'] },
    framework: { h: 'Framework: want, wait and will-not', intro: 'A clear paragraph, in your own words.', items: [
      ['What I want:', 'the kind of closeness, commitment and trust you hope for, and what it means to you.'],
      ['What I am waiting for:', 'a stage, a commitment, a ceremony, a feeling of safety, or a particular kind of trust. Waiting can be a deep and wise choice.'],
      ['What I will not do:', 'the lines you will not cross for anyone, for example anything unsafe, against your values or against your conscience.'],
      ['Share it early:', 'tell a partner your values before you are in the moment. Watch how he receives them. Respect is the first thing you are looking for.'],
      ['Health and protection:', 'talk to your own doctor about protection, screening and your body. Talk with a partner about health before intimacy, including honesty about history and testing.'],
      ['Emotional timing:', 'closeness changes how we feel. Many people find that physical intimacy deepens attachment fast. Know your own pattern.'],
      ['Changing your mind:', 'you may change your mind in either direction. Your values can grow. Nobody else may hurry or shame that.']] },
    exercise: { h: 'Exercise: your values paragraph', intro: 'About 45 minutes. Write for yourself first.', blocks: [
      { t: 'ta', k: 'want', label: 'What I want from closeness in a relationship', rows: 3, ph: 'Trust, tenderness, commitment, joy.' },
      { t: 'ta', k: 'wait', label: 'What I am waiting for, if anything', rows: 3, ph: 'A stage, a commitment, a feeling of safety.' },
      { t: 'ta', k: 'never', label: 'What I will not do, for anyone', rows: 3, ph: 'My lines.' },
      { t: 'ta', k: 'say', label: 'How I would tell a partner my values, in a calm moment', rows: 3, ph: 'Warm, clear, and early.' },
      { t: 'inp', k: 'doctor', label: 'A doctor or clinic I trust for my own health questions', ph: 'Name or type. Look one up if I do not have one.' },
      { t: 'inp', k: 'wall', label: 'What would tell me we are not aligned', ph: 'For example: mockery, pressure or sulking after I state my limits.' }] },
    roots: {
      christian: 'Many Christian traditions teach that physical intimacy belongs within marriage, and communities differ widely in how they live this. Consider what your tradition teaches, what you believe, and whom you could talk to who will be both honest and kind.',
      muslim: 'Many Muslim traditions teach that sexual intimacy belongs within marriage, and also value modesty, mutual respect and consent within it. Consider what your community teaches, what you personally hold, and whom you could consult with both knowledge and care.',
      jewish: 'Many Jewish traditions treat marital intimacy as a mitzvah and a source of joy, with a wide range of views on what comes before it. Consider what your community teaches, what you personally hold, and a rabbi or mentor with whom you can talk openly.',
      hindu: 'Many Hindu traditions honour kama as one of life’s legitimate aims alongside dharma, artha and moksha, within a framework of responsibility and respect. Practice varies by region and family. Consider what balance feels right to you.',
      buddhist: 'Many Buddhist traditions emphasise non-harm, honesty and mindfulness in intimate life, and approach it without shame. Consider how those principles shape your choices.',
      secular: 'Consider which principles, such as honesty, consent, care and responsibility, you would want to guide your intimate life, and how you will keep them.'
    },
    foryou: [{ when: 'gentle', text: 'If your values and your family’s do not match, take your time. You can respect where you come from and still be honest about where you are.' }],
    embrace: [
      ['A paragraph you wrote yourself', 'Rules you never examined'],
      ['Telling a partner early and calmly', 'Letting the moment decide'],
      ['Waiting, if that is your choice', 'Being shamed for waiting'],
      ['Honest talk about health and testing', 'Silence and hope']]
  };

  D.CONTENT['15.4'] = {
    lead: 'Intimacy is much wider than sex: affection, attention, humour, privacy, trust and being known. Learn to talk about it, and you can build closeness that lasts.',
    story: { h: 'Story: Bronwyn, 44, Cardiff', p: [
      'Bronwyn and Tom had been together for two years. Bronwyn missed affection: small touches, a hand on the back, a long hug. Tom assumed that she was happy because she never said otherwise. She, meanwhile, assumed he did not care.',
      'After a quiet evening, she said, “I would love more affection in everyday life. It makes me feel close to you.” Tom was surprised and relieved, and said he had been afraid of pushing. They agreed on small habits: a long hug when they got home, a hand held during films. Bronwyn said, “I thought I was asking for something large. It turned out to be five minutes a day, and it changed how we felt.”',
      'Bronwyn is a composite character.'] },
    framework: { h: 'Framework: the many kinds of closeness', intro: 'Name them, then talk about them.', items: [
      ['Emotional:', 'being heard, trusted and known.'],
      ['Physical affection:', 'hugs, hand-holding and tenderness, which are not always a prelude to something else.'],
      ['Intellectual and spiritual:', 'sharing ideas, beliefs and wonder.'],
      ['Play and humour:', 'joy and lightness together.'],
      ['Sexual intimacy:', 'for those who choose it, a part of closeness that thrives on safety, communication and mutual care.'],
      ['Difference is normal:', 'partners often want different amounts and kinds of closeness at different times. It is something to talk about, not a verdict.'],
      ['Help is available:', 'if something is painful, distressing, absent or changed, a doctor or a trained counsellor can help. Seeking help is a sign of care.']] },
    exercise: { h: 'Exercise: your intimacy snapshot and your words', intro: 'About 45 minutes. This is a snapshot of right now.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'body', text: 'I am at peace with my body and my feelings, whatever I choose to do.' },
        { axis: 'voice', text: 'I can say yes, no or not yet, clearly and without apologising.' },
        { axis: 'values', text: 'I know my values and limits about physical intimacy.' },
        { axis: 'talk', text: 'I can talk about affection and closeness with someone I trust.' }] },
      { t: 'result', fn: 'intimacy' },
      { t: 'chips', k: 'closeness', max: 4, options: ['Being heard', 'Hugs and small touches', 'Shared humour', 'Quality time', 'Shared faith or wonder', 'Words of love', 'Privacy and trust', 'Physical intimacy within my values'] },
      { t: 'ta', k: 'ask', label: 'One thing I could ask for, in everyday closeness', rows: 2, ph: 'For example: a long hug when we get home.' },
      { t: 'ta', k: 'sentence', label: 'One true sentence I could say about what closeness means to me', rows: 3, ph: 'To a partner, a friend, a counsellor.' }] },
    foryou: [{ when: 'gentle', text: 'If this is hard to talk about, practise with a friend or counsellor first. Words get easier with use.' }],
    embrace: [
      ['Naming the kinds of closeness you want', 'Hoping he will guess'],
      ['Small daily habits of affection', 'Waiting for grand gestures'],
      ['Treating difference as something to talk about', 'Treating it as a verdict on love'],
      ['Seeing a doctor or counsellor for pain or distress', 'Suffering in silence']]
  };

  D.CONTENT['15.5'] = {
    lead: 'Sometimes closeness is complicated by pain, history, health or fear. There is help, and you do not need to go through it alone or in silence.',
    story: { h: 'Story: Rukmini, 38, Chennai', p: [
      'Rukmini had been in a relationship with Arjun, who was patient and kind. Even so, she found herself tensing and withdrawing when they got close, and she did not understand why. She felt embarrassed and tried to push through, which made it worse.',
      'A friend encouraged her to talk to a counsellor, who listened without hurry and helped her understand that her body was telling her something she was not yet ready to say aloud. She also saw her doctor, who checked for physical causes. Over months, she and Arjun moved at her pace. Rukmini said, “I was afraid that needing help meant something was wrong with me. It meant that I was taking myself seriously.”',
      'Rukmini is a composite character.'] },
    framework: { h: 'Framework: who can help with what', intro: 'A short map for hard moments.', items: [
      ['A doctor:', 'for pain, changes in desire, health, contraception, screening, medication effects or hormones. Choose someone you can be honest with.'],
      ['A counsellor or therapist:', 'for fear, shame, past experiences, difficulty with closeness, or relationship patterns. Trained help can work at your pace.'],
      ['A trusted person:', 'a friend, relative or mentor who listens without judging.'],
      ['A support service:', 'for anyone who has experienced something unwanted or harmful. You can reach out at any time, with no deadline.'],
      ['A faith guide:', 'if it matters to you, a pastor, imam, rabbi, priest or elder who is both wise and kind.'],
      ['Pace and partners:', 'a good partner will move at the pace you need. Say what you can, and see how he responds.'],
      ['Emergency:', 'if you are in danger now, contact your local emergency service.']] },
    exercise: { h: 'Exercise: your intimacy plan', intro: 'About 35 minutes. Gather what you wrote in this module.', blocks: [
      { t: 'summary15' },
      { t: 'ta', k: 'help', label: 'Who I would talk to if something felt hard, and how I would reach them', rows: 3, ph: 'A doctor, a counsellor, a friend, a service. Look up names now, so they are ready.' },
      { t: 'ta', k: 'pace', label: 'What pace feels right for me right now', rows: 3, ph: 'In my own words.' },
      { t: 'inp', k: 'first', label: 'My next small step', ph: 'For example: book a check-up, or talk to a friend.' },
      { t: 'p', text: 'You do not need to write anything painful in this app. This plan is for you.' }] },
    foryou: [{ when: 'gentle', text: 'You do not have to be ready for anything. Knowing where help is can be enough for now.' }],
    embrace: [
      ['Asking for help early', 'Pushing through in silence'],
      ['A pace that suits you', 'A pace that suits him'],
      ['Telling one trusted person', 'Carrying it all alone'],
      ['Treating your needs as legitimate', 'Calling them a problem with you']]
  };

  D.SCENARIOS.push(
    { id: 's15-1', module: 15, title: 'Do you want to come up?',
      setup: 'After a lovely fifth date, Marcus walks you home and asks if you would like him to come up. You like him a lot and are not sure what you want. You feel a little pressure, and a little excitement.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Smile and say, “I have loved tonight, and I want to take this slowly. I will see you on Saturday.”',
          protects: 'It keeps your pace and keeps the warmth.', cost: 'He might be disappointed.',
          try: 'Watch how he responds. His reaction is the information.' },
        { id: 'b', tag: 'accommodate', text: 'Say yes because you do not want to seem cold.',
          protects: 'It avoids awkwardness.', cost: 'It puts his comfort ahead of your decision.',
          try: 'You can enjoy the evening and still say not yet.' },
        { id: 'c', tag: 'react', text: 'Snap that he should not assume anything and walk in.',
          protects: 'It ends the pressure.', cost: 'It may turn a simple question into an insult.',
          try: 'Asking is not a crime. A calm answer tells you more.' },
        { id: 'd', tag: 'withdraw', text: 'Say goodnight quickly and avoid him for a few days.',
          protects: 'It avoids the conversation.', cost: 'It leaves him confused, and you with questions.',
          try: 'One honest sentence is kinder to both of you.' },
        { id: 'e', tag: 'ruminate', text: 'Stand there for several minutes unable to decide, then say yes to end the tension.',
          protects: 'It ends the moment.', cost: 'It makes a choice to relieve pressure.',
          try: 'You do not have to decide on the spot. “Not tonight” is a full answer.' }
      ] },
    { id: 's15-2', module: 15, title: 'Waiting until marriage',
      setup: 'You told Daniel that you are waiting until marriage. He said, “That is fine,” but this week he has joked about it twice and asked whether it is “really set in stone”.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say calmly, “I said it seriously. I need you to respect it, not tease me about it. Can we talk about what it means for you?”',
          protects: 'It protects your values and invites honesty.', cost: 'The conversation may be uncomfortable.',
          try: 'Notice whether he listens, or whether the teasing becomes pressure.' },
        { id: 'b', tag: 'accommodate', text: 'Laugh along and say you might change your mind.',
          protects: 'It keeps the mood light.', cost: 'It undermines something you meant.',
          try: 'Change your mind for yourself, not to relieve a joke.' },
        { id: 'c', tag: 'react', text: 'End the relationship that night.',
          protects: 'It defends your line.', cost: 'You lose the chance to see whether he can respect it when asked.',
          try: 'Give one clear conversation first.' },
        { id: 'd', tag: 'withdraw', text: 'Stop mentioning it and hope it stops.',
          protects: 'It avoids tension.', cost: 'The pressure usually returns.',
          try: 'State it once more, clearly.' },
        { id: 'e', tag: 'ruminate', text: 'Question whether you are being unreasonable or old-fashioned.',
          protects: 'It looks humble.', cost: 'It treats your values as a problem.',
          try: 'Your values are yours. The question is whether he respects them.' }
      ] },
    { id: 's15-3', module: 15, title: 'Different appetites',
      setup: 'In your committed relationship of a year, you want more affection in daily life and he wants more physical intimacy than you do. You feel guilty and a little pressured, and he is hurt by your “not tonight”.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Choose a calm time and say, “I want closeness with you. Let us talk about what each of us needs, and find things we both enjoy.”',
          protects: 'It treats difference as something to solve together.', cost: 'It takes courage and time.',
          try: 'Name a few small things each of you would love, and try them.' },
        { id: 'b', tag: 'accommodate', text: 'Agree whenever he asks, to avoid hurting him.',
          protects: 'It reduces conflict.', cost: 'It erodes your own desire and trust over time.',
          try: 'Intimacy you give out of guilt does not build closeness.' },
        { id: 'c', tag: 'react', text: 'Snap that he only cares about one thing.',
          protects: 'It releases frustration.', cost: 'It wounds him and widens the gap.',
          try: 'Say what you need rather than what he is.' },
        { id: 'd', tag: 'withdraw', text: 'Avoid touch altogether so there are no awkward moments.',
          protects: 'It avoids the question.', cost: 'It starves affection and builds distance.',
          try: 'Keep small touch alive while you talk.' },
        { id: 'e', tag: 'ruminate', text: 'Decide privately that something is wrong with you, and say nothing.',
          protects: 'It feels responsible.', cost: 'It blocks help and keeps him guessing.',
          try: 'If desire has changed or hurts, a doctor or counsellor can help. It is common.' }
      ] },
    { id: 's15-4', module: 15, title: 'Going slowly',
      setup: 'Your new partner Leo is kind and patient. You find yourself tense when things get close, and you do not fully know why. A friend says, “Just relax and get over it.”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Tell Leo, “I want to go slowly. It is not about you. I might talk to someone to understand it better.” Then book an appointment with a counsellor or doctor.',
          protects: 'It honours your pace and seeks support.', cost: 'It means being a little vulnerable.',
          try: 'Notice how he responds. Patience is a good sign.' },
        { id: 'b', tag: 'accommodate', text: 'Push through to keep things moving.',
          protects: 'It avoids a hard conversation.', cost: 'It can deepen fear and distance.',
          try: 'Your body is giving you information. You can listen to it.' },
        { id: 'c', tag: 'react', text: 'Tell your friend she does not understand and stop talking to her about it.',
          protects: 'It ends the pressure.', cost: 'It cuts off support.',
          try: 'Find a friend or professional who listens well.' },
        { id: 'd', tag: 'withdraw', text: 'End things with Leo before they get closer.',
          protects: 'It avoids the fear.', cost: 'It may lose a good relationship you might have paced.',
          try: 'Slow is an option. Ending is not the only one.' },
        { id: 'e', tag: 'ruminate', text: 'Search endlessly online for what is wrong with you.',
          protects: 'It feels like action.', cost: 'It increases anxiety without help.',
          try: 'One conversation with a professional is worth more than a hundred searches.' }
      ] }
  );

  D.ASK.push(
    { id: 'consent', title: 'Consent, pacing and saying no', domains: ['d12'], modules: [15],
      keys: ['consent', 'not ready for sex', 'not ready to sleep', 'not ready for that', 'say no to sex', 'pushing me', 'pushy', 'wants sex', 'sleep together', 'sleep with him', 'how far', 'physical with', 'come up', 'go home with', 'what if he stops'],
      answer: ['Consent is a clear, free yes from someone who can say no, and it can change at any moment. You can say yes, no or not yet, and you never owe anyone your body, whatever has been spent or promised.',
        'Watch how he responds to a no. A good partner stops, without sulking or argument. If he pressures or punishes, that is a safety signal; Module 13 covers what to do. Lesson 15.2 helps you find your words.'] },
    { id: 'sexvalues', title: 'Waiting, values and limits', domains: ['d12'], modules: [15],
      keys: ['wait until marriage', 'waiting until marriage', 'waiting for marriage', 'virgin', 'abstinence', 'saving myself', 'celibate', 'celibacy', 'purity', 'first time', 'my first', 'casual sex', 'my limits', 'physical limits'],
      answer: ['Waiting, being exclusive, exploring and not wanting are all choices a woman may make. What matters is that the choice is yours, made clearly, and told early to a partner, so you can see whether he respects it.',
        'Write a short paragraph of what you want, what you are waiting for and what you will not do. Talk to your own doctor about health and protection. Lesson 15.3 helps you write it, including a page for your tradition.'] },
    { id: 'desire', title: 'Desire, difference and pain', domains: ['d12'], modules: [15],
      keys: ['low desire', 'no desire', 'libido', 'not in the mood', 'mismatched', 'different drive', 'different appetites', 'pain during', 'painful', 'dryness', 'no interest in sex', 'lost interest', 'desire changed'],
      answer: ['Differences in desire are very common and change with stress, health, medication, hormones, age and life. They are something to talk about, not a verdict on love. Pain, or a sudden change, is worth taking to a doctor, and a trained counsellor can help with the rest.',
        'Try naming the many kinds of closeness you both want, and start with small daily habits. Lesson 15.4 helps you find the words.'] },
    { id: 'intimacytalk', title: 'Talking about intimacy and shame', domains: ['d12'], modules: [15],
      keys: ['talk about sex', 'talk about intimacy', 'talk about closeness', 'tell him what i want', 'what i like', 'ashamed of sex', 'shame about sex', 'guilty about sex', 'taboo', 'sex education', 'cuddle', 'hug', 'touch'],
      answer: ['The first conversation is the hardest. Start with a calm moment and one true sentence about what closeness means to you, or practise first with a friend or counsellor. Affection and daily touch are a good place to begin.',
        'If you carry shame from what you were taught, you can look at it, keep what is true and kind, and set down the rest. Lessons 15.1 and 15.4 walk through both.'] }
  );

  D.REFLECT = D.REFLECT || {};
  D.REFLECT[15] = {
    idea: 'Your body and your desire are yours. Whatever you choose, waiting, committing, exploring or resting, the choice is most alive when it is made freely, with honesty, and with someone who respects it.',
    qs: ['What do I want my intimate life to be built on, whatever stage I am at?', 'Who could I trust with a true sentence about this, and what would I want them to know?']
  };
})();
