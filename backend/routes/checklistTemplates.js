const express = require('express');
const router = express.Router();
const checklistTemplateController = require('../controllers/checklistTemplateController');
const { verifyToken, isAdmin, isSupervisor } = require('../middlewares/auth');

// GET all templates
router.get('/', verifyToken, [isAdmin, isSupervisor], checklistTemplateController.getAllTemplates);

// GET template by ID
router.get('/:id', verifyToken, [isAdmin, isSupervisor], checklistTemplateController.getTemplateById);

// CREATE new template
router.post('/', verifyToken, [isAdmin, isSupervisor], checklistTemplateController.createTemplate);

// UPDATE template
router.put('/:id', verifyToken, [isAdmin, isSupervisor], checklistTemplateController.updateTemplate);

// DELETE template
router.delete('/:id', verifyToken, [isAdmin, isSupervisor], checklistTemplateController.deleteTemplate);

module.exports = router;
