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
Artist.create!(name: 'Introcut')

a1 = Album.create!(title: 'tests', artist_id: 1)
fa1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/art.png')
a1.cover_art.attach(io: fa1, filename: "art.jpg")

a2 = Album.create!(title: "Antiphon", artist_id: 2)
fa2 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/front.jpg')
a2.cover_art.attach(io: fa2, filename: "front.jpg")

a3 = Album.create!(title: 'Sleep Paralysis', artist_id: 3)
fa3 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/cover.jpg')
a3.cover_art.attach(io: fa3, filename: "cover.jpg")


test_track = Track.create!(title: 'not good not bad', artist_id: 1, album_id: 1)
test_audio = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/ngnb.mp3')
test_track.file.attach(io: test_audio, filename: "ngnb.mp3")

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


# INTROCUT, SLEEP PARALYSIS //////////////

t1 = Track.create!(title: 'Orbital Debris', album_id: 3, artist_id: 3)
f1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/Introcut+-+Sleep+Paralysis+-+01+Orbital+Debris.mp3')
t1.file.attach(io: f1, filename: "Debris.mp3")

t2 = Track.create!(title: 'Your Ruler', album_id: 3, artist_id: 3)
f2 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/Introcut+-+Sleep+Paralysis+-+02+Your+Ruler.mp3')
t2.file.attach(io: f2, filename: "Ruler.mp3")

t3 = Track.create!(title: 'Sleep Paralysis', album_id: 3, artist_id: 3)
f3 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/Introcut+-+Sleep+Paralysis+-+03+Sleep+Paralysis.mp3')
t3.file.attach(io: f3, filename: "Paralysis.mp3")

t4 = Track.create!(title: 'Garbage, Bread & Butter', album_id: 3, artist_id: 3)
f4 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/Introcut+-+Sleep+Paralysis+-+04+Garbage%2C+Bread+%26+Butter.mp3')
t4.file.attach(io: f4, filename: "Butter.mp3")

t5 = Track.create!(title: 'Pile of Trouble', album_id: 3, artist_id: 3)
f5 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/Introcut+-+Sleep+Paralysis+-+05+Pile+of+Trouble.mp3')
t5.file.attach(io: f5, filename: "Trouble.mp3")

t6 = Track.create!(title: 'Number One', album_id: 3, artist_id: 3)
f6 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/Introcut+-+Sleep+Paralysis+-+06+Number+One.mp3')
t6.file.attach(io: f6, filename: "One.mp3")

t7 = Track.create!(title: 'Beach Sting', album_id: 3, artist_id: 3)
f7 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/Introcut+-+Sleep+Paralysis+-+07+Beach+Sting.mp3')
t7.file.attach(io: f7, filename: "Sting.mp3")

t8 = Track.create!(title: 'Friends Forever', album_id: 3, artist_id: 3)
f8 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/Introcut+-+Sleep+Paralysis+-+08+Friends+Forever.mp3')
t8.file.attach(io: f8, filename: "Forever.mp3")