const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.checkID = (req, res, next) => {
    if(+req.params.id > tours.length - 1){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    next();
}
exports.checkTour = (req, res, next) => {
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next()
}
exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    })
}
exports.getTour = (req, res) => {
    const id = +req.params.id,
          tour = tours.find(el => el.id === id);


    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
}
exports.createTour = (req, res) => {
    const newId = tours.length,
          newTour = Object.assign({id: newId}, req.body);
    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
    })
    })
}
exports.updateTour = (req, res) => {
    

    res.status(200).json({
        status: 'success',
        data:{
            tour: '<Updated tour here...>'
        }
    })
}
exports.deleteTour = (req, res) => {
    

    res.status(204).json({
        status: 'success',
        data: null
    })
}


