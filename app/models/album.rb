# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  track_ids  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    validates :title, :artist_id, presence: true

    has_one_attached :cover_art

    belongs_to :artist
    has_many :tracks
end
