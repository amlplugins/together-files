/**
 * @amlplugins/together-files
 *
 * Thin namespaced re-export of the native together-ai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Together Files — upload, list, retrieve files for Batch jobs and Fine-Tuning datasets.
 */

import * as _sdk from "together-ai";
export * from "together-ai";
export { _sdk as sdk };
export default _sdk;
