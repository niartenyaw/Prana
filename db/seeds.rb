# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: "guest@guest.com", name: "guest", password:"password")
user2 = User.create(email: "guest2@guest.com", name: "Felton Yohe", password:"password")
user3 = User.create(email: "guest3@guest.com", name: "Karlene Ferdinand", password:"password")
user4 = User.create(email: "guest4@guest.com", name: "Blair Marrinan", password:"password")
user5 = User.create(email: "guest5@guest.com", name: "Stephan Sarcone", password:"password")
user6 = User.create(email: "guest6@guest.com", name: "Nina Paetzold", password:"password")


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

tmem5 = TeamMembership.create(user_id: user5.id, team_id: team1.id)
tmem5 = TeamMembership.create(user_id: user5.id, team_id: team2.id)

tmem5 = TeamMembership.create(user_id: user6.id, team_id: team1.id)


project1 = Project.create(name: "Cascade Product Launch", creator_id: user1.id, team_id: team2.id)
project2 = Project.create(name: "Create Firefly Product Line", creator_id: user1.id, team_id: team1.id)
project3 = Project.create(name: "China Factory", creator_id: user1.id, team_id: team3.id)
project4 = Project.create(name: "US Factory", creator_id: user1.id, team_id: team2.id)
project5 = Project.create(name: "", creator_id: user1.id, team_id: team3.id)


pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project1.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project2.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project3.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project4.id)
pmem1 = ProjectMembership.create(user_id: user1.id, project_id: project5.id)


task1 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Set Goals",
  description: "The wisest and greatest of marketers set goals. If you run a campaign without goals, who's to say it was successful? Having goals in place for your marketing efforts will help you define success.")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Study the Competition",
  description: "Don’t market in the dark. Find out who your competition is and look at what they are doing. There is no shame in it. Marketers should want to know what their competition is up to and where their own marketing efforts fall in comparison.")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Address the Target Audience",
  description: "This may seem obvious but you would be surprised how many companies out there don’t address their target audience properly. As a marketer you need to identify who your target audience is. You can do this by creating a marketing persona / buyer persona.")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Create Content",
  description: "I know you have heard it all before. You need to create blog posts, ebooks, pdfs, memes, infographics, webinars, slide decks... the list goes on and on. There is a ton of content types to dabble in and a great marketer dabbles often.")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Nurture",
  description: "Building a relationship with prospects and leads is something that occurs daily. It starts from the moment they come across your brand on the Internet. From this point, a relationship has begun.\n\nMarketers nurture relationships with automated emails. A series of emails can be sent to build on a lead’s interests by providing them with additional relevant content you think they may enjoy.")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Social Listening",
  description: "Listening to what is being said about your brand and industry across social media is important. Lots of opportunities can be missed if you are not listening.")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Segment",
  description: "Everyone in your contact database is different. A great marketer will find out what makes them different by asking the right questions.")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Test",
  description: "In my opinion this is the best part of marketing. Testing different items across the campaigns you run will help you to understand what works and what doesn’t work.")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Measure and Analyze",
  description: "Always be looking at the numbers and measure everything. A great marketer measures the performance of their campaigns. When you are done measuring, you analyze.")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project1.id,
  name: "Innovate",
  description: "Of course it is a marketer’s job to be creative but you should always be looking to separate yourself from the competition. Be innovative in your marketing by trying new things and putting new ideas into motion.\n\nThere are all sorts of trends and fads that pass through the marketing world, so don't be afraid to start one!")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Hack into the Mainframe",
  description: "Hack all the files")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Automate the process",
  description: "All the processes")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Create feasibility reports",
  description: "All the reports")
task2 = Task.create(
  creator_id: user1.id,
  project_id: project2.id,
  name: "Maintain field units",
  description: "All the field units")
