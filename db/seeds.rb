# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create(first_name: 'Demo', last_name: 'Demo', email: 'demo@email.com', password: 'hunter12')
u2 = User.create(first_name: 'Alec', last_name: 'Keeler', email: 'alec@email.com', password: '123456')

# Subject.delete_all

# s1 = Subject.create(name: 'History')
# s2 = Subject.create(name: 'Maths')
# s3 = Subject.create(name: 'Art')

Deck.delete_all

d1 = Deck.create(name: 'Ancient Roman Republic',
    description: "Study the powerful ancient republic that ruled Europe for centuries",
    creator_id: u1.id)

d2 = Deck.create(name: 'Algebra',
    description: "Study basic algebra concepts and examples",
    creator_id: u1.id)

d3 = Deck.create(name: 'Early Christian / Byzantine Art History',
    description: "Learn about famous art of the Early Christian period",
    creator_id: u1.id)

d4 = Deck.create(name: 'Basics of Body Language',
    description: "Study the basics of human body language",
    creator_id: u1.id)

d5 = Deck.create(name: 'Pilot License',
    description: "Begin studying to become a pilot!",
    creator_id: u1.id)

d6 = Deck.create(name: 'Italian Vocab 1',
    description: "Learn some Italian!",
    creator_id: u1.id)

d7 = Deck.create(name: 'Intro to Infectious Disease',
    description: "Begin studying the basics of infectious diseases",
    creator_id: u1.id)

d8 = Deck.create(name: 'Bar Exam Jurisdiction and Venue',
    description: "Bar Exam practice",
    creator_id: u1.id)

d9 = Deck.create(name: 'US Gov Basics',
    description: "Are you an elected official?  Start here!",
    creator_id: u1.id)

d10 = Deck.create(name: 'JavaScript Basics',
    description: "New to programming?  Start here!",
    creator_id: u1.id)

Card.delete_all

c1 = Card.create(question: 'What was the cause of the first Punic war?',
    answer: 'Rome wanted to gain control of Sicily, a trade center on the Mediterranean Sea',
    author_id: u1.id,
    deck_id: d1.id)

c2 = Card.create(question: 'What was the cause of the second Punic war?',
    answer: 'Hannibal wanted revenge for the loss of the first Punic war and Rome was threatened by Carthage',
    author_id: u1.id,
    deck_id: d1.id)

c3 = Card.create(question: 'What was the cause of the third Punic war?',
    answer: 'Rome wanted to wipe Carthage off the map',
    author_id: u1.id,
    deck_id: d1.id)

c4 = Card.create(question: 'Who was Hannibal',
    answer: 'He was the Carthaginian general during the second Punic war',
    author_id: u1.id,
    deck_id: d1.id)

c5 = Card.create(question: 'Who was Scipio?',
    answer: 'He was the Roman general during the second Punic war',
    author_id: u1.id,
    deck_id: d1.id)

c6 = Card.create(question: 'What were the problems the Romans had after the Punic wars',
    answer: 'Farms were destroyed, slaves coming in, latifunias, and unemployment',
    author_id: u1.id,
    deck_id: d1.id)
    
c7 = Card.create(question: 'What does SPQR stand for in English?',
    answer: 'The Senate and the people of Rome',
    author_id: u1.id,
    deck_id: d1.id)

c8 = Card.create(question: 'What was Bread & Circuses?',
    answer: 'The government provided food and entertainment for the poor as a solution to the problems of Rome',
    author_id: u1.id,
    deck_id: d1.id)

c9 = Card.create(question: 'What were the 12 tables?',
    answer: 'Written laws in Rome',
    author_id: u1.id,
    deck_id: d1.id)

c10 = Card.create(question: 'Crossing the Rubicon was about what event?',
    answer: 'Julius Caesar ordered to return home without his army and face charges against Rome. He ignores the order and marches on Rome with his army starting a Civil War',
    author_id: u1.id,
    deck_id: d1.id)

c11 = Card.create(question: 'How can a quadratic equation be derived from its roots?',
    answer: 'negative sum of roots: b
    product of roots: c',
    author_id: u1.id,
    deck_id: d2.id)

c12 = Card.create(question: 'What is the discriminant, and what does it mean?',
    answer: 'The discriminant, used for quadratic equations, is equal to: b^2 -4ac

    ositive discriminant: there are two real solutions, and two distinct x-intercepts on the graph
    hen the discriminant is zero: there is one (repeated) real solution, and one x-intercept on the graph
    hen the discriminant is negative: there are two complex solutions, and there are no x-intercepts on the graph',
    author_id: u1.id,
    deck_id: d2.id)

c13 = Card.create(question: 'State the quadratic formula.',
    answer: 'x = (-b±√(b^2-4ac))/2a',
    author_id: u1.id,
    deck_id: d2.id)

c14 = Card.create(question: 'What is the process checklist for solving a quadratic equation?',
    answer: 'Also note that while the discriminant is cannot determine roots, it can be useful when solving.

    1. Greatest Common Factor
    2. Grouping
    3. Square Root Method
    4. Completing the Square
    5. Quadratic Formula',
    author_id: u1.id,
    deck_id: d2.id)

c15 = Card.create(question: 'What is a quadratic equation in standard form?',
    answer: 'f(x) = a(x - h)2 + k',
    author_id: u1.id,
    deck_id: d2.id)

c16 = Card.create(question: 'How can you find the vertex of a quadratic equation in two steps?',
    answer: 'First, use the equation x = f (-b/2a) to find the x-value of the vertex

    next, plug that back into the equation to find the y-value of the vertex',
    author_id: u1.id,
    deck_id: d2.id)

c17 = Card.create(question: 'Describe a basilica plan church',
    answer: 'Basilica plan churches have a forecourt, called the atrium, leading to a porch, called the narthex, which spans one of the building’s short ends. Doorways, also called portals, lead from the narthex into the nave. Rows of columns separate the nave from the aisles on either side. The nave is lit by the clerestory. Opposite to the nave from the narthex is the semi-circular apse. Sometimes, there is also a transept, which is a wing that crosses the nave in front of the apse, making a T-shape',
    author_id: u2.id,
    deck_id: d3.id)

c18 = Card.create(question: 'Describe a central plan church',
    answer: 'Central plan churches also have an atrium, narthex, and an apse. They have a more vertical axis, which makes worshippers focus on the dome. The space containing the central dome, sanctuary, and apse is called the naos',
    author_id: u2.id,
    deck_id: d3.id)

c19 = Card.create(question: 'Describe Cubiculum of Leonis, Catacomb of Commodilla',
    answer: 'Late 4thc.
    -depicts saints having particular connection to Rome
    -head of Christ appears in halo in center of ceiling
    -scenes from Bible',
    author_id: u2.id,
    deck_id: d3.id)

c20 = Card.create(question: 'Describe Menorahs and Ark of the Covenant',
    answer: '3rdc. , wall painting in Jewish catacomb
    -two menorahs flank the Ark of the Covenant',
    author_id: u2.id,
    deck_id: d3.id)

c21 = Card.create(question: 'Describe Wall with Torah Niche',
    answer: '244-245, house synagogue in Dura-Europos, tempera on plaster
    -bench along walls, and niche for Torah scrolls
    -scenes from Jewish history and story of Moses in continuous narrative around room',
    author_id: u2.id,
    deck_id: d3.id)

c22 = Card.create(question: 'Describe The Finding of the Baby Moses',
    answer: "244-245, Dura-Europos, tempera on plaster
    -Moses's mother has set him afloat in reed basket in shallows of Nile to save him from Pharaoh's decree to kill all Jewish infants
    -Pharaoh's daughter finds him and claims him as her own child
    -story unfolds in narrow foreground space
    -at right, princess sees child
    -at center, she or servant wades into water to save him
    -at left, nurse (mother) is handed baby
    -static, 2D figures that seem to float against neutral background
    -frontal poses, strong outlines, flat colors",
    author_id: u2.id,
    deck_id: d3.id)

c23 = Card.create(question: 'Describe The Good Shepherd',
    answer: 'Second half of 3rdc., marble, Anatolia',
    author_id: u2.id,
    deck_id: d3.id)

c24 = Card.create(question: 'Describe Sarcophagus of the Church of Santa Maria Antiqua',
    answer: '270, marble
    -either pagan or Christian
    -center stands figure with raised hands (orant)
    -bearded man reads scroll on side (teacher or philosopher)
    -shepherd brings in sheep, and older man places hand on head of youth in river
    -other side, youth is menaced by monster, lies under arbor in pose of sleep (Jonah)',
    author_id: u2.id,
    deck_id: d3.id)

c25 = Card.create(question: 'Describe Church of Santa Sabina',
    answer: '422-432, Rome, constructed by Bishop Peter of Ilyria
    -basilica plan
    -exterior is typical simple brickwork
    -interior displays wealth of marble veneer and 24 fluted marble columns with Corinthian capitals. support round arches, creating nave arcade
    -spandrels inlaid with marble images of chalice (wine cup) and paten (plate bread holder)
    -blind wall between arcade and clerestory had paintings or mosaics
    -paneled ceilings',
    author_id: u2.id,
    deck_id: d3.id)

c26 = Card.create(question: 'Describe The Ascension of Elijah',
    answer: '420s, cypress wood, panel from doors of Santa Sabina
    -prophet soars upward in chariot of fire sent for him by God and guided by an angel with long wand',
    author_id: u2.id,
    deck_id: d3.id)

c27 = Card.create(question: 'Describe Parting of Lot and Abraham',
    answer: '432-440, mosaic in nave arcade of Church of Santa Maria Maggiore
    -right, Lot and daughters turn towards Jordan, while Abraham and wife stay in Canaan.
    -share parting look as they gather their robes. space between them in center emphasizes their irreversible decision to part.
    -clusters of heads in the background represent followers
    -solid 3D rendering of foreground figures, hint of perspective in building, and landscape setting.
    -added tesserae of colored glass and clear glass in which gold leaf was embedded.
    -use of graduated colors creates shading from light to dark, producing 3D effects that are offset by strong outlines.
    -these outlines tend to flatten forms and emphasize quality of other-worldly splendor.',
    author_id: u2.id,
    deck_id: d3.id)

c28 = Card.create(question: 'What did Albert Mehrabian discover about the total impact of a message?',
    answer: '7% is verbal (words only), 38% vocal (including tone of voice, inflection, and other sounds) and 55% nonverbal.',
    author_id: u1.id,
    deck_id: d4.id)

c29 = Card.create(question: 'Rain Birdwhitsell discovered that the average person talks for how many minutes per day?',
    answer: '10 to 11 minutes.',
    author_id: u1.id,
    deck_id: d4.id)

c30 = Card.create(question: 'According to Birdwhitsell how many facial expressions can we recognize?',
    answer: '250,000',
    author_id: u1.id,
    deck_id: d4.id)

c31 = Card.create(question: 'In business encounters what percentage of the impact is made by body language around a negotiating table?',
    answer: '60%-80%',
    author_id: u1.id,
    deck_id: d4.id)

c32 = Card.create(question: 'In how many minutes do people make the majority of their initial opinion about a new person?',
    answer: 'Four minutes',
    author_id: u1.id,
    deck_id: d4.id)

c33 = Card.create(question: 'What does research show about negotiations over the telephone versus face to face?',
    answer: 'In negotiating over the telephone the person with a stronger argument usually wins, but when negotiating face-to-face this is not true, because we make our decisions more so on what we see then on what we hear.',
    author_id: u1.id,
    deck_id: d4.id)

c34 = Card.create(question: 'What do words primarily convey?',
    answer: 'Information.',
    author_id: u1.id,
    deck_id: d4.id)

c35 = Card.create(question: 'What does body language typically convey?',
    answer: 'Inter-personal attitudes, and, in some cases, it is used as a substitute for verbal messages.',
    author_id: u1.id,
    deck_id: d4.id)

c36 = Card.create(question: 'Body language is an outward reflection of what?',
    answer: 'A persons emotional condition.',
    author_id: u1.id,
    deck_id: d4.id)

c37 = Card.create(question: "When Harvard researchers showed a short film, with the sound turned off, what did they notice about a woman's ability to read the situation accurately versus a mans?",
    answer: 'Women read the situation accurately 87% of the time, while the men scored only 42% accuracy.',
    author_id: u1.id,
    deck_id: d4.id)

c38 = Card.create(question: "How many areas of the brain do women have to evaluate others' behavior?",
    answer: '16',
    author_id: u1.id,
    deck_id: d4.id)

c39 = Card.create(question: "How many areas of the brain do men have to evaluate others' behavior?",
    answer: '4 to 6',
    author_id: u1.id,
    deck_id: d4.id)

c40 = Card.create(question: 'What did Ekman, Friensen, and Sorenson find when studying 5 widely different cultures?',
    answer: 'They found that we all use the same basic gestures to show emotion',
    author_id: u1.id,
    deck_id: d4.id)

c41 = Card.create(question: 'What does the head shaking gesture signal? Where is its origin from?',
    answer: 'Signals no-- it owes its origin to breastfeeding',
    author_id: u1.id,
    deck_id: d4.id)

c42 = Card.create(question: 'What is the cluster of a shoulder shrug?',
    answer: '-exposed palms to show nothing is being concealed in the hands
    -hunched shoulders to protect the throat from attack
    -a raised brow which is a universal submissive greeting',
    author_id: u1.id,
    deck_id: d4.id)

c43 = Card.create(question: 'What is the first rule for reading body language accurately?',
    answer: 'Read gestures in clusters.',
    author_id: u1.id,
    deck_id: d4.id)

c44 = Card.create(question: 'What is a body language cluster like?',
    answer: 'It is like a verbal sentence.',
    author_id: u1.id,
    deck_id: d4.id)

c45 = Card.create(question: 'What does the head and chin down represent?',
    answer: 'negative/hostile feeling or thought',
    author_id: u1.id,
    deck_id: d4.id)

c46 = Card.create(question: 'What is one clue that you are being critically evaluated?',
    answer: 'Hand to face gesture, with the index finger pointing up the cheek, while another finger covers the mouth and the thumb supports the chin.',
    author_id: u1.id,
    deck_id: d4.id)

c47 = Card.create(question: 'What is the second rule of reading body language?',
    answer: 'Look for congruence',
    author_id: u1.id,
    deck_id: d4.id)

c48 = Card.create(question: 'The four forces acting on an airplane are',
    answer: 'Lift, weight, thrust, drag',
    author_id: u2.id,
    deck_id: d5.id)

c49 = Card.create(question: 'When are the four forces that act on an airplane in equilibrium?',
    answer: 'During unaccelerated flight',
    author_id: u2.id,
    deck_id: d5.id)

c50 = Card.create(question: 'Airplanes climb because of',
    answer: 'Excess thrust',
    author_id: u2.id,
    deck_id: d5.id)

c51 = Card.create(question: 'Many',
    answer: 'Tanto',
    author_id: u1.id,
    deck_id: d6.id)

c52 = Card.create(question: 'Usually',
    answer: 'Di solito',
    author_id: u1.id,
    deck_id: d6.id)

c53 = Card.create(question: 'Almost always',
    answer: 'Quasi sempre',
    author_id: u1.id,
    deck_id: d6.id)

c54 = Card.create(question: 'What are three ways vaccinations are made?',
    answer: 'produced from inactivated microbial strains
    produced from live viruses
    produced from viral particles',
    author_id: u1.id,
    deck_id: d7.id)

c55 = Card.create(question: 'Antibiotics are used for?',
    answer: 'are chemicals produced by bacteria and fungi that inhibit or kill other microbes.',
    author_id: u1.id,
    deck_id: d7.id)

c56 = Card.create(question: 'subject matter jurisdiction (SMJ)',
    answer: "Power for the court to hear a particular dispute based upon the dispute's subject matter",
    author_id: u1.id,
    deck_id: d8.id)

c57 = Card.create(question: 'What are the types of subject-matter jurisdiction?',
    answer: 'Federal Question Jurisdiction
    Diversity Jurisdiction
    Supplemental Jurisdiction',
    author_id: u1.id,
    deck_id: d8.id)

c58 = Card.create(question: 'representative democracy/republic',
    answer: 'form of government in which citizens elect representatives to a legislature, based on the idea that every citizen deserves to participate in government, whether directly or indirectly',
    author_id: u1.id,
    deck_id: d9.id)

c59 = Card.create(question: 'referendum',
    answer: 'national or local vote to reject or accept a proposal',
    author_id: u1.id,
    deck_id: d9.id)

c60 = Card.create(question: 'What are two ways to tell if something called myVar is an array?',
    answer: '1. myVar instanceof Array;
    2. Array.isArray(myVar); // not just isArray(var);',
    author_id: u1.id,
    deck_id: d10.id)

c61 = Card.create(question: 'var obj = new Object();
    if (obj) { // will this take place? }',
    answer: 'Yes, because objects convert to true when evaluated in Boolean expressions.',
    author_id: u1.id,
    deck_id: d10.id)
    
    