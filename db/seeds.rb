# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
a.cover_art.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/alfamist/front.jpg"), filename: "front.jpg")


test_track = Track.create!(title: 'not good not bad', artist_id: 1, album_id: 1)
test_track.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/ngnb.mp3"), filename: "ngnb.mp3")

# Alfa Mist, artist 2 //////////////


t1 = Track.create!(title: 'Keep On', album_id: 2, artist_id: 2)
t1.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/alfamist/keepon.mp3"), filename: "keepon.mp3")
t2 = Track.create!(title: 'Potential', album_id: 2, artist_id: 2)
t2.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/alfamist/potential.mp3"), filename: "potential.mp3")
t3 = Track.create!(title: 'Errors', album_id: 2, artist_id: 2)
t3.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/alfamist/errors.mp3"), filename: "errors.mp3")
t4 = Track.create!(title: 'Breathe', album_id: 2, artist_id: 2)
t4.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/alfamist/breathe.mp3"), filename: "breathe.mp3")
t5 = Track.create!(title: '7th October', album_id: 2, artist_id: 2)
t5.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/alfamist/october.mp3"), filename: "october.mp3")
t6 = Track.create!(title: 'Kyoki', album_id: 2, artist_id: 2)
t6.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/alfamist/kyoki.mp3"), filename: "kyoki.mp3")
t7 = Track.create!(title: 'Nucleus', album_id: 2, artist_id: 2)
t7.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/alfamist/nucleus.mp3"), filename: "nucleus.mp3")
t8 = Track.create!(title: 'Brian', album_id: 2, artist_id: 2)
t8.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/alfamist/brian.mp3"), filename: "brian.mp3")

