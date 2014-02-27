class Show
	def initialize(artist, venue, time, media)
		@artist = artist
		@venue = venue
		@time = time
		@media = media
	end

	attr_reader :artist, :venue, :time, :media

	def to_hash
		hash = {}
		instance_variables.each {|var| hash[var.to_s.delete("@")] = instance_variable_get(var) }
		hash
	end
end