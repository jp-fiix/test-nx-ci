import type { IconName } from '@fiix/angular-components/lib/fiix-icon/icons/fiix-icon.set';

export interface ErrorPageDefinition {
  route: string;
  iconName: IconName;
  title: string;
  description: string;
  showRefreshButton: boolean;
  showBackButton: boolean;
  refreshButtonCallback?: () => void;
}
