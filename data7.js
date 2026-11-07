/* Module 6: Ambition, Money and Independence. General guidance only: no investment advice, no income or savings targets. */
(function () {
  var D = window.WAD_DATA;

  D.MOD_INFO[6] = {
    title: 'Ambition, Money and Independence',
    intro: 'A woman who builds her own life, understands her money and can stand on her own is not less lovable. She is a better partner and a safer one. This module helps her own her ambition, make peace with money, build a safety net, talk about money in a relationship, and design the next year of her work and life.',
    safety: 'This module is general guidance, not financial, legal or tax advice. It sets no income or savings targets, and every situation and country is different. If a partner ever controls your money, cuts you off from your accounts, hides finances to keep power, or threatens you over money, that is financial abuse. Tell someone you trust and contact a local support service. If you are in danger, contact your local emergency service now.'
  };

  [
    { id: '6.1', title: 'Your ambition, owned', mins: 45, line: 'Name your ambition without apology, and what you need from a partner to support it.' },
    { id: '6.2', title: 'Your money picture', mins: 45, line: 'See your money habits and your money story, and start one small habit.' },
    { id: '6.3', title: 'Independence and your safety net', mins: 45, line: 'Build the cushion, papers and options that let you choose freely.' },
    { id: '6.4', title: 'Money and partnership', mins: 45, line: 'Plan how you will talk about money, costs and family obligations.' },
    { id: '6.5', title: 'Designing your next year', mins: 40, line: 'Turn your ambition and money into a twelve-month plan.' }
  ].forEach(function (l) { l.module = 6; D.LESSONS.push(l); });

  D.MONEY = {
    plan: { name: 'Knowing your numbers', body: 'You cannot steer what you cannot see. A rough picture of what comes in and goes out each month is the base of every money decision.', practice: 'Spend twenty minutes this week listing your regular money in and out, in words or numbers, without judging it.' },
    save: { name: 'Setting something aside', body: 'Even a small, regular amount builds options and calm. The habit matters more than the size.', practice: 'Choose a small amount you will not miss, and set it aside on the same day each month.' },
    protect: { name: 'A cushion and your papers', body: 'A cushion for emergencies, and your key documents in order, turn a crisis into an inconvenience.', practice: 'Gather your key documents in one safe place, and choose a first amount for an emergency cushion.' },
    talk: { name: 'Talking about money', body: 'Money is a taboo in many families, which makes it harder to discuss calmly. Practice with people you trust makes it easier with a partner.', practice: 'Have one calm conversation about money this month with a friend, sibling or mentor you trust.' }
  };

  D.CONTENT['6.1'] = {
    lead: 'Ambition is attractive when it is honest. The right partner is not threatened by your direction. He wants to know where you are going.',
    story: { h: 'Story: Thandi, 35, Cape Town', p: [
      'Thandi had learned to shrink her ambition on dates. When men asked about work, she said, “Oh, I just do operations,” though she was running a team of forty and was about to be promoted. A man she liked heard about her promotion from a friend and said, a little hurt, “Why didn’t you tell me?”',
      'She realised she had been editing herself so that nobody would feel small. She started describing her work plainly, with pride and without bragging. Two men lost interest. One leaned in and asked what she wanted next. She said, “Being specific about my ambition screened out the people who would have resented it, and it saved me months.”',
      'Thandi is a composite character.'] },
    framework: { h: 'Framework: direction, pace and flexibility', intro: 'Three parts of ambition matter in a partnership.', items: [
      ['Direction:', 'what you are building, in work, service, creativity or learning. Name it plainly.'],
      ['Pace:', 'how intense you want this season to be. A season of rapid growth looks different from a season of steady work.'],
      ['Flexibility:', 'what you would adjust for a partner and family, and what you would not. Naming it early is kinder than discovering it later.'],
      ['What support looks like:', 'what you need from a partner: encouragement, practical help, space, or a shared plan.']] },
    exercise: { h: 'Exercise: your ambition, in your words', intro: 'About 45 minutes. Write without apology. You can soften it later if you want to.', blocks: [
      { t: 'inp', k: 'line', label: 'My ambition in one line', ph: 'For example: Build a company that employs a hundred women.' },
      { t: 'p', text: 'What kind of ambition is it? Choose up to two.' },
      { t: 'chips', k: 'kind', max: 2, options: ['Build', 'Lead', 'Create', 'Serve', 'Learn', 'Balance work and life', 'Provide for family'] },
      { t: 'ta', k: 'proud', label: 'How I will describe my work with pride on a date', rows: 2, ph: 'Plain and specific, without bragging or shrinking.' },
      { t: 'ta', k: 'support', label: 'What support from a partner looks like for me', rows: 3, ph: 'Encouragement, practical help, space, a shared plan.' },
      { t: 'ta', k: 'flex', label: 'What I would adjust, and what I would not', rows: 3, ph: 'Adjust: ... Not adjust: ...' }] },
    foryou: [{ when: 'gentle', text: 'If your ambition has been criticised or used against you, write it down anyway. It is yours, and it can stay private until you choose to share it.' }],
    embrace: [
      ['Saying what you do, plainly and with pride', 'Shrinking your work so someone else feels big'],
      ['Naming your pace and flexibility early', 'Hoping a partner will guess'],
      ['Wanting a partner who asks what is next', 'A partner who competes with your success'],
      ['Ambition for what matters to you', 'Ambition copied from what others expect']]
  };

  D.CONTENT['6.2'] = {
    lead: 'Money is one of the biggest sources of strain in relationships, and one of the least discussed. Understanding yours is an act of care.',
    story: { h: 'Story: Hyun, 40, Seoul', p: [
      'Hyun earned well and felt anxious about money all the time. She did not track spending, avoided opening certain statements, and told no one. Her father had lost a business when she was twelve, and her body still tensed whenever she thought about being without.',
      'A friend suggested she write down her “money story”: what she saw as a child, what she was told, what she decided. Seeing it on the page, Hyun understood her avoidance. She began with a small habit: opening her statements on the first of the month with a cup of tea. Within three months she knew where her money went. She said, “The fear did not disappear, but it stopped steering.”',
      'Hyun is a composite character.'] },
    framework: { h: 'Framework: story, habits and values', intro: 'Three layers shape how you handle money.', items: [
      ['Story:', 'what you learned about money growing up, and what you decided as a result.'],
      ['Habits:', 'planning, saving, protecting and talking. Small, steady habits beat big, rare efforts.'],
      ['Values:', 'what money is for in your life: security, freedom, generosity, experiences, family.'],
      ['The principle:', 'start with awareness, not with judgement. You cannot improve what you avoid looking at.']] },
    exercise: { h: 'Exercise: your money snapshot', intro: 'About 45 minutes. This is for you only, and it is not financial advice.', blocks: [
      { t: 'p', text: 'How true is each statement for you at the moment?' },
      { t: 'likert', k: 'q', labels: ['Rarely', 'Sometimes', 'Often', 'Most days'], items: [
        { axis: 'plan', text: 'I know roughly what comes in and goes out each month.' },
        { axis: 'save', text: 'I set aside something regularly, even if it is small.' },
        { axis: 'protect', text: 'I have a cushion for emergencies and my key papers in order.' },
        { axis: 'talk', text: 'I can talk about money calmly with people I trust.' }] },
      { t: 'result', fn: 'money' },
      { t: 'ta', k: 'story', label: 'My money story', rows: 4, ph: 'What I saw and heard about money growing up, and what I decided.' },
      { t: 'p', text: 'What is money for in your life? Choose up to three.' },
      { t: 'chips', k: 'values', max: 3, options: ['Security', 'Freedom', 'Generosity', 'Experiences', 'Family', 'Growth', 'Status', 'Peace of mind'] },
      { t: 'inp', k: 'habit', label: 'One small money habit I will start this month', ph: 'For example: look at my statements on the first of the month.' }] },
    foryou: [{ when: 'gentle', text: 'If money is tied to hardship, grief or being controlled, go gently. Look only at what you are ready to look at, and consider talking to a trusted person or a counsellor.' }],
    embrace: [
      ['Looking at your numbers with curiosity', 'Avoiding statements because they feel scary'],
      ['One small habit at a time', 'A complete overhaul that collapses in a week'],
      ['Knowing what money is for in your life', 'Chasing a number because others do'],
      ['Talking with trusted people', 'Carrying money worry in silence']]
  };

  D.CONTENT['6.3'] = {
    lead: 'Independence is the ability to choose. A cushion, your own papers and a few skills mean you stay in a relationship because you want to, not because you have to.',
    story: { h: 'Story: Nadia, 43, Beirut', p: [
      'Nadia’s marriage had ended, and she discovered how little she knew about her own money. Accounts were in her husband’s name, and she did not have copies of important papers. It took her a year to untangle, and she promised herself she would never be in that position again.',
      'In her next chapter she built a simple safety net: an account in her own name, a cushion that grew slowly, copies of key documents, and a trusted friend who knew where they were. She told her new partner about it, plainly. He said, “That is wise. I would want the same for you.” She said, “It was not about distrust. It was about being able to choose freely.”',
      'Nadia is a composite character.'] },
    framework: { h: 'Framework: the independence checklist', intro: 'Five things that let you stand on your own, in whatever country you live in.', items: [
      ['Your own account and name:', 'money in your name that you control, and a clear view of any shared accounts.'],
      ['A cushion:', 'savings for emergencies, grown slowly. The first small amount matters most.'],
      ['Your papers:', 'identity documents, key records and important contacts, with copies in a safe place.'],
      ['Income and skills:', 'a way to earn, and one skill you could use if circumstances changed.'],
      ['A trusted person:', 'someone who knows where your papers are and how to reach you.']] },
    exercise: { h: 'Exercise: your safety net', intro: 'About 45 minutes. Write only what you want to. This stays on your phone.', blocks: [
      { t: 'p', text: 'What do you already have in place? Choose all that apply.' },
      { t: 'chips', k: 'have', max: 6, options: ['An account in my own name', 'An emergency cushion', 'Copies of my key papers', 'A way to earn', 'A skill I could use', 'A trusted person who knows', 'Insurance that fits my life'] },
      { t: 'ta', k: 'missing', label: 'What is missing, and why', rows: 3, ph: 'Be honest and kind.' },
      { t: 'inp', k: 'step', label: 'The one step I will take this month', ph: 'For example: copy my documents and give a set to my sister.' },
      { t: 'ta', k: 'person', label: 'Who knows where my papers are', rows: 2, ph: 'A name or a role, and what they know.' }] },
    foryou: [{ when: 'gentle', text: 'If you are in a relationship where money is used to control you, your first step is safety. Contact a local support service or a trusted person, and keep copies of key papers somewhere safe.' }],
    embrace: [
      ['An account and cushion in your own name', 'Depending entirely on one person'],
      ['Papers and copies in a safe place', 'Not knowing where your documents are'],
      ['A skill and an income you can rely on', 'Giving up your own work without a plan'],
      ['Telling a partner plainly, as a matter of wisdom', 'Hiding it, or treating it as distrust']]
  };

  D.CONTENT['6.4'] = {
    lead: 'The way a couple handles money predicts a great deal about how they handle everything else. Talk about it early, kindly and specifically.',
    story: { h: 'Story: Esi, 33, Accra', p: [
      'Esi sent part of her income to her parents and younger siblings every month. It was a duty she took pride in, and she assumed any man would understand. Four months into a relationship, her partner said, “Why do you send so much? We could be saving for our own future.” They had never talked about it, and both felt blindsided.',
      'They sat down and shared their obligations plainly. He supported his mother too, though less visibly. They agreed on a simple structure: each would keep a fixed amount for family, and they would plan the rest together. Esi said, “The surprise was how much easier it was once we had put numbers and names on it.”',
      'Esi is a composite character.'] },
    framework: { h: 'Framework: the money talk ladder', intro: 'Climb one rung at a time, and do not rush to the top.', items: [
      ['Values:', 'what money is for. Do you agree on the big picture?'],
      ['Habits:', 'how each of you plans, saves and spends, and what feels normal.'],
      ['Obligations:', 'family support, debts and responsibilities, which are normal, and which deserve an early, honest conversation.'],
      ['Plans:', 'shared goals such as a home, children, travel, work changes, and how costs will be shared.'],
      ['Warning signs:', 'secrecy, pressure to hand over money or accounts, borrowing without clear repayment, or being made to feel guilty for having your own money.']] },
    exercise: { h: 'Exercise: your money conversation plan', intro: 'About 45 minutes. This is preparation, not a script.', blocks: [
      { t: 'ta', k: 'oblig', label: 'My obligations and how I would explain them', rows: 3, ph: 'Family support, debts, responsibilities, said plainly and without apology.' },
      { t: 'ta', k: 'nonneg', label: 'My money non-negotiables', rows: 2, ph: 'For example: I keep my own account. I do not lend money early in a relationship.' },
      { t: 'p', text: 'On dates, my starting stance on who pays is...' },
      { t: 'chips', k: 'pay', max: 1, options: ['He pays', 'We split', 'Whoever invited pays', 'We take turns', 'Depends, and we talk about it'] },
      { t: 'ta', k: 'ask', label: 'Questions I will ask, once it is serious', rows: 3, ph: 'How he thinks about money, debt, family support, and what he would like to build.' },
      { t: 'inp', k: 'signal', label: 'A money warning sign I will not ignore', ph: 'For example: pressure to share my accounts early.' }] },
    foryou: [{ when: 'gentle', text: 'If someone once used money to control you, you are allowed to take longer and to keep more of your own. A good partner will understand why.' }],
    embrace: [
      ['Naming obligations plainly and early', 'Hiding them until they cause a crisis'],
      ['Agreeing a simple, fair structure', 'Keeping score or secrets'],
      ['Keeping your own money while you build trust', 'Merging accounts to prove commitment'],
      ['Treating pressure as a signal', 'Explaining it away']]
  };

  D.CONTENT['6.5'] = {
    lead: 'A plan is a promise to your future self. A twelve-month design turns ambition and money into steps you can take.',
    story: { h: 'Story: Carmen, 48, Mexico City', p: [
      'Carmen had worked in the same firm for twenty years and had begun to feel stuck. She wanted to change direction and also wanted a partner, and she believed she needed to solve one before the other. A mentor asked what she would do in the next twelve months if she could not be sure of either.',
      'She wrote three goals: one for work, one for money and one for her life, each small and specific. She enrolled in a course, set up a small monthly saving, and joined a community group she had always been curious about. By the end of the year she had started a new role and met a kind man at the group. She said, “I stopped waiting for the big answer and started taking the next step.”',
      'Carmen is a composite character.'] },
    framework: { h: 'Framework: one year, three lines', intro: 'Choose one goal each for work, money and life. Keep them small and specific.', items: [
      ['Work:', 'a skill, a role, a project or a conversation that moves your direction forward.'],
      ['Money:', 'one habit or one amount that builds your safety net or your choices.'],
      ['Life:', 'one thing that makes your days richer and connects you to people.'],
      ['The check-in:', 'a date every three months to look at progress and adjust, without judgement.']] },
    exercise: { h: 'Exercise: your twelve-month design', intro: 'About 40 minutes. Smaller and specific beats big and vague.', blocks: [
      { t: 'ta', k: 'work', label: 'My work goal for the next twelve months', rows: 2, ph: 'A skill, a role, a project, a conversation.' },
      { t: 'ta', k: 'money', label: 'My money goal for the next twelve months', rows: 2, ph: 'A habit, an amount, a step toward my safety net.' },
      { t: 'ta', k: 'life', label: 'My life goal for the next twelve months', rows: 2, ph: 'Something that makes my days richer and connects me to people.' },
      { t: 'inp', k: 'checkin', label: 'My first three-month check-in date', ph: 'A real date in the calendar.' },
      { t: 'inp', k: 'person', label: 'The person who will ask how it is going (optional)', ph: 'A friend, mentor or sibling.' },
      { t: 'summary6' }] },
    foryou: [{ when: 'gentle', text: 'Keep each goal small enough to complete in a hard month. Progress is progress, and you can always change the plan.' }],
    embrace: [
      ['Three small, specific goals', 'A long list that overwhelms you'],
      ['A date for your first check-in', 'Hoping you will remember'],
      ['Building your life and staying open to love', 'Waiting for love before you build'],
      ['Adjusting the plan without shame', 'Abandoning the plan after one setback']]
  };

  D.SCENARIOS.push(
    { id: 's6-1', module: 6, title: 'The promotion',
      setup: 'You have just been promoted, and you are excited. Over dinner, Marco goes quiet when you share the news, then says, “Wow. Does that mean you will earn more than me?”',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say warmly, “Yes, I will. I’m proud of it, and I would love to hear how you feel about it.”',
          protects: 'It protects your pride and invites an honest conversation.', cost: 'It may show you something about him.',
          try: 'Listen for curiosity or comparison. How he handles your success is information.' },
        { id: 'b', tag: 'accommodate', text: 'Play it down: “Oh, it’s not that much, and the work is hard.”',
          protects: 'It protects his feelings.', cost: 'It teaches both of you to hide your success.',
          try: 'You can be kind and still say it plainly.' },
        { id: 'c', tag: 'react', text: 'Snap, “Are you serious? You can’t be happy for me?”',
          protects: 'It expresses your hurt.', cost: 'It escalates a moment that could have been explored.',
          try: 'Take a breath, then name the feeling: “I was hoping you would be happy for me.”' },
        { id: 'd', tag: 'withdraw', text: 'Change the subject and stop sharing work news with him.',
          protects: 'It avoids tension.', cost: 'You stop being known, and the question stays unanswered.',
          try: 'One honest sentence is better than silence.' },
        { id: 'e', tag: 'ruminate', text: 'Spend the next week wondering whether your success is a problem for the relationship.',
          protects: 'It keeps you alert.', cost: 'It turns one comment into a long story.',
          try: 'Ask him directly, calmly, and watch what he does next.' }
      ] },
    { id: 's6-2', module: 6, title: 'Who pays',
      setup: 'On your fourth date, the bill arrives. Daniel reaches for it, then pauses, looks at you and says, “Shall we split it?” You expected him to pay, and you also earn well.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “Happy to split it tonight. I would like us to talk about how we do this as we go.”',
          protects: 'It sets an honest, relaxed tone.', cost: 'It may feel unfamiliar.',
          try: 'Notice how comfortable he is with a clear, friendly conversation about money.' },
        { id: 'b', tag: 'accommodate', text: 'Agree and smile, but feel quietly disappointed and say nothing.',
          protects: 'It keeps the mood easy.', cost: 'The feeling stays unspoken and grows.',
          try: 'If it matters, say so kindly.' },
        { id: 'c', tag: 'react', text: 'Say coolly, “Fine,” and pay your half with a sharp look.',
          protects: 'It signals your disapproval.', cost: 'He is left guessing, and the evening is cold.',
          try: 'Say what you feel in a calm sentence.' },
        { id: 'd', tag: 'withdraw', text: 'Pay your half, and decide privately not to see him again.',
          protects: 'It avoids a conversation.', cost: 'You decide on one moment without understanding it.',
          try: 'Ask what he thinks about how couples handle costs.' },
        { id: 'e', tag: 'ruminate', text: 'Pay your half and spend the evening wondering what it means about his interest.',
          protects: 'It keeps you alert.', cost: 'You miss the evening.',
          try: 'Decide what matters to you about this, and tell him when you are ready.' }
      ] },
    { id: 's6-3', module: 6, title: 'The loan',
      setup: 'Three months in, Segun tells you he is in a temporary cash crunch. He asks to borrow a significant amount, “just until the end of next month.” He seems embarrassed and sincere.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “I care about you, and I keep money out of the relationship this early. I can help you think through options.”',
          protects: 'It protects your safety net and your relationship.', cost: 'He may be disappointed.',
          try: 'Notice how he receives a clear, kind boundary.' },
        { id: 'b', tag: 'accommodate', text: 'Lend him the money to avoid disappointing him.',
          protects: 'It keeps him happy.', cost: 'It risks your savings and can complicate trust.',
          try: 'If you ever lend, treat it as a gift you can afford to lose.' },
        { id: 'c', tag: 'react', text: 'Get angry and accuse him of using you.',
          protects: 'It expresses your fear.', cost: 'You may be unfair, and the conversation ends.',
          try: 'Take a breath, and say your boundary calmly.' },
        { id: 'd', tag: 'withdraw', text: 'Say you will think about it, then avoid him for a few days.',
          protects: 'It buys time.', cost: 'It leaves him waiting, and you avoid the conversation.',
          try: 'Answer within a day, with one clear sentence.' },
        { id: 'e', tag: 'ruminate', text: 'Lie awake wondering whether he is genuine, and whether you are being selfish.',
          protects: 'It keeps you cautious.', cost: 'It drains you, and the facts do not change.',
          try: 'Decide on your boundary first. His response will tell you more than your guesses.' }
      ] },
    { id: 's6-4', module: 6, title: 'The money to family',
      setup: 'You send money to your parents every month. Tunde finds out and says, “That is a lot. We could be saving for our own life instead.” He sounds more worried than critical.',
      options: [
        { id: 'a', tag: 'assertive', text: 'Say, “Supporting my family is important to me. I would like us to plan together how it fits with our future.”',
          protects: 'It honours your values and invites a joint plan.', cost: 'It takes a careful conversation.',
          try: 'Share the numbers and the reasons. Ask about his own family obligations too.' },
        { id: 'b', tag: 'accommodate', text: 'Promise to reduce it, though you are not sure you can.',
          protects: 'It keeps him calm.', cost: 'It may break your commitment to your family and your own word.',
          try: 'Do not promise what you do not want to do.' },
        { id: 'c', tag: 'react', text: 'Snap, “My family is none of your business!”',
          protects: 'It defends your loyalty.', cost: 'It closes a conversation that matters.',
          try: 'Take a breath and say one clear sentence about why it matters.' },
        { id: 'd', tag: 'withdraw', text: 'Stop mentioning it and send the money quietly.',
          protects: 'It avoids conflict.', cost: 'Secrecy about money erodes trust.',
          try: 'Be open about the commitment, and let him respond.' },
        { id: 'e', tag: 'ruminate', text: 'Wonder for days whether you are being irresponsible and whether he is right.',
          protects: 'It keeps you open to feedback.', cost: 'It erodes your confidence in a value you chose.',
          try: 'Write down the commitment and your reasons. Then talk about the plan.' }
      ] }
  );

  D.ASK.push(
    { id: 'money', title: 'Money, who pays and lending', domains: ['d7'], modules: [6, 12],
      keys: ['who pays', 'split the bill', 'split the check', 'lend him', 'lend money', 'borrow', 'loan', 'in debt', 'his money', 'money talk', 'talk about money', 'financially', 'he asked me for money'],
      answer: ['Talk about money early, kindly and specifically. On dates, there is no single rule, so agree on a pattern that feels fair to both of you. Early in a relationship, keep your money separate and be cautious about lending.',
        'If a partner pressures you for money, hides finances to keep power, or controls your accounts, that is a warning sign. Lesson 6.4 helps you prepare the conversation, and if you ever feel controlled, contact a local support service or someone you trust.'] },
    { id: 'career', title: 'Career, ambition and love', domains: ['d6'], modules: [6, 11],
      keys: ['career', 'promotion', 'my job', 'too ambitious', 'work too much', 'workaholic', 'relocate for', 'give up my career', 'ambition', 'work-life balance'],
      answer: ['You do not have to choose between a full life and love. Name your ambition plainly, choose a pace you can keep, and look for a partner who asks where you are going and offers support.',
        'Be honest early about what you would adjust and what you would not. Lessons 6.1 and 6.5 help you describe your direction and design the next twelve months.'] },
    { id: 'independence', title: 'Financial independence', domains: ['d7'], modules: [6],
      keys: ['financial independence', 'financially independent', 'savings', 'budget', 'emergency fund', 'broke', 'afford', 'my own money', 'own account'],
      answer: ['Independence means being able to choose. Build a cushion slowly, keep an account in your own name, keep your key papers and copies in a safe place, and know one skill you could use if life changed.',
        'This is general guidance, not financial advice, so speak to a qualified adviser about your own situation. Lesson 6.3 walks you through a checklist.'] }
  );
})();
