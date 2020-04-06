# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email:'greenmachine@shiz.edu' first_name: 'Elphaba' last_name: 'Thropp' country:'USA' )
user2 = User.create(email: 'gAlinda@shiz.edu' first_name:"Glinda" last_name:'Upland' country:'USA' )