/* Readiness Snapshot: two parallel scenario forms (A and B), nine skills, two questions per skill in each sitting.
   Scores are never shown while she takes a form. Each option is [score 0 to 3, text]. Plain data, no logic. */
(function () {
  var D = window.WAD_DATA;

  D.READY_SKILLS = [
    { id: 'self', name: 'Self-knowledge', what: 'Noticing your own patterns and what drives them.',
      grow: 'Keep a short weekly note on what you felt, what set it off and what helped. Modules 2 and 3 are the place to revisit.' },
    { id: 'bound', name: 'Boundaries and values', what: 'Knowing what matters to you and holding it kindly.',
      grow: 'Practise one honest, kind “no” a week, and name one value before each important decision. Revisit Modules 2, 3 and 10.' },
    { id: 'comm', name: 'Communication', what: 'Saying what you feel and need, clearly and calmly.',
      grow: 'Use the three-part sentence: what happened, how it felt, what you would like. Revisit Module 9.' },
    { id: 'disc', name: 'Discernment', what: 'Trusting steady actions over charm and promises.',
      grow: 'Keep a simple log of what someone does over weeks, apart from what he says. Revisit Module 12.' },
    { id: 'safe', name: 'Safety', what: 'Recognising risk early and acting to protect yourself.',
      grow: 'Write down your safety basics: who you would tell, how you would leave, and your local support service. Revisit Modules 12 and 13.' },
    { id: 'pace', name: 'Pacing and consent', what: 'Moving at a speed that is honest and agreed by both.',
      grow: 'Before each step, ask “Is this what I want, or what I fear losing him over?” Revisit Module 15.' },
    { id: 'part', name: 'Partnership', what: 'Working out money, work, family and big choices together.',
      grow: 'Hold one calm, planned conversation about a real topic, such as money or where to live. Revisit Module 16.' },
    { id: 'resil', name: 'Resilience', what: 'Feeling hard things and recovering without giving up on yourself.',
      grow: 'Plan your comfort in advance: two people, two activities and one routine you keep when things are hard. Revisit Module 13.' },
    { id: 'bridge', name: 'Respect across difference', what: 'Meeting different cultures, faiths and families with respect and a steady self.',
      grow: 'Ask about meaning before judging a custom, and say what matters to you without pressure either way. Revisit Module 14.' }
  ];

  /* Item i belongs to skill READY_SKILLS[i % 9]. Sitting 1 is items 1 to 9, sitting 2 is items 10 to 18. */
  function Q(id, title, setup, opts) {
    return { id: id, title: title, setup: setup, options: opts.map(function (o, i) { return { id: 'abcd'.charAt(i), score: o[0], text: o[1] }; }) };
  }

  D.READY_FORMS = {
    A: [
      Q('A1', 'The familiar pull', 'For the third time you feel drawn to someone who is charming at first and hard to reach later. A friend says gently, “This looks familiar.”', [
        [1, 'Tell yourself this one is different because you have grown, and see how it goes with him.'],
        [3, 'Look at what the three had in common, and decide what you would do differently.'],
        [0, 'Decide it is bad luck, since you cannot control who you are attracted to.'],
        [2, 'Ask your friend what she sees, listen, and think it over before you decide.']]),
      Q('A2', 'The weekly evening', 'A man you like asks you to skip your regular evening with close friends for the third week running, so you can spend it with him. You enjoy him, and you value that evening.', [
        [2, 'Say yes this once, and then tell him you would like to keep that evening from now on.'],
        [0, 'Cancel, since a quiet weekend with him is easier than a disagreement.'],
        [3, 'Tell him the evening matters to you, suggest another time, and see how he reacts.'],
        [1, 'Go with him without mentioning it, and feel quietly resentful about it.']]),
      Q('A3', 'Cancelled again', 'He cancels plans at the last minute for the second time. You feel hurt and a little angry, and your thumbs are over the keyboard.', [
        [3, 'Wait until you are calmer, then say what happened, how it felt and what you want.'],
        [1, 'Reply “No problem at all!” and keep your feelings to yourself to keep things light.'],
        [0, 'Send a sharp message saying he clearly does not care about you or your time at all.'],
        [2, 'Reply that you are disappointed and ask to talk when you both have time.']]),
      Q('A4', 'The whirlwind', 'Three weeks in, a new match is intensely affectionate. He messages constantly, says he has never felt this way, and suggests a holiday together. You are flattered and a little dizzy.', [
        [0, 'Book the holiday, because certainty like this is rare and you should not let it slip.'],
        [2, 'Enjoy it fully, and decide about the holiday once you know him better.'],
        [1, 'Match his intensity, so he does not lose interest or think you are cold.'],
        [3, 'Enjoy it, go at your own pace, and watch whether his actions stay steady over time.']]),
      Q('A5', 'Where are you?', 'A man you have seen for two months insists on knowing where you are at all times “because he worries”. He checks your phone when you leave the room and turns cold when you see your friends.', [
        [1, 'Tell him firmly it is not okay, then give him a fair chance to change his behaviour.'],
        [3, 'Treat it as a serious warning sign: tell someone you trust and ask a support service.'],
        [0, 'Share your location and passwords, so he has no reason to worry and nothing to doubt.'],
        [2, 'Tell a friend what is happening, and keep some distance from him for now.']]),
      Q('A6', 'Following the chemistry', 'After four dates you like him. He is pushing to move quickly physically and you are not sure. He says he is “just following the chemistry”.', [
        [0, 'Go along with it, a little uneasy, and tell yourself that this is just what is normal.'],
        [1, 'Stop replying without a word, since explaining yourself feels awkward and unnecessary.'],
        [3, 'Tell him plainly what you are comfortable with now, and notice how he responds.'],
        [2, 'Say you need more time, without going into detail.']]),
      Q('A7', 'Different about money', 'Eight months in, you notice he spends freely and you save carefully. A shared bill is coming and you feel tense.', [
        [3, 'Set a calm time to share how you each see money and agree how to split costs.'],
        [2, 'Split it evenly this time and hope the bigger picture sorts itself out later.'],
        [0, 'Judge him privately for being careless and decide he is not mature enough.'],
        [1, 'Quietly pay more than your share, to avoid a fight over something that seems small.']]),
      Q('A8', 'It ends', 'A relationship you had hoped for ends after six months. You feel crushed. Your first impulse is to delete the apps, stop going out and speak to no one.', [
        [1, 'Stay busy with work and projects every evening, so that you never have to feel it.'],
        [0, 'Decide something is wrong with you and that love is not for you.'],
        [2, 'Take a short break, then choose when you want to meet people again.'],
        [3, 'Let yourself grieve, lean on a friend or two, and date again when you want to.']]),
      Q('A9', 'The family meal', 'The man you are seeing comes from a different faith, culture and language from yours. His mother invites you to a family meal and you are not sure of the customs.', [
        [2, 'Go, copy what others do, and hope that your mistakes go unnoticed by his family.'],
        [3, 'Ask him what matters most to the family, learn the basics, and go as yourself.'],
        [1, 'Politely decline, so that you do not risk offending anyone by mistake.'],
        [0, 'Go, and say some customs seem old-fashioned, because you prefer to be honest.']]),
      Q('A10', 'The phone', 'After each date you check your phone constantly, and your mood rises and falls with whether he replies.', [
        [3, 'Notice the pattern, ask what you are afraid of, and choose a small steadying habit.'],
        [1, 'Text him more, so you get your answers sooner and worry less about what he thinks.'],
        [2, 'Put the phone away for the evening and see whether that helps.'],
        [0, 'Decide you are simply too much, and try to hide how you feel.']]),
      Q('A11', 'Just until payday', 'A man you have been dating a few weeks asks to borrow a large sum “just until payday”. You are not comfortable, and you do not want to seem stingy.', [
        [1, 'Lend it, because refusing could damage a relationship that is going well.'],
        [2, 'Lend a smaller amount that you could afford to lose.'],
        [3, 'Say kindly that you do not lend money this early on, and hold to it.'],
        [0, 'Lend it, then feel angry and bring it up in later arguments.']]),
      Q('A12', 'Saying what you want', 'After a good evening you would like to tell him you want to be exclusive. You are nervous he will say no.', [
        [2, 'Drop hints and see whether he picks up on them, rather than risk asking directly.'],
        [0, 'Assume you are exclusive, and act hurt if it turns out he is not.'],
        [1, 'Wait for him to bring it up, however long that takes.'],
        [3, 'Tell him you have enjoyed it and what you hope for, then ask what he wants.']]),
      Q('A13', 'Not the relationship type', 'On the second date he tells you he is “not really the relationship type”, then adds, “but who knows”.', [
        [3, 'Take what he says seriously, and decide whether it fits what you want.'],
        [1, 'Hope that time with you will change his mind about relationships.'],
        [0, 'Treat it as a challenge, since the hard ones are often worth winning.'],
        [2, 'Stay curious and see how his actions develop over the next weeks.']]),
      Q('A14', 'The first meeting', 'You are about to meet someone from an app for the first time.', [
        [1, 'Meet in a public place, but switch your phone off so you can be fully present with him.'],
        [3, 'Meet in public, tell a friend where you will be, and arrange your own way home.'],
        [0, 'Let him collect you from home, since it feels easier and friendlier.'],
        [2, 'Meet in a public place and decide about the rest on the day.']]),
      Q('A15', 'Early words of love', 'Two weeks in, he says “I love you” and asks if you feel the same.', [
        [2, 'Tell him you need more time before you can give him an honest answer.'],
        [0, 'Say it back, to see whether it keeps him interested in you for longer.'],
        [3, 'Be honest: you are enjoying it, you are not there yet, and glad to continue.'],
        [1, 'Say it back, because you would hate to hurt his feelings or to spoil things.']]),
      Q('A16', 'The question of children', 'Your partner wants children. You are not sure you do. Neither of you has raised it.', [
        [0, 'Hope that one of you will simply change your mind in time, so that nobody has to lose.'],
        [1, 'Say you probably will want them, to avoid a difficult conversation this early.'],
        [2, 'Wait until the relationship feels more settled before you raise it with him.'],
        [3, 'Tell him honestly where you are, ask where he is, and keep the conversation going.']]),
      Q('A17', 'A poor match', 'A friend sets you up and the date is a mismatch: he talks only about himself. You come home thinking, “This is hopeless.”', [
        [0, 'Be annoyed at your friend for the mismatch and stop speaking to her for a while.'],
        [1, 'Take it as proof that dating is hopeless and that you are wasting your time.'],
        [3, 'Note what you learned about what you want, thank your friend, and carry on.'],
        [2, 'Take a break from dating, then come back to it when you feel curious again.']]),
      Q('A18', 'What your friends think', 'Your closest friends think the man you are seeing is not “good enough” because of his background, whether class, culture or faith. You like him.', [
        [1, 'Stop seeing him, to keep the peace with the friends who know you best.'],
        [3, 'Listen for worries about how he treats you, not where he is from, and keep going.'],
        [2, 'Keep seeing him, but stop talking about him to them to avoid the arguments.'],
        [0, 'Distance yourself from the friends who disagree, since they are not supportive.']])
    ],
    B: [
      Q('B1', 'Always in charge', 'You notice that you choose the plans, the places and the topics on every date, and you come home drained.', [
        [3, 'Ask yourself why you take charge, and try a date where you leave more space.'],
        [1, 'Keep going exactly as you are, because someone has to and you are good at it.'],
        [0, 'Decide he is lazy and lose interest in him.'],
        [2, 'Tell him you are tired and ask him to plan the next one.']]),
      Q('B2', 'Just joking', 'In front of his friends he teases you about your work, beliefs or way of life, “just joking”. You feel small.', [
        [1, 'Laugh along and swallow it, so you do not look oversensitive in front of his friends.'],
        [2, 'Say “that is not funny” in the moment, in front of everyone.'],
        [0, 'Stop mentioning your work or beliefs around him and his friends.'],
        [3, 'Tell him privately that it hurts, ask him to stop, and see whether he does.']]),
      Q('B3', 'Going in circles', 'You disagree about how to spend a holiday. He goes quiet and you get louder. The conversation is going in circles.', [
        [2, 'Keep explaining your side until he finally understands it, however long it takes.'],
        [3, 'Suggest a break, agree when to return, then each say what matters most.'],
        [1, 'Give in, so that it stops and the evening is not spoiled.'],
        [0, 'Bring up older arguments, to show him this is a pattern.']]),
      Q('B4', 'How he treats others', 'A man is wonderful to you, but he is rude to waiters and cancels on his friends without a thought.', [
        [2, 'Tell him you noticed it and see whether he changes how he behaves.'],
        [1, 'Assume he will treat you differently because you are special to him.'],
        [3, 'Treat it as real information about how he treats people, and keep watching.'],
        [0, 'Put it down to stress every time, because he is so lovely to you in private.']]),
      Q('B5', 'The plate', 'In an argument he throws a plate at the wall near you. Then he cries, apologises and promises it will never happen again.', [
        [3, 'Treat it as a safety issue: speak to someone you trust or a support service.'],
        [2, 'Tell a friend what happened, and keep some distance from him for the time being.'],
        [1, 'Accept the apology, since it was one time and he was clearly upset.'],
        [0, 'Take responsibility for having upset him, so it does not happen again.']]),
      Q('B6', 'He wants to wait', 'He tells you he wants to wait before being physically intimate, for reasons that matter to him. You are disappointed.', [
        [2, 'Agree, and quietly hope that he will change his mind later.'],
        [0, 'Keep pressing gently until he gives in, since he clearly likes you.'],
        [1, 'Take it personally as a rejection, and end things without having a conversation.'],
        [3, 'Thank him for telling you, share where you stand, and see if your values fit.']]),
      Q('B7', 'Planning to live together', 'You are planning to live together. You notice you are already doing most of the planning and the housework.', [
        [1, 'Do it yourself, because it is quicker than arguing about it every single time.'],
        [2, 'Raise it after you move in, once you see how it goes.'],
        [3, 'Talk before you move about how you will share the work, and agree specifics.'],
        [0, 'Keep score silently and bring it up in a later argument.']]),
      Q('B8', 'By text', 'He ends things by text and you are blindsided. You feel humiliated.', [
        [0, 'Post about it online, so others can see how he treated you.'],
        [3, 'Let yourself feel it, tell someone you trust, and look after sleep and food.'],
        [1, 'Write him a long reply, so that he finally understands exactly what he has thrown away.'],
        [2, 'Ask for a call to understand, then let it go whatever he says.']]),
      Q('B9', 'What his family expects', 'His family expects things of you that you did not anticipate, such as how to dress, how roles are shared or how often you visit. You are not sure which are reasonable.', [
        [3, 'Ask what is expected and why, share what matters to you, and find common ground.'],
        [0, 'Pretend to agree for the sake of peace, while planning to do things your own way.'],
        [2, 'Go along with most of it for now and see how you feel as time goes on.'],
        [1, 'Refuse everything on principle, so that no one can take advantage of you.']]),
      Q('B10', 'Compliments', 'A man compliments you and you instantly think, “He does not really mean it.” This happens with kind words from friends too.', [
        [2, 'Keep it to yourself and keep dating, and hope the feeling fades by itself.'],
        [0, 'Conclude that men say things they do not mean, and protect yourself from all of them.'],
        [1, 'Test him by pushing him away for a while, to see whether he stays.'],
        [3, 'Notice the reflex, ask what the compliment touches, and practise saying thank you.']]),
      Q('B11', 'The old friend', 'A man you have seen for a few months says it makes him uneasy that you are close to a male friend of many years, and asks you to stop seeing him.', [
        [1, 'Stop seeing the friend, because the relationship matters more and it is not worth the conflict.'],
        [3, 'Hear his feeling, explain what the friendship means, and see whether he accepts your answer.'],
        [0, 'See the friend in secret, so there is no argument and nobody gets hurt.'],
        [2, 'Say you will think about it, and watch carefully how he reacts to that.']]),
      Q('B12', 'No spark', 'After three dates you know you do not feel a spark, and he has just asked to see you again.', [
        [2, 'Tell him you are very busy at the moment and may be free later.'],
        [1, 'Reply less and less, hoping he gets the message without a conversation.'],
        [3, 'Tell him kindly and clearly, thank him, and do not invent a reason.'],
        [0, 'Stop replying without a word, since a clean break is kinder than an awkward talk.']]),
      Q('B13', 'Separated, sort of', 'He says he is separated but still lives with his wife “for the children”, and he is never free at weekends or holidays.', [
        [3, 'Take his actions as the truth, and decide what you are willing to accept.'],
        [0, 'Believe it is about to end, because he says so and he seems sincere.'],
        [2, 'Ask for a timeline and decide according to what actually happens.'],
        [1, 'Wait, because these things usually sort themselves out in time if you are patient.']]),
      Q('B14', 'An urgent request', 'A match you have chatted with for three weeks, and never met, asks you for money for an urgent family medical bill.', [
        [0, 'Send the full amount, since he would do the same for you if you were in need.'],
        [1, 'Send a small amount, to test whether he is who he says he is.'],
        [2, 'Say no, and keep chatting to see whether he is genuine.'],
        [3, 'Do not send money, tell someone you trust, and report the profile.']]),
      Q('B15', 'Moving in so soon', 'A month in, he suggests you move in together because it is “practical”.', [
        [1, 'Agree, because you do not want to lose the momentum or upset him by hesitating.'],
        [3, 'Say you want more time, and ask what each of you wants from living together.'],
        [2, 'Agree, but keep your own home for now as a back-up.'],
        [0, 'Agree and give up your own home straight away to show commitment.']]),
      Q('B16', 'Where to live', 'You and your partner disagree about where to live: near your family and community, or near his job elsewhere.', [
        [2, 'Let whoever earns more decide, since it is the practical and fair choice.'],
        [1, 'Give in to avoid conflict, and hope it works out.'],
        [3, 'Share what each place means to you, and look at options before deciding.'],
        [0, 'Make your own plans quietly and tell him when they are settled.']]),
      Q('B17', 'Everyone is paired off', 'You are at a friend’s wedding and everyone seems to be in a couple. You feel lonely.', [
        [3, 'Be honest with a friend about how you feel, and plan something kind for later.'],
        [0, 'Accept a date with someone unsuitable, so that you are not alone in front of everyone.'],
        [2, 'Stay and focus on enjoying the parts of the day you can.'],
        [1, 'Leave early, since staying will only make the feeling worse.']]),
      Q('B18', 'The jokes', 'His friends tell jokes about people from your background. He laughs along, then says, “They do not mean it.”', [
        [1, 'Laugh along, so that you fit in and he does not feel embarrassed.'],
        [0, 'Answer with jokes about his own background, to make the point.'],
        [2, 'Leave the room quietly and say nothing, to avoid a scene with his friends.'],
        [3, 'Tell him how it landed, ask him to speak up, and watch whether he does.']])
    ]
  };

  D.READY_COPY = {
    post: 'This is your second snapshot: new scenarios on the same nine skills. Answer as you honestly would today, not as you think the guide would like. When you finish, both snapshots appear side by side, so you can see what has changed.',
    intro: 'This is a private snapshot of how you handle real moments in love. It is not a test you can pass or fail, and it does not decide whether you are ready for anything. It is a baseline you will compare with later, so the most useful thing you can do is answer as you honestly would today, not as you think you should.',
    how: ['Two short sittings of 9 scenarios each, about 8 minutes apiece. You can stop between them.',
      'Choose what you would most likely do. There is no feedback while you answer, and no score until the very end of the guide.',
      'Near the end, you will take a second set of different scenarios covering the same skills. Then you will see both side by side.',
      'Your answers stay on this phone and are included in your backup. They are not added to your context summary.'],
    safety: 'If any scenario brings up something painful or frightening from your own life, pause. Speak to someone you trust, a local support service, or your local emergency service if you are in danger.'
  };
})();
