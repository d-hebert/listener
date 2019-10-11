# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  track_ids  :integer          default([]), is an Array
#

class Playlist < ApplicationRecord
    validates :title, :author_id, presence: true

    has_one_attached :cover_art

    belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

    def author_name
        return self.author.username
    end

    def tracks 
        result = []
        Track.all.each do |track|
            result << track if self.track_ids.include?(track.id)
        end
        return result
    end

end
