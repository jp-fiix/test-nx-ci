import { MeterType } from './meter-type';

interface EquipmentAnalyticsTrackingResource {
  code?: string;
  name?: string;
  accountId?: boolean;
  addressDetail?: boolean;
  assignedUserGroupIds?: boolean;
  assignedUserIds?: boolean;
  barcode?: boolean;
  categoryId?: boolean;
  chargeDepartmentId?: boolean;
  criticality?: boolean;
  description?: boolean;
  inheritedAddress?: boolean;
  latitude?: boolean;
  longitude?: boolean;
  make?: boolean;
  model?: boolean;
  notes?: boolean;
  parent?: boolean;
  serialNumber?: boolean;
  status?: boolean;
  unspscCode?: boolean;
}

interface DeleteEquipmentTrackingInformation {
  id?: string;
  name?: string;
  code?: string;
  result?: boolean;
  reason?: string;
}

interface EquipmentStatusChangeTrackingInformation {
  status?: string;
  statusId?: string;
  equipmentName?: string;
  equipmentId?: string;
  reason?: string;
  timeChanged?: string;
}

interface EquipmentWarrantyTrackingInformation {
  warrantyType?: string;
  expiry?: string;
  expiryDelta?: number;
}

interface EquipmentBusinessTrackingInformation {
  equipmentId?: string;
  businessName?: string;
  businessId?: string;
  businessType?: string;
  supplierPartNumber?: string;
  catalogNumber?: string;
}

interface CategoryTrackingInformation {
  categoryName?: string;
  parentName?: string;
  barcodeDetails?: string;
}

interface CategoryDeletedTrackingInformation {
  success?: boolean;
  confirmationMessage?: string;
  categoryName?: string;
  parentName?: string;
}

interface EquipmentImportTrackingInformation {
  totalRows: number;
  totalColumns: number;
  uploadedFile?: boolean;
  duration?: number;
  fields: ImportField[];
  results?: ImportResults;
}

interface EquipmentWarrantyImportTrackingInformation {
  totalRows: number;
  totalColumns: number;
  uploadedFile?: boolean;
  duration?: number;
  fields: ImportField[];
  results?: ImportResults;
}

interface ImportField {
  name: string;
  rowsWithData: number;
  totalErrors: number;
}

interface ImportResults {
  totalSuccess: number;
  totalErrors: number;
}

interface MeterDeletedTrackingInformation {
  maxDelta: number;
  id: string;
  meterTypeCode: MeterType;
  meterUnit: string;
  name: string;
  readingAboveMaxDeltaAllowed: boolean;
  readingCount: number;
  success: boolean;
}

interface MeterTrackingInformation {
  id: string;
  name?: string;
  meterTypeCode?: MeterType;
  meterUnit?: string;
  maxDelta?: string;
  readingAboveMaxDeltaAllowed?: boolean;
  initialMeterReading?: string;
  fieldsUpdated?: string[];
}

interface CreateMeterReadingTrackingInformation {
  id?: string;
  name?: string;
  asset?: string;
  unit?: string;
  reading?: string;
  success?: boolean;
}

enum EquipmentAnalyticsProperties {
  code,
  name,
  accountId,
  addressDetail,
  assignedUserGroupIds,
  assignedUserIds,
  barcode,
  categoryId,
  chargeDepartmentId,
  criticality,
  description,
  inheritedAddress,
  latitude,
  longitude,
  make,
  model,
  notes,
  parent,
  serialNumber,
  status,
  unspscCode,
  purchasedFrom,
  purchasePrice,
  purchasePriceCurrency,
  purchasedOn,
}

interface PartsAndBOMTrackingInformation {
  BOMsAdded: number;
  BOMsRemoved: number;
  partsAdded: number;
  partsRemoved: number;
  partsChanged: number;
}

interface AssetCriticalityTrackingInformation {
  totalEquipment: number;
  score: string;
}

interface EventLogTrackingInformation {
  eventTypeName: string;
  rootCause?: string;
  assetName: string;
}

export {
  EquipmentAnalyticsTrackingResource,
  DeleteEquipmentTrackingInformation,
  EquipmentAnalyticsProperties,
  EquipmentStatusChangeTrackingInformation,
  CategoryTrackingInformation,
  CategoryDeletedTrackingInformation,
  MeterTrackingInformation,
  EquipmentWarrantyTrackingInformation,
  EquipmentImportTrackingInformation,
  MeterDeletedTrackingInformation,
  CreateMeterReadingTrackingInformation,
  EquipmentWarrantyImportTrackingInformation,
  EquipmentBusinessTrackingInformation,
  PartsAndBOMTrackingInformation,
  AssetCriticalityTrackingInformation,
  EventLogTrackingInformation,
};
