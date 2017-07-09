/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  findOne: function (req, res) {
    User.findOne({
      name: req.param('name')
    }).exec(function (err, user) {
        if (err) return res.negotiate(err);

        //subscribe to changes to this user record
        // User.subscribe(req, user.id);

      if (!user) {
        return res.notFound();
      }

      Emoji.find({
        owner: user.id
      }).exec(function (err, emojis) {
        if (err) return res.negotiate(err);

        return res.view('profile', { user: user, emojis: emojis});
      });

    });
  }

};

