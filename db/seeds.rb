# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: "guest@guest.com", name: "Guest", password:"password")
user2 = User.create(email: "2@guest.com", name: "Guest2", password:"password")
user3 = User.create(email: "3@guest.com", name: "Guest3", password:"password")

team1 = Team.create(creator_id: user1.id, name: "Team 1")
team2 = Team.create(creator_id: user2.id, name: "Team 2")
team3 = Team.create(creator_id: user3.id, name: "Team 3")

mem1 = TeamMembership.create(user_id: user1.id, team_id: team1.id)
mem2 = TeamMembership.create(user_id: user1.id, team_id: team2.id)
mem3 = TeamMembership.create(user_id: user2.id, team_id: team1.id)
mem4 = TeamMembership.create(user_id: user3.id, team_id: team2.id)
