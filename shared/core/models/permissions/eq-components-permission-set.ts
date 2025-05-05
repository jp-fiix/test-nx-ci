import { EquipmentPermissionModel } from './equipment-permission-model';
import { EquipmentComponentsApiPermission } from './eq-components-permission.enum';

export enum EquipmentComponentsPermission {
  VIEW_CRITICALITY_FEATURE = 'VIEW_CRITICALITY_FEATURE',
  VIEW_BULK_UPDATE_FEATURE = 'VIEW_BULK_UPDATE_FEATURE',
}

export const equipmentComponentsPermissionSet: { [key in EquipmentComponentsPermission]: EquipmentPermissionModel } = {
  VIEW_CRITICALITY_FEATURE: {
    permissions: [EquipmentComponentsApiPermission.CRITICALITY],
  },
  VIEW_BULK_UPDATE_FEATURE: {
    permissions: [EquipmentComponentsApiPermission.BULK_UPDATE],
  },
};
