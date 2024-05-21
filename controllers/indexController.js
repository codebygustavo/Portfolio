module.exports = class IndexController {
    static home(req, res) {
        const router = "../pages/home.ejs";
        res.render("layouts/main", { router: router })
    }
    static portfolio(req, res) {
        const router = "../pages/portfolio.ejs";
        res.render("layouts/main", { router: router })
    }
}