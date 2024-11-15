import ArtWorkController from "./ArtWorkController.js"

const artWorkController = new ArtWorkController();

export default (app) => {
    app.get("/test", (req, res)=>{
        res.send("Hello");
    });
    app.get('/artworks/', artWorkController.getAll.bind(artWorkController))
    app.get('/artworks/filter', artWorkController.filter.bind(artWorkController))
    app.post('/artworks/', artWorkController.create.bind(artWorkController))
    app.put('/artworks/:id', artWorkController.update.bind(artWorkController))
    app.delete('/artworks/:id', artWorkController.delete.bind(artWorkController))

}































