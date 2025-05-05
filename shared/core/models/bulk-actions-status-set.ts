import { BulkActionsStatusIcon } from './bulk-actions-status-icon';
import { BulkActionsStatusTooltip } from './bulk-actions-status-tooltip';

export interface BulkActionStatusButton {
  tooltip: BulkActionsStatusTooltip;
  icon: BulkActionsStatusIcon;
}

export const bulkActionsStatusSet: { [key: string]: BulkActionStatusButton } = {
  NEUTRAL: {
    tooltip: BulkActionsStatusTooltip.NEUTRAL,
    icon: BulkActionsStatusIcon.NEUTRAL,
  },
  PROCESSING: {
    tooltip: BulkActionsStatusTooltip.PROCESSING,
    icon: BulkActionsStatusIcon.PROCESSING,
  },
  PROCESSING_WITH_ERRORS: {
    tooltip: BulkActionsStatusTooltip.PROCESSING_WITH_ERRORS,
    icon: BulkActionsStatusIcon.PROCESSING_WITH_ERRORS,
  },
  COMPLETE_WITH_ERRORS: {
    tooltip: BulkActionsStatusTooltip.COMPLETE_WITH_ERRORS,
    icon: BulkActionsStatusIcon.COMPLETE_WITH_ERRORS,
  },
};
