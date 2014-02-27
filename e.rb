require 'mechanize'
require 'nokogiri'
require_relative 'show'

f = File.open("friday.html")
doc = Nokogiri::HTML(f)
f.close

link_rows = doc.search("tr")

shows = []
link_rows.each do |row|
	if (!row.css('.title > a').children.text.include?("FILM FEST")) and
		(!row.css('.title > a').children.text.include?("HACKFORT")) and
		(!row.css('.title > a').children.text.include?("YOGAFORT")) and
		(!row.css('.title > a').children.text.include?("STORYFORT")) and
		(!row.css('.title > a').children.text.include?("[COMEDY]"))


		time = row.css('.time').text.gsub(" ", "").delete("\n")
		artist = row.css('.title > a').children[0].text
		venue = row.css('.title > a').children[1].text
		# link = row.css('.sched-description > a')[0].text		
		if row.at_css('.sched-description > a') != nil
			link = row.css('.sched-description > a')[0].text
		end
		# puts "#{time} - #{artist} - #{venue} - #{link}"
		show = Show.new(artist, venue, time, link)

		shows << show
	end
end

shows.each do |x|
	puts x.artist
end