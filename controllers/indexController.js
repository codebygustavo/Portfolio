async function fetchForPortfolio() {
    const serverUrl = process.env.SERVER_URL || 'http://localhost:3000';

    const repositoriesForWorks = await fetch(`${serverUrl}/data/forPortfolio`)
    return repositoriesForWorks.json();
}

module.exports = class IndexController {
    static home(req, res) {
        const router = "../pages/home.ejs";
        res.render("layouts/main", { router: router })
    }
    static async portfolio(req, res) {
        const router = "../pages/portfolio.ejs";
        try {
            const repositoriesForGitHub = await fetch(`https://api.github.com/users/codebygustavo/repos`);
            const repositories = await repositoriesForGitHub.json();
            const count = repositories.length


            const works = await fetchForPortfolio();

            return res.render("layouts/main", { router: router, allWorks: count, works: works })
        } catch (error) {
            console.error("Erro ao buscar repositórios:", error);
            return 0;
        }
    }
    static async work(req, res) {
        const router = "../pages/work.ejs";
        try {
            const id = req.params.id;

            const works = await fetchForPortfolio();
            const work = works.filter(work => work.id === parseInt(id));

            return res.render("layouts/main", { router: router, work: work[0] })
        } catch (error) {
            console.error("Erro ao buscar repositórios:", error);
            return 0;
        }
    }
}