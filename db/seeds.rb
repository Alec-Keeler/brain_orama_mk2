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

d1 = Deck.create(name: 'Ancient Rome',
    description: "Study ancient Rome's transition from a Republic to Empire",
    creator_id: u1.id)

d2 = Deck.create(name: 'Algebra',
    description: "Study basic algebra concepts and examples",
    creator_id: u1.id)

d3 = Deck.create(name: 'Art History',
    description: "Study famous artists of yore and their works",
    creator_id: u1.id)