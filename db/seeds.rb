# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: "guest@guest.com", name: "guest", password:"password")
user2 = User.create(email: "guest2@guest.com", name: "Felton Yohe", password:"password")
user3 = User.create(email: "guest3@guest.com", name: "Nina Paetzold", password:"password")
user4 = User.create(email: "guest4@guest.com", name: "Stephen Sarcone", password:"password")

team1 = Team.create(creator_id: user1.id, name: "Engineering")
team2 = Team.create(creator_id: user1.id, name: "Sales")
team3 = Team.create(creator_id: user1.id, name: "Operations")


tmem1 = TeamMembership.create(user_id: user1.id, team_id: team1.id)
tmem2 = TeamMembership.create(user_id: user1.id, team_id: team2.id)
tmem3 = TeamMembership.create(user_id: user1.id, team_id: team3.id)

tmem4 = TeamMembership.create(user_id: user2.id, team_id: team2.id)
tmem5 = TeamMembership.create(user_id: user2.id, team_id: team3.id)

tmem5 = TeamMembership.create(user_id: user3.id, team_id: team3.id)

tmem5 = TeamMembership.create(user_id: user4.id, team_id: team1.id)
tmem5 = TeamMembership.create(user_id: user4.id, team_id: team2.id)
tmem5 = TeamMembership.create(user_id: user4.id, team_id: team3.id)


project1 = Project.create(name: "Develop New Product", creator_id: user1.id, team_id: team1.id)
project2 = Project.create(name: "New Hires", creator_id: user1.id, team_id: team1.id)
project3 = Project.create(name: "Product Launch Material", creator_id: user1.id, team_id: team2.id)
project4 = Project.create(name: "China Factory", creator_id: user1.id, team_id: team3.id)
project5 = Project.create(name: "Product Production Pipeline", creator_id: user1.id, team_id: team3.id)


pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project1.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project2.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project3.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project4.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project5.id)


# Project 1 - Eng - Develop New Product
task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Kick-off workshop",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Product concept design",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Feasibility analysis",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Product timeline creation",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Functional testing",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Performance testing",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Prepare support documentation",
  description: "Documentation for use by the sales team"
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Field deployment",
  description: "Work with clients for product onboarding"
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Measure tolerances for new components",
  description: ""
)

# Project 2 - Eng - New Hires
task1 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Schedule interview time slots",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Review resumes",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Post to job boards",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Initial phone screenings",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Send offer letters",
  description: ""
)
task1 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Prepare training materials",
  description: ""
)


# Project 3 - Sales - Product Launch Material
task1 = Task.create(
  creator_id: user1.id,
  project_id: project3.id,
  name: "Create Google Ads Content",
  description: ""
)
task2 = Task.create(
  creator_id: user2.id,
  project_id: project3.id,
  name: "Review Competitor Materials",
  description: "."
)
task2 = Task.create(
  creator_id: user1.id,
  project_id: project3.id,
  name: "Finalize Target Audience",
  description: "Meeting on Thursday."
)
task2 = Task.create(
  creator_id: user2.id,
  project_id: project3.id,
  name: "Create Website Content",
  description: ""
)
task2 = Task.create(
  creator_id: user1.id,
  project_id: project3.id,
  name: "Review TV advertisement",
  description: ""
)
task2 = Task.create(
  creator_id: user1.id,
  project_id: project3.id,
  name: "Market fit testing",
  description: "Meeting with consumers every Monday."
)
task2 = Task.create(
  creator_id: user3.id,
  project_id: project3.id,
  name: "Segment email lists",
  description: "Techies, marketers, stay at home parents"
)


# Project 4 - Ops - China Factory
task2 = Task.create(
  creator_id: user1.id,
  project_id: project4.id,
  name: "Automate information flow to/from factory",
  description: ""
)
task2 = Task.create(
  creator_id: user1.id,
  project_id: project4.id,
  name: "Factory inspection",
  description: ""
)
task2 = Task.create(
  creator_id: user1.id,
  project_id: project4.id,
  name: "Find new delivery service from factory",
  description: ""
)
task2 = Task.create(
  creator_id: user1.id,
  project_id: project4.id,
  name: "Monitor line workers",
  description: ""
)
task2 = Task.create(
  creator_id: user1.id,
  project_id: project4.id,
  name: "Final production test run",
  description: ""
)


# Project 5 - Ops - Product Production Pipeline
task2 = Task.create(
  creator_id: user3.id,
  project_id: project5.id,
  name: "Final decision for national warehouse",
  description: ""
)
task2 = Task.create(
  creator_id: user3.id,
  project_id: project5.id,
  name: "Source initial parts for new product",
  description: ""
)
task2 = Task.create(
  creator_id: user4.id,
  project_id: project5.id,
  name: "Review delivery reports",
  description: ""
)
task2 = Task.create(
  creator_id: user4.id,
  project_id: project5.id,
  name: "Discuss material requirements with engineers",
  description: ""
)
task2 = Task.create(
  creator_id: user4.id,
  project_id: project5.id,
  name: "Negotiate deal with FedEx or UPS",
  description: ""
)
task2 = Task.create(
  creator_id: user4.id,
  project_id: project5.id,
  name: "Test customer shipping pipeline from warehouse",
  description: ""
)
