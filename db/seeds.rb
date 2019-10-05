# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

guest = User.create!(username: 'guest_user', email: 'guest@listener.com', password: 'password')

user1 = User.create!(username: 'dhebert', email: 'd.hebert@live.com', password: 'password')


test_track = Track.create!(title: 'not good not bad', artist_id: 1, album_id: 1)
test_track.file.attach(io: File.open("/Users/davidhebert/Documents/listener-dev/ngnb.mp3"), filename: "ngnb.mp3")