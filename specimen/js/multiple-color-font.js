/* 
Multiple color font
Copyright 2012 Eric Schrijver / OSP
http://ospublish.constantvzw.org/workshop/write-me-a-shadow/

Based on colorfont.js:
Copyright 2011 Manufactura Independente (Ana Carvalho & Ricardo Lafuente)
http://manufacturaindependente.com/colorfont/

Licensed under the terms of the WTFPL.
http://sam.zoy.org/wtfpl/

Usage:

In your HTML, for the element that you want to appear in multiple colours, specify an attribute called ‘data-fonts’. The attribute takes a list in JSON format, the elements of which are lists of a font-file and a colour.

For example:

<h2 data-fonts='[["example-fonts/SansGuiltExtrude.otf", "#000"], ["example-fonts/SansGuiltMB.otf","#00039C"]]'>Workshop ERBA Valence 3-4 mai 2012</h2>
*/

$(document).ready(function(){
    $("[data-fonts]").each(function() {
        $(this).css({position:'relative'});
        var fonts = $.parseJSON($(this).attr("data-fonts"));
        var text = $(this).html();
        var html = '&nbsp;';
        $.each(fonts, function(index, fontobject){
            // fontname is fontfile without path and extension:
            var fontfile = fontobject[0];
            var font = fontobject[0].split('/').pop().split('.').slice(0,-1).join('.');
            var colour = fontobject[1];
            html += '<span class="colorfont-overlay" id="' + font + '"style="position: absolute; top:0px; left:0px; right:0px; font-family:' + font + '; color:' + colour + '">' + text + '</span>';
            var fontface = '@font-face {\n';
            fontface += "  font-family: '" + font + "';\n";
            fontface += "  font-weight: normal;\n";
            fontface += "  src: url('" + fontfile + "');\n";
            fontface += "}\n";
            $("body").prepend("<style>" + fontface + "</style>");
        })
        $(this).html(html);
        // http://stackoverflow.com/questions/6060992/element-with-the-max-height-from-a-set-of-elements
        var heights = $(this).children("span").map(function ()
            {
                return $(this).height();
            }).get();
        console.log(heights);
        var maxHeight = Math.max.apply(null, heights);
        console.log(maxHeight);
        $(this).css('height', maxHeight);
    });
});
