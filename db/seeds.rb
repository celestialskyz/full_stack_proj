# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create(email:'greenmachine@shiz.edu', first_name: 'Elphaba', last_name: 'Thropp', country:'United States', password:'defygravity')
user2 = User.create(email: 'gAlinda@shiz.edu', first_name:"Glinda", last_name:'Upland', country:'United States', password:'popular')

user3 = User.create(email: 'Nessa@shiz.edu', first_name:"Nessa", last_name:'Thropp', country:'United States', password:'time')

show1 = Musical.create({name:"Dear Evan Hansen" , description:"Sad tree boy makes a friend.", cost:162.00, website:"https://dearevanhansen.com", lottery:true, address:"239 West 45th Street", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2122396200, max_cap:1025, category:"pop-drama", lat:40.758839, lng:-73.987091})
show2 = Musical.create({name:"Come from Away" , description:"Canadians are super nice", cost:137.00, website:"https://comefromaway.com", lottery:true, address:"236 W 45th St", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2122396200, max_cap:1079, category:"folk-pop-drama", lat:40.7586, lng:-73.9873})
show3 = Musical.create({name:"Hamilton" , description:"Rap makes history cool now.", cost:310.00, website:"https://hamiltonmusical.com/new-york/", lottery:true, address:"226 W 46th St", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2122211211, max_cap:1380, category:"rap-historical", lat:40.759041, lng:-73.986740})
show4 = Musical.create({name:"Book of Mormon" , description:"2 Americans introduce bestiality to the people of Central Africa.", cost:149.00, website:"https://bookofmormonbroadway.com", lottery:true, address:"230 West 49th Street", city:"New York City", state: 'NY', zip:"10019", country:'United States', phone_n:8772502929, max_cap:688, category:"pop-comedy", lat:40.761169, lng:-73.985741})
show5 = Musical.create({name:"Waitress" , description:"Man risks medical license to eat pies.", cost:135.00, website:"https://www.waitressthemusical.co.uk", lottery:true, address:"409-412 Strand", city:"London", state: 'London', zip:"WC2R 0NS", country: 'United Kingdom', phone_n:2122396200, max_cap:1500, category:"country-romcom", lat:51.510039, lng:-0.122814})
show6 = Musical.create({name:"Little Shop of Horrors" , description:"plants are mean", cost:80.00, website:"https://www.littleshopnyc.com", lottery:false, address:"239 West 45th Street", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2123152302, max_cap:299, category:"pop-comedy", lat:40.758890, lng:-73.987140})


# Musical.create({name:"testing" , description:"test", cost:162.00, website:"https://idk.com", lottery:"true", address:"23435 West 45th Street", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2122396200, max_cap:1025, category:"pop-drama", lat:40.43543, lng:-73.5432})