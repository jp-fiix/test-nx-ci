export enum TrackingEvents {
  UPDATE_EQUIPMENT = 'UpdateEquipment',
  CREATE_EQUIPMENT = 'CreateEquipment',
  DELETE_EQUIPMENT = 'DeleteEquipment',
  UPDATE_EQUIPMENT_STATUS = 'EquipmentStatusChanged',
  BULK_DELETE_EQUIPMENT = 'BulkDeleteEquipment',

  START_EQUIPMENT_IMPORT = 'Start Equipment Import',
  CANCEL_EQUIPMENT_IMPORT = 'Cancel Equipment Import',
  FINISH_EQUIPMENT_IMPORT_SUBMIT = 'Finish Equipment Import Submit',

  START_EQUIPMENT_BULK_UPDATE = 'Start Equipment Bulk Update',
  CANCEL_EQUIPMENT_BULK_UPDATE = 'Cancel Equipment Bulk Update',
  FINISH_EQUIPMENT_BULK_UPDATE_SUBMIT = 'Finish Equipment Bulk Update Submit',

  CREATE_WARRANTY = 'CreateWarranty',

  START_WARRANTY_IMPORT = 'Start Warranty Import',
  CANCEL_WARRANTY_IMPORT = 'Cancel Warranty Import',
  FINISH_WARRANTY_IMPORT_SUBMIT = 'Finish Warranty Import Submit',
  FINISH_WARRANTY_IMPORT = 'Finish Warranty Import',

  CREATE_EQUIPMENT_BUSINESS = 'Create Equipment Business',

  FILTER_OPENED = 'EquipmentFiltersOpened',
  FILTER_CLOSED = 'EquipmentFiltersClosed',
  FILTER_APPLIED = 'EquipmentFilterApplied',
  FILTER_CREATE = 'EquipmentFilterCreate',
  FILTER_SAVED = 'EquipmentFilterSaved',

  STATUS_LOG_ENTRY_DELETED = 'EquipmentStatusLogEntryDeleted',

  CATEGORIES_OPENED = 'EquipmentCategoriesOpened',
  CATEGORIES_CLOSED = 'EquipmentCategoriesClosed',
  CATEGORIES_CREATE_BUTTON_CLICKED = 'EquipmentCategoriesCreateButtonClicked',
  CATEGORY_CREATED = 'EquipmentCategoriesCreated',
  CATEGORY_UPDATED = 'EquipmentCategoriesUpdated',
  CATEGORY_DELETED = 'EquipmentCategoriesDeleted',

  METER_DELETED = 'Delete Equipment Meter',
  METER_CREATED = 'Create Equipment Meter',
  METER_UPDATED = 'Update Equipment Meter',

  CREATE_METER_READING = 'Create Equipment Meter Reading',

  START_PARTS_BOM_SUBMIT = 'Start Parts & BOM Submit',
  FINISH_PARTS_BOM_SUBMIT = 'Finish Parts & BOM Submit',

  FINISH_V5_ASSET_CRITICALITY_SUBMIT = 'Finish v5 Asset Criticality Submit',

  FINISH_V5_EQUIPMENT_BULK_UPDATE_SUBMIT = 'Finish v5 Equipment Bulk Update Submit',
  FINISH_V6_EQUIPMENT_EVENT_LOGGED = 'Finish v6 Equipment Event Logged',
}
