
var wednesday = [
    {
        artist: "Splinter ",
        venue: "El Korah Shrine",
        time: "7:00pm - 7:30pm",
        media: []
    },
    {
        artist: "The Melting ",
        venue: "El Korah Shrine",
        time: "7:45pm - 8:15pm",
        media: []
    },
    {
        artist: "MC Shake ",
        venue: "El Korah Shrine",
        time: "8:30pm - 9:00pm",
        media: [
            "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132077608&amp;color=788b78&amp;auto_play=false&amp;show_artwork=false\"></iframe>"
        ]
    },
    {
        artist: "El Dopamine ",
        venue: "El Korah Shrine",
        time: "9:15pm - 9:45pm",
        media: [
            "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/78176697&amp;color=788b78&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=false\"></iframe>"
        ]
    },
    {
        artist: "Haggis ",
        venue: "El Korah Shrine",
        time: "10:00pm - 10:30pm",
        media: [
            "<iframe width=\"100%\" height=\"200\" src=\"http://www.youtube.com/embed/srbJ35nOb7c?rel=0\" frameborder=\"0\" allowfullscreen></iframe>"
        ]
    },
    {
        artist: "Graveltruck ",
        venue: "El Korah Shrine",
        time: "10:45pm - 11:15pm",
        media: [
            "<iframe width=\"100%\" height=\"350\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3477797&amp;color=788b78&amp;auto_play=false&amp;show_artwork=false\"></iframe>",
            "<iframe width=\"100%\" height=\"200\" src=\"http://www.youtube.com/embed/nBUPV7X5vSw?rel=0\" frameborder=\"0\" allowfullscreen></iframe>"
        ]
    },
    {
        artist: "Caustic Resin ",
        venue: "El Korah Shrine",
        time: "11:30pm - 12:30am",
        media: [
            "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/32337501&amp;color=788b78&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=false\"></iframe>",
            "<iframe width=\"100%\" height=\"200\" src=\"http://www.youtube.com/embed/A48Hgxt1YN8\" frameborder=\"0\" allowfullscreen></iframe>",
            "<iframe width=\"100%\" height=\"200\" src=\"http://www.youtube.com/embed/vhZjfPFKcrA\" frameborder=\"0\" allowfullscreen></iframe>"
        ]
    }
];

$(document).ready(function(){
    var showTemplate = _.template($("#show-template").html());
    var resultingHtml = showTemplate({shows : wednesday});

    $(".show-list").html(resultingHtml);
    $('.show').on('click', 'button.toggle', function(ev) {
        ev.preventDefault();
        
        var $this = $(this);
        
        $this.text($this.text() === 'Show Media' ? 'Hide Media' : 'Show Media');
        $this.parents('.show').find('.song').toggle();
    });

});