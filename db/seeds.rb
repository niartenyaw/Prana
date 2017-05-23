# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: "guest@guest.com", name: "guest", password:"password")

team1 = Team.create(creator_id: user1.id, name: "team 1")
team2 = Team.create(creator_id: user1.id, name: "team 2")
team3 = Team.create(creator_id: user1.id, name: "team 3")

tmem1 = TeamMembership.create(user_id: user1.id, team_id: team1.id)
tmem2 = TeamMembership.create(user_id: user1.id, team_id: team2.id)
tmem4 = TeamMembership.create(user_id: user1.id, team_id: team3.id)


project1 = Project.create(name: "project 1", creator_id: user1.id, team_id: team1.id)
project2 = Project.create(name: "another project", creator_id: user1.id, team_id: team1.id)
project3 = Project.create(name: "and another one!", creator_id: user1.id, team_id: team1.id)
project4 = Project.create(name: "lonely project :(", creator_id: user1.id, team_id: team2.id)
project5 = Project.create(name: "also a lonely project :(", creator_id: user1.id, team_id: team3.id)

pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project1.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project2.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project3.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project4.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project5.id)
