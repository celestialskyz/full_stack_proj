json.extract! musical, :id, :name, :description, :cost, :website, :lottery, :address, :city, :state, :zip, :country, :zip, :phone_n, :max_cap, :category, :lat, :lng, :photos, :average_rating
#debugger
if musical.photos.attached?
  json.photoUrls musical.photos.map { |file| url_for(file) }
end