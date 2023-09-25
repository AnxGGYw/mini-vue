import {
  mutableHandlers,
  readonlyHandlers,
  shallowReadonlyHandlers
} from './baseHandles';

export const enum ReactiveFlags {
  IS_REACTIVE = '__v_isReactive',
  IS_READONLY = '__v_isReadonly'
}

export function reactive(raw: any) {
  return createActiveObject(raw, mutableHandlers);
}

export function readonly(raw: any) {
  return createActiveObject(raw, readonlyHandlers);
}

export function shallowReadonly(raw: any) {
  return createActiveObject(raw, shallowReadonlyHandlers);
}

export function isReactive(value: any) {
  return !!value[ReactiveFlags.IS_REACTIVE];
}

export function isReadonly(value: any) {
  return !!value[ReactiveFlags.IS_READONLY];
}

function createActiveObject(raw: any, baseHandles: any) {
  return new Proxy(raw, baseHandles);
}
