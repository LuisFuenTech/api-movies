module.exports = (app) => {
    app.listen(app.get('port'), () => {
        console.log(`Server working on ${app.get('port')}`.yellow);
    });
}