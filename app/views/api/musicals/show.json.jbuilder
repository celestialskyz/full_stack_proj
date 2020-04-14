json.partial! 'api/musicals/musical', musical: @musical
json.photoUrls @musical.photos.map { |file| url_for(file) }
