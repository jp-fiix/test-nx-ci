import { EquipmentPermissionModel } from '../permissions/equipment-permission-model';

export enum AggregatePermission {
  MANAGE = 'MANAGE',
  DELETE = 'DELETE',
}

export enum EquipmentWebappApiPermission {
  MANAGE_EQUIPMENT = 'MANAGE_EQUIPMENT',
  LIMITED_MANAGE_EQUIPMENT = 'LIMITED_MANAGE_EQUIPMENT',
  MANAGE_METER = 'MANAGE_METER',
  MANAGE_SETTINGS = 'MANAGE_SETTINGS',
  DELETE_EQUIPMENT = 'DELETE_EQUIPMENT',
  REMOVE_METER_ASSOCIATION = 'REMOVE_METER_ASSOCIATION',
  DELETE_METER = 'DELETE_METER',
  DELETE_METER_READING = 'DELETE_METER_READING',
  RECORD_METER_READING = 'RECORD_METER_READING',
  DELETE_STATUS_LOG_ENTRY = 'DELETE_STATUS_LOG_ENTRY',
  VIEW_ONLY_ACCESS = 'VIEW_ONLY_ACCESS',
  DELETE_LOGGED_EVENT = 'DELETE_LOGGED_EVENT',
}

export enum NamespacedApiPermission {
  MANAGE_EQUIPMENT = 'eq-mgmt:MANAGE_EQUIPMENT',
  LIMITED_MANAGE_EQUIPMENT = 'eq-mgmt:LIMITED_MANAGE_EQUIPMENT',
  MANAGE_METER = 'eq-mgmt:MANAGE_METER',
  MANAGE_SETTINGS = 'eq-mgmt:MANAGE_SETTINGS',
  DELETE_EQUIPMENT = 'eq-mgmt:DELETE_EQUIPMENT',
  REMOVE_METER_ASSOCIATION = 'eq-mgmt:REMOVE_METER_ASSOCIATION',
  DELETE_METER = 'eq-mgmt:DELETE_METER',
  DELETE_METER_READING = 'eq-mgmt:DELETE_METER_READING',
  RECORD_METER_READING = 'eq-mgmt:RECORD_METER_READING',
  DELETE_STATUS_LOG_ENTRY = 'eq-mgmt:DELETE_STATUS_LOG_ENTRY',
  VIEW_ONLY_ACCESS = 'eq-mgmt:VIEW_ONLY_ACCESS',
  DELETE_LOGGED_EVENT = 'eq-mgmt:DELETE_LOGGED_EVENT',
}

export enum EquipmentWebappPermission {
  VIEW_EQUIPMENT_LIST = 'VIEW_EQUIPMENT_LIST',
  VIEW_EQUIPMENT_DETAIL = 'VIEW_EQUIPMENT_DETAIL',
  CREATE_EQUIPMENT = 'CREATE_EQUIPMENT',
  IMPORT_EQUIPMENT = 'IMPORT_EQUIPMENT',
  EDIT_EQUIPMENT = 'EDIT_EQUIPMENT',
  BULK_EDIT_EQUIPMENT = 'BULK_EDIT_EQUIPMENT',
  DELETE_EQUIPMENT = 'DELETE_EQUIPMENT',
  VIEW_METERS_LIST = 'VIEW_METERS_LIST',
  MANAGE_SETTINGS = 'MANAGE_SETTINGS',
  EDIT_EQUIPMENT_STATUS = 'EDIT_EQUIPMENT_STATUS',
  DELETE_STATUS_LOG_ENTRY = 'DELETE_STATUS_LOG_ENTRY',
  CREATE_METER = 'CREATE_METER',
  EDIT_METER = 'EDIT_METER',
  ADD_METER_ASSOCIATION = 'ADD_METER_ASSOCIATION',
  RECORD_METER_READING = 'RECORD_METER_READING',
  DELETE_METER_READING = 'DELETE_METER_READING',
  DELETE_METER = 'DELETE_METER',
  REMOVE_METER_ASSOCIATION = 'REMOVE_METER_ASSOCIATION',
  CREATE_WARRANTY = 'CREATE_WARRANTY',
  EDIT_WARRANTY = 'EDIT_WARRANTY',
  DELETE_WARRANTY = 'DELETE_WARRANTY',
  IMPORT_WARRANTY = 'IMPORT_WARRANTY',
  ADD_BUSINESS_ASSOCIATION = 'ADD_BUSINESS_ASSOCIATION',
  EDIT_BUSINESS_ASSOCIATION = 'EDIT_BUSINESS_ASSOCIATION',
  REMOVE_BUSINESS_ASSOCIATION = 'REMOVE_BUSINESS_ASSOCIATION',
  ADD_PARTS_AND_BOM_ASSOCIATION = 'ADD_PARTS_AND_BOM_ASSOCIATION',
  REMOVE_PARTS_AND_BOM_ASSOCIATION = 'REMOVE_PARTS_AND_BOM_ASSOCIATION',
  ADD_PART_QUANTITY = 'ADD_PART_QUANTITY',
  LOG_EVENT = 'LOG_EVENT',
  DELETE_LOGGED_EVENT = 'DELETE_LOGGED_EVENT',
  EDIT_EVENT_LOG = 'EDIT_EVENT_LOG',
}

export const equipmentPermissionSet: { [key in EquipmentWebappPermission]: EquipmentPermissionModel } = {
  VIEW_EQUIPMENT_LIST: {
    permissions: [
      EquipmentWebappApiPermission.VIEW_ONLY_ACCESS,
      EquipmentWebappApiPermission.MANAGE_EQUIPMENT,
      EquipmentWebappApiPermission.LIMITED_MANAGE_EQUIPMENT,
      EquipmentWebappApiPermission.DELETE_EQUIPMENT,
      EquipmentWebappApiPermission.MANAGE_SETTINGS,
      EquipmentWebappApiPermission.DELETE_STATUS_LOG_ENTRY,
      EquipmentWebappApiPermission.REMOVE_METER_ASSOCIATION,
      EquipmentWebappApiPermission.DELETE_METER_READING,
      EquipmentWebappApiPermission.RECORD_METER_READING,
    ],
  },
  VIEW_EQUIPMENT_DETAIL: {
    permissions: [
      EquipmentWebappApiPermission.VIEW_ONLY_ACCESS,
      EquipmentWebappApiPermission.MANAGE_EQUIPMENT,
      EquipmentWebappApiPermission.LIMITED_MANAGE_EQUIPMENT,
      EquipmentWebappApiPermission.DELETE_EQUIPMENT,
      EquipmentWebappApiPermission.MANAGE_SETTINGS,
      EquipmentWebappApiPermission.DELETE_STATUS_LOG_ENTRY,
      EquipmentWebappApiPermission.REMOVE_METER_ASSOCIATION,
      EquipmentWebappApiPermission.DELETE_METER_READING,
      EquipmentWebappApiPermission.RECORD_METER_READING,
    ],
  },
  CREATE_EQUIPMENT: { permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT] },
  IMPORT_EQUIPMENT: { permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT] },
  BULK_EDIT_EQUIPMENT: { permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT] },
  EDIT_EQUIPMENT: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT, EquipmentWebappApiPermission.LIMITED_MANAGE_EQUIPMENT],
  },
  VIEW_METERS_LIST: {
    permissions: [
      EquipmentWebappApiPermission.MANAGE_METER,
      EquipmentWebappApiPermission.DELETE_METER,
      EquipmentWebappApiPermission.DELETE_METER_READING,
    ],
  },
  MANAGE_SETTINGS: { permissions: [EquipmentWebappApiPermission.MANAGE_SETTINGS] },
  DELETE_EQUIPMENT: { permissions: [EquipmentWebappApiPermission.DELETE_EQUIPMENT] },
  EDIT_EQUIPMENT_STATUS: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT, EquipmentWebappApiPermission.LIMITED_MANAGE_EQUIPMENT],
  },
  DELETE_STATUS_LOG_ENTRY: {
    permissions: [EquipmentWebappApiPermission.DELETE_STATUS_LOG_ENTRY],
  },
  CREATE_METER: {
    permissions: [EquipmentWebappApiPermission.MANAGE_METER],
  },
  EDIT_METER: {
    permissions: [EquipmentWebappApiPermission.MANAGE_METER],
  },
  ADD_METER_ASSOCIATION: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT, EquipmentWebappApiPermission.LIMITED_MANAGE_EQUIPMENT],
  },
  RECORD_METER_READING: {
    permissions: [EquipmentWebappApiPermission.RECORD_METER_READING],
  },
  DELETE_METER_READING: {
    permissions: [EquipmentWebappApiPermission.DELETE_METER_READING],
  },
  DELETE_METER: {
    permissions: [EquipmentWebappApiPermission.DELETE_METER],
  },
  REMOVE_METER_ASSOCIATION: {
    permissions: [EquipmentWebappApiPermission.REMOVE_METER_ASSOCIATION],
  },
  CREATE_WARRANTY: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT],
  },
  EDIT_WARRANTY: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT],
  },
  DELETE_WARRANTY: {
    permissions: [EquipmentWebappApiPermission.DELETE_EQUIPMENT],
  },
  IMPORT_WARRANTY: { permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT] },
  EDIT_BUSINESS_ASSOCIATION: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT],
  },
  ADD_BUSINESS_ASSOCIATION: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT],
  },
  REMOVE_BUSINESS_ASSOCIATION: {
    permissions: [EquipmentWebappApiPermission.DELETE_EQUIPMENT],
  },
  ADD_PARTS_AND_BOM_ASSOCIATION: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT],
  },
  REMOVE_PARTS_AND_BOM_ASSOCIATION: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT],
  },
  ADD_PART_QUANTITY: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT],
  },
  LOG_EVENT: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT, EquipmentWebappApiPermission.LIMITED_MANAGE_EQUIPMENT],
  },
  DELETE_LOGGED_EVENT: {
    permissions: [EquipmentWebappApiPermission.DELETE_LOGGED_EVENT],
  },
  EDIT_EVENT_LOG: {
    permissions: [EquipmentWebappApiPermission.MANAGE_EQUIPMENT, EquipmentWebappApiPermission.LIMITED_MANAGE_EQUIPMENT],
  },
};
