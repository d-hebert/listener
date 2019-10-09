# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  track_ids  :integer          not null, is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :title, :author_id, :track_ids, presence: true

    has_one_attached :cover_art

    belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

    def author_name
        return self.author.username
    end

end
