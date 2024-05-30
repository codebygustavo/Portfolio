module.exports = class DataController {
    static forPortfolio(req, res) {
        // types
        // 1 = full stack
        // 2 = front end
        // 3 = back end
        const data = [
            {
                id: 1,
                type: 1,
                name: "My day task",
                desc: "To-Do list minimalista com node.js",
                img: "/source/works/mydaytask.png",
                path: "https://github.com/codebygustavo/my-day-task",
                language: "Node.js, Handlebars e Sequelize",
                Focused: "Logica de Programação e Design"
            },
            {
                id: 2,
                type: 2,
                name: "Pokemon viewer",
                desc: "Visualizador de Pokemons com a api pokeapi.",
                img: "/source/works/pokemonviewer.png",
                path: "https://github.com/codebygustavo/pokemon-viewer",
                language: "TypeScript, HTML e CSS",
                Focused: "Logica de Programação"
            },
            {
                id: 3,
                type: 2,
                name: "GitHub viewer",
                desc: "Visualizador de usuário com a api do Github.",
                img: "/source/works/githubviewer.png",
                path: "https://github.com/codebygustavo/github-viewer",
                language: "TypeScript, HTML e CSS",
                Focused: "Logica de Programação"
            },
            {
                id: 4,
                type: 1,
                name: "Toughts, Blog",
                desc: "Projeto Full-stack aonde simula uma rede social de postagens.",
                img: "/source/works/toughts.png",
                path: "https://github.com/codebygustavo/toughts-blog",
                language: "Node.js, Handlebars e Sequelize",
                Focused: "Aprendizado de tecnologias"
            },
            {
                id: 5,
                type: 3,
                name: "Indicador de Status",
                desc: "biblioteca que retorna o status de um Link.",
                img: "/source/works/status.png",
                path: "https://github.com/codebygustavo/indicador-de-status",
                language: "Node.js",
                Focused: "Logica de Programação"
            }
        ];

        res.json(data);
    }
}