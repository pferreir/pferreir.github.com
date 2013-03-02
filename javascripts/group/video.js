$(function() {
    var video_systems = {
        youtube: _.template('<iframe id="video_iframe" width="640" height="480" frameborder="0" allowfullscreen src="http://www.youtube.com/embed/<%= video_id %>"></iframe>'),
        cern: _.template('<object type="application/x-shockwave-flash" data="http://cdsweb.cern.ch/mediaplayer.swf" width="640" height="360" bgcolor="#000000" id="mediaplayer1" name="mediaplayer1" tabindex="0"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="seamlesstabbing" value="true"><param name="wmode" value="opaque"><param name="flashvars" value="netstreambasepath=http%3A%2F%2Fcdsweb.cern.ch%2Frecord%2F1460562%3Fln%3Den&amp;id=mediaplayer1&amp;flashplayer=http%3A%2F%2Fcdsweb.cern.ch%2Fmediaplayer.swf&amp;stretching=exactfit&amp;file=Video%2FPublic%2FConferences%2F2012%2F<%= video_id %>%2F<%= video_id %>-0600-kbps-maxH-360-25-fps-audio-128-kbps-48-kHz-stereo.mp4&amp;image=https%3A%2F%2Fmediastream.cern.ch%2FMediaArchive%2FVideo%2FPublic%2FConferences%2F2012%2F<%= video_id %>%2F<%= video_id %>-posterframe-640x360-at-10-percent.jpg&amp;streamer=rtmp%3A%2F%2Fwowza.cern.ch%3A1935%2Fvod&amp;provider=rtmp&amp;controlbar.position=over"></object>')
    };

    $('.video').click(function() {
        var video_id = $(this).data('code');
        var system = $(this).data('system');

        $('#modal-video .modal-body').html(video_systems[system]({
            video_id: video_id
        }));
        $('#modal-video').modal('show');
        return false;
    });

    $('#modal-video').on('hide', function() {
        $(this).find('.modal-body').html('');
    });
});
