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
show5 = Musical.create({name:"Waitress" , description:"Man risks medical license to eat pies.", cost:135.00, website:"https://www.waitressthemusical.co.uk", lottery:true, address:"409-412 Strand", city:"London", state: 'England', zip:"WC2R 0NS", country: 'United Kingdom', phone_n:2122396200, max_cap:1500, category:"country-romcom", lat:51.510039, lng:-0.122814})
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
show4.photos.attach(io: BOM2, filename: 'Book_OM_p2.jpg')
show4.photos.attach(io: BOM1, filename: 'Book_OM_p1.jpg')
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

show7 = Musical.create({name:"Anastasia" , description:"An elderly lady and her grand daughter play a Europe-wide game of hide and seek. The granddaughter forgets she’s playing.", cost:80.00, website:"https://anastasiathemusical.com/", lottery:true, address:"222 SW Clay", city:"Portland", state: 'OR', zip:"97201", country: 'United States', phone_n:5032484335, max_cap:1500, category:"romantic-comedy", lat:45.5125, lng:122.6782})

ANA1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/ANA1.jpg')
ANA2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/ANA2.png')
ANA3 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/ANA3.jpg')
ANAbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/ANAbanner.png')
show7.photos.attach(io: ANA1, filename: 'ANA.jpg')
show7.photos.attach(io: ANA2, filename: 'ANA.png')
show7.photos.attach(io: ANA3, filename: 'ANA.jpg')
show7.photos.attach(io: ANAbanner, filename: 'ANAbanner.png')

 
show8 = Musical.create({name:"Newsies" , description:"Several hundred teenagers are mad at a business man when he raises prices of the newspaper.", cost:130.00, website:"https://newsiesthemusical.com/", lottery:true, address:"2100 Thousand Oaks Blvd", city:"Thousand Oaks", state: "CA", zip:"91362", country: 'United States', phone_n:8054492787, max_cap:2332, category:"comedy drama", lat:34.1744356, lng:-118.8487358})

NEWS1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/NEWS1.jpg')
NEWS2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/NEWS2.jpg')
NEWS3 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/NEWS3.jpg')
NEWSbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/NEWSbanner.jpg')
show8.photos.attach(io: NEWS1, filename: 'NEWS1.jpg')
show8.photos.attach(io: NEWS2, filename: 'NEWS2.jpg')
show8.photos.attach(io: NEWS3, filename: 'NEWS3.jpg')
show8.photos.attach(io: NEWSbanner, filename: 'NEWSbanner.jpg')



show9 = Musical.create({name:"Mama Mia", description:"Imagine this,
It’s 20 years from now. Your daughter is about to get married. You don’t have a husband but three men that might be her father show up on your Greek island. It’s chaos.", cost:169.00, website:"https://www.ticketmaster.com/mamma-mia-touring-tickets/artist/1120969", lottery:false, address:"Hurst St, Southside,", city:" Birmingham", state: "England", zip:" B5 4TB", country: 'United Kingdom', phone_n:8054492787, max_cap:362, category:"comedy drama", lat:52.4745566, lng:-1.8974956})

MIA1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/MIA.jpg')
MIA2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/MIA2.jpg')
MIA3 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/MIA3.jpg')
MIAbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/MIAbanner.jpg')
show9.photos.attach(io: MIA1, filename: 'MIA.jpg')
show9.photos.attach(io: MIA2, filename: 'MIA.jpg')
show9.photos.attach(io: MIA3, filename: 'MIA.jpg')
show9.photos.attach(io: MIAbanner, filename: 'MIAbanner.jpg')


show10 =  Musical.create({name:"Les Miserables" , description:"A revolutionary musical about a platonic love story between two french boys, with the subplots of a girl getting friendzoned, a guy who steals bread and a policeman who’s obsessed with yelling out his name for no reason.", cost:250.00, website:"https://www.lesmis.com/us-tour/tour-dates", lottery:false, address:"300 King St W,", city:" Toronto", state: "Ontario", zip:" M5V 1J2", country: 'Canada', phone_n:8004613333, max_cap:2000, category:"drama", lat:43.6468156, lng:-79.389154})
MIS1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/MIS1.jpg')
MIS2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/MIS2.jpg')
MIS3 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/MIS3.jpg')
MISbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/MISbanner.jpg')
show10.photos.attach(io: MIS1, filename: 'MIS.jpg')
show10.photos.attach(io: MIS2, filename: 'MIS.jpg')
show10.photos.attach(io: MIS3, filename: 'MIS.jpg')
show10.photos.attach(io: MISbanner, filename: 'MISbanner.jpg')

show11 =  Musical.create({name:"Bandstand" , description:"War sucks but PTSD is worse but when you come home you can make a band. Also Laura Osnes is the GOAT", cost:250.00, website:"https://www.lesmis.com/us-tour/tour-dates", lottery:true, address:"102 State St,", city:" Hackensack", state: "NJ", zip:"07601", country: 'United States', phone_n:2018203007, max_cap:1600, category:"drama", lat:40.8828967, lng:-74.0597564})
BAND1 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/BAND1.jpg')
BAND2 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/BAND2.png')
BAND3 = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/BAND3.jpeg')
BANDbanner = open('https://openplaybill-seeds.s3.amazonaws.com/FullStackPhotos/BANDbanner.jpeg')
show11.photos.attach(io: BAND1, filename: 'BAND.jpg')
show11.photos.attach(io: BAND2, filename: 'BAND.jpg')
show11.photos.attach(io: BAND3, filename: 'BAND.jpg')
show11.photos.attach(io: BANDbanner, filename: 'BANDbanner.jpg')

