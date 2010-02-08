# HTML5 custom data attributes jQuery plugin

This plugin simplifies the use of HTML5 custom data attributes in your jQuery code. It adds a function named `.dataAttr()` to the jQuery namespace, which acts as a wrapper for [`jQuery.attr()`](http://api.jquery.com/attr/).

## Example Usage

### HTML

    <p id="foo" data-time="9 AM">…</p>

### jQuery

    // You can perfectly use this:
    $('#foo').attr('data-time'); // '9 AM'
    // But I prefer to do it this way, especially when dealing with a lot of data-*
    $('#foo').dataAttr('time');  // '9 AM'
    // Just like $.attr(), $.dataAttr() can be used as a setter
    $('#foo').dataAttr('time', '3 PM');
    // Computed data-* attribute values are possible as well
    $('p').dataAttr('id', function() {
     return this.id;
    }); // p data-id="foo"

## Useful?

That’s up to you. This plugin isn’t rocket science. Using it won’t save you bytes or anything.

However, it does allow you to write *even more readable code*. Personally, I like to keep custom data attributes separated from other attributes in my code — hence this plugin.

## Credits

_– [Mathias](http://mathiasbynens.be/)_