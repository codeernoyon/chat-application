// get login page
function getUsers(req, res, next) {
  res.render("users", {
    title: "User -chat application",
  });
}

module.exports = {
  getUsers,
};
