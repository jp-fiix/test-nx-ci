
import { EquipmentComponentsApiPermission } from './eq-components-permission.enum';
import { AggregatePermission, EquipmentWebappApiPermission, NamespacedApiPermission } from './equipment-permission-set';

export type Permission =
  | AggregatePermission
  | EquipmentWebappApiPermission
  | NamespacedApiPermission
  | EquipmentComponentsApiPermission;
