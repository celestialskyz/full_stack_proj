# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Musical.destroy_all
Reservation.destroy_all

user1 = User.create(email:'greenmachine@shiz.edu', first_name: 'Elphaba', last_name: 'Thropp', country:'United States', password:'defygravity')
user2 = User.create(email: 'gAlinda@shiz.edu', first_name:"Glinda", last_name:'Upland', country:'United States', password:'popular')
user3 = User.create(email: 'Nessa@shiz.edu', first_name:"Nessa", last_name:'Thropp', country:'United States', password:'time')

show1 = Musical.create({name:"Dear Evan Hansen" , description:"Sad tree boy makes a friend.", cost:162.00, website:"https://dearevanhansen.com", lottery:true, address:"239 West 45th Street", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2122396200, max_cap:1025, category:"pop-drama", lat:40.758839, lng:-73.987091})
show2 = Musical.create({name:"Come from Away" , description:"Canadians are super nice", cost:137.00, website:"https://comefromaway.com", lottery:true, address:"236 W 45th St", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2122396200, max_cap:1079, category:"folk-pop-drama", lat:40.7586, lng:-73.9873})
show3 = Musical.create({name:"Hamilton" , description:"Rap makes history cool now.", cost:310.00, website:"https://hamiltonmusical.com/new-york/", lottery:true, address:"226 W 46th St", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2122211211, max_cap:1380, category:"rap-historical", lat:40.759041, lng:-73.986740})
show4 = Musical.create({name:"Book of Mormon" , description:"2 Americans introduce bestiality to the people of Central Africa.", cost:149.00, website:"https://bookofmormonbroadway.com", lottery:true, address:"230 West 49th Street", city:"New York City", state: 'NY', zip:"10019", country:'United States', phone_n:8772502929, max_cap:688, category:"pop-comedy", lat:40.761169, lng:-73.985741})
show5 = Musical.create({name:"Waitress" , description:"Man risks medical license to eat pies.", cost:135.00, website:"https://www.waitressthemusical.co.uk", lottery:true, address:"409-412 Strand", city:"London", state: 'London', zip:"WC2R 0NS", country: 'United Kingdom', phone_n:2122396200, max_cap:1500, category:"country-romcom", lat:51.510039, lng:-0.122814})
show6 = Musical.create({name:"Little Shop of Horrors" , description:"plants are mean", cost:80.00, website:"https://www.littleshopnyc.com", lottery:false, address:"239 West 45th Street", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2123152302, max_cap:299, category:"pop-comedy", lat:40.758890, lng:-73.987140})
# Musical.create({name:"testing" , description:"test", cost:162.00, website:"https://idk.com", lottery:"true", address:"23435 West 45th Street", city:"New York City", state: 'NY', zip:"10036", country: 'United States', phone_n:2122396200, max_cap:1025, category:"pop-drama", lat:40.43543, lng:-73.5432})show1.photo.attach(io: file, filename: 'DEH_p1.jpg')
# show7 = Musical.create({name:"Anastasia" , description:"Girl doesn't know she's a princess, figures out she's a princess, and tries to convince an old lady she's a princess.", cost:80.00, website:"https://anastasiathemusical.com/", lottery:true, address:"222 SW Clay" city:"Portland", state: 'OR', zip:"97201", country: 'United States', phone_n:5032484335, max_cap:2992, category:"romantic-comedy", lat:45.5125, lng:122.6782})



DEH1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/DEH_p1.jpg')
DEH2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/DEH_p2.jpg')
DEH3 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/DEH_p3.jpeg')
DEHbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/dear_evanh_banner.jpg')
show1.photos.attach(io: DEH1, filename: 'DEH_p1.jpg')
show1.photos.attach(io: DEH2, filename: 'DEH_p2.jpg')
show1.photos.attach(io: DEH3, filename: 'DEH_p3.jpg')
show1.photos.attach(io: DEHbanner, filename: 'dear_evanh_banner.jpg')

CFA1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/come_from-away_p1.jpg')
CFA2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/come-from-away_p2.jpg')
CFA3 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/come-from-away_p3.jpg')
CFAbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/come_from_away_banner.jpg')

show2.photos.attach(io: CFA1, filename:'come_from-away_p1.jpg')
show2.photos.attach(io: CFA2, filename:'come_from-away_p2.jpg')
show2.photos.attach(io: CFA3, filename:'come_from-away_p3.jpg')
show2.photos.attach(io: CFAbanner, filename:'come_from_away_banner.jpg')

HAM1= open("https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/Ham-p2.jpg")
HAM2= open("https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/Ham_p1.jpg")
HAM3= open("https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/Ham_p3.jpg")
HAMbanner= open("https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/Hamilton_banner.jpg")
show3.photos.attach(io: HAM1, filename:'Ham-p2.jpg')
show3.photos.attach(io: HAM2, filename:'Ham-p1.jpg')
show3.photos.attach(io: HAM3, filename:'Ham-p3.jpg')
show3.photos.attach(io: HAMbanner, filename:'Hamilton_banner.jpg')

BOM3 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/Book_OM_p3.jpg')
BOM2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/book_OM_p2.jpg')
BOM1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/book_OM_p1.jpg')
BOMbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/book_OM_banner.png')
show4.photos.attach(io: BOM3, filename: 'Book_OM_p3.jpg')
show4.photos.attach(io: BOM1, filename: 'Book_OM_p2.jpg')
show4.photos.attach(io: BOM2, filename: 'Book_OM_p1.jpg')
show4.photos.attach(io: BOMbanner, filename: 'book_OM_banner.png')

WAIT1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/wait_p1.jpg')
WAIT2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/wait_p2.jpg')
WAIT3 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/wait_p3.jpg')
WAITbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/Waitress_banner.jpg')

show5.photos.attach(io: WAIT1, filename:'wait_p1.jpg')
show5.photos.attach(io: WAIT2, filename:'wait_p2.jpg')
show5.photos.attach(io: WAIT3, filename:'wait_p3.jpg')
show5.photos.attach(io: WAITbanner, filename:'Waitress_banner.jpg')


LSH1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/Little_p1.jpg')
LSH2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/little-p2.jpg')
LSH3 = open("https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/little_p3.jpg")
LSHbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/little_shop_banner.png')
show6.photos.attach(io: LSH1, filename:'Little_p1.jpg')
show6.photos.attach(io: LSH2, filename:'Little_p2.jpg')
show6.photos.attach(io: LSH3, filename:'Little_p3.jpg')
show6.photos.attach(io: LSHbanner, filename:'little_shop_banner.png')

d1 = Date.new(2020, 5, 6)
d3 = Date.new(2020, 7, 11)
d2 = Date.new(2020, 11, 24)
h1 = 2000
h2 = 2200
r1 = Reservation.create!({show_id: show1.id, reserver_id: user1.id, party_size: 5, date:d1 , time: h1})
r2 = Reservation.create!({show_id: show1.id, reserver_id: user2.id, party_size:2 , date:d3 , time: h1})
r3 = Reservation.create!({show_id: show4.id, reserver_id: user1.id, party_size:4 , date:d2 , time: h2})