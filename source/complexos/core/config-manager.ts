import { pathOr, split, assocPath } from "ramda";

export function createConfigManager(osconfig: Record<string, any>) {
  const splitDot = split('.');
  const get = (path, defaultValue) => pathOr(defaultValue, splitDot(path), osconfig);

  const set = (path, value) => assocPath(splitDot(path), value, osconfig);
  const update = (newconfig) => { osconfig = newconfig; };
  return { get, set, dump: () => osconfig, update };
}
