const express = require('express');
const router = express.Router();

// Import routes
const divisionRoutes = require('./division');
const userRoutes = require('./user');
const floorRoutes = require('./floor');
const assetTypeRoutes = require('./asset_type');
const statusRoutes = require('./status');
const assetRoutes = require('./asset');
const checklistTemplateRoutes = require('./checklist_template');
const checklistTemplateItemRoutes = require('./checklist_template_item');
const checklistRoutes = require('./checklist');
const checklistItemRoutes = require('./checklist_item');
const assetMaintenanceHistoryRoutes = require('./asset_maintenance_history');
const auditLogRoutes = require('./audit_log');

// Gunakan routes
router.use('/divisions', divisionRoutes);
router.use('/users', userRoutes);
router.use('/floors', floorRoutes);
router.use('/asset-types', assetTypeRoutes);
router.use('/statuses', statusRoutes);
router.use('/assets', assetRoutes);
router.use('/checklist-templates', checklistTemplateRoutes);
router.use('/checklist-template-items', checklistTemplateItemRoutes);
router.use('/checklists', checklistRoutes);
router.use('/checklist-items', checklistItemRoutes);
router.use('/asset-maintenance-history', assetMaintenanceHistoryRoutes);
router.use('/audit-logs', auditLogRoutes);

module.exports = router;
