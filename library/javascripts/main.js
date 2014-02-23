/**
 * Main
 * ========================================================================
 * main.js
 * @version   2.1 | April 27th 2013
 * @package   HTML Project Kickstarter
 * @author    Beau Charman | @beaucharman | http://www.beaucharman.me
 * @link      https://github.com/beaucharman/HTML-Project-Kickstarter
 * @license   MIT License
 */

// jQuery No Conflict. To prevent third party plugins from conflicting with
// your jQuery, simply use the following anonymous function:

;(function ($) {

	//http://jelled.com/instagram/lookup-user-id
    var feed = new Instafeed({
        clientId: '91b436e4dc99488681146c25e13fcc68',
        accessToken: 'e6b12d77f85240828c1e2d6631d72ec6',
        userId: 8385790,
        get: 'user'
    });
    feed.run();


})(jQuery);