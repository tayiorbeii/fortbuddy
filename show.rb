class Show
	def initialize(artist, venue, time, media)
		@artist = artist
		@venue = venue
		@time = time
		@media = media
	end

	attr_reader :artist, :venue, :time, :media
end