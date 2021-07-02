const { request, response } = require('express');
const { client } = require('../database/config');
const Hours = require('../models/hours');

const hoursGet = async(req = request , res = response) => {
    const [ total, hours ] = await Promise.all([
        Hours.countDocuments({}),
        Hours.find({})
    ]);

    res.json({
        total,
        hours
    });
}

const hoursGetRegister = async(req = request , res = response) => {
    const { id } = req.params;
    const hour  = await Hours.findById(id);

    res.json({
        hour
    });
}

const hoursPutRegister = async(req = request , res = response) => {
    const { id } = req.params;
    const body = req.body;
    let hour  = await Hours.findByIdAndUpdate(id, body);
    hour  = await Hours.findById(id);

    res.json({
        hour
    });
}

const hoursDeleteRegister = async(req = request , res = response) => {
    const { id } = req.params;
    const body = req.body;
    let hour  = await Hours.findByIdAndDelete(id);

    res.json({
        hour
    });
}

const hoursPost = async(req = request, res = response) => {

    const body = req.body;
    const hour = new Hours( body );
    await hour.save();
    res.json({
        hour
    })
}

module.exports = {
    hoursGet,
    hoursGetRegister,
    hoursPost,
    hoursPutRegister,
    hoursDeleteRegister,
}