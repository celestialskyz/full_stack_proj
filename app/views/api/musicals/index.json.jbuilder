@musicals.each do |musical|
  json.set! musical.id do
    json.partial! 'api/musicals/musical', musical: musical
  end
end