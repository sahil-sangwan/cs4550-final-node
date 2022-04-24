import * as routeTileDao from "../routeTileDAO.js";

const createRoute = async (req, res) => {
    const newRoute = req.body;
    const insertedRoute = await routeTileDao.createRoute(newRoute);
    res.json(insertedRoute);
}
const findAllRoutes = async (req, res) => {
    const routes = await routeTileDao.findAllRoutes()
    res.json(routes);
}
const updateRoute = async (req, res) => {
    const routeIdToUpdate = req.params.rid;
    const updatedRoute = req.body;
    const status = await routeTileDao.updateRoute(routeIdToUpdate, updatedRoute);
    res.send(status);
}
const deleteRoute = async (req, res) => {
    const routeIdToDelete = req.params.rid;
    const status = await routeTileDao.deleteRoute(routeIdToDelete);
    res.send(status);
}
export default (app) => {
    app.post('/api/tuits', createRoute);
    app.get('/api/tuits', findAllRoutes);
    app.put('/api/tuits/:tid', updateRoute);
    app.delete('/api/tuits/:tid', deleteRoute);
}