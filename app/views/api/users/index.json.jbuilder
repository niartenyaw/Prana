current_user.teams.each do |team|
  team.users.each do |user|
    unless user == current_user
      json.set! user.id do
        json.partial! 'api/users/user', user: user
      end
    end
  end
end
