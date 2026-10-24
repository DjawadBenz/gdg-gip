const express = require("express");
const router = express.Router();
const { lost } = require("../models/report");

// POST /lost/add
router.post("/add", async (req, res) => {
    try {
        const { name, itemName, itemColor } = req.body;

        const rep = await lost.create({
            name,
            itemName,
            itemColor,
            type: "lost"
        });

        res.status(201).json({
            msg: "the report is registred succesfully",
            byReport: rep
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
});

// GET all lost reports
router.get("/", async (req, res) => {
    try {
        const reports = await lost.find();

        res.status(200).json({
            success: true,
            reports
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
});

// GET lost report by itemName or add optional itemColor
router.get("/:itemName{/:itemColor}", async (req, res) => {
    try {
        const filter = { itemName: req.params.itemName };

        if (req.params.itemColor) {
            filter.itemColor = req.params.itemColor;
        }

        const report = await lost.findOne(filter);

        if (!report) {
            return res.status(404).json({
                success: false,
                msg: "Report not found"
            });
        }

        res.status(200).json({
            success: true,
            report
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
});

// mark lost item as recovered
router.put("/:itemName{/:itemColor}/recovered", async (req, res) => {
    try {
        const filter = { itemName: req.params.itemName };

        if (req.params.itemColor) {
            filter.itemColor = req.params.itemColor;
        }

        const report = await lost.findOneAndUpdate(filter, { type: "recovered" }, { new: true });

        if (!report) {
            return res.status(404).json({
                success: false,
                msg: "Report not found"
            });
        }

        res.status(200).json({
            success: true,
            msg: "item marked as recovered",
            report
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
});

// PUT update lost report by itemName (and optional itemColor)
router.put("/:itemName{/:itemColor}", async (req, res) => {
    try {
        const filter = { itemName: req.params.itemName };

        if (req.params.itemColor) {
            filter.itemColor = req.params.itemColor;
        }

        const report = await lost.findOneAndUpdate(filter, req.body, { new: true });

        if (!report) {
            return res.status(404).json({
                success: false,
                msg: "Report not found"
            });
        }

        res.status(200).json({
            success: true,
            msg: "Report updated successfully",
            report
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
});

module.exports = router;
