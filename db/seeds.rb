# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all

User.create!(username: 'dhebert', email: 'd.hebert@live.com', password: 'password')
guest = User.create!(username: 'guest_user', email: 'guest@listener.com', password: 'password')

Artist.create!(name: 'd. hebert')
Artist.create!(name: 'Alfa Mist')

Album.create!(title: 'tests', artist_id: 1)
a = Album.create!(title: "Antiphon", artist_id: 2)
fa = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/front.jpg')
a.cover_art.attach(io: fa, filename: "front.jpg")


test_track = Track.create!(title: 'not good not bad', artist_id: 1, album_id: 1)
test_track.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/ngnb.mp3"), filename: "ngnb.mp3")

# Alfa Mist, artist 2 //////////////


t1 = Track.create!(title: 'Keep On', album_id: 2, artist_id: 2)
f1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/keepon.mp3')
t1.file.attach(io: f1, filename: "keepon.mp3")

t2 = Track.create!(title: 'Potential', album_id: 2, artist_id: 2)
f2 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/potential.mp3')
t2.file.attach(io: f2, filename: "potential.mp3")

t3 = Track.create!(title: 'Errors', album_id: 2, artist_id: 2)
f3 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/errors.mp3')
t3.file.attach(io: f3, filename: "errors.mp3")

t4 = Track.create!(title: 'Breathe', album_id: 2, artist_id: 2)
f4 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/breathe.mp3')
t4.file.attach(io: f4, filename: "breathe.mp3")

t5 = Track.create!(title: '7th October', album_id: 2, artist_id: 2)
f5 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/october.mp3')
t5.file.attach(io: f5, filename: "october.mp3")

t6 = Track.create!(title: 'Kyoki', album_id: 2, artist_id: 2)
f6 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/kyoki.mp3')
t6.file.attach(io: f6, filename: "kyoki.mp3")

t7 = Track.create!(title: 'Nucleus', album_id: 2, artist_id: 2)
f7 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/nucleus.mp3')
t7.file.attach(io: f7, filename: "nucleus.mp3")

t8 = Track.create!(title: 'Brian', album_id: 2, artist_id: 2)
f8 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/brian.mp3')
t8.file.attach(io: f8, filename: "brian.mp3")

