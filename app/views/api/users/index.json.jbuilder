@users.each do |uzer|
  json.set! uzer.id do
    json.partial! 'api/users/user', user: uzer
  end
end