import mongojs from 'mongojs';
import colors from 'colors';

/*Configuro la base de datos.
mongojs('nombreDB', [Arreglo de tablas de la db])
*/
const db = mongojs('DBMovies', [
    'movies'
]);

module.exports = (app) => {
    app.get('/movies', (req, res) => {
        //Consulta a la db mongoDB
        db.movies.find((err, movies) => {
            res.json({
                movies
            });
        });
        console.log('Sending...'.green);
    });

    app.post('/movies', (req, res) => {
        let newMovie = req.body;

        db.movies.insert(newMovie, (err, movie) => {
            res.json({
                movie
            });
        });
        console.log('Receiving...'.cyan);        
    });

    app.put('/movies/:id', (req, res) => {
        let updateMovie = req.body;

        db.movies.update(
            {_id: mongojs.ObjectId(req.params.id)},
            updateMovie,
            {},
            (err, response) => {
                res.json({
                    response
                });
            }
        );
        console.log('Updating...'.magenta);
    });

    app.delete('/movies/:id', (req, res) => {
        db.movies.remove(
            {_id: mongojs.ObjectId(req.params.id)},
            (err, response) => {
                res.json({
                    response
                });
            }
            );
        console.log('Deleting...'.red);
    });
}