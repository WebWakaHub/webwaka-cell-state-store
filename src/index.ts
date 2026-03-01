/**
 * StateStore — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { RecordStoreOrchestrator } from "@webwaka/organelle-record-store";
import { AuditLoggerOrchestrator } from "@webwaka/organelle-audit-logger";

export { RecordStoreOrchestrator } from '@webwaka/organelle-record-store';
export { AuditLoggerOrchestrator } from '@webwaka/organelle-audit-logger';

/**
 * StateStore Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class StateStoreComposition {
  private recordStoreOrchestrator: RecordStoreOrchestrator;
  private auditLoggerOrchestrator: AuditLoggerOrchestrator;

  constructor() {
    this.recordStoreOrchestrator = new RecordStoreOrchestrator();
    this.auditLoggerOrchestrator = new AuditLoggerOrchestrator();
  }
}

export * from "./types";
