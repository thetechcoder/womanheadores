/* Content for Module 1 of The Woman He Adores. Plain data, no logic. */
window.WAD_DATA = (function () {
  var DOMAINS = [
    { id: 'd1', name: 'Inner peace and healing', short: 'Healing', modules: [2],
      tip: 'Tonight, write three lines: what I felt today, what set it off, and what helped.',
      q: [
        'I can name the patterns that keep showing up in my relationships.',
        'When I feel anxious or hurt, I have healthy ways to calm myself.',
        'I have worked through, or am actively working through, my major past wounds.',
        'I do not need a relationship to feel okay about my life.',
        'I speak to myself kindly most days.'] },
    { id: 'd2', name: 'Self-worth and boundaries', short: 'Worth', modules: [2, 3],
      tip: 'Say no to one small request today without explaining yourself.',
      q: [
        'I say no without long explanations or guilt.',
        'I do not change who I am to keep someone’s approval.',
        'I can ask for what I need.',
        'I believe I am worthy of being loved well.',
        'I step away from people who consistently disrespect me.'] },
    { id: 'd3', name: 'Identity, values and faith', short: 'Values', modules: [3],
      tip: 'Pick one value you hold and do one small thing today that proves it.',
      q: [
        'I can list my top five values without thinking hard.',
        'My daily choices mostly match what I say I believe.',
        'I know what my faith or life philosophy means for the partner I want.',
        'I have a clear picture of the life I want, including whether I want marriage and children.',
        'I am the same person at work, at home and with friends.'] },
    { id: 'd4', name: 'Health, body and energy', short: 'Body', modules: [4],
      tip: 'Set a bedtime alarm and put your phone down 30 minutes before it.',
      q: [
        'I sleep well enough to feel rested most days.',
        'I move my body regularly in ways I enjoy.',
        'I eat in a way that gives me energy.',
        'I keep up with my medical and mental health care.',
        'I have energy left at the end of the day for the people and things I love.'] },
    { id: 'd5', name: 'Style, image and presence', short: 'Style', modules: [5],
      tip: 'Choose tomorrow’s outfit tonight, and include one piece that feels like you.',
      q: [
        'I like how I look when I leave the house.',
        'My clothes fit my body, my life and my budget.',
        'I carry myself with ease and good posture.',
        'My social media and any dating profiles show who I really am.',
        'I feel comfortable being seen.'] },
    { id: 'd6', name: 'Career and ambition', short: 'Career', modules: [6],
      tip: 'Write one sentence about what you are building professionally this year.',
      q: [
        'I know what I am building toward professionally.',
        'My work gives me some sense of purpose.',
        'I set goals each year and track them.',
        'I ask for the pay, role and respect I deserve.',
        'I talk about my ambitions without apologising for them.'] },
    { id: 'd7', name: 'Money and independence', short: 'Money', modules: [6],
      tip: 'Open your bank app and write down what you spent this week.',
      q: [
        'I know how much I earn and spend each month.',
        'I have an emergency fund covering at least three months of expenses.',
        'I save or invest regularly.',
        'I have no debt that controls my choices.',
        'I could support myself if my life changed tomorrow.'] },
    { id: 'd8', name: 'Home, friendships and community', short: 'Home', modules: [7],
      tip: 'Message one friend and book a call or a meal this week.',
      q: [
        'My home feels peaceful and feels like me.',
        'I have at least two friends I can be fully honest with.',
        'I give and receive support in my friendships.',
        'I belong to a community, such as a faith group, club, volunteer team or neighbourhood.',
        'I have hobbies or passions that are mine alone.'] },
    { id: 'd9', name: 'Mind and charm', short: 'Mind', modules: [8, 9],
      tip: 'Read or listen to something new for 15 minutes, then tell someone about it.',
      q: [
        'I read, listen or learn something new every week.',
        'I stay curious about people and ask good questions.',
        'I can talk respectfully with someone whose views differ from mine.',
        'I handle social settings with warmth and ease.',
        'I have humour and playfulness in me.'] },
    { id: 'd10', name: 'Communication and emotional intelligence', short: 'Voice', modules: [10],
      tip: 'In your next conversation, wait two seconds after they finish before you reply.',
      q: [
        'I can say how I feel without attacking or shutting down.',
        'I listen without planning my reply.',
        'I can disagree and stay respectful.',
        'I apologise sincerely when I am wrong.',
        'I notice my emotional triggers before they take over.'] },
    { id: 'd11', name: 'Dating readiness and discernment', short: 'Dating', modules: [11, 12, 13],
      tip: 'Write one non-negotiable and one preference on separate lines. Notice the difference.',
      q: [
        'I know my non-negotiables and my flexible preferences.',
        'I can tell the difference between chemistry and compatibility.',
        'I know the signs of manipulation, love-bombing and control.',
        'I take sensible safety steps when meeting someone new.',
        'I can handle rejection without treating it as proof of my worth.'] },
    { id: 'd12', name: 'Partnership readiness', short: 'Partner', modules: [14, 15, 16],
      tip: 'Describe in three sentences the partner you want to be.',
      q: [
        'I can describe the partner I want to be, not only the partner I want to have.',
        'I am open to a partner whose culture, faith or background differs from mine, as long as our core values align.',
        'I am comfortable talking about money, children and where to live.',
        'I know how to keep my own identity inside a relationship.',
        'I have a healthy relationship with affection, intimacy and desire.'] }
  ];

  var SCALE = ['Not at all true', 'Rarely true', 'Sometimes true', 'Mostly true', 'Completely true'];

  var BANDS = [
    { max: 34, name: 'Planting', text: 'You are laying foundations. Go gently and build one habit at a time.' },
    { max: 54, name: 'Sprouting', text: 'Several areas are growing. Pick two focus domains and stay with them.' },
    { max: 74, name: 'Growing', text: 'You have real strengths. Close the gaps that hold you back.' },
    { max: 89, name: 'Flourishing', text: 'You are strong. Polish what you have, and learn how to love well.' },
    { max: 100, name: 'Thriving', text: 'You are ready. Focus on discernment and partnership.' }
  ];

  var MODULES = [
    { n: 1, title: 'The Honest Starting Line', phase: 'Foundation' },
    { n: 2, title: 'Healing and Inner Work', phase: 'Foundation' },
    { n: 3, title: 'Identity, Values and Faith', phase: 'Foundation' },
    { n: 4, title: 'Health, Body and Energy', phase: 'The Whole Woman' },
    { n: 5, title: 'Style, Image and Presence', phase: 'The Whole Woman' },
    { n: 6, title: 'Ambition, Money and Independence', phase: 'The Whole Woman' },
    { n: 7, title: 'Home, Friendships and Community', phase: 'The Whole Woman' },
    { n: 8, title: 'Mind and Conversation', phase: 'The Whole Woman' },
    { n: 9, title: 'Charm and Social Grace', phase: 'The Whole Woman' },
    { n: 10, title: 'Emotional Intelligence and Communication', phase: 'The Heart and the Craft' },
    { n: 11, title: 'Understanding Men', phase: 'The Heart and the Craft' },
    { n: 12, title: 'Attraction, Dating and Discernment', phase: 'The Heart and the Craft' },
    { n: 13, title: 'Safety, Rejection and Resilience', phase: 'The Heart and the Craft' },
    { n: 14, title: 'Cross-Cultural and Interfaith Love', phase: 'Love Without Borders' },
    { n: 15, title: 'Sexuality, Desire and Intimacy', phase: 'Love Without Borders' },
    { n: 16, title: 'Building Something That Lasts', phase: 'The Relationship' }
  ];

  var STARTS = [
    { id: 'beginner', name: 'The Curious Beginner', feel: '“I have no idea where to start.”',
      need: 'Basics, confidence and a gentle pace' },
    { id: 'wanderer', name: 'The Hopeful Wanderer', feel: '“I date, but nothing has direction.”',
      need: 'Clarity about what you want' },
    { id: 'striver', name: 'The Frustrated Striver', feel: '“I do everything right and nothing works.”',
      need: 'A pattern audit, not more effort' },
    { id: 'guarded', name: 'The Guarded Heart', feel: '“I want love but I do not trust it.”',
      need: 'Healing and safety before strategy' },
    { id: 'recovering', name: 'The Recovering Heart', feel: '“I just came out of something.”',
      need: 'Time, rest and rebuilding' }
  ];

  var TRADITIONS = [
    { id: 'christian', name: 'Christian',
      idea: 'You are known and loved before you achieve anything, so you can look at yourself without fear.',
      q: 'Where am I still working for approval I already have?' },
    { id: 'muslim', name: 'Muslim',
      idea: 'Muhasabah, the habit of honest self-accounting, sits alongside tawakkul, trusting God while still doing your part.',
      q: 'What is mine to do this season, and what can I place in God’s hands?' },
    { id: 'jewish', name: 'Jewish',
      idea: 'Heshbon hanefesh, the accounting of the soul, and teshuvah, the belief that a person can always return and begin again.',
      q: 'What am I ready to see clearly, and what would my fresh start look like?' },
    { id: 'hindu', name: 'Hindu',
      idea: 'Svadhyaya, the study of the self, and dharma, living in line with your true path.',
      q: 'When do I feel most aligned with who I am meant to be?' },
    { id: 'buddhist', name: 'Buddhist',
      idea: 'Mindful awareness of the present, and loving-kindness (metta) that begins with yourself.',
      q: 'Can I look at my starting point with the same kindness I would offer a friend?' },
    { id: 'secular', name: 'Secular',
      idea: 'Values clarification: living by what you believe matters.',
      q: 'In a year, what would make me proud of how I used these 90 days?' }
  ];

  var LESSONS = [
    { id: '1.1', title: 'Where you really are', mins: 30,
      line: 'Choose your starting point and write a letter to yourself.' },
    { id: '1.2', title: 'The Life Audit', mins: 60,
      line: 'Sixty statements, twelve areas, one baseline score.' },
    { id: '1.3', title: 'Your relationship history', mins: 45,
      line: 'Map your patterns and start your non-negotiables list.' },
    { id: '1.4', title: 'Your 90-day goal and your why', mins: 40,
      line: 'Write the reason you feel and the goal you control.' }
  ];

  return { DOMAINS: DOMAINS, SCALE: SCALE, BANDS: BANDS, MODULES: MODULES, STARTS: STARTS,
    TRADITIONS: TRADITIONS, LESSONS: LESSONS };
})();
