# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# dropping tables: /////////////////////////////////////////////////////////////
User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all

# making users: ////////////////////////////////////////////////////////////////

User.create!(username: 'dhebert', email: 'd.hebert@live.com', password: 'password')
guest = User.create!(username: 'guest_user', email: 'guest@listener.com', password: 'password')
picture = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/face-mask.jpg')
guest.picture.attach(io: picture, filename: 'mask.jpg')

# making artists: //////////////////////////////////////////////////////////////


a1 = Artist.create!(name: '猫 シ Corp.')
img = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/artist+show+pics/artistpics/acrossthepatio.jpg')
a1.image.attach(io: img, filename: 'acrossthepatio.jpg')

a2 = Artist.create!(name: 'Alfa Mist')
img = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/artist+show+pics/artistpics/alfamist.jpg') 
a2.image.attach(io: img, filename: 'alfamist.jpg')

a3 = Artist.create!(name: 'Introcut')
img = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/artist+show+pics/artistpics/introcut.jpg') 
a3.image.attach(io: img, filename: 'introcut.jpg')

a4 = Artist.create!(name: 'Poppies')
img = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/artist+show+pics/artistpics/poppies.jpg')
a4.image.attach(io: img, filename: 'poppies.jpg')

a5 = Artist.create!(name: 'Doyeq')
img = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/artist+show+pics/artistpics/doyeq.jpg') 
a5.image.attach(io: img, filename: 'doyeq.jpg')

a6 = Artist.create!(name: 'Himmelsrandt')
img = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/artist+show+pics/artistpics/himmelsrandt.jpg') 
a6.image.attach(io: img, filename: 'himmelsrandt.jpg')

a7 = Artist.create!(name: 'Cloudkicker')
img = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/cloudkickerartist.jpg')
a7.image.attach(io: img, filename: 'cloudkickerartist.jpg')

a8 = Artist.create!(name: 'Handwrist')
img = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/handwristartist.jpg')
a8.image.attach(io: img, filename: 'handwristartist.jpg')

# making albums: ///////////////////////////////////////////////////////////////

a1 = Album.create!(title: 'lofi', artist_id: 1)
fa1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/cover.png')
a1.cover_art.attach(io: fa1, filename: "cover.png")

a2 = Album.create!(title: "Antiphon", artist_id: 2)
fa2 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/alfamist/front.jpg')
a2.cover_art.attach(io: fa2, filename: "front.jpg")

a3 = Album.create!(title: 'Sleep Paralysis', artist_id: 3)
fa3 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Introcut+-+Sleep+Paralysis/cover.jpg')
a3.cover_art.attach(io: fa3, filename: "cover.jpg")

a4 = Album.create!(title: 'Double Single', artist_id: 4)
fa4 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Poppies+-+Double+Single/cover.jpg')
a4.cover_art.attach(io: fa4, filename: "cover.jpg")

a5 = Album.create!(title: 'Never Back', artist_id: 5)
fa5 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/cover.jpg')
a5.cover_art.attach(io: fa5, filename: "cover.jpg")

a6 = Album.create!(title: 'V A L E', artist_id: 6)
fa6 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Himmelsrandt+-+V+A+L+E/cover.jpg')
a6.cover_art.attach(io: fa6, filename: "cover.jpg")

a7 = Album.create!(title: 'Let Yourself Be Huge', artist_id: 7)
fa7 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/Cloudkicker+-+Let+Yourself+Be+Huge/cover.jpg')
a7.cover_art.attach(io: fa7, filename: "cover.jpg")

a8 = Album.create!(title: 'Paranoia Hotel', artist_id: 8)
fa8 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/handwrist+-+Paranoia+Hotel/cover.jpg')
a8.cover_art.attach(io: fa8, filename: "cover.jpg")


# making tracks: ///////////////////////////////////////////////////////////////

t = Track.create!(title: 'Shinjuku Gyoen', album_id: 1, artist_id: 1)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+01+Shinjuku+Gyoen.mp3')
t.file.attach(io: f, filename: 'Gyoen.mp3')

t = Track.create!(title: 'Amano', album_id: 1, artist_id: 1)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+02+Amano.mp3')
t.file.attach(io: f, filename: 'Amano.mp3')

t = Track.create!(title: "Tokyo '82", album_id: 1, artist_id: 1)
f = open("https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+03+%E3%80%92160-0014+Tokyo+'82.mp3")
t.file.attach(io: f, filename: "Tokyo '82.mp3")

t = Track.create!(title: 'Late Breakfast', album_id: 1, artist_id: 1)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+04+Late+Breakfast.mp3')
t.file.attach(io: f, filename: 'Breakfast.mp3')

t = Track.create!(title: 'Rainy Sunday', album_id: 1, artist_id: 1)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+05+Rainy+Sunday.mp3')
t.file.attach(io: f, filename: 'Sunday.mp3')

t = Track.create!(title: 'Anubias', album_id: 1, artist_id: 1)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+06+Anubias.mp3')
t.file.attach(io: f, filename: 'Anubias.mp3')

t = Track.create!(title: 'Campus Coffee', album_id: 1, artist_id: 1)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+07+Campus+Coffee.mp3')
t.file.attach(io: f, filename: 'Coffee.mp3')

t = Track.create!(title: 'Full Moon', album_id: 1, artist_id: 1)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+08+Full+Moon.mp3')
t.file.attach(io: f, filename: 'Moon.mp3')

t = Track.create!(title: 'Waiting', album_id: 1, artist_id: 1)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+09+Waiting.mp3')
t.file.attach(io: f, filename: 'Waiting.mp3')

t = Track.create!(title: 'Tears pt.3', album_id: 1, artist_id: 1)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi/%E7%8C%AB+%E3%82%B7+Corp.+-+lofi+-+10+Tears+pt.+3.mp3')
t.file.attach(io: f, filename: 'tears.mp3')


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

# POPPIES, DOUBLE SINGLE artist 4 //////////////

t1 = Track.create!(title: 'Egghead', album_id: 4, artist_id: 4)
f1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Poppies+-+Double+Single/Poppies+-+Double+Single+-+01+Egghead.mp3')
t1.file.attach(io: f1, filename: "egghead.mp3")

t1 = Track.create!(title: 'Mistakes', album_id: 4, artist_id: 4)
f1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Poppies+-+Double+Single/Poppies+-+Double+Single+-+02+Mistakes.mp3')
t1.file.attach(io: f1, filename: "mistakes.mp3")

# DOYEQ, NEVER BACK artist 5 //////////////
t1 = Track.create!(title: 'After the Rain', album_id: 5, artist_id: 5)
f1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/Doyeq+-+Never+Back+-+01+Walking+After+The+Rain.mp3')
t1.file.attach(io: f1, filename: 'rain.mp3')

t2 = Track.create!(title: 'Daylight', album_id: 5, artist_id: 5)
f2 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/Doyeq+-+Never+Back+-+02+Daylight.mp3')
t2.file.attach(io: f2, filename: 'daylight.mp3')

t3 = Track.create!(title: 'Smoke in the Light', album_id: 5, artist_id: 5)
f3 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/Doyeq+-+Never+Back+-+03+A+Movement+Of+Smoke+In+The+Light.mp3')
t3.file.attach(io: f3, filename: 'light.mp3')

t4 = Track.create!(title: 'Downstairs', album_id: 5, artist_id: 5)
f4 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/Doyeq+-+Never+Back+-+04+Downstairs.mp3')
t4.file.attach(io: f4, filename: 'downstairs.mp3')

t5 = Track.create!(title: 'Nothing to Prove', album_id: 5, artist_id: 5)
f5 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/Doyeq+-+Never+Back+-+05+Nothing+To+Prove.mp3')
t5.file.attach(io: f5, filename: 'prove.mp3')

t6 = Track.create!(title: 'Thank You', album_id: 5, artist_id: 5)
f6 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/Doyeq+-+Never+Back+-+06+Thank+You.mp3')
t6.file.attach(io: f6, filename: 'you.mp3')

t7 = Track.create!(title: 'Never Back', album_id: 5, artist_id: 5)
f7 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/Doyeq+-+Never+Back+-+07+Never+Back.mp3')
t7.file.attach(io: f7, filename: 'back.mp3')

t8 = Track.create!(title: 'There', album_id: 5, artist_id: 5)
f8 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/Doyeq+-+Never+Back+-+08+There.mp3')
t8.file.attach(io: f8, filename: 'there.mp3')

t9 = Track.create!(title: 'Waterline Horizon', album_id: 5, artist_id: 5)
f9 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Doyeq+-+Never+Back/Doyeq+-+Never+Back+-+09+Waterline+Horizon.mp3')
t9.file.attach(io: f9, filename: 'horizon.mp3')


# HIMMELSRANDT, NEVER BACK artist 5 //////////////
t1 = Track.create!(title: 'Stilles Geleit', album_id: 6, artist_id: 6)
f1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Himmelsrandt+-+V+A+L+E/Himmelsrandt+-+V+A+L+E+-+01+Stilles+Geleit.mp3')
t1.file.attach(io: f1, filename: 'geleit.mp3')

t2 = Track.create!(title: 'Tag Traum', album_id: 6, artist_id: 6)
f2 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Himmelsrandt+-+V+A+L+E/Himmelsrandt+-+V+A+L+E+-+02+Tag-Traum.mp3')
t2.file.attach(io: f2, filename: 'traum.mp3')

t3 = Track.create!(title: 'Nacht Leben', album_id: 6, artist_id: 6)
f3 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Himmelsrandt+-+V+A+L+E/Himmelsrandt+-+V+A+L+E+-+03+Nacht-Leben.mp3')
t3.file.attach(io: f3, filename: 'leben.mp3')

t4 = Track.create!(title: 'Requiem', album_id: 6, artist_id: 6)
f4 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/Himmelsrandt+-+V+A+L+E/Himmelsrandt+-+V+A+L+E+-+04+Requiem.mp3')
t4.file.attach(io: f4, filename: 'requiem.mp3')


# /////// Cloudkicker
t = Track.create!(title: 'Welcome Back', album_id: 7, artist_id: 7)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/Cloudkicker+-+Let+Yourself+Be+Huge/Cloudkicker+-+Let+Yourself+Be+Huge+-+01+Welcome+back.mp3')
t.file.attach(io: f, filename: 'back.mp3')
t = Track.create!(title: 'Explore, Be Curious', album_id: 7, artist_id: 7)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/Cloudkicker+-+Let+Yourself+Be+Huge/Cloudkicker+-+Let+Yourself+Be+Huge+-+02+Explore%2C+be+curious.mp3')
t.file.attach(io: f, filename: 'curious.mp3')
t = Track.create!(title: 'The Word Water', album_id: 7, artist_id: 7)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/Cloudkicker+-+Let+Yourself+Be+Huge/Cloudkicker+-+Let+Yourself+Be+Huge+-+03+The+word+water.mp3')
t.file.attach(io: f, filename: 'water.mp3')
t = Track.create!(title: 'You and Yours', album_id: 7, artist_id: 7)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/Cloudkicker+-+Let+Yourself+Be+Huge/Cloudkicker+-+Let+Yourself+Be+Huge+-+04+You+and+yours.mp3')
t.file.attach(io: f, filename: 'yours.mp3')
t = Track.create!(title: 'One, Many', album_id: 7, artist_id: 7)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/Cloudkicker+-+Let+Yourself+Be+Huge/Cloudkicker+-+Let+Yourself+Be+Huge+-+05+One%2C+many.mp3')
t.file.attach(io: f, filename: 'many.mp3')
t = Track.create!(title: "It's Inside Me, and I'm Inside It", album_id: 7, artist_id: 7)
f = open("https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/Cloudkicker+-+Let+Yourself+Be+Huge/Cloudkicker+-+Let+Yourself+Be+Huge+-+06+It's+inside+me%2C+and+I'm+inside+it.mp3")
t.file.attach(io: f, filename: 'it.mp3')
t = Track.create!(title: "This isn't", album_id: 7, artist_id: 7)
f = open("https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/Cloudkicker+-+Let+Yourself+Be+Huge/Cloudkicker+-+Let+Yourself+Be+Huge+-+07+This+isn't.mp3")
t.file.attach(io: f, filename: 'isnt.mp3')
t = Track.create!(title: "Let Yourself Be Huge", album_id: 7, artist_id: 7)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/Cloudkicker+-+Let+Yourself+Be+Huge/Cloudkicker+-+Let+Yourself+Be+Huge+-+08+Let+yourself+be+huge.mp3')
t.file.attach(io: f, filename: 'huge.mp3')


# /////// Handwrist

t = Track.create!(title: 'Reception', album_id: 8, artist_id: 8)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/handwrist+-+Paranoia+Hotel/handwrist+-+Paranoia+Hotel+-+01+Reception.mp3')
t.file.attach(io: f, filename: 'reception.mp3')
t = Track.create!(title: 'Elevator Malaise', album_id: 8, artist_id: 8)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/handwrist+-+Paranoia+Hotel/handwrist+-+Paranoia+Hotel+-+02+Elevator+Malaise.mp3')
t.file.attach(io: f, filename: 'malaise.mp3')
t = Track.create!(title: 'Panic Room', album_id: 8, artist_id: 8)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/handwrist+-+Paranoia+Hotel/handwrist+-+Paranoia+Hotel+-+03+Panic+Room.mp3')
t.file.attach(io: f, filename: 'room.mp3')
t = Track.create!(title: 'Emergency Exit', album_id: 8, artist_id: 8)
f = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/new+seeds/handwrist+-+Paranoia+Hotel/handwrist+-+Paranoia+Hotel+-+04+Emergency+Exit.mp3')
t.file.attach(io: f, filename: 'exit.mp3')




# PLAYLISTS /////
p1 = Playlist.create!(title: 'Crisp', author_id: 2, track_ids: [9, 4, 3, 18, 3, 5, 4, 6])
f1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc1.jpg')
p1.cover_art.attach(io: f1, filename: 'pc1.jpg')

p2 = Playlist.create!(title: 'FTDIMY', author_id: 2, track_ids: [5, 4, 5, 6, 13, 14, 15])
f2 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc2.jpg')
p2.cover_art.attach(io: f2, filename: 'pc2.jpg')

p3 = Playlist.create!(title: 'Never Ending', author_id: 2, track_ids: [12, 7, 8, 9])
f3 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc3.jpg')
p3.cover_art.attach(io: f3, filename: 'pc3.jpg')

p4 = Playlist.create!(title: 'Only Fools', author_id: 2, track_ids: [10, 14, 12, 11, 14, 15, 16, 17, 19])
f4 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc4.jpg')
p4.cover_art.attach(io: f4, filename: 'pc4.jpg')

p5 = Playlist.create!(title: 'Shorthand', author_id: 2, track_ids: [11, 14, 15, 16, 17, 19])
f5 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc5.jpg')
p5.cover_art.attach(io: f5, filename: 'pc5.jpg')

p6 = Playlist.create!(title: 'Push & Pull', author_id: 2, track_ids: [16, 17, 18])
f6 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc6.jpg')
p6.cover_art.attach(io: f6, filename: 'pc6.jpg')

p1 = Playlist.create!(title: 'Winter', author_id: 2, track_ids: [9, 4, 3, 18, 3, 5, 4, 6])
f1 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc1.jpg')
p1.cover_art.attach(io: f1, filename: 'pc1.jpg')

p2 = Playlist.create!(title: 'Quiet Mornings', author_id: 2, track_ids: [5, 4, 5, 6, 13, 14, 15])
f2 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc2.jpg')
p2.cover_art.attach(io: f2, filename: 'pc2.jpg')

p3 = Playlist.create!(title: 'Covers', author_id: 2, track_ids: [12, 7, 8, 9])
f3 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc3.jpg')
p3.cover_art.attach(io: f3, filename: 'pc3.jpg')

p4 = Playlist.create!(title: 'School', author_id: 2, track_ids: [10, 14, 12, 11, 14, 15, 16, 17, 19])
f4 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc4.jpg')
p4.cover_art.attach(io: f4, filename: 'pc4.jpg')

p5 = Playlist.create!(title: 'After Work', author_id: 2, track_ids: [11, 14, 15, 16, 17, 19])
f5 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc5.jpg')
p5.cover_art.attach(io: f5, filename: 'pc5.jpg')

p6 = Playlist.create!(title: 'Gym', author_id: 2, track_ids: [16, 17, 18])
f6 = open('https://listener-aa-seeds.s3.us-east-2.amazonaws.com/playlist+covers/pc6.jpg')
p6.cover_art.attach(io: f6, filename: 'pc6.jpg')

