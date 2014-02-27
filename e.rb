require 'mechanize'
require 'nokogiri'
require 'pp'
require 'json'
require_relative 'show'

f = File.open("wednesday.html")
doc = Nokogiri::HTML(f)
f.close

agent = Mechanize.new
link_rows = doc.search("tr")

shows = []
link_rows.each do |row|
	if (!row.css('.title > a').children.text.include?("FILM FEST")) and
		(!row.css('.title > a').children.text.include?("HACKFORT")) and
		(!row.css('.title > a').children.text.include?("YOGAFORT")) and
		(!row.css('.title > a').children.text.include?("STORYFORT")) and
		(!row.css('.title > a').children.text.include?("[COMEDY]"))


		time = row.css('.time').text.gsub(" ", "").delete("\n").gsub(/\302\240/,"")
		artist = row.css('.title > a').children[0].text.gsub(/\302\240/,"")
		venue = row.css('.title > a').children[1].text.gsub(/\302\240/,"")

		media = []
		# link = row.css('.sched-description > a')[0].text		
		if row.at_css('.sched-description > a') != nil
			link = row.css('.sched-description > a')[0].text.gsub(/\302\240/,"")

			artist_page = agent.get(link)
			
			if artist_page.search(".one-third.last > p > iframe") != nil
				#html-ize the iframes
				iframes = artist_page.search(".one-third.last > p > iframe").to_a
				iframes.each do |x|
					media << x.to_html
				end

				# media << artist_page.search(".one-third.last > p > iframe").to_a
			
			end
		end
		# puts "#{time} - #{artist} - #{venue} - #{link}"
		
		show = Show.new(artist, venue, time, media).to_hash

		shows << show
	end
end

open('wednesday.json', 'a') do |file|
	shows.each do |show|
		show.to_json
		file << show
	end
end

# shows.each do |x|
# 	pp x
# end